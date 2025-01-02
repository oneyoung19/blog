---
title: URL类
---

本节，主要分为两部分，一是针对访问路径的 `URL`，另一是针对访问路径参数的 `URLSearchParams`。

## 1.URL

内建的 `URL` 类提供了用于创建和解析 `URL` 的便捷接口。

### 1-1.基本使用

```js
new URL(url, [baseUrl])
```

参数含义如下：

- `url` 必选项，可以是一个合法的 `url` 路径，或者普通路径（此条件必须声明 `baseUrl` 参数）。
- `baseUrl` 可选参数。如果 `url` 不是一个合法的 `url` 路径，则需要提供 `baseUrl` 选项以明确基础路径。

**返回值是一个 `URL` 实例对象**。

```js
// work
var url = 'http://jsgoshu.cn/module/a'
console.log(new URL(url))
```

```js
// error 缺少baseUrl参数
var url = './module/a'
console.log(new URL(url)) // Failed to construct 'URL': Invalid URL
```

```js
// work
var url = './module/a'
var base = 'http://jsgoshu.cn/engineer/'
console.log(new URL(url, base))
```

### 1-2.实例属性

本节说明 `URL` 的实例对象。

以下述代码为例：

```js
var url = './module/a?type=something#target'
var base = 'http://jsgoshu.cn/engineer/'
console.log(new URL(url, base))
```

控制台打印如下图：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/006y8mN6ly1h6q5b8qszaj31fg0gytco.jpg)

各个属性的含义如下图所示：

<img src="./image/url-object.svg">

除此之外，实例属性中还有个 `searchParams` 特殊属性。

可以看出，该属性是 `URLSearchParams` 的实例。

关于该属性的详细内容，可见[下章](#2-urlsearchparams)。

### 1-3.静态方法

`URL` 类上的静态方法有以下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/006y8mN6ly1h6q4x9kdbaj30xu0be3zp.jpg)

即：

- `createObjectURL`
- `revokeObjectURL`

这两种方法，经常用于创建 [BlobURL](../../cs/binary-file/4.blob.html#_3-url转化)

## 2.URLSearchParams

`URLSearchParams`，顾名思义，它指的是，**路径查询参数**。

它的实例，可调用 `toString()` 方法，转为字符串后，结果类似这种形式 `name=Jack&age=19&...`。

### 2-1.基础使用

直接利用：

```js
var urlSearchParams = new URLSearchParams()
```

即可创建一个 `URLSearchParams` 实例。打印如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/006y8mN6ly1h6q5ha97e4j31d60i2mzs.jpg)

可以看出

1. 该实例具有一系列方法操作属性，`set`、`append`、`delete`、`set`、`get`、`getAll`、`has` 等。
2. 该实例可迭代。此外也具有 `entries`、`keys`、`values` 等迭代方法

```js
var urlSearchParams = new URLSearchParams()
urlSearchParams.set('name', 'Jack')
urlSearchParams.set('name', 'Tom')
urlSearchParams.append('name', 'Jerry')
urlSearchParams.set('age', '19')
urlSearchParams.set('text', 'Hello world')
var keys = urlSearchParams.keys()
// name name age text
for (var k of keys) {
  console.log(k)
}
// name=Tom&name=Jerry&age=19&text=Hello+world
console.log(urlSearchParams.toString())
```

### 2-2.url.searchParams

通过 `URL` 创建的实例，其属性 `searchParams` 也是 `URLSearchParams` 构造函数的实例。

譬如：

```js
var url = './module/a?type=something#target'
var base = 'http://jsgoshu.cn/engineer/'
console.log(new URL(url, base))
```

控制台打印如下图：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/006y8mN6ly1h6q5b8qszaj31fg0gytco.jpg)

所以，`url.searchParams` 属性的操作形式与 `urlSearchParams` 完全一致。

:::tip
此处，

- `url` 代指 `URL` 的实例。
- `urlSearchParams` 代指 `URLSearchParams` 的实例。
:::

## 3.URL路径的转码与解码

`URL` 路径的转码与解码方式，目前最常使用的有两类

- `encodeURI`
- `decodeURI`

或

- `encodeURIComponent`
- `decodeURIComponent`

假设有两类路径：

1. `https://jsgoshu.cn/javascript`
2. `https://jsgoshu.cn/javascript?type=ecma&script&str=hello world`
   
使用 `encodeURI` ：

```js
var host = 'https://jsgoshu.cn/javascript'
var url = 'https://jsgoshu.cn/javascript?type=ecma&script&str=hello world'

// https://jsgoshu.cn/javascript
console.log(window.encodeURI(host))
// https://jsgoshu.cn/javascript?type=ecma&script&str=hello%20world
console.log(window.encodeURI(url))
```

使用 `encodeURIComponent` :

```js
var host = 'https://jsgoshu.cn/javascript'
var url = 'https://jsgoshu.cn/javascript?type=ecma&script&str=hello world'

// https%3A%2F%2Fjsgoshu.cn%2Fjavascript
console.log(window.encodeURIComponent(host))
// https%3A%2F%2Fjsgoshu.cn%2Fjavascript%3Ftype%3Decma%26script%26str%3Dhello%20world
console.log(window.encodeURIComponent(url))
```

在实际开发中，`encodeURIComponent` 比 `encodeURI` 的使用范围要更普遍。

因为可以利用 `encodeURIComponent` 转义 `urlSearchParams` 以保证参数正确。

关于二类编码方式更多的详细，可参见本站之前的[相关记录](../../FE/javascript/ECMAScript/7.String.md#encodeuri)
