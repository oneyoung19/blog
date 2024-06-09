---
title: 文档操作
---

本节主要介绍 `MongoDB` 的文档操作。

`MongoDB` 中的数据存储在集合（`collection`）中，集合中的每条数据称为文档（`document`）。

其实 **`MongoDB` 的 `document` 相当于 `SQL` 中的 `row`**。

## 查询文档

查询文档常用的方法有：

| 方法名                       | 说明                                                         | 版本   |
| ---------------------------- | ------------------------------------------------------------ | ------ |
| `db.collection.find()`       | 查询集合中的文档                                             |        |
| `db.collection.findOne()`    | 查询集合中的单个文档                                         |        |
| `db.collection.findOneAnd*()` | 查询集合中的单个文档，并且可以对文档进行更新、删除等操作。    | `3.2+` |
| `db.collection.aggregate()`  | 使用聚合管道对文档进行聚合操作。                             | `3.2+` |
| `db.collection.count()`      | 统计集合中的文档数量。                                       |        |
| `db.collection.distinct()`   | 返回集合中指定字段的不同值。                                 |        |
| `db.collection.explain()`    | 返回集合中文档的执行计划。                                   |        |
| `db.collection.findAndModify()` | 查询集合中的单个文档，并且可以对文档进行更新、删除等操作。   |        |
| `db.collection.findAndRemove()` | 查询集合中的单个文档，并且可以对文档进行删除操作。          |        |
| `db.collection.group()`      | 对集合中的文档进行分组聚合操作。                             |        |
| `db.collection.mapReduce()`  | 使用 `map` 和 `reduce` 函数对集合中的文档进行聚合操作。      |        |
| `db.collection.parallelCollectionScan()` | 并行扫描集合中的文档。                                       |        |

此处，我们以 `find()` 和 `findOne()` 为例进行说明。

其中 **`findOne()` 方法只会查找第一条匹配的文档并返回，返回是对象形式**。

而 **`find()` 方法会返回一个 `cursor` 对象，通过 `cursor` 对象可以遍历集合中的所有文档**。

这个 `cursor` 对象也可以看做 `JavaScript` 中的 `Iterator` 类数组对象，可以通过 `forEach()` 方法遍历。

可以在 `MongoDB Shell` 中执行以下命令进行测试：

```sql
var result = db.collection.find();

var array = result.toArray();

printjson(array[1]);

array.forEach(function(doc) {
  printjson(doc);
});
```

## 插入文档

在 `MongoDB` 中，每一个文档都有一个 `_id` 字段，用于唯一标识一个文档。

如果插入时没有指定 `_id` 字段，`MongoDB` 会自动为文档添加一个 `_id` 字段。

插入文档常用的方法有：

| 方法名                       | 说明                     | 版本   |
| ---------------------------- | ------------------------ | ------ |
| `db.collection.insertOne()`  | 将单个文档插入集合       | `3.2+` |
| `db.collection.insertMany()` | 将多个文档插入集合       | `3.2+` |
| `db.collection.insert()`     | 将单个或多个文档插入集合 |        |

譬如：

```sql
db.collection.insertOne({
  "name": "张三",
  "age": 18
});
```

```sql
db.collection.insertMany([
  {
    "name": "张三",
    "age": 18
  },
  {
    "name": "李四",
    "age": 20
  }
]);
```

```sql
db.collection.insert([
  {
    "name": "张三",
    "age": 18
  },
  {
    "name": "李四",
    "age": 20
  }
]);
```



## 更新文档

更新文档分为**单个文档更新**与**聚合管道更新**。

顾名思义，**单个文档更新**是指更新单个文档。

而**聚合管道更新**是指更新多个文档，并且可以使用聚合管道操作符对文档进行复杂的操作，例如 `$lookup`、`$addFields`、`$group` 等操作符。

**聚合管道更新**通常用于对符合一定条件的多个文档进行批量更新，而不是像普通的文档更新那样一次只能更新一个文档。

**聚合管道更新**可以通过一个或多个聚合管道操作，对多个文档进行批量更新，大大提高了更新效率。

### 单个文档更新

更新文档常用的方法有：

| 方法                         | 描述                                                         | 版本   |
| ---------------------------- | ------------------------------------------------------------ | ------ |
| `db.collection.updateOne()`  | 更新单个与指定的过滤器匹配文档。                             | `3.2+` |
| `db.collection.updateMany()` | 更新所有与指定的过滤器匹配文档。                             | `3.2+` |
| `db.collection.replaceOne()` | **替换**单个与指定的过滤器匹配文档。                         | `3.2+` |
| `db.collection.update()`     | 默认情况下，`db.collection.update()` 方法更新单个文档。 要更新多个文档，请使用 `multi` 选项。 |        |

基本使用格式举例如下：

```sql
db.collection.updateOne(<filter>, <update>, <options>)

db.collection.replaceOne(<filter>, <replacement>, <options>)
```

其中的参数含义如下：

1. `<filter>` 查询条件
2. `<update>` 更新操作，使用更新运算符
3. `<replacement>` 替换文档，完整的新文档记录
4. `<options>` 可选参数，如排序、限制等参数

譬如：

```sql
db.collection.updateOne(
  { "name": "张三" },
  { $set: { "age": 20 } }
);
```

单个文档更新，也可以同时使用多个更新操作符，例如：

```sql
db.collection.updateOne(
  { "name": "张三" },
  {
    $set: { "age": 20 },
    $currentDate: { "lastModified": true }
  }
);
```

### 聚合管道更新

聚合管道更新使用的是聚合管道操作符，而不是更新运算符。

而且聚合管道更新只能使用 `updateMany()` 方法，且是**数组形式**。

另外，聚合管道更新的执行效率要比单个文档更新高很多。

假设有一个集合存储每个用户的订单信息，包括订单号、用户 `ID`、商品名称和价格，并且我们想对每个用户的订单进行汇总，并将结算后的销售总额保存在用户文档中，可以使用聚合管道更新如下：

```sql
db.collection.updateMany(
  {},
  [
    {
      $group: {
        _id: "$userId",
        total: { $sum: "$price" }
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user"
      }
    },
    {
      $unwind: "$user"
    },
    {
      $addFields: {
        "user.total": "$total"
      }
    },
    {
      $replaceRoot: {
        newRoot: "$user"
      }
    }
  ]
);
```

此代码的执行流程如下：

1. 使用 `$group` 操作符对每个用户的订单进行汇总，得到每个用户的销售总额
2. 使用 `$lookup` 操作符将用户文档与订单文档进行关联，得到每个用户的销售总额
3. 使用 `$unwind` 操作符将关联后的文档展开，得到每个用户的销售总额
4. 使用 `$addFields` 操作符将每个用户的销售总额添加到用户文档中
5. 使用 `$replaceRoot` 操作符将用户文档替换为聚合管道的根文档
6. 使用 `updateMany` 方法将聚合管道的根文档更新到用户文档中
7. `updateMany` 方法会将聚合管道的根文档作为过滤器，将聚合管道的根文档更新为聚合管道的最后一个文档



## 删除文档

删除文档常用的方法有：

| 方法                         | 描述                                     | 版本   |
| ---------------------------- | ---------------------------------------- | ------ |
| `db.collection.deleteOne()`  | 删除单个与指定过滤器匹配的文档           | `3.2+` |
| `db.collection.deleteMany()` | 删除所有与指定过滤器匹配的文档           | `3.2+` |
| `db.collection.remove()`     | 删除单个文档或与指定过滤器匹配的所有文档 |        |

如果想要删除所有文档，可以使用：

```sql
db.collection.deleteMany({});

# 或者

db.collection.remove({});
```

这里的空对象 `{}` 代表不过滤指定条件的文档，也就是会指代所有文档。
