---
title: Cookie
---

`http` 协议本身是**无状态**的。

也就是说客户端每次与服务端的通信都是独立的。对于服务端来说，没法辨别两次请求是否来自同一客户端。

在此背景下，`Cookie` 得以实现应用，主要是为了帮助服务端识别标记客户端。

在我以前学习 `PHP` 的时候，可以将信息存储到 `Session`，然后将对应的 `Cookie` 返回给客户端，客户端下次请求的时候，会携带 `Cookie`。

然后根据服务端根据此 `Cookie` 在 `Session` 中获取对应信息，并实现对应的响应。

:::tip
版本声明：

由于 `Cookie` 的策略可能在不断变化，所以提前声明本文所依赖的浏览器及其版本。

- `Chrome107`
- `Firefox106` 
:::

## 1. 设置与访问

`Cookie` 的设置有两种方式：

1. 服务端可通过响应头 `Set-Cookie`，譬如：
  ```shell
  Set-Cookie: __cdnuid_s=72541f23eea9f83c9150210d91402153; Max-Age=31536000; Path=/; HttpOnly; SameSite=None; Secure
  ``` 
2. 客户端可通过 `document.cookie` 来设置或访问本地的 `cookie`。

:::tip
**上述二者设置 `Cookie` 的方式，均不能跨站设置**。

即不能在 `a.com` 将 `Cookie` 设置到 `b.com`。

在 `chrome` 下，违规响应头会有如下警告：

`This attempt to set a cookie via a Set-Cookie header was blocked because its Domain attribute was invalid with regards to the current host url`
:::

### 1-1. 设置 `Cookie`

`document.cookie` 与 `Set-Cookie` 的设置形式是一样的：

```js
document.cookie = 'key=value; Domain=example.com; Path=/; Secure; SameSite=No'
```
    
对 `Cookie` 的写入操作只会更新其中提到的 `Cookie`，而不会涉及其他 `Cookie`。

```js
document.cookie = 'name=Tom'
document.cookie = 'animal=cat'

// 只更新name 不会影响animal
document.cookie = 'name=Jerry'
```

从技术上讲，`Cookie` 的名称和值可以是任何字符。为了保持有效的格式，它们应该使用内建的 `encodeURIComponent` 函数对其进行转义：

```js
document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
```

:::tip
`Cookie` 的设置存在一些限制：

1. `encodeURIComponent` 编码后的 `name=value` 对，大小不能超过 `4KB`。因此，我们不能在一个 `cookie` 中保存大的东西。
2. 每个域的 `Cookie` 总数不得超过 `20+` 左右，具体限制取决于浏览器。
:::

### 1-2.访问 `Cookie`
    
在客户端可以利用 `document.cookie` 来访问当前域下的**可访问** `Cookie`（不能访问到设置了 `HttpOnly` 的 `Cookie`）。

```js
console.log(document.cookie)
```

打印结果大致如下：

```shell
Hm_lvt_85612832da94810be7e7f25c9d1ecd84=1666087833; Hm_lvt_b6885b39f1df5cfd714b89cd75461cf1=1666087833; Hm_lpvt_85612832da94810be7e7f25c9d1ecd84=1666101769; Hm_lpvt_b6885b39f1df5cfd714b89cd75461cf1=1666101769
```
    
可以发现，客户端获取的形式，是以冒号和空格 `; ` 分割，`key=value` 组合而成的字符串:

```shell
key=value; key=value; key=value
```

## 2.可定义选项

`Cookie` 的相关属性，除了上一节中的 `name` 和 `value`，还可以设置以下选项。

### 2-1. Domain

默认值为当前 `Domain`。

标明 `Cookie` 起作用的域。

如果成功设置的话，会在浏览器器控制台中的 `Cookies` 下的对应域能检索到。

**一般情况下，`Cookie` 不能跨域设置。**

譬如无法在 `site.com` 上将 `Cookie` 的 `Domain` 设置为 `other.com`。

甚至不能在 `one.site.com` 上设置 `two.site.com` 的 `Cookie`。

但有一种特殊情况：

在设置 `Domain=site.com` 时，浏览器实际会将 `Domain` 设置为 `.site.com`。

那么所有的子级域名（譬如 `sub.site.com`），都是可以访问该 `Cookie` 的。

如果想要将 `Domain` 设置成全等的 `site.com` 而不是 `.site.com`，那么忽略设置 `Domain` 项即可。

浏览器会自动根据所在域以设置 `Domain`。譬如：

```js
document.cookie='name=Jerry; Path=/'
```

### 2-2. Path

默认值为**根路径** `/`。

决定 `Cookie` 在控制台能不能被看到，有两个条件：

- 其一是上面说的 `Domain`；
- 其二就是本节的 `Path`。

譬如有两种 `Cookie` 设置，一是 `Path=/`，另一是 `Path=/query`。

那么在 `site.com` 下只能看到 `Path=/` 的 `Cookie`。

在 `site.com/query`下则能看到 `Path=/` 以及 `Path=/query` 的 `Cookie`。

`Cookie`会在请求发生时，由浏览器自动添加到请求头里。

那么添加的准则是，**能访问到这些 `Cookie` 的请求都会自动添加这些 `Cookie`，无论是 `GET` 或 `POST` 请求**。譬如：

- `https://site.com` 只能携带 `Path=/` 的 `Cookie`；
- `https://site.com/query` 能携带 `Path=/` 和 `Path=/query` 的 `Cookie`；
- `https://site.com/query/user` 能携带 `Path=/` 和 `Path=/query` 的 `Cookie`；
- `https://site.com/add` 能携带 `Path=/` 的 `Cookie`，但不能携带 `Path=/query` 的 `Cookie`。
  
如果对于某请求，并不确认会携带哪些 `Cookie`，那么直接将 `URL` 粘贴到浏览器地址栏访问，并查看 `Application` （`Chrome` 浏览器）中的 `Cookies`即可。

**它实际上代表的既是本地存储的 `Cookie`，也代表请求发送时会携带的 `Cookie`**。

:::tip
发起请求时，携带的 `Cookie` 是目标域能访问的 `Cookie`，而不是本地域能访问的 `Cookie`。

即使跨域，也是这样的准则。另外跨域设置 `withCredentials` 为 `true`，并不是很好使，有兼容性问题，具体原因需要根据场景进行分析。

譬如：目标域 `https://site.com`，本地域 `https://other.com`

那么本地域在访问目标域时，如果能够携带`Cookie`，那么携带的是 `https://site.com` 能访问的 `Cookie`。
:::

### 2-3.Expires/Max-Age

默认值为 `Session`。

如果一个 `Cookie` 没有设置 `Expires/Max-Age` 这两个参数中的任何一个，那么在关闭浏览器之后，它就会消失。此类 `Cookie` 被称为 `Session Cookie`。

为了让 `Cookie` 在浏览器关闭后仍然存在，我们可以设置 `Expires` 或 `Max-Age` 选项中的一个。

`Expires` 设置的日期必须完全采用 GMT 时区的这种格式。我们可以使用 `date.toUTCString` 来获取它。

:::tip
如果我们将 `Expires` 设置为过去的时间，则 `Cookie` 会被删除。
:::

例如，我们可以将 `Cookie` 设置为 `1` 天后过期:

```js
// 1天之后过期
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;
```

`Max-Age` 是 `Expires` 的替代选项，指明了 `Cookie` 的过期时间距离当前时间的秒数。

:::tip
如果将其设置为 `0` 或负数，则 `Cookie` 会被删除。
:::

它的使用方式如下：

```js
// cookie 会在一小时后失效
document.cookie = 'user=John; max-age=3600'

// 删除 cookie（让它立即过期）
document.cookie = 'user=John; max-age=0'
```

### 2-4.Size

该选项可以设置 `Cookie` 的大小。

每个 `Cookie` 最大不能超过 `4kb`。

可以参考[stackoverflow](https://stackoverflow.com/questions/52203972/maximum-cookie-size-of-current-browsers-year-2018)。

### 2-5.HttpOnly

该选项表示 `Cookie` 只能在网络服务下访问，不能通过 `JavaScript` 脚本进行访问或者更改。

该选项可以用来禁止 `JavaScritp` 访问 `Cookie`，以防止被篡改。

也就是将不能使用 `document.cookie` 来设置或读取 `Cookie`。

能够提高客户端的 `Cookie` 安全度。

### 2-6.Secure

默认情况下，如果我们在 `http://site.com` 上设置了 `Cookie`，那么该 `Cookie` 也会出现在 `https://site.com` 上，反之亦然。

也就是说，`Cookie` 是基于域的，它们不区分协议。

如果想要限制 `Cookie` 只在 `https` 协议下进行发送，则需设置：

```js
document.cookie = 'user=John; Secure'
```

另外，要注意的是，当设置 `SameSite=None` 时，必须声明 `Secure` 项。

也就是**目前的第三方 `Cookie` 依赖 `https` 协议**。

### 2-7.SameSite

该选项 `SameSite` 可设置为：

1. `Strict`
2. `None`
3. `Lax`

`SameSite` 在低版本浏览器中，默认为 `None`。

但目前为了限制广告推送和信息泄露，目前高版本浏览器已默认设置为 `Lax`。

在现今主流的浏览器下（如 `Firefox`），如果没有设置 `SameSite` 选项，可能会在控制台有如下提示：

```shell
Some cookies are misusing the recommended “SameSite“ attribute

Cookie “Hm_lvt_85612832da94810be7e7f25c9d1ecd84” does not have a proper “SameSite” attribute value. 
Soon, cookies without the “SameSite” attribute or with an invalid value will be treated as “Lax”. 
This means that the cookie will no longer be sent in third-party contexts. 
If your application depends on this cookie being available in such contexts,
please add the “SameSite=None“ attribute to it. 
To know more about the “SameSite“ attribute, read https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite
```

#### 2-7-1.Strict

设置为 `Strict` 时，**跨站场景下**将不携带 `Cookie`。

缺点是过于暴力，某些场景下影响用户体验。譬如 `SSO` 单点登录的业务场景：

假设 `auth.site.com` 是用于登录的服务域名，`pay.site.com` 是付款业务，`receive.site.com` 是收款业务。

此时在 `auth.site.com` 生成的有用户信息的 `Cookie`，必须能在用户访问 `pay.site.com` 和 `receive.site.com` 时自动携带，而设置成 `Strict` 则不能满足业务需要。

#### 2-7-2.None

设置为 `None` 时，无论是否跨站，都携带 `Cookie`。

#### 2-7-2.Lax

设置为 `Lax` 时，将是**宽松模式**。

它指的是大多数情况下采用 `Strict` 策略，特殊情况下采用 `None` 策略。

也就是说该模式默认禁止跨站携带 `Cookie`，但特殊情况下则允许跨站携带 `Cookie`。相当于为 `SSO` 等部分业务场景提供了一个后门。

上述的特殊情况，需满足两个条件：

1. `HTTP` 方法是安全的。在[RFC7231规范](https://www.rfc-editor.org/rfc/rfc7231#section-4.2.1)中，`GET`、`HEAD`、`OPTIONS`、`TRACE`，这几种方法都是读取数据，而不是更改数据。
   
2. 该操作执行顶级导航（更改浏览器地址栏中的 `URL`），防止利用伪造 `form` 表单而发起请求的 `XSRF`。

### 2-8.SameParty :hourglass_flowing_sand:

该选项，是 `Chrome` 浏览器下特有的选项。

首先要明确的一点是，`SameSite` 设置为 `None` 时，依然存在 `XSRF` 风险。

`SameParty` 选项是 `Chrome` 浏览器的一种新解决方案。目标是取代 `SameSite`，同时也能更好的防范 `XSRF` 攻击。

并且相对设置 `SameSite=Strict` ，`SameParty` 的架构设计显得更加清晰、优雅。

同样，这里有单点登录的网站：

- `auth.site.com`
- `pay.site.com`
- `receive.site.com`

用到 `First-Party Sets` 策略的域名需要把一个 `JSON` 配置托管在 `/.well-known/first-party-set` 路由下。

在 `SameParty` 的架构，需要这样设计：

`auth.site.com` 需要在 `auth.site.com/.well-known/first-party-set` 路由下添加：

```json
{
  "owner": "auth.site.com",
  "version": 1,
  "members": ["pay.site.com", "receive.site.com"]
}
```

对应的，`pay.site.com` 和 `receive.site.com` 分别需要添加：

```json
{
  "owner": "pay.site.com"
}
```

```json
{
  "owner": "receive.site.com"
}
```

参考文章：

- [sameparty](https://github.com/cfredric/sameparty)
- [详解 Cookie 新增的 SameParty 属性](https://juejin.cn/post/7002011181221167118)

### 2-9.Partition Key :hourglass_flowing_sand:

该选项，是 `Chrome` 浏览器下特有的选项。

主要是针对于聊天系统或者`iframe` 嵌入等场景。特点都是**站点内有另一站点**。譬如:

1. `green.com`
   - `iframe` 引入 `red.com`
2. `blue.com`
   - `iframe` 引入 `red.com`

如果在访问 `green.com` 时，`red.com` 设置了本域的 `cookie`，那么在访问 `blue.com` 时，其中的 `red.com` 也会携带其他域下设置的 `cookie`。

很明显，这不利于隐私保护。

为此，提出了 `Cookie Having Independent Partitioned State`

即[CHIPS](https://github.com/privacycg/CHIPS)

意思是，`Cookie` 有了分区的概念。

### 2-10.Priority :hourglass_flowing_sand:

该选项，是 `Chrome` 浏览器下特有的选项。

每个域名下的 `Cookie` 最大数量是有限制的。

`Priority` 选项是开发人员在达到浏览器客户端限制时更好地管理 `Cookie` 寿命的一种方法。

当浏览器的 `Cookie` 上限达到时，会根据[权重及其他配置](https://stackoverflow.com/questions/19792038/what-does-priority-high-mean-in-the-set-cookie-header)，清理部分 `Cookie`。

## 3. `Cookie` 的分类

`Cookie` 可以分为第一方 `Cookie` 与第三方 `Cookie`。

### 3-1. 第一方 `Cookie`

第一方 `Cookie` 指代的是 **当前访问路径与 `Domain` 选项属于同一域下**。

譬如有一个网站 `auth.site.com`，设置了这两种 `Cookie`：

```js
document.cookie = 'name=Jack; Domain=auth.site.com; Path=/; SameSite=Lax'

document.cookie = 'age=19; Domain=site.com; Path=/; SameSite=Lax'
```

如果我们直接访问 `auth.site.com`，那么上述这两种 `Cookie` 都属于第一方 `Cookie`。

### 3-2. 第三方 `Cookie`

第三方 `Cookie` 指代的是 **当前访问路径与 `Domain` 选项不属于同一域下**。

同样譬如有一个网站 `auth.site.com`，设置了 `Cookie`：

```js
document.cookie = 'name=Jack; Domain=auth.site.com; Path=/; SameSite=Lax'

document.cookie = 'age=19; Domain=site.com; Path=/; SameSite=Lax'
```

那么当我们在 `example.com` 上访问 `auth.site.com` 的服务时，上述这种 `Cookie` 就属于第三方 `Cookie`。

## 4.Cookie的埋点应用

`Cookie` 可以应用于埋点统计，这种形式主要利用的是第三方 `Cookie`。

本章，我们以百度统计为例，在引用了百度统计的页面，可以观察到有如下 `Cookie`：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/20221031214530.png)

其中，可以看出 `Hm_lpvt_85612832da94810be7e7f25c9d1ecd84` 和 `Hm_lvt_85612832da94810be7e7f25c9d1ecd84` 是第一方 `cookie`。

`HMACCOUNT_BFESS` 则是第三方 `cookie`。

在百度统计的源码中，前两者 `cookie` 是直接使用 `document.cookie` 来设置的：

```js
// 百度统计sdk中的源码
mt.cookie.set = function(f, a, b) {
  var e;
  b.D && (e = new Date,
  e.setTime(e.getTime() + b.D));
  document.cookie = f + "=" + a + (b.domain ? "; domain=" + b.domain : "") + (b.path ? "; path=" + b.path : "") + (e ? "; expires=" + e.toGMTString() : "") + (b.ec ? "; secure" : "")
}
```

这里我们使用 `Object.defineProperty` 监听百度统计调用 `document.cookie` 的场景：

```js
Object.defineProperty(document, 'cookie', {
  set (v) {
    console.log('set', v)
  }
})
```

但最终发现，控制台只打印了 `Hm_lpvt_85612832da94810be7e7f25c9d1ecd84` 和 `Hm_lvt_85612832da94810be7e7f25c9d1ecd84` 等第一方 `Cookie`。

在 `Chrome` 或者 `Firefox` 的控制台，响应头中也并没有 `Set-Cookie`。

经过笔者的测试，利用 `document.cookie` 设置跨站 `Cookie`，浏览器会自动忽略的。譬如：

```js
document.cookie = 'hm=test_cookie; Domain=test.jsgoshu.cn; Path=/; Expires=2023-11-30T13:44:51.869Z; Secure; SameSite=None'
```

最终利用 `charles` 抓包，才发现百度统计的响应头 `Set-Cookie` 确实设置了第三个 `Cookie`：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/20221101121424.png)

## 5.XSRF攻击及防范

`XSRF` 的全称是 `Cross Site Request Forgery`，也可简写成 `CSRF`，即**跨站请求伪造**。

**攻击原理是，伪造请求，自动携带 `Cookie` 到服务端，以攻击交易**。

### 5-1. `XSRF` 如何攻击

譬如有一个购物网站 `shop.com`，会在用户访问时，设置客户端 `Cookie`:

```js
document.cookie = 'ga=lp_85612832da94810be7e7f25c9d1ecd84; Path=/; Expires=Tue, 01 Nov 2022 09:04:59 GMT'
```

设置之后，用户在访问 `shop.com` 的服务时，浏览器会自动携带此 `Cookie` 至服务端，以供服务端识别用户身份。

假如此时有不怀好意之人，创建了 `evil.com`，并在网站中内置 `form`：

```html
<form action="https://shop.com/pay" method="POST">
  <button type="submit">领取优惠</button>
</form>
```

然后他可以使用发送一个看起来人畜无害的邮件，引导用户点击。

当用户点击之后，客户端的身份信息 `Cookie` 即 `ga` 会发送到 `shop.com/pay`，进而完成支付。

### 5-2. `XSRF` 如何防范

解决 `XSRF` 常见的方式有三种：

- `SameSite` 属性
- `XSRF Token`
- `JWT`

#### 5-2-1. `SameSite=Lax`

浏览器在旧版本中 `SameSite` 选项默认是 `None`，也就是跨站情况下，也会携带 `Cookie`。

后来为了限制第三方 `Cookie` 的泛滥，`SameSite` 的默认值修改为了 `Lax`。

`SameSite=Lax` 的 `Cookie` 发送需要两个条件：

1. `HTTP` 方法必须是安全的，即 `GET`、`HEAD`、`OPTIONS`、`TRACE`
2. 该操作执行顶级导航（更改浏览器地址栏中的 `URL`），防止利用伪造 `form` 表单而发起请求的`XSRF`。

但要注意的是，**旧版本浏览器不支持设置 `Lax`**，所以为了兼容，需要额外考虑一下 `XSRF Token` 和 `JWT` 手段。

#### 5-2-2. `XSRF Token`

`XSRF Token` 指的是，服务端利用一些加密方式生成 `Token`，然后客户端发起交易时，除了验证一般的 `Cookie`，还要验证该 `Token`。

该部分对于 `Token` 传输方式的不同，有两种常见方式：

第一种是前后端不分离的项目，服务端利用一些加密方式生成 `Token`，另外该 `Token` 不要暴露出来，在 `form` 中可以利用 `hidden` 传输到服务端。

另一种是前后端分离的项目，服务端利用一些加密方式生成 `Token`，然后通过 `Set-Cookie` 返回给客户端，然后客户端在发起交易时，读取对应 `Cookie`，并设置到请求头 `headers` 中。

`axios` 的防 `XSRF` 攻击采用的就是该方式，也有文章称该方式为**双重 `Cookie` 防御**：

```js
// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if (platform.isStandardBrowserEnv) {
  // Add xsrf header
  const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
    && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
  console.warn({ xsrfValue }, cookies.read(config.xsrfCookieName));
  if (xsrfValue) {
    requestHeaders.set(config.xsrfHeaderName, xsrfValue);
  }
}
```

更多内容可参考文章：

- [XSRF Token](https://brightsec.com/blog/csrf-token/)
- [Axios中的XSRF防范](https://www.51cto.com/article/629737.html)

#### 5-2-3. `JWT`

即 [Json Web Token](https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

如今前后端分离项目下，最常见的架构方式。

用户在登录之后，接口返回 `Token`，前端在交互过程中，将 `Token` 设置在请求头 `Headers` 中，并携带给服务端。

`Token` 具有时效性，校验过期的话，会通知前端，进而做出相应处理。

## 6.GDPR

`GDPR` 即 `General Data Protect Regulation`。

可以称作[通用数据保护条例](https://zh.wikipedia.org/zh-cn/%E6%AD%90%E7%9B%9F%E4%B8%80%E8%88%AC%E8%B3%87%E6%96%99%E4%BF%9D%E8%AD%B7%E8%A6%8F%E7%AF%84)

如果网站涉及到 `Cookie`，且在国外有业务活动，那就不得不关注一下欧盟制定的 `GDPR`。

它在很大程度是为了[保护用户隐私](https://cloud.tencent.com/developer/news/578423)，防止 `Cookie` 被滥用。

对于开发人员来讲，可以在网站上，添加该站使用 `Cookie`的用户提醒：

- 您的隐私

当您访问任何网站时，网站都会存储或检索您浏览器上的信息，该过程多以 `Cookie` 形式进行。此类信息可能涉及您的个人信息、偏好或设备，并且主要用于使网站按照您的预期提供服务。此类信息通常不会直接识别您的个人信息，但可以为您提供更加个性化的网络体验。我们充分尊重您的隐私权，因此您可以选择不允许使用某些类型的 `Cookie`。您只需点击不同的 `Cookie` 类别名称，即可了解更多信息和更改默认设置。但是，阻止某些类型的 `Cookie` 可能会影响您的网站使用体验，以及我们能够为您提供的服务。

1. 必要类 `Cookie`

此类 `Cookie` 是网站正常运行所必需的，无法在我们的系统中关闭。通常，它们只针对您所做的操作进行设置，这些操作相当于服务请求，例如设置您的隐私首选项、登录或填充表单。您可以设置浏览器阻止或向您提醒此类 `Cookie`，但是网站的某些功能将无法使用。此类 `Cookie` 不会存储任何个人身份信息。

2. 性能类 `Cookie`

通过此类 `Cookie`，我们可以统计网站访问量和流量来源，以便评估和改进我们网站的性能。此类 `Cookie` 还可以帮助我们了解页面的受欢迎程度，以及访问者在网站上的活动情况。此类 `Cookie` 收集的所有信息都将进行聚合处理，确保信息的匿名性。如果您不允许使用此类 `Cookie`，我们将无从了解您何时访问了我们的网站，而且也无法监控网站性能。

3. 针对性 `Cookie`

此类 `Cookie` 可能是由我们的广告合作伙伴通过我们的网站设置的，还可能会被这些公司用来针对您关注的内容建立档案，并在其他网站上向您展示相关广告。此类 `Cookie` 不直接存储个人信息，但会使用一些用于唯一识别您的浏览器和互联网设备的信息。如果您不允许使用此类 `Cookie`，您看到的广告会比较缺乏针对性。
