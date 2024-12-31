---
title: OAuth2.0
---

[OAuth](https://datatracker.ietf.org/doc/html/rfc6749) 全称是 `Open Authorization`，它是一种授权机制。

数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。

系统从而产生一个短期的进入令牌（`token`），用来代替密码，供第三方应用使用。

`OAuth2.0` 的令牌授权方式分为四种：

1. 授权码（`authorization-code`）
2. 隐藏式（`implicit`）
3. 密码式（`password`）
4. 客户端凭证（`client-credentials`）

## 1.授权码

该模式**适用于那些有后端的 `Web` 应用**。

这种方式是最常用的流程，安全性也最高。

授权码（`authorization-code`）方式，指的是第三方应用先申请一个授权码，然后再用该码获取令牌。

**授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏**。

### 1-1.获取授权码code

譬如有客户端 `a.com` 和授权服务端 `b.com`，那么首先 `A` 网站可通过如下链接获取**授权码**：

```js
`https://b.com/oauth/authorize
  ?response_type=code
  &client_id=${CLIENT_ID}
  &redirect_uri=${REDIRECT_URI}
  &scope=read`
```

### 1-2.链接重定向

在上述获取授权码成功之后，系统会重定向到新链接：

```js
`${REDIRECT_URI}?code=AUTHORIZATION_CODE`
```

### 1-3.获取令牌access_token

在拿到授权码 `code` 之后，就可以在后端，向 `B` 网站请求令牌。

```js
`https://b.com/oauth/token
  ?client_id=${CLIENT_ID}
  &client_secret=${CLIENT_SECRET}
  &grant_type=authorization_code
  &code=${AUTHORIZATION_CODE}`
```

其中，`client_id` 参数和 `client_secret` 参数用来让 `B` 确认 `A` 的身份（`client_secret` 参数是保密的，因此只能在后端发请求）。

上述链接调用之后，大致会返回如下形式的 `JSON` 数据：

```json
{    
  "access_token":"ACCESS_TOKEN",
  "token_type":"bearer",
  "expires_in":2592000,
  "refresh_token":"REFRESH_TOKEN",
  "scope":"read",
  "uid":100101,
  "info":{}
}
```

## 2.隐藏式

该模式**适用于没有后端服务的纯前端应用**。

隐藏式（`implicit`）允许直接向前端颁发令牌。

相对上节，该模式省略了**授权码**这个中间步骤。而是直接获取 `access_token`。

**为了防止令牌泄漏，`access_token` 通常定义到锚点而非 `queryString`**。

第一步，跳转到授权链接：

```js
`https://b.com/oauth/authorize
  ?response_type=token
  &client_id=${CLIENT_ID}
  &redirect_uri=${REDIRECT_URI}
  &scope=read`
```

授权成功后，会直接重定向到：

```js
`${REDIRECT_URI}#token=ACCESS_TOKEN`
```

:::tip
1. 令牌的位置是 `URL` 锚点（`fragment`），而不是查询字符串（`queryString`），这是因为 `OAuth2.0` 允许跳转网址是 `HTTP` 协议，因此存在"中间人攻击"的风险，而浏览器跳转时，锚点不会发到服务器，就减少了泄漏令牌的风险。

2. 这种方式把令牌直接传给前端，是很不安全的。因此，只能用于一些安全要求不高的场景，并且令牌的有效期必须非常短，通常就是会话期间（`session`）有效，浏览器关掉，令牌就失效了。
:::

## 3.密码式

该模式**适用于其他授权模式不便使用，且用户高度信任的应用**。

密码式允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌。

`A` 网站直接请求如下链接，获取令牌：

```js
`https://oauth.b.com/token
  ?grant_type=password
  &username=${USERNAME}
  &password=${PASSWORD}
  &client_id=${CLIENT_ID}`
```

该模式不存在 `REDIRECT_URI`，因此无需发生跳转。

而是会把令牌放到 `JSON` 数据里，作为 `HTTP` 响应。

:::tip
该模式需要用户给出自己的用户名/密码，风险很大，因此在实际业务中不推荐使用。
:::

## 4.客户端凭证

该模式**适用于没有前端的命令行应用，即在命令行下请求令牌**。

第一步，在命令行访问链接：

```js
`https://oauth.b.com/token
  ?grant_type=client_credentials
  &client_id=${CLIENT_ID}
  &client_secret=${CLIENT_SECRET}`
```

验证通过之后，直接返回令牌。

:::tip
这种方式给出的令牌，是针对第三方应用的，而不是针对用户的，即有可能多个用户共享同一个令牌。
:::

## 参考文档

- [OAuth 2.0 的一个简单解释 by 阮一峰](https://www.ruanyifeng.com/blog/2019/04/oauth_design.html)
- [OAuth 2.0 的四种方式 by 阮一峰](https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)
