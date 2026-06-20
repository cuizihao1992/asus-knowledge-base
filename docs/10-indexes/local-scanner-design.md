# 本地扫描脚本设计

生成日期：2026-06-19

目标：为当前知识库设计一组本地扫描脚本，用于把 D/E 盘资料持续整理成 Markdown 索引草稿。脚本只生成索引，不移动、不删除、不上传原始文件。

## 设计原则

1. 默认只读。
2. 默认浅层扫描。
3. 大文件只记录元数据。
4. 忽略缓存、依赖、构建产物。
5. 输出 Markdown，进入现有 Pages 发布链路。
6. 原始路径保留在文档中，但不复制原始文件。

## 建议脚本

| 脚本 | 输入 | 输出 | 用途 |
| --- | --- | --- | --- |
| `scripts/scan-local-projects.js` | 项目根目录 | `docs/generated/project-index.md` | 扫描代码项目 |
| `scripts/scan-local-docs.js` | 文档目录 | `docs/generated/document-index.md` | 扫描 PDF/Word/PPT/Excel |
| `scripts/scan-data-assets.js` | 数据目录 | `docs/generated/data-assets.md` | 扫描模型、视频、GIS 数据 |
| `scripts/scan-recent-files.js` | 多个根目录 | `docs/generated/recent-files.md` | 生成近期变更清单 |
| `scripts/scan-large-files.js` | 多个根目录 | `docs/generated/large-files.md` | 生成大文件清单 |

## 扫描配置

建议新增配置文件：

```text
knowledge.config.json
```

示例：

```json
{
  "roots": [
    {
      "name": "zhc",
      "path": "D:\\zhc",
      "type": "code"
    },
    {
      "name": "sutpc",
      "path": "E:\\SUTPC",
      "type": "project-docs"
    },
    {
      "name": "data",
      "path": "E:\\Data",
      "type": "data-assets"
    }
  ],
  "ignoreDirs": [
    ".git",
    "node_modules",
    "__pycache__",
    ".venv",
    ".expo",
    "dist",
    "build",
    "coverage",
    ".gradle"
  ],
  "maxDepth": 3,
  "largeFileBytes": 104857600
}
```

## 输出字段

### 项目索引字段

| 字段 | 说明 |
| --- | --- |
| 项目名 | 目录名 |
| 本地路径 | 绝对路径 |
| 最近更新时间 | 目录或关键文件更新时间 |
| 技术栈线索 | package.json、requirements.txt、pyproject 等 |
| 说明文件 | README、docs、AGENTS 等 |
| 启动脚本 | package scripts、README 命令 |
| 初步状态 | 已索引、待摘要、已摘要 |

### 文档索引字段

| 字段 | 说明 |
| --- | --- |
| 文件名 | 原始文件名 |
| 本地路径 | 绝对路径 |
| 类型 | PDF、Word、PPT、Excel、Markdown |
| 大小 | 文件大小 |
| 更新时间 | 文件修改时间 |
| 模块建议 | SUTPC、BIM、GIS、学习资料等 |
| 整理状态 | 待整理、已索引、待摘要 |

### 数据资产字段

| 字段 | 说明 |
| --- | --- |
| 资产名 | 文件名或目录名 |
| 对象类型 | 桥梁、隧道、边坡、视频、矢量、模型 |
| 格式 | FBX、OBJ、B3DM、CMPT、SHP、MP4 |
| 路径 | 绝对路径 |
| 体量 | 文件大小或目录体量 |
| 打开工具 | Blender、Cesium、SuperMap、视频播放器等 |
| 关联项目 | SUTPC、一体化、全生命周期 |

## 推荐实现顺序

1. 先实现 `scan-local-projects.js`，复用 `zhc-companion` 的项目扫描思路。
2. 再实现 `scan-large-files.js`，帮助控制磁盘整理风险。
3. 再实现 `scan-data-assets.js`，为模型资产卡片服务。
4. 最后实现 `scan-local-docs.js`，再逐步做文档摘要。

## 风险控制

必须避免：

- 自动删除文件。
- 自动移动文件。
- 自动解压大压缩包。
- 自动上传模型、视频、数据库、安装包。
- 扫描用户未授权的系统目录。

建议默认限制：

```text
只扫描配置文件中列出的 roots
默认 maxDepth = 3
默认 largeFileBytes = 100MB
默认不读取大文件正文
```

## 当前结论

下一步真正提高效率的动作，是把人工执行过的浅层扫描固化成脚本。脚本生成 Markdown 草稿，再由人审阅和修正，最后通过现有 Pages 流程发布。
