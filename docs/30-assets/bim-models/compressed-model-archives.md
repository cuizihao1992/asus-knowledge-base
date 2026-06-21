# 压缩模型包资产卡片：FBX / glTF

生成日期：2026-06-21

范围：记录 `E:\Data\10-models\archives\fbx.rar` 与 `E:\Data\10-models\archives\gltf.zip` 两个压缩模型包。本文只做元数据、内容摘要和资产判断；未移动、删除、解压、转换或上传模型数据。

## 结论先行

这两个文件不应按普通压缩包清理。它们位于 `E:\Data`，命名明确指向 FBX / glTF 模型格式，其中 `gltf.zip` 已可只读列出内容，确认包含 glTF 场景、`.bin` 和纹理文件。`fbx.rar` 当前缺少 7z/WinRAR 只列目录工具，暂不能看到内部文件，但体量、命名和目录位置都指向模型资产。

建议：保留，并纳入 BIM/GIS 模型资产索引。后续优先做只读目录清单、版本关系和预览/转换链路评估，不做删除。

## 资产总览

| 文件 | 格式 | 大小 | 修改时间 | SHA256 前缀 | 当前状态 | 建议 |
| --- | --- | ---: | --- | --- | --- | --- |
| `E:\Data\10-models\archives\fbx.rar` | RAR / FBX 模型包 | 274,179,140 bytes | 2022-03-25 14:43:15 | `8A2524E19C1D1ECF` | 未列内容 | 保留；安装 7z/WinRAR 后只列目录 |
| `E:\Data\10-models\archives\gltf.zip` | ZIP / glTF 模型包 | 224,388,770 bytes | 2022-03-25 17:17:16 | `1E5C9C77470A8077` | 已列 zip 目录摘要 | 保留；纳入 glTF 资产索引 |

## glTF 包内容摘要

`E:\Data\10-models\archives\gltf.zip` 可通过 .NET Zip API 只读列目录，未解压。

| 指标 | 值 |
| --- | ---: |
| 条目数 | 177 |
| 文件数 | 156 |
| 目录数 | 21 |
| 未压缩大小 | 253,424,962 bytes |

主要后缀：

| 后缀 | 数量 | 判断 |
| --- | ---: | --- |
| `.png` | 119 | 纹理贴图为主 |
| `.gltf` | 11 | glTF 场景文件 |
| `.bin` | 11 | glTF 二进制几何/缓冲数据 |
| `.txt` | 10 | 说明或许可文本 |
| `.jpeg` | 5 | 纹理贴图 |

样例条目：

| 条目 | 判断 |
| --- | --- |
| `gltf/busscar_micruss/scene.gltf` | glTF 场景 |
| `gltf/busscar_micruss/scene.bin` | glTF 二进制缓冲 |
| `gltf/busscar_micruss/textures/BlackStuff_baseColor.png` | 材质纹理 |
| `gltf/busscar_micruss/textures/BlackStuff_metallicRoughness.png` | PBR 纹理 |

## FBX 包当前限制

`E:\Data\10-models\archives\fbx.rar` 当前未列内部目录，原因是本机未检测到 `7z.exe` 或 `7za.exe`，Windows 自带工具不足以稳定列 RAR 内容。后续建议只做目录清单，不解压。

建议命令草案：

```powershell
7z l 'E:\Data\10-models\archives\fbx.rar'
```

## 资产价值判断

| 维度 | 判断 |
| --- | --- |
| 业务相关性 | 高。位于 `E:\Data`，和 BIM/GIS/模型资产主线一致。 |
| 可替代性 | 低。模型包可能是项目交付或转换结果，不应假设可重新获取。 |
| 清理收益 | 中。两个包合计约 475 MB，但删除风险高于收益。 |
| 后续价值 | 高。可用于 FBX -> glTF -> 3D Tiles 转换链路、模型预览、资产卡片补全。 |

## 后续动作

1. 对 `fbx.rar` 使用 7z/WinRAR 只列目录，确认是否与 `E:\Data\10-models\bim\全生命周期BIM` 或其他 FBX 目录重复。
2. 对 `gltf.zip` 建立 glTF 场景清单，列出 11 个 `.gltf` 场景名称和纹理数量。
3. 将 `gltf.zip` 与现有 `全生命周期 BIM`、`一体化` 模型资料做项目关联。
4. 后续若做预览或转换，先复制到临时工作区，不直接改原始压缩包。