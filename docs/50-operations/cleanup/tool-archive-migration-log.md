# 工具归档迁移日志

## 2026-06-21：2A 工具包迁移

执行范围：根据 `tool-archive-2a-execution-checklist.md`，迁移 BIM SDK、Android platform-tools、GIS/3D 转换工具到 `E:\ToolsArchive`。本次只移动工具包，不删除、不解压、不上传。

| 源路径 | 目标路径 | 大小（字节） | 迁移后源存在 | 迁移后目标存在 |
| --- | --- | ---: | --- | --- |
| `E:\SUTPC\BIM支撑平台SDK(2022.3.11).zip` | `E:\ToolsArchive\sdk\bim\BIM支撑平台SDK(2022.3.11).zip` | 8649675 | 否 | 是 |
| `E:\学习资料\近期zip\platform-tools-latest-windows.zip` | `E:\ToolsArchive\dev\android\platform-tools-latest-windows.zip` | 7293656 | 否 | 是 |
| `E:\学习资料\Cesium资料\红豆地球V1.133 - 免费.7z` | `E:\ToolsArchive\gis-3d\earth\红豆地球V1.133 - 免费.7z` | 62568147 | 否 | 是 |
| `E:\学习资料\Cesium资料\专栏_vtxf\3dtiles-gltf-explorer Setup 1.0.1.exe` | `E:\ToolsArchive\gis-3d\conversion\3dtiles-gltf-explorer Setup 1.0.1.exe` | 49297595 | 否 | 是 |
| `E:\学习资料\Cesium资料\第三方小工具\COLLADA2GLTF-bin.exe` | `E:\ToolsArchive\gis-3d\conversion\COLLADA2GLTF-bin.exe` | 6060032 | 否 | 是 |

迁移总量：`133,869,105` 字节，约 `127.67 MiB`。

复查结论：5 个源路径均已不存在，5 个目标路径均已存在。