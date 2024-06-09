---
title: 文件上传
---

## 1. `form` 表单提交

可以利用 `form` 本身的 `post` 请求触发 `submit` 上传文件。

但要注意的一点是，要将 `enctype` 属性声明为 `multipart/form-data`。

```html
<form
  method="post"
  action="http://localhost:3000/upload"
  enctype="multipart/form-data">
  <input
    type="text"
    name="userName"
    placeholder="请输入用户名"><br><br>
  <input
    type="file"
    name="file"
    multiple><br><br>
  <input
    type="submit"
    value="submit">
</form>
```

:::tip
由于 `form` 提交会跳转页面，体验较不好，有一种手段是创建一个隐藏的 `iframe`，并将 `form` 的 `target` 设置为该 `iframe` 的 `name`。

这样，`form` 的提交结果会跳转到 `iframe`，不会再跳转到新页面。
:::

## 2. `xhr` 请求

相对于 `form` 上传，`xhr` 上传本身不会有跳转页面的缺点。

这是 `ajax` 的一大特点。

整体思路如下：

1. 获取到 `input` 元素的 `files` 属性。
2. 创建 `FormData` 实例。
3. 将 `files` 遍历项和其他参数 `append` 到 `FormData` 实例中。譬如 `formData.append('key', item)`

:::warning
注意：不要给 `xhr` 添加请求头 `Content-Type: multipart/form-data`。浏览器会根据请求参数是 `FormData` 实例自动添加。

如果自作主张添加，会报错 `Multipart: Boundary not found`。
:::

```js
var userName = document.querySelector('#userName')
var upload = document.querySelector('#upload')
var btn = document.querySelector('#btn')
btn.addEventListener('click', function () {
  var { files } = upload
  var xhr = new XMLHttpRequest()
  xhr.open('post', 'http://localhost:3000/upload')
  // Multipart: Boundary not found 需要删除 xhr.setRequestHeader('content-type', 'multipart/form-data')
  // Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryAzJBCLKFVIudWCqK
  var formData = new FormData()
  // 遍历files 多次append
  const list = [...files]
  list.forEach(file => {
    formData.append('file', file)
  })
  formData.append('userName', userName.value)
  formData.append('companyName', companyName.value)
  xhr.send(formData)
  xhr.onreadystatechange = function (e) {
    if (this.readyState === 4) {
      console.log(this.responseText)
    }
  }
})
```

## 3. `axios` 请求

此处额外说明一下 `axios` 源码当中对于 `FormData` 的处理。

```js
if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
  delete requestHeaders['Content-Type']; // Let the browser set it
}
```

`axios` 在检测到 `requestData` 是 `FormData` 的实例并且是在浏览器环境下，则会删除请求头中的 `Content-Type`。

## 4.分片上传

## 5.断点续传
