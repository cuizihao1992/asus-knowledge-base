# 小体量 FBX 转换预案

生成日期：2026-06-21

范围：面向 `E:\Data\全生命周期BIM` 下三个已登记 FBX，设计从原始 FBX 到 glTF / 3D Tiles / Cesium/T-GIS 加载的验证流程。本文只做方案，不复制、不移动、不转换、不上传原始模型。

## 目标

建立一条可重复的模型发布验证链路：

```text
FBX 原始模型
  -> 临时工作区副本
  -> Blender / FBX SDK / assimp 打开验证
  -> glTF / GLB 导出
  -> Cesium 或 Three.js 预览
  -> 必要时转 3D Tiles
  -> 记录坐标、比例、材质、贴图和业务属性损失
```

## 候选模型优先级

| 优先级 | 模型 | 原因 | 风险 |
| --- | --- | --- | --- |
| 1 | `E:\Data\全生命周期BIM\桥梁_北环上步立交-LL主线.fbx` | 体量小，约 1.03 MB；适合快速验证工具链 | 需确认坐标和构件层级 |
| 2 | `E:\Data\全生命周期BIM\边坡_龙景立交D匝道边坡LGBP0026.fbx` | 体量小，约 1.56 MB；命名含设施编号，业务价值高 | 需确认 `LGBP0026` 编码含义 |
| 3 | `E:\Data\全生命周期BIM\隧道_塘朗山隧道.fbx` | 隧道专题价值高，约 36.71 MB | 体量较大；可能与其他塘朗山模型存在版本关系 |

## 工作区规则

转换试验不得直接在原始目录内执行。建议使用临时工作区：

```text
C:\tmp\asus-kb-model-work\
  input\
  gltf\
  tiles\
  reports\
```

执行前只复制候选模型到 `input`，输出全部放到临时目录。确认结果有价值后，只把报告写入知识库，不上传模型文件。

## 工具链候选

| 工具 | 用途 | 状态 |
| --- | --- | --- |
| Blender | 打开 FBX、检查模型、导出 glTF/GLB | 首选，适合人工预览和转换 |
| FBX Review | 快速打开 FBX 检查材质和层级 | 可选 |
| assimp | 命令行转换 FBX -> glTF | 可选，适合批处理 |
| Cesium ion / 3D Tiles 工具 | glTF/模型到 3D Tiles | 后续阶段，涉及上传时需另行确认 |
| Three.js glTF Viewer | glTF 本地预览 | 可选 |

## 验证清单

| 检查项 | 通过标准 | 记录方式 |
| --- | --- | --- |
| 文件可打开 | 工具能加载 FBX，无崩溃 | 截图或文字记录 |
| 几何完整 | 主体结构可见，无明显缺失 | 截图或对象树摘要 |
| 比例单位 | 尺寸不离谱，单位可解释 | 记录单位和缩放因子 |
| 坐标位置 | 是否带真实地理坐标，或需要手动定位 | 记录原点、范围和定位方式 |
| 材质贴图 | 材质是否保留，是否缺外部贴图 | 记录缺失贴图路径 |
| 构件层级 | 是否保留 Revit 构件、Family、Type 等信息 | 记录属性保真度 |
| glTF 导出 | 能导出 `.gltf` 或 `.glb` | 记录导出大小和警告 |
| Web 预览 | Cesium/Three.js 能加载 | 记录浏览器表现 |

## 建议命令草案

以下只是草案，本次未执行。

```powershell
New-Item -ItemType Directory -Force -Path 'C:\tmp\asus-kb-model-work\input'
New-Item -ItemType Directory -Force -Path 'C:\tmp\asus-kb-model-work\gltf'
New-Item -ItemType Directory -Force -Path 'C:\tmp\asus-kb-model-work\reports'

Copy-Item -LiteralPath 'E:\Data\全生命周期BIM\桥梁_北环上步立交-LL主线.fbx' -Destination 'C:\tmp\asus-kb-model-work\input\桥梁_北环上步立交-LL主线.fbx'
```

后续如果使用 Blender 命令行，应先确认 Blender 安装路径，再在临时工作区运行转换脚本。

## 输出报告建议

转换试验后新增：

| 报告 | 内容 |
| --- | --- |
| `30-assets/bim-models/fbx-conversion-report-bridge.md` | 桥梁模型打开、导出、预览结果 |
| `30-assets/bim-models/fbx-conversion-report-slope.md` | 边坡模型打开、导出、预览结果 |
| `30-assets/bim-models/fbx-conversion-report-tunnel.md` | 隧道模型打开、导出、预览结果 |

## 当前不做

- 不直接修改 `E:\Data` 原始模型。
- 不把 FBX/glTF/GLB/3D Tiles 提交到 GitHub。
- 不上传模型到外部服务。
- 不批量转换所有模型，先从桥梁小样本开始。