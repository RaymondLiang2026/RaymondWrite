# 数据结构说明

## 剧本条目核心字段

`title` 为中文题名，`author` 为作者，`type` 为 public 或 copyright，`tags` 为类型标签，`summary` 为 100 字左右简介，`framework` 对应框架库中的结构名称，`structure` 包含幕/场、转折点、高潮和人物弧线。

## 双版本字段

`chineseVersions` 存放汉译版本数组，每个版本包含 title、translator、publisher、isbn、link、reliability、note。`originalVersion` 存放原文版本，包含 title、language、publisher、link、reliability、note。

## 来源可信度

`official` 表示官方权威，前端显示 🟢。`trusted` 表示可信平台，前端显示 🟡。`biblio` 表示仅书目信息，前端显示 ⚪。

## 权限字段

版权作品全文字段暂不开放。若后续新增全文字段，应命名为 `fullTextLocked` 或 `copyrightTextLocked`，并通过 CODEOWNERS 要求超级管理员审核。