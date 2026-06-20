# 随笔知识库

这是一个面向本地资料整理的轻量知识库项目。当前包含一个可直接打开的静态网页应用，以及按模块整理的本地磁盘资料文档。

## 使用方式

直接打开 `index.html` 即可使用随笔知识库。数据默认保存在浏览器 `localStorage` 中，支持 JSON 导入和导出。

推送到 `main` 后，GitHub Actions 会把 `docs/` 下的 Markdown 文档自动构建为 HTML 页面并发布到 `gh-pages` 分支。

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

- `docs/00-overview/`：结构设计、模块规划、整理规则、路线图、状态看板、知识体系路线图。
- `docs/10-indexes/`：磁盘、代码项目、SUTPC、Data 资产和本地扫描设计索引。
- `docs/20-projects/sutpc/`：SUTPC 全生命周期、GIS 数据需求、BIM 集成和项目经验复盘。
- `docs/20-projects/zhc/`：`D:\zhc` 能力地图、优先级地图、mini-transformer、zhc-companion、quant-system。
- `docs/30-assets/`：BIM 模型资产、模型可发布性验证、BIM/GIS 数据格式术语。
- `docs/40-learning/`：学习资料价值评估、Cesium/WebGL、测绘遥感、卫星手册和论文清单。
- `docs/50-operations/cleanup/`：清理候选、重复候选、删除记录和大文件待确认清单。
- `docs/90-generated/scans/`：脚本自动生成的扫描索引。

结构说明见 `docs/00-overview/doc-structure.md`。

## 静态站点构建

本地生成 HTML 站点：

```powershell
node scripts/build-site.js
```

构建结果输出到 `_site/`，其中 `_site/docs/index.html` 是文档入口。

只读扫描本地重点目录并生成索引草稿：

```powershell
node scripts\scan-local-projects.js
```

扫描范围和忽略规则在 `scan.config.json` 中配置，输出到 `docs/90-generated/scans/project-index.md`。

## 当前定位

这个仓库先作为“本地知识库入口”使用：

- 记录本地资料在哪个磁盘、哪个目录。
- 把资料按学习、项目、代码、GIS/BIM、无人机数据等模块归档。
- 后续逐步把重要文件整理成随笔、索引或摘要，而不是一次性深扫全盘。
