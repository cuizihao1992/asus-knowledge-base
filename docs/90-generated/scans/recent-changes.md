# 最近更新看板

生成日期：2026-06-23

范围：记录近期目录重组阶段的主要成果。本文是导航型看板，不包含原始资料，不移动、删除、解压或上传任何本地文件。

## 本轮核心变化

| 类别 | 完成内容 | 关键产物 |
| --- | --- | --- |
| 工具归档 | 执行 2A、2B 工具迁移，将旧工具包从资料目录迁入 `E:\ToolsArchive` | `50-operations/cleanup/tool-archive-migration-log.md` |
| 数据目录重组 | 将 `E:\Data` 顶层整理为 GIS、模型、三维场景、项目、视频五类 | `50-operations/cleanup/data-directory-reorganization-2026-06-21.md` |
| 学习资料重组 | 将 `E:\学习资料` 顶层整理为 GIS/Cesium、遥感测绘、编程 AI、书籍论文等七类 | `50-operations/cleanup/learning-directory-reorganization-2026-06-21.md` |
| SUTPC 重组 | 将 `E:\SUTPC` 顶层整理为全生命周期、BIM SDK、汇报、遥感、备份、待复核 | `50-operations/cleanup/sutpc-directory-reorganization-2026-06-21.md` |
| zhc 重组 | 保留源码项目原位，仅归档 `.build-tools`、APK、源码快照 | `50-operations/cleanup/zhc-directory-reorganization-2026-06-21.md` |
| 扫描索引 | 重跑本地扫描，当前扫描 5 个根目录 | `90-generated/scans/project-index.md` |
| 压缩包评估 | 对待确认 zip/apk/rar 做只读内容评估 | `50-operations/cleanup/archive-content-review.md` |
| 模型资产 | 为 `fbx.rar` / `gltf.zip` 建立资产卡片，并列出 glTF 场景 | `30-assets/bim-models/compressed-model-archives.md`、`30-assets/bim-models/gltf-scene-inventory.md` |
| SUTPC 交互 | 提炼大屏地图交互对象、链路、图层字段矩阵 | `20-projects/sutpc/dashboard-map-interaction.md`、`20-projects/sutpc/dashboard-layer-field-matrix.md` |

## 目录重组结果

| 根目录 | 当前顶层状态 |
| --- | --- |
| `E:\Data` | 5 个分类目录 + `README-目录说明.md` |
| `E:\学习资料` | 7 个主题目录 + `README-目录说明.md` |
| `E:\SUTPC` | 6 个分类目录 + `README-目录说明.md` |
| `D:\zhc` | 源码项目保持原位，外围文件进入 `90-archive`，新增 `README-目录说明.md` |

## 当前未处理完的点

| 项目 | 当前状态 | 后续建议 |
| --- | --- | --- |
| 下载池/网盘目录 | 尚未进入系统整理 | 先浅层盘点，不直接移动 |
| `D:\zhc\90-archive\build-tools\.build-tools` | 已归档 | 如 Android 构建失败，再修脚本或环境变量 |
| 3 个 RAR | 当前缺少 7z/WinRAR 列目录能力 | 安装或调用可用工具后只列目录，不解压 |
| `E:\Data\10-models\archives\gltf.zip` | 已确认模型资产 | 后续可做临时工作区预览 |
| 小体量 FBX | 已有转换预案 | 后续可从桥梁模型开始做临时工作区试验 |

## 下一步建议

1. 对下载池/网盘目录做只读浅层盘点，先找出大文件、重复压缩包和明显垃圾。
2. 补齐 RAR 只列目录能力，优先处理 `E:\Data\10-models\archives\fbx.rar`。
3. 做桥梁小体量 FBX 的临时工作区打开/转换验证。
