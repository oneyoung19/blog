---
title: JWT
---

`JWT` 的全称是 `JSON Web Token`。

[在线生成JWT](https://jwt.io/)

[JSON WEB TOKEN——阮一峰](https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

[虽然JWT规范是无状态，但实际业务中依然要存状态](https://www.zhihu.com/question/300576967/answer/659406256)

## 1.Session

`Session` 的交互模式是，在服务端存储用户信息，并根据用户生成唯一对应的 `sessionID` ，将 `sessionID` 设置到响应头的 `set-cookie`，后续通信则通过客户端传递 `cookie` 进行。

这种模式的缺点有：

1. 用户信息存储在服务端，消耗服务器资源和内存；

2. 由于用户信息存储在数据库，因此不利于分布式部署的拓展。

3. 利用 `cookie` 机制，可能会产生 `CSRF` 攻击。

:::tip
目前的现实业务中，有可能是将 `Session` 与 `Token` 结合的机制。而不是 `Session` 与 `Cookie`。

也就是将 `sessionID` 作为 `Token` 返回给客户端，然后在通信的时候，将 `Token` 设置到请求头中。
:::

## 2.JWT

为了解决上述 `Session` 的第 `1` 和第 `2` 缺点，引入了 `JWT` 规范。

该规范的主要设计目的，就是**将用户信息存储到客户端**。

### 2-1.数据结构

**`JWT` 的数据结构设计为 `Header.Payload.Signature`**。

1. `Header`

表示信息头部。

它通常是一个 `JSON` 对象，描述 `JWT` 的元数据：

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

其中：

- `alg` 表示签名的算法（`algorithm`），默认是 `HMAC SHA256`（写成 `HS256`）；
- `typ`属性表示这个令牌（`token`）的类型（`type`），`JWT` 令牌统一写为 `JWT`。

**定义 `JSON` 对象后，进行 `base64URL` 转码得到 `Header` 字符串**。

2. `Payload`

表示信息负载。

`Payload` 部分也是一个 `JSON` 对象，用来存放实际需要传递的数据。`JWT` 规定了 `7` 个官方字段，供选用：

- `iss (issuer)`：签发人
- `exp (expiration time)`：过期时间
- `sub (subject)`：主题
- `aud (audience)`：受众
- `nbf (Not Before)`：生效时间
- `iat (Issued At)`：签发时间
- `jti (JWT ID)`：编号

当然，除此以外，也可以在 `Payload` 中**添加自定义字段**。

**定义 `JSON` 对象后，进行 `base64URL` 转码得到 `Payload` 字符串**。

:::tip
要注意的是，由于不存在加密，因此 `Payload` 里不要携带用户的敏感信息。
:::

3. `Signature`

表示信息签名。

该签名算法的原理是：

```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

其中，`secret` 表示密钥。**上述算法执行之后，得到 `Signature` 字符串**。

### 2-2.优缺点

**优点**：

1. 有效使用 `JWT`，可以降低服务器查询数据库的次数。
2. 某种程度上有利于分布式系统拓展。

**缺点**：

1. 有可能泄露。（一是 `Token` 没有加密的话，任何人都可以转码获取到具体信息。二是在实际应用中，`Token` 有可能是明文携带在 `URL` 中，相当于直接暴露——相对 `Cookie` 而言）。
2. 在失效时间内，无法二次控制。譬如，实际业务中，要实现不同设备登录同一个账号，要互踢的话，纯 `Token` 的设计无法实现。

即便 `Token` 的特点是**无状态**，但实际业务中，可能依然要结合 `redis` 等实现需求。

因此 `Token` 只是一种规范。单纯使用 `Token` 其实无法彻底满足业务需要。

