# 整理状态看板

更新日期：2026-06-21

这个看板用于记录当前知识库整理进度。它不是任务系统，只是阶段性状态快照。

## 已完成

| 项目 | 状态 | 产物 |
| --- | --- | --- |
| 文档结构设计 | 完成 | `00-overview/doc-structure.md` |
| 知识库模块规划 | 完成 | `00-overview/knowledge-modules.md` |
| 整理规范 | 完成 | `00-overview/organizing-rules.md` |
| 知识库整理路线图 | 完成 | `00-overview/roadmap.md` |
| 知识库数据模型规范 | 完成 | `00-overview/knowledge-schema.md` |
| 资料价值评估与整理规则 | 完成 | `00-overview/evaluation-rules.md` |
| 个人知识体系路线图 | 完成 | `00-overview/personal-knowledge-roadmap.md` |
| D/E 盘浅层盘点 | 完成 | `10-indexes/disk-inventory.md` |
| D:\zhc 代码项目索引 | 完成 | `10-indexes/code-project-index.md` |
| E:\SUTPC 项目文档索引 | 完成 | `10-indexes/sutpc-project-index.md` |
| E:\Data 数据资产索引 | 完成 | `10-indexes/data-assets-index.md` |
| 本地扫描脚本设计 | 完成 | `10-indexes/local-scanner-design.md` |
| SUTPC 设施全生命周期监管需求摘要 | 完成 | `20-projects/sutpc/lifecycle-requirements.md` |
| SUTPC GIS 数据需求详表 | 完成 | `20-projects/sutpc/gis-data-requirements.md` |
| SUTPC BIM 数据集成流程专题摘要 | 完成 | `20-projects/sutpc/bim-integration.md` |
| SUTPC 项目经验复盘 | 完成 | `20-projects/sutpc/project-lessons.md` |
| D:\zhc 能力地图 | 完成 | `20-projects/zhc/capability-map.md` |
| D:\zhc 项目优先级地图 | 完成 | `20-projects/zhc/project-priority.md` |
| mini-transformer 专题摘要 | 完成 | `20-projects/zhc/mini-transformer.md` |
| zhc-companion 专题摘要 | 完成 | `20-projects/zhc/zhc-companion.md` |
| quant-system 专题摘要 | 完成 | `20-projects/zhc/quant-system.md` |
| 全生命周期 BIM 模型资产卡片 | 完成 | `30-assets/bim-models/model-assets.md` |
| BIM 模型可发布性验证记录 | 完成 | `30-assets/bim-models/model-preview-notes.md` |
| BIM/GIS 数据格式术语表 | 完成 | `30-assets/data-formats/bim-gis-format-glossary.md` |
| E:\学习资料浅层索引与价值评估 | 完成 | `40-learning/learning-value-assessment.md` |
| Cesium/WebGL 学习资料专题摘要 | 完成 | `40-learning/cesium-webgl/learning-cesium-webgl.md` |
| 遥感几何与图像拼接论文清单 | 完成 | `40-learning/surveying-remote-sensing/remote-sensing-image-stitching-papers.md` |
| 测绘与遥感术语表 | 完成 | `40-learning/surveying-remote-sensing/surveying-glossary.md` |
| 测绘标准和卫星手册清单 | 完成 | `40-learning/surveying-remote-sensing/surveying-satellite-manuals.md` |
| E:\学习资料大文件与待确认清单 | 完成 | `50-operations/cleanup/learning-large-files.md` |
| E:\学习资料重复候选哈希清单 | 完成 | `50-operations/cleanup/learning-duplicate-candidates.md` |
| 重复文件删除确认草案 | 完成 | `50-operations/cleanup/duplicate-removal-review.md` |
| 2026-06-20 已删除文件记录 | 完成 | `50-operations/cleanup/deleted-files-2026-06-20.md` |
| 下一批清理候选清单 | 完成 | `50-operations/cleanup/cleanup-candidates-next.md` |
| 清理确认清单 | 完成 | `50-operations/cleanup/cleanup-confirmation.md` |
| 本地扫描脚本 | 完成 | `scripts/scan-local-projects.js`、`scan.config.json` |
| 自动扫描项目索引 | 完成 | `90-generated/scans/project-index.md` |
| GitHub Pages 分类导航 | 完成 | `scripts/build-site.js`、`doc-site.css` |
| 工具包与 SDK 归档确认表 | 完成 | `50-operations/cleanup/tool-archive-plan.md` |
| 工具归档 2A 迁移执行清单 | 完成 | `50-operations/cleanup/tool-archive-2a-execution-checklist.md` |
| 工具归档迁移日志 | 完成 | `50-operations/cleanup/tool-archive-migration-log.md` |
| 待确认压缩包内容评估 | 完成 | `50-operations/cleanup/archive-content-review.md` |
| zhc-companion 源码压缩包对比 | 完成 | `20-projects/zhc/zhc-companion-source-zip-review.md` |
| zhc-companion 发布产物记录 | 完成 | `20-projects/zhc/zhc-companion-release-artifacts.md` |
| 压缩模型包资产卡片 | 完成 | `30-assets/bim-models/compressed-model-archives.md` |
| glTF 场景清单 | 完成 | `30-assets/bim-models/gltf-scene-inventory.md` |

## 下一批建议

| 优先级 | 任务 | 原因 | 建议产物 |
| --- | --- | --- | --- |
| 高 | RAR 只列目录能力补齐 | `fbx.rar`、SuperMap iEarth、dae 转 glTF 工具仍需 7z/WinRAR 只列目录 | 更新 `archive-content-review.md` 和模型资产卡片 |
| 高 | 小体量 FBX 转换预案 | 为桥梁/边坡模型设计 glTF/3D Tiles 试验步骤 | `30-assets/bim-models/fbx-conversion-plan.md` |
| 中 | SUTPC 大屏地图交互摘要 | 提炼大屏图层、模型跳转和监测视频交互 | `20-projects/sutpc/dashboard-map-interaction.md` |
| 中 | Cesium/WebGL 渲染术语 | 连接三维数据和前端可视化资料 | `40-learning/cesium-webgl/cesium-webgl-glossary.md` |
| 中 | 文档标签和最近更新看板 | 让 Pages 更像可维护的资料库 | `90-generated/scans/recent-changes.md` |

## 暂不处理

| 项目 | 原因 |
| --- | --- |
| 下载池深度清理 | 重复和低价值文件多，先不消耗精力 |
| 代码库内部重复文件清理 | 容易破坏第三方库或示例工程完整性 |
| 视频内容分析 | 文件大，价值需先确认 |
| 自动删除文件 | 风险高，不符合当前只读原则 |
| 上传模型/数据库/压缩包 | 不适合 GitHub 仓库 |

## 当前判断

知识库已经进入“结构化文档 + 自动扫描 + 小批迁移归档”的阶段。工具安装包已从资料区迁入 `E:\ToolsArchive` 并纳入扫描；后续重点应转向 RAR 只列目录、模型转换预案和 SUTPC 交互知识沉淀。
