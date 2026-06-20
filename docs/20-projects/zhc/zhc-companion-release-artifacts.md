# zhc-companion 发布产物记录

生成日期：2026-06-21

范围：记录 `D:\zhc\zhc-companion-lite-release.apk` 的发布产物信息。本次只读元数据和 APK 条目，不移动、不删除、不解压。

## APK 卡片

| 字段 | 内容 |
| --- | --- |
| 路径 | `D:\zhc\zhc-companion-lite-release.apk` |
| 大小 | `12,901` 字节 |
| 修改时间 | `2026-06-11 13:32:18` |
| SHA256 | `73BA9CAD7CD47CD00A453C908B1C0C3A93D32E4D68255A59AAF71561D645919B` |
| 条目数 | 8 |

## APK 条目

| 条目 |
| --- |
| `META-INF/com/android/build/gradle/app-metadata.properties` |
| `META-INF/version-control-info.textproto` |
| `classes.dex` |
| `AndroidManifest.xml` |
| `resources.arsc` |
| `META-INF/CERT.SF` |
| `META-INF/CERT.RSA` |
| `META-INF/MANIFEST.MF` |

## 判断

该 APK 体量极小，清理收益几乎可以忽略。它是 `zhc-companion` 的发布产物，建议保留，至少等到有明确版本号、构建来源和可复现构建流程后再决定是否迁移或删除。

## 建议

- 暂保留 `D:\zhc\zhc-companion-lite-release.apk`。
- 后续如果整理 `D:\zhc` 项目结构，可迁移到 `D:\zhc\releases\zhc-companion-lite-release.apk`，并在本页更新路径。
- 不建议把 APK 上传到当前知识库仓库；保留元数据和哈希即可。