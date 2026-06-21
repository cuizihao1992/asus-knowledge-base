# 最近更新看板

生成日期：2026-06-21

范围：记录 2026-06-21 本轮整理的主要成果。本文是导航型看板，不包含原始资料，不移动、删除、解压或上传任何本地文件。

## 本轮核心变化

| 类别 | 完成内容 | 关键产物 |
| --- | --- | --- |
| 工具归档 | 执行 2A、2B 工具迁移，将旧工具包从资料目录迁入 `E:\ToolsArchive` | `50-operations/cleanup/tool-archive-migration-log.md` |
| 扫描配置 | 将 `E:\ToolsArchive` 纳入自动扫描范围 | `scan.config.json`、`90-generated/scans/project-index.md` |
| 压缩包评估 | 对待确认 zip/apk/rar 做只读内容评估 | `50-operations/cleanup/archive-content-review.md` |
| zhc 项目 | 对源码 zip 做哈希对比，记录 APK 发布产物 | `20-projects/zhc/zhc-companion-source-zip-review.md`、`20-projects/zhc/zhc-companion-release-artifacts.md` |
| 模型资产 | 为 `fbx.rar` / `gltf.zip` 建立资产卡片，并列出 glTF 场景 | `30-assets/bim-models/compressed-model-archives.md`、`30-assets/bim-models/gltf-scene-inventory.md` |
| 模型发布链路 | 建立小体量 FBX 转换预案 | `30-assets/bim-models/fbx-conversion-plan.md` |
| SUTPC 交互 | 提炼大屏地图交互对象、链路和接口字段 | `20-projects/sutpc/dashboard-map-interaction.md` |
| 状态总览 | 更新整理状态看板 | `00-overview/status-board.md` |

## 已迁移工具归档

| 批次 | 数量 | 总量 | 说明 |
| --- | ---: | ---: | --- |
| 2A | 5 | 133,869,105 bytes | BIM SDK、platform-tools、红豆地球、3D Tiles/glTF 工具、COLLADA2GLTF |
| 2B | 3 | 189,434,044 bytes | Axure9、OpenCV 3.2、LICEcap |
| Cesium | 1 | 54,237,500 bytes | Cesium 1.65 发行包 |

合计迁移：`377,540,649` 字节，约 `360.05 MiB`。这些文件没有删除，只是迁入 `E:\ToolsArchive`，并已纳入扫描索引。

## 最近提交

| 提交 | 内容 |
| --- | --- |
| `0b470bb` | Add SUTPC dashboard map interaction summary |
| `92a189e` | Add FBX conversion plan |
| `14e856d` | Update status board after archive work |
| `583697d` | Add glTF scene inventory |
| `8581319` | Add compressed model archive cards |
| `cabc0b5` | Document zhc companion release artifact |
| `8d57aa8` | Document zhc companion source zip comparison |
| `0bf11b4` | Archive Cesium release package |
| `2fdb1dd` | Add archive content review |
| `9583567` | Migrate 2B tools into archive |
| `ed3df39` | Migrate 2A tools into archive |
| `926dd63` | Add tool archive 2A execution checklist |

## 当前未处理完的点

| 项目 | 当前状态 | 后续建议 |
| --- | --- | --- |
| `D:\zhc\.build-tools` | 暂不迁移 | 等 Android 构建流程稳定后再决定 |
| `D:\zhc\zhc-companion-source.zip` | 已对比，不是完全重复 | 暂保留，清理收益低 |
| `D:\zhc\zhc-companion-lite-release.apk` | 已记录发布产物 | 暂保留，体量很小 |
| 3 个 RAR | 当前缺少 7z/WinRAR 列目录能力 | 安装或调用可用工具后只列目录，不解压 |
| `E:\Data\10-models\archives\gltf.zip` | 已确认模型资产 | 后续可做临时工作区预览 |
| 小体量 FBX | 已有转换预案 | 后续可从桥梁模型开始做临时工作区试验 |

## 下一步建议

1. 补齐 RAR 只列目录能力，优先处理 `E:\Data\10-models\archives\fbx.rar`。
2. 对桥梁小体量 FBX 做临时工作区打开/转换验证。
3. 建立 SUTPC 大屏“图层分组 + 字段 + 本地样例”矩阵。