---
title: 前端网络安全
---

## 1.XSS

[前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)

`XSS` 的全称为 `Cross Site Scripting`，即**跨站脚本攻击**。

根据具体方式，可以分为三类：

1. 存储型
2. 反射型
3. DOM型

以上三种方式的区别，主要在于**攻击脚本的触发场景和执行时机**。

### 1-1.存储型

**存储型**意为，攻击脚本被提交存储到数据库，后端程序直接将数据库数据渲染到页面上，进而造成脚本执行。

具体步骤大致如下：

1. 攻击者将恶意代码提交到目标网站的数据库中。
2. 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

存储型 `XSS` 常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。

:::tip
关于如何解决，我们能直观的想到，应该在数据提交到数据库前，进行数据转义或过滤（**输入过滤**）。

但这种方式有缺陷，可能也会影响到用户提交的正常数据。
:::

### 1-2.反射型

**反射型**意为，攻击脚本携带在 `URL` 中，`URL` 中的参数被解析后，后端程序不作处理直接渲染到页面上，造成脚本执行。

具体步骤大致如下：

1. 攻击者构造出特殊的 `URL`，其中包含恶意代码。
2. 用户打开带有恶意代码的 `URL` 时，网站服务端将恶意代码从 `URL` 中取出，拼接在 `HTML` 中返回给浏览器。
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作

反射型 `XSS` 常见于通过 `URL` 传递参数的功能，如网站搜索、跳转等。

### 1-3.DOM型

**DOM型**意为，`JavaScript` 在客户端，直接信任用户输入数据，且作为 `innerHTML` 方式渲染。

具体步骤大致如下：

1. 攻击者构造出特殊的 `URL`，其中包含恶意代码。
2. 用户打开带有恶意代码的 `URL`。
3. 用户浏览器接收到响应后解析执行，前端 `JavaScript` 取出 `URL` 中的恶意代码并执行。
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

### 1-4.如何防范

其实，存储型和反射型攻击，与后端联系更为紧密。而 `DOM` 型攻击则是前端领域。

关于防范 `XSS` 攻击，其实是两条思路：

1. 输入过滤
2. 输出过滤

但如上文所说，**输入过滤**的方案实行起来有缺陷，如果真要按照这种方案来实现，整个方案设计也一定很复杂。

因此，我们**在实际业务中不考虑输入过滤**。

那么唯一剩下的方案只有**输出过滤**：

核心规则只有一条，即**不要将不可信的内容，利用 `innerHTML` 方式渲染到页面上**。

无论你在业务开发中，使用原生 `JavaScript` 或者 `HTML`模板，又或是 `vue/react` 框架，都需要遵守上述规则。

## 2.CSRF

[前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

### 2-1.CSRF原理及特点

`CSRF` 的原理就是**利用 `Cookie` 的自动传输机制**。整体特点如下：

1. `CSRF`（通常）发生在第三方域名。
2. `CSRF` 攻击者不能获取到 `Cookie` 等信息，只是利用 `Cookie` 的自动传输。

针对以上两点，有以下解决方式：

1. 阻止不明外域的访问
  - 同源检测
  - `Samesite Cookie`
  
2. 提交时要求附加本域才能获取的信息
  - `CSRF Token`
  - 双重 `Cookie` 验证

3. 目前业务中常用的 `JWT`。

以上后四种方式的讲解可以参考[Cookie](./cookie.html)章节。

## 3.DDoS

[什么是 DDoS 攻击——Cloudflare](https://www.cloudflare.com/zh-cn/learning/ddos/what-is-a-ddos-attack/)

[基于 JavaScript 的 DDoS](https://blog.cloudflare.com/an-introduction-to-javascript-based-ddos/)

[前端安全之 DDoS](https://github.com/zhazhanitian/weekly/blob/main/learning/%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8%E7%AC%AC%E4%B8%89%E6%9C%9F.md)

`DDoS` 攻击包括很多方面。常见的 `DDoS` 攻击包括以下几类：

1. **网络层攻击**

比较典型的攻击类型是 `UDP` 反射攻击，例如 `NTP Flood` 攻击。这类攻击主要利用大流量拥塞被攻击者的网络带宽，导致被攻击者的业务无法正常响应客户访问。

2. **传输层攻击**

比较典型的攻击类型包括 `SYN Flood` 攻击、连接数攻击等。这类攻击通过占用服务器的连接池资源从而达到拒绝服务的目的。

3. **会话层攻击**

比较典型的攻击类型是 `SSL` 连接攻击。这类攻击占用服务器的 `SSL` 会话资源从而达到拒绝服务的目的。

4. **应用层攻击**

比较典型的攻击类型包括 `DNS flood` 攻击、`HTTP flood` 攻击（即 `CC` 攻击）、游戏假人攻击等。这类攻击占用服务器的应用处理资源，消耗服务器计算资源，从而达到拒绝服务的目的。

本节详细分析记录下和前端联系较为紧密的**应用层攻击**。

### 3-1.JavaScript攻击

假设我们在 `hacker.com` 运行如下脚本：

```js
function imgflood() {
  var TARGET = 'victim.com'
  var URI = '/index.php?'
  var pic = new Image()
  var rand = Math.floor(Math.random() * 1000)
  pic.src = 'http://'+TARGET+URI+rand+'=val'
}
setInterval(imgflood, 10)
```

那么上述脚本就会对 `victim.com` 发起大量的 `HTTP` 请求，进而造成 `victim.com` 的响应堵塞。

这种方式的优点在于实现起来很简便。但缺点是在业务实际中 `hacker.com` 类似的攻击网站的**访问量很小**（几乎没有什么门户网站会把这种脚本放到自己的代码中，相当于让品牌自取灭亡），并不能造成很大的并发量。

因此，事实上使用这种方式以达到大规模 `DDoS` 攻击的效果，运行成本会很高。

### 3-2.服务器劫持

在业务开发中，我们通常会依赖 `CDN` 资源。

但假设有黑客篡改了该 `CDN` 上的对应资源，添加了 `DDoS` 代码，那所有的依赖网站，都将注入攻击脚本。

这种形式的攻击通常称作，**服务器劫持**。

为了防护该攻击，浏览器提供了[子资源完整性](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)校验。

因此，当我们使用 `JQuery` 时，可以这样引入：

```js
<script
  src="https://code.jquery.com/jquery-1.10.2.min.js"
  integrity="sha256-C6CB9UYIS9UJeqinPHWTHVqh/E1uhG5Twh+Y5qFQmYg="
  crossorigin="anonymous">
</script>
```

### 3-3.中间人攻击

中间人攻击，全称为 `Man-in-the-middle Attack`。

网络在通信过程中，是依赖于各个网络节点的。

譬如当你在家里访问网站，网络首先是传输到单元楼的节点，然后单元楼再中转到小区，小区再中转到街道，街道中转到 `4G` 提供商，然后根据你访问的网站地址，继续中转，直到服务提供商。（该论述是模拟，实际情况可能有出入）

那么在信息返回时，在以上的任一节点进行拦截，注入 `DDos` 脚本，那么此时该网站的所有访问者都将变为 `DDoS` 参与者。

该攻击的防护方式，就是要使用 `HTTPS`，浏览器和 `Web` 服务器之间的所有通信都经过加密和身份验证，防止中间方对其进行修改。

[中间人攻击原理与实践](https://segmentfault.com/a/1190000041047662)

## 4.页面劫持

### 4-1.DNS劫持

`DNS` 劫持通常是指攻击者劫持了 `DNS` 服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致用户对该域名地址的访问由原 `IP` 地址转入到修改后的指定 `IP` 地址的现象。

其结果就是让正确的网址不能解析或被解析指向另一网站 `IP`，实现获取用户资料或者破坏原有网站正常服务的目的。

`DNS` 劫持一般通过篡改 `DNS` 服务器上的域名解析记录，来返回给用户一个错误的 `DNS` 查询结果实现。

该劫持的防护方式，一般都是，联系 `DNS` 服务提供商处理。

### 4-2.HTTP劫持

`HTTP` 劫持是指，在用户浏览器与访问的目的服务器之间所建立的网络数据传输通道中从网关或防火墙层上监视特定数据信息，当满足一定的条件时，就会在正常的数据包中插入或修改成为攻击者设计的网络数据包（比如 `js`文件）。

目的是让用户浏览器解释“错误”的数据，或者以弹出新窗口的形式在使用者浏览器界面上展示宣传性广告或者直接显示某块其他的内容。

譬如在某些场合（比如星巴克。访问任何链接，都要事先经过登录）的网络打开百度时：右下角出现广告。

![](https://cloud.tencent.com/developer/article/1500773)

该劫持的防护方式是：

1. 尽量使用可信的公共网络。
2. 使用 `HTPPS` 协议的网络。

### 4-3.点击劫持/iframe劫持

点击劫持是一种视觉欺骗的攻击手段。

攻击者将需要攻击的网站通过 `iframe` 嵌套的方式嵌入自己的网页中，并将 `iframe` 设置为透明，在页面中透出一个按钮诱导用户点击。

从而使得当用户点击时，触发恶意脚本。

该劫持的防护方式是，**利用 `x-frame-options` 响应头设置网站的 `iframe` 嵌套规则**。

## 5.CSP

[Content Security Policy——阮一峰](https://www.ruanyifeng.com/blog/2016/09/csp.html)

`CSP` 全称为 `Content Security Policy`，即**内容安全策略**。

该策略，能够设置资源的加载方式。

通过禁止加载**内联脚本**或**外源脚本**，能够在一定程度上有效防止 `XSS` 攻击。
