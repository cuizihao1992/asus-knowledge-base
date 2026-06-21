# glTF 场景清单：E:\Data\10-models\archives\gltf.zip

生成日期：2026-06-21

范围：只读列出 `E:\Data\10-models\archives\gltf.zip` 内的 `.gltf` 场景及其相关文件数量。未解压、未移动、未删除、未转换、未上传。

## 结论

`gltf.zip` 包含 11 个 glTF 场景，整体偏车辆/交通工具模型，适合作为 BIM/GIS 场景中的交通对象、车辆样例或 glTF 加载测试资产。该包不应进入删除流程。

## 场景清单

| 场景 | glTF 大小（字节） | 相关文件数 | `.bin` 数 | 纹理数 | 相关文件总大小（字节） | 初步判断 |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `gltf/busscar_micruss/scene.gltf` | 75086 | 53 | 1 | 50 | 75226460 | 大型客车模型，纹理较多 |
| `gltf/dump_truck/scene.gltf` | 15804 | 9 | 1 | 6 | 3935046 | 工程车辆 / 自卸车 |
| `gltf/generic_suv_-_low_poly_model/scene.gltf` | 27880 | 6 | 1 | 3 | 1582431 | 低模 SUV |
| `gltf/light_box_truck_-_low_poly_model/scene.gltf` | 40615 | 8 | 1 | 5 | 4981419 | 低模厢式货车 |
| `gltf/low_poly_bus_with_interior/scene.gltf` | 11133 | 4 | 1 | 1 | 1415340 | 低模公交车 |
| `gltf/low_poly_sedans_11_cars_pack/scene.gltf` | 75962 | 4 | 1 | 1 | 8034438 | 轿车组合包 |
| `gltf/low_poly_vehicle_mini_pack_3/scene.gltf` | 123466 | 54 | 1 | 51 | 147331283 | 多车辆模型包，体量最大 |
| `gltf/range_rover_svautobiography/scene.gltf` | 137220 | 5 | 1 | 2 | 4569985 | SUV 模型 |
| `gltf/redCar2/scene.gltf` | 102121 | 7 | 1 | 5 | 4891230 | 红色车辆模型 |
| `gltf/tmp/scene.gltf` | 27880 | 3 | 1 | 0 | 843474 | 临时/测试模型，需后续预览确认 |
| `gltf/toyota_mark_ii_jzx100/scene.gltf` | 33112 | 3 | 1 | 0 | 613856 | 轿车模型，缺少独立纹理统计 |

## 资产用途判断

| 用途 | 价值 |
| --- | --- |
| Cesium/glTF 加载测试 | 高 |
| BIM/GIS 场景交通对象补充 | 中高 |
| 3D Tiles 转换测试 | 中 |
| 项目交付原始资料 | 不确定，需要来源说明 |
| 删除清理 | 不建议 |

## 后续动作

1. 后续预览时，先复制 `gltf.zip` 到临时工作区再解压，不直接改原包。
2. 优先预览 `low_poly_vehicle_mini_pack_3`、`busscar_micruss`、`low_poly_bus_with_interior`。
3. 若要进入 Cesium/T-GIS 示例，优先选择体量小的 `low_poly_bus_with_interior` 或 `generic_suv_-_low_poly_model`。
4. 若需要减小归档体量，再判断 `tmp` 是否为临时模型，但当前不删除。