---
title: XHR/Fetch
---

本节重点讲述前端实现网络通讯的方式 `XMLHttpRequest` 与 `Fetch`，以及这两种方式在实际应用过程中可能出现的问题，或需要注意的地方。

## 1.Form

在开始正式的章节之前，先了解下前端在刀耕火种年代的通讯方式。

在 `JavaScript` 这门脚本语言还没有出现的时候，前端与**服务端**通讯，主要是依赖 `Html` 中的 `form` 表单以及其 `submit` 提交。

但这种形式不好的一点在于 **`submit` 提交后，会造成页面跳转到目标 `URL`**。体验极差。

:::tip
对这种场景，有一种优化手段是这样的：

可以通过设置一个**隐藏**的 `<iframe>` 标签，并设置其 `id`，`<iframe id="iframeId">`，然后 `<form>` 标签设置 `target` 属性：

`<form target="iframeId">`

这样的话，`form` 提交时，页面就不会发生跳转。
:::

即使我们按照上述方式，优化了页面跳转的用户体验，但**往往真实场景下，我们还要获取服务端的数据信息**。

在上述方式下，服务端数据信息会加载在 `<iframe>` 标签内。

确实，我们依然可以通过某些手段来获取 `<iframe>` 标签内的数据（**在某些浏览器下可能会有限制**）。

综合来看，`<form>` 表单的形式过于冗余，实际操作也会比较麻烦，完全不满足前端发展需要。

在这种历史下，[AJAX](https://zh.wikipedia.org/zh-cn/AJAX)即 `Asynchrounous JavaScript and XML` 横空出世。

## 2.XHR

`AJAX` 技术中的重要组成部分，即 `XHR`。

`XHR` 的全称为 `XMLHttpRequest`。

该技术是目前大多数网站的主流通讯手段。

### 2-1.基础使用

1. 创建 `XMLHttpRequest`

```js
var xhr = new XMLHttpRequest()
```

2. `xhr.open(method, url, [async, user, password])`
   - `method` 请求方法
   - `url` 请求地址
   - 可选参数：
     - `async`，设置为 `false` 时，请求会是同步形式。默认是 `true`，即**异步加载**。
     - `user` 登录名。
     - `password` 密码。

3. `xhr.send([body])`
   - 可选参数：
      - `body` 请求体。（当请求方式为 `POST` 时，可传递 `body`）

4. `xhr`相关监听事件
   - `xhr.onreadystatechange`
   - `xhr.onprogress`
   - `xhr.onload`
   - `xhr.onerror`

事件中，以往代码中较为常用的是 `onreadystatechange`。

此处记录下 `readyState` 在不同值下的表示含义：

- `0 UNSET` 初始状态
- `1 OPENED` `open` 被调用
- `2 HEADERS_RECEIVED` 接收到 `response header`
- `3 LOADING` 响应正在被加载（接收到一个数据包）
- `4 DONE` 请求完成

`XMLHttpRequest` 对象以 `0 → 1 → 2 → 3 → … → 3 → 4` 的顺序在它们之间转变。

每当通过网络接收到一个数据包，就会重复一次状态 `3`。

可能在非常老的代码中找到 `readystatechange` 这样的事件监听器，它的存在是有历史原因的，因为曾经有很长一段时间都没有 `load` 以及其他事件。

如今，它已被 `load/error/progress` 事件处理程序所替代。

5. 响应
   - `status`
   - `statusText`
   - `response`

### 2-2.请求头

设置请求头：

`xhr.setRequestHeader(key, value)`

但部分请求头，是浏览器自动添加的。譬如 `Referer`、`Host` 等。

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Referer`
- `Set-Cookie`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

更多详细介绍可见[此处](https://xhr.spec.whatwg.org/#the-setrequestheader()-method)。

为了用户安全和请求的正确性，`XMLHttpRequest` 不允许更改它们。

**当进行添加不被允许的请求头时，会被忽略**。

`Request Header` 一旦设置，无法覆盖、移除。

譬如，设置

```js
xhr.setRequestHeader('token', 123)

xhr.setRequestHeader('token', 456)
```

最终的请求头结果是 `token: 123, 456`，而不是 `token: 456`。

### 2-3.响应头

通过 `xhr` 获取响应头有俩种方式：

1. 获取所有响应头， `xhr.getAllResponseHeaders()`。
2. 获取固定响应头，`xhr.getResponseHeader(key)`。

通过 `xhr.getAllResponseHeaders()` 获取到的响应头，有如下 `console` 打印：

```
accept-ranges: bytes
access-control-allow-credentials: true
cache-control: public, max-age=0
content-length: 1944
content-type: text/html; charset=UTF-8
date: Sat, 17 Sep 2022 11:17:34 GMT
etag: W/"1ad-1834acfa7cd"
last-modified: Sat, 17 Sep 2022 09:37:46 GMT
vary: Origin
```

各行 `header` 之间的换行符始终为 `\r\n`，（不依赖于操作系统）。

证明这个的方式如下：

```js
var allResponseHeaders = xhr.getAllResponseHeaders()
console.log(allResponseHeaders)
console.log(allResponseHeaders.split('\n'))
```

打印结果：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h69tvgduxjj22k80nagtb.jpg)

:::tip
`\r` 代表光标移动到该行的首部

`\n` 代表光标换行
:::

`xhr.getResponseHeader(key)` 中，`key` 值是**大小写不敏感的**，即 `byte-case-insensitive`。

```js
xhr.getResponseHeader('Content-Length') // key值是大小写不敏感的

xhr.getResponseHeader('token') // 获取不存在的header的话，返回null
```

### 2-4.实例属性

可以给 `XMLHttpRequest` 的实例设置属性，以自定义某些行为。

1. `responseType` 响应类型
   - `''` 响应格式为字符串
   - `text` 响应格式为字符串
   - `arraybuffer` 响应格式为 `ArrayBuffer`
   - `blob` 响应格式为 `Blob`
   - `document` 响应格式为 `XML document` 或 `HTML document`
   - `json` 响应格式为 `JSON`

譬如：

```js
var xhr = new XMLHttpRequest()
xhr.responseType = 'blob'
```

设置之后，浏览器会将服务端响应自动转化为 `blob`。

:::tip
在 `Fetch` 中，并没有此属性。

但可以利用 `response` 的 `blob()` 方法手动转化响应。
:::

2. `timeout` 超时时间，单位 `ms`。

```js
xhr.timeout = 3000
```

3. `withCredentials` 跨源时，是否携带凭证。
   当发生跨源时，`ajax` 默认不会将 `cookie` 或其他 `HTTP` 授权凭证发送到其他源。

```js
xhr.withCredentials = true
```

下图为跨源场景下，是否设置 `withCredentials` 时，请求头信息的区别：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h69vue1qttj21sr0u012e.jpg)

### 2-5.监听进度

关于 `ajax` 进度，涉及到**上传进度**和**下载进度**。

`xhr` 提供了一个专门用于上传控制的对象，即 `xhr.upload`。

该对象提供了一系列事件，可以用于**监听上传**：

- `loadstart` —— 上传开始。
- `progress` —— 上传期间定期触发。
- `abort` —— 上传中止。
- `error` —— 非 `HTTP` 错误。
- `load` —— 上传成功完成。
- `timeout` —— 上传超时（如果设置了 `timeout` 属性）。
- `loadend` —— 上传完成，无论成功还是 `error`。

譬如：

```js
xhr.upload.onprogress = function(event) {
  console.log(`Uploaded ${event.loaded} of ${event.total} bytes`)
}

xhr.upload.onload = function() {
  console.log(`Upload finished successfully.`)
}

xhr.upload.onerror = function() {
  console.log(`Error during the upload: ${xhr.status}`)
}
```

:::tip
要注意两点：

- 只适用于上传 `file`，其他数据形式不会触发。
- 需要在 `xhr.send` 方法之前进行定义。
:::

监听**下载进度**的话，则是可以使用 `xhr.onprogress` 方法。

```js
var xhr = new XMLHttpRequest()

xhr.onprogress = function () {}
```

### 2-6.中止请求

`xhr` 可直接利用 `xhr.abort()` 来中止请求。

此时 `xhr.status` 会变为 `0`。

```js
xhr.abort()
```

## 3.Fetch

`fetch` 是一种新提出的基于 `Promise` 的现代通讯方法。

旧版本的浏览器不支持它（可以 `polyfill`），但是它在现代浏览器中的[支持情况](https://caniuse.com/fetch)很好。


### 3-1.基础使用

`var p = fetch(url, [options])`

- `url` 要访问的 `URL`。
- `options` 可选参数
  - `method` 请求方式，`GET`、`POST` 等。
  - `header` 设置自定义请求头。

```js
fetch('http://127.0.0.1:3000', {
  headers: {
    'X-Requested-With': 123
  }
})
.then(async response => {
  console.log(response)
})
.catch(err => {
	//通讯失败的话 TypeError: Failed to fetch
	console.error(err)
})
```

打印的 `response` 如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h69wgkpzhwj21gi0rstd8.jpg)

可以看出，该 `response` 对象的属性有：

- `body` 响应体。`ReadableStream` 类型。
- `bodyUsed` 响应体是否已处理转化
- `headers` 响应体
- `ok` 布尔值，如果 `HTTP` 状态码为 `200-299`，则为 `true`。
- `redirected` 布尔值，是否重定向。
- `status` `HTTP` 状态码，例如 `200`。
- `statusText` 状态描述文本。
- `type` 通讯类型。
  - `basic` 基础、普通
  - `opaque` 不透明、保密。
- `url` 通讯地址。

我们得到的响应体数据是 `ReadableStream` 类型，允许逐块读取 `body`，需要使用特定的方法进行二次处理，这与 `xhr` 设置 `responseType`，直接获取对应类型的数据方式是不一致的。

`Response` 提供了多种基于 `Promise` 的方法，来以不同的格式访问 `body` 数据。

可见上图中的原型属性上的额外方法：

- `text()`  文本形式。
- `json()`  以 `JSON` 形式解析。
- `formData()`  `FormData` 形式。
- `blob()`  `Blob` 形式。
- `ArrayBuffer()` `ArrayBuffer` 形式。

:::tip
**只能选择一种读取 `body` 的方法**，譬如：

使用 `response.text()`，此时 `response.bodyUsed` 属性已变为 `true`。

紧接着使用 `response.json()`，则会报错：`Failed to execute 'json' on 'Response': body stream already read`。
:::

### 3-2.`POST` 请求

`GET` 请求直接通过 `queryString` 的形式即可进行请求查询。

这里我们着重分析下，在 `POST` 请求下，设置 `body` 选项进行传递数据。

首先，简单封装一个 `fetch` 请求：

```js
function fetchByPost (body, headers) {
  const url = 'http://127.0.0.1:3000/save'
  fetch(url, {
    method: 'POST',
    headers,
    body
  }).then(response => {
    console.log(response)
  }).catch(err => {
    console.error(err)
  })
}
```
<script>
  export default {
    mounted () {
      window.fetchByPost = function (body, headers) {
        // 此处只测试验证请求头信息，不关注响应，所以定一个随意的url。有可能出现跨域等报错
        const url = 'http://127.0.0.1:3000/save'
        fetch(url, {
          method: 'POST',
          headers,
          body
        }).then(response => {
          console.log(response)
        }).catch(err => {
          console.error(err)
        })
      }
    }
  }
</script>

#### 1. 普通字符串

```js
fetchByPost('Hello world')
```

:::tip
当请求体是普通字符串时：

**浏览器会自动设置请求头 `Content-Type: text/plain;charset=UTF-8`**。
:::

<button id="btn-string">普通字符串</button>
<script>
	var btn= document.querySelector('#btn-string')
	btn.addEventListener('click', function () {
		fetchByPost('Hello world')
	})
</script>

#### 2. `JSON` 字符串

```js
fetchByPost(JSON.stringify({ text: 'Hello world' }))
```
:::tip
当请求体是 `JSON` 字符串时：

**浏览器会自动设置请求头 `Content-Type: text/plain;charset=UTF-8`**。
:::

<button id="btn-json">JSON字符串</button>
<script>
	var btn= document.querySelector('#btn-json')
	btn.addEventListener('click', function () {
		fetchByPost(JSON.stringify({ text: 'Hello world' }))
	})
</script>

为了保证服务端，能够根据 `Content-Type` 正确解析我们的请求，所以往往需要手动设置请求头 `Content-Type: application/json`。

```js
fetchByPost(JSON.stringify({ text: 'Hello world' }), {
	'Content-Type': 'application/json'
})
```

<button id="btn-json-header">发送JSON请求头</button>
<script>
	var btn= document.querySelector('#btn-json-header')
	btn.addEventListener('click', function () {
		fetchByPost(JSON.stringify({ text: 'Hello world' }), {
			'Content-Type': 'application/json'
		})
	})
</script>

#### 3. `URLSearchParams`
   
`URLSearchParams` 的参数形式可以看做是 `name=a&value=b&...` 这种形式。

这种形式，也被称作 `application/x-www-urlencoded` 编码形式。

为了更便捷的操作，`JavaScript` 提供原生了 `URL` (操作路径) 和 `URLSearchParams` (操作路径参数) 两类构造函数。

:::tip
当请求体是 `URLSearchParams` 构造函数的实例时：

**浏览器会自动设置请求头 `Content-Type: application/x-www-form-urlencoded;charset=UTF-8`**。

**也可以调用 `urlSearchParams.toString()`，然后开发者手动声明`Content-Type: application/x-www-form-urlencoded;charset=UTF-8`，这样浏览器也能正确解析请求体**。
:::

```js
// ①示例一
var urlSearchParams = new URLSearchParams()
urlSearchParams.set('name', 'Jack')
urlSearchParams.set('name', 'Tom')
urlSearchParams.append('name', 'Jerry')
fetchByPost(urlSearchParams)

// ②示例二
fetchByPost(urlSearchParams.toString(), {
	'Content-Type': 'application/x-www-form-urlencoded'
})
```

<button id="btn-params-demo-one">示例一</button>
<button id="btn-params-demo-two">示例二</button>
<script>
	var btnOne = document.querySelector('#btn-params-demo-one')
	var btnTwo = document.querySelector('#btn-params-demo-two')
	var urlSearchParams = new URLSearchParams()
	urlSearchParams.set('name', 'Jack')
	urlSearchParams.set('name', 'Tom')
	urlSearchParams.append('name', 'Jerry')
	btnOne.addEventListener('click', function () {
		fetchByPost(urlSearchParams)
	})
	btnTwo.addEventListener('click', function () {
		fetchByPost(urlSearchParams.toString(), {
			'Content-Type': 'application/x-www-form-urlencoded'
		})
	})
</script>

:::tip
在 [axios](https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format) 中，关于`application/x-www-form-urlencoded` 编码有两种推荐处理形式：

- `URLSearchParams`
- `qs` 库
:::

#### 4. `FormData`

`FormData` 以 `multipart/form-data` 形式发送数据。

:::tip
当请求体是 `FormData` 构造函数的实例时：

**浏览器会自动设置请求头 `Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryc8BjYr4SYh77YIdb`**。

此处的 `boundary` 是浏览器自动添加的值，用于区分 `FormData` 中的参数值。

所以，当检测到请求体 `body` 是 `FormData` 实例时，通常要将已存在的 `Content-Type` 请求头删除掉，由浏览器自己控制，否则 `boundary` 值会缺失。

在 `axios` 的源码中，其正是如此设计的。
:::

```js
var formData = new FormData()
formData.append('name', 'Jerry')
formData.append('myFile', 'file')
fetchByPost(formData)
```

<button id="btn-formdata">FormData</button>
<script>
	var btn = document.querySelector('#btn-formdata')
	var formData = new FormData()
	formData.append('name', 'Jerry')
	formData.append('myFile', 'file')
	btn.addEventListener('click', function () {
		fetchByPost(formData)
	})
</script>

#### 5. `Blob/BufferSource`

可利用 `Blob/BufferSource` 发送二进制数据。

:::tip
当请求体是 `Blob` 构造函数的实例时：

**浏览器会根据 `Blob` 的内建类型，自动添加对应的请求头。**
:::

```js
var blob = new Blob(['hello world'], {
  type: 'image/png'
})
fetchByPost(blob)
```

<button id="btn-blob">Blob</button>
<script>
	var btn = document.querySelector('#btn-blob')
	var blob = new Blob(['hello world'], {
		type: 'image/png'
	})
	btn.addEventListener('click', function () {
		fetchByPost(blob)
	})
</script>

### 3-3.请求头

在 `fetch` 中设置自定义请求头的话，直接配置 `headers` 对象实现即可。

但正如我们之前提到过的，出于浏览器的限制，我们无法对部分 [forbidden HTTP headers](https://fetch.spec.whatwg.org/#forbidden-header-name) 进行覆盖设置：

- `Accept-Charset`, `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`, `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Host`
- `Keep-Alive`
- `Origin`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`
- `Proxy-*`
- `Sec-*`

这些 `header` 保证了 `HTTP` 的正确性和安全性，**它们仅由浏览器控制**。
### 3-4.响应头

不同于 `xhr` 的响应头获取方式，`fetch` 中的响应头，通过 `response` 中的 `headers` 对象来获取。

`headers` 是一个类似于 `Map` 的对象。

它并不是 `Map`，但能使用 `get` 或者 `迭代器` 等方法。可以理解成，对于普通对象做了额外拓展。

以下是其原型上的方法：

```
append: ƒ append()
delete: ƒ delete()
entries: ƒ entries()
forEach: ƒ forEach()
get: ƒ ()
set: f ()
has: ƒ has()
keys: ƒ keys()
values: ƒ values()
```

以下是一个应用代码的 `demo`：

```js
fetch('http://127.0.0.1:3000', {
  method: 'GET',
  headers: {}
}).then(response => {
  const { headers } = response

  console.log(headers)
  console.log(headers.get('Access-Control-Allow-Credentials')) // null
  console.log(headers.get('Content-Length')) // 11
  console.log(headers.get('Content-Type')) // text/html; charset=utf-8

  // 同样的，发生跨域请求时，只能获取响应头中的简单响应头（"HELP"）
}).catch(err => {
  console.error(err)
})
```

### 3-5.可设置属性

`fetch(url, [options])`

本节，重点总结 `options` 可选参数中的所有可配置属性：

```js
var f = fetch('http://127.0.0.1:8085', {
  /*
    请求方式
  */
  method: 'GET',
  /*
    请求头
  */
  headers: {
    'Content-Type': 'application/json'
  },
  /*
	  请求体
  */
  body: JSON.stringify({
    fileName: 'file-1663733546921'
  }),
  /*
    AbortController 来中止请求
  */
  signal: undefined,
  /*
    same-origin 同源的情况下发送凭证
    omit 任何情况下都不发送凭证
    include 任何情况下都发送凭证
  */
  credentials: "same-origin",
  /*
    - 默认值为 about:client 以客户端规则为准（个人推测）
    - 空字符串"" 以不发送 Referer header，
    - 或者直接写作当前源的 url，写作其他源的url不会起作用
  */
  referrer: '',
  /*
    可设置项与http中的referrerPolicy保持一致，譬如：
    strict-origin-when-cross-origin
    no-referrer-when-downgrade
    no-referrer
    origin
    same-origin
    ...
  */
  referrerPolicy: "no-referrer-when-downgrade",
  /*
    cors 标识这是一个跨源请求
    no-cors 标识这不是一个跨源请求。在跨源请求中设置该项时，fetch结果的body是null，即使响应body有数据。也就是该响应会变成不透明类型 `opaque`。
    same-origin 同源请求
  */
  mode: 'no-cors',
  /*
    "default" —— fetch 使用标准的 HTTP 缓存规则和 header，
    "no-store" —— 完全忽略 HTTP 缓存，如果我们设置 header If-Modified-Since，If-None-Match，If-Unmodified-Since，If-Match，或 If-Range，则此模式会成为默认模式，
    "reload" —— 不从 HTTP 缓存中获取结果（如果有），而是使用响应填充缓存（如果 response header 允许此操作），
    "no-cache" —— 如果有一个已缓存的响应，则创建一个有条件的请求，否则创建一个普通的请求。使用响应填充 HTTP 缓存，
    "force-cache" —— 使用来自 HTTP 缓存的响应，即使该响应已过时（stale）。如果 HTTP 缓存中没有响应，则创建一个常规的 HTTP 请求，行为像正常那样，
    "only-if-cached" —— 使用来自 HTTP 缓存的响应，即使该响应已过时（stale）。如果 HTTP 缓存中没有响应，则报错。只有当 mode 为 same-origin 时生效。
  */
  cache: "default",
  /*
    follow 默认值，遵循 HTTP 重定向
    error HTTP 重定向时报错
    manual 允许手动处理 HTTP 重定向。在重定向的情况下，我们将获得一个特殊的响应对象，其中包含 response.type="opaqueredirect" 和归零/空状态以及大多数其他属性。
  */
  redirect: "follow",
  /*
    子资源完整性
    一个 hash，像 "sha256-abcdef1234567890"
  */
  integrity: "",
  /*
    keepalive 选项表示该请求可能会在网页关闭后继续存在
  */
  keepalive: false
})
```
### 3-6.监听进度

截止到本文更新日期，`2022年09月30日`，`fetch` 没有提供监听上传进度的方式，也没有其他 `hack` 方式。

相对的，`XMLHttpRequest` 则有原生的 `xhr.upload.onprogress` 以及 `xhr.onprogress` 两事件来监听进度。

`fetch` 的下载进度监听方式，则可以使用一种 `hack` 方式。具体实现思路如下：

- 服务端需要返回 `Content-Length`，即**总长度 `total`**。
- 根据读取结果，拼接 `length`，即**加载长度 `loaded`**。

利用 `fetch` 获取到的**响应体数据**是可读流[ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)。

读取 `ReadableStream` 需要利用 [ReadableStreamDefaultReader](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader)。

```js
fetch('http://127.0.0.1:3000/download', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fileName: 'file-1663733546921'
  })
}).then(async response => {
  let receivedLength = 0
  // 获取Content-Length
  const contentLength = response.headers.get('Content-Length')
  // ReadableStream
  const stream = response.body
  // ReadableStreamDefaultReader
  const reader = stream.getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      break
    } else {
      receivedLength += value.length
      console.log(`Received ${receivedLength} of ${contentLength}`)
    }
  }
}).catch(err => {
  console.warn(err)
})
```

### 3-7.中止请求

`fetch` 函数返回的是 `promise`。

而 `promise` 一般是没有中止 `abort` 的说法。

为此，有一个特殊的内建对象 `AbortController`，它不仅可以中止 `fetch`，还可以中止其他异步任务。 

```js
var controller = new AbortController()
console.log(controller)
```

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h6fhtj864tj21340o0424.jpg)

#### 1.`reject` 中止 `promise`

因为 `fetch` 本身支持 `promise`，所以在了解中止 `fetch` 之前，我们先实现如何中止 `Promise`。

```js
let r = null
function timeout () {
  return new Promise((resolve, reject) => {
    r = reject
    setTimeout(() => {
      resolve('success')
    })
  })
}

timeout().then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})

r('fail')
```

上一种方式是把 `reject` 暴露出来，`promise` 的状态一旦确定，就不能再更改。

该方式的缺点是如果多个 `promise`，就需要声明多个 `reject` 变量，难以维护。

因此可以选择，包装一下 `promise`：

```js
class MyPromise {
  constructor(executor) {
      let abort = null
      let p = new Promise((resovle, reject)=>{
          executor(resovle, reject)
          abort = err => reject(err)
      })
      p.abort = abort
      return p
  }
}

let test = new MyPromise((resolve) => {
  setTimeout(() => resolve('success'), 200)
})
// 这里不能直接把 then 和 catch 加到上面的末尾去。主要原因是在于then是有返回值的
// test
.then(res => console.log(res))
.catch(err => console.log(err))

test.abort('aborted!')
```

:::tip
这里的中止 `promise`，原理实际上是将 `reject` 操作权暴露给了外部，供外部在合适的时机调用 `reject`, 以使 `promise` 的状态变为 `rejected`。

**并不是严格意义上的 `abort`。**
:::

#### 2.`abort` 中止 `fetch`

`ES` 语法中有 `AbortController` 与 `AbortSignal`。

而 `fetch` 的设计，兼容了这俩类构造函数，以实现 `abort`。

具体使用方法如下：

```js
const url = 'https://jsonplaceholder.typicode.com/users/1'
const abortController = new AbortController()
const { signal } = abortController

fetch(url, {
  method: 'GET',
  signal
}).then(response => {
  return response.json()
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})

abortController.abort()
```

需要额外注意一点，**`abort` 方法的调用，其 `this` 指向必须指向 `AbortController` 实例**。

```js
// ✅
abortController.abort()

// ❌ Illegal invocation
const { abort } = abortController
abort()
```

#### 3.`abort` 中止 `promise`

封装一个支持 `AbortController` 的 `promise`：

```js
class MyPromise {
  constructor (executor, { signal }) {
    return new Promise((resolve, reject) => {
      executor(resolve, reject)
      if (signal) {
        signal.addEventListener('abort', () => {
          reject('The use aborted a request')
        })
      }
    })
  }
}

const abortController = new AbortController()
const { signal } = abortController

new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('success'), 200);
}, {
  signal
}).then(res => {
  console.log(res)
}).catch(err => {
  console.error(err)
})

abortController.abort()
```

#### 4. `AbortController`的简单实现

此处根据原理，**简单**实现 `AbortController` 与 `AbortSignal`:

```js
class AbortController {
  constructor () {
    this.signal = new AbortSignal()
  }
  abort () {
    this.signal.aborted = true
  }
}

class AbortSignal {
  constructor () {
    Object.defineProperty(this, 'aborted', {
      get () {},
      set (val) {
        if (val) {
          this.execute('abort')
        }
      }
    })
    this.eventMap = {}
  }
  addEventListener (event, cb) {
    this.eventMap[event] = cb
  }
  execute (event) {
    this.eventMap[event]()
  }
}

function myFetch ({ signal }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 5) {
        resolve('Success')
      } else {
        reject('Error')
      }
    }, 200)
    if (signal) {
      signal.addEventListener('abort', () => {
        reject('Reject by abort')
      })
    }
  })
}

const abortController = new AbortController()
const { signal } = abortController

myFetch({
  signal
})
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

abortController.abort()
```