---
title: 表操作
---

本节主要介绍 `MongoDB` 的表操作。

**实际上，`MongoDB` 中没有表的概念，它的数据存储在集合（`collection`）中**。

为了方便对比 `SQL`，我们此处将 `MongoDB` 中的**集合**称为表。

## 查询所有表

```sql
show collections;
```

## 创建表

```sql
db.createCollection("<collection_name>");
```

## 删除表

```sql
db.<collection_name>.drop();
```

## 重命名表

```sql
db.<collection_name>.renameCollection("<new_collection_name>");
```

## 查看表结构

```sql
db.<collection_name>.getIndexes();
```

## 复制表

```sql
db.<collection_name>.copyTo("<new_collection_name>");
```

## 复制表数据

```sql
db.<collection_name>.find().forEach(function(doc) {
  db.<new_collection_name>.insert(doc);
});
```

## 复制表结构

```sql
db.<collection_name>.find().limit(1).forEach(function(doc) {
  db.<new_collection_name>.insert(doc);
});
```

