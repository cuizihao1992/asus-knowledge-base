# BIM/GIS 数据格式术语表

生成日期：2026-06-20

范围：面向 `E:\SUTPC`、`E:\Data`、`E:\学习资料` 中已经索引到的 BIM、GIS、三维瓦片、影像和模型资料。本文用于知识库整理和格式判断，不替代正式产品手册、行业规范或平台接口文档。

## 使用方式

这篇术语表回答三个问题：

- 原始文件是什么：如 `FBX`、`RVT`、`IFC`、`OBJ`、`SHP`、`TIF`。
- 发布服务是什么：如 `3D Tiles`、`S3M`、`B3DM`、`TMS`、`OGC` 服务。
- 后续怎么判断：是否适合 Web 预览、是否适合 T-GIS、是否需要坐标配准、是否适合长期归档。

## 格式分层

| 层级 | 典型格式 | 主要用途 | 整理判断 |
| --- | --- | --- | --- |
| 原始建模格式 | `RVT`、`DGN`、`DWG`、`IFC` | 设计、施工、BIM 原始交付 | 高价值，保留路径和版本，不随意转换覆盖 |
| 交换格式 | `FBX`、`OBJ`、`DAE`、`glTF`、`GLB` | 跨软件交换、预览、二次处理 | 适合作为转换中间件或 Web 预览入口 |
| 三维瓦片/服务格式 | `3D Tiles`、`B3DM`、`CMPT`、`I3DM`、`PNTS`、`S3M`、`S3MX` | 大规模三维场景发布和分级加载 | 适合 GIS/T-GIS/Cesium/SuperMap 场景 |
| 影像/瓦片格式 | `TIF`、`GeoTIFF`、`TMS`、`WMTS`、`WMS` | 正射影像、底图、遥感成果发布 | 要重点记录坐标系、分辨率、服务 URL |
| GIS 矢量格式 | `SHP`、`GeoJSON`、`GPKG`、`KML` | 图层、边界、路线、点位、设施 | 要记录几何类型、属性字段、坐标系 |
| 点云格式 | `LAS`、`LAZ`、`PNTS` | 激光扫描、实景三维、现场复核 | 体量大，优先记录索引和发布状态 |

## 核心格式

| 术语 | 中文说明 | 工作解释 | 本地关联 |
| --- | --- | --- | --- |
| `FBX` | 三维模型交换格式 | 常用于 Revit、3ds Max、Blender 等工具之间传递模型。适合做预览和转换，但不一定保留完整 BIM 语义。 | `E:\Data\10-models\bim\全生命周期BIM` 三个模型 |
| `RVT` | Revit 原生模型 | 保存 Revit 工程模型和 BIM 信息，语义通常比 FBX 更完整。 | SUTPC BIM 集成方案提到 Revit 系列 |
| `IFC` | 开放 BIM 交换标准 | 面向建筑工程信息交换，适合跨平台保留构件和属性语义。 | BIM 支撑平台输入格式 |
| `OBJ` | 通用三维几何格式 | 简单、通用，通常配合 `.mtl` 材质文件；BIM 属性保留能力弱。 | `E:\Data\30-projects\tunnels\大帽山`、三维模型资料 |
| `glTF` | 面向实时渲染的三维资产格式 | 适合 Web、Cesium、Three.js、游戏引擎加载。更偏展示，不是完整 BIM 数据库。 | 模型可发布性建议转换格式 |
| `GLB` | 二进制 glTF | 把 glTF JSON、二进制几何、贴图等打包成单文件，便于 Web 分发。 | Cesium/WebGL 学习资料可用 |
| `3D Tiles` | 大规模三维瓦片规范 | 用瓦片树、包围体和几何误差组织大规模三维数据，按视角和距离分级加载。 | `E:\Data\20-3d-scenes\buildings\建筑物`、`大帽山`、SUTPC GIS 需求 |
| `tileset.json` | 3D Tiles 入口文件 | 描述瓦片树、包围体、几何误差、子瓦片路径和资源关系。 | `E:\Data\20-3d-scenes\buildings\建筑物` |
| `B3DM` | Batched 3D Model | 3D Tiles 中用于批量三维模型的瓦片格式，常封装 glTF 和批量属性。 | 3D Tiles 目录 |
| `I3DM` | Instanced 3D Model | 3D Tiles 中用于大量重复实例的瓦片格式，如树木、灯杆、设施点。 | 后续设施单体化可参考 |
| `PNTS` | Point Cloud Tile | 3D Tiles 中用于点云瓦片的数据格式。 | 三维激光/点云资料 |
| `CMPT` | Composite Tile | 3D Tiles 复合瓦片，可把多个瓦片封装在一起。 | `E:\Data\30-projects\tunnels\大帽山` |
| `S3M` | SuperMap 三维模型缓存格式 | SuperMap 生态常用三维服务格式，适合 T-GIS/SuperMap 场景。 | SUTPC BIM 集成方案明确提到 |
| `S3MX` | S3M 相关扩展格式 | SuperMap 三维数据交换/缓存相关格式，具体语义要看平台工具链。 | BIM 支撑平台新增输出能力 |
| `UDB` | SuperMap 数据库格式 | SuperMap 传统数据源格式之一，用于存储 GIS 数据。 | BIM 集成方案提到输出能力 |
| `UDD` | SuperMap 数据源描述文件 | 常与 UDB 配合，描述数据源信息。 | BIM 集成方案提到输出能力 |
| `UDBX` | SuperMap 新一代文件型数据源 | SuperMap 生态数据格式，适合 GIS 数据存储和交换。 | BIM 集成方案提到输出能力 |
| `TMS` | Tile Map Service | 影像或地图瓦片服务/目录组织方式，适合 Web 地图加载。 | BIM 集成方案中 `tif -> tms` |
| `GeoTIFF` | 带地理参考的 TIFF | 保存影像栅格和坐标信息，常用于正射影像、DEM、遥感成果。 | 测绘/遥感资料 |
| `SHP` / Shapefile | 常见 GIS 矢量格式 | 由 `.shp`、`.dbf`、`.shx`、`.prj` 等文件组成，适合行政区、道路、设施图层。 | `E:\Data\深圳市行政区` |
| `GeoJSON` | JSON 形式的地理数据 | 适合 Web 接口返回点、线、面和属性，便于前端加载。 | SUTPC GIS 数据需求 |

## 转换关系

| 原始数据 | 常见转换 | 发布/使用方向 | 备注 |
| --- | --- | --- | --- |
| `RVT` | `FBX`、`IFC`、`glTF`、`3D Tiles`、`S3M` | BIM 平台、Web 预览、T-GIS | 要关注构件属性是否丢失 |
| `FBX` | `glTF`、`GLB`、`3D Tiles`、`S3M` | Web 三维、Cesium、T-GIS | 适合先做轻量预览和转换试验 |
| `OBJ` | `glTF`、`3D Tiles` | Web 预览、大场景加载 | 通常属性弱，材质依赖 `.mtl` 和贴图 |
| `OSGB` | `3D Tiles`、`S3M` | 倾斜摄影三维底板 | 体量大，必须分块和 LOD |
| `TIF` / `GeoTIFF` | `TMS`、`WMTS`、`WMS` | 影像底图、正射影像服务 | 重点确认坐标、分辨率、范围 |
| `SHP` | `GeoJSON`、`WFS`、数据库图层 | GIS 图层和接口 | 重点保留 `.prj` 和属性表 |
| 点云 | `PNTS`、`3D Tiles`、专用点云服务 | 现场复核、三维测量 | 体量大，优先服务化 |

## 发布场景选择

| 目标 | 优先格式 | 原因 |
| --- | --- | --- |
| 快速本地预览单个模型 | `FBX`、`OBJ`、`GLB` | 工具支持广，启动成本低 |
| Web 页面嵌入小模型 | `glTF` / `GLB` | 浏览器和三维引擎支持好 |
| Cesium 加载城市级三维 | `3D Tiles` | 支持瓦片树、LOD、按需加载 |
| SuperMap/T-GIS 三维场景 | `S3M` / `S3MX` | 更贴近 SuperMap 生态 |
| 正射影像或遥感底图 | `TMS`、`WMTS`、`WMS` | 地图服务加载成熟 |
| 业务点线面接口 | `GeoJSON`、`WFS`、数据库图层 | 前端和接口处理方便 |
| 长期保留 BIM 语义 | `RVT`、`IFC` | 比展示格式更接近原始 BIM 信息 |

## 关键字段

整理 BIM/GIS 格式时，不要只记文件名，建议至少记录这些字段：

| 字段 | 说明 |
| --- | --- |
| 原始格式 | 例如 `RVT`、`FBX`、`SHP`、`TIF` |
| 发布格式 | 例如 `3D Tiles`、`S3M`、`TMS`、`GeoJSON` |
| 来源软件 | Revit、SuperMap、Cesium 工具链、测绘软件等 |
| 坐标系 | 是否有地理坐标、投影坐标或需要手动配准 |
| 单位/比例 | 米、毫米、工程单位，是否比例异常 |
| 材质/贴图 | 是否有材质，是否依赖外部贴图 |
| 构件属性 | 是否含构件 ID、面积、体积、材质、Level、类型 |
| 瓦片入口 | 如 `tileset.json`、服务 URL |
| 业务 ID | 如设施编码、项目 ID、合同段、`geokey` |
| 预览状态 | 未验证、可打开、缺贴图、比例异常、转换失败 |
| 发布状态 | 未发布、已发布、已入 T-GIS、已入大屏 |

## 风险判断

| 风险 | 表现 | 处理建议 |
| --- | --- | --- |
| 只有展示格式，缺原始 BIM | 只有 `FBX` / `OBJ`，没有 `RVT` / `IFC` | 可做展示，不要声称完整 BIM 语义 |
| 坐标缺失 | 模型打开在原点，无法落到地图 | 标记为需配准，不能直接入 GIS |
| 贴图缺失 | 模型灰白、材质丢失、引用外部图片不存在 | 记录贴图依赖，不急着删除旁边图片 |
| 体量过大 | 单模型数百 MB 或瓦片目录很大 | 走 3D Tiles/S3M 和轻量化，不直接网页加载原始文件 |
| 属性丢失 | 转换后只剩几何，没有构件属性 | 保留原始文件，转换产物只作为展示层 |
| 版本混乱 | 同名模型多个日期、多个大小 | 先做哈希和版本对比，不删除 |
| 服务依赖不清 | 只有 URL 或 geokey，没有来源平台 | 记录来源系统、接口、权限和有效期 |

## 与当前本地资产的关系

| 本地资产 | 当前格式 | 建议发布方向 | 说明 |
| --- | --- | --- | --- |
| `E:\Data\10-models\bim\全生命周期BIM\桥梁_北环上步立交-LL主线.fbx` | `FBX` | `glTF` / `3D Tiles` / `S3M` | 小体量，适合先做转换样例 |
| `E:\Data\10-models\bim\全生命周期BIM\边坡_龙景立交D匝道边坡LGBP0026.fbx` | `FBX` | `glTF` / `3D Tiles` / `S3M` | 含设施编码线索，适合业务关联 |
| `E:\Data\10-models\bim\全生命周期BIM\隧道_塘朗山隧道.fbx` | `FBX` | `3D Tiles` / `S3M` | 体量较大，先做版本对比 |
| `E:\Data\20-3d-scenes\buildings\建筑物` | `3D Tiles` | Cesium/T-GIS 预览样例 | 可作为三维瓦片入口样例 |
| `E:\Data\30-projects\tunnels\大帽山`、`E:\Data\30-projects\tunnels\大坪山` | 三维模型/瓦片候选 | 3D Tiles/S3M 场景 | 适合隧道或山体三维专题 |
| `E:\Data\深圳市行政区` | Shapefile | GeoJSON/图层服务 | 适合作为 GIS 基础图层样例 |
| `E:\Data\20-3d-scenes\shenchaozong\深超总` | 倾斜摄影/压缩包 | 3D Tiles/S3M | 先记录，不解压 |

## 当前结论

后续做 BIM/GIS 整理时，要把“原始格式”和“发布格式”分开看：

- `RVT`、`IFC`、`FBX` 更接近原始模型或交换资产。
- `glTF`、`GLB` 更适合 Web 小模型展示。
- `3D Tiles`、`S3M` 更适合城市级三维和 T-GIS/Cesium 加载。
- `TMS`、`WMTS`、`WMS` 更适合影像和底图。
- `SHP`、`GeoJSON` 更适合点线面图层和业务对象。

整理规则不变：原始资料不移动、不删除、不上传；先记录格式、坐标、属性、体量、哈希、版本和发布状态，再决定是否需要预览或转换。
