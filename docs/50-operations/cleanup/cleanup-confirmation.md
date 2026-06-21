# 清理确认清单

生成日期：2026-06-20

范围：基于 `cleanup-candidates-next.md` 和 `90-generated/scans/project-index.md` 对下一批文件整理做确认分组。本文只是确认清单，不执行删除、移动、解压或上传。

## 结论先行

当前最适合先处理的是安装包、破解包、工具包、发布包和明确重复归档。模型数据、项目文档、源码、论文、测绘标准、三维瓦片和视频暂不处理。

## 建议可删除

这些文件知识价值低、可重新获取概率高，或属于旧安装包/破解补丁。删除前仍需要你明确确认。

| 路径 | 类型 | 理由 | 风险 |
| --- | --- | --- | --- |
| `E:\SUTPC\全生命周期\Xmind破解包.zip` | 破解包压缩包 | 非项目资料；低知识价值；不适合长期保留在项目资料区 | 可能包含当时使用工具 |
| `E:\SUTPC\全生命周期\Xmind破解包` | 破解包目录 | 非项目资料；和业务文档无关 | 目录中可能混有安装说明 |
| `E:\SUTPC\全生命周期\Axure9\AxureRP-Setup-Beta.exe` | 安装程序 | 旧版安装包；不属于项目知识正文 | 如果仍需旧版 Axure，则不删 |
| `E:\学习资料\图像拼接\android-studio-bundle-162.4069837-windows.exe` | 旧 Android Studio 安装包 | 体量约 2GB；旧版本；可重新获取替代版本 | 如果要复现旧 Android 环境，需保留 |
| `E:\学习资料\图像拼接\opencv-3.3.0-vc14.exe` | OpenCV 安装包 | 旧安装程序；不是学习正文 | 如要复现旧 VC14 环境，需保留 |
| `E:\学习资料\图像拼接\vs_community__1685022915.1504234835.exe` | Visual Studio 安装器 | 旧在线安装器，通常可重新下载 | 旧环境复现需求 |
| `E:\学习资料\图像拼接\UnityDownloadAssistant-2017.1.0f3.exe` | Unity 安装器 | 旧安装器，低知识价值 | 旧 Unity 项目复现需求 |

建议：如果你同意，下一轮可以只删除这一组。预计释放空间主要来自 Android Studio 和 XMind/Axure 工具包。
执行状态：本组已于 2026-06-20 删除完成，明细见 `deleted-files-2026-06-20.md` 的“第一批低风险清理”。

## 建议迁移到工具归档

这些文件不适合放在项目资料正文里，但可能还有工具价值。建议迁移到统一工具归档目录，或先只保留清单。

| 路径 | 类型 | 建议 |
| --- | --- | --- |
| `D:\zhc\.build-tools` | Android/JDK/Gradle 构建工具缓存 | 如果 `zhc-companion` 还要构建 Android，先保留；否则迁移到统一工具目录 |
| `E:\SUTPC\BIM支撑平台SDK(2022.3.11).zip` | SDK 包 | 保留版本记录；可迁移到 SDK/工具归档 |
| `E:\SUTPC\全生命周期\Axure9.zip` | Axure 安装包 | 如果确认不需要旧版 Axure，可删除；否则迁移 |
| `E:\学习资料\近期zip\opencv-3.2.0.zip` | OpenCV 包 | 迁移到开发工具归档或删除 |
| `E:\学习资料\近期zip\platform-tools-latest-windows.zip` | Android platform tools | 迁移到工具归档 |
| `E:\学习资料\Cesium资料\红豆地球V1.133 - 免费.7z` | GIS/地球工具 | 迁移到 GIS 工具归档，先不删 |
| `E:\学习资料\Cesium资料\专栏_vtxf\3dtiles-gltf-explorer Setup 1.0.1.exe` | 3D Tiles/glTF 工具 | 可能和模型预览有关，建议先迁移不删 |
| `E:\学习资料\Cesium资料\第三方小工具\COLLADA2GLTF-bin.exe` | 模型转换工具 | 与 FBX/DAE/glTF 转换有关，先保留 |
| `E:\学习资料\Cesium资料\第三方小工具\GIF录制录屏工具LICEcap.exe` | 录屏工具 | 可迁移或删除，取决于是否仍使用 |

建议：迁移比删除安全，但当前规则下仍应先确认目标目录和文件清单。

## 建议保留

这些文件可能是项目核心资产或知识资料，不建议清理。

| 路径 | 类型 | 保留理由 |
| --- | --- | --- |
| `E:\Data\30-projects\tunnels\泉厦高速隧道竣工图.zip` | 竣工图大包 | 可能是工程资料资产，不能按压缩包直接判断低价值 |
| `E:\Data\20-3d-scenes\shenchaozong\深超总\倾斜3dtiles集合202203.zip` | 三维瓦片包 | 与 3D Tiles/倾斜摄影资产有关，高价值可能性高 |
| `E:\Data\20-3d-scenes\shenchaozong\深超总\手工模型3dtiles集合-202203.rar` | 三维模型瓦片包 | 与三维场景资产有关 |
| `E:\Data\30-projects\tunnels\大坪山\大坪山隧道数据.zip` | 隧道数据包 | 与隧道/BIM/GIS 项目相关 |
| `E:\Data\30-projects\integrated-platform\一体化\一体化项目项目模型-提BIM支持平台.rar` | 模型包 | 与一体化 BIM 支撑平台资料相关 |
| `E:\SUTPC\Brancher_004-backup.zip` | 大型项目备份包 | 体量极大但可能含 UE/原型工程，不解压不删除 |
| `E:\SUTPC\Brancher_004-backup` | 项目备份目录 | 与上面的备份包可能对应，先只记录 |
| `E:\学习资料\webGL\WebGL编程指南.rar` | 学习资料 | WebGL 学习主线相关 |
| `E:\学习资料\近期zip\55.欧比特卫星.rar` | 卫星资料包 | 遥感资料主线相关 |
| `E:\学习资料\Cesium资料\CesiumLab_操作培训\cesiumlabdev.zip` | CesiumLab 资料 | Cesium/GIS 学习主线相关 |

## 待确认

这些文件可能重复或价值不明，需要哈希、目录对比或人工判断。

| 路径 | 待确认问题 | 建议检查 |
| --- | --- | --- |
| `D:\zhc\zhc-companion-source.zip` | 是否与 `D:\zhc\zhc-companion` 内容一致 | 计算哈希；必要时仅列内容，不解压覆盖 |
| `D:\zhc\zhc-companion-lite-release.apk` | 是否需要作为发布版本留存 | 记录版本号、构建日期、对应源码提交 |
| `E:\Data\10-models\archives\fbx.rar` | 是否与 `E:\Data\10-models\bim\全生命周期BIM` 或其他 FBX 重复 | 哈希/文件名清单对比 |
| `E:\Data\10-models\archives\gltf.zip` | 是否是模型转换产物 | 列压缩包内容后判断 |
| `E:\学习资料\Cesium资料\Cesium-1.65.zip` | 是否已有解压版或更高版本 | 和 Cesium 资料目录对比 |
| `E:\学习资料\Cesium资料\SuperMap iEarth(osgb转3Dtiles).rar` | 是否仍有工具价值 | 确认是否用于 OSGB 转 3D Tiles |
| `E:\学习资料\Cesium资料\专题_测试数据\dae转gltf工具.rar` | 是否仍可作为转换工具 | 和当前格式术语/转换计划关联 |

## 推荐执行批次

| 批次 | 内容 | 动作 |
| --- | --- | --- |
| 第一批 | 旧安装包和破解包 | 用户确认后删除 |
| 第二批 | 工具包和 SDK | 用户确认后迁移或保留清单 |
| 第三批 | 明确重复源码归档 | 哈希/内容确认后删除 |
| 第四批 | 模型压缩包 | 只做索引和内容清单，不删除 |

## 本次不处理

- 不处理 `E:\Data` 的模型包、三维瓦片包、隧道视频和竣工图。
- 不处理 `E:\SUTPC` 的需求文档、PPT、Excel、XMind 项目脑图。
- 不处理 `D:\zhc` 的源码目录。
- 不处理论文、标准、卫星手册和课程资料。

## 下一步

如果确认，可以从“建议可删除”表里选第一批执行。执行后必须更新 `deleted-files-2026-06-20.md` 或新增新的删除记录，并重新运行扫描脚本。
