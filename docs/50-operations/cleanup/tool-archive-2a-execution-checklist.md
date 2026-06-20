# 工具归档 2A 迁移执行清单

生成日期：2026-06-20

范围：本表对应 `tool-archive-plan.md` 中推荐迁移批次 `2A`。本次只做迁移前检查和命令草案，不创建目录、不移动文件、不删除文件、不解压、不上传。

## 结论先行

2A 的 5 个源文件全部存在，目标目录目前均不存在，目标文件均不存在。若执行迁移，需要先创建 `E:\ToolsArchive` 下的目标目录，再用 `Move-Item -LiteralPath` 逐项迁移。

本批已知总大小：`133,869,105` 字节，约 `127.67 MiB`。

## 迁移清单

| 源路径 | 源文件存在 | 大小（字节） | 修改时间 | 目标路径 | 目标目录存在 | 目标文件存在 | 风险 | 建议 |
| --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| `E:\SUTPC\BIM支撑平台SDK(2022.3.11).zip` | 是 | 8649675 | 2022-03-11 13:10:04 | `E:\ToolsArchive\sdk\bim\BIM支撑平台SDK(2022.3.11).zip` | 否 | 否 | SDK 有版本留存价值，迁移后原项目资料区少一个 SDK 入口 | 迁移 |
| `E:\学习资料\近期zip\platform-tools-latest-windows.zip` | 是 | 7293656 | 2017-04-30 11:16:29 | `E:\ToolsArchive\dev\android\platform-tools-latest-windows.zip` | 否 | 否 | Android 调试工具可能被旧项目引用，但压缩包本身适合归档 | 迁移 |
| `E:\学习资料\Cesium资料\红豆地球V1.133 - 免费.7z` | 是 | 62568147 | 2020-02-27 17:00:54 | `E:\ToolsArchive\gis-3d\earth\红豆地球V1.133 - 免费.7z` | 否 | 否 | 可能用于查看旧 GIS 数据；不应删除 | 迁移 |
| `E:\学习资料\Cesium资料\专栏_vtxf\3dtiles-gltf-explorer Setup 1.0.1.exe` | 是 | 49297595 | 2020-02-27 17:00:07 | `E:\ToolsArchive\gis-3d\conversion\3dtiles-gltf-explorer Setup 1.0.1.exe` | 否 | 否 | 可能用于 3D Tiles/glTF 预览和排错 | 迁移 |
| `E:\学习资料\Cesium资料\第三方小工具\COLLADA2GLTF-bin.exe` | 是 | 6060032 | 2020-02-27 17:00:55 | `E:\ToolsArchive\gis-3d\conversion\COLLADA2GLTF-bin.exe` | 否 | 否 | DAE/Collada 转 glTF 场景仍可能需要 | 迁移 |

## 目标目录

| 目标目录 | 当前状态 | 用途 |
| --- | --- | --- |
| `E:\ToolsArchive\sdk\bim` | 不存在 | BIM SDK 版本包 |
| `E:\ToolsArchive\dev\android` | 不存在 | Android platform tools 和相关工具 |
| `E:\ToolsArchive\gis-3d\earth` | 不存在 | GIS 地球客户端工具 |
| `E:\ToolsArchive\gis-3d\conversion` | 不存在 | 3D Tiles/glTF/DAE 转换与预览工具 |

## 执行命令草案

以下命令仅为后续确认后执行的草案，本次未执行。

```powershell
New-Item -ItemType Directory -Force -Path 'E:\ToolsArchive\sdk\bim'
New-Item -ItemType Directory -Force -Path 'E:\ToolsArchive\dev\android'
New-Item -ItemType Directory -Force -Path 'E:\ToolsArchive\gis-3d\earth'
New-Item -ItemType Directory -Force -Path 'E:\ToolsArchive\gis-3d\conversion'

Move-Item -LiteralPath 'E:\SUTPC\BIM支撑平台SDK(2022.3.11).zip' -Destination 'E:\ToolsArchive\sdk\bim\BIM支撑平台SDK(2022.3.11).zip'
Move-Item -LiteralPath 'E:\学习资料\近期zip\platform-tools-latest-windows.zip' -Destination 'E:\ToolsArchive\dev\android\platform-tools-latest-windows.zip'
Move-Item -LiteralPath 'E:\学习资料\Cesium资料\红豆地球V1.133 - 免费.7z' -Destination 'E:\ToolsArchive\gis-3d\earth\红豆地球V1.133 - 免费.7z'
Move-Item -LiteralPath 'E:\学习资料\Cesium资料\专栏_vtxf\3dtiles-gltf-explorer Setup 1.0.1.exe' -Destination 'E:\ToolsArchive\gis-3d\conversion\3dtiles-gltf-explorer Setup 1.0.1.exe'
Move-Item -LiteralPath 'E:\学习资料\Cesium资料\第三方小工具\COLLADA2GLTF-bin.exe' -Destination 'E:\ToolsArchive\gis-3d\conversion\COLLADA2GLTF-bin.exe'
```

## 执行前安全条件

- 源文件必须仍然存在。
- 目标文件必须不存在，避免覆盖。
- 目标目录必须是 `E:\ToolsArchive` 下的预期目录。
- 迁移后需要重新运行本地扫描脚本，更新 `docs/90-generated/scans/project-index.md`。
- 迁移后需要新增或更新迁移日志，记录源路径、目标路径、大小和日期。

## 本次不执行

- 不创建 `E:\ToolsArchive`。
- 不移动任何文件。
- 不删除任何文件。
- 不解压任何压缩包。
- 不上传任何工具或 SDK。

## 下一步

如果确认执行 2A，下一步应创建目标目录并迁移上述 5 个文件。执行后更新迁移日志和扫描索引。