# 文档结构设计

生成日期：2026-06-20

目标：把当前知识库从“按生成来源堆放 Markdown”整理为“按知识主题和维护职责组织”的长期结构。本文只规定仓库内文档结构，不移动、删除或上传 D/E 盘原始资料。

## 目标结构

```text
docs/
  00-overview/
    doc-structure.md
    knowledge-modules.md
    organizing-rules.md
    roadmap.md
    knowledge-schema.md
    status-board.md
    evaluation-rules.md

  10-indexes/
    disk-inventory.md
    code-project-index.md
    sutpc-project-index.md
    data-assets-index.md
    local-scanner-design.md

  20-projects/
    sutpc/
    zhc/

  30-assets/
    bim-models/
    data-formats/

  40-learning/
    cesium-webgl/
    surveying-remote-sensing/

  50-operations/
    cleanup/

  90-generated/
    scans/
```

## 放置规则

| 模块 | 放什么 | 不放什么 |
| --- | --- | --- |
| `00-overview` | 总体规划、规则、状态、路线图、结构说明 | 某个项目的具体摘要 |
| `10-indexes` | 目录索引、磁盘索引、扫描脚本设计 | 深度专题复盘 |
| `20-projects` | SUTPC、D:\zhc、mini-transformer、quant-system 等项目沉淀 | 通用术语表和清理记录 |
| `30-assets` | 模型资产、数据格式、BIM/GIS 资产卡片 | 项目需求摘要 |
| `40-learning` | Cesium、WebGL、测绘、遥感、论文和学习资料 | 删除记录 |
| `50-operations` | 清理候选、删除记录、重复文件确认 | 高价值资料摘要 |
| `90-generated` | 自动扫描脚本生成的结果 | 人工写作的核心文档 |

## 命名规则

| 类型 | 命名建议 |
| --- | --- |
| 索引 | `*-index.md` |
| 摘要 | `*-summary.md` 或项目名目录下的主题名 |
| 复盘 | `*-lessons.md` |
| 术语表 | `*-glossary.md` |
| 清理记录 | `cleanup-*.md`、`deleted-files-*.md` |
| 自动扫描 | 放入 `90-generated/scans/`，文件名带扫描对象或日期 |

## 迁移原则

1. 只移动仓库内 Markdown 文档，不移动 D/E 盘原始资料。
2. 每批迁移后运行 `node scripts/build-site.js`。
3. README、状态看板和构建脚本分类规则要同步更新。
4. 自动生成文件和人工沉淀文件要分开，避免后续脚本覆盖人工文档。
5. 旧路径不作为长期入口；以 Git 历史追踪迁移过程。

## 当前迁移批次

本轮迁移目标：

- 总览规则类进入 `00-overview`。
- 目录索引类进入 `10-indexes`。
- SUTPC 和 D:\zhc 项目沉淀进入 `20-projects`。
- BIM/GIS 模型和格式文档进入 `30-assets`。
- Cesium、测绘、遥感、学习资料进入 `40-learning`。
- 删除、重复、清理候选进入 `50-operations`。
- 新扫描脚本输出进入 `90-generated/scans/project-index.md`。

## 当前结论

这个结构的重点不是“目录好看”，而是让后续自动扫描、人工摘要、清理确认、项目复盘和作品集整理各有固定位置。结构稳定以后，再继续扩展标签、最近更新和自动看板。
