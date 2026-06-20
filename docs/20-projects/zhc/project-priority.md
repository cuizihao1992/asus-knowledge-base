# D:\zhc 项目优先级地图

生成日期：2026-06-20

范围：基于 `docs/03-code-project-index.md`、`docs/07-zhc-capability-map.md` 和已完成的三个专题摘要，对 `D:\zhc` 中项目做继续维护、包装、迁移和归档判断。本文只整理优先级，不移动、删除或上传源码。

## 总体判断

`D:\zhc` 不是普通杂物目录，而是近期个人开发能力的核心工作区。当前最有价值的方向不是继续扫更多文件，而是把项目按“可复用能力”和“可展示程度”排优先级。

## 项目优先级

| 项目 | 当前优先级 | 原因 | 建议动作 |
| --- | --- | --- | --- |
| `zhc-companion` | P0 | 和当前知识库目标高度一致，已有本地扫描、文件预览、PWA/移动端能力 | 作为知识库本地扫描脚本和未来本地服务的参考 |
| `mini-transformer` | P1 | 小而完整，能证明 AI 学习、训练、参数理解和 API 服务能力 | 整理成可展示学习项目，保留运行说明和实验结果 |
| `quant-system` | P1 | 有数据、回测、SQLite、Streamlit、信号监控闭环 | 整理项目卡片，后续可补数据表和策略接口 |
| `pi-mono` | P2 | 技术价值高，但体量大，适合源码学习而非马上包装 | 先整理中文学习笔记，不急着深挖源码 |
| `.build-tools` | P3 | 构建工具缓存，不是知识资产主体 | 只记录用途和版本，后续确认后可迁移或清理 |
| `zhc-companion-source.zip` | 待确认 | 可能是 `zhc-companion` 源码归档 | 哈希对比后再判断是否保留 |
| `zhc-companion-lite-release.apk` | 待确认 | 发布包，知识价值低但可作为版本产物记录 | 记录版本来源，不提交 GitHub |

## 能力分类

| 方向 | 对应项目 | 可沉淀能力 |
| --- | --- | --- |
| 本地知识库 / 文件扫描 | `zhc-companion` | 路径安全、目录树、文本预览、API 路由扫描、最近变更 |
| AI / Transformer | `mini-transformer` | 训练闭环、张量形状、参数解释、checkpoint、API serving |
| 量化系统 | `quant-system` | 行情导入、SQLite、回测、信号监控、定时任务、Streamlit 页面 |
| Coding Agent 源码学习 | `pi-mono` | agent runtime、tool calling、provider abstraction、TUI |
| 构建环境 | `.build-tools` | Android/JDK/Gradle 工具链记录 |

## 包装顺序

1. `zhc-companion`
   - 抽取“本地扫描规则”和“忽略目录规则”。
   - 对照当前 `scripts/build-site.js`，设计未来扫描脚本。
   - 不直接迁移代码，先迁移设计。

2. `mini-transformer`
   - 整理一页“从零理解 Transformer”的项目说明。
   - 保留训练命令、生成命令、API 服务命令。
   - 适合对外展示学习能力。

3. `quant-system`
   - 补数据流和模块图。
   - 记录 SQLite 表、回测输入输出、策略接口。
   - 不包装成投资建议。

4. `pi-mono`
   - 先读 `docs-cn`。
   - 后续按模块拆：CLI、runtime、tool、provider、TUI。

## 对当前知识库的直接启发

| 当前知识库需求 | 可参考项目 |
| --- | --- |
| 本地目录扫描 | `zhc-companion` |
| 文件忽略规则 | `zhc-companion` |
| 定时刷新索引 | `quant-system` |
| 本地 SQLite 元数据 | `quant-system` |
| 文档专题拆分 | `mini-transformer` |
| Agent 工具调用理解 | `pi-mono` |

## 当前结论

下一阶段如果继续做代码侧，不建议平均用力。优先把 `zhc-companion` 的本地扫描能力抽象出来，形成当前知识库的 `scan-local-projects.js` 或类似脚本；同时把 `mini-transformer` 和 `quant-system` 保持为可展示项目案例。
