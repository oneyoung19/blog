---
title: 配置
---

在前文中，我们提到了 `redis.conf` 这个配置文件。

这个文件中包含了 `redis` 的所有配置项，**我们可以根据自己的需求通过修改 `redis.conf` 来修改这些配置项**。

另一种方式是，**在连接上 `redis-cli` 之后**，通过 `CONFIG` 命令查看或设置配置项。

## 查看配置

譬如使用 `*` 号来查看所有配置项：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407174511.png)

如果想要查看某个配置项，可以使用 `CONFIG GET <config>` 命令：

```bash
CONFIG GET loglevel
```

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407175553.png)

## 设置配置

如果想要设置某个配置项，可以使用 `CONFIG SET <config> <value>` 命令：

```bash
CONFIG SET loglevel "notice"
```

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407175754.png)

## 常用配置项

下面是一些常用的配置项：

| 配置参数                  | 默认值                    | 说明                                                         |
| ------------------------- | ------------------------- | ------------------------------------------------------------ |
| `daemonize`               | `no`                      | `redis-serve` 启动的服务默认不是守护进程的方式。设置 `yes` 以启动守护进程。 |
| `pidfile`                 | `/var/run/redis.pid`      | `Redis` 默认会把 `pid` 写入 `/var/run/redis.pid` 文件，可以通过 `pidfile` 指定。 |
| `port`                    | `6379`                    | 监听端口，默认端口为 `6379`。                                |
| `bind`                    | `127.0.0.1`               | 绑定的主机地址。                                             |
| `timeout`                 | `300`                     | 当 客户端闲置多长时间后关闭连接，如果指定为 `0`，表示关闭该功能 |
| `loglevel`                | `verbose`                 | 指定日志记录级别，总共支持四个级别：`debug`、`verbose`、`notice`、`warning`，默认为 `verbose`。 |
| `logfile`                 | `stdout`                  | 日志记录方式，默认为标准输出。                               |
| `database`                | `16`                      | 设置数据库的数量，默认数据库为 `0`，可以使用 `SELECT <dbid>` 命令在连接上指定数据库`id`。 |
| `save`                    | `3600 1 300 100 60 10000` | `save <seconds> <changes>`指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合。 |
| `rdbcompression`          | `yes`                     | 指定存储至本地数据库时是否压缩数据，默认为 `yes`，`Redis` 采用 `LZF` 压缩，如果为了节省 `CPU` 时间，可以关闭该选项，但会导致数据库文件变的巨大。 |
| `dbfilename`              | `dump.rdb`                | 指定本地数据库文件名，默认值为 `dump.rdb`                    |
| `dir`                     | `./`                      | 指定本地数据库存放目录                                       |
| `slaveof`                 | `''`                      | `slaveof  <masterip> <masterport>` 设置当本机为 `slav` 服务时，设置 `master` 服务的 `IP` 地址及端口，在 `Redis` 启动时，它会自动从 `master` 进行数据同步 |
| `masterauth`              | `''`                      | `masterauth <master-password>` 当 `master` 服务设置了密码保护时，`slav` 服务连接 `master` 的密码 |
| `requirepass`             | `''`                      | 设置 `Redis` 连接密码，如果配置了连接密码，客户端在连接 `Redis` 时需要通过`AUTH <password>` 命令提供密码，默认关闭。 |
| `maxclients`              | `128`                     | 设置同一时间最大客户端连接数，默认无限制，`Redis` 可以同时打开的客户端连接数为 `Redis` 进程可以打开的最大文件描述符数，如果设置 `maxclients 0`，表示不作限制。当客户端连接数到达限制时，`Redis` 会关闭新的连接并向客户端返回 `max number of clients reached` 错误信息。 |
| `maxmemory`               | `0`                       | 指定 `Redis` 最大内存限制，`Redis` 在启动时会把数据加载到内存中，达到最大内存后，`Redis` 会先尝试清除已到期或即将到期的 `Key`，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。`Redis` 新的 `vm` 机制，会把 `Key` 存放内存，`Value` 会存放在 `swap` 区。 |
| `appendonly`              | `no`                      | 指定是否在每次更新操作后进行日志记录，`Redis` 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 `redis` 本身同步数据文件是按上面 `save` 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 `no`。 |
| `appendfilename`          | `appendonly.aof`          | 指定更新日志文件名，默认为 `appendonly.aof`。                |
| `appendfsync`             | `everysec`                | 指定更新日志条件，共有3个可选值：<br /> `no`：表示等操作系统进行数据缓存同步到磁盘（快）  <br /> `always`：表示每次更新操作后手动调用 `fsync()` 将数据写到磁盘（慢，安全） <br /> `everysec`：表示每秒同步一次（折中，默认值） |
| `vm-enabled`              | `no`                      | 指定是否启用虚拟内存机制。                                   |
| `vm-swap-file`            | `/tmp/redis.swap`         | 虚拟内存文件路径。                                           |
| `vm-max-memory`           | `0`                       | 当 `vm-max-memory` 设置为 `0` 的时候，所有 `value` 都存在于磁盘。 |
| `vm-page-size`            | `32`                      | `Redis swap` 文件分成了很多的 `page`，`vm-page-size` 是要根据存储的数据大小来设定的。 |
| `vm-pages`                | `134217728`               | 设置 `swap` 文件中的 `page` 数量，由于页表（一种表示页面空闲或使用的 `bitmap`）是在放在内存中的，，在磁盘上每 `8` 个 `pages` 将消耗 `1byte` 的内存。 |
| `vm-max-threads`          | `4`                       | 设置访问 `swap` 文件的线程数，最好不要超过机器的核数，如果设置为 `0`，那么所有对 `swap` 文件的操作都是串行的，可能会造成比较长时间的延迟。 |
| `glueoutputbuf`           | `yes`                     | 设置在向客户端应答时，是否把较小的包合并为一个包发送。       |
| `hash-max-zipmap-entries` | `64`                      | 指定在超过一定的数量超过某一临界值时，采用一种特殊的哈希算法。 |
| `hash-max-zipmap-value`   | `512`                     | 指定在超过最大的元素超过某一临界值时，采用一种特殊的哈希算法。 |
| `activerehashing`         | `yes`                     | 指定是否激活重置哈希。                                       |
| `include`                 | `/path/to/local.conf`     | 指定包含其它的配置文件，可以在同一主机上多个 `Redis` 实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件。 |

