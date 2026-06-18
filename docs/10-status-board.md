# 整理状态看板

更新日期：2026-06-19

这个看板用于记录当前知识库整理进度。它不是任务系统，只是阶段性状态快照。

## 已完成

| 项目 | 状态 | 产物 |
| --- | --- | --- |
| D/E 盘浅层盘点 | 完成 | `00-disk-inventory.md` |
| 知识库模块规划 | 完成 | `01-knowledge-modules.md` |
| 整理规范 | 完成 | `02整理规范.md` |
| D:\zhc 代码项目索引 | 完成 | `03-code-project-index.md` |
| E:\SUTPC 项目文档索引 | 完成 | `04-sutpc-project-index.md` |
| E:\Data 数据资产索引 | 完成 | `05-data-assets-index.md` |
| 路线图 | 完成 | `06-roadmap.md` |
| D:\zhc 能力地图 | 完成 | `07-zhc-capability-map.md` |
| 本地扫描脚本设计 | 完成 | `08-local-scanner-design.md` |
| 数据模型规范 | 完成 | `09-knowledge-schema.md` |
| 全生命周期 BIM 模型资产卡片 | 完成 | `assets/model-assets.md` |
| 资料价值评估与整理规则 | 完成 | `11-evaluation-rules.md` |
| mini-transformer 专题摘要 | 完成 | `summaries/mini-transformer.md` |
| zhc-companion 专题摘要 | 完成 | `summaries/zhc-companion.md` |
| quant-system 专题摘要 | 完成 | `summaries/quant-system.md` |
| Markdown 自动发布 HTML | 完成 | GitHub Actions + `gh-pages` |

## 下一批建议

| 优先级 | 任务 | 原因 | 建议产物 |
| --- | --- | --- | --- |
| 高 | 对 `E:\学习资料` 做浅层索引和价值评估 | 验证新规则，进入学习资料模块 | `docs/generated/learning-value-assessment.md` |
| 高 | 实现 `scan-local-projects.js` | 把人工扫描固化成脚本 | `docs/generated/project-index.md` |
| 高 | 摘要 SUTPC 核心需求文档 | 项目知识价值高 | `docs/summaries/sutpc-lifecycle-requirements.md` |
| 中 | 建立大文件清单 | 控制磁盘整理风险 | `docs/generated/large-files.md` |
| 中 | 扫描学习资料目录 | 进入学习资料模块 | `docs/07-learning-materials-index.md` |
| 中 | 模型预览验证记录 | 确认 FBX 可打开性 | `docs/assets/model-preview-notes.md` |

## 暂不处理

| 项目 | 原因 |
| --- | --- |
| 下载池深度清理 | 重复和低价值文件多，先不消耗精力 |
| 视频内容分析 | 文件大，价值需先确认 |
| 自动删除文件 | 风险高，不符合当前只读原则 |
| 上传模型/数据库/压缩包 | 不适合 GitHub 仓库 |
| 本地服务开发 | 先把扫描脚本做稳 |

## 当前判断

知识库已经从“随笔应用”进入“本地资料索引系统”的雏形阶段。下一步最有价值的是脚本化扫描，而不是继续手工写更多索引。
