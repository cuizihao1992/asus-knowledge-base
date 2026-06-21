# E:\Data 目录重组记录

执行日期：2026-06-21

目的：用户明确要求不再围绕数据资产做细卡片，而是优先重新组织数据文件。本次只移动 `E:\Data` 顶层文件/目录到分类目录，不删除、不解压、不上传。

## 新目录结构

| 目录 | 用途 |
| --- | --- |
| `E:\Data\00-gis-layers` | GIS 基础图层，如行政区划 |
| `E:\Data\10-models` | BIM、FBX、glTF 等模型和模型压缩包 |
| `E:\Data\20-3d-scenes` | 3D Tiles、倾斜摄影、建筑物等三维场景数据 |
| `E:\Data\30-projects` | 隧道、一体化、竣工图等项目型资料 |
| `E:\Data\40-videos` | 视频资料 |
| `E:\Data\README-目录说明.md` | 本地目录说明文件 |

## 移动清单

| 原路径 | 新路径 |
| --- | --- |
| `E:\Data\t_common_base_district_2019M9_sz_深圳市行政区` | `E:\Data\00-gis-layers\administrative-districts\t_common_base_district_2019M9_sz_深圳市行政区` |
| `E:\Data\全生命周期BIM` | `E:\Data\10-models\bim\全生命周期BIM` |
| `E:\Data\fbx.rar` | `E:\Data\10-models\archives\fbx.rar` |
| `E:\Data\gltf.zip` | `E:\Data\10-models\archives\gltf.zip` |
| `E:\Data\建筑物` | `E:\Data\20-3d-scenes\buildings\建筑物` |
| `E:\Data\深超总` | `E:\Data\20-3d-scenes\shenchaozong\深超总` |
| `E:\Data\一体化` | `E:\Data\30-projects\integrated-platform\一体化` |
| `E:\Data\大坪山` | `E:\Data\30-projects\tunnels\大坪山` |
| `E:\Data\大帽山` | `E:\Data\30-projects\tunnels\大帽山` |
| `E:\Data\沈海高速0325` | `E:\Data\30-projects\tunnels\沈海高速0325` |
| `E:\Data\泉厦高速隧道竣工图` | `E:\Data\30-projects\tunnels\泉厦高速隧道竣工图` |
| `E:\Data\泉厦高速隧道竣工图.zip` | `E:\Data\30-projects\tunnels\泉厦高速隧道竣工图.zip` |
| `E:\Data\隧道视频` | `E:\Data\40-videos\tunnels\隧道视频` |

## 结果

重组后 `E:\Data` 顶层保留 5 个分类目录和一个 `README-目录说明.md`。知识库中的旧路径引用已同步更新为新路径，并已重新运行自动扫描索引。
