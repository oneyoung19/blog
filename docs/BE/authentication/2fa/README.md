---
title: 2FA
---

`2FA` 全称是 `Two-Factor Authentication`，即**二要素验证**。

它是一种用于提高账户安全性的身份验证方法，要求用户提供两种或更多种不同的身份验证要素，以确认其身份。

它增加了用户和组织的账户安全性，特别是在涉及敏感数据或重要服务的情况下。

`2FA` 工作原理如下：

1. **第一因素**：通常是用户的常规登录凭据，例如用户名和密码。这是用户知道的信息。

2. **第二因素**：通常是用户的物理设备、手机应用程序或生物识别数据（如指纹、面部识别）。这是用户拥有的东西或用户特定的信息。

要成功登录，用户必须提供两种因素中的至少两种。这增加了账户的安全性，因为即使黑客获取了用户的密码（第一因素），他们仍然需要第二因素才能成功登录，而黑客通常不会拥有第二因素。

以下是一些常见的 `2FA` 方法：

- **手机短信验证码**：用户在登录时会收到一条包含验证码的短信，他们需要输入这个验证码作为第二因素。

- **身份验证应用程序**：用户安装一个身份验证应用程序（如`Google Authenticator`、`Authy`、`Microsoft Authenticator`等），该应用程序生成每隔一段时间变化的一次性验证码，用户在登录时输入这个验证码作为第二因素。

- **硬件令牌**：这是一种物理令牌设备，用户必须在登录时插入或按下按钮，以生成一次性验证码。

- **生物识别身份验证**：这包括使用指纹识别、面部识别或虹膜扫描等生物识别数据作为第二因素。

`2FA` 是一种重要的安全措施，可防止大多数基于密码的攻击，如字典攻击、暴力破解和钓鱼。

许多在线服务和平台现在提供 `2FA` 选项，鼓励用户启用它以提高他们的安全性。

以 [`GitHub`](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) 平台为例，设置 `2FA` 需要 `3` 步：

1. 在手机上安装**APP验证程序**，在手机商店中搜索安装即可，笔者在 `iphone` 上使用的是 `Google Authenticator`。

  然后扫码将 `Github` 平台与**APP验证程序**绑定。

  ![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230917180242.png)

2. **下载恢复码并将其备份，方便日后使用**。这是为了保证后续遗失的话，能通过恢复码在 `Github` 平台恢复功能。
   
  ![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230917164728.png)

3. **绑定成功**。

  ![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230917164833.png)

:::tip
截止到 `2023-09-17`, `Github` 平台支持 `2FA` 中的两种方式，`TOTP` **时间型一次性密码**和 `SMS` **短信验证码**。

`TOTP` 的安全性和稳定性，都要高于 `SMS`。因此在实际操作中，推荐使用 `TOTP`。
:::

## 1.TOTP

`TOTP` 的全称是 `Time-Based One-Time Password`，即**时间型一次性密码**。

由于 `TOTP` 基于时间，因此每隔一段时间（通常是 `30` 秒），生成的一次性密码都会发生变化，

`TOTP` 的工作原理如下：

1. 用户在其设备上注册了一个 `TOTP` 令牌，通常是一个移动应用程序（如 `Google Authenticator` 或 `Authy`）中的虚拟令牌；
2. 在注册过程中，服务器和用户的设备会共享一个密钥（密钥是一个秘密值）；
3. 每次需要进行身份验证时，用户设备会生成一个基于当前时间的一次性密码；
4. 用户将这个一次性密码输入到要登录的系统或服务中；
5. 服务器也使用相同的密钥和当前时间来生成一个一次性密码；
6. 服务器会比对用户输入的密码和自己生成的密码，如果匹配成功，用户就可以成功登录。

以[2FA](https://github.com/simontabor/2fa)仓库来说明下代码逻辑：

```js
var tfa = require('2fa')

// 这里的密钥key 即是和每个用户绑定的
tfa.generateKey(32, function(err, key) {
  console.log('key', key)
})
```

假设生成的 `key` 是 `22wgak4gqu122tq9i8yr1ypit5ppy87e`，那么 `30` 秒内，生成的 `code` 值应该是相等的：

```js
var key = '22wgak4gqu122tq9i8yr1ypit5ppy87e'

var tc = Math.floor(Date.now() / 1000 / 30)

var totp = tfa.generateCode(key, tc)

console.log('totp', totp)
```

### 1-1.优点

1. **可以作为软件令牌使用**；

`TOTP` 身份验证器可以嵌入专用硬件令牌中，也可以在软件中实现，通常作为移动应用程序，例如 `Google Authenticator`。

通过在软件（也称为软件令牌）中实施它，可以避免与硬件制造、分销、库存和维护相关的成本。

***能够在某种程度上，替代 `ukey` 等硬件***。

2. **无需互联网连接**；

这可能是 `TOTP` 的最大优势之一。

生成和接受 `TOTP` 代码的设备可以完全离线。

只要两个设备共享相同的密钥并同步，它们就可以单独生成 `TOTP` 代码并相互比较。

3. **跨应用程序和渠道易于使用**。

可以使用 `TOTP` 访问各种类型的应用程序和渠道。

通常，每个应用程序和 `TOTP` 身份验证器之间都会有一个单独的 `TOTP` 代码。

假设使用 `TOTP` 登录 `10` 个不同的系统。那么仍然可以使用单个 `TOTP` 身份验证器，但 `TOTP` 身份验证器将生成 `10` 个不同的代码，每个应用程序一个。

譬如 `Google Authenticator` 可以同时绑定 `Github` 和 `NPM` 的 `2FA`。

### 1-2.缺点

1. **可能被网络钓鱼和窃取**；

`TOTP` 缺乏上下文。您打开身份验证器应用程序，获得一个代码，然后将其放入需要它的系统中。

实时网络钓鱼攻击中，攻击者冒充某个服务网站并请求 `TOTP` 代码，攻击者可以获取该代码，然后立即使用它代表受害者登录该服务。

2. **使用共享密钥**；

使用共享密钥从来都不是一个很好的安全实践。

这意味着服务提供商持有所有客户的所有 `TOTP` 生成器的密钥，如果这些密钥被盗，攻击者可以为用户生成代码。

3. **设备相关**。

`TOTP` 生成器绑定到用户的设备（例如移动设备或硬件令牌）。

如果该设备被盗、丢失或损坏，服务提供商和 `TOTP` 生成器之间的关联就会丢失，并且服务提供商需要为用户重新颁发 `TOTP` 验证器。

此时，服务提供商不能依赖 `TOTP` 生成器来验证用户，并且需要在重新发布生成器之前找到其他方法来验证用户。

## 2.HOTP

`HOTP` 的全称是 `HMAC-Based One-Time Password`，即**事件型一次性密码**。

该方式与 `TOTP` 基本类似，**唯一的区别在于时间和事件的不同**。

`HOTP` 的工作原理如下：

1. 用户在其设备上注册一个 `HOTP` 令牌，通常是一个移动应用程序中的虚拟令牌，或者是硬件令牌。
2. 在注册过程中，服务器和用户的设备会共享一个密钥（密钥是一个秘密值）。
3. 每次需要进行身份验证时，用户设备会生成一个基于一个**计数器**和**共享密钥**的**一次性密码**。
4. 用户将这个一次性密码输入到要登录的系统或服务中。
5. 服务器也使用相同的密钥和其自己的计数器值来生成一个一次性密码。
6. 服务器会比对用户输入的密码和自己生成的密码，如果匹配成功，用户就可以成功登录。

从上面的流程可知，唯一的要点是，**在某事件触发时，生成一个唯一的计数器**。

因此事实上，我们依然**可以利用时间戳来实现这个计数器效果**，毕竟时间戳是永远唯一的。时间逝去永不在。

在[2FA](https://github.com/simontabor/2fa)中，也是一致的实现方式：

```js
var tfa = require('2fa')

// 这里的密钥key 即是和每个用户绑定的
tfa.generateKey(32, function(err, key) {
  console.log('key', key)
})
```

假设生成的 `key` 是 `22wgak4gqu122tq9i8yr1ypit5ppy87e`，那么生成一个计数器：

```js
var key = '22wgak4gqu122tq9i8yr1ypit5ppy87e'

var tc = Date.now()

var hotp = tfa.generateCode(key, tc)

console.log('hotp', hotp)
```

## 友情链接

- [双因素认证（2FA）教程——阮一峰](https://www.ruanyifeng.com/blog/2017/11/2fa-tutorial.html)
- [TOTP与HOTP](https://transmitsecurity.com/blog/totp-the-good-the-bad-and-the-ugly)
