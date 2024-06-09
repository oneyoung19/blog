---
title: 启动
---

官方文档：[https://www.docker.com](https://www.docker.com/)

推荐阅读：[Docker-从入门到实践](https://yeasy.gitbook.io/docker_practice/)

**本章节 `Docker` 版本为 `20.10.24`**。

## 安装

`macOS` 、 `Windows` 以及 `Linux` 这三种平台的下载有所不同。

**桌面版下载，安装完客户端后，会自动安装 `Docker Engine` 以及 `Docker Compose`**。

- `macOS`: 桌面版下载[https://docs.docker.com/desktop/mac/install](https://docs.docker.com/desktop/mac/install)

- `Windows`: 桌面版下载[https://docs.docker.com/desktop/install/windows-install](https://docs.docker.com/desktop/install/windows-install)

- `Linux`: 桌面版下载[https://docs.docker.com/desktop/install/linux-install/](https://docs.docker.com/desktop/install/linux-install/)

如果是脚本下载，可以参考这个仓库[https://github.com/docker/docker-install](https://github.com/docker/docker-install)

譬如直接使用 `get-docker` 的脚本：

```shell
curl -fsSL https://get.docker.com -o get-docker.sh

sh get-docker.sh
```

## 启动

在 `linux` 机器上，可以使用 `systemctl` 来启动 `docker` 服务。

```shell
# 开机自动启动docker
systemctl enable docker

# 启动docker
systemctl start docker

# 重启dokcer
systemctl restart docker 
```

如果没有安装 `systemctl` 的话，可以使用 `service` 命令替代。

```shell
service docker start
```
