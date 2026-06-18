# D:\zhc 代码项目索引

生成日期：2026-06-18

范围：仅浅层扫描 `D:\zhc`，记录项目索引、概述和整理建议。未复制源码，未深度分析业务逻辑。

## 总览

`D:\zhc` 更像一个近期个人开发工作区。根目录下存在 `.git`，并包含 4 个主要项目、1 个构建工具目录和少量发布/归档文件。

| 项目/目录 | 类型 | 路径 | 最近更新时间 | 初步状态 |
| --- | --- | --- | --- | --- |
| mini-transformer | Python / AI 学习项目 | `D:\zhc\mini-transformer` | 2026-06-14 | 高价值，优先整理 |
| zhc-companion | 本地项目伴侣 / 移动端 + 服务端 + PWA | `D:\zhc\zhc-companion` | 2026-06-11 | 高价值，优先整理 |
| quant-system | Python / Streamlit / 量化回测 MVP | `D:\zhc\quant-system` | 2026-06-10 | 高价值，优先整理 |
| pi-mono | TypeScript monorepo / Coding agent 源码学习 | `D:\zhc\pi-mono` | 2026-06-09 | 高价值，但体量较大 |
| .build-tools | 构建工具缓存 | `D:\zhc\.build-tools` | 2026-06-11 | 只做环境索引 |
| zhc-companion-source.zip | 源码归档 | `D:\zhc\zhc-companion-source.zip` | 2026-06-10 | 记录即可，不入正文 |
| zhc-companion-lite-release.apk | Android 发布包 | `D:\zhc\zhc-companion-lite-release.apk` | 2026-06-11 | 记录即可，不入正文 |

排除 `node_modules`、`.git`、缓存目录后，浅层体量估算：

| 项目 | 浅层文件数 | 浅层体量 | 判断 |
| --- | ---: | ---: | --- |
| pi-mono | 653 | 约 11.8MB | 文档和源码较多，适合做专题学习索引 |
| mini-transformer | 26 | 约 8.74MB | 小而完整，适合作为第一批摘要对象 |
| zhc-companion | 132 | 约 7.7MB | 与当前资料整理目标关系强 |
| quant-system | 31 | 约 0.89MB | 结构清晰，适合快速归档 |

## 项目 1：mini-transformer

路径：`D:\zhc\mini-transformer`

### 初步概述

一个用于理解 Transformer 的小型字符级语言模型项目。README 显示项目目标不是训练可用大模型，而是完整演示数据准备、训练集/验证集切分、decoder-only Transformer、训练 loss 观察和文本生成流程。

### 技术线索

- Python
- PyTorch
- 字符级语言模型
- Transformer
- 本地 CPU 小模型训练
- 可能包含 API serving、参数对比、张量形状说明

### 关键文档

| 文件 | 用途判断 |
| --- | --- |
| `README.md` | 项目入口、安装、训练、生成说明 |
| `API_SERVING.md` | API 服务相关说明 |
| `PARAMETERS.md` | 参数说明 |
| `PT_FORMAT.md` | PyTorch checkpoint 或参数格式说明 |
| `SHAPES.md` | 张量形状说明 |
| `TRANSFORMER_NOTES.md` | Transformer 学习笔记 |
| `experiments\README.md` | 实验说明 |
| `experiments\results.md` | 实验结果 |

### 最近活跃文件

- `PT_FORMAT.md`
- `parameter_view\parameter_compare.html`
- `PARAMETERS.md`
- `compare_parameters.py`
- `README.md`
- `API_SERVING.md`

### 整理建议

优先级：高。

建议把它整理成一个“Transformer 学习专题”：

- 先摘要 README 的运行流程。
- 再摘要 `TRANSFORMER_NOTES.md` 和 `SHAPES.md`。
- 把 `PARAMETERS.md`、`PT_FORMAT.md` 做成参数/模型格式速查。
- 如果后续知识库应用支持本地路径索引，可以把训练脚本、生成脚本和 API 服务入口标记为“可执行入口”。

## 项目 2：zhc-companion

路径：`D:\zhc\zhc-companion`

### 初步概述

一个面向 `D:\zhc` 工作区的本地项目伴侣。README 显示它可以列出本地项目、浏览文件夹、预览文本文件、扫描 Python/Node 常见路由、代理移动端 API 请求、展示最近变更文件，并支持简单本地提醒。

### 技术线索

- Node.js
- Expo / 移动端
- PWA
- 本地 HTTP 服务
- 项目扫描和文件预览
- API 代理

### 结构线索

| 子目录/文件 | 用途判断 |
| --- | --- |
| `server\package.json` | 本地服务端 |
| `mobile\package.json` | 移动端应用 |
| `mobile\app.json` | Expo 配置 |
| `pwa\README.md` | PWA 说明 |
| `pwa\index.html` | PWA 页面入口 |
| `pwa\app.js` | PWA 逻辑 |
| `android-lite\build.gradle` | Android 轻量构建 |
| `android-lite\settings.gradle` | Android 构建设置 |

### 最近活跃文件

- `pwa\README.md`
- `pwa\styles.css`
- `pwa\sw.js`
- `pwa\app.js`
- `pwa\index.html`
- `pwa\data\books\*.js`

### 整理建议

优先级：高。

这个项目和“本地知识库整理”目标高度相关。建议后续作为当前知识库的功能参考：

- 记录本地服务启动方式：`D:\zhc\zhc-companion\server` 下 `npm start`。
- 记录移动端启动方式：`D:\zhc\zhc-companion\mobile` 下 `npm start`。
- 研究它的“项目列表、文件预览、路由扫描”能力，后续可迁移到当前知识库应用。
- 如果要把当前知识库变成真正的本地资料管理器，`zhc-companion` 是最直接的参考项目。

## 项目 3：quant-system

路径：`D:\zhc\quant-system`

### 初步概述

一个个人量化交易系统 MVP。README 显示它面向 A 股股票和 ETF 日线回测，核心闭环是行情导入/拉取、双均线回测、查看资金曲线和交易记录、保存回测记录。

### 技术线索

- Python
- Streamlit
- SQLite
- AkShare
- CSV 行情导入
- 双均线策略回测
- 定时任务/信号扫描

### 关键文档和入口

| 文件/目录 | 用途判断 |
| --- | --- |
| `README.md` | 项目说明和启动方式 |
| `requirements.txt` | Python 依赖 |
| `config.yaml` | 配置 |
| `app.py` | Streamlit 应用入口 |
| `pages\*.py` | Streamlit 页面 |
| `services\*.py` | 数据、信号、调度服务 |
| `db\quant.db` | 本地数据库 |

### 最近活跃文件

- `db\quant.db`
- `README.md`
- `app.py`
- `pages\6_定时任务.py`
- `pages\5_信号监控.py`
- `services\signal_service.py`
- `services\scheduler_service.py`

### 整理建议

优先级：高。

建议整理成“个人量化系统项目卡片”：

- 记录启动方式：`python -m streamlit run app.py`。
- 记录数据流：CSV/AkShare -> SQLite -> 回测 -> 信号监控。
- 摘要策略逻辑：双均线买入/卖出/持有。
- 后续如果继续开发，应补一份“数据表结构”和“策略接口说明”。

## 项目 4：pi-mono

路径：`D:\zhc\pi-mono`

### 初步概述

一个 TypeScript monorepo，README 显示它是 Pi Agent Harness 的源码仓库，包含 coding agent CLI、agent runtime、LLM provider API、TUI 等包。目录中还有中文文档，说明曾经做过源码学习或中文整理。

### 技术线索

- TypeScript
- Node.js
- Monorepo
- Coding agent
- Tool calling
- LLM provider abstraction
- TUI
- 文档翻译/源码学习

### 关键文档

| 文件 | 用途判断 |
| --- | --- |
| `README.md` | 上游项目总览 |
| `AGENTS.md` | Agent 工作约定 |
| `CONTRIBUTING.md` | 贡献说明 |
| `SECURITY.md` | 安全说明 |
| `package.json` | monorepo 脚本和依赖 |
| `tsconfig.json` | TypeScript 配置 |
| `docs-cn\README.zh-CN.md` | 中文 README |
| `docs-cn\coding-agent-README.zh-CN.md` | coding agent 中文说明 |
| `docs-cn\pi-source-learning.md` | 源码学习笔记 |
| `docs-cn\containerization.zh-CN.md` | 容器化说明 |

### 最近活跃文件

- `docs-cn\coding-agent-README.zh-CN.md`
- `docs-cn\pi-source-learning.md`
- `docs-cn\AGENTS.zh-CN.md`
- `docs-cn\CONTRIBUTING.zh-CN.md`
- `docs-cn\containerization.zh-CN.md`
- `docs-cn\README.zh-CN.md`

### 整理建议

优先级：中高。

项目价值高，但体量比其他项目大。建议不要先分析源码，先整理中文学习文档：

- 先把 `docs-cn\pi-source-learning.md` 做成摘要。
- 再整理 `docs-cn\coding-agent-README.zh-CN.md`。
- 最后再按包拆分：agent runtime、coding agent CLI、provider API、TUI。
- 当前知识库可以把它归为“AI / Coding Agent 源码学习”专题。

## 支撑目录和归档文件

### `.build-tools`

路径：`D:\zhc\.build-tools`

包含 Android command line tools、Gradle、JDK 等构建工具压缩包。属于环境支撑，不建议纳入知识库正文。

建议记录：

- 工具名称
- 版本
- 被哪个项目使用
- 是否还能删除或迁移到统一工具目录

### `zhc-companion-source.zip`

路径：`D:\zhc\zhc-companion-source.zip`

源码归档文件。因为已有 `zhc-companion` 目录，建议先判断是否重复。未确认前只记录，不删除。

### `zhc-companion-lite-release.apk`

路径：`D:\zhc\zhc-companion-lite-release.apk`

Android 发布包。建议只记录版本和来源，不放入 GitHub。

## 后续整理路线

建议按以下顺序继续：

1. `mini-transformer`
   小而完整，适合先做项目摘要、运行说明、学习笔记整理。

2. `zhc-companion`
   和当前知识库目标最接近，适合作为后续功能参考。

3. `quant-system`
   结构清晰，适合形成项目卡片和功能说明。

4. `pi-mono`
   文档较多，先整理中文学习文档，再考虑源码模块。

## 建议的项目索引字段

后续每个代码项目可以统一补充这些字段：

| 字段 | 说明 |
| --- | --- |
| 项目名 | 目录名或真实项目名 |
| 路径 | 本地绝对路径 |
| 类型 | 学习项目、业务项目、工具项目、源码学习 |
| 技术栈 | Python、Node、TypeScript、Streamlit 等 |
| 启动方式 | 最小可运行命令 |
| 关键入口 | README、app.py、package.json、server 等 |
| 当前状态 | 活跃、归档、待确认、可删除候选 |
| 整理状态 | 已索引、已摘要、已归档 |
| 后续动作 | 阅读、补文档、运行验证、迁移功能 |

## 当前判断

`D:\zhc` 是高价值资料区，不建议当作普通下载目录处理。它更适合作为“近期个人开发项目”模块的核心来源。

当前最值得沉淀的不是文件本身，而是：

- 每个项目解决什么问题。
- 如何启动。
- 关键代码入口在哪里。
- 哪些文档已经写好。
- 哪些能力可以迁移到当前知识库应用。
