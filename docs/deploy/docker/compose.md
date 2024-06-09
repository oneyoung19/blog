---
title: Docker Compose
---

在前几章中，我们已经知道了镜像和容器的创建。

在现实开发中，一个前后端分离的 `Web` 项目会依赖 `Node` 构建，以及 `Nginx` 托管等。

因此实际上会需要创建 `Node` 容器以及 `Nginx` 容器。并且两个容器之间需要通信。

那么一方面可以使用**多阶段构建**的方式来实现，另一方面，则可以使用 `Docker Compose` 来实现。

`Compose` 中有两个重要的概念：

- 服务（`service`）：一个应用的容器，实际上可以包含若干运行相同镜像的容器实例。
- 项目（`project`）：由一组关联的应用容器组成的一个完整业务单元，在 `docker-compose.yml` 文件中定义。

因此，一个项目会由多个服务组成，`Compose` 面向项目管理。

## 安装

如果在前文中，下载的是 `Docker` 桌面版，而非脚本。

那么 `Docker Compose` 也会自动安装好。

可以通过 `docker-compose --version` 来查看是否已经安装 `Docker Compose`。

如果没有安装的话，那么可以参考[Docker Compose的安装与卸载](https://yeasy.gitbook.io/docker_practice/compose/install)。

## Compose模板文件

`Compose` 使用 `YAML` 文件来定义应用程序的服务。

默认的文件名称为 `docker-compose.yml`。

```yml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

注意每个服务都必须通过 `image` 指令指定镜像或 `build` 指令（需要 `Dockerfile`）等来自动构建生成镜像。

如果使用 `build` 指令，在 `Dockerfile` 中设置的选项(例如：`CMD`, `EXPOSE`, `VOLUME`, `ENV` 等) 将会自动被获取，无需在 `docker-compose.yml` 中重复设置。

下面简要介绍 `docker-compose.yml` 中的常用指令的用法。

### build

指定 `Dockerfile` 所在文件夹的路径（可以是绝对路径，或者相对 `docker-compose.yml` 文件的路径）。

`Compose` 将会利用它自动构建这个镜像，然后使用这个镜像。

```yml
version: "3.9"
services:
  webapp:
    build: ./dir
```

也可以使用 `context` 指定 `Dockerfile` 所在目录，并使用 `dockerfile` 指令指明 `Dockerfile`。

```yml
version: "3.9"
services:
  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
```

如果除了 `build` 指令外，还指定了 `image`，那么 `build` 指令将会被忽略。

```yml
version: "3.9"
services:
  webapp:
    build: ./dir
    image: webapp:tag
```

### image

指定为镜像名称或镜像 `ID`。

如果镜像在本地不存在，`Compose` 将会尝试拉取这个镜像。

```yml
version: "3.9"
services:
  webapp:
    image: ubuntu
```

### command

覆盖容器启动后默认执行的命令。

```yml
version: "3.9"
services:
  web:
    image: nginx:alpine
    command: [nginx-debug, '-g', 'daemon off;']
```

### container_name

指定容器名。

```yml
version: "3.9"
services:
  web:
    container_name: my-web-container
```

### depends_on

指定服务依赖。

下面的例子，会先启动 `db` 和 `redis`，再启动 `web`。

```yml
version: "3.9"
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
```

:::tip
注意：`web` 服务**不会等待 `db` 和 `redis` 完全启动之后才启动**。
:::

### dns

指定容器使用的 `DNS` **解析**服务器。

它可以设置为一个值，也可以设置为一个列表。

```yml
dns: 8.8.8.8

dns:
  - 8.8.8.8
  - 114.114.114.114
```

:::tip
`8.8.8.8` 是 `Google` 提供的免费 `DNS` 服务器；

`114.114.114.114` 是 `114DNS` 提供的免费 `DNS` 服务器。
:::

### dns_search

指定容器使用的 `DNS` **搜索**域名。

它可以设置为一个值，也可以设置为一个列表。

```yml
dns_search: example.com

dns_search:
  - dc1.example.com
  - dc2.example.com
```

### environment

设置环境变量。

```yml
version: "3.9"
services:
  web:
    environment:
      - DEBUG=1
      - foo=bar
    environment:
      - RACK_ENV=development
      - SHOW=true
      - SESSION_SECRET
```

### env_file

从文件中读取环境变量。

```yml
version: "3.9"
services:
  web:
    env_file:
      - web-variables.env
      - other-variables.env
```

:::tip
环境变量文件中每一行必须符合格式，支持 `#` 开头的注释行。

```shell
# common.env: Set development environment
PROG_ENV=development
```
:::

### expose

暴露端口，但是**不映射到宿主机**。

```yml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "3000"
    expose:
      - "3000"
```

### ports

暴露端口，并映射到宿主机。

基础形式为 `HOST:CONTAINER`，或者只指定 `CONTAINER`，此时会随机映射到宿主机的端口。

```yml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "3000:3000"
```

:::tip
在 `Docker Compose` 中，`ports` 和 `expose` 都用于将容器内的端口映射到主机上，但它们有一些不同之处。

- `ports`: 用于将容器的端口映射到主机上的端口，以便从外部网络访问容器。它可以使用以下格式指定：
  ```yml
  ports:
  - "HOST_PORT:CONTAINER_PORT"
  ```

- `expose`: 它也将容器内的端口公开到主机上，但是仅仅是在容器间相互连接时才有用。它并不会将容器的端口绑定到主机上，因此外部网络无法直接访问容器。可以使用以下格式指定：
  ```yml
  expose:
  - "CONTAINER_PORT"
  ```

因此，如果你需要从外部网络访问容器，则应该使用 `ports`，而如果你只需要容器之间进行连接，则可以使用 `expose`。
:::

### extra_hosts

类似 `Docker` 中的 `--add-host` 参数，指定额外的 `host` 名称映射信息。

```yml
version: "3.9"
services:
  web:
    build: .
    extra_hosts:
      - "googledns:8.8.8.8"
      - "dockerhub:52.1.157.61"
```

会在启动后的服务容器中 `/etc/hosts` 文件中添加如下两条条目：

```shell
8.8.8.8 googledns
52.1.157.61 dockerhub
```

### labels

为容器添加 `Docker` 元数据（`metadata`）信息。

```yml
version: "3.9"
services:
  web:
    build: .
    labels:
      com.example.description: "Accounting web app"
      com.example.department: "Finance"
      com.example.label-with-empty-value: ""
```

### networks

定义 `Docker` 容器之间的网络连接。

这个特性让 `Docker` 容器可以方便地进行通信和交互，而无需暴露不必要的端口或将它们暴露在公共网络中。

要使用 `Docker Compose` 中的 `networks`，可以在 `docker-compose.yml` 文件中定义一个 `networks` 部分。

该部分应该包含一个或多个网络的名称和配置，如下所示：

```yml
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    networks:
      - front-tier
      - back-tier

networks:
  front-tier:
    driver: bridge
  back-tier:
    driver: bridge
```

在上面的示例中，我们定义了两个网络：`front-tier` 和 `back-tier`。

我们还将 `web` 服务添加到这些网络中。这意味着 `web` 容器可以通过这些网络与其他容器进行通信。

对于每个网络，我们还可以定义特定的驱动程序（即网络类型）。

在这里，我们使用了默认的 `bridge` 驱动程序。其他可用的驱动程序包括 `overlay`、`macvlan` 和 `ipvlan` 等。

在使用 `Docker Compose` 的过程中，如果我们不定义 `networks`，则默认情况下，将创建一个默认的 `bridge` 网络来连接所有服务。

总之，`Docker Compose` 中的 `networks` 提供了一种方便的方法来管理 `Docker` 容器之间的网络连接，可以实现安全、高效和可伸缩的容器化应用程序。

### network_mode

指定 `Docker` 容器的网络模式，从而控制容器如何与主机和其他容器进行通信。

有多种网络模式可供选择，如 `bridge`、`host`、`none` 等。

默认情况下，`Docker Compose` 使用 `bridge` 网络模式，这意味着 `Docker Compose` 会创建一个本地的虚拟网络，并将容器连接到该网络中。

这种模式可以让容器之间相互通信，而不需要暴露所有端口。

以下是一个使用 `network_mode` 来指定网络模式的示例：

```yml
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
    network_mode: "host"
```

:::tip
`Docker`中有几种可用的网络模式，每种模式都有其特定的使用场景和含义。以下是最常见的四种网络模式：

1. `Bridge` 模式是 `Docker` 默认使用的网络模式。在此模式下，`Docker` 会在主机上创建一个虚拟网络，然后在该网络中创建一个桥接接口，并将每个容器连接到该网络中。这意味着每个容器都可以通过网络与其他容器通信，同时也可以在主机上通过映射端口与外部网络进行通信。

2. `Host` 模式下，容器使用主机的网络接口，而不是为容器创建虚拟网络接口。这意味着容器可以与主机共享相同的 `IP` 地址和端口。使用 `Host` 模式的主要优点是可以提高容器的性能，因为容器无需通过 `NAT` 转换网络数据包。但是，这也意味着容器与主机的网络相互依存，可能会增加安全风险。

3. `None` 模式下，`Docker` 不为容器配置任何网络接口。这意味着容器没有网络连接，不能与其他容器或外部网络进行通信。通常情况下，您可能不会选择此模式，除非您要为容器配置自定义网络。

4. `Overlay` 模式是用于创建跨多个 `Docker` 主机的容器网络的一种高级网络模式。在此模式下，`Docker` 在每个主机上创建一个虚拟网络，并将该网络连接到一个或多个其他主机的虚拟网络中。这样，容器可以在不同的主机上进行通信，而不必考虑主机的物理网络架构。

除了这些网络模式之外，还有一些其他的网络模式可供选择，例如 `Macvlan` 模式、`IPvlan` 模式等。

不同的网络模式适用于不同的场景和用途。
:::

### volumes

指定容器和宿主机之间的数据卷映射。

数据卷是 `Docker` 中一个重要的概念，用于在容器之间共享数据，并且在容器重启或者删除后数据仍然可以保留。

在 `docker-compose.yml` 文件中，可以使用 `<host>:<container>` 格式的**目录映射**来定义 `volumes`:

```yml
version: '3'
services:
  myservice:
    image: myimage
    volumes:
      - /path/on/host:/path/in/container
```

上述代码将宿主机上的 `/path/on/host` 目录映射到容器中的 `/path/in/container` 目录。

这样，在容器中访问 `/path/in/container` 目录时，实际上是访问宿主机上的 `/path/on/host` 目录。

还可以将数据卷作为一个**命名卷**使用，例如：

```yml
version: '3'
services:
  myservice:
    image: myimage
    volumes:
      - mynamedvolume:/path/in/container
volumes:
  mynamedvolume:
```

上述代码中，使用了一个名为 `mynamedvolume` 的命名卷，它将被映射到 `myservice` 容器中的 `/path/in/container` 目录。

还可以使用 `external` 选项引用已经创建的数据卷，例如：

```yml
version: '3'
services:
  myservice:
    image: myimage
    volumes:
      - myexternalvolume:/path/in/container
volumes:
  myexternalvolume:
    external: true
```

上述代码中，使用了一个名为 `myexternalvolume` 的外部数据卷，它将被映射到 `myservice` 容器中的 `/path/in/container` 目录。

## Compose命令行

`docker-compose` 与 `docker` 的命令行操作有许多类似之处。

此处简要列举一些常用的 `docker-compose` 命令。

### docker-compose up

`docker-compose up` 命令用于构建并启动 `Docker Compose` 中定义的所有服务。

如果 `Docker Compose` 中定义了多个服务，那么 `docker-compose up` 命令将按照 `depends_on` 的顺序依次启动这些服务。

例如，以下 `docker-compose.yml` 文件中定义了两个服务 `web` 和 `db`，并且 `web` 服务依赖于 `db` 服务：

```yml
version: '3'
services:
  web:
    build: .
    depends_on:
      - db
  db:
    image: postgres
```

在这种情况下，`docker-compose up` 命令将首先启动 `db` 服务，然后再启动 `web` 服务。

### docker-compose down

`docker-compose down` 命令用于停止并删除 `Docker Compose` 中定义的所有服务。

如果 `Docker Compose` 中定义了多个服务，那么 `docker-compose down` 命令将按照 `depends_on` 的相反顺序依次停止这些服务。

例如，以下 `docker-compose.yml` 文件中定义了两个服务 `web` 和 `db`，并且 `web` 服务依赖于 `db` 服务：

```yml
version: '3'
services:
  web:
    build: .
    depends_on:
      - db
  db:
    image: postgres
```

在这种情况下，`docker-compose down` 命令将首先停止 `web` 服务，然后再停止 `db` 服务。

### docker-compose build

`docker-compose build` 命令用于构建 `Docker Compose` 中定义的所有服务。

如果 `Docker Compose` 中定义了多个服务，那么 `docker-compose build` 命令将按照 `depends_on` 的顺序依次构建这些服务。

例如，以下 `docker-compose.yml` 文件中定义了两个服务 `web` 和 `db`，并且 `web` 服务依赖于 `db` 服务：

```yml
version: '3'
services:
  web:
    build: .
    depends_on:
      - db
  db:
    image: postgres
```

在这种情况下，`docker-compose build` 命令将首先构建 `db` 服务，然后再构建 `web` 服务。

### docker-compose run

`docker-compose run` 命令用于在 `Docker Compose` 中定义的服务中执行命令。

例如，以下 `docker-compose.yml` 文件中定义了一个服务 `web`：

```yml
version: '3'
services:
  web:
    build: .
```

在这种情况下，可以使用 `docker-compose run` 命令在 `web` 服务中执行命令：

```bash
docker-compose run web <command>
```

### docker-compose ps

`docker-compose ps` 命令用于列出 `Docker Compose` 中定义的所有服务。

### docker-compose logs

`docker-compose logs` 命令用于查看 `Docker Compose` 中定义的所有服务的日志。

### docker-compose exec

`docker-compose exec` 命令用于在 `Docker Compose` 中定义的服务中执行命令。

例如，以下 `docker-compose.yml` 文件中定义了一个服务 `web`：

```yml
version: '3'
services:
  web:
    build: .
```

在这种情况下，可以使用 `docker-compose exec` 命令在 `web` 服务中执行命令：

```bash
docker-compose exec web <command>
```

### docker-compose top

`docker-compose top` 命令用于查看 `Docker Compose` 中定义的所有服务的进程。

### docker-compose port

`docker-compose port` 命令用于查看 `Docker Compose` 中定义的所有服务的端口映射。

### docker-compose pause

`docker-compose pause` 命令用于暂停 `Docker Compose` 中定义的所有服务。

### docker-compose unpause

`docker-compose unpause` 命令用于取消暂停 `Docker Compose` 中定义的所有服务。

### docker-compose events

`docker-compose events` 命令用于查看 `Docker Compose` 中定义的所有服务的事件。

### docker-compose config

`docker-compose config` 命令用于验证 `Docker Compose` 文件。

### docker-compose version

`docker-compose version` 命令用于查看 `Docker Compose` 的版本信息。

## 部署Vue项目

在上一章中，创建了 `Dockerfile.prod` 文件，用于构建生产环境的 `Vue` 项目。

此处根据 `Dockerfile.prod` 来创建 `docker-compose.yml` 文件。

```yml
version: "3.9"
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.prod
    container_name: compose-web
    environment:
      - VUE_APP_TARGET=production
    ports:
      - "80:80"
      - "9527:9527"
```

也就是说，依旧使用多阶段构建 `node` 镜像和 `nginx` 镜像。

主要是，因为 `docker-compose` 处理文件比较麻烦，而多阶段构建可以直接通过 `COPY --from` 指令将目录进行移动。

相对多阶段构建，`docker-compose` 的优势在于对于容器的编排、容器服务之间的通信。

