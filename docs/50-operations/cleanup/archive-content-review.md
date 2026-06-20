# 待确认压缩包内容评估

生成日期：2026-06-21

范围：对应 `cleanup-confirmation.md` 的“待确认”分组。本次只读取文件元数据和 zip/apk 目录，不解压、不移动、不删除、不上传。当前环境未检测到 `7z.exe`/`7za.exe`，因此 RAR 只记录元数据，后续需要 7z/WinRAR 做只列目录检查。

## 结论先行

- `E:\Data\gltf.zip` 是 glTF 模型资产包，建议保留，不进入删除流程。
- `E:\学习资料\Cesium资料\Cesium-1.65.zip` 是 Cesium 发行包，建议迁移到工具/SDK 归档，而不是删除。
- `D:\zhc\zhc-companion-source.zip` 是很小的源码快照，且 `D:\zhc\zhc-companion` 目录存在；后续可做内容对比，确认一致后再决定是否删除 zip。
- `D:\zhc\zhc-companion-lite-release.apk` 是很小的发布产物，建议保留到 `zhc` 发布归档或记录版本后再处理。
- 3 个 RAR 暂不能列内容，不建议删除；后续用 7z/WinRAR 只列目录后再评估。

## 内容摘要

| 路径 | 存在 | 大小（字节） | 可列内容 | 条目数 | 文件数 | 目录数 | 未压缩大小 | 初步判断 | 建议 |
| --- | --- | ---: | --- | ---: | ---: | ---: | ---: | --- | --- |
| `D:\zhc\zhc-companion-source.zip` | 是 | 99920 | 是 | 10 | 10 | 0 | 441975 | `zhc-companion` 源码快照 | 与 `D:\zhc\zhc-companion` 对比后一致则可删除 zip，否则保留 |
| `D:\zhc\zhc-companion-lite-release.apk` | 是 | 12901 | 是 | 8 | 8 | 0 | 14355 | Android APK 发布产物，体量很小 | 保留并记录版本；不急于删除 |
| `E:\Data\fbx.rar` | 是 | 274179140 | 否 | - | - | - | - | 可能是 FBX 模型资产 | 暂保留；需用 7z/WinRAR 只列目录 |
| `E:\Data\gltf.zip` | 是 | 224388770 | 是 | 177 | 156 | 21 | 253424962 | glTF 模型资产包，含 `.gltf`、`.bin`、纹理图 | 保留；纳入模型资产索引 |
| `E:\学习资料\Cesium资料\Cesium-1.65.zip` | 是 | 54237500 | 是 | 7194 | 6386 | 808 | 142354248 | Cesium 1.65 完整发行包 | 迁移到 `E:\ToolsArchive\gis-3d\cesium`，不删除 |
| `E:\学习资料\Cesium资料\SuperMap iEarth(osgb转3Dtiles).rar` | 是 | 53394007 | 否 | - | - | - | - | OSGB 转 3D Tiles 工具可能性高 | 暂保留；需用 7z/WinRAR 只列目录 |
| `E:\学习资料\Cesium资料\专题_测试数据\dae转gltf工具.rar` | 是 | 42033265 | 否 | - | - | - | - | DAE 转 glTF 工具或测试包 | 暂保留；需用 7z/WinRAR 只列目录 |

## zip/apk 后缀分布

| 路径 | 主要后缀 |
| --- | --- |
| `D:\zhc\zhc-companion-source.zip` | `.json:5`, `.tsx:2`, `.js:1`, `.md:1`, `.gitignore:1` |
| `D:\zhc\zhc-companion-lite-release.apk` | `.sf:1`, `.arsc:1`, `.mf:1`, `.rsa:1`, `.textproto:1`, `.properties:1`, `.xml:1`, `.dex:1` |
| `E:\Data\gltf.zip` | `.png:119`, `.gltf:11`, `.bin:11`, `.txt:10`, `.jpeg:5` |
| `E:\学习资料\Cesium资料\Cesium-1.65.zip` | `.js:3019`, `.html:801`, `.png:726`, `.jpg:323`, `.css:286`, `.json:262`, `.glsl:216`, `.gif:115`, `.b3dm:108`, `.geom:81` |

## 样例条目

| 路径 | 样例 |
| --- | --- |
| `D:\zhc\zhc-companion-source.zip` | `zhc-companion\.gitignore`; `zhc-companion\README.md`; `zhc-companion\mobile\app.json`; `zhc-companion\mobile\package.json`; `zhc-companion\mobile\app\index.tsx` |
| `D:\zhc\zhc-companion-lite-release.apk` | `AndroidManifest.xml`; `classes.dex`; `resources.arsc`; `META-INF/CERT.SF`; `META-INF/CERT.RSA` |
| `E:\Data\gltf.zip` | `gltf/busscar_micruss/scene.gltf`; `gltf/busscar_micruss/scene.bin`; `gltf/busscar_micruss/textures/BlackStuff_baseColor.png` |
| `E:\学习资料\Cesium资料\Cesium-1.65.zip` | `Build/Cesium/`; `Apps/CesiumViewer/`; `Apps/HelloWorld.html`; `Apps/Sandcastle/`; `index.html` |

## 对应目录检查

| 路径 | 状态 |
| --- | --- |
| `D:\zhc\zhc-companion` | 存在，后续可与 `zhc-companion-source.zip` 做内容对比 |
| `E:\Data\gltf` | 不存在 |
| `E:\学习资料\Cesium资料\Cesium-1.65` | 不存在 |
| `E:\学习资料\Cesium资料\Cesium` | 不存在 |

## 后续动作

1. 将 `E:\学习资料\Cesium资料\Cesium-1.65.zip` 迁移到 `E:\ToolsArchive\gis-3d\cesium\Cesium-1.65.zip`。
2. 对 `D:\zhc\zhc-companion-source.zip` 与 `D:\zhc\zhc-companion` 做文件名和内容摘要对比；一致时可列入低风险删除候选。
3. 对 3 个 RAR 安装 7z/使用 WinRAR 后只列目录，不解压，再更新本表。
4. 将 `E:\Data\gltf.zip` 和 `E:\Data\fbx.rar` 纳入模型资产索引，不按普通压缩包清理。