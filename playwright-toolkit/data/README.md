# 剧本数据目录

当前运行站点仍读取根目录 `data.js` 与 `extended-data.js`。本目录作为后续 GitHub 协作的数据拆分目标，建议逐步迁移为：

- `frameworks.json`：故事框架数据库。
- `scripts.json`：剧本库条目。
- `parallel-readings.json`：公版对照阅读短段。
- `locked-fulltext.json`：仅在获得授权或公版确认后使用，默认不开放编辑。

迁移前，所有数据变更仍通过 PR 修改根目录 JS 数据文件，并遵守 `docs/COPYRIGHT_POLICY.md`。