---
title: 安装与启动
---

## 安装

`Macos` 上安装 `Redis`：

```bash
brew install redis
```

安装完成之后，**`macos` 系统默认能在 `/usr/local/Cellar/` 下找到 `redis` 目录**。

另外，**`redis-sever` 和 `redis-cli` 也会被安装到 `/usr/local/bin/` 下**。

关于 `Linux`、`Windows` 等平台的安装，可见[更多安装方式](https://redis.io/docs/getting-started/installation/)。

## 启动

启动方式分为两种：

1. 前台启动
2. 后台启动

**前台启动**可以利用 `redis-server` 来启动服务：

```bash
redis-server
```

启动成功之后，可以看见如下状态：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407171348.png)

此时如果按 `Ctrl + C`，则会停止服务。

也可以新打开一个 `shell` 窗口，利用 `redis-cli` 来停止服务：

```bash
redis-cli shutdown
```

**后台启动**可以利用 `brew services start redis` 来启动服务：

```bash
brew services start redis
```

停止服务的话，可以使用：
  
```bash
brew services stop redis
```

## 连接

不管是前台启动还是后台启动，都可以利用 `redis-cli` 来连接服务：

```bash
redis-cli
```

上述指令执行之后，会连接到本地的 `Redis` 服务，如果要连接到远程的 `Redis` 服务，可以使用：

```bash
redis-cli -h host -p port -a password
```

其中：

1. `-h` 表示 `host`
2. `-p` 表示 `port`
3. `-a` 表示 `auth`

执行之后，界面会进入 [REPL](https://zh.wikipedia.org/zh-cn/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF) 模式：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407171620.png)
