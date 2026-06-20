const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const configPath = path.join(rootDir, "scan.config.json");

function readConfig() {
  return JSON.parse(fs.readFileSync(configPath, "utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "-";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = bytes;
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }
  return `${value.toFixed(index === 0 ? 0 : 2)} ${units[index]}`;
}

function escapePipe(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function toRepoPath(filePath) {
  return path.relative(rootDir, filePath).replace(/\\/g, "/");
}

function sortedEntries(dir) {
  try {
    return fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  } catch (error) {
    return [];
  }
}

function scanRoot(root, config) {
  const rootPath = path.resolve(root.path);
  const maxDepth = root.maxDepth ?? config.maxDepth ?? 2;
  const ignoreDirectories = new Set(config.ignoreDirectories || []);
  const stats = {
    name: root.name,
    path: rootPath,
    exists: fs.existsSync(rootPath),
    files: 0,
    directories: 0,
    bytes: 0,
    skippedDirectories: 0,
    errors: 0,
    extensions: new Map(),
    topLevel: [],
    largestFiles: [],
    recentFiles: []
  };

  if (!stats.exists) return stats;

  function pushFile(filePath, entryStats) {
    stats.files += 1;
    stats.bytes += entryStats.size;
    const ext = path.extname(filePath).toLowerCase() || "[no extension]";
    stats.extensions.set(ext, (stats.extensions.get(ext) || 0) + 1);

    const item = {
      path: filePath,
      size: entryStats.size,
      mtime: entryStats.mtime
    };
    stats.largestFiles.push(item);
    stats.recentFiles.push(item);
  }

  function walk(dir, depth) {
    for (const entry of sortedEntries(dir)) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (ignoreDirectories.has(entry.name)) {
          stats.skippedDirectories += 1;
          continue;
        }
        stats.directories += 1;
        if (depth === 0) {
          const info = summarizeTopLevel(fullPath, entry.name);
          stats.topLevel.push(info);
        }
        if (depth < maxDepth) walk(fullPath, depth + 1);
        continue;
      }

      if (!entry.isFile()) continue;
      try {
        pushFile(fullPath, fs.statSync(fullPath));
      } catch (error) {
        stats.errors += 1;
      }
    }
  }

  function summarizeTopLevel(dir, name) {
    let fileCount = 0;
    let dirCount = 0;
    let bytes = 0;
    let newest = 0;

    function shallow(current, depth) {
      for (const entry of sortedEntries(current)) {
        const fullPath = path.join(current, entry.name);
        if (entry.isDirectory()) {
          if (ignoreDirectories.has(entry.name)) continue;
          dirCount += 1;
          if (depth < 1) shallow(fullPath, depth + 1);
          continue;
        }
        if (!entry.isFile()) continue;
        try {
          const entryStats = fs.statSync(fullPath);
          fileCount += 1;
          bytes += entryStats.size;
          newest = Math.max(newest, entryStats.mtimeMs);
        } catch (error) {
          stats.errors += 1;
        }
      }
    }

    shallow(dir, 0);
    return {
      name,
      path: dir,
      fileCount,
      dirCount,
      bytes,
      newest: newest ? new Date(newest) : null
    };
  }

  walk(rootPath, 0);
  stats.largestFiles.sort((a, b) => b.size - a.size);
  stats.recentFiles.sort((a, b) => b.mtime - a.mtime);
  return stats;
}

function renderMarkdown(results, config) {
  const date = new Date().toISOString().slice(0, 10);
  const largestLimit = config.largestFilesLimit ?? 20;
  const recentLimit = config.recentFilesLimit ?? 20;
  const lines = [];

  lines.push("# 自动扫描项目索引");
  lines.push("");
  lines.push(`生成日期：${date}`);
  lines.push("");
  lines.push("范围：根据 `scan.config.json` 对本地重点目录做只读浅层扫描。脚本只统计路径、体量、文件类型和时间，不移动、删除、解压或上传原始资料。");
  lines.push("");
  lines.push("## 扫描总览");
  lines.push("");
  lines.push("| 名称 | 路径 | 状态 | 文件数 | 目录数 | 体量 | 跳过目录 | 错误 |");
  lines.push("| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |");
  for (const result of results) {
    lines.push(
      `| ${escapePipe(result.name)} | \`${escapePipe(result.path)}\` | ${result.exists ? "已扫描" : "不存在"} | ${result.files} | ${result.directories} | ${formatBytes(result.bytes)} | ${result.skippedDirectories} | ${result.errors} |`
    );
  }

  for (const result of results.filter((item) => item.exists)) {
    lines.push("");
    lines.push(`## ${result.name}`);
    lines.push("");
    lines.push(`路径：\`${result.path}\``);
    lines.push("");

    lines.push("### 顶层目录");
    lines.push("");
    lines.push("| 名称 | 文件数 | 子目录数 | 浅层体量 | 最近更新时间 |");
    lines.push("| --- | ---: | ---: | ---: | --- |");
    for (const item of result.topLevel.slice(0, 30)) {
      lines.push(
        `| ${escapePipe(item.name)} | ${item.fileCount} | ${item.dirCount} | ${formatBytes(item.bytes)} | ${item.newest ? item.newest.toISOString().slice(0, 19).replace("T", " ") : "-"} |`
      );
    }

    lines.push("");
    lines.push("### 主要文件类型");
    lines.push("");
    lines.push("| 后缀 | 数量 |");
    lines.push("| --- | ---: |");
    const extensions = Array.from(result.extensions.entries()).sort((a, b) => b[1] - a[1]).slice(0, 20);
    for (const [ext, count] of extensions) {
      lines.push(`| \`${escapePipe(ext)}\` | ${count} |`);
    }

    lines.push("");
    lines.push("### 最大文件");
    lines.push("");
    lines.push("| 文件 | 大小 | 修改时间 |");
    lines.push("| --- | ---: | --- |");
    for (const file of result.largestFiles.slice(0, largestLimit)) {
      lines.push(`| \`${escapePipe(file.path)}\` | ${formatBytes(file.size)} | ${file.mtime.toISOString().slice(0, 19).replace("T", " ")} |`);
    }

    lines.push("");
    lines.push("### 最近更新文件");
    lines.push("");
    lines.push("| 文件 | 大小 | 修改时间 |");
    lines.push("| --- | ---: | --- |");
    for (const file of result.recentFiles.slice(0, recentLimit)) {
      lines.push(`| \`${escapePipe(file.path)}\` | ${formatBytes(file.size)} | ${file.mtime.toISOString().slice(0, 19).replace("T", " ")} |`);
    }
  }

  lines.push("");
  lines.push("## 当前结论");
  lines.push("");
  lines.push("这个文件是自动索引草稿，适合用来发现新增资料、大文件、最近变更和后续清理候选。高价值内容仍需要人工摘要，删除动作仍需要单独确认。");
  lines.push("");

  return lines.join("\n");
}

function main() {
  const config = readConfig();
  const results = config.roots.map((root) => scanRoot(root, config));
  const outputPath = path.join(rootDir, config.output);
  ensureDir(path.dirname(outputPath));
  fs.writeFileSync(outputPath, renderMarkdown(results, config), "utf8");
  console.log(`Scanned ${results.length} roots into ${toRepoPath(outputPath)}`);
}

main();
