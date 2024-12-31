---
title: 数据库操作
---

本节主要介绍 `MongoDB` 的数据库操作。

## 查询所有数据库

```sql
show dbs;
```

或者：
  
```sql
show databases;
```

## 创建数据库

```sql
use <database_name>;
```

如果数据库不存在，则创建数据库，否则切换到指定的数据库。

## 删除数据库

先执行 `use <database_name>` 命令，然后执行如下命令：

```sql
db.dropDatabase();
```

就会将当前数据库删除。
