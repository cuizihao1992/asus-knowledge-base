# E:\学习资料 浅层索引与价值评估

生成日期：2026-06-19

范围：按 `docs/11-evaluation-rules.md` 对 `E:\学习资料` 做浅层索引、价值评估和整理建议。未移动、删除、解压或上传任何原始资料；未运行安装包；未读取视频、压缩包或数据库内容。

## 总览

`E:\学习资料` 是一个混合型学习资料目录，内容横跨 Cesium/WebGL、遥感测绘、图像拼接、CUDA、JavaScript、论文/毕设、年终总结、书籍、软件操作和历史压缩包。

初步判断：

- 这是 P2 级学习资料资产区，其中 Cesium/WebGL、遥感测绘、图像拼接和论文/毕设可提升到 P1。
- 目录中有大量 PDF、视频、压缩包、Office 文档和少量代码/示例工程，适合先做索引，再挑选专题摘要。
- 大体量文件主要是安装包、视频课程、压缩包和扫描版书籍，不适合放入 GitHub。
- `近期zip`、安装包、重复电子书和下载残留文件只列为待确认或可删除候选，不做实际处理。

## 顶层结构

| 目录/文件 | 类型 | 路径 | 最近更新时间 | 初步判断 |
| --- | --- | --- | --- | --- |
| Cesium资料 | Cesium/WebGL 视频、PDF、示例 | `E:\学习资料\00-gis-cesium-webgl\Cesium资料` | 2020-02-27 | 高价值，和 GIS/BIM/三维可视化强相关 |
| 图像拼接 | 图像处理、卫星影像、代码和安装包 | `E:\学习资料\10-remote-sensing-surveying\图像拼接` | 2019-01-03 | 高价值，但混有大安装包 |
| 书籍 | PDF/EPUB/PDZ 电子书 | `E:\学习资料\30-books-papers\书籍` | 2018-10-24 | 保留索引，存在重复和泛化书籍 |
| 年终中总结 | 个人/团队阶段总结 | `E:\学习资料\90-misc-review\年终中总结` | 2018-10-31 | 有个人成长和项目脉络价值 |
| 近期zip | 历史压缩包和下载包 | `E:\学习资料\50-archive-zips\近期zip` | 2017-12-06 | 待确认，不解压 |
| 收集资料 | 测绘、卫星、坐标转换、工具资料 | `E:\学习资料\90-misc-review\收集资料` | 2018-04-07 | 专业资料，建议保留索引 |
| webGL | WebGL 书籍、示例和压缩包 | `E:\学习资料\00-gis-cesium-webgl\webGL` | 2018-10-24 | 可和 Cesium 合并成专题 |
| 软件操作 | Eclipse、ERDAS/ENVI、MATLAB、VS 操作资料 | `E:\学习资料\40-tools-operations\软件操作` | 2018-04-07 | 工具类资料，择机摘要 |
| CUDA | CUDA/GPU 计算资料和示例 | `E:\学习资料\20-programming-ai\CUDA` | 2017-12-06 | 技术资料，可归入 AI/高性能计算 |
| 学习文档 | Cesium/WebGL/跨域等文档 | `E:\学习资料\30-books-papers\学习文档` | 2019-06-03 | 高价值，和 Cesium 资料重复关联 |
| 1：25000，1：50000相关测绘标准 | 测绘标准 PDF/文档 | `E:\学习资料\10-remote-sensing-surveying\测绘标准\1：25000，1：50000相关测绘标准` | 2018-04-07 | 专业标准，保留索引 |
| 硕士毕设开题 | 开题报告、PPT、论文资料 | `E:\学习资料\10-remote-sensing-surveying\硕士毕设开题` | 2018-06-02 | 个人研究脉络，优先摘要 |
| JavaScript深度学习 | JS 深度学习资料和代码 | `E:\学习资料\20-programming-ai\JavaScript深度学习` | 2021-07-10 | 可作为 AI 学习专题 |
| 论文 | 图像配准、相机畸变、遥感几何论文 | `E:\学习资料\30-books-papers\论文` | 2018-10-24 | 高价值，适合论文清单 |
| 未分类 | PDF/CAJ 杂项论文 | `E:\学习资料\90-misc-review\未分类` | 2018-04-04 | 待分类，先保留 |
| JavaScript | JS 电子书 | `E:\学习资料\20-programming-ai\JavaScript` | 2018-10-24 | 通用技术资料 |
| 卫星使用手册 | 卫星产品和影像使用手册 | `E:\学习资料\10-remote-sensing-surveying\卫星使用手册` | 2018-04-07 | 遥感资料，保留索引 |
| 黄师兄的论文 | 遥感几何模型论文文档 | `E:\学习资料\10-remote-sensing-surveying\黄师兄的论文` | 2018-04-07 | 小而明确，优先摘要候选 |
| RUNSAC | RANSAC 论文和代码 | `E:\学习资料\10-remote-sensing-surveying\RUNSAC` | 2017-12-07 | 算法专题，可归入图像配准 |
| linux命令 | CHM 帮助手册 | `E:\学习资料\20-programming-ai\linux命令` | 2017-12-06 | 工具资料，低优先级 |
| 脚本 | 批处理和文本脚本 | `E:\学习资料\20-programming-ai\脚本` | 2017-12-06 | 低体量，待确认 |
| 根目录文档 | Cesium/BIM、Python、遥感、毕设等文档 | `E:\学习资料\*` | 2015-2020 | 多个高价值单文件 |

## 浅层目录体量

统计口径：顶层目录向下浅层递归，记录可见文件数和估算体量。

| 目录 | 浅层文件数 | 浅层体量 | 主要类型 | 判断 |
| --- | ---: | ---: | --- | --- |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料` | 270 | 约 3.96GB | `.mp4`、`.pdf`、`.wmv`、`.gif`、`.zip` | 三维 GIS 学习核心资料 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接` | 198 | 约 2.67GB | `.cpp`、`.h`、`.pdf`、`.JPG`、`.m` | 遥感/图像处理核心资料，含安装包 |
| `E:\学习资料\30-books-papers\书籍` | 83 | 约 1.77GB | `.pdf`、`.epub`、`.jpg`、`.txt`、`.pdz` | 电子书集合，需去重评估 |
| `E:\学习资料\90-misc-review\年终中总结` | 95 | 约 650MB | `.pptx`、`.ppt`、`.docx`、`.xlsx`、`.png` | 历史总结，适合沉淀经验 |
| `E:\学习资料\50-archive-zips\近期zip` | 34 | 约 624MB | `.zip`、`.rar`、`.wdb`、`.exe` | 压缩包池，不解压 |
| `E:\学习资料\90-misc-review\收集资料` | 218 | 约 234MB | `.for`、`.pdf`、`.png`、`.docx`、`.jpg` | 测绘/遥感工具资料 |
| `E:\学习资料\00-gis-cesium-webgl\webGL` | 13 | 约 175MB | `.pdf`、`.js`、`.rar`、`.html`、`.css` | WebGL 专题资料 |
| `E:\学习资料\40-tools-operations\软件操作` | 73 | 约 161MB | `.pdf`、`.docx`、`.m`、`.png`、`.doc` | 工具操作文档 |
| `E:\学习资料\20-programming-ai\CUDA` | 141 | 约 131MB | `.zip`、`.pdf`、`.txt`、`.jpg`、`.lib` | GPU/CUDA 学习资料 |
| `E:\学习资料\30-books-papers\学习文档` | 8 | 约 122MB | `.pdf`、`.html`、`.txt`、`.zip` | Cesium/WebGL 精简资料 |
| `E:\学习资料\10-remote-sensing-surveying\测绘标准\1：25000，1：50000相关测绘标准` | 25 | 约 98MB | `.pdf`、`.rar`、`.doc`、`.db` | 测绘标准资料 |
| `E:\学习资料\10-remote-sensing-surveying\硕士毕设开题` | 58 | 约 74MB | `.pdf`、`.pptx`、`.doc`、`.vsdx`、`.docx` | 个人研究资料 |
| `E:\学习资料\20-programming-ai\JavaScript深度学习` | 49 | 约 67MB | `.jpg`、`.csv`、`.zip`、`.db`、`.pdf` | JS/AI 学习专题 |
| `E:\学习资料\30-books-papers\论文` | 16 | 约 54MB | `.pdf`、`.docx`、`.caj` | 遥感/图像论文 |
| `E:\学习资料\90-misc-review\未分类` | 15 | 约 46MB | `.pdf`、`.caj` | 待分类论文资料 |
| `E:\学习资料\20-programming-ai\JavaScript` | 1 | 约 42MB | `.pdf` | JS 电子书 |
| `E:\学习资料\10-remote-sensing-surveying\卫星使用手册` | 12 | 约 29MB | `.pdf` | 卫星产品手册 |
| `E:\学习资料\10-remote-sensing-surveying\黄师兄的论文` | 3 | 约 11MB | `.docx` | 遥感几何模型论文 |
| `E:\学习资料\10-remote-sensing-surveying\RUNSAC` | 5 | 约 10MB | `.pdf`、`.py`、`.ipynb` | RANSAC 算法资料 |
| `E:\学习资料\20-programming-ai\linux命令` | 2 | 约 1MB | `.chm`、`.chw` | 工具手册 |
| `E:\学习资料\20-programming-ai\脚本` | 124 | 约 0.02MB | `.txt`、`.bat` | 小脚本，待确认 |

## 文件类型分布

浅层扫描的主要扩展名如下：

| 类型 | 数量 | 用途判断 |
| --- | ---: | --- |
| `.pdf` | 286 | 书籍、论文、标准、工具手册，优先建立可检索清单 |
| `.txt` | 135 | 脚本说明、资料文本，待确认 |
| `.mp4` | 58 | Cesium/视频课程，只记录不上传 |
| `.zip` | 54 | 课程包、代码包、历史压缩包，不自动解压 |
| `.docx` | 44 | 论文、总结、研究文档，优先摘要候选 |
| `.pptx` | 34 | 汇报和总结材料，适合沉淀经验 |
| `.jpg` | 32 | 截图、教材图片、资料配图 |
| `.png` | 31 | 截图、资料配图 |
| `.rar` | 27 | 压缩包，不自动解压 |
| `.wmv` | 25 | 视频课程，只记录 |
| `.gif` | 24 | 教程动图或演示图 |
| `.doc` | 23 | 旧版 Word 文档，优先索引 |
| `.m` | 19 | MATLAB 脚本，可能与图像拼接/软件操作相关 |
| `.ppt` | 14 | 历史汇报材料 |
| `.js` | 14 | WebGL/示例脚本 |
| `.exe` | 12 | 安装包或工具，禁止运行 |
| `.qqdownload`、`.crdownload` | 12 | 下载残留，列入待确认/可删除候选 |
| `.caj` | 9 | 学术论文，需 CAJ 工具 |
| `.db`、`.sqlite` 类 | 4 | 数据库/资料库，只记录 |
| `.py`、`.ipynb` | 2 | 算法示例，可读性较高 |

## 价值评分

| 资料组 | 项目关联 | 复用价值 | 领域价值 | 可理解性 | 风险价值 | 总分 | 分类 | 优先级 | 建议 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | --- |
| Cesium/WebGL 资料 | 3 | 3 | 3 | 2 | 2 | 13 | 核心保留，优先摘要 | P1 | 关联 SUTPC、Data、三维 GIS 专题 |
| 图像拼接/遥感几何资料 | 3 | 3 | 3 | 2 | 3 | 14 | 核心保留，优先摘要 | P1 | 建立图像配准/卫星几何专题 |
| 测绘标准与卫星使用手册 | 2 | 2 | 3 | 3 | 2 | 12 | 核心保留，优先摘要 | P1 | 做标准和产品手册索引 |
| 论文、硕士毕设、黄师兄论文、RUNSAC | 3 | 2 | 3 | 2 | 3 | 13 | 核心保留，优先摘要 | P1 | 建立研究脉络清单 |
| 年终中总结 | 2 | 2 | 2 | 2 | 3 | 11 | 保留索引，择机摘要 | P2 | 提炼个人项目经验和阶段能力 |
| CUDA/GPU 资料 | 1 | 2 | 2 | 2 | 1 | 8 | 保留索引，择机摘要 | P2 | 归入 AI/高性能计算学习资料 |
| JavaScript/JS 深度学习 | 1 | 2 | 2 | 2 | 1 | 8 | 保留索引，择机摘要 | P2 | 和当前 AI/前端学习关联 |
| 软件操作资料 | 1 | 2 | 1 | 2 | 1 | 7 | 归档保留/待确认 | P3 | 仅保留常用工具文档 |
| 书籍目录 | 1 | 2 | 1 | 2 | 1 | 7 | 归档保留/待确认 | P3 | 先去重，再挑专业书 |
| 近期zip | 1 | 1 | 1 | 1 | 2 | 6 | 待确认 | P3 | 只生成压缩包清单，不解压 |
| 脚本、linux命令 | 0 | 1 | 1 | 1 | 1 | 4 | 待确认/归档保留 | P3 | 低优先级 |
| 安装包、下载残留 | 0 | 0 | 0 | 1 | 0 | 1 | 可删除候选 | P4 | 只列候选，人工确认后再处理 |

## 关键资料组

### Cesium/WebGL

相关路径：

- `E:\学习资料\00-gis-cesium-webgl\Cesium资料`
- `E:\学习资料\00-gis-cesium-webgl\webGL`
- `E:\学习资料\30-books-papers\学习文档`
- `E:\学习资料\00-gis-cesium-webgl\基于Cesium的三维GIS网络服务与BIM集成研究 - 杨李东.docx`

代表内容：

- CesiumLab 操作培训视频和压缩包。
- WebGL 编程指南、WebGL Insights、3D Engine Design for Virtual Globes 相关资料。
- Cesium 基础培训代码、跨域说明、地图/地形代码示例。

整理建议：

- 作为 `GIS / BIM / Cesium / WebGL` 专题的核心学习资料。
- 优先摘要根目录的 Cesium+BIM 文档和 `学习文档` 中的 Cesium 基础资料。
- 视频和课程压缩包只记录路径，不复制、不上传。

### 图像拼接与遥感几何

相关路径：

- `E:\学习资料\10-remote-sensing-surveying\图像拼接`
- `E:\学习资料\30-books-papers\论文`
- `E:\学习资料\90-misc-review\未分类`
- `E:\学习资料\10-remote-sensing-surveying\RUNSAC`
- `E:\学习资料\10-remote-sensing-surveying\黄师兄的论文`

代表内容：

- CImg、ImageStitching、mosaic 等代码或示例。
- Pushbroom satellites、RPC 模型、相位相关、RANSAC、相机畸变等论文。
- 根目录中的遥感卫星定位精度验证、卫星标准产品分级体系文档。

整理建议：

- 建立“遥感几何 / 图像配准 / 图像拼接”专题摘要。
- 区分论文、代码、安装包、实验资料。
- `android-studio-bundle`、`opencv-*.exe` 只列工具/安装包候选，不运行。

### 测绘标准和卫星手册

相关路径：

- `E:\学习资料\10-remote-sensing-surveying\测绘标准\1：25000，1：50000相关测绘标准`
- `E:\学习资料\10-remote-sensing-surveying\卫星使用手册`
- `E:\学习资料\90-misc-review\收集资料\卫星使用手册`

代表内容：

- 1:10000、1:25000、1:50000 地理信息数字成果标准。
- ALOS、Pleiades、DigitalGlobe、TerraSAR-X 等产品手册。
- DEM、DOM、DLG、DRG、正射影像、产品格式说明。

整理建议：

- 作为遥感/测绘基础资料保留。
- 后续可生成“测绘标准清单”和“卫星产品手册清单”。
- 不需要移动原文件，先建立可检索索引。

### 论文、开题和个人研究资料

相关路径：

- `E:\学习资料\10-remote-sensing-surveying\硕士毕设开题`
- `E:\学习资料\30-books-papers\论文`
- `E:\学习资料\10-remote-sensing-surveying\黄师兄的论文`
- `E:\学习资料\30-books-papers\崔子豪本科毕设论文.docx`

代表内容：

- 硕士开题报告多个版本、PPT、模板和查找论文目录。
- 图像配准、相机畸变、卫星几何模型相关论文。
- 本科毕设论文。

整理建议：

- 优先摘要“研究主题、方法、输入输出、可复用经验”。
- 保留版本号，不合并、不删除。
- 后续可做个人研究脉络时间线。

### 年终中总结

路径：`E:\学习资料\90-misc-review\年终中总结`

代表内容：

- 2015-2017 年中/年终总结 PPT、Word、Excel 和图片。
- 个人与团队阶段性材料。

整理建议：

- 不作为普通学习资料删除。
- 适合提炼“阶段项目、技能变化、工作成果、问题复盘”。
- 如要整理，先生成总结文件清单，再人工判断哪些值得摘要。

### 书籍和通用工具资料

相关路径：

- `E:\学习资料\30-books-papers\书籍`
- `E:\学习资料\20-programming-ai\JavaScript`
- `E:\学习资料\20-programming-ai\CUDA`
- `E:\学习资料\40-tools-operations\软件操作`
- `E:\学习资料\20-programming-ai\linux命令`

整理建议：

- 技术类书籍优先级高于泛化书籍。
- 重复书籍只列为重复候选，不删除。
- 工具操作资料按“仍会使用的工具”筛选：ENVI/ERDAS、MATLAB、VS、Eclipse、Linux。

## 大文件与风险清单

以下文件只建议记录，不建议提交 GitHub，也不建议未经确认移动或删除：

| 文件 | 大小级别 | 类型 | 处理建议 |
| --- | ---: | --- | --- |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\android-studio-bundle-162.4069837-windows.exe` | 约 1.93GB | 安装包 | 可删除候选，需确认是否仍需离线安装 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\CesiumLab_操作培训\cesiumlabdev.zip` | 约 363MB | 压缩包 | 只记录，不解压 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\CesiumLab_操作培训\cesiumlab(v1.3.11)处理max模型.mp4` | 约 303MB | 视频 | 视频资产索引 |
| `E:\学习资料\50-archive-zips\近期zip\55.欧比特卫星.rar` | 约 205MB | 压缩包 | 待确认，不解压 |
| `E:\学习资料\30-books-papers\书籍\c++书\Primer c++(第五版）.pdf` | 约 198MB | PDF | 保留索引，检查是否重复 |
| `E:\学习资料\30-books-papers\书籍\佛道学 2017-01-31 12.57.20_170212125350.pdf` | 约 181MB | PDF | 泛化书籍，归档保留 |
| `E:\学习资料\90-misc-review\年终中总结\2015中期总结报告.rar` | 约 175MB | 压缩包 | 待确认，不解压 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\CesiumLab_操作培训\cesiumlab(v1.3.13)处理ifc以及第一人称漫游.mp4` | 约 165MB | 视频 | 视频资产索引 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\Geometric_Cross_Calibration_for_Pushbroom_Satellites-20170831.docx` | 约 163MB | Word 文档 | 高价值，优先摘要候选 |
| `E:\学习资料\10-remote-sensing-surveying\图像拼接\opencv-3.3.0-vc14.exe` | 约 158MB | 安装包 | 可删除候选，需确认 |
| `E:\学习资料\30-books-papers\学习文档\WebGL编程指南.pdf` 等多处副本 | 单个约 81MB | PDF | 重复候选，先列清单 |
| `E:\学习资料\00-gis-cesium-webgl\Cesium资料\专栏_vtxf\WebGL.Insights.-.Patrick.Cozzi.pdf` 与 `E:\学习资料\00-gis-cesium-webgl\webGL\WebGL.Insights.-.Patrick.Cozzi.pdf` | 单个约 75MB | PDF | 重复候选，先列清单 |

## 可删除候选

注意：以下只是不执行任何动作的候选判断。

| 候选 | 路径/类型 | 原因 | 风险 |
| --- | --- | --- | --- |
| 大型安装包 | `.exe`，如 Android Studio、OpenCV 安装包 | 可能已有新版或可重新下载 | 可能仍用于旧环境复现 |
| 下载残留 | `.qqdownload`、`.crdownload` | 明显下载未完成或临时文件 | 需确认是否仍有关联资料 |
| 重复电子书 | 多处 `WebGL编程指南.pdf`、`WebGL.Insights` | 文件名和大小显示可能重复 | 删除前需比对哈希 |
| 老压缩包 | `近期zip`、部分课程包 | 内容未知，可能重复 | 不可直接删除，先列压缩包清单 |
| 泛化大 PDF | 与当前 GIS/BIM/AI/遥感无关的大书籍 | 知识库复用价值弱 | 可能有个人阅读价值 |

## 推荐后续动作

1. 生成 `Cesium/WebGL 学习资料专题摘要`，先覆盖 `学习文档`、`webGL` 和根目录 Cesium+BIM 文档。
2. 生成 `遥感几何与图像拼接论文清单`，覆盖 `图像拼接`、`论文`、`RUNSAC`、`黄师兄的论文`。
3. 生成 `测绘标准和卫星手册清单`，只记录标准号、产品类型和路径。
4. 生成 `学习资料大文件清单`，把安装包、视频、压缩包、重复 PDF 分开。
5. 对 `年终中总结` 做历史总结索引，但不要删除旧版本。
6. 最后再处理 `近期zip`，只做压缩包清单，不自动解压。

## 当前结论

`E:\学习资料` 值得保留为学习资料资产区，不适合直接清理。最有价值的整理方式不是移动文件，而是建立四类索引：

- Cesium/WebGL/GIS 可视化资料索引。
- 遥感几何、图像拼接和论文索引。
- 测绘标准、卫星产品手册索引。
- 大文件、压缩包、安装包和重复候选清单。

在人工确认前，继续坚持只生成索引、评估和清单，不移动、不删除、不解压、不上传原始资料。
