---
title: FormData
---

本节是关于 `FormData` 的详细介绍。

创建一个 `FormData` 实例，控制台打印如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/006y8mN6ly1h6rb5sfjjxj318o0i640y.jpg)

:::tip
可以看出，`FormData` 原型对象的设计与 `URLSearchParams` 原型独享非常类似。

具有一系列操作方法，还有一系列可迭代方式。
:::

最常用的使用方式如下：

```js
var formData = new FormData()
console.log(formData)
// 添加键值对形式的name和value
formData.append(name, value)
// 常见于文件上传，可利用该语法添加file对象
formData.append(name, blob, [fileName])
```

:::tip
由于表单可能包含多个含有 `name` 的字段（譬如多选下拉框或者复选按钮），

因此，`append` 的设计为满足此场景而生，多次调用 `append` 将会添加多个具有相同名称的字段。
:::

此外，与 `append` 方法相对的是 `set` 方法。

**`set` 方法的调用将会覆盖同名属性，而不是追加**。

```js
formData.set(name, value)
formData.set(name, blob, [fileName])

// 移除带有给定name的字段
formData.delete(name)
// 获取带有给定name的字段
formData.get(name)
// 检测是否存在给定name的字段
formData.has(name)
```

实际开发中，通常会利用 `FormData` （即 `multipart/formdata`）上传文件至服务端：

```js
var fileUpload = document.querySelector('#file-upload')

fileUpload.onchange = function (e) {
  var file = e.target.files[0]
  var formData = new FormData()
  formData.append('fileSliceId', +new Date())
  formData.append('file', file)
  fetch('http://127.0.0.1:3000/upload', {
    method: 'POST',
    headers: {
    },
    body: formData
  }).then(async res => {
    console.log(await res.text())
  })
}
```

