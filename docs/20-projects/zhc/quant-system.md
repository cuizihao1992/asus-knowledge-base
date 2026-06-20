# Quant System 专题摘要

生成日期：2026-06-19

来源目录：`D:\zhc\quant-system`

范围：根据 README、配置、Streamlit 页面、服务层和策略代码做项目卡片。未运行系统，未读取数据库内容，未分析具体交易收益。

## 项目定位

`quant-system` 是一个个人使用的 A 股股票和 ETF 日线回测系统 MVP。当前版本聚焦最小闭环：

```text
导入/拉取行情数据 -> 运行双均线回测 -> 查看资金曲线和交易记录 -> 保存回测记录
```

它不是实盘交易系统，而是一个本地研究、回测、信号提醒工具。

## 技术栈

| 类别 | 内容 |
| --- | --- |
| 语言 | Python |
| 前端框架 | Streamlit |
| 数据处理 | pandas |
| 可视化 | plotly |
| 行情数据 | AkShare、CSV |
| 本地存储 | SQLite |
| 定时任务 | APScheduler |
| 配置 | YAML |

依赖文件：`D:\zhc\quant-system\requirements.txt`

```text
streamlit>=1.35
pandas>=2.2
plotly>=5.22
akshare>=1.14
PyYAML>=6.0
APScheduler>=3.10
```

## 启动方式

```powershell
cd D:\zhc\quant-system
python -m pip install -r requirements.txt
python -m streamlit run app.py
```

配置文件：`D:\zhc\quant-system\config.yaml`

默认配置：

| 配置项 | 默认值 |
| --- | --- |
| 数据库 | `db/quant.db` |
| 初始资金 | `100000` |
| 手续费率 | `0.0003` |
| 仓位比例 | `0.95` |
| 短均线 | `5` |
| 长均线 | `20` |

## 项目结构

| 路径 | 作用 |
| --- | --- |
| `app.py` | Streamlit 首页，展示概览指标、最新信号、已导入证券、最近回测 |
| `pages/1_行情数据.py` | CSV 导入和 AkShare 拉取 |
| `pages/2_策略回测.py` | 双均线策略回测 |
| `pages/3_回测记录.py` | 历史回测记录 |
| `pages/4_系统设置.py` | 系统配置查看 |
| `pages/5_信号监控.py` | 手动扫描买入/卖出/持有信号 |
| `pages/6_定时任务.py` | 每日定时扫描配置 |
| `services/data_service.py` | 行情标准化、CSV 导入、AkShare 拉取 |
| `services/db_service.py` | SQLite 表结构和读写 |
| `services/backtest_service.py` | 双均线回测计算 |
| `services/signal_service.py` | 信号扫描和日志 |
| `services/scheduler_service.py` | APScheduler 定时任务 |
| `strategies/ma_cross.py` | 双均线策略信号 |
| `data/raw/` | CSV 行情样本 |
| `db/quant.db` | 本地 SQLite 数据库 |

## 功能模块

| 模块 | 当前能力 |
| --- | --- |
| 行情数据 | CSV 导入；AkShare 拉取股票/ETF 日线；兼容中英文列名 |
| 本地存储 | 证券表、行情表、回测结果、信号结果、设置、扫描日志 |
| 策略回测 | 双均线策略；资金曲线；回撤；交易明细 |
| 历史记录 | 保存和查看回测结果 |
| 信号监控 | 对已导入证券扫描 BUY/SELL/HOLD |
| 定时任务 | 每日固定时间扫描信号 |
| 首页概览 | 证券数量、行情记录、回测次数、最新信号 |

## 数据流

```text
CSV / AkShare
  -> normalize_market_data
  -> SQLite market_data
  -> add_signals
  -> run_ma_cross_backtest
  -> backtest_results
  -> Streamlit 图表和表格
```

信号监控流：

```text
symbols + market_data
  -> scan_ma_cross_signals
  -> signal_results
  -> signal_scan_logs
  -> 首页和信号监控页面
```

定时任务流：

```text
app_settings
  -> apply_schedule
  -> APScheduler CronTrigger
  -> scan_and_log
```

## 数据库结构

`db_service.init_db()` 会创建以下表：

| 表 | 用途 |
| --- | --- |
| `symbols` | 证券基础信息 |
| `market_data` | 日线行情数据 |
| `backtest_results` | 回测结果、资金曲线、交易明细 |
| `signal_results` | 每次扫描的买入/卖出/持有信号 |
| `app_settings` | 应用配置和定时任务配置 |
| `signal_scan_logs` | 信号扫描日志 |

当前数据库文件：

```text
D:\zhc\quant-system\db\quant.db
```

注意：数据库是本地运行数据，不应提交到知识库仓库。

## 双均线策略

策略文件：`D:\zhc\quant-system\strategies\ma_cross.py`

核心逻辑：

| 条件 | 信号 |
| --- | --- |
| 短均线大于长均线，且上一期未持有 | 买入 |
| 短均线跌回长均线下方，且上一期持有 | 卖出 |
| 没有新交叉 | 持有 |

策略约束：

- 短均线周期必须大于 0。
- 长均线周期必须大于 0。
- 短均线周期必须小于长均线周期。

默认推荐：

```text
短均线：5
长均线：20
分析长度：250 个交易日
```

## 回测逻辑

核心入口：`run_ma_cross_backtest(params: BacktestParams)`

主要步骤：

1. 从 SQLite 加载指定证券的行情数据。
2. 调用 `add_signals` 计算均线和买卖点。
3. 初始现金进入模拟账户。
4. 买入信号出现且空仓时，按 `position_pct` 买入。
5. 卖出信号出现且持仓时，卖出全部持仓。
6. 每个交易日记录现金、持仓市值、总资产。
7. 计算总收益、年化收益、最大回撤、交易次数、胜率。
8. 返回资金曲线和交易明细。

关键参数：

| 参数 | 含义 |
| --- | --- |
| `initial_cash` | 初始资金 |
| `commission_rate` | 手续费率 |
| `position_pct` | 买入时使用的现金比例 |
| `short_window` | 短均线周期 |
| `long_window` | 长均线周期 |

## 信号监控

核心入口：`scan_ma_cross_signals(params, symbols=None)`

输出信号：

| 信号 | 中文含义 | 触发原因 |
| --- | --- | --- |
| `BUY` | 买入 | 短均线上穿长均线 |
| `SELL` | 卖出 | 短均线下穿长均线 |
| `HOLD` | 持有 | 无新的均线交叉 |

推荐使用方式：

```text
监控范围：自选股票和 ETF
周期：日线
频率：每天收盘后
交易方式：只提醒，不自动买卖
```

## 定时任务

核心入口：`services/scheduler_service.py`

默认任务：

| 配置 | 默认值 |
| --- | --- |
| Job ID | `daily_signal_scan` |
| 扫描时间 | `15:30` |
| 时区 | `Asia/Shanghai` |
| 调度器 | `BackgroundScheduler` |

注意：

- 定时任务依赖 Streamlit 进程运行。
- 电脑关机、终端关闭或 Streamlit 停止时，任务不会执行。
- 如果要长期无人值守，应改成 Windows 任务计划程序或独立后台服务。

## 当前范围边界

当前版本暂不包含：

- 实盘自动交易。
- 自动买卖。
- 多用户权限。
- 分钟线和 Tick 高频回测。
- 多策略组合回测。
- 复杂风控。

这个边界很合理。对个人本地工具来说，先保持“只提醒、不交易”更安全。

## 可沉淀的知识

这个项目适合沉淀成 4 类知识：

| 类型 | 可沉淀内容 |
| --- | --- |
| 量化系统 MVP | 从数据导入到回测记录的闭环 |
| 策略研究 | 双均线策略、参数对比、收益和回撤 |
| 本地数据管理 | SQLite 表设计、行情标准化、结果持久化 |
| 自动提醒 | 信号扫描、定时任务、扫描日志 |

## 后续优化建议

短期：

1. 增加回测结果导出 CSV。
2. 增加策略参数对比页面。
3. 增加批量更新 AkShare 行情。
4. 给 `data/raw` 和 `db/quant.db` 明确数据备份策略。

中期：

1. 增加 RSI、布林带、ETF 定投等策略。
2. 抽象策略接口，支持多策略统一回测。
3. 增加自选池管理。
4. 增加回测报告 Markdown 导出。

长期：

1. 把定时任务迁移到 Windows 任务计划程序或独立服务。
2. 增加风控模块。
3. 增加组合回测。
4. 谨慎评估是否接入实盘接口。

## 与当前知识库的关系

`quant-system` 可以作为“项目卡片 + 技术摘要 + 后续路线”的样板。它和 `mini-transformer`、`zhc-companion` 一起，形成 `D:\zhc` 的三个高价值项目专题：

| 项目 | 主题 |
| --- | --- |
| `mini-transformer` | AI / Transformer 学习闭环 |
| `zhc-companion` | 本地资料管理原型 |
| `quant-system` | 个人量化系统 MVP |

## 当前结论

`quant-system` 是一个结构清晰、功能边界合理的本地 MVP。它的价值不在策略复杂度，而在于已经形成一个完整闭环：

```text
行情数据 -> 本地存储 -> 策略回测 -> 结果记录 -> 信号监控 -> 定时扫描
```

后续最值得做的是“参数对比”和“结果导出”，而不是过早进入自动交易。
