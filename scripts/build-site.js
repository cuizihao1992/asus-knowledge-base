const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const docsDir = path.join(rootDir, "docs");
const siteDir = path.join(rootDir, "_site");
const siteDocsDir = path.join(siteDir, "docs");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  ensureDir(dir);
}

function copyIfExists(fileName) {
  const from = path.join(rootDir, fileName);
  const to = path.join(siteDir, fileName);
  if (fs.existsSync(from)) fs.copyFileSync(from, to);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function slugFor(fileName) {
  return fileName
    .replace(/\.md$/i, "")
    .normalize("NFKD")
    .replace(/[^\w\u4e00-\u9fff-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase() || "doc";
}

function findMarkdownFiles(dir, baseDir = dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return findMarkdownFiles(fullPath, baseDir);
      if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".md")) return [];
      return [path.relative(baseDir, fullPath).replace(/\\/g, "/")];
    });
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, text, href) => {
      return `<a href="${escapeHtml(href)}">${escapeHtml(text)}</a>`;
    });
}

function parseTable(lines, startIndex) {
  const rows = [];
  let index = startIndex;

  while (index < lines.length && /^\s*\|.*\|\s*$/.test(lines[index])) {
    rows.push(lines[index]);
    index += 1;
  }

  if (rows.length < 2 || !/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(rows[1])) {
    return null;
  }

  const parseCells = (row) =>
    row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());

  const header = parseCells(rows[0]);
  const body = rows.slice(2).map(parseCells);
  const thead = `<thead><tr>${header.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`;
  const tbody = `<tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody>`;

  return {
    html: `<div class="table-wrap"><table>${thead}${tbody}</table></div>`,
    nextIndex: index
  };
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];
  let inFence = false;
  let fence = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join("\n")).replace(/\n/g, "<br>")}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (inFence) {
        html.push(`<pre><code>${escapeHtml(fence.join("\n"))}</code></pre>`);
        fence = [];
        inFence = false;
      } else {
        flushParagraph();
        flushList();
        inFence = true;
      }
      continue;
    }

    if (inFence) {
      fence.push(line);
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const table = parseTable(lines, i);
    if (table) {
      flushParagraph();
      flushList();
      html.push(table.html);
      i = table.nextIndex - 1;
      continue;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushParagraph();
      flushList();
      html.push(`<blockquote>${inlineMarkdown(trimmed.slice(2))}</blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return html.join("\n");
}

function titleFromMarkdown(markdown, fallback) {
  const match = /^#\s+(.+)$/m.exec(markdown);
  return match ? match[1].trim() : fallback.replace(/\.md$/i, "");
}

const categoryRules = [
  { id: "overview", title: "总览与规则", match: (file) => file.startsWith("00-overview/") },
  { id: "indexes", title: "目录索引", match: (file) => file.startsWith("10-indexes/") },
  { id: "sutpc", title: "SUTPC 项目", match: (file) => file.startsWith("20-projects/sutpc/") },
  { id: "code", title: "代码项目", match: (file) => file.startsWith("20-projects/zhc/") },
  { id: "assets", title: "数据与模型资产", match: (file) => file.startsWith("30-assets/") },
  { id: "learning", title: "学习资料与术语", match: (file) => file.startsWith("40-learning/") },
  { id: "cleanup", title: "清理与删除记录", match: (file) => file.startsWith("50-operations/") },
  { id: "generated", title: "自动生成", match: (file) => file.startsWith("90-generated/") }
];

function categoryFor(file) {
  const rule = categoryRules.find((item) => item.match(file));
  return rule ? { id: rule.id, title: rule.title } : { id: "other", title: "其他" };
}

function groupedDocs(docs) {
  const groups = [];
  const byId = new Map();

  for (const doc of docs) {
    const category = categoryFor(doc.file);
    if (!byId.has(category.id)) {
      const group = { ...category, docs: [] };
      byId.set(category.id, group);
      groups.push(group);
    }
    byId.get(category.id).docs.push(doc);
  }

  return groups;
}

function pageShell({ title, body, navItems, currentHref = "" }) {
  const nav = navItems
    .map((group) => {
      const links = group.docs
        .map((item) => {
          const active = item.href === currentHref ? " active" : "";
          return `<a class="doc-nav-item${active}" href="${item.href}">${escapeHtml(item.title)}</a>`;
        })
        .join("");
      return `<section class="doc-nav-group">
          <h2>${escapeHtml(group.title)}</h2>
          ${links}
        </section>`;
    })
    .join("");

  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} - 随笔知识库</title>
    <link rel="stylesheet" href="../styles.css" />
    <link rel="stylesheet" href="../doc-site.css" />
  </head>
  <body>
    <div class="doc-shell">
      <aside class="doc-sidebar">
        <a class="doc-brand" href="../index.html">
          <span class="brand-mark">文</span>
          <span>
            <strong>随笔知识库</strong>
            <small>文档浏览</small>
          </span>
        </a>
        <nav class="doc-nav" aria-label="文档目录">
          <a class="doc-nav-item" href="index.html">文档首页</a>
          ${nav}
        </nav>
      </aside>
      <main class="doc-main">
        ${body}
      </main>
    </div>
  </body>
</html>
`;
}

function clientSearchScript() {
  return `<script>
    const searchInput = document.querySelector("[data-doc-search]");
    const cards = Array.from(document.querySelectorAll("[data-doc-card]"));
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        for (const card of cards) {
          const haystack = card.textContent.toLowerCase();
          card.hidden = Boolean(query) && !haystack.includes(query);
        }
      });
    }
  </script>`;
}

function buildDocs() {
  cleanDir(siteDir);
  ensureDir(siteDocsDir);
  copyIfExists("index.html");
  copyIfExists("styles.css");
  copyIfExists("app.js");
  fs.copyFileSync(path.join(rootDir, "doc-site.css"), path.join(siteDir, "doc-site.css"));
  fs.writeFileSync(path.join(siteDir, ".nojekyll"), "");

  const markdownFiles = findMarkdownFiles(docsDir).sort((a, b) => a.localeCompare(b, "zh-CN"));

  const docs = markdownFiles.map((file) => {
    const markdown = fs.readFileSync(path.join(docsDir, file), "utf8");
    return {
      file,
      slug: slugFor(file),
      title: titleFromMarkdown(markdown, file),
      markdown,
      html: markdownToHtml(markdown)
    };
  });

  const groups = groupedDocs(docs);
  const navItems = groups.map((group) => ({
    ...group,
    docs: group.docs.map((doc) => ({
      title: doc.title,
      href: `${doc.slug}.html`
    }))
  }));

  for (const doc of docs) {
    const body = `<article class="doc-article">${doc.html}</article>`;
    fs.writeFileSync(
      path.join(siteDocsDir, `${doc.slug}.html`),
      pageShell({ title: doc.title, body, navItems, currentHref: `${doc.slug}.html` }),
      "utf8"
    );
  }

  const indexBody = `<section class="doc-home">
    <h1>文档目录</h1>
    <p>这些页面由仓库中的 Markdown 文档自动生成，按资料整理阶段和主题分组。</p>
    <label class="doc-search">
      <span>搜索</span>
      <input data-doc-search type="search" placeholder="输入标题或文件名" autocomplete="off" />
    </label>
    ${groups
      .map(
        (group) => `<section class="doc-section">
          <h2>${escapeHtml(group.title)}</h2>
          <div class="doc-card-grid">
            ${group.docs
              .map(
                (doc) => `<a class="doc-card" data-doc-card href="${doc.slug}.html">
                  <strong>${escapeHtml(doc.title)}</strong>
                  <span>${escapeHtml(doc.file)}</span>
                </a>`
              )
              .join("")}
          </div>
        </section>`
      )
      .join("")}
  </section>${clientSearchScript()}`;

  fs.writeFileSync(path.join(siteDocsDir, "index.html"), pageShell({ title: "文档目录", body: indexBody, navItems }), "utf8");

  console.log(`Built ${docs.length} docs into ${path.relative(rootDir, siteDocsDir)}`);
}

buildDocs();
