# 下载池与网盘目录浅层盘点

执行日期：2026-06-23

范围：本次只读盘点 `E:\Download`、`E:\BaiduNetdiskDownload`、`E:\360Downloads`、`E:\迅雷下载` 四个下载/缓存类目录。未移动、删除、解压或上传任何文件。

## 总览

| 目录 | 顶层目录数 | 顶层文件数 | 递归文件数 | 估算总量 | 判断 |
| --- | ---: | ---: | ---: | ---: | --- |
| `E:\Download` | 13 | 124 | 51,675 | 1.84 GB | 旧下载池，包含安装包、旧前端示例、APK、PDF、少量工作表 |
| `E:\BaiduNetdiskDownload` | 42 | 30 | 69,724 | 125.75 GB | 主要体量来源，包含 GIS/遥感、ArcGIS、3D Tiles、电子书、前端课程 |
| `E:\360Downloads` | 1 | 1 | 1 | 6.45 GB | 主要是一个 `360Downloads.zip` |
| `E:\迅雷下载` | 0 | 2 | 2 | 0.21 GB | 两个旧 GIS/三维工具安装包 |

## 主要大文件

| 文件 | 大小 | 日期 | 初步判断 |
| --- | ---: | --- | --- |
| `E:\BaiduNetdiskDownload\崔子豪交接整理.zip` | 8.36 GB | 2018-08-19 | 高价值历史交接包，先保留，只列目录后再决定 |
| `E:\BaiduNetdiskDownload\ArcGIS 10.5全套\ArcGIS_Enterprise_Windows_105_zh_CN_154108.iso` | 7.61 GB | 2018-07-12 | 旧 ArcGIS 安装介质，归档价值高，清理前需确认授权/安装需求 |
| `E:\BaiduNetdiskDownload\ArcGIS 10.5全套\ArcGIS_Enterprise_Windows_105_153981.iso` | 7.19 GB | 2018-07-12 | 同上，可能与中文包重复或互补 |
| `E:\BaiduNetdiskDownload\中山大学南校区\DEM.tif` | 6.44 GB | 2017-03-27 | 遥感/GIS 数据，保留并纳入数据资产索引候选 |
| `E:\360Downloads\360Downloads.zip` | 6.45 GB | 2026-03-19 | 下载缓存打包，建议先列目录，再判断是否拆分或删除 |
| `E:\BaiduNetdiskDownload\ArcGIS 10.5全套\ArcGIS_Desktop_105_153979.iso` | 6.20 GB | 2018-07-12 | 旧 ArcGIS 桌面安装介质，归档候选 |
| `E:\BaiduNetdiskDownload\ORA+11+G+R2+server+64bit+for+windows.iso` | 2.13 GB | 2020-01-12 | Oracle 安装介质，若无旧项目依赖可列为低频归档 |
| `E:\Download\Xmind破解包.zip` | 0.27 GB | 2022-03-14 | 低价值/高风险清理候选，删除前需单独确认 |
| `E:\Download\BaiduNetdisk_7.13.0.21.exe` | 0.19 GB | 2022-03-14 | 旧安装包，通常可删，但需确认是否仍需离线安装 |
| `E:\迅雷下载\cesiumlab3_3.0.3.exe` | 0.13 GB | 2022-03-25 | GIS/三维工具安装包，建议迁入工具归档而不是直接删除 |

## 主要目录体量

| 目录 | 估算体量 | 文件数 | 判断 |
| --- | ---: | ---: | --- |
| `E:\BaiduNetdiskDownload\中山大学南校区` | 27.17 GB | 94 | 遥感/GIS 数据资产，建议保留并另做专题索引 |
| `E:\BaiduNetdiskDownload\ArcGIS 10.5全套` | 25.19 GB | 18 | 旧软件安装介质，建议迁入工具归档或离线安装介质区 |
| `E:\BaiduNetdiskDownload\各大电子书分类` | 17.97 GB | 988 | 电子书资料，建议按主题抽样评估，不急于移动 |
| `E:\BaiduNetdiskDownload\倾斜3dtiles集合202203` | 8.03 GB | 47,926 | 三维场景数据，建议纳入 3D Tiles 资产索引 |
| `E:\BaiduNetdiskDownload\手工模型3dtiles集合-202203` | 6.33 GB | 15,880 | 三维模型/瓦片资产，建议纳入 3D Tiles 资产索引 |
| `E:\BaiduNetdiskDownload\06jquery（5天+4天赠送）` | 6.42 GB | 59 | 旧前端课程，价值偏低，整理优先级低 |
| `E:\BaiduNetdiskDownload\10html5和css3（4天+6天赠送）` | 4.07 GB | 13 | 旧前端课程，价值偏低，整理优先级低 |
| `E:\Download\videojs-vr-master (1)` | 0.23 GB | 25,062 | 旧示例代码，文件数多但体量小，暂不深清 |

## 扩展名画像

`E:\BaiduNetdiskDownload` 的主要体量集中在：

| 扩展名 | 文件数 | 体量 |
| --- | ---: | ---: |
| `.iso` | 4 | 23.14 GB |
| `.zip` | 69 | 22.83 GB |
| `.pdf` | 841 | 15.14 GB |
| `.b3dm` | 48,369 | 11.83 GB |
| `.tiff` | 12 | 11.27 GB |
| `.gz` | 8 | 8.73 GB |
| `.tif` | 6 | 7.73 GB |
| `.exe` | 41 | 6.04 GB |
| `.rar` | 46 | 4.05 GB |

## 可执行分组

| 分组 | 代表路径 | 建议动作 |
| --- | --- | --- |
| GIS/遥感数据 | `中山大学南校区`、`空军机场` | 保留，后续做数据资产专题索引 |
| 三维瓦片/模型 | `倾斜3dtiles集合202203`、`手工模型3dtiles集合-202203`、`超总周边建筑` | 保留，后续补 3D Tiles 清单 |
| 旧软件安装介质 | `ArcGIS 10.5全套`、`ORA+11+G+R2+server+64bit+for+windows.iso`、`supermap-iedge-10.2.1-windows-x64.zip` | 建议迁入工具归档，不直接删除 |
| 旧前端课程 | `01html和css（10天）`、`06jquery（5天+4天赠送）`、`10html5和css3（4天+6天赠送）` | 低优先级，后续可按“课程资料归档/删除候选”单独处理 |
| 旧下载残留 | `Xmind破解包.zip`、旧网盘安装包、旧 APK | 清理候选，需单独确认后再删除 |
| 压缩包集合 | 大量 `.zip`、`.rar`、`.iso`、`.gz` | 优先做“只列目录”，不解压 |

## 下一步建议

1. 先对 `E:\BaiduNetdiskDownload\崔子豪交接整理.zip` 和 `E:\360Downloads\360Downloads.zip` 做只列目录检查。
2. 将 `ArcGIS 10.5全套`、Oracle ISO、SuperMap iEdge 包列入工具归档候选，不直接删除。
3. 将 `中山大学南校区`、`倾斜3dtiles集合202203`、`手工模型3dtiles集合-202203` 纳入数据/三维资产索引候选。
4. 单独生成一份“旧课程与旧安装包清理候选”，再决定是否删除。

