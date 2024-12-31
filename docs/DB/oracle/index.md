---
title: 简要介绍
---

`Oracle` 是一种关系型数据库管理系统，由 `Oracle` 公司开发，是目前世界上使用最广泛的数据库管理系统之一。

`Oracle` 是关系型数据库管理系统的先驱，它是第一个支持 `SQL` 的关系型数据库管理系统，也是第一个支持 `SQL` 的商业数据库管理系统。

官方文档：[https://docs.oracle.com/en/database/oracle/oracle-database/19/index.html](https://docs.oracle.com/en/database/oracle/oracle-database/19/index.html)

中文文档：[https://www.yiibai.com/oracle](https://www.yiibai.com/oracle)

## 与 `Mysql` 的比较

在当前的互联网时代，`MySQL` 是最常见的**开源**数据库之一。

而 `Oracle` 相对来说，属于商业数据库，偏向于收费。一些旧项目或者一些大型项目中会使用到。

由于 `Oracle` 和 `Mysql` 同属于关系型数据库，所以在使用上有很多相似之处。

**譬如 `SQL` 语法在这俩数据库中是通用的，只有某些场景下的语法有所不同**。

在金融行业中， `Oracle` 数据库是比较常见的选择，因为它能够满足复杂和高度安全的数据处理需求，包括高并发、高可靠性和高可扩展性等。

此外，`Oracle` 的安全性也是很受金融行业关注的。

对于一般的应用场景，`MySQL` 也是一种不错的选择，它更加轻量级，易于安装和维护，并且能够处理中小型的数据量。

此外，`MySQL` 还支持的存储引擎比较多，能够适应不同的需求。

而且，`MySQL` 也有着比 `Oracle` 更加开放、更加灵活和更加友好的开源社区。

因此，在一般的应用场景下，大多数都会选择 `MySQL`。

## 安装

以 [社区版](https://www.oracle.com/database/technologies/oracle-database-software-downloads.html) 为例，

你可以直接通过在上面的链接中下载安装包的方式进行安装。

或者在 `macos` 上利用 `Homebrew` 安装：

```bash
brew install oracle
```

由于 `Oracle` 数据库体积较大，推荐通过 `Docker` 安装：

```bash
docker pull store/oracle/database-enterprise:
```

## 启动

在本机上安装完成后，你可以通过下面的命令启动 `Oracle` 数据库：

```bash
sqlplus / as sysdba
```

然后连接到数据库：

```bash
connect / as sysdba
```

如果是通过 `Docker` 安装的，你可以通过下面的命令启动 `Oracle` 数据库：

```bash
docker run -d -p 1521:1521 -p 5500:5500 store/oracle/database-enterprise:
```

然后连接到数据库：

```bash
docker exec -it <container_id> /bin/bash
```

