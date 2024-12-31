---
title: 前言
---

`MongoDB` 是一个 `NoSQL` 数据库管理系统，**使用面向文档的数据模型**，是一种基于分布式文件存储的数据库系统。

它是由 `C++` 编写而成，具有高性能、高可用性、易部署等特点，在 `Web` 应用中被广泛使用。

`MongoDB` 将数据存储为一个文档，数据结构由键值(`key=>value`)对组成。

**`MongoDB` 文档类似于 `JSON` 对象。字段值可以包含其他文档，数组及文档数组**。

官方文档：[https://www.mongodb.com/docs/manual/](https://www.mongodb.com/docs/manual/)

中文文档：[https://www.yiibai.com/mongodb](https://www.yiibai.com/mongodb)

## 安装

以 [社区版](https://www.mongodb.com/try/download/community) 为例，

在 `macos` 上安装 `MongoDB` 的步骤如下：

```bash
brew install mongodb-atlas

atlas setup
```

你也可以通过在上面的链接中下载安装包的方式进行安装。

## 术语对照

| SQL术语       | MongoDB术语   | 解释/说明                                   |
| ------------- | ------------- | ------------------------------------------- |
| `database`    | `database`    | 数据库                                      |
| `table`       | `collection`  | 数据库表/集合                               |
| `row`         | `document`    | 数据记录行/文档                             |
| `column`      | `field`       | 数据记录列/域                               |
| `index`       | `index`       | 索引                                        |
| `table joins` |               | 表连接，`MongoDB` 不支持                    |
| `primary key` | `primary key` | 主键，`MongoDB` 自动将 `_id` 字段设置为主键 |
