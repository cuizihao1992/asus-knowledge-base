# 2026-06-20 已删除文件记录

执行日期：2026-06-20

执行范围：根据用户确认“可以删除没有用的文件”，本轮只删除低风险对象：

- 哈希确认一致的卫星手册重复副本。
- 缓存文件、下载残留、Office 临时锁文件。
- 删除重复副本后变为空的目录。

未删除：

- 研究文档。
- Cesium/WebGL 中等风险重复资料。
- 代码工程内部重复文件。
- 压缩包、安装包、视频、模型、数据库。
- 任何未哈希确认的资料型重复文件。

## 删除汇总

| 类型 | 数量 | 说明 |
| --- | ---: | --- |
| 哈希确认重复 PDF | 12 | 删除 `E:\学习资料\90-misc-review\收集资料\卫星使用手册` 中的重复副本，保留 `E:\学习资料\10-remote-sensing-surveying\卫星使用手册` |
| 缓存/下载残留/临时锁文件 | 30 | `.qqdownload`、`.crdownload`、`.DS_Store`、`Thumbs.db`、`~$*` |
| 空目录 | 1 | `E:\学习资料\90-misc-review\收集资料\卫星使用手册` |

复查结果：

- `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\ALOS_HB_RevC_EN.pdf` 仍存在。
- `E:\学习资料\90-misc-review\收集资料\卫星使用手册` 已不存在。
- `E:\学习资料` 下 `.qqdownload`、`.crdownload`、`.DS_Store`、`Thumbs.db`、`~$*` 剩余数量为 0。

## 哈希确认重复 PDF

这些文件删除前均与 `E:\学习资料\10-remote-sensing-surveying\卫星使用手册` 中保留文件 SHA256 一致。

| 已删除路径 | 保留路径 | SHA256 前缀 |
| --- | --- | --- |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\ALOS_HB_RevC_EN.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\ALOS_HB_RevC_EN.pdf` | `DA79C878A1FB3CE9` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\PleiadesUserGuide.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\PleiadesUserGuide.pdf` | `D48B6EB25A51907F` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\DigitalGlobe_Core_Imagery_Products_Guide.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\DigitalGlobe_Core_Imagery_Products_Guide.pdf` | `41DF005E0833E2B3` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\r439_9_spot_geometry_handbook.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\r439_9_spot_geometry_handbook.pdf` | `11BE35EFB59F44A5` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\TX-GS-DD-3307_TerraSAR-X_Ground_Segment_Level_1b_Product_Format_Specification.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\TX-GS-DD-3307_TerraSAR-X_Ground_Segment_Level_1b_Product_Format_Specification.pdf` | `BC35AF543C474869` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\P5_data_user_handbook.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\P5_data_user_handbook.pdf` | `A18BD69940D9076C` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\SISDP-DEM-GENERATION-BHUVAN.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\SISDP-DEM-GENERATION-BHUVAN.pdf` | `7258CC6B928CBF97` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\4_Schott_water_workshop_2012.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\4_Schott_water_workshop_2012.pdf` | `510D084BC6BE6F99` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\agri_technical_report_with_table_contents.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\agri_technical_report_with_table_contents.pdf` | `B6F34B7A87F3FE80` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\ISSFD23_OD2_1.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\ISSFD23_OD2_1.pdf` | `6ED11888B0854949` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\Srivastava_etal.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\Srivastava_etal.pdf` | `7A656044948E2D7C` |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册\id1262778-paper-001.pdf` | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\id1262778-paper-001.pdf` | `2DDEA1AD6AA68DDA` |

## 缓存、下载残留和临时锁文件

| 已删除路径 | 原因 |
| --- | --- |
| `E:\学习资料\10-remote-sensing-surveying\测绘标准\1：25000，1：50000相关测绘标准\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\.DS_Store` | macOS Finder 缓存 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\ding_mid.png.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\CesiumLab_操作培训\cesiumlab(v.1.3.14)故宫模型切片.mp4.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\CesiumLab_操作培训\超大范围模型切片.mp4.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\qiaofeng\dist\.DS_Store` | macOS Finder 缓存 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_Terrminal\热力图.mov.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_vtxf\框选.mp4.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_向上吧，少年\加载体数据.wmv.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_种瓜的\VID_20191112_220127.mp4.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_系统重启\第一次培训.jpg.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\会议_广告_推销\附件：CITTE 2019参观回执表.docx.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\常见问题解决方案\.DS_Store` | macOS Finder 缓存 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\常见问题解决方案\05.html.qqdownload` | 下载残留 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\常见问题解决方案\~$sium问题.docx` | Office 临时锁文件 |
| `E:\学习资料\20-programming-ai\CUDA\GPU高性能计算之CUDA》实例\《GPU高性能计算之CUDA》实例\ACsearch_DPPcompact_with_driver\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\20-programming-ai\CUDA\GPU高性能计算之CUDA》实例\《GPU高性能计算之CUDA》实例\GPU高性能计算之CUDA_书中实例_All\书中实例    GPU高性能计算之CUDA\ACsearch_DPPcompact_with_driver\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\20-programming-ai\CUDA\GPU高性能计算之CUDA》实例\《GPU高性能计算之CUDA》实例\GPU高性能计算之CUDA_书中实例_All\书中实例    GPU高性能计算之CUDA\simpleGL\doc\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\20-programming-ai\CUDA\SiftGPU-master\SiftGPU-master\data\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\20-programming-ai\JavaScript深度学习\JavaScript深度学习-彩图\彩图\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\~$ometric_Cross_Calibration_for_Pushbroom_Satellites-20170831.docx` | Office 临时锁文件 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\未确认 300932.crdownload` | Chrome 下载残留 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\未确认 638067.crdownload` | Chrome 下载残留 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\CImg-master\html\img\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\mosaic\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\90-misc-review\年终中总结\~$2016年中总结崔子豪.pptx` | Office 临时锁文件 |
| `E:\学习资料\30-books-papers\论文\~$文超博士论文.docx` | Office 临时锁文件 |
| `E:\学习资料\40-tools-operations\软件操作\ERDAS-envi操作\Thumbs.db` | Windows 缩略图缓存 |
| `E:\学习资料\40-tools-operations\软件操作\ERDAS-envi操作\~$平面平差报告.docx` | Office 临时锁文件 |

## 空目录

| 已删除路径 | 原因 |
| --- | --- |
| `E:\学习资料\90-misc-review\收集资料\卫星使用手册` | 删除 12 个哈希确认重复 PDF 后为空 |

## 后续建议

下一批如果继续清理，应先生成新的确认草案，不建议直接处理中风险重复项。优先级建议：

1. WebGL/Cesium 重复 PDF，先确认保留入口。
2. 泛化书籍重复项，确认个人阅读价值后再处理。
3. 代码库内部重复项暂不处理。
## 第一批低风险清理

执行日期：2026-06-20

本批根据 `cleanup-confirmation.md` 中“建议可删除”分组执行，只删除旧安装包、破解包和低知识价值工具安装器；未删除项目文档、源码、模型、三维瓦片、视频、论文和标准资料。

| 已删除路径 | 类型 | 大小（字节） | 原因 |
| --- | --- | ---: | --- |
| `E:\SUTPC\00-lifecycle-project\全生命周期\Xmind破解包.zip` | 文件 | 286214727 | 破解包压缩包，非项目知识资产 |
| `E:\SUTPC\00-lifecycle-project\全生命周期\Xmind破解包` | 目录 | 399279942 | 破解包目录，非项目知识资产 |
| `E:\SUTPC\00-lifecycle-project\全生命周期\Axure9\AxureRP-Setup-Beta.exe` | 文件 | 107082800 | 旧版 Axure 安装程序 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\android-studio-bundle-162.4069837-windows.exe` | 文件 | 2020009280 | 旧 Android Studio 安装包，体量大，可用新版替代 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\opencv-3.3.0-vc14.exe` | 文件 | 165414734 | 旧 OpenCV 安装包，不是学习正文 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\vs_community__1685022915.1504234835.exe` | 文件 | 1069968 | 旧 Visual Studio 在线安装器 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\UnityDownloadAssistant-2017.1.0f3.exe` | 文件 | 736040 | 旧 Unity 安装器 |

释放空间：`2,979,807,491` 字节，约 `2.78 GiB`。

复查结果：以上 7 个路径均已不存在。
