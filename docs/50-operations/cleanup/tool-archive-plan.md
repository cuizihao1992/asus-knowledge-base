# 工具包与 SDK 归档确认表

生成日期：2026-06-20

范围：本表只针对 `cleanup-confirmation.md` 中“建议迁移到工具归档”的第二批候选项。当前不移动、不删除、不解压、不上传，只给出归档结构和确认清单。

## 结论先行

第二批不建议直接删除。它们多数是开发环境、GIS/三维工具、SDK 或旧版本工具包，知识正文价值不高，但可能用于复现旧项目、转换模型或构建 Android。建议先建立统一工具归档区，再按确认表迁移。

推荐目标根目录：`E:\ToolsArchive`

推荐结构：

| 目录 | 用途 | 示例 |
| --- | --- | --- |
| `E:\ToolsArchive\dev\android` | Android/JDK/Gradle/platform-tools | `.build-tools`、`platform-tools-latest-windows.zip` |
| `E:\ToolsArchive\dev\opencv` | OpenCV 与视觉开发工具 | `opencv-3.2.0.zip` |
| `E:\ToolsArchive\design\prototype` | Axure、原型设计工具 | `Axure9.zip` |
| `E:\ToolsArchive\gis-3d\earth` | GIS 地球客户端、三维浏览工具 | `红豆地球V1.133 - 免费.7z` |
| `E:\ToolsArchive\gis-3d\conversion` | glTF、3D Tiles、DAE/Collada 转换工具 | `COLLADA2GLTF-bin.exe`、`3dtiles-gltf-explorer Setup 1.0.1.exe` |
| `E:\ToolsArchive\sdk\bim` | BIM 平台 SDK 和版本包 | `BIM支撑平台SDK(2022.3.11).zip` |
| `E:\ToolsArchive\media\capture` | 截图、录屏和演示工具 | `GIF录制录屏工具LICEcap.exe` |

## 候选项核对

| 当前路径 | 存在 | 类型 | 已知大小 | 建议目标 | 建议动作 | 风险 |
| --- | --- | --- | ---: | --- | --- | --- |
| `D:\zhc\90-archive\build-tools\.build-tools` | 是 | 目录 | 浅层约 459.47 MB | `E:\ToolsArchive\dev\android\.build-tools` | 先保留，确认 `zhc-companion` 是否还要本地构建后再决定是否迁移 | 迁移后可能破坏本地构建脚本或环境变量 |
| `E:\SUTPC\BIM支撑平台SDK(2022.3.11).zip` | 是 | 文件 | 8.25 MB | `E:\ToolsArchive\sdk\bim\BIM支撑平台SDK(2022.3.11).zip` | 建议迁移 | SDK 有版本留存价值，不建议删除 |
| `E:\SUTPC\00-lifecycle-project\全生命周期\Axure9.zip` | 是 | 文件 | 102.02 MB | `E:\ToolsArchive\design\prototype\Axure9.zip` | 倾向迁移；若确认不用旧 Axure，可删除 | 旧原型文件可能依赖旧版 Axure |
| `E:\学习资料\50-archive-zips\近期zip\opencv-3.2.0.zip` | 是 | 文件 | 78.23 MB | `E:\ToolsArchive\dev\opencv\opencv-3.2.0.zip` | 倾向迁移；若确认不用旧环境，可删除 | 旧图像拼接代码可能依赖该版本 |
| `E:\学习资料\50-archive-zips\近期zip\platform-tools-latest-windows.zip` | 是 | 文件 | 6.96 MB | `E:\ToolsArchive\dev\android\platform-tools-latest-windows.zip` | 建议迁移 | Android 调试工具可能仍有用 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\红豆地球V1.133 - 免费.7z` | 是 | 文件 | 59.67 MB | `E:\ToolsArchive\gis-3d\earth\红豆地球V1.133 - 免费.7z` | 建议迁移 | GIS 工具可能用于查看旧数据 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_vtxf\3dtiles-gltf-explorer Setup 1.0.1.exe` | 是 | 文件 | 47.01 MB | `E:\ToolsArchive\gis-3d\conversion\3dtiles-gltf-explorer Setup 1.0.1.exe` | 建议迁移 | 可能用于 3D Tiles/glTF 预览和排错 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\第三方小工具\COLLADA2GLTF-bin.exe` | 是 | 文件 | 5.78 MB | `E:\ToolsArchive\gis-3d\conversion\COLLADA2GLTF-bin.exe` | 建议迁移 | DAE/Collada 转 glTF 场景仍可能需要 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\第三方小工具\GIF录制录屏工具LICEcap.exe` | 是 | 文件 | 411.99 KB | `E:\ToolsArchive\media\capture\GIF录制录屏工具LICEcap.exe` | 可迁移，也可确认后删除 | 工具可替代性高，保留价值一般 |

已知文件类合计：`323,303,149` 字节，约 `308.33 MiB`。`D:\zhc\90-archive\build-tools\.build-tools` 本次仅做浅层核对，未做完整递归统计。

## 执行建议

优先级建议：

1. 先创建 `E:\ToolsArchive` 目标结构。
2. 只迁移文件类工具包，暂不迁移 `D:\zhc\90-archive\build-tools\.build-tools`。
3. 对 `Axure9.zip`、`opencv-3.2.0.zip`、`GIF录制录屏工具LICEcap.exe` 单独确认是否还有复现价值；确认无用后可进入下一批删除候选。
4. 每次迁移后记录来源路径、目标路径、大小和执行日期。

## 推荐迁移批次

| 批次 | 内容 | 建议 |
| --- | --- | --- |
| 2A | BIM SDK、platform-tools、GIS/3D 转换工具 | 低风险迁移到 `E:\ToolsArchive` |
| 2B | Axure9.zip、opencv-3.2.0.zip | 先确认是否仍需复现旧环境，再迁移或删除 |
| 2C | `D:\zhc\90-archive\build-tools\.build-tools` | 暂不处理；等 `zhc-companion` 构建稳定后再决定 |

## 本次不执行

- 不移动任何候选项。
- 不删除任何候选项。
- 不解压任何压缩包。
- 不上传任何工具或 SDK。

## 下一步

如果确认，可以执行 2A：创建 `E:\ToolsArchive` 目录结构，并迁移 BIM SDK、platform-tools、GIS/3D 转换工具。执行前仍需逐项确认目标路径。