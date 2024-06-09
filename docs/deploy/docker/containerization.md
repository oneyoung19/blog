---
title: 应用容器化
---

应用容器化是将应用程序和其所有依赖项打包成一个容器中的过程。

这个容器可以在任何支持容器技术的操作系统上运行，而不需要重新配置或重新安装依赖项。

应用容器化技术提供了一种轻量级、可移植、可扩展和可隔离的部署方式，让开发者能够更方便地构建、测试和部署应用程序。

在 `Docker` 中，开发者可以将应用程序打包到一个镜像中，然后在容器中运行。

这个镜像包含了应用程序代码、库文件和运行时环境等所有需要的依赖项，从而避免了在不同的环境中重新安装和配置这些依赖项的复杂性。

## Dockerfile

`Dockerfile` 是一个文本文件，其中包含了一条条指令，用于构建一个镜像。

`Dockerfile` 中的每一条指令都会创建一个新的镜像层，并对镜像进行更新。

当 `Docker` 客户端执行 `docker build` 命令时，它会读取 `Dockerfile` 中的指令，并根据指令构建一个新的镜像。

`Dockerfile` 中的指令可以分为以下几类：

- 基础指令（`FROM`、`MAINTAINER`、`RUN`、`CMD`、`EXPOSE`、`ENV`、`ADD`、`COPY`、`ENTRYPOINT`、`VOLUME`、`USER`、`WORKDIR`）
- 镜像维护指令（`LABEL`）
- 构建指令（`ARG`、`ONBUILD`、`STOPSIGNAL`、`HEALTHCHECK`、`SHELL`）
- 注释指令（`#`）

:::tip
关于如何区分命令是否会新建镜像层，一个基本的原则是：

- 如果指令的作用是向镜像中增添新的文件或程序，那么这条指令就会新建镜像层；
- 如果只是告诉 `Docker` 如何完成构建或者如何运行应用程序，那么就只会增加镜像的元数据。
:::

譬如一个简单的 `node` 服务的 `Dockerfile` 如下：

```shell
# Linux x64
FROM alpine

LABEL maintainer="nigelpoulton@hotmail.com"

# Install Node and NPM
RUN apk add --update nodejs npm curl

# Copy app to /src
COPY . /src

WORKDIR /src

# Install dependencies
RUN  npm install

EXPOSE 8080

ENTRYPOINT ["node", "./app.js"]
```

在 `Dockerfile` 中的指令主要有以下几种：

### FROM

`FROM` 指令用于**指定基础镜像**。

实际上，我们是基于基础镜像，实现一个定制化镜像。

因此一个 `Dockerfile` 中 `FROM` 是必备的指令，并且必须是第一条指令。

```shell
FROM <image>[:<tag>]
```

在 `Docker Hub` 上有非常多的高质量的官方镜像，有可以直接拿来使用的服务类的镜像，譬如：

- `nginx`
- `redis`
- `mongo`
- `mysql`
- `httpd`
- `php`
- `tomcat`

也有一些方便开发、构建、运行各种语言应用的镜像，譬如：

- `node`
- `openjdk`
- `python`
- `ruby`
- `golang`

此外，官方镜像中还提供了一些更为基础的操作系统镜像，譬如：

- `ubuntu`
- `debian`
- `centos`
- `fedora`
- `alpine`

除了选择现有镜像为基础镜像外，`Docker` 还存在一个特殊的镜像，名为 `scratch`。

**这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像**。

如果以 `scratch` 为基础镜像的话，意味着将不以任何镜像为基础，接下来所写的指令将作为镜像第一层开始存在。

### LABEL

`LABEL` 指令用于给镜像以键值对的形式添加一些元数据。

```shell
LABEL <key>=<value> <key>=<value> <key>=<value> ...
```

譬如，声明镜像的作者和文档地址：

```shell
LABEL maintainer="Tom"
LABEL docs="https://docs.docker.com/engine/reference/builder/"
```

### RUN

`RUN` 指令用于**执行命令行命令**。

它的使用格式有两种：

```shell
# RUN 命令
RUN <command>

# RUN ["可执行文件", "参数1", "参数2" ...]
RUN ["executable", "param1", "param2"]
```

在书写 `Dockerfile` 时，要注意的是**每一条 `RUN` 指令都会新建一层镜像**。

```shell
FROM debian:stretch

RUN apt-get update
RUN apt-get install -y gcc libc6-dev make wget
RUN wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz"
RUN mkdir -p /usr/src/redis
RUN tar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1
RUN make -C /usr/src/redis
RUN make -C /usr/src/redis install
```

上面的 `Dockerfile` 中，每一条 `RUN` 指令都会新建一层镜像，这样会导致镜像体积过大。

因此，我们可以将多条 `RUN` 指令合并为一条指令，这样就只会新建一层镜像。

```shell
FROM debian:stretch

RUN apt-get update \
    && apt-get install -y gcc libc6-dev make wget \
    && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
    && mkdir -p /usr/src/redis \
    && tar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1 \
    && make -C /usr/src/redis \
    && make -C /usr/src/redis install
```

其中，**`\` 表示换行，`&&` 表示将各个命令串联起来。**

相比之下，新的 `Dockerfile` 中只会新建一层镜像，因此镜像体积也会更小。

### COPY

`COPY` 指令用于**从构建上下文目录中<源路径>的文件/目录复制到新的一层的镜像内的<目标位置>**。

基本使用格式如下：

```shell
COPY <src>... <dest>
```

`COPY` 指令的 `src` 参数可以是多个，但是 `dest` 参数只能是一个。

`COPY` 指令的 `src` 参数可以是一个文件，也可以是一个目录。

**如果 `src` 参数是一个目录的话，那么 `dest` 参数必须以 `/` 结尾，否则会报错**。

`dest` 不需要事先存在，`COPY` 指令会自动创建。

譬如，复制 `package.json` 到 `/usr/src/app/` 目录中：

```shell
COPY package.json /usr/src/app/
```

此外，还需要注意一点，使用 `COPY` 指令，源文件的各种元数据都会保留。比如读、写、执行权限、文件变更时间等。

这个特性对于镜像定制很有用。特别是构建相关文件都在使用 `Git` 进行管理的时候。

最后，额外说明一下，`COPY` 指令的 `.` 符号。

- **当 `src` 是 `.` 时，代表的是上下文目录**。通常是 `Dockerfile` 所在的目录。

- **当 `dest` 是 `.` 时，代表的是容器内部的工作目录**。可以通过 `WORKDIR` 指令来设置，默认是 `/`。

### WORKDIR

`WORKDIR` 指令用于**设置工作目录**。

```shell
WORKDIR /path/to/workdir
```

`WORKDIR` 指令的参数可以是相对路径，也可以是绝对路径。

如果 `WORKDIR` 指令的参数不存在，那么 `Docker` 会自动创建这个目录。

如果 `WORKDIR` 指令没有参数，那么会使用默认的工作目录，即 `/`。

一些初学者会将 `Dockerfile` 当做 `SHELL` 脚本来书写，譬如：

```shell
RUN cd /app
RUN echo "helo world" > hello.txt
```

如果将这个 `Dockerfile` 进行构建镜像运行后，会发现找不到 `/app/world.txt` 文件，或者其内容不是 `hello`。

因为在 `Shell` 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；

而在 `Dockerfile` 中，这两行 `RUN` 命令的执行环境根本不同，是两个完全不同的容器。

因此，第二个 `RUN` 命令是在 `/` 目录下执行的，而不是 `/app` 目录下。

这是对 `Dockerfile` 构建分层存储的概念不了解所导致的错误。

**如果需要改变以后各层的工作目录的位置**，那么应该使用 `WORKDIR` 指令。

```shell
WORKDIR /app

RUN echo "hello" > world.txt
```

### EXPOSE

`EXPOSE` 指令用于**声明容器提供服务所使用的端口**。

```shell
EXPOSE <port1> [<port2>...]
```

`EXPOSE` 指令的参数可以是一个或多个，多个端口之间用空格分隔。

`EXPOSE` 指令是声明容器运行时提供服务的端口，这只是一个声明，**在容器运行时并不会因为这个声明应用就会开启这个端口的服务**。

在 `Dockerfile` 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；

另一个用处则是在运行时使用随机端口映射时，也就是 `docker run -P` 时，会自动随机映射 `EXPOSE` 的端口。

### ENTRYPOINT

`ENTRYPOINT` 指令用于**设置容器启动时执行的命令**。

该指令的定义支持 `shell` 形式和 `exec` 形式。

基本格式如下：

```shell
ENTRYPOINT ["executable", "param1", "param2"]
```

其中，`executable` 可以是一个 `shell` 命令，也可以是一个可执行文件。

当 `executable` 是一个 `shell` 命令，将会在容器中启动一个新的 `shell` 进程，并由该 `shell` 进程解释执行命令。

```shell
FROM python:3.9-slim-buster
COPY myscript.py /myscript.py
ENTRYPOINT ["python", "/myscript.py"]
```

当 `executable` 是一个可执行文件时，将会直接在容器中启动该可执行文件。

```shell
FROM python:3.9-slim-buster
COPY myscript.py /myscript.py
ENTRYPOINT ["/usr/local/bin/python", "/myscript.py"]
```

总的来说，如果在 `ENTRYPOINT` 中使用了参数扩展或者希望在容器中使用管道、重定向等 `shell` 特性，那么应该使用 `shell` 形式；

如果希望执行的是一个可执行文件而不是一个 `shell` 命令，那么应该使用 `exec` 形式。

### CMD

`CMD` 指令用于设置**容器启动时默认执行**的命令。

`CMD` 有多种不同的使用方式：

1. `CMD ["executable","param1","param2"]` (`exec` 形式，推荐)

**在容器启动时运行指定的可执行文件和参数**。

例如，以下命令会在容器启动时运行 `/bin/echo` 命令并输出 `Hello World`：

```shell
CMD ["/bin/echo", "Hello World"]
```

2. `CMD ["param1","param2"]` (`as default parameters to ENTRYPOINT`)

**在容器启动时运行 `ENTRYPOINT` 指令指定的可执行文件，并将 `CMD` 指令的参数作为参数传递给 `ENTRYPOINT` 指令指定的可执行文件**。

例如，以下命令会在容器启动时运行 `/bin/echo` 命令并输出 `Hello World`：

```shell
ENTRYPOINT ["/bin/echo"]

CMD ["Hello World"]
```

3. `CMD command param1 param2` (`shell` 形式)

**在容器启动时运行指定的命令**。

例如，以下命令会在容器启动时运行 `/bin/echo` 命令并输出 `Hello World`：

```shell
CMD echo Hello World
```

如果在运行 `Docker` 容器时使用了自定义命令，则 `CMD` 中指定的默认命令会被覆盖。

例如，如果 `Dockerfile` 中定义了如下 `CMD` 指令：

```shell
CMD ["/bin/echo", "Hello World"]
```

当运行容器时，使用了自定义命令：

```shell
docker run -it myimage /bin/bash
```

则容器启动时会运行 `/bin/bash` 命令，而不是 `CMD` 指令中定义的 `/bin/echo` 命令。

:::tip
每个 `Dockerfile` 只能有一个 `CMD` 指令。如果有多个，只有最后一个指令会被执行。

同理，使用 `docker run` 命令时，如果指定了多个命令，则只有最后一个命令会被执行，其他命令都会被忽略。
:::

譬如，以下命令：

```shell
docker run myimage /bin/bash -c "echo Hello" /bin/echo "World"
```

只会执行最后一个命令 `/bin/echo "World"`，而前面的 `/bin/bash -c "echo Hello"` 命令会被忽略。

### ARG

`ARG` 指令用于**设置构建镜像时传递给 `Dockerfile` 的参数**。

```shell
ARG <name>[=<default value>]
```

`ARG` 指令的参数是一个变量名，可以在 `Dockerfile` 中使用 `$<name>` 的形式来引用这个变量。

`ARG` 指令的参数还可以指定一个默认值，如果在构建镜像时没有指定该参数的值，则会使用默认值。

```shell
ARG VERSION=latest
FROM ubuntu:$VERSION
```

## 开发环境构建

以一个 `Vue` 单页面应用在开发环境下的构建为例。

首先安装 `vue-cli`，然后执行 `vue create` 命令创建一个 `Vue` 单页面应用：

```shell
npm install -g @vue/cli

vue create vue-demo
```

在项目根目录下，创建一个对应为开发环境的 `Dockerfile` 文件，譬如名为 `Dockerfile.dev`：

```yml
# 基础镜像选择node 如果选择alpine等操作系统的话 需要手动RUN指令安装node
FROM node:16

# 指令容器上的工作目录 docker会自动创建
WORKDIR /app

# 拷贝本地所有代码 这样的话 即使不使用volume挂载启动，也能正常启动项目
COPY . .

# 使用Yarn替代NPM node:16镜像上好像已经全局安装了yarn 如果没有的话 需要执行RUN npm install -g yarn安装yarn
RUN yarn install

# vue-cli项目默认的端口是8080 此处就暴露该端口
EXPOSE 8080

# 容器启动后默认执行的命令
CMD ["yarn", "start"]

# 构建镜像
# docker image build -f Dockerfile.env -t vue-dev .

# 普通启动
# docker run -p 8084:8080 -d --name vue-server vue-dev

# 挂载启动 因为涉及到挂载 启动相对会耗时一些
# docker run -p 8085:8080 -d --name vue-hot-server -v $PWD:/app vue-dev
# 该形式会实现vue项目在开发环境下的热重载，注意是热重载，而不是热更新。
# 热重载：修改代码后，浏览器会自动刷新，但是会丢失当前页面的状态。
# 热更新：修改代码后，浏览器不会刷新，但是会保留当前页面的状态。

```
### 构建镜像

使用 `Dockerfile.dev` 文件构建一个名为 `vue-dev` 的镜像：

```shell
docker image build -f Dockerfile.dev -t vue-dev .
```

### 启动容器

利用 `vue-dev` 镜像启动一个名为 `vue-server` 且后台运行的容器：

```shell
docker run -p 8084:8080 -d --name vue-server vue-dev
```

然后就可以在 `http://localhost:8084` 访问到 `Vue` 单页面应用了。

如果想要更改本地代码，即时反应到容器中的话，可以使用 `volume` 即 `-v` 挂载的方式启动容器：

```shell
docker run -p 8085:8080 -d --name vue-hot-server -v $PWD:/app vue-dev
```

然后就可以在 `http://localhost:8085` 访问到 `Vue` 单页面应用了。

我们将本地的 `vue-demo` 目录挂载到容器的 `/app` 目录下，当更改 `vue-demo` 下的代码，容器内的 `/app` 目录下的代码也会同步修改。

这样就可以实现 `vue` 项目在开发环境下的热重载，**注意是热重载，而不是热更新**。

:::tip
后者 `volume` 挂载启动，由于涉及到数据卷的创建，启动相对会耗时一些。

实际测试时，更改本地代码后，容器内的代码也同步修改了。

但需要手动刷新浏览器，页面内容才发生变化。因此，这种开发环境实现的容器，笔者认为意义并不是很大。
:::

## 生产环境构建

在上文中，我们实现了开发环境下的容器化，接下来我们来实现生产环境下的容器化。

开发环境下的镜像，不单单有 `node` 镜像，甚至将 `node_modules` 也打包进了镜像中，这样的镜像体积会很大。

| REPOSITORY | TAG    | IMAGE ID     | CREATED      | SIZE   |
| ---------- | ------ | ------------ | ------------ | ------ |
| vue-dev    | latest | f7102f91333d | 24 hours ago | 1.29GB |

而在生产环境下，我们其实只需要 `dist` 包，并将其进行 `nginx` 托管即可。

因此，我们首先需要使用 `node` 镜像将项目打包成 `dist`，然后再使用 `nginx` 镜像将 `dist` 进行托管。

这就涉及到了一个概念：**多阶段构建**。

### 多阶段构建

多阶段的含义，就是在一个 `Dockerfile` 文件中，可以定义多个 `FROM` 指令，每个 `FROM` 指令都会产生一个阶段，而每个阶段都可以使用不同的基础镜像。

同样，以上一节中的 `vue-demo` 项目为例，我们在项目根目录下创建一个名为 `Dockerfile.prod` 的文件：

```yml
# 以node为基础镜像 并定义该阶段的别名为web
FROM node:16 as web
# 定义容器上的工作目录
WORKDIR /app
# 拷贝本地所有代码至容器的工作目录/app
COPY . .
# 安装依赖，并执行打包命令，结束后会在容器的/app目录下生成dist目录
RUN yarn install && yarn build

# 拉取nginx镜像
FROM nginx:1.21.1-alpine
# 将web阶段打包生成的/app/dist目录拷贝至nginx容器下的/usr/share/nginx/html目录
COPY --from=web /app/dist /usr/share/nginx/html
# 将自定义的nginx配置文件拷贝至nginx容器下的/etc/nginx/conf.d目录
COPY --from=web /app/nginx/ /etc/nginx/conf.d/
# 暴露80默认端口 以及自定义的9527端口（需要设置对应端口的nginx配置文件）
EXPOSE 80 9527
# 容器启动时，默认启动nginx
CMD ["nginx", "-g", "daemon off;"]
```

额外说明一下，`/app/nginx` 配置文件，其实是放置在 `vue-demo` 根目录下的 `nginx` 目录。

因为我们在 `web` 阶段使用 `COPY . .` 将 `vue-demo` 下的所有文件都拷贝到了容器的 `/app` 目录下。

此处，对应端口 `9527`，可以在 `vue-demo` 下的 `nginx` 目录新建一个 `vue-port-9527.conf`：

```conf
server {
    listen       9527;
    listen  [::]:9527;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        # 处理单页面应用的history路由
        try_files $uri $uri/ /index.html;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

### 构建镜像

使用 `Dockerfile.prod` 构建名为 `vue-prod` 的镜像：

```shell
docker build -f Dockerfile.prod -t vue-prod .
```

然后我们对比一下，`vue-dev` 镜像和 `vue-prod` 镜像的体积：

| REPOSITORY | TAG    | IMAGE ID     | CREATED      | SIZE   |
| ---------- | ------ | ------------ | ------------ | ------ |
| vue-dev    | latest | f7102f91333d | 24 hours ago | 1.29GB |
| vue-prod   | latest | 7ccd7d0e5200 | 21 hours ago | 23.6MB |

### 启动容器

利用 `vue-prod` 镜像创建一个名为 `vue-prod` 的容器，并将容器的 `9527` 端口映射到本地的 `9527` 端口：

```shell
docker run -d -p 9527:9527 --name vue-prod vue-prod
```
