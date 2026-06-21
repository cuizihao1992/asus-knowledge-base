# E:\Data 数据资产索引

生成日期：2026-06-18

范围：浅层扫描 `E:\Data`，记录数据资产、三维模型、视频、GIS 矢量、压缩包和整理建议。未复制原始文件，未解压压缩包，未分析数据内容。

## 总览

`E:\Data` 是 BIM/GIS/三维数据资产目录，和 `E:\SUTPC` 的项目文档强相关。它不像普通文档目录，更适合作为“数据资产索引”管理。

主要内容包括：

- 隧道、桥梁、边坡等 BIM/FBX 模型。
- glTF、FBX、OBJ、3D Tiles、B3DM、CMPT 等三维数据。
- 隧道视频和监控/巡检视频。
- 深圳市行政区 Shapefile。
- 项目压缩包和交付包。
- 建筑物 tileset 示例数据。

## 根目录结构

| 目录/文件 | 类型 | 路径 | 最近更新时间 | 初步判断 |
| --- | --- | --- | --- | --- |
| 一体化 | 项目模型包 | `E:\Data\30-projects\integrated-platform\一体化` | 2022-04-24 | 高价值，和 SUTPC 项目关联 |
| 全生命周期BIM | BIM 模型 | `E:\Data\10-models\bim\全生命周期BIM` | 2022-04-07 | 高价值，适合优先索引 |
| 大坪山 | 隧道模型/视频/压缩包 | `E:\Data\30-projects\tunnels\大坪山` | 2022-04-21 | 高价值，数据较杂 |
| 大帽山 | 隧道模型/3D Tiles | `E:\Data\30-projects\tunnels\大帽山` | 2022-04-21 | 高价值，三维格式丰富 |
| 沈海高速0325 | 图片/Max/模型资料 | `E:\Data\30-projects\tunnels\沈海高速0325` | 2022-04-24 | 项目素材，需二次筛选 |
| 深超总 | 倾斜摄影/3D Tiles/建筑模型 | `E:\Data\20-3d-scenes\shenchaozong\深超总` | 2022-04-21 | 大体量三维资产 |
| 隧道视频 | 视频资料 | `E:\Data\40-videos\tunnels\隧道视频` | 2022-04-19 | 大体量视频，只做索引 |
| 泉厦高速隧道竣工图 | 竣工图目录 | `E:\Data\30-projects\tunnels\泉厦高速隧道竣工图` | 2022-03-25 | 可和竣工图压缩包关联 |
| 建筑物 | 3D Tiles 示例 | `E:\Data\20-3d-scenes\buildings\建筑物` | 2022-03-27 | 可归入 GIS/三维示例 |
| 深圳市行政区 | Shapefile | `E:\Data\00-gis-layers\administrative-districts\t_common_base_district_2019M9_sz_深圳市行政区` | 2022-03-29 | GIS 基础数据 |
| fbx.rar | FBX 压缩包 | `E:\Data\10-models\archives\fbx.rar` | 2022-03-25 | 只记录，不入库 |
| gltf.zip | glTF 压缩包 | `E:\Data\10-models\archives\gltf.zip` | 2022-03-25 | 只记录，不入库 |
| 泉厦高速隧道竣工图.zip | 竣工图压缩包 | `E:\Data\30-projects\tunnels\泉厦高速隧道竣工图.zip` | 2022-03-25 | 大文件，只记录 |

## 目录体量

浅层估算：

| 目录 | 浅层文件数 | 浅层体量 | 判断 |
| --- | ---: | ---: | --- |
| `E:\Data\40-videos\tunnels\隧道视频` | 14 | 约 24.19GB | 视频资料，体量最大 |
| `E:\Data\20-3d-scenes\shenchaozong\深超总` | 3 | 约 8.04GB | 倾斜摄影和 3D Tiles 压缩包 |
| `E:\Data\30-projects\tunnels\大坪山` | 32 | 约 2.56GB | 隧道模型、视频、压缩包 |
| `E:\Data\30-projects\tunnels\大帽山` | 29 | 约 1.21GB | FBX、OBJ、B3DM/CMPT |
| `E:\Data\30-projects\tunnels\沈海高速0325` | 229 | 约 0.81GB | 图片和 Max 模型资料 |
| `E:\Data\30-projects\integrated-platform\一体化` | 4 | 约 0.39GB | 一体化项目模型 |
| `E:\Data\10-models\bim\全生命周期BIM` | 3 | 约 0.04GB | 桥梁、边坡、隧道 FBX |

## 文件类型分布

| 类型 | 数量 | 用途判断 |
| --- | ---: | --- |
| `.jpg` | 223 | 贴图、截图、模型素材 |
| `.mp4` | 23 | 隧道视频资料 |
| `.json` | 16 | tileset、scenetree、模型配置 |
| `.cmpt` | 13 | 3D Tiles 复合瓦片 |
| `.png` | 12 | 图片素材 |
| `.fbx` | 11 | BIM/三维模型 |
| `.rar` | 7 | 模型/项目压缩包 |
| `.zip` | 4 | 模型/竣工图压缩包 |
| `.max` | 2 | 3ds Max 源文件 |
| `.b3dm` | 2 | 3D Tiles 模型瓦片 |
| `.shp/.dbf/.prj/.shx` | 各 1 | Shapefile 行政区数据 |
| `.xlsx` | 1 | 竣工图档案目录 |
| `.obj/.mtl` | 各 1 | OBJ 模型及材质 |

## 关键数据组

### 一体化项目模型

路径：`E:\Data\30-projects\integrated-platform\一体化`

代表文件：

| 文件 | 类型 | 初步用途 |
| --- | --- | --- |
| `一体化项目项目模型-提BIM支持平台.rar` | 压缩包 | 一体化项目模型交付包 |
| `一体化项目-桥梁-北环上步立交-20220422.fbx` | FBX | 桥梁模型 |
| `一体化项目-边坡-龙岗区南坪快速路龙景立交D匝道-20220422.fbx` | FBX | 边坡模型 |
| `一体化项目-隧道-塘朗山隧道-20220422.fbx` | FBX | 隧道模型 |

建议归入：`BIM / SUTPC / 项目文档`、`无人机 / 三维数据`。

整理建议：

- 优先记录模型对象：桥梁、边坡、隧道。
- 关联 `E:\SUTPC` 中的全生命周期和 BIM 支撑平台资料。
- 不把 FBX 或 RAR 放入 GitHub，只记录路径和用途。

### 全生命周期 BIM 模型

路径：`E:\Data\10-models\bim\全生命周期BIM`

代表文件：

| 文件 | 类型 | 初步用途 |
| --- | --- | --- |
| `桥梁_北环上步立交-LL主线.fbx` | FBX | 桥梁 BIM 模型 |
| `边坡_龙景立交D匝道边坡LGBP0026.fbx` | FBX | 边坡 BIM 模型 |
| `隧道_塘朗山隧道.fbx` | FBX | 隧道 BIM 模型 |

整理建议：

- 这是最清晰的一组三维模型，可优先建立“模型资产卡片”。
- 每个模型记录对象类型、工程名称、格式、路径和关联项目文档。

### 大坪山

路径：`E:\Data\30-projects\tunnels\大坪山`

代表内容：

- `0421-大平山隧道.rar`
- `大坪山隧道数据.zip`
- `0421-大平山隧道\0421-大平山隧道.fbx`
- `0421-大平山隧道\new沈海高速0419-大帽山隧道.max`
- `大坪山隧道数据\*.mp4`
- `大坪山隧道数据\*.hav`
- `大坪山隧道数据\VSPlayer播放器.exe`

整理建议：

- 把它视为“隧道项目数据包”，不要按单个文件零散整理。
- 先建立数据包索引：模型、视频、播放器、压缩包。
- `.hav` 和播放器说明需要后续确认用途。

### 大帽山

路径：`E:\Data\30-projects\tunnels\大帽山`

代表内容：

- `大帽山隧道.rar`
- `沈海高速0325.rar`
- `大帽山fbx\*.fbx`
- `大帽山fbx\obj.obj`
- `大帽山fbx\obj.mtl`
- `大帽山隧道*\NoLod_*.b3dm`
- `大帽山隧道*\NoLod_*.cmpt`
- `大帽山隧道*\scenetree.json`

整理建议：

- 这是三维格式最丰富的目录，适合做 Cesium/3D Tiles 示例资产索引。
- 重点标记 FBX、OBJ、B3DM、CMPT、scenetree 的对应关系。
- 后续可以增加 tileset/瓦片预览说明。

### 深超总

路径：`E:\Data\20-3d-scenes\shenchaozong\深超总`

代表文件：

| 文件 | 类型 | 初步用途 |
| --- | --- | --- |
| `倾斜3dtiles集合202203.zip` | ZIP | 倾斜摄影 3D Tiles 集合，约 7GB |
| `手工模型3dtiles集合-202203.rar` | RAR | 手工模型 3D Tiles 集合 |
| `超总周边建筑.rar` | RAR | 周边建筑模型 |

整理建议：

- 体量大，先只记录，不解压。
- 适合作为“深超总三维场景资产”专题。

### 隧道视频

路径：`E:\Data\40-videos\tunnels\隧道视频`

代表内容：

- `1.mp4` 至 `7.mp4`
- `21.mp4` 至 `27.mp4`

这些视频单个约 1.8GB 左右，合计约 24GB。

整理建议：

- 只做视频资产索引。
- 后续如需整理，可补充视频时长、拍摄对象、拍摄时间、对应隧道。
- 不建议提交到 GitHub，也不建议复制到知识库目录。

### 深圳市行政区 Shapefile

路径：`E:\Data\00-gis-layers\administrative-districts\t_common_base_district_2019M9_sz_深圳市行政区`

代表文件：

- `.shp`
- `.dbf`
- `.shx`
- `.prj`
- `.cpg`
- `.qpj`

整理建议：

- 归入 GIS 基础数据。
- 后续可以记录坐标系、行政层级、数据时间：2019M9。

### 建筑物 3D Tiles 示例

路径：`E:\Data\20-3d-scenes\buildings\建筑物`

代表文件：

- `tileset.json`
- `scenetree.json`
- `lab_b_0*.json`

整理建议：

- 归入 Cesium/3D Tiles 示例数据。
- 后续可检查是否能作为当前知识库的三维展示样例。

## 大文件处理清单

以下文件只建议记录，不建议提交 GitHub：

| 文件 | 大小级别 | 处理建议 |
| --- | ---: | --- |
| `E:\Data\20-3d-scenes\shenchaozong\深超总\倾斜3dtiles集合202203.zip` | 约 7GB | 只记录，后续按需解压 |
| `E:\Data\30-projects\tunnels\泉厦高速隧道竣工图.zip` | 约 1.9GB | 只记录，可关联档案目录 |
| `E:\Data\40-videos\tunnels\隧道视频\*.mp4` | 单个约 1.8GB | 只做视频索引 |
| `E:\Data\20-3d-scenes\shenchaozong\深超总\手工模型3dtiles集合-202203.rar` | 约 1.4GB | 只记录 |
| `E:\Data\30-projects\tunnels\大坪山\大坪山隧道数据.zip` | 约 1.3GB | 只记录 |
| `E:\Data\30-projects\tunnels\沈海高速0325\沈海高速0325.max` | 约 733MB | 记录源模型 |
| `E:\Data\30-projects\tunnels\大帽山\大帽山fbx\obj.obj` | 约 626MB | 记录 OBJ 模型 |
| `E:\Data\30-projects\tunnels\大帽山\大帽山fbx\20220325.fbx` | 约 404MB | 记录 FBX 模型 |
| `E:\Data\10-models\archives\fbx.rar` | 约 274MB | 只记录 |
| `E:\Data\10-models\archives\gltf.zip` | 约 224MB | 只记录 |

## 建议的数据资产卡片字段

后续每个数据资产建议记录：

| 字段 | 说明 |
| --- | --- |
| 资产名称 | 例如“塘朗山隧道 FBX 模型” |
| 对象类型 | 桥梁、隧道、边坡、建筑、行政区、视频 |
| 格式 | FBX、OBJ、B3DM、CMPT、ZIP、MP4、SHP |
| 本地路径 | 原始路径 |
| 所属项目 | SUTPC、一体化、全生命周期、深超总等 |
| 关联文档 | 对应需求、汇报、SDK 或方案文档 |
| 体量 | 文件大小或目录体量 |
| 状态 | 已索引、待确认、可预览、需工具打开 |
| 打开工具 | Cesium、SuperMap、3ds Max、视频播放器等 |
| 整理建议 | 保留、摘要、预览、迁移、可删除候选 |

## 推荐后续动作

1. 先为 `全生命周期BIM` 的 3 个 FBX 建立模型资产卡片。
2. 再关联 `E:\SUTPC` 的 BIM 支撑平台、全生命周期需求和 GISBIM 功能梳理。
3. 对 `大帽山` 做 3D Tiles 格式专题索引，重点记录 B3DM/CMPT/scenetree。
4. 对 `隧道视频` 只生成视频清单，不做内容分析。
5. 对 `深超总` 的大压缩包先标记为“待确认内容”，暂不解压。

## 当前判断

`E:\Data` 是高价值数据资产区，不适合按普通文档方式整理。它应该和 `E:\SUTPC` 的项目文档互相引用：

- `E:\SUTPC` 记录需求、方案、汇报、原型。
- `E:\Data` 记录模型、视频、瓦片、矢量、交付包。

当前最重要的是建立“路径和对象关系”，而不是移动数据或深度读取大文件。
