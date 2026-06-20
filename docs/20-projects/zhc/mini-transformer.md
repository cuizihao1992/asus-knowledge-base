# Mini Transformer 专题摘要

生成日期：2026-06-19

来源目录：`D:\zhc\mini-transformer`

范围：根据项目 README、实验结果、API 服务说明、张量形状说明和脚本入口做知识沉淀。未复制源码，未运行训练，未读取模型权重。

## 项目定位

`mini-transformer` 是一个用于理解 Transformer 的小型字符级语言模型项目。它不是为了训练可用的大模型，而是用尽量小的代码和 CPU 级实验展示完整流程：

1. 准备文本数据。
2. 切分训练集和验证集。
3. 搭建 decoder-only Transformer。
4. 训练并观察 loss。
5. 加载 checkpoint 生成文本。
6. 进一步包装成 OpenAI/Anthropic 风格的本地 HTTP 服务。

这个项目适合作为“从零理解 Transformer 工作流”的学习样例。

## 技术栈

| 类别 | 内容 |
| --- | --- |
| 语言 | Python |
| 核心框架 | PyTorch |
| API 服务 | FastAPI、Uvicorn、Pydantic |
| 模型类型 | 字符级 decoder-only Transformer |
| 运行方式 | 本地 CPU 小模型训练和推理 |
| 主要产物 | `checkpoints/tiny_transformer.pt`、参数对比报告、API 服务 |

依赖文件：`D:\zhc\mini-transformer\requirements.txt`

```text
torch
numpy
fastapi
uvicorn
pydantic
```

## 目录和入口

| 路径 | 用途 |
| --- | --- |
| `train_tiny_transformer.py` | 模型定义和训练主入口 |
| `generate.py` | 加载 checkpoint 并生成文本 |
| `api_server.py` | OpenAI/Anthropic 兼容 HTTP 服务 |
| `serving/runtime.py` | 服务端复用的模型加载和推理运行时 |
| `inspect_model.py` | 检查模型结构 |
| `trace_shapes.py` | 打印前向传播中的张量形状 |
| `compare_parameters.py` | 对比初始参数和训练后参数 |
| `run_experiments.py` | 批量运行小实验 |
| `data/tiny_corpus.txt` | 训练语料 |
| `experiments/results.md` | 实验结果记录 |
| `parameter_view/` | 参数可视化和导出结果 |
| `checkpoints/` | 训练产生的模型权重 |

## 核心代码结构

`train_tiny_transformer.py` 中的主要类和函数：

| 名称 | 作用 |
| --- | --- |
| `CharDataset` | 把文本转成字符 id，并生成训练/验证 batch |
| `MultiHeadSelfAttention` | 多头因果自注意力 |
| `FeedForward` | Transformer block 中的前馈网络 |
| `TransformerBlock` | 注意力、前馈、残差、LayerNorm 的组合 |
| `TinyTransformerLM` | 字符级语言模型整体 |
| `estimate_loss` | 估算训练集和验证集 loss |
| `main` | 训练流程入口 |

建议代码阅读顺序：

1. `CharDataset`
2. `MultiHeadSelfAttention`
3. `FeedForward`
4. `TransformerBlock`
5. `TinyTransformerLM`
6. `estimate_loss`
7. `main`

## 默认模型思路

项目默认使用小模型配置，目标是便于观察机制而不是追求生成质量。

典型配置：

| 参数 | 含义 |
| --- | --- |
| `block_size` | 上下文长度 |
| `n_embd` | 字符 embedding 维度 |
| `n_head` | 注意力头数 |
| `n_layer` | Transformer block 层数 |
| `batch_size` | 每次训练样本数 |
| `steps` | 训练步数 |

项目文档中提到默认模型约 13 万参数，适合学习和 CPU 小实验。

## 训练流程

推荐运行：

```powershell
cd D:\zhc\mini-transformer
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python train_tiny_transformer.py
```

快速试跑：

```powershell
python train_tiny_transformer.py --steps 100 --eval-interval 20
```

更认真一点的小训练：

```powershell
python train_tiny_transformer.py --steps 1500 --batch-size 16
```

训练完成后会保存：

```text
checkpoints/tiny_transformer.pt
```

## 文本生成

训练完成后可运行：

```powershell
python generate.py --prompt 小明 --max-new-tokens 120
```

注意：这是字符级小语料模型，生成内容主要用于观察机制，不应期待高质量中文表达。

## 实验结果

`experiments/results.md` 记录了 3 组 CPU 小实验：

| 实验 | 参数量 | Final Step | Train Loss | Val Loss | 判断 |
| --- | ---: | ---: | ---: | ---: | --- |
| `baseline_2layer_64embd` | 134,249 | 300 | 1.5962 | 5.1602 | 默认小模型，训练集拟合更强 |
| `tiny_1layer_32embd` | 29,961 | 300 | 3.6831 | 5.1384 | 更小更快，容量低 |
| `short_context_32` | 132,201 | 300 | 1.7894 | 4.9462 | 更短上下文，验证 loss 略低 |

实验结论：

- 训练 loss 下降说明模型更好地拟合训练文本。
- 验证 loss 更低说明泛化更好。
- 训练 loss 下降但验证 loss 不好，通常说明小语料上开始记忆。
- 本项目重点不是生成好文本，而是观察 Transformer 训练和推理机制。

## 张量形状速查

运行：

```powershell
python trace_shapes.py
```

默认演示配置：

```text
batch_size = 2
block_size = 16
n_embd = 32
n_head = 4
n_layer = 1
```

关键形状：

| 阶段 | 形状 |
| --- | --- |
| 输入 `x` | `[batch_size, block_size]` |
| 目标 `y` | `[batch_size, block_size]` |
| token embedding 后 | `[batch_size, block_size, n_embd]` |
| position embedding | `[block_size, n_embd]` |
| logits | `[batch_size, block_size, vocab_size]` |

注意力内部：

| 张量 | 形状 |
| --- | --- |
| `x` | `[B, T, C]` |
| `qkv` | `[B, T, 3C]` |
| `q` | `[B, n_head, T, head_dim]` |
| `k` | `[B, n_head, T, head_dim]` |
| `v` | `[B, n_head, T, head_dim]` |

这个文档适合作为理解 Transformer 代码时的形状检查表。

## API 服务能力

项目已经实现本地 HTTP 服务：

| 接口 | 用途 |
| --- | --- |
| `GET /` | 服务根信息 |
| `GET /health` | 健康检查 |
| `GET /v1/models` | OpenAI 风格模型列表 |
| `GET /v1/models/{model}` | 模型信息 |
| `POST /v1/chat/completions` | OpenAI chat completions 兼容 |
| `POST /v1/completions` | OpenAI completions 兼容 |
| `POST /v1/messages` | Anthropic Messages 基础兼容 |

支持：

- `Authorization: Bearer <API_KEY>`
- OpenAI 风格 `stream: true`
- Anthropic Messages 基础 SSE

启动方式：

```powershell
$env:API_KEY="my-local-key"
python api_server.py
```

其他 Agent 推荐配置：

| 字段 | 值 |
| --- | --- |
| `base_url` | `http://127.0.0.1:8000/v1` |
| `api_key` | `my-local-key` |
| `model` | `tiny-transformer-local` |

边界：

- 这个模型不是指令微调模型。
- Anthropic 兼容接口是基础版，不支持工具调用、图片输入等高级能力。
- 能被 Agent 调用，不代表有真实助理能力。

## 参数和 checkpoint

已有文档：

| 文档 | 作用 |
| --- | --- |
| `PARAMETERS.md` | 参数说明 |
| `PT_FORMAT.md` | PyTorch checkpoint / 参数格式说明 |
| `compare_parameters.py` | 初始参数和训练后参数对比 |
| `parameter_view/parameter_compare.html` | 参数对比可视化页面 |
| `parameter_view/full_parameter_values.txt` | 完整参数值导出，文件较大 |

整理建议：

- `PARAMETERS.md` 可沉淀成“参数速查”。
- `PT_FORMAT.md` 可沉淀成“checkpoint 格式说明”。
- `parameter_view/full_parameter_values.txt` 体量较大，只记录路径，不放入知识库正文。

## 知识库价值

这个项目适合沉淀成 4 类知识：

| 类型 | 可沉淀内容 |
| --- | --- |
| Transformer 学习 | 注意力、block、embedding、logits、loss |
| 小模型训练流程 | 数据准备、训练、验证、checkpoint、生成 |
| 模型服务封装 | FastAPI、OpenAI 接口、Anthropic 基础兼容 |
| 参数分析 | 参数形状、初始值/训练后值、checkpoint 格式 |

## 后续动作

建议下一步：

1. 建立 `docs/summaries/mini-transformer-shapes.md`，专门整理张量形状。
2. 建立 `docs/summaries/mini-transformer-api.md`，专门整理本地模型服务接口。
3. 可选：运行一次 `python trace_shapes.py`，把实际输出结果作为附录。
4. 可选：把 `parameter_compare.html` 作为本地文件索引，不提交进 GitHub。

## 当前结论

`mini-transformer` 已经不是单纯脚本项目，而是一个完整的“小模型学习闭环”：

```text
文本数据 -> 字符数据集 -> Transformer 训练 -> checkpoint -> 文本生成 -> API 服务 -> Agent 接入
```

它适合作为当前知识库里第一个“代码项目专题摘要”，后续可以继续拆分成 Transformer 原理、训练流程、API 服务和参数分析几个子专题。
