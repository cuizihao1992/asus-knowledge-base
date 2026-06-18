# 知识库数据模型规范

生成日期：2026-06-19

目标：统一后续索引、摘要、资产卡片、项目卡片的字段，避免文档越写越散。

## 核心对象

当前知识库建议使用 5 类对象：

| 对象 | 说明 | 示例 |
| --- | --- | --- |
| `Project` | 代码项目或业务项目 | `mini-transformer`、`quant-system` |
| `Document` | 文档资料 | 需求说明书、PDF、PPT |
| `Asset` | 数据资产 | FBX、3D Tiles、视频、Shapefile |
| `Summary` | 专题摘要 | Transformer 摘要、SUTPC 摘要 |
| `Task` | 整理任务 | 待摘要、待预览、待确认 |

## Project

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 项目名 |
| `path` | 是 | 本地绝对路径 |
| `category` | 是 | code、project-docs、data、tool |
| `summary` | 是 | 一句话说明 |
| `tech_stack` | 否 | 技术栈 |
| `entrypoints` | 否 | 启动命令或入口文件 |
| `documents` | 否 | 关联文档 |
| `status` | 是 | indexed、summarized、archived |
| `next_actions` | 否 | 后续动作 |

## Document

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 文档标题 |
| `path` | 是 | 本地路径 |
| `file_type` | 是 | pdf、docx、pptx、xlsx、md |
| `module` | 是 | 知识库模块 |
| `source` | 否 | 项目、下载、个人整理 |
| `importance` | 是 | high、medium、low |
| `status` | 是 | indexed、to-summarize、summarized |
| `summary` | 否 | 摘要 |

## Asset

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 资产名 |
| `path` | 是 | 本地路径 |
| `asset_type` | 是 | model、video、gis-vector、archive |
| `format` | 是 | FBX、MP4、SHP、ZIP 等 |
| `size` | 否 | 文件大小 |
| `project` | 否 | 所属项目 |
| `tools` | 否 | 打开工具 |
| `related_docs` | 否 | 关联文档 |
| `status` | 是 | indexed、previewed、verified |

## Summary

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 摘要标题 |
| `source_paths` | 是 | 来源路径 |
| `scope` | 是 | 摘要范围 |
| `key_points` | 是 | 关键点 |
| `open_questions` | 否 | 未确认问题 |
| `next_actions` | 否 | 后续动作 |

## Task

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 任务名 |
| `target` | 是 | 目标路径或文档 |
| `type` | 是 | scan、summarize、verify、preview、cleanup |
| `priority` | 是 | high、medium、low |
| `status` | 是 | todo、doing、done、blocked |
| `reason` | 否 | 为什么做 |

## 状态值

| 状态 | 用于 | 含义 |
| --- | --- | --- |
| `indexed` | 所有对象 | 已记录基础信息 |
| `summarized` | Project、Document、Summary | 已完成摘要 |
| `to-summarize` | Document | 值得摘要但未处理 |
| `previewed` | Asset | 已确认可打开或可预览 |
| `verified` | Asset、Project | 已运行或验证 |
| `archived` | Project、Document | 暂不继续处理 |
| `blocked` | Task | 缺工具、缺权限或缺上下文 |

## 命名规则

建议文档文件命名：

```text
docs/summaries/{topic}.md
docs/assets/{asset-group}.md
docs/generated/{scan-result}.md
```

建议 HTML 生成规则：

```text
docs/summaries/mini-transformer.md -> summaries-mini-transformer.html
docs/assets/model-assets.md -> assets-model-assets.html
```

## 当前结论

后续所有新增文档都应尽量贴近这个数据模型。这样以后如果改成 SQLite、JSON 或真正的本地知识库应用，迁移成本会低很多。
