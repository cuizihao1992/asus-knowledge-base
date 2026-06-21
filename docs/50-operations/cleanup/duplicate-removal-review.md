# 重复文件删除确认草案

生成日期：2026-06-20

范围：基于 `docs/generated/learning-duplicate-candidates.md` 中已哈希确认的重复候选，整理“建议保留路径 / 删除候选路径 / 风险 / 人工确认”草案。本文不执行删除、不移动文件、不解压压缩包。

更新：2026-06-20 已根据用户确认删除第一批低风险对象，详见 `docs/generated/deleted-files-2026-06-20.md`。本文中 A 组卫星手册重复副本已执行，其他组仍未执行。

## 使用说明

这不是删除脚本，也不是最终删除指令。它只是把已确认重复的文件整理成可人工审查的表。

执行任何删除前，仍需要逐项确认：

```text
操作：删除重复副本
保留路径：
删除候选路径：
SHA256：
原因：
风险：
是否可恢复：
需要人工确认：是
```

## 保留路径原则

| 原则 | 说明 |
| --- | --- |
| 保留主题主目录 | 例如卫星手册优先保留 `E:\学习资料\10-remote-sensing-surveying\卫星使用手册` |
| 保留专题目录 | Cesium/WebGL 资料优先保留 Cesium 或 webGL 专题目录中更清晰的位置 |
| 保留研究上下文 | 论文资料优先保留带上下文的研究目录，不轻易删除根目录副本 |
| 保留可读入口 | 学习文档目录如果更像精选入口，则可保留为主索引 |
| 不处理代码库内部重复 | CImg、SiftGPU、ImageStitching 等目录不做单文件删除建议 |

## 建议优先确认

### A. 卫星手册整目录重复（已执行）

这组重复最清晰：`E:\学习资料\10-remote-sensing-surveying\卫星使用手册` 与 `E:\学习资料\90-misc-review\收集资料\卫星使用手册` 中 12 个 PDF 的文件名、大小和 SHA256 一致。

建议：优先保留 `E:\学习资料\10-remote-sensing-surveying\卫星使用手册`，把 `E:\学习资料\90-misc-review\收集资料\卫星使用手册` 中的对应 PDF 列为删除候选。

原因：

- `卫星使用手册` 是主题主目录，语义更清楚。
- `收集资料` 更像混合收集池。
- 两处文件哈希一致，重复证据充分。

风险：

- 删除副本后，`收集资料` 中原有目录结构会缺少这组文件。
- 如果曾有外部快捷方式或人工记忆路径指向 `收集资料\卫星使用手册`，需要更新索引。

| 保留路径 | 已删除路径 | SHA256 前缀 | 风险 | 状态 |
| --- | --- | --- | --- | --- |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\ALOS_HB_RevC_EN.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\ALOS_HB_RevC_EN.pdf` | `DA79C878A1FB3CE9` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\PleiadesUserGuide.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\PleiadesUserGuide.pdf` | `D48B6EB25A51907F` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\DigitalGlobe_Core_Imagery_Products_Guide.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\DigitalGlobe_Core_Imagery_Products_Guide.pdf` | `41DF005E0833E2B3` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\r439_9_spot_geometry_handbook.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\r439_9_spot_geometry_handbook.pdf` | `11BE35EFB59F44A5` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\TX-GS-DD-3307_TerraSAR-X_Ground_Segment_Level_1b_Product_Format_Specification.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\TX-GS-DD-3307_TerraSAR-X_Ground_Segment_Level_1b_Product_Format_Specification.pdf` | `BC35AF543C474869` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\P5_data_user_handbook.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\P5_data_user_handbook.pdf` | `A18BD69940D9076C` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\SISDP-DEM-GENERATION-BHUVAN.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\SISDP-DEM-GENERATION-BHUVAN.pdf` | `7258CC6B928CBF97` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\4_Schott_water_workshop_2012.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\4_Schott_water_workshop_2012.pdf` | `510D084BC6BE6F99` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\agri_technical_report_with_table_contents.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\agri_technical_report_with_table_contents.pdf` | `B6F34B7A87F3FE80` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\ISSFD23_OD2_1.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\ISSFD23_OD2_1.pdf` | `6ED11888B0854949` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\Srivastava_etal.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\Srivastava_etal.pdf` | `7A656044948E2D7C` | 低 | 已删除重复副本 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册\id1262778-paper-001.pdf` | `E:\学习资料\90-misc-review\收集资料\卫星使用手册\id1262778-paper-001.pdf` | `2DDEA1AD6AA68DDA` | 低 | 已删除重复副本 |

### B. WebGL / Cesium 重复资料

这组文件和当前 GIS/BIM 三维可视化主线相关，建议更谨慎。删除前要先确定未来索引入口采用哪个目录。

建议：暂时优先保留 `E:\学习资料\30-books-papers\学习文档` 中的精选入口，同时保留 Cesium 主目录中的专题资料；只把完全重复的深层副本列为候选。

| 保留路径 | 删除候选路径 | SHA256 前缀 | 风险 | 是否确认 |
| --- | --- | --- | --- | --- |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\WebGL 编程指南.pdf` | `E:\学习资料\00-gis-cesium-webgl\Cesium资料\计算机_图形学\WebGL 编程指南.pdf` | `C1854BC216525CD2` | 中，可能破坏子目录完整性 | 待人工确认 |
| `E:\学习资料\30-books-papers\学习文档\WebGL编程指南.pdf` | `E:\学习资料\00-gis-cesium-webgl\Cesium资料\计算机_图形学\WebGL编程指南.pdf` | `C1854BC216525CD2` | 中，存在多命名同内容 | 待人工确认 |
| `E:\学习资料\00-gis-cesium-webgl\webGL\WebGL.Insights.-.Patrick.Cozzi.pdf` | `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_vtxf\WebGL.Insights.-.Patrick.Cozzi.pdf` | `01CF665AA52DEF7A` | 中，专题目录可能依赖该副本 | 待人工确认 |
| `E:\学习资料\30-books-papers\学习文档\3DEngineDesignForVirtualGlobesSection121（level of details）.pdf` | `E:\学习资料\00-gis-cesium-webgl\Cesium资料\计算机_图形学\3DEngineDesignForVirtualGlobesSection121（level of details）.pdf` | `30090B27395F7CDE` | 中 | 待人工确认 |
| `E:\学习资料\30-books-papers\学习文档\CesiumlabHelp.pdf` | `E:\学习资料\00-gis-cesium-webgl\Cesium资料\计算机_图形学\CesiumlabHelp.pdf` | `EC54BFA6443C324F` | 中 | 待人工确认 |
| `E:\学习资料\30-books-papers\学习文档\CESIUM基础培训代码(cesiumlab提供).zip` | `E:\学习资料\00-gis-cesium-webgl\Cesium资料\计算机_图形学\CESIUM基础培训代码(cesiumlab提供).zip` | `7A92956564F3F0EE` | 中，压缩包不解压，内容未审查 | 待人工确认 |

### C. 书籍和工具手册重复

这组风险相对低，但和当前主线关系不同。建议先人工确认个人阅读价值，再决定是否清理。

| 保留路径 | 删除候选路径 | SHA256 前缀 | 风险 | 是否确认 |
| --- | --- | --- | --- | --- |
| `E:\学习资料\30-books-papers\书籍\人类的性存在（第8版）.pdf` | `E:\学习资料\30-books-papers\书籍\ipad\人类的性存在（第8版）.pdf` | `255C64159ADC1475` | 低，泛化书籍但可能有阅读偏好路径 | 待人工确认 |
| `E:\学习资料\20-programming-ai\linux命令\Linux命令大全(Linuxidc.com修改版).chm` | `E:\学习资料\90-misc-review\收集资料\linux命令大全\Linux命令大全(Linuxidc.com修改版).chm` | `CBF080BA0182ADB7` | 低 | 待人工确认 |
| `E:\学习资料\20-programming-ai\linux命令\Linux命令大全(Linuxidc.com修改版).chw` | `E:\学习资料\90-misc-review\收集资料\linux命令大全\Linux命令大全(Linuxidc.com修改版).chw` | `91CA3FC5B4CD2767` | 低 | 待人工确认 |
| `E:\学习资料\20-programming-ai\CUDA\cuda编程学习\GPU高性能运算之CUDA.pdf` | `E:\学习资料\30-books-papers\书籍\GPU高性能运算之CUDA.pdf` | `A5743011A30F9A87` | 中，需确认是否按技术专题还是书籍目录保留 | 待人工确认 |
| `E:\学习资料\10-remote-sensing-surveying\测绘标准\1：25000，1：50000相关测绘标准\分辨率与比例尺.pdf` | `E:\学习资料\40-tools-operations\软件操作\ERDAS-envi操作\分辨率与比例尺.pdf` | `F251E98D02E53871` | 中，两个目录主题都合理 | 待人工确认 |

### D. 研究资料重复

研究资料不建议优先删除。即使哈希一致，也要考虑目录上下文。

| 保留路径 | 删除候选路径 | SHA256 前缀 | 风险 | 是否确认 |
| --- | --- | --- | --- | --- |
| `E:\学习资料\30-books-papers\论文\CCD distortion calibration without accurate ground control data for pushbroom satellites\CCD distortion calibration without accurate ground control data for pushbroom satellites.pdf` | `E:\学习资料\30-books-papers\论文\CCD distortion calibration without accurate ground control data for pushbroom satellites.pdf` | `40E83D864012B409` | 中，高价值研究资料，保留子目录上下文更稳 | 待人工确认 |

## 不建议处理的重复项

| 范围 | 原因 |
| --- | --- |
| `CImg-master`、`CImg_latest`、`ImageStitching-master` 内部重复 | 可能是第三方库版本或工程依赖，单文件删除会破坏工程完整性 |
| `SiftGPU` 与 `SiftGPU-master` 内部重复 | 需要先确认哪个目录可运行，不能按文件删 |
| Cesium 专栏、测试数据、工具包内部重复 | 可能服务于演示或课程上下文 |
| 任何 `.zip`、`.rar`、`.7z` 内部内容 | 当前规则是不解压、不比较压缩包内部内容 |

## 人工确认批次建议

| 批次 | 内容 | 原因 |
| --- | --- | --- |
| 第一批 | 卫星手册 12 个重复 PDF | 证据清楚、路径语义清楚、风险最低 |
| 第二批 | WebGL/Cesium 重复 PDF | 体量较大，但需要确认保留入口 |
| 第三批 | 泛化书籍和工具手册 | 和主线关系较弱，风险较低 |
| 第四批 | 研究资料重复 | 价值高，最后处理 |
| 不处理 | 代码库内部重复 | 易破坏工程结构 |

## 当前结论

如果未来要真正删除，建议只从第一批开始，并逐项确认。当前阶段仍保持只读：本文只提供人工审查草案，不执行任何文件操作。
