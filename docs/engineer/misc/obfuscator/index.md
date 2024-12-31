---
title: Debugger & Obfuscator
---

本节项目源码可见[learn-js-obfuscator](https://github.com/oneyoung19/learn-js-obfuscator)。

## 1.Debugger

**防止生产代码在控制台中被 `debugger` 调试**。

:::tip
**注意，前端防止 `debugger`，只是在一定程度上阻拦调试，并不能完全阻止**。

譬如 `chrome` 浏览器能通过 `sources => Override content` 来覆盖。
:::

1. **基础形式**

*这种形式依然能够在代码中直接看到，而不是创建了 `VM`*。

```js
(() => {
  function ban () {
    setInterval(() => {
      debugger
    }, 50)
  }
  try {
    ban()
  } catch (err) {}
})()
```

2. **进阶1**

*利用 `Function` 创建 `VM`*。

```js
(() => {
  function ban () {
    setInterval(() => {
      // eslint-disable-next-line
      Function('debugger')()
    }, 50)
  }
  try {
    ban()
  } catch (err) {}
})()
```

3. **进阶2**

*更改 `Function('debugger'){}` 的写法*。

```js
(() => {
  function ban () {
    setInterval(() => {
      (function () {
        return false
      })
        .constructor('debugger')
        .call()
    }, 50)
  }
  try {
    ban()
  } catch (err) {}
})()
```

有兴趣的话，可以研究一下[disable-devtool](https://www.npmjs.com/package/disable-devtool)。

上述库提供了更加细致的控制 `devtool` 方法。

①参考文档：

- [禁止别人调试自己的前端页面代码](https://juejin.cn/post/7262175454714626108)

- [“绕过”前端反调试](https://juejin.cn/post/7283776161527578661)

②禁止调试的第三方网站：

- [js-object-to-json](https://tooltt.com/js-object-to-json/)
- [文心一言](https://yiyan.baidu.com/)

## 2.Obfuscator

**混淆生产代码**。

对于 `Javascript` 混淆，可以使用 [webpack-obfuscator](https://www.npmjs.com/package/webpack-obfuscator)。

另外由于 `webpack-obfuscator` 依赖 [javascript-obfuscator](https://www.npmjs.com/package/javascript-obfuscator)，所以我们在此处声明下各自在不同 `webpack` 版本下的版本：

`webpack4`:

- [webpack-obfuscator@^2.6.0](https://www.npmjs.com/package/webpack-obfuscator/v/2.6.0)
- [javascript-obfuscator@^2.6.0](https://www.npmjs.com/package/javascript-obfuscator/v/2.6.0)

`webpack5`:

- [webpack-obfuscator@^3.5.1](https://www.npmjs.com/package/webpack-obfuscator/v/3.5.1)
- [javascript-obfuscator@^4.1.1](https://www.npmjs.com/package/javascript-obfuscator/v/4.1.1)

**Before obfuscator**：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20240715162016.png)

**After obfuscator**：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20240715163247.png)

## 3.webpack-obfuscator

可以配置 `plugins`（**推荐**）：

```js
const WebpackObfuscator = require('webpack-obfuscator')

module.exports = {
  plugins: [
    new WebpackObfuscator ({
      rotateStringArray: true
    }, ['excluded_bundle_name.js'])
  ]
}
```

也可以配置 `rules`:

```js
const WebpackObfuscator = require('webpack-obfuscator')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, 'excluded_file_name.js')
        ],
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true
          }
        }
      }
    ]
  }
}
```
