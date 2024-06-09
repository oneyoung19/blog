---
title: 启动
---

## 配置文件

在 `macos` 上安装 `MongoDB` 后，会在 `/usr/local/etc/mongod.conf` 中生成配置文件。

```bash
# mongod.conf
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
  port: 27017
```

从该文件中可以看出，`MongoDB` 的配置文件主要包含三个部分：

- `systemLog`：日志配置
- `storage`：存储配置
- `net`：网络配置

## 启动服务

在 `macos` 上启动 `MongoDB` 服务的命令如下：

```bash
mongod --config /usr/local/etc/mongod.conf
```

该命令启动之后，按 `ctrl + c` 可以停止服务。

:::tip
该命令，同 `redis-server` 命令类似，启动的并不是守护进程。

笔者在使用 `brew services start mongodb-community` 启动守护进程时，发现失败了。更加合适的方式，留待日后考究。

此处作以记录。
:::

此处，再列举一下 `mongod` 的常用启动参数（**更多参数，可通过 `mongod --help` 查看**）：

| 参数                   | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `--config`             | 指明配置文件，譬如 `/usr/local/etc/mongod.conf`。            |
| `--bind_ip`            | `IP` 地址，若绑定 `127.0.0.1`，则只能本机访问，不指定默认本地所有 `IP`。 |
| `--port`               | 端口，默认为 `27017`。                                       |
| `--dbpath`             | 指定数据库路径。                                             |
| `--logpath`            | 指定日志文件，注意是指定文件不是目录。                       |
| `--logappend`          | 使用追加的方式写日志。                                       |
| `--serviceName`        | 指定服务名称。                                               |
| `--serviceDisplayName` | 指定服务名称，有多个 `mongodb` 服务时执行。                  |
| `--install`            | 指定作为一个 `Windows` 服务安装。                            |

## 连接数据库

在 `macos` 上连接 `MongoDB` 数据库的命令如下：

```bash
mongo [options] [db address] [file names (ending in .js)]
```

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230408185904.png)

其中，`[options]` 为可选参数，`[db address]` 为数据库地址，`[file names (ending in .js)]` 为 `js` 文件。

`[options]` 参数如下：

| 参数 | 描述 |
| ---- | ---- |
| `-h` | 指定 `host`，默认为 `localhost`。 |
| `-p` | 指定端口，譬如 `27017`。 |
| `-u` | 指定用户名。 |
| `-p` | 指定密码。 |
| `-d` | 指定数据库。 |

`[db address]` 参数如下：

| 参数 | 描述 |
| ---- | ---- |
| `--host` | 指定 `host`，默认为 `localhost`。 |
| `--port` | 指定端口，譬如 `27017`。 |
| `--username` | 指定用户名。 |
| `--password` | 指定密码。 |
| `--authenticationDatabase` | 指定数据库。 |

`[file names (ending in .js)]` 参数如下：

| 参数 | 描述 |
| ---- | ---- |
| `--eval` | 执行 `js` 代码。 |
| `--shell` | 进入 `shell` 模式。 |

## 设置用户和密码

在终端中运行 `mongo` 命令，进入 `MongoDB` 的 `shell` 模式。

```bash
mongo
```

运行如下命令，使用内置的 `admin` 数据库：

```bash
use admin
```

创建一个管理员用户，运行如下命令：

```js
db.createUser({user:"admin", pwd:"password", roles:["root"]})
```

使用这个管理员用户账号登录，运行如下命令：

```bash
mongo -u admin -p password --authenticationDatabase admin
```

## 全局变量

在 `MongoDB` 的 `shell` 模式中，有一些全局变量，可以使用。

| 变量名 | 描述 |
| ------ | ---- |
| `db` | 当前数据库。 |
| `rs` | 副本集。 |
| `sh` | 分片。 |
| `db.getMongo()` | 当前 `MongoDB` 实例。 |
| `db.getMongo().setSlaveOk()` | 设置 `MongoDB` 实例为 `slave`。 |
| `db.getMongo().setReadPref()` | 设置 `MongoDB` 实例的 `read` 偏好。 |
