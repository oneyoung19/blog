---
title: 镜像
---

镜像可以看做是一个只读的模板，用来创建 `Docker` 容器。

镜像是由一系列的层叠而成的，每一层都代表一个 `Dockerfile` 指令。

如果用类比的方法，**可以把镜像看做是一个容器的 `class` 类，而容器则是镜像的实例**。

## 镜像的分类

`Docker` 镜像分为两种，分别是 `基础镜像` 和 `定制镜像`。

### 基础镜像

`基础镜像` 是由 `Docker` 官方提供的，可以直接使用。

`Docker` 官方提供了很多 `基础镜像`，可以在 [Docker Hub](https://hub.docker.com/) 上找到。

### 定制镜像

`定制镜像` 是由 `Dockerfile` 文件来创建的，可以根据自己的需求来定制。

## 镜像的命名

`Docker` 镜像的命名格式为 `仓库名:标签`，其中 `仓库名` 和 `标签` 都是可选的。

- 仓库名：可以是 `Docker Hub` 上的用户名，也可以是 `Docker Hub` 上的组织名，也可以是 `Docker Hub` 以外的仓库地址。
- 标签：可以是 `Docker Hub` 上的标签，也可以是 `Docker Hub` 以外的标签。
- 如果仓库名和标签都没有指定，那么默认会使用 `Docker Hub` 上的 `library` 组织名，以 `latest` 标签。
- 如果仓库名没有指定，但是标签指定了，那么默认会使用 `Docker Hub` 上的 `library` 组织名。
- 如果仓库名指定了，但是标签没有指定，那么默认会使用 `latest` 标签。

## 镜像的指令

本节主要总结镜像的相关指令。

### docker image pull

`Docker` 镜像的拉取可以使用 `docker image pull`  或者 `docker pull`命令。

第一种拉取方式，是使用**仓库名和版本号**。

基本格式如下：

```shell
docker image pull 仓库名:版本号
```

譬如以下几种形式的示例：

```shell
# 拉取官方的 hello-world 镜像
docker image pull hello-world

# 拉取官方的 alpine 镜像
docker image pull alpine

# 拉取官方的 alpine 镜像，指定标签为 3.12
docker image pull alpine:3.12

# 拉取官方的 alpine 镜像，指定标签为 3.12，指定仓库地址为 docker.io
docker image pull docker.io/alpine:3.12

# 拉取官方的 alpine 镜像，指定标签为 3.12，指定仓库地址为 docker.io，指定仓库名为 library
docker image pull docker.io/library/alpine:3.12
```

**当未声明版本时，默认拉取最新版本**。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230411212447.png)

第二种拉取方式，是使用 **`sha` 散列值**。

基本格式如下：

```shell
docker image pull sha:id
```

`sha` 散列值，是 `Docker` 镜像的唯一标识。

它的作用，是能够保证镜像的完整性，防止镜像被篡改。

`sha` 散列值，可以通过 `docker image inspect 镜像名` 命令来查看。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230411213349.png)

:::tip
关于 `sha` 散列值和 `IMAGE ID` 的区别，可以认为 **`IMAGE ID` 是 `sha` 散列值的子集**。

譬如上面拉取的 `hello-world`，其 `sha` 散列值是 `sha256:feb5d9fea6a5e9606aa995e879d862b825965ba48de054caab5ef356dc6b3412`。

而其 `IMAGE ID` 是 `feb5d9fea6a5`，也就是 `sha` 散列值的前 12 位。
:::

### docker image ls

`Docker` 镜像的查看可以使用 `docker image ls` 或者 `docker images` 命令。

基本格式如下：

```shell
docker image ls [options]
```

可以通过 `docker image ls --help` 来查看相关 `options`。大致有如下几种：

- -a
  - --all             Show all images (default hides intermediate images)
  - --digests         Show digests
- -f
  - --filter filter   Filter output based on conditions provided
  - --format string   Pretty-print images using a Go template
  - --no-trunc        Don't truncate output
- -q
  - --quiet           Only show image IDs

### docker image rm

`Docker` 镜像的删除可以使用 `docker image rm` 或者 `docker rmi` 命令。

基本格式如下：

```shell
docker image rm [options] 镜像名
```

可以通过 `docker image rm --help` 来查看相关 `options`。大致有如下几种：

- -f
  - --force           Force removal of the image
  - --no-prune        Do not delete untagged parents

### docker image prune

`Docker` 镜像的清理可以使用 `docker image prune` 命令。

**该命令默认用来清理悬虚镜像**。

基本格式如下：

```shell
docker image prune [options]
```

可以通过 `docker image prune --help` 来查看相关 `options`。大致有如下几种：

- -a
  - --all             Remove all unused images, not just **dangling** ones
  - --filter filter   Provide filter values
- -f
  - --force           Do not prompt for confirmation

其中，**`-a` 选项会移除 `dangling` 悬虚镜像、以及所有未被使用的镜像**。

:::tip
**悬虚镜像，指的是那些没有标签的镜像**，在列表中展示为 `<none>:<none>`。

TODO: 悬虚镜像举例
:::

### docker image inspect

`Docker` 镜像的检测可以使用 `docker image inspect` 命令。

基本格式如下：

```shell
docker image inspect [options] 镜像名
```

**该命令会返回该镜像的详细信息**。

其信息是一个 `json` 格式的数据，可以通过 `--format` 来指定返回的数据格式。

### docker image tag

`Docker` 镜像的打标签可以使用 `docker image tag` 命令。

基本格式如下：

```shell
docker image tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```

其中，`SOURCE_IMAGE` 是源镜像，`TARGET_IMAGE` 是目标镜像。

譬如，开发了一个镜像 `hello-wolrd`，以下命令会将 `hello-wolrd` 镜像打上 `v1` 标签：

```shell
docker image tag hello-wolrd hello-wolrd:v1
```

迭代更新 `hello-world` 之后，可以通过以下命令，将 `hello-wolrd` 镜像打上 `v2` 标签：

```shell
docker image tag hello-wolrd hello-wolrd:v2
```

**这与 `git`打标签的功能，是类似的。**

### docker image build

`Docker` 镜像的构建可以使用 `docker image build` 命令。

**镜像的构建，依赖于 `Dockerfile`**。

基本格式如下：

```shell
docker image build [options] PATH | URL | -
```

- `PATH` 是 `Dockerfile` 所在的目录。默认为当前工作目录。
- `URL` 是 `Dockerfile` 所在的 `git` 仓库地址。
- `-` 是指从 `stdin` 读取 `Dockerfile`。

### docker image history

`docker image history` 是一个命令行工具，用于显示 `Docker` 镜像的历史记录，包括每一层的操作指令和对应的镜像 `ID`。

当你使用 `docker build` 命令创建一个新的 `Docker` 镜像时，每一条指令都会创建一个新的镜像层。

**`docker image history` 命令可以帮助你查看镜像层的变化，了解镜像是如何构建出来的**。

该命令的输出包含以下信息：

- 每一层的镜像 `ID`
- 每一层的创建时间
- 每一层所包含的文件和文件系统变化
- 每一层所执行的 `Dockerfile` 指令

这些信息可以帮助你诊断构建问题，优化构建流程，并且更好地理解镜像的组成和特性。

譬如，我们可以通过以下命令，查看 `hello-world` 镜像的历史记录：

```shell
docker image history hello-world
```

打印信息如下：

```shell
IMAGE          CREATED         CREATED BY                                      SIZE      COMMENT
feb5d9fea6a5   18 months ago   /bin/sh -c #(nop)  CMD ["/hello"]               0B        
<missing>      18 months ago   /bin/sh -c #(nop) COPY file:50563a97010fd7ce…   13.3kB 
```

### docker image push

**`docker image push` 用于将本地 `Docker` 镜像推送到 `Docker Hub` 或其他 `Docker Registry` 上**。

它允许用户将自己的 `Docker` 镜像分享给其他人，或者在不同的 `Docker` 主机之间共享 `Docker` 镜像。

具体来说，`docker image push` 命令会将本地 `Docker` 镜像上传到指定的 `Docker Registry`，上传的镜像可以通过在其他机器上运行 `docker image pull` 命令进行获取和使用。该命令的语法如下：

```bash
docker image push [OPTIONS] NAME[:TAG]
```

其中，`NAME[:TAG]` 参数指定了要推送的 `Docker` 镜像的名称和标签。

需要注意的是，在使用 `docker image push` 命令之前，需要先登录到 `Docker Registry`。可以使用 `docker login` 命令登录到 `Docker Hub` 或其他 `Docker Registry`。

此外，如果要推送的 `Docker` 镜像太大，可能需要较长的时间进行上传。可以使用 `docker system prune` 命令清理本地 `Docker` 系统，以释放磁盘空间。

另外，对于私有的 `Docker Registry`，需要在 `Docker` 配置文件中添加认证信息，才能够推送本地 `Docker` 镜像。具体方法可以参考 `Docker` 官方文档。

### docker image save

**`docker image save` 用于将一个或多个 `Docker` 镜像保存为 `tar` 归档文件**。

这个命令将会将镜像的文件系统和元数据打包成一个 `tar` 文件，并输出到标准输出或指定的文件中。

具体使用方式如下：

```bash
docker image save [OPTIONS] IMAGE [IMAGE...]
```

其中，IMAGE 表示需要保存的 `Docker` 镜像名称或 `ID`，可以同时指定多个镜像。

例如，要将名为 `myimage:latest` 的 `Docker` 镜像保存为 `myimage.tar` 文件，可以执行以下命令：

```bash
docker image save -o myimage.tar myimage:latest
```

注意，`docker image save` 命令不会保存容器的状态，只会保存镜像本身的内容。

### docker image load

**`docker image load` 用于从一个 `tar` 归档文件中加载 `Docker` 镜像到本地 `Docker` 镜像库中**。

这个命令与 `docker image save` 命令结合使用，可以用于将 `Docker` 镜像导出到一个 `tar` 归档文件中，并将其迁移到另一个 `Docker` 主机上。

具体来说，`docker image load` 命令将一个 `tar` 归档文件中的 `Docker` 镜像加载到本地 `Docker` 镜像库中，并创建一个本地的镜像仓库。该命令的语法如下：

```bash
docker image load [OPTIONS] < FILE
```

其中，`< FILE` 参数指定了要加载的 `tar` 归档文件。

通常，`tar` 归档文件是通过 `docker image save` 命令生成的。

需要注意的是，使用 `docker image load` 命令加载的 `Docker` 镜像文件需要与本地 `Docker` 主机的操作系统架构和版本相同。

如果不匹配，将会导致加载失败或者无法运行。

另外，**如果要在多个 `Docker` 主机之间迁移 `Docker` 镜像，建议使用 `docker image save` 和 `docker image load` 命令组合**，而不是 `docker image export` 和 `docker image import` 命令组合。

因为 `docker image export` 和 `docker image import` 命令不会保留 Docker 镜像元数据和层信息，可能会导致镜像不可用或数据损坏。

### docker image import

`docker image import` 可以将本地文件系统上的一个压缩包或文件作为 `Docker` 镜像导入到本地镜像库中。

它可以将任何文件系统作为镜像导入到 `Docker` 镜像系统中，但它不会保留任何原始的 `Docker` 镜像元数据（例如镜像的名称，标签等）。

这意味着通过导入的镜像将没有名称和标签，只有一个唯一的 `ID`。

该命令的语法如下：

```bash
docker image import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
```

其中，`file|URL|-` 参数指定了要导入的文件或URL，`REPOSITORY[:TAG]` 参数指定了新创建的 `Docker` 镜像的名称和标签。

如果省略了该参数，则会为导入的镜像生成一个唯一的 `ID`。

需要注意的是，**使用 `docker image import` 导入的镜像不能像使用其他 `Docker` 镜像一样被 `push` 到远程仓库**。

如果需要在多个机器上使用该镜像，则需要将导入的镜像文件通过其他方式分发到这些机器上。
