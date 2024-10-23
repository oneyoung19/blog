---
title: 数据类型
---

`Redis` 支持五种数据类型：

1. `String`（字符串）
2. `Hash`（哈希）
3. `List`（列表）
4. `Set`（集合）
5. `Sorted Set` (有序集合)

## KEYS

可以使用 `KEYS` 命令，来查看 `Redis` 中的所有键：

```bash
KEYS *

KEYS user*

KEYS *orld
```

## String

`String` 是 `redis` 最基本的类型

`String` 类型是二进制安全的。

可以是普通文本或二进制数据，支持各种操作。如附加、裁剪、追加、自增、自减等等。

增删改查的操作如下：

1. 增加：`SET key value`
2. 删除：`DEL key`
3. 修改：`SET key value`
4. 查询：`GET key`

```bash
SET name "redis.net.cn"

GET name
```

:::tip
一个键最大能存储 `512MB` 的数据。
:::

## Hash

`Hash` 是一个 `String` 类型的域 `field` 和值 `value` 的 `map` 集合。

增删改查的操作如下：

1. 增加：`HSET key field value`
2. 删除：`HDEL key field`
3. 修改：`HSET key field value`
4. 查询：`HGET key field`

```bash
HSET user_info weight 60kg

HDEL user_info age

HSET user_info gender male
```

## List

`List` 是 `String` 类型的有序集合。

支持从列表的两端 `push` 和 `pop` 元素，可以用来做队列和栈。

增删改查的操作如下：

1. 增加
   - 从左边添加：`LPUSH key value`
   - 从右边添加：`RPUSH key value`

2. 删除
   - 从左边删除：`LPOP key`
   - 从右边删除：`RPOP key`

3. 修改
   - 从左边修改：`LSET key index value`
   - 从右边修改：`RSET key index value`

4. 查询
   - 从左边查询：`LINDEX key index`
   - 从右边查询：`RINDEX key index`
   - 查询所有：`LRANGE key 0 -1`
   - 查询指定范围：`LRANGE key start stop`

```bash
lpush redis.net.cn redis

lpush redis.net.cn mongodb

lpush redis.net.cn rabitmq

lrange redis.net.cn 0 10
```

## Set

`Redis` 的 `Set` 是 `string` 类型的**无序集合**。

**集合成员是唯一的**，且支持添加、删除和测试指定元素是否存在于集合中等操作。

增删改查的操作如下：

1. 增加：`SADD key value`
2. 删除：`SREM key value`
3. 修改：`SADD key value`
4. 查询：
   - 查询所有：`SMEMBERS key`
   - 判断是否存在：`SISMEMBER key value`

```bash
SADD redis.net.cn redis

SADD redis.net.cn mongodb

SADD redis.net.cn rabitmq

SMEMBERS redis.net.cn
```
## Sorted Set

`Redis` 的 `Sorted Set` 是 `string` 类型的**有序集合**。

**集合成员是唯一的，但是每个成员都会关联一个 `double` 类型的分数**。

通过分数可以对集合中的元素进行排序，支持添加、删除和测试指定元素是否存在于集合中等操作。

增删改查的操作如下：

1. 增加：`ZADD key score value`
2. 删除：`ZREM key value`
3. 修改：`ZADD key score value`
4. 查询：
   - 查询所有：`ZRANGE key 0 -1`
   - 查询指定范围：`ZRANGE key start stop`
   - 查询指定分数范围：`ZRANGEBYSCORE key min max`
   - 查询指定分数范围并按分数排序：`ZRANGEBYSCORE key min max WITHSCORES`

```bash
ZADD redis.net.cn 1 redis

ZADD redis.net.cn 2 mongodb

ZADD redis.net.cn 3 rabitmq

ZRANGE redis.net.cn 0 10
```
