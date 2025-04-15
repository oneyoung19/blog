---
title: Tomcat
---

[Tomcat](https://tomcat.apache.org/)是由 `Apache` 软件基金会属下 `Jakarta` 项目开发的`Servlet` 容器，按照 `Sun Microsystems` 提供的技术规范，实现了对 `Servlet` 和 `JavaServer Page（JSP）` 的支持，并提供了作为 `Web` 服务器的一些特有功能，如 `Tomcat` 管理和控制平台、安全局管理和 `Tomcat` 阀等。

由于 `Tomcat` 本身也内含了 `HTTP` 服务器，因此也可以视作单独的 `Web` 服务器。但是，不能将`Tomcat` 和 `Apache HTTP` 服务器混淆，`Apache HTTP` 服务器是用 `C` 语言实现的 `HTTPWeb` 服务器。

## 1.Setup

使用 `sdkman` 安装 `tomcat`:

```shell
sdk install tomcat
```

安装完成后，就可以在 `~/.sdkman/candidates/tomcat/current/` 下找到当前启用版本。

## 2.Community Server Connectors

[Community Server Connectors](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-community-server-connector) 是 `vscode` 的插件，用于在 `vscode` 中使用 `tomcat`。

该插件能够集成 `Tomcat` 等 `servlet` 服务，托管 `war` 包。

1. 启动 `Community Server Connector`；
2. 点击 `Create New Server` 并选择 `Tomcat` 服务目录；
3. 利用 `Community Server Connector` 启动 `Tomcat`；
4. `Add Deployment` 将 `war` 包部署到 `Tomcat`；
5. 后续开发 `Publish Server(Incremental)` 可增量部署到 `Tomcat`。

