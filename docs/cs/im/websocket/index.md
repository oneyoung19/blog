---
title: Websocket
---

`Websocket` 依赖于 `ws` 协议，而非 `http` 协议。

在建立连接时，首先由客户端发起请求，大概有如下请求头：

```sh
GET /api/websocket
Host: localhost
Origin: http://localhost:8080
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Extensions: permessage-deflate
Sec-WebSocket-Key: CPcdLMSy3wmUpYZmq0OUZA==
Sec-WebSocket-Version: 13
```

其中部分 `header` 头的含义如下：

- `Connection: Upgrade` —— 表示客户端想要更改协议。
- `Upgrade: websocket` —— 请求的协议是 `websocket`。
- `Sec-Websocket-Extensions` —— `Websocket` 拓展，支持数据压缩。
- `Sec-Websocket-Key` —— 浏览器随机生成的安全密钥。
- `Sec-Websocket-Version` —— `Websocket` 协议版本，当前为 `13`。

如果服务器同意切换为 `Websocket` 协议，服务器应该返回响应码 `101`：

```sh
101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-Websocket-Accept: 6KI8x4yb7zRbvjrYKttNMq8yiAg=
```

参考文档：

- [现代教程之Websocket](https://zh.javascript.info/websocket)

第三方库及框架：

- [ws](https://github.com/websockets/ws)
- [socket.io](https://github.com/socketio/socket.io)

:::tip
`ws` 其实相当于 `Websocket` 在 `node` 环境下的 `polyfill` 库。

而 `socket.io` 则能够支持 `client` 和 `server` 端，而且对于其他语言如 `java`、`python` 等，也有对应版本。

整体而言，`socket.io` 的功能更完整，周边生态更好。
:::
