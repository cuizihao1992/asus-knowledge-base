# 遥感几何与图像拼接论文清单

生成日期：2026-06-19

资料来源：`E:\学习资料\图像拼接`、`E:\学习资料\论文`、`E:\学习资料\RUNSAC`、`E:\学习资料\黄师兄的论文`、`E:\学习资料\未分类`。本文只做索引和主题判断，未移动、删除、解压或上传原始资料。

## 总体判断

这组资料是 `E:\学习资料` 中研究价值最高的一组，主题集中在：

- Pushbroom 卫星几何与交叉定标。
- 线阵 CCD 畸变、相机指向差、严格传感器模型恢复。
- 图像拼接、图像配准、SIFT/SURF/RANSAC、相位相关。
- 光流、视频稳像、卫星视频运动目标检测。
- RPC 模型、正射校正、同轨立体建模。

它适合沉淀为个人研究脉络，而不是简单归入“论文资料”。

## 资料组结构

| 资料组 | 路径 | 内容类型 | 价值判断 |
| --- | --- | --- | --- |
| 图像拼接 | `E:\学习资料\图像拼接` | 论文、C++/MATLAB 代码、CImg/ImageStitching/mosaic、安装包 | 核心保留 |
| 论文 | `E:\学习资料\论文` | Pushbroom、CCD 畸变、双相机、RANSAC、相位相关 | 核心保留 |
| RUNSAC | `E:\学习资料\RUNSAC` | RANSAC 论文、Python/Jupyter 示例 | 优先摘要 |
| 黄师兄的论文 | `E:\学习资料\黄师兄的论文` | RFM、卫星基础影像、视角计算、严格模型恢复 | 优先摘要 |
| 未分类 | `E:\学习资料\未分类` | RPC、IRS-P5、相位相关、几何处理、定标场等 | 待分类后保留 |

## 主题索引

### 1. Pushbroom 卫星几何与 CCD 畸变

| 文件 | 路径 | 初步主题 | 建议 |
| --- | --- | --- | --- |
| `Geometric_Cross_Calibration_for_Pushbroom_Satellites-20170831.docx` | `E:\学习资料\图像拼接` | Pushbroom 卫星交叉定标 | 优先摘要 |
| `Geometric_Cross_Calibration_for_Pushbroom_Satellites-20170831——czh.docx` | `E:\学习资料\图像拼接` | 带个人修改版本 | 保留版本关系 |
| `CCD distortion calibration without accurate ground control data for pushbroom satellites.pdf` | `E:\学习资料\论文` | 无精确控制点的 CCD 畸变定标 | 优先摘要 |
| `Interior self-calibration method for linear CCD array pushbroom satellites_20180323 - czh.docx` | `E:\学习资料\论文\CCD distortion calibration without accurate ground control data for pushbroom satellites` | 线阵 CCD 自定标 | 优先摘要 |
| `Decentering Distortion of Lenses.pdf` | `E:\学习资料\论文` | 镜头偏心畸变 | 保留 |
| `Variation in Distortion with Magnification.pdf` | `E:\学习资料\论文` | 畸变与倍率变化 | 保留 |

判断：

- 这是最接近个人研究主线的资料组。
- Word 文档体量较大，可能含图表或修订，不做自动解析。
- 后续可以按“问题、方法、输入、输出、结论、可复用经验”做专题摘要。

### 2. 图像拼接、图像配准和全景生成

| 文件 | 路径 | 初步主题 | 建议 |
| --- | --- | --- | --- |
| `Multiple View Geometry in Computer Vision.pdf` | `E:\学习资料\图像拼接` | 多视图几何基础 | 核心参考 |
| `A Database and Evaluation Methodology for Optical Flow.pdf` | `E:\学习资料\图像拼接` | 光流评估 | 保留 |
| `Method of Real Time Automatic Video Stitching.pdf` | `E:\学习资料\图像拼接` | 实时视频拼接 | 保留 |
| `upright_tpami.pdf` | `E:\学习资料\图像拼接` | 局部特征/图像匹配相关 | 保留 |
| `基于多局部特征匹配的全自动图像拼接.pdf` | `E:\学习资料\图像拼接` | 特征匹配拼接 | 保留 |
| `结合相位和ＳＩＦＴ特征相关的图像自动配准算法.pdf` | `E:\学习资料\图像拼接` | 相位相关 + SIFT | 优先摘要 |
| `数字图像拼接方法研究进展_余宏生.pdf` | `E:\学习资料\图像拼接` | 综述 | 优先摘要 |
| `图像拼接的改进算法.pdf` | `E:\学习资料\图像拼接` | 拼接算法改进 | 保留 |
| `一种基于SURF算法的柱面全景影像拼接方法_邓非.pdf` | `E:\学习资料\图像拼接` | SURF + 柱面全景 | 保留 |
| `一种全自动稳健的图像拼接融合算法.pdf` | `E:\学习资料\图像拼接` | 自动稳健拼接 | 保留 |

判断：

- 这组资料适合做“图像拼接方法谱系”：特征提取、匹配、RANSAC、变换模型、融合。
- 后续可和代码资料 `ImageStitching-master`、`mosaic` 对照。

### 3. RANSAC、相位相关和匹配算法

| 文件/目录 | 路径 | 初步主题 | 建议 |
| --- | --- | --- | --- |
| `RANSAC.pdf` | `E:\学习资料\RUNSAC` | RANSAC 基础资料 | 优先摘要 |
| `ransac-publication.pdf` | `E:\学习资料\RUNSAC` | RANSAC 论文 | 保留 |
| `lecture15_6pp.pdf` | `E:\学习资料\RUNSAC` | 课程讲义 | 保留 |
| `plot_matching.py` | `E:\学习资料\RUNSAC` | 匹配示例代码 | 可读代码 |
| `plot_matching.ipynb` | `E:\学习资料\RUNSAC` | 匹配示例 Notebook | 可读代码 |
| `A Fast Direct Fourier-Based Algorithm for Subpixel Registration of Images.pdf` | `E:\学习资料\论文` | 亚像素配准 | 优先摘要 |
| `基于相位相关的图像配准算法.pdf` | `E:\学习资料\论文` | 相位相关配准 | 优先摘要 |
| `Phase Correlation Based Image Alignment with Subpixel Accuracy.pdf` | `E:\学习资料\未分类` | 亚像素相位相关 | 优先摘要 |

判断：

- 可形成一个小专题：从 RANSAC 到相位相关的稳健匹配与配准。
- Python/Jupyter 示例体量小，后续可读取代码做算法摘要。

### 4. 遥感正射校正、RPC 和严格模型

| 文件 | 路径 | 初步主题 | 建议 |
| --- | --- | --- | --- |
| `基于RPC模型的IRS_P5影像正射校正_王红平.pdf` | `E:\学习资料\未分类` | RPC 正射校正 | 优先摘要 |
| `基于有理多项式系数模型的物方面元最小二乘匹配.pdf` | `E:\学习资料\未分类` | RPC/RFM 与匹配 | 保留 |
| `同轨立体建模分析.pdf` | `E:\学习资料\未分类` | 同轨立体 | 保留 |
| `附件5 全球定标场.pdf` | `E:\学习资料\未分类`、`E:\学习资料\收集资料` | 全球定标场 | 重复候选，保留索引 |
| `Compensation_of_Distortions_for_Satellite_Basic_Images_Based_on_Rational_Function_Model-21.docx` | `E:\学习资料\黄师兄的论文` | RFM 畸变补偿 | 优先摘要 |
| `Pixel-by-Pixel_Calculation_of_Sensor_Viewing_Angles_using_Rational_Function_Model-23.docx` | `E:\学习资料\黄师兄的论文` | 基于 RFM 的逐像素视角计算 | 优先摘要 |
| `Robust_Approach_to_Recovery_of_Rigorous_Sensor_Model_using_Rational_Function_Model-63终稿.docx` | `E:\学习资料\黄师兄的论文` | RFM 恢复严格传感器模型 | 优先摘要 |

判断：

- 与遥感产品、测绘标准、卫星手册可形成强关联。
- 建议后续建立“RPC/RFM/严格模型”专题。

### 5. 视频、光流和运动目标

| 文件 | 路径 | 初步主题 | 建议 |
| --- | --- | --- | --- |
| `卫星视频运动目标检测算法.pdf` | `E:\学习资料\图像拼接` | 卫星视频目标检测 | 保留 |
| `基于背景差分法和光流法的视频动态目标检测与跟踪_王春涛.pdf` | `E:\学习资料\图像拼接` | 视频目标检测与跟踪 | 保留 |
| `视频运动目标检测与跟踪算法研究_彭艳芳.caj` | `E:\学习资料\图像拼接` | 视频运动目标检测 | 保留 |
| `A Database and Evaluation Methodology for Optical Flow.pdf` | `E:\学习资料\图像拼接` | 光流数据和评估 | 保留 |

判断：

- 和图像拼接主线相关，但优先级略低。
- 可以后续作为“卫星视频稳像/目标检测”专题候选。

## 代码和示例工程

| 目录 | 类型 | 初步用途 | 建议 |
| --- | --- | --- | --- |
| `E:\学习资料\图像拼接\CImg-master` | C++/头文件/示例 | CImg 图像处理库 | 保留索引 |
| `E:\学习资料\图像拼接\CImg_latest` | C++/头文件 | CImg 版本资料 | 重复/版本候选 |
| `E:\学习资料\图像拼接\ImageStitching-master` | C++ 工程 | 图像拼接实现 | 后续可读入口 |
| `E:\学习资料\图像拼接\mosaic` | MATLAB | SIFT、RANSAC、Homography、Mosaic | 优先摘要候选 |
| `E:\学习资料\RUNSAC\plot_matching.py` | Python | 匹配示例 | 可直接读 |
| `E:\学习资料\RUNSAC\plot_matching.ipynb` | Notebook | 匹配示例 | 可直接读 |

整理建议：

- 先看 `mosaic\main.m`、`ransac1.m`、`solveHomo.m` 和 `ImageStitching-master\ImageStitching\main.cpp`。
- 不需要复制整个代码库，只提炼算法流程和入口文件。

## 可疑或待确认项

| 项目 | 路径 | 判断 |
| --- | --- | --- |
| Android Studio 安装包 | `E:\学习资料\图像拼接\android-studio-bundle-162.4069837-windows.exe` | 可删除候选，需确认 |
| OpenCV 安装包 | `E:\学习资料\图像拼接\opencv-3.3.0-vc14.exe` | 可删除候选，需确认 |
| 临时 Word 锁文件 | `~$ometric_Cross_Calibration_for_Pushbroom_Satellites-20170831.docx` | 可删除候选，需确认 |
| 下载残留 | `E:\学习资料\图像拼接\未确认 *.crdownload` | 可删除候选，需确认 |
| 大型 Word 双版本 | 两个 `Geometric_Cross_Calibration...docx` | 版本关系待确认，不删除 |

## 推荐后续动作

1. 先摘要 Pushbroom/CCD 畸变定标相关文档，形成研究主线。
2. 再摘要 RANSAC/相位相关/图像配准，形成算法主线。
3. 读取 `mosaic` 和 `ImageStitching-master` 的入口代码，提炼图像拼接实现流程。
4. 单独生成 `RPC/RFM/严格模型` 专题，把黄师兄论文和未分类遥感几何资料归拢。
5. 安装包、下载残留和临时文件只列候选，人工确认后再处理。

## 当前结论

这组资料应作为“遥感几何与图像处理研究资产”保留。它比普通学习资料价值更高，适合持续沉淀为：

- 研究主题清单。
- 论文阅读笔记。
- 算法流程图。
- 代码实现摘要。
- 与测绘标准、卫星手册的交叉索引。
