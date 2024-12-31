---
title: 数据安全
---

关于数据安全，笔者认为有三个方向的概念。分别是：

1. 数据脱敏
2. 数据加密
3. 数据签名

**数据脱敏与加密都是为了防破解，数据签名是为了防篡改**。

虽然数据脱敏与加密的实现目的是类似的，但在实际操作中是两个不同的概念。

数据脱敏具有以下特点：

1. **数据脱敏是不可逆的**，一旦数据被脱敏，通常无法还原为原始数据。
2. 数据脱敏方法包括替换、掩盖、截断、模糊等。

而相对应的，数据加密的特点是：

1. **数据加密是可逆的**，只要具有正确的**密钥**，就可以将密文还原为原始明文数据。
2. 数据加密使用算法和密钥来对数据进行数学变换，将其转化为密文。只有持有正确密钥的人可以解密数据。

## 1.数据脱敏

在现实业务中，**实现数据脱敏的方式，大多数是利用 [`Hashing` 哈希算法](/frame/crypto-js/base/2.Hashing.html)**。

譬如，用户在 `web` 页面输入的 `password` 密码，通常是要经过哈希化，才存储到数据库中。

目前，比较常用的哈希算法是 `MD5` 以及 `SHA256`。

### 1-1.MD5

`MD5`（`Message Digest Algorithm 5` 即**信息摘要算法**）是一种广泛用于计算数据摘要（或称哈希值）的密码学散列函数。

它是由计算机科学家 `Ronald Rivest` 于 `1991` 年设计的，用于产生 `128` 位（`16`字节）的固定长度哈希值。

`MD5` 算法的主要特点包括：

1. **固定长度**哈希值：无论输入数据的大小如何，`MD5` 始终生成固定长度的 `128` 位哈希值。

2. **快速计算**：`MD5` 的计算速度相对较快，适用于大多数常见用途，如校验文件完整性。

3. **不可逆**：`MD5`是一种单向函数，即无法从哈希值还原出原始输入数据。这意味着无法通过哈希值逆向推导出原始消息内容。

我们以[crypto-js](https://github.com/brix/crypto-js)中的 `MD5` 算法为例：

```js
const CryptoJS = require('crypto-js')

const text = 'Hello World'

// {
//   words: [ -1324708431, 1692431681, 95922587, -416399387 ],
//   sigBytes: 16
// }
console.log(CryptoJS.MD5(text))

// b10a8db164e0754105b7a99be72e3fe5
console.log(CryptoJS.MD5(text).toString())
```

无论执行多少次，`Hello World` 经过 `MD5` 算法的脱敏，其结果始终是 `b10a8db164e0754105b7a99be72e3fe5`。

:::tip
不建议在安全性要求较高的应用程序中使用 `MD5` 来保护数据的完整性和隐私。因为 `MD5` 已经被证明存在一些严重的安全问题：

1. **碰撞攻击**：`MD5` 算法已经受到碰撞攻击的影响，这意味着攻击者可以找到两个不同的输入，产生相同的 `MD5` 哈希值。这严重破坏了 `MD5` 的完整性和安全性。

2. **预映射攻击**：`MD5` 的预映射攻击使其容易受到暴力破解和彩虹表攻击的影响，因此不再被视为足够安全的哈希算法。

应该使用更强大的哈希算法，如 `SHA256` 或 `SHA3`，并采用适当的**加盐**和**迭代**等安全措施。
:::

### 1-2.SHA256

**`SHA256` 相比 `MD5` 更加安全**。

`SHA256` 属于 `SHA2` 版本中的一员，除此以外，还有 `SHA224`、`SHA384` 以及 `SHA512`。

该类之间的区别只是计算结果的字段长度不同。使用方式如下：

```js
const CryptoJS = require('crypto-js')

const text = 'Hello World'

// {
//   words: [
//     -1517181228,
//     200548416,
//     1241585459,
//     -810045040,
//     -701733441,
//     198026027,
//     1471313881,
//     -1382083474
//   ],
//   sigBytes: 32
// }
console.log(CryptoJS.SHA256(text))

// a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
console.log(CryptoJS.SHA256(text).toString())
```

## 2.数据加密

数据加密，需要使用加密算法。

而**加密算法，最显著的特点就是，需要设置密钥**。

### 2-1.对称加密

对称加密，目前最常用且可靠的算法是 `AES`，即 `Advanced Encryption Standard`。

[`crypto-js` 中的对称加密](/frame/crypto-js/base/5.Ciphers.html)

### 2-2.非对称加密

非对称加密使用一对密钥，即**公钥**和**私钥**，来进行加/解密操作。

- 公钥（`Public Key`）：**公钥是公开的，任何人都可以获得和使用它来加密数据**。公钥通常用于加密要发送给拥有私钥的接收者的数据。

- 私钥（`Private Key`）：**私钥是保密的，只有拥有私钥的人或实体才能使用它来解密使用公钥加密的数据**。私钥必须始终保持机密，只有授权的人可以访问它。

目前非对称加密中，最广泛使用且比较安全的是 `RSA` 算法。

`RSA` 密钥的原理是：***根据数论，寻求两个大素数比较简单，而将它们的乘积进行因式分解却极其困难，因此可以将乘积公开作为加密密钥***。

1. 如果是命令行，可以通过[openssl](https://github.com/openssl/openssl)来生成公钥和私钥。

2. 在实际业务中，服务端可以利用 `java` 生成密钥对：

```java
import java.security.*;

public class GenerateKeyPairExample {
  public static void main(String[] args) {
    try {
      // 使用RSA算法生成密钥对
      KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
      keyPairGenerator.initialize(2048); // 设置密钥长度（一般为2048位）

      // 生成密钥对
      KeyPair keyPair = keyPairGenerator.generateKeyPair();

      // 获取公钥和私钥
      PublicKey publicKey = keyPair.getPublic();
      PrivateKey privateKey = keyPair.getPrivate();

      // 打印公钥和私钥（注意：实际应用中不要直接打印私钥）
      System.out.println("公钥：" + publicKey);
      System.out.println("私钥：" + privateKey);
    } catch (NoSuchAlgorithmException e) {
      e.printStackTrace();
    }
  }
}
```

3. 在浏览器中通过 `JS` 生成密钥对，可以利用 `window.crypto` (**实际业务中不推荐**)：

```js
// 使用 SubtleCrypto API 生成非对称密钥对
async function generateKeyPair() {
  try {
    const keyPair = await window.crypto.subtle.generateKey(
      {
        name: 'RSA-OAEP',
        modulusLength: 2048, // 密钥长度
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 公钥指数
        hash: 'SHA-256', // 哈希算法
      },
      true, // 是否可以导出私钥
      ['encrypt', 'decrypt'] // 用途（这里是加密和解密）
    );

    // 获取公钥和私钥
    const publicKey = await window.crypto.subtle.exportKey('spki', keyPair.publicKey);
    const privateKey = await window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey);

    // 将公钥和私钥转换成可用的字符串或数据格式
    const publicKeyStr = arrayBufferToBase64(publicKey);
    const privateKeyStr = arrayBufferToBase64(privateKey);

    console.log('公钥:', publicKeyStr);
    console.log('私钥:', privateKeyStr);
  } catch (error) {
    console.error('生成密钥对时出错:', error);
  }
}

// 辅助函数：将ArrayBuffer转换为Base64字符串
function arrayBufferToBase64(buffer) {
  const byteArray = new Uint8Array(buffer);
  let binary = '';
  for (const byte of byteArray) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

// 调用生成密钥对函数
generateKeyPair();
```

4. 如果前端想要在具体的业务场景中利用公钥和私钥进行 `RSA` 加解密算法，那么可以使用[jsencrypt](https://github.com/travist/jsencrypt)。

:::tip
[crypto-js](https://github.com/brix/crypto-js) 支持 `AES` 对称加密算法，但并不支持 `RSA` 非对称加密算法。
:::

## 3.数据签名

数据签名是一种用于**确保数据完整性**和**身份验证**的加密技术。

在 `Https` 证书中含有[**数字签名**](https://zh.wikipedia.org/zh-hans/%E6%95%B8%E4%BD%8D%E7%B0%BD%E7%AB%A0)，它的流程逻辑如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/Https_Signature.png)

如果，要在**实际业务**中将通信数据作签名处理，可以考虑以下流程（以转账为例）：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/数据签名.jpg)
