# 随笔知识库

这是一个面向本地资料整理的轻量知识库项目。当前包含一个可直接打开的静态网页应用，以及按模块整理的本地磁盘资料文档。

## 使用方式

直接打开 `index.html` 即可使用随笔知识库。数据默认保存在浏览器 `localStorage` 中，支持 JSON 导入和导出。

推送到 `main` 后，GitHub Actions 会把 `docs/*.md` 自动构建为 HTML 页面并发布到 `gh-pages` 分支。

如果仓库首次启用 GitHub Pages，需要在 GitHub 仓库设置中选择：

```text
Settings -> Pages -> Build and deployment -> Source: Deploy from a branch
Branch: gh-pages / root
```

启用后文档入口为：

```text
https://cuizihao1992.github.io/asus-knowledge-base/docs/index.html
```

## 文档结构

- `docs/00-disk-inventory.md`：D 盘、E 盘浅层盘点。
- `docs/01-knowledge-modules.md`：建议的知识库模块划分。
- `docs/02整理规范.md`：后续整理资料时的命名、标签和收录规则。
- `docs/03-code-project-index.md`：`D:\zhc` 代码项目浅层索引。
- `docs/04-sutpc-project-index.md`：`E:\SUTPC` 项目文档浅层索引。
- `docs/05-data-assets-index.md`：`E:\Data` 数据资产浅层索引。
- `docs/06-roadmap.md`：后续整理路线图和优先级。
- `docs/07-zhc-capability-map.md`：`D:\zhc` 项目能力地图。
- `docs/08-local-scanner-design.md`：本地扫描脚本设计。
- `docs/09-knowledge-schema.md`：知识库数据模型规范。
- `docs/10-status-board.md`：整理状态看板。
- `docs/11-evaluation-rules.md`：资料价值评估与整理规则。
- `docs/assets/model-assets.md`：`E:\Data\全生命周期BIM` 模型资产卡片。
- `docs/summaries/mini-transformer.md`：`D:\zhc\mini-transformer` 专题摘要。
- `docs/summaries/zhc-companion.md`：`D:\zhc\zhc-companion` 专题摘要。
- `docs/summaries/quant-system.md`：`D:\zhc\quant-system` 专题摘要。

## 静态站点构建

本地生成 HTML 站点：

```powershell
node scripts/build-site.js
```

构建结果输出到 `_site/`，其中 `_site/docs/index.html` 是文档入口。

## 当前定位

这个仓库先作为“本地知识库入口”使用：

- 记录本地资料在哪个磁盘、哪个目录。
- 把资料按学习、项目、代码、GIS/BIM、无人机数据等模块归档。
- 后续逐步把重要文件整理成随笔、索引或摘要，而不是一次性深扫全盘。
