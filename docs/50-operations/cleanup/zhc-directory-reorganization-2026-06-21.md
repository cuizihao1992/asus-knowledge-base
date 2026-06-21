# D:\zhc 目录重组记录

执行日期：2026-06-21

目的：整理代码项目区的顶层外围文件，保持源码项目目录不动。只移动 `.build-tools`、APK 发布产物和源码快照压缩包，不删除、不解压、不上传。

## 保持原位

| 路径 | 原因 |
| --- | --- |
| `D:\zhc\.git` | Git 仓库元数据，不移动 |
| `D:\zhc\mini-transformer` | 源码项目目录，不移动 |
| `D:\zhc\pi-mono` | 源码项目目录，不移动 |
| `D:\zhc\quant-system` | 源码项目目录，不移动 |
| `D:\zhc\zhc-companion` | 源码项目目录，不移动 |
| `D:\zhc\.gitignore` | 仓库根配置文件，不移动 |

## 移动清单

| 原路径 | 新路径 |
| --- | --- |
| `D:\zhc\.build-tools` | `D:\zhc\90-archive\build-tools\.build-tools` |
| `D:\zhc\zhc-companion-lite-release.apk` | `D:\zhc\90-archive\releases\zhc-companion-lite-release.apk` |
| `D:\zhc\zhc-companion-source.zip` | `D:\zhc\90-archive\source-snapshots\zhc-companion-source.zip` |

## 新增说明

`D:\zhc\README-目录说明.md` 已记录目录用途和整理边界。

## 注意

`.build-tools` 迁移后，如果 `zhc-companion` 的 Android 构建脚本依赖旧路径，需要更新脚本或环境变量。当前知识库只记录迁移事实，不修改源码项目。