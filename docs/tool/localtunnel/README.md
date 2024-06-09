---
title: Localtunnel
---

利用 [localtunnel](https://github.com/localtunnel/localtunnel) 实现**内网穿透**。

假设在内网下启动了项目 `http://localhost:8080/blog`。

## 1.启动端口服务

1. 全局安装 `npm install -g localtunnel`，然后执行 `lt --port 8080`

2. 或者 `npx localtunnel --port 8080`

## 2.内网访问

上述语句执行之后，命令行会提示 `your url is: https://wise-impalas-glow.loca.lt`。

该 `https://wise-impalas-glow.loca.lt` 为中转页，需要录入**访问密码**。

访问 `https://loca.lt/mytunnelpassword` 页面获取**访问密码**，在 `https://wise-impalas-glow.loca.lt` 页面录入后，即可访问。

:::tip
记得关闭 `VPN`，否则 `IP` 错误可能会导致密码录入错误。
:::
