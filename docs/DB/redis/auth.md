---
title: 账号密码
---

`Redis` 默认地址是 `127.0.0.1:6379`。

当使用 `redis-cli` 时，默认是不需要密码的。

如果想要更加安全，那么可以给 `Redis` 添加密码验证。

首先找到 `Redis` 的配置文件 `/etc/redis.conf` 或者 `/usr/local/etc/redis.conf`，

在该文件中查找 `requirepass` 字段，默认如下：

```
# requirepass foobared
```

将以上配置修改为：

```
requirepass <password>
```

利用 `brew services restart redis` 重启 `Redis` 之后，配置生效。

此后，登录 `Redis` 有以下两种方式：

1. `redis-cli -a <password>`
2. `redis-cli` 之后，然后执行 `AUTH <password>`。（**推荐**）
