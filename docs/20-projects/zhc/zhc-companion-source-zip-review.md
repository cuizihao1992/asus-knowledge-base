# zhc-companion 源码压缩包对比

生成日期：2026-06-21

范围：只读比较 `D:\zhc\zhc-companion-source.zip` 与 `D:\zhc\zhc-companion` 中同名文件的 SHA256。未解压、未移动、未删除。

## 结论

`zhc-companion-source.zip` 不是当前目录的完全重复副本。zip 内 10 个文件在 `D:\zhc\zhc-companion` 中均存在，但只有 7 个哈希一致，3 个文件不同。

因此当前不建议删除该 zip。它更像是一个较早的源码快照，可作为版本留存，后续如果要清理，应先确认这 3 个差异是否有保留价值。

## 对比汇总

| 指标 | 数量 |
| --- | ---: |
| zip 内文件 | 10 |
| 本地同名文件存在 | 10 |
| 哈希一致 | 7 |
| 哈希不一致 | 3 |
| 本地缺失 | 0 |

## 文件级对比

| 相对路径 | zip 大小（字节） | 本地存在 | 哈希一致 | zip SHA256 前缀 | 本地 SHA256 前缀 |
| --- | ---: | --- | --- | --- | --- |
| `.gitignore` | 50 | 是 | 否 | `b27c58c5c9ce4a50` | `01a7021a1f1dd0b8` |
| `README.md` | 944 | 是 | 是 | `309ca1ff27dc5150` | `309ca1ff27dc5150` |
| `mobile\app.json` | 416 | 是 | 否 | `f0ca52ff8ef234c4` | `b9e20b6536827851` |
| `mobile\package-lock.json` | 409086 | 是 | 是 | `cbafd4d405e7d22f` | `cbafd4d405e7d22f` |
| `mobile\package.json` | 765 | 是 | 否 | `517ef630a5592d23` | `7a025add36231fc7` |
| `mobile\tsconfig.json` | 86 | 是 | 是 | `46d855f7ef05204b` | `46d855f7ef05204b` |
| `mobile\app\index.tsx` | 18838 | 是 | 是 | `5ac98b8bed4dd816` | `5ac98b8bed4dd816` |
| `mobile\app\_layout.tsx` | 244 | 是 | 是 | `8f0c8dfa3f1ca6c2` | `8f0c8dfa3f1ca6c2` |
| `server\package.json` | 235 | 是 | 是 | `159d01300153b8ec` | `159d01300153b8ec` |
| `server\src\index.js` | 11311 | 是 | 是 | `eb3283299243e3bd` | `eb3283299243e3bd` |

## 建议

- 暂保留 `D:\zhc\zhc-companion-source.zip`。
- 如果后续要删除，应先把 3 个差异文件的内容差异记录清楚，确认 zip 版本没有独立价值。
- 该 zip 体量很小，清理收益低，不应优先处理。