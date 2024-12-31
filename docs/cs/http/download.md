---
title: 文件下载
---

## 1.获取文件

### 1-1.Blob

后端返回二进制文件流，此时前端利用 `Blob` 读取。

可以分为 `3` 步：

1. `config` 添加 `responseType: 'blob'`。
2. 将获取到的数据进行处理，`new Blob([data])`。
3. 再利用 `URL.createObjectURL` 将 `blob` 转为 `BlobUrl` 形式，可在浏览器打开。

```js
btn.addEventListener('click', function (e) {
  axios.post('http://127.0.0.1:3000/download', {
    fileName
  }, {
    responseType: 'blob'
  }).then(res => {
    if (res) {
      const { data } = res
      const file = new Blob([data])
      const href = URL.createObjectURL(file)
      const a = document.createElement('a')
      a.href = href
      a.download = 'demo.png'
      a.click()
    }
  }).catch(err => {
    console.warn(err)
  })
})
```

### 1-2.form表单

`form` 表单可以用来发送 `post` 请求。

那么它除了可以上传文件，也可以用来下载文件（**需要服务端的配置**）。

另外由于现实开发中，不会直接点击 `form` 元素来创建请求，所以我们需要利用 `JS` 创建元素，模拟 `form` 元素的提交。

此处利用 `Jquery` 进行创建：

```js
const createDownloadForm = function (id, data) {
  var formId = 'jDownloadForm' + id
  var form = $('<form  action="" method="POST" name="' + formId + '" id="' + formId + '"></form>')
  if (data) {
    for (var i in data) {
      $('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form)
    }
  }
  $(form).css('display', 'none')
  $(form).appendTo('body')
  return form
}
```

由于 `form` 本身的提交会触发页面跳转，所以我们需要创建 `iframe`。

```js
const createDownloadIframe = function (id, uri) {
  var frameId = 'jDownloadFrame' + id
  var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="display: none;"'
  if (window.ActiveXObject) {
    if (typeof uri == 'boolean') {
      iframeHtml += ' src="' + 'javascript:false' + '"'
    } else if (typeof uri == 'string') {
      iframeHtml += ' src="' + uri + '"'
    }
  }
  iframeHtml += ' />'
  $(iframeHtml).appendTo(document.body)
  return $('#' + frameId).get(0)
}
```

在点击事件产生后，可以这样做：

```js
$('#btn').on('click', function () {
  const timeStamp = Date.now()
  const frameId = `jDownloadFrame${timeStamp}`
  const url = 'http://127.0.0.1:3000/download'
  const data = {
    fileName: 'file-1654525839415'
  }
  // 创建form和iframe
  const form = createDownloadForm(timeStamp, data)
  const iframe = createDownloadIframe(timeStamp, false)
  $(form).attr('action', url)
  $(form).attr('target', frameId)
  form.submit()
  // iframe加载完之后 读取其内容
  $(iframe).load(function () {
    // 读取接口返回的错误信息 但这里实际操作可能会有iframe跨域问题 
    var content = $(this).contents().find('body').text()
    console.warn(content)
  })
})
```

关于 `form` 下载文件，要满足两种目的：

1. 能够捕获接口错误，并作出处理。
2. 文件能下载下来，无论是 `png`、`pdf` 还是 `xlsx`。

上述的代码在某种程度上实现了 `1`, 但没有实现 `2`。

点击按钮之后，会发现浏览器并不会有反应。

这是因为需要后端服务配置额外的响应头，譬如：

1. `Content-Type: 'application/octet-stream;charset=utf-8'`
2. `Content-Disposition: 'attachment;filename=demo.png;'`

:::tip
**当设置了上述响应头后，浏览器会自动处理接口响应。**

**但要注意的是，该系列响应头只会对 `form` 表单的提交方式起作用。如果使用 `ajax`，浏览器则不会自动处理接口响应。**
:::

:::tip
关于 `Content-Type: 'application/octet-stream;charset=utf-8'`：

该属性告诉浏览器，我不知道这种文件类型是什么，只知道是二进制流，怎么处理你看着办。

**由于浏览器单单从此属性无法知道具体的文件属性，所以不能预览，一般就是下载处理**。

即使设置了 `'Content-Disposition', 'inline;filename=demo.png;'`，也是下载处理。
:::

### 1-3.Content-disposition

`Content-Disposition` 用来表明内容的位置。

它常用的属性有两种：

1. `inline`: 表明文件是内联形式，会由浏览器打开。
2. `attachment`: 表明文件是附件形式，会有浏览器下载。

此外，它可以利用 `filename` 来定义文件的名字。

譬如，`Content-Disposition: 'attachment;filename=demo.png;'` 表明文件将以 `demo.png` 的命名由浏览器下载下来。

在现实开发中，前端可能会出现要读取该**响应头属性**的场景，进而获取 `filename` 做相应处理。

**如果接口的跨域是由 `nginx` 代理或者其他手段解决，可能会直接在接口的响应头 `headers` 能读取到**。

要注意的一点，该属性在 `CORS` 请求中不属于**简单响应头**（`Simple Response Header`）:

1. `Cache-Control`
2. `Content-Type`
3. `Content-Length`
4. `Content-Language`
5. `Expires`
6. `Last-Modified`
7. `pragma`

所以，在 `CORS` 请求中，并不能直接获取到该响应头属性。

**除非在响应头中添加额外属性 `Access-Control-Expose-Headers: 'Content-Disposition';`**。

该配置会在 `CORS` 请求中将响应头中的 `Content-Disposition` 暴露给前端。

这样前端就能在响应头属性中获取到。

## 2.打开/下载文件

### 2-1.window.open

`window.open(url)` 默认等于 `window.open(url, '__blank')`。

由于广告商的滥用，所以浏览器对该方法有额外限制。

用户可在浏览器设置中选择是否允许网站显示弹出式窗口或使用重定向：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h383lqebiqj21tg0nu0w0.jpg)

**用户允许弹出式窗口或使用重定向的话，浏览器将不会限制**。

但**用户一般会设置为不允许，在这种情况下，浏览器也不会完全不允许窗口弹出**。

会对实际项目代码产生的影响总结如下：

1. 主线程的 `window.open` 必定被拦截。
2. 用户点击 `DOM` 产生的 `open` 不会被拦截。
3. `DOM` 事件中的异步线程， `window.open` 不会被拦截，但前提是延迟时间不能过长，譬如 `chrome` 下超过 `5s` 就会有问题。
4. `DOM` 事件中的异步线程，即使创建了 `a` 标签，发现设置了 `target="_blank"` 的 `a` 标签也会被拦截。但当设置了 `download` 属性且 `href` 为 `blobURL` 或 `dataURL` 时，不会被拦截。

```js
var btn = document.querySelector('#btn')
var fileUrl = 'http://127.0.0.1:3000/static/file-1654525825652.xlsx'
window.open(fileUrl)
btn.addEventListener('click', async () => {
  // 即使在点击事件内，延迟时间过长的话，依然会被拦截
  setTimeout(() => {
    var result = window.open(fileUrl)
    if (!result) {
      alert(123)
    }
  }, 5000)
})
```

:::tip
`window.open` 有返回值。

正常执行、能打开新窗口时，返回值是**子窗口的 `window` 引用**。

被浏览器拦截时，返回值会是 `false`。
:::

### 2-2.window.location.href

相对于 `window.open`，`window.location.href` 不会被拦截，但它的体验较差，实际生产可以看情况应用。

如果文件是浏览器可预览的，则 `window.location.href` 会定向到文件地址。

如果文件是浏览器不可预览的，则 `window.location.href` 会下载该文件。

### 2-3.download

`HTML5` 中为 `a` 标签添加了一个 `download` 属性，这样在被点击的时候，浏览器会下载该资源，而不是定向到它。

`download` 属性适用于**非跨域**资源，或者 `BlobURL`、`DataURL`。

```js
var btn = document.querySelector('#btn')
btn.addEventListener('click', function () {
  var a = document.createElement('a')
  // 验证a标签下载跨域文件
  a.href = 'http://127.0.0.1:3000/static/file-1654525839415.png'
  // 这里可以声明为'demo.png'，也可以省略后缀名
  a.download = 'demo'
  // a标签不需要append进body
  a.click()
})
```

`a` 标签的 `download` 属性在处理资源时，具有以下特点：

```

跨域     => 浏览器能打开   => 打开

        => 浏览器不能打开  => 下载

同源     => 浏览器能打开   => 下载

        => 浏览器不能打开  => 下载

BlobURL => 无论是否能打开  => 下载

DataURL => 无论是否能打开  => 下载

```

