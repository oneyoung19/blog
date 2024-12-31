---
title: 容器
---

## 容器指令

### docker container run

`docker container run` 是启动容器的命令，可以启动一个新的容器。

```shell
docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

其中，`OPTIONS` 有以下几种：

- `--name`：指定容器名称；
- `-d`：后台运行容器，并返回容器 `ID`；
- `--ip`：指定容器的 `IP` 地址。
- `--ip6`：指定容器的 `IPv6` 地址。
- `-p`：指定端口映射，格式为：`主机(宿主)端口:容器端口`；
- `--add-host`：添加一个自定义的 `host` 到容器中。
- `-it`：以交互模式运行容器，通常与 `/bin/bash` 同时使用；
- `--rm`：容器退出后自动删除容器文件；
- `-e`：指定环境变量；
- `--link`：指定容器间的连接；
- `-v`：指定目录挂载，格式为：`主机(宿主)目录:容器目录`；
- `--privileged`：赋予容器最高权限。
- `--net`：指定容器的网络连接类型，支持的类型有：`bridge`、`host`、`none`、`container`、`network`。
- `--network-alias`：给容器指定网络别名。
- `--dns`：指定容器的 `DNS` 服务器。
- `--dns-search`：指定容器的 `DNS` 搜索域。
- `--dns-opt`：指定容器的 `DNS` 选项。
- `--mac-address`：指定容器的 `MAC` 地址。
- `--restart`：指定容器的重启策略，支持的策略有：`no`、`on-failure`、`always`、`unless-stopped`。
- `--security-opt`：指定容器的安全选项。
- `--ulimit`：指定容器的 `ulimit` 限制。

以 `-it` 为例，启动一个名为 `container_name` 的容器，使用 `ubuntu` 镜像，以及使用 `bash`：

```shell
docker container run --name container_name -it ubuntu /bin/bash
```

上述命令执行后，会进入容器的 `bash` 环境。

此时，**如果通过 `EXIT` 命令退出容器，容器会停止运行**。

如果想要退出容器，但不停止容器，可以使用 `CTRL + P + Q` 组合键。

### docker container create

`docker container create` 可以创建一个新的容器，但不会启动该容器。

```shell
docker container create [OPTIONS] IMAGE [COMMAND] [ARG...]
```

譬如，创建一个名为 `container_name` 的容器，使用 `ubuntu` 镜像：

```shell
docker container create --name container_name ubuntu
```

如果要指定启动容器时要运行的命令，可以在 `docker container create` 命令中指定。

譬如，创建一个名为 `container_name` 的容器，使用 `ubuntu` 镜像，启动容器时运行 `ls` 命令：

```shell
docker container create --name container_name ubuntu ls
```

:::tip
1、`docker container create` 只是创建一个新的容器，但不会启动它，而 `docker container run` 会创建并启动一个新的容器。

2、`docker container create` 命令允许你在容器启动时指定要运行的命令，但不会立即运行，而 `docker container run` 命令则是在创建容器后立即运行指定的命令。

3、`docker container create` 命令创建容器后返回容器 `ID`，而 `docker container run` 命令则返回容器的输出结果。

因此，`docker container create` 适用于创建一个容器但不需要立即启动它的情况，而 `docker container run` 适用于需要立即创建并启动一个容器的情况。
:::

### docker container attach

`docker container attach` 可以连接到**正在运行**的 `Docker` 容器，从而可以与容器进行交互。

```shell
docker container attach container_name
```

如果容器已经在运行并在前台运行进程，则使用 `docker attach` **会将当前的终端与容器的进程绑定在一起**。

**如果使用 `exit` 退出该进程，容器也将停止**。

如果容器中运行的进程已经停止，则使用 `docker attach` 将无法连接到容器。

推荐使用 `docker exec` 命令在运行的容器中启动新的进程，而无需连接到容器。这是一个更安全的方法，因为它不会将您的终端与容器的进程绑定在一起。

### docker container exec

`docker container exec` 可以用来在**正在运行**的容器中执行命令。

**该容器必须处在启动中，即 `running`。**

通用命令为以下形式：

```shell
docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

譬如，执行 `ls` 命令：

```shell
docker container exec container_name ls
```

进入容器：

```shell
docker container exec -it container_name /bin/bash
```

退出容器的话，可以使用 `exit` 命令：

```shell
exit
```

:::tip
`docker container run` 是启动容器。

`docker container exec` 是执行容器命令。

这两种形式的执行会属于不同的进程，所以，如果使用 `docker container run` 启动容器，然后使用 `docker container exec` 执行命令，那么，这两个命令是不同的进程，所以，如果执行 `exit` 命令，那么，只会退出 `docker container exec` 这个进程，而不会退出 `docker container run` 这个进程。
:::

### docker container start

`docker container start` 是启动容器的命令，可以启动一个或多个容器。

```shell
# 启动一个容器
docker container start container_name

# 启动多个容器
docker container start container_name1 container_name2 container_name3
```

### docker container stop

`docker container stop` 是停止容器的命令，可以停止一个或多个容器。

```shell
# 停止一个容器
docker container stop container_name

# 停止多个容器
docker container stop container_name1 container_name2 container_name3
```

### docker container restart

`docker container restart` 是重启容器的命令，可以重启一个或多个容器。

```shell
# 重启一个容器
docker container restart container_name

# 重启多个容器
docker container restart container_name1 container_name2 container_name3
```

### docker container pause

`docker container pause` 是暂停容器的命令。

**容器的所有进程将会被挂起，容器将会停止响应新的请求，但容器的状态、文件系统等都会被保留**。

```shell
docker container pause <container_name_or_id>
```

要恢复一个被暂停的容器，可以使用 `docker container unpause` 命令。

:::tip
`docker container pause` 命令会暂停容器中所有的进程，但不会停止容器本身。

这意味着容器的状态、文件系统等都会被保留，只是容器中的进程被暂停了。

**暂停容器通常用于减少容器对系统资源的占用，或者暂停容器以进行维护或调试**。

而 `docker container stop` 命令会停止容器中的所有进程，并停止容器本身。

这将导致容器中的所有未保存的数据都将丢失，并且容器将不再占用系统资源。

**停止容器通常用于关闭已经完成工作的容器，或者在更新容器配置或镜像时重新启动容器**。
:::

### docker container unpause

`docker container unpause` 是恢复暂停的容器的命令。

```shell
docker container unpause <container_name_or_id>
```

该命令对应 `docker container pause`。


### docker container kill

`docker container kill` 是杀死容器的命令。

```shell
docker container kill [OPTIONS] CONTAINER [CONTAINER...]
```

其中，`OPTIONS` 可以包括以下选项：

- `--signal`, `-s`: 指定要发送的信号。默认为 `SIGKILL`。

使用 `docker container kill` 命令强制停止容器可能会导致数据丢失或损坏。

如果你需要正常停止容器并保存其中的数据，可以使用 `docker container stop` 命令来优雅地停止容器。

**`docker container stop` 会向容器发送 `SIGTERM` 信号，允许容器在停止之前完成一些清理工作**。

如果容器在一定时间内没有正常停止，`docker container stop` 命令会自动转而发送 `SIGKILL` 信号强制停止容器。

### docker container rm

`docker container rm` 是删除容器的命令，可以删除一个或多个容器。

```shell
# 删除一个容器
docker container rm container_name

# 删除多个容器
docker container rm container_name1 container_name2 container_name3
```

### docker container prune

`docker container prune` 是**删除所有停止的容器**的命令。

`prune` 英文翻译为 `修剪`。

```shell
docker container prune
```

默认情况下，在 `docker container prune` 之前，会有一个提示，提示是否删除所有停止的容器。

如果不想要提示，可以使用 `-f` 参数。

```shell
docker container prune -f
```

### docker container ls

`docker container ls` 是列出容器的命令，默认列出运行中的容器，可以使用 `-a` 列出所有容器。

```shell
# 列出运行中的容器
docker container ls

# 列出所有容器
docker container ls -a
```

### docker container logs

`docker container logs` 是查看容器日志的命令。

```shell
docker container logs [OPTIONS] container
```

譬如，查看容器从 `1` 分钟前开始的日志：

```shell
docker container logs --since 1m container_name
```

### docker container top

`docker container top` 是查看容器中运行的进程的命令。

**该命令可以帮助了解容器内部的活动，以及哪些进程正在消耗容器的资源**。

```shell
docker container top CONTAINER
```

### docker container stats

`docker container stats` 是查看容器的统计信息的命令。

**该命令可以帮助了解容器使用的 `CPU`、内存、网络和磁盘资源等信息，以及容器的整体健康状态。**

```shell
docker container stats [OPTIONS] [CONTAINER...]
```

### docker container inspect

`docker container inspect` 是查看容器的详细信息的命令。

```shell
docker container inspect [OPTIONS] NAME|ID [NAME|ID...]
```

### docker container port

`docker container port` 是查看容器的端口映射的命令。

```shell
docker container port [OPTIONS] CONTAINER [PRIVATE_PORT[/PROTO]]
```

### docker container diff

`docker container diff` 命令用于比较容器文件系统中的更改。

它可以列出容器中添加、删除或修改的文件或目录。

具体来说，`docker container diff` 命令将列出在容器的根目录中添加、修改或删除的所有文件。

它将以以下格式输出文件或目录的变化：

```shell
A /path/to/added/file
M /path/to/modified/file
D /path/to/deleted/file
C /path/to/renamed/file -> /path/to/new/file
```

其中，`A` 表示添加、`M` 表示修改、`D` 表示删除、`C` 表示重命名。

例如，要查看名为 `mycontainer` 的容器与其基本映像之间的文件差异，可以使用以下命令：

```shell
docker container diff mycontainer
```

此命令将列出 `mycontainer` 容器中与基本映像不同的文件和目录。可以使用这些输出来了解容器的状态，并查找任何不期望的更改。

### docker container commit

`docker container commit` 用于将一个容器的当前状态保存为一个新的映像。

使用此命令可以在容器的基础上创建一个新的映像，并将容器的更改保存为该映像的一部分。

```shell
docker container commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
```

其中，`OPTIONS` 指定可选的参数，`CONTAINER` 指定要提交的容器的 `ID` 或名称，`REPOSITORY` 指定新映像的名称，`TAG` 指定新映像的标签。

例如，要将名为 `mycontainer` 的容器保存为名为 `myimage` 的映像，可以使用以下命令：

```shell
docker container commit mycontainer myimage
```

此命令将容器的当前状态保存为一个新的映像，并将其命名为 `myimage`。

可以使用 `docker image ls` 命令查看新的映像列表，以确认新的映像已经创建。

`docker container commit` 命令可用于在容器中进行更改并将更改保存为新的映像。

但是，**最好的做法是使用 `Dockerfile` 和 `docker build` 命令来构建映像，以便在代码库中记录映像的完整构建过程**。

### docker container cp

`docker container cp` 是 `Docker` 命令行工具中的一个命令，用于将文件或目录从主机系统复制到运行中的 `Docker` 容器中，或者将文件或目录从运行中的 `Docker` 容器复制到主机系统中。

具体来说，`docker container cp` 命令的语法如下：

```shell
# 将文件从主机系统复制到容器中
docker container cp [OPTIONS] SRC_PATH CONTAINER:DEST_PATH

# 将文件从容器中复制到主机系统中
docker container cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH
```

譬如，我们需要将主机系统上的 `/home/user/config` 目录中的配置文件导入到 `mycontainer` 容器中的 `/app/config` 目录中，可以使用以下命令：

```shell
docker container cp /home/user/config mycontainer:/app/config
```

如果我们需要将容器中 `/app/data` 目录中的数据导出到主机系统上的 `/home/user/data` 目录中，可以使用以下命令：

```shell
docker container cp mycontainer:/app/data /home/user/data
```

### docker container export


`docker container export` 是将容器的文件系统导出为一个 `tar` 归档文件的命令。

```shell
docker container export [OPTIONS] CONTAINER_NAME > CONTAINER_NAME.tar
```

### docker container rename

`docker container rename` 是重命名容器的命令。

**该命令需要容器处于运行中。**

```shell
docker container rename <old_container_name_or_id> <new_container_name>
```

该命令只能重命名正在运行的容器，而无法重命名已经停止的容器。

此外，重命名容器不会影响容器的 `ID` 和标签，只会影响容器的名称。

### docker container update

`docker container update` 是更新容器的命令。

```shell
docker container update [OPTIONS] CONTAINER [CONTAINER...]
```

其中，`OPTIONS` 有以下几种常用选项：

- `--cpu-shares`: 设置容器的 `CPU` 权重，范围为 `2` 到 `262144`。
- `--memory`: 设置容器的内存限制。
- `--restart`: 设置容器的重启策略。

### docker container wait

`docker container wait` 是等待容器停止的命令。

```shell
docker container wait CONTAINER [CONTAINER...]
```

该命令会一直阻塞，直到容器停止运行。

**当容器停止时，该命令将返回容器退出的状态码**。
