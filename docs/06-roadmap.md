# 知识库整理路线图

更新日期：2026-06-18

目标：把本地资料逐步整理成可检索、可追踪、可复用的知识库。当前阶段优先建立索引和概述，不移动、不复制、不删除原始资料。

## 已完成索引

| 文档 | 范围 | 价值 |
| --- | --- | --- |
| `00-disk-inventory.md` | D/E 盘浅层盘点 | 判断资料分布 |
| `01-knowledge-modules.md` | 模块规划 | 建立分类框架 |
| `02整理规范.md` | 整理规则 | 统一字段和状态 |
| `03-code-project-index.md` | `D:\zhc` | 近期代码项目索引 |
| `04-sutpc-project-index.md` | `E:\SUTPC` | 项目文档索引 |
| `05-data-assets-index.md` | `E:\Data` | BIM/GIS/三维数据资产索引 |
| `assets/model-assets.md` | `E:\Data\全生命周期BIM` | 模型资产卡片 |
| `summaries/mini-transformer.md` | `D:\zhc\mini-transformer` | Transformer 学习项目专题摘要 |
| `summaries/zhc-companion.md` | `D:\zhc\zhc-companion` | 本地项目伴侣专题摘要 |

## 当前资料地图

| 模块 | 主要来源 | 当前状态 | 下一步 |
| --- | --- | --- | --- |
| 代码项目 | `D:\zhc` | 已建立浅层索引，mini-transformer 和 zhc-companion 已完成专题摘要 | 继续整理 quant-system |
| SUTPC 项目文档 | `E:\SUTPC` | 已建立浅层索引 | 摘要核心需求和 BIM/GIS 文档 |
| 数据资产 | `E:\Data` | 已建立浅层索引和首批模型资产卡片 | 补充模型预览和关联文档 |
| 学习资料 | `E:\学习资料`、`E:\BaiduNetdiskDownload` | 未详细索引 | 后续按主题整理 |
| GIS/Cesium/SuperMap | `D:\Cesium`、`E:\Cesium-1.91`、`D:\SuperMap` | 未详细索引 | 后续建立技术资料索引 |
| 下载池 | `E:\Download`、`E:\360Downloads`、`E:\迅雷下载` | 未整理 | 最后处理 |

## 推荐下一步

### 1. 做 SUTPC 核心文档摘要

优先级最高。原因：`E:\SUTPC` 和 `E:\Data` 已经形成“文档 + 数据”的关联，最适合沉淀成项目知识。

建议先摘要：

- `E:\SUTPC\全生命周期\【20220411】深圳市交通运输一体化智慧平台一期项目设施全生命周期监管子系统需求规格说明书v1.0.docx`
- `E:\SUTPC\全生命周期\GISBIM功能梳理.xlsx`
- `E:\SUTPC\全生命周期\BIM集成方案\全生命周期监管系统BIM数据集成方案.docx`
- `E:\SUTPC\BIM支撑平台Web SDK开发文档(2022.3.11).pdf`

输出建议：

- `docs/summaries/sutpc-lifecycle-requirements.md`
- `docs/summaries/sutpc-gis-bim-functions.md`
- `docs/summaries/sutpc-bim-integration.md`

### 2. 建立模型资产卡片

优先处理 `E:\Data\全生命周期BIM`，因为只有 3 个 FBX，结构清晰。

建议资产卡片：

- 桥梁_北环上步立交-LL主线
- 边坡_龙景立交D匝道边坡LGBP0026
- 隧道_塘朗山隧道

输出建议：

- `docs/assets/model-assets.md`

### 3. 整理 mini-transformer 专题

`D:\zhc\mini-transformer` 小而完整，适合从索引升级为知识沉淀。

建议摘要：

- 项目运行流程
- Transformer 代码阅读顺序
- 参数说明
- 张量形状说明
- checkpoint 格式说明

输出建议：

- `docs/summaries/mini-transformer.md`

### 4. 扫描学习资料

在项目资料整理出第一批摘要后，再整理学习资料。

建议顺序：

1. `E:\学习资料\Cesium资料`
2. `E:\学习资料\JavaScript深度学习`
3. `E:\BaiduNetdiskDownload` 中 Python、BIM、前端课程资料

输出建议：

- `docs/07-learning-materials-index.md`

## 不建议现在做的事

- 不要把大文件、视频、压缩包、模型文件提交到 GitHub。
- 不要直接移动 D/E 盘原始文件。
- 不要从下载池开始整理，重复和低价值文件太多。
- 不要一开始深度读取所有文档正文，先挑高价值文档摘要。
- 不要删除 `E:\Data` 或 `E:\SUTPC` 中的备份包，先建立可追踪索引。

## 建议的工作节奏

每轮只做一件事：

1. 选一个目录或一组文件。
2. 浅层扫描。
3. 生成索引或摘要文档。
4. 更新 README 入口。
5. 提交并推送。

这样知识库会逐渐变厚，但不会破坏原始资料结构。

## 当前优先级判断

最高优先级：

- SUTPC 全生命周期需求和 GIS/BIM 文档摘要。
- E:\Data 全生命周期 BIM 模型资产卡片。

中优先级：

- mini-transformer 专题摘要。
- zhc-companion 功能参考摘要。

低优先级：

- 下载池清理。
- 工具安装包索引。
- 视频内容分析。
