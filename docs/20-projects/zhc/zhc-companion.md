# ZHC Companion 专题摘要

生成日期：2026-06-19

来源目录：`D:\zhc\zhc-companion`

范围：根据 README、服务端入口、移动端配置、PWA 说明和项目结构做知识沉淀。未复制源码，未运行服务，未改动原始项目。

## 项目定位

`zhc-companion` 是一个面向 `D:\zhc` 工作区的本地项目伴侣。它的核心价值是把本地代码项目暴露成一个可浏览、可预览、可扫描、可代理调用的本地服务，并通过移动端或网页端访问。

从当前知识库建设角度看，它是一个很重要的参考项目，因为它已经实现了很多“本地资料管理器”需要的能力：

- 扫描本地工作区项目。
- 浏览目录树。
- 预览文本文件。
- 扫描 Python / Node 常见 API 路由。
- 代理请求本地服务。
- 展示最近变更文件。
- 支持移动端访问。

## 技术栈和模块

| 模块 | 路径 | 技术 | 作用 |
| --- | --- | --- | --- |
| 服务端 | `D:\zhc\zhc-companion\server` | Node.js 原生 HTTP | 扫描项目、文件预览、API 扫描、请求代理 |
| 移动端 | `D:\zhc\zhc-companion\mobile` | Expo、React Native、expo-router | 手机访问本地项目伴侣 |
| PWA | `D:\zhc\zhc-companion\pwa` | 原生 HTML/CSS/JS、Service Worker | 离线阅读类 PWA |
| Android Lite | `D:\zhc\zhc-companion\android-lite` | Gradle / Android | 轻量 Android 构建尝试 |

## 服务端

路径：`D:\zhc\zhc-companion\server`

启动方式：

```powershell
cd D:\zhc\zhc-companion\server
npm start
```

默认监听：

```text
http://0.0.0.0:4788
```

可配置项：

| 配置 | 默认值 | 作用 |
| --- | --- | --- |
| `ZHC_WORKSPACE_ROOT` | `D:\zhc` | 被扫描的工作区根目录 |
| `PORT` | `4788` | 本地服务端口 |
| `MAX_TEXT_FILE_BYTES` | 512KB | 文本预览最大文件体量 |

### 服务端核心能力

| 能力 | 实现线索 | 对知识库的价值 |
| --- | --- | --- |
| 限定工作区路径 | `isInsideWorkspace`、`resolveWorkspacePath` | 避免路径逃逸，适合本地资料浏览 |
| 项目列表 | `listProjects`、`getProjectSummary` | 自动生成项目索引 |
| 目录树浏览 | `listTree` | 可迁移为资料目录浏览 |
| 文本文件预览 | `readProjectFile` | 可预览 README、Markdown、配置、代码 |
| 忽略目录 | `IGNORED_DIRS` | 排除 `.git`、`node_modules`、缓存和构建产物 |
| 文本类型白名单 | `TEXT_EXTENSIONS` | 控制可预览文件类型 |
| API 路由扫描 | `scanApis` | 识别 Flask/FastAPI/Express/fetch 调用 |
| 最近变更 | `recentChanges` | 追踪近期活跃文件 |
| 请求代理 | `proxyRequest` | 从移动端调用本地服务 |

### 服务端接口

| 接口 | 方法 | 作用 |
| --- | --- | --- |
| `/` | GET | 服务运行提示 |
| `/health` | GET | 健康检查，并返回工作区根路径 |
| `/projects` | GET | 返回工作区项目列表 |
| `/tree` | GET | 返回指定项目的目录树 |
| `/file` | GET | 读取指定文本文件内容 |
| `/apis` | GET | 扫描项目中的可调用 API |
| `/events` | GET | 返回最近变更文件 |
| `/proxy` | POST | 代理 HTTP 请求 |

### API 扫描规则

服务端通过正则扫描文本文件中的常见路由模式：

| 类型 | 识别目标 |
| --- | --- |
| Flask | `@app.route(...)` 或类似装饰器 |
| FastAPI | `@app.get(...)`、`@app.post(...)` 等 |
| Express | `app.get(...)`、`router.post(...)` 等 |
| fetch | `fetch("http://...")` |

这对当前知识库很有启发：后续如果整理代码项目，可以自动提取“项目暴露了哪些接口”，而不是只记录 README。

## 移动端

路径：`D:\zhc\zhc-companion\mobile`

启动方式：

```powershell
cd D:\zhc\zhc-companion\mobile
npm install
npm start
```

技术栈：

- Expo
- React Native
- expo-router
- expo-notifications
- TypeScript

配置线索：

| 文件 | 作用 |
| --- | --- |
| `package.json` | Expo 启动脚本和依赖 |
| `app.json` | Expo 应用配置 |
| `app/index.tsx` | 移动端主页面 |
| `app/_layout.tsx` | Expo Router 布局 |

使用方式：

- 手机和电脑在同一网络。
- 本地服务运行在电脑上。
- 手机端配置电脑局域网 IP，例如 `http://192.168.1.23:4788`。

对当前知识库的启发：

- 如果未来要在手机上浏览本地资料，移动端连接本地服务是可行路线。
- 但当前知识库优先做网页端和 GitHub Pages 展示，移动端可以后置。

## PWA

路径：`D:\zhc\zhc-companion\pwa`

PWA 子项目当前不是项目伴侣主线，而是“微读经文 PWA”。它是一个纯前端离线阅读应用，能力包括：

- 本地数据阅读。
- 分区和章节选择。
- 全文搜索。
- 搜索关键词高亮。
- 收藏和最近阅读。
- 字号、行距、字体、主题设置。
- PWA 安装和离线缓存。

启动方式：

```powershell
cd D:\zhc\zhc-companion\pwa
python -m http.server 5177 --bind 0.0.0.0
```

对当前知识库的启发：

- PWA 离线缓存能力可以迁移。
- 搜索、高亮、最近阅读、收藏可以迁移。
- 数据版权和再分发授权需要单独处理，不能直接公开发布原数据。

## Android Lite

路径：`D:\zhc\zhc-companion\android-lite`

这是一个轻量 Android 构建尝试，包含 Gradle 配置、AndroidManifest、debug keystore 和构建缓存。

整理建议：

- 当前只做索引，不深入分析。
- `.gradle`、`build` 属于构建产物，不应进入知识库正文。
- 如果后续需要移动端原生封装，再回看这个目录。

## 与当前知识库的关系

`zhc-companion` 最有价值的不是某个页面，而是它已经验证了一套本地资料管理思路：

```text
本地根目录 -> 项目扫描 -> 目录树 -> 文本预览 -> API 扫描 -> 移动端/PWA 访问
```

当前知识库已经完成：

- Markdown 文档索引。
- GitHub Pages HTML 发布。
- 本地随笔编辑。

可以从 `zhc-companion` 借鉴的下一阶段能力：

| 能力 | 当前知识库可迁移方式 |
| --- | --- |
| 项目扫描 | 自动扫描 D/E 盘指定目录，生成索引草稿 |
| 目录树浏览 | 给本地资料做浏览器式目录视图 |
| 文本预览 | 在线预览 README、Markdown、配置文件 |
| 忽略规则 | 排除 `.git`、`node_modules`、缓存、构建目录 |
| 最近变更 | 生成“近期活跃资料”页面 |
| API 扫描 | 对代码项目生成接口索引 |
| PWA 缓存 | 让知识库文档离线可读 |

## 需要注意的边界

如果把这些能力迁移到当前知识库，需要注意：

- GitHub Pages 是静态站点，不能直接扫描用户本地磁盘。
- 本地扫描必须由本机服务或脚本完成。
- 浏览器直接访问本地文件有安全限制。
- 请求代理功能要谨慎暴露，避免变成本地开放代理。
- 路径预览必须限制在指定工作区，避免路径逃逸。
- 大文件、模型、视频仍然只做索引，不直接加载。

## 建议迁移路线

### 阶段 1：保留当前静态知识库

继续维护：

- `docs/*.md`
- 自动 HTML 发布
- GitHub Pages
- 随笔编辑器

### 阶段 2：增加本地索引生成脚本

借鉴 `zhc-companion` 的扫描逻辑，增加脚本：

```text
scripts/scan-local-projects.js
scripts/scan-local-docs.js
scripts/scan-recent-files.js
```

脚本只生成 Markdown，不启动服务。

### 阶段 3：增加本地服务

如果需要浏览本地文件，再增加类似 `zhc-companion-server` 的本地服务：

```text
GET /projects
GET /tree
GET /file
GET /recent
```

### 阶段 4：移动端或 PWA

最后再考虑：

- PWA 离线缓存。
- 手机访问局域网服务。
- 最近阅读、收藏、搜索高亮。

## 推荐后续动作

1. 先把 `zhc-companion` 的服务端扫描逻辑作为当前知识库的参考，不直接迁移代码。
2. 下一步整理 `quant-system`，形成第二个代码项目专题摘要。
3. 之后可以新增一个“本地扫描脚本设计文档”，明确当前知识库如何自动生成索引。

## 当前结论

`zhc-companion` 是当前知识库未来升级方向的原型参考。它证明本地项目扫描、文件预览、API 发现、移动端访问这些能力可以在本机实现。

短期内不建议直接合并两个项目。更稳妥的方式是：

```text
先沉淀文档和索引 -> 再抽象扫描脚本 -> 最后考虑本地服务和移动端
```
