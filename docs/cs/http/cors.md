---
title: CORS
---

该篇文章，之前本人发布在[掘金](https://juejin.cn/post/6844904152011636749)。

该文章首次于 `2020-05-09` 更新。

本站于 `2022-10-02` 对上述文章重新校正。

## 1.前言
我们都知道，由于浏览器的同源策略，所以在前后端分离的开发过程中，难免出现跨域的问题。

最常用的解决方法有：

- `CORS`
- `JSONP`
- `webpack-dev-server`
- `nginx`
- `...等`

本文重点讨论下 `CORS`。

后端服务暂以原生 `node` 为例，另外编辑器使用 `vscode`，浏览器为 `chrome81`。

## 2.启动项目服务
先使用 `yarn init -y` 创建一个初始项目。然后安装 `axios` 以及 `node`。

```js
yarn add axios
yarn add node
```

### 2-1.前端
- 创建一个 `http.js` 文件。这个文件会书写 `XMLHttpRequest` 以及 `axios` 来请求后端的接口。
- 创建 `index.html`。引入 `node_modules` 中的 `dist` 目录下的 `axios`。以及之前的 `http.js`。注意 `script` 标签的先后顺序。
- 利用 `vscode` 的 `live server` 启动前端 `html` 服务。`live server` 可以配置前端项目启动的 `ip` 以及端口。这里我设置成 `http://localhost:8082`。

### 2-2.后端

下面是node的代码：

这里我们先直接设置 `Access-Control-Allow-Origin` 为 `*`。

```js
const http = require('http')
http.createServer(function (request, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World')
}).listen(8081)
console.log('Server running at http://127.0.0.1:8081/')
```

可利用 `vscode` 的 `code run` 直接运行上面代码。这样，`node` 服务就会启动在 `http://127.0.0.1:8081`。

## 3.前端发起请求

这里我们把请求分成两类：

1. 一类是原生 `XMLHttpRequest` 以及 `$.ajax`
2. 另一类就是我们实际项目经常用的 `axios`。
   
因为 `$.ajax` 实际上就是封装的 `XMLHttpRequest`，所以归为一种。另外之所以这样分，是为了下面更好的区别一些东西。具体原因请继续看。

以 `post` 请求为例，这里对请求地址加了标识，但是由于路由的原因，如果成功的话，都会返回 `hello world`。
### 3-1.XMLHttpRequest

由于请求路径是 `http://127.0.0.1:8081/api/xmlhttp`。本文以下的 `xmlhttp` 请求均代指此次请求。

```js
const xhr = new XMLHttpRequest()
// 监听事件
xhr.onreadystatechange = function () {
  // 请求完成
  if (this.readyState === 4) {
    if (this.status === 200) {
      //响应成功
      const httpResponseText = this.responseText
      console.log({httpResponseText})
    }
    else {
      // 响应失败 打印下状态码
      console.log(this.status)
    }
  }
  // 请求未完成
  else {
    console.log(this.readyState)
  }
}
// 发送请求
xhr.open('post', 'http://127.0.0.1:8081/api/xmlhttp')
xhr.setRequestHeader('content-type', 'application/x-www-urlencoded')
xhr.send()
```

### 3-2.axios

同上，`axios1` 代表下面第一种请求，`axios2` 代表下面第二种请求。

```js
axios({
  method: 'post',
  url: 'http://127.0.0.1:8081/api/axios1'
}).then(res => {
  console.log({res})
}).catch(err => {
  console.warn(err)
})

axios.post('http://127.0.0.1:8081/api/axios2', {
  name: 'axios2'
})
.then(res => {
  console.log({res})
})
.catch(err => {
  console.warn(err)
})
```

## 4.发起请求
至此，我们一共发起了3种请求。而且我们的 `node` 服务器已经配置了 `Access-Control-Allow-Origin`。

这3种请求是不是都能成功？你是不是觉得都能成功？我们看下实际发送请求后的控制台。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f8287cf4cbe74~tplv-t2oaga2asx-image.image)

可以看到。`axios2` 这个请求(就是用 `axios.post` 那个)失败了。失败原因的话，如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f82a2543c5e62~tplv-t2oaga2asx-image.image)

我来翻译下🤣。**本次请求已经CORS策略被阻止了。原因是因为请求头字段'content-type'没有被预检响应的'Access-Control-Allow-Headers'所允许。** 

是不是觉得翻译拗口，我真的尽力了。😂

别担心，等下就知道出现的原因以及解决方式了。而且到现在才刚刚到本文想要尽力讲清楚的地方。

在接触 `CORS` 的具体策略之前，要明白的一件事是 `axios2` 请求与 `axios1`、`xmlhttp` 请求的不同之处。

- `axios2` 的 `post` 请求，默认的 `content-type` 是 `application/json`。这是因为 `json` 在前后端分离的实际开发中，已经逐渐被大众接受。于是 `axios` 封装的 `post` 请求默认已经按照这种MIME类型。
- `axios` 的 `post` 请求，在有**post请求参数**的时候，才会将 `content-type` 设置为 `application/json`。如果没有参数，请求头默认是没有 `content-type`。这也是为什么 `axios1` 没有出错、请求成功的原因。
- `XMLHttpRequest` 请求，我们手动设置了请求头中的 `content-type` 为 `application/x-www-form-urlencoded`。

## 5.揭开CORS的面纱

在日常实际跨域的时候，分两种请求：**简单请求**和**预检请求**。

### 5-1.简单请求

若请求满足下述**所有**条件，则该请求可视为**简单请求**。

1. 使用下列方法之一
    - `GET`
    - `POST`
    - `HEAD`
2. 能人为的在请求头中添加的字段只包含以下：
    - `Accept`
    - `Accept-Language`
    - `Content-Language`
    - `Content-Type` (该字段有额外的限制，请看下面第3项)
    - `DPR`
    - `Downlink`
    - `Save-Data`
    - `Viewport-Width`
    - `Width`
3. `Content-Type`的值仅限于下列三者之一：
    - `text/plain`
    - `application/x-www-form-urlencoded`
    - `multipart/form-data`
4. 请求中的任意 `XMLHttpRequestUpload` 对象均没有注册任何事件监听器。`XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问。
5. 请求中没有使用 `ReadableStream` 对象。

浏览器会在**简单请求**中的请求头中自动设定`origin`属性。而且由于其他条件都已经满足，如 `content-type` 等，所以后端服务只设置`Access-Control-Allow-Origin: '*'` 即可。

正如我之前在 `node` 服务器中设置的，因而 `xmlhttp` 以及 `axios1` 直接成功了。

### 5-2.预检请求

当某个跨域请求不满足上述**简单请求**的条件，这时的**浏览器**会自动发送一条`options`方法的请求。

这条请求，我们称之为**预检请求**。

假如使用的是谷歌 `chrome` 浏览器 `v76` 版本及以上。这条 `options` 请求在控制台是默认隐藏的。

而 `firefox` 目前是可以看见 `options` 预检请求。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f86778eb81f01~tplv-t2oaga2asx-image.image)

`Chrome` 之所以这样做，是为了隐藏 `CORS` 的一些请求。

但是这种方式对于开发者来说，确实不够友好。

具体缘由请参见该链接以及该链接中的其他链接。[click me~](https://support.google.com/chrome/thread/11089651?hl=en)

打开方式是在 `chrome` 地址栏直接访问 `chrome://flags/#out-of-blink-cors`。

将页面上的 `Out of blink CORS` 选项，改为 `Disabled`。然后 `relaunch` 浏览器，设置即可生效。

下面是重启之后的 `chrome` 控制台。跟之前对比的话，可以看到失败的 `post` 请求已经变为 `options` 请求。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f872f7d994833~tplv-t2oaga2asx-image.image)

## 6.解决预检请求的跨域问题

`CORS` 的整体流程如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f8a78db4e78e5~tplv-t2oaga2asx-image.image)

:::tip
简单请求，只需要配置 `Access-Control-Allow-Origin`

非简单请求，会额外发送 `OPTIONS` 请求。

此时，`OPTIONS` 会自动携带额外的**请求头**：

- `Access-Control-Request-Method`
- `Access-Control-Request-Headers`
- `...等`
  
服务端根据不同的场景需要配置对应的**响应头**：

- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`
- `...等`

此外，服务端还可以设置 `Access-Control-Max-Age` （指 `CORS` 策略生效保持的最大时间）。
:::

对应本文上述`axios2`的问题，由此可知：

**只要在node服务设置 `Access-Control-Allow-Headers: content-type;` 即可。**

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f8ba68f36aa20~tplv-t2oaga2asx-image.image)

重新启动服务器后，再看下chrome控制台，就会发现 `axios2` 的 `options` 请求后的` post` 请求也已经成功了。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/171f8bbf6314be03~tplv-t2oaga2asx-image.image)

## 7.总结

之前在使用第三方的设置过 `CORS` 的后端接口时，我使用 `axios` 的 `post` 方式总是请求失败。

测试 `Jquery` 的 `$.ajax` 反而成功了。

当时还是蛮懵的，排查不出具体原因。

于是记录了下问题，前俩天遇见了 `CORS` 的**简单请求**以及**预检请求**这俩概念，于是一切恍然大悟。
