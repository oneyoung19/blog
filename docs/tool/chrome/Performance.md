---
title: Performance
---

## 1.Chrome devtools - Performance

[全新Chrome Devtool Performance使用指南](https://zhuanlan.zhihu.com/p/29879682)
### 1-1.FPS

`frames per second` 每秒帧数，也可以看做屏幕刷新率。

动画通常不低于 `60fps`，会比较流畅。

而电影一般为 `24fps`。

### 1-2.CPU

`central processing Unit` 中央处理器

`CPU` 运行速率越高，处理速率会越快。

### 1-3.Network

资源加载顺序

### 1-4.Main

主线程 `Main thread`。

可以看到许多 `Task` 任务。

同时，此处也是梳理 `CRP` 的核心作用区域。

`CRP` 即 `Critical Rendering Path`，[关键渲染路径](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)。

- `DOM`
- `CSSOM`
- `Render Tree`
- `Layout`
- `Paint`

## 2.CRP

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/npkz3z.png)

1. 浏览器会将HTML解析成一个 `DOM` 树，`DOM` 树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。
2. 将 `CSS` 解析成 `CSS Rule Tree` 。 
3. 根据 `DOM` 树和 `CSSOM` 来构造 `Rendering Tree`。注意：`Rendering Tree` 渲染树并不等同于 `DOM` 树，因为一些像 `Header` 或 `display:none` 的东西就没必要放在渲染树中了。
4. 有了 `Render Tree`，浏览器已经能知道网页中有哪些节点、各个节点的 `CSS` 定义以及他们的从属关系。下一步操作称之为 `Layout`，顾名思义就是计算出每个节点在屏幕中的位置。
5. 再下一步就是绘制，即遍历 `render` 树，并使用 `UI` 后端层绘制每个节点。

上述这个过程是**逐步完成**的（因为浏览器解析是单线程的），**为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的 `html` 都解析完成之后再去构建和布局 `render` 树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容**。

[How Browsers work](https://kb.cnblogs.com/page/129756/)
[从输入URL到页面加载完成的过程中发生了什么？](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)
[浏览器工作原理](https://github.com/amandakelake/blog/issues/55)

### 2-1.重排与重绘

重排，即 `reflow`。也被称作回流。

重绘，即 `repaint`。

[Jank Animation Demo](https://googlechrome.github.io/devtools-samples/jank/)

[掘金-重排(reflow)和重绘(repaint)](https://juejin.cn/post/6844904083212468238)

[重排(reflow)的触发时机](https://web.dev/avoid-large-complex-layouts-and-layout-thrashing/#avoid-forced-synchronous-layouts)

### 2-2.避免重排与重绘

1. 避免 `DOM` 的回流。也就是尽量避免重排和重绘操作。
   减少 `JavaScript` 脚本执行时间。有时 `JavaScript` 函数的一次执行时间可能有几百毫秒，这就严重霸占了主线程执行其他渲染任务的时间。针对这种情况我们可以采用以下两种策略：
   
   一种是将一次执行的函数分解为多个任务，使得每次的执行时间不要过久。[Optimize long tasks](https://web.dev/optimize-long-tasks/)
   
   另一种是采用 `Web Workers`。

2. `DOM` 操作相关的优化。
   浏览器有渲染引擎和 `JS` 引擎，所以当用 `JS` 操作 `DOM` 时，这两个引擎要通过接口互相“交流”，因此每一次操作 `DOM`（包括只是访问 `DOM` 的属性），都要进行引擎之间解析的开销，所以常说要减少 `DOM` 操作。总结下来有以下几点：

3. 缓存一些计算属性，如 `let left = el.offsetLeft`。
4. 通过 `DOM` 的 `class` 来集中改变样式，而不是通过 `style` 一条条的去修改。
5. 分离读写操作。现代的浏览器都有渲染队列的机制。
6. 放弃传统操作 `DOM` 的时代，基于 `vue/react` 等采用 `virtual dom` 的框架。
7. 合理利用 `CSS` 合成动画。合成动画是直接在合成线程上执行的，这和在主线程上执行的布局、绘制等操作不同，如果主线程被 `JavaScript` 或者一些布局任务占用，`CSS` 动画依然能继续执行。所以要尽量利用好 `CSS` 合成动画，如果能让 `CSS` 处理动画，就尽量交给 `CSS` 来操作。
8.  `CSS` 选择器优化。我们知道 `CSS` 引擎查找是从右向左匹配的。所以基于此有以下几条优化方案：
- 尽量不要使用通配符
- 少用标签选择器
- 尽量利用属性继承特性
- `CSS` 属性优化。浏览器绘制图像时，`CSS` 的计算也是耗费性能的，一些属性需浏览器进行大量的计算，属于昂贵的属性（`box-shadows`、`border-radius`、`transforms`、`filters`、`opcity`、`:nth-child` 等），这些属性在日常开发中经常用到，所以并不是说不要用这些属性，而是在开发中，如果有其它简单可行的方案，那可以优先选择没有昂贵属性的方案。
9. 避免频繁的垃圾回收。我们知道 `JavaScript` 使用了自动垃圾回收机制，如果在一些函数中频繁创建临时对象，那么垃圾回收器也会频繁地去执行垃圾回收策略。这样当垃圾回收操作发生时，就会占用主线程，从而影响到其他任务的执行，严重的话还会让用户产生掉帧、不流畅的感觉。

## 3.Page Life Cycle

页面性能指标节点：

- `FP` [First Paint](https://stackoverflow.com/questions/61816232/how-to-measure-first-paint-fp)
- `FCP` [First Contentful Paint](https://web.dev/i18n/zh/fcp/)
- `LCP` [Largest Contentful Paint](https://web.dev/i18n/zh/lcp/)


| Document.readyState状态 |                           DOM事件                            |                             |
| :---------------------: | :----------------------------------------------------------: | --------------------------- |
|         loading         |                                                              |                             |
|       interactive       |                                                              |                             |
|                         | [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) (HTML文档加载完毕 其他静态资源链接正在加载) |                             |
|                         |                                                              | 属性为defer的script脚本执行 |
|        complete         |                                                              |                             |
|                         |                   load（页面完全加载完毕）                   |                             |

## 5.template多页面脚手架开发环境

背景：

`jquery` 结合 `template` 模板的多页面项目。

现象：

在开发环境下，页面加载渲染时，会先出现 **布局变形**，然后回归正常。

而生产环境下，展示正常。

有一种比较学术的说法是**累计布局偏移**，`Cumulative Layout Shift` 简称为 `CLS`。

该指标极大程度上影响用户体验。

经过一番调试发现，`template` 多页面应用在生产环境下的打包结果，与开发环境并不一致。

主要点是 `CSS` 的加载时机不一致。

在开发环境下，`webpack` 使用的是 `style-loader`，这样 `CSS` 会打包进页面底部的 `JS` 中，然后 `JS` 创建 `<style>` 标签，添加到 `<head>` 标签中。

可想而知，页面加载时，先 `parse HTML`，结合 `user agent style` 形成页面基本结构。执行到底部 `<script>` 后，拉取脚本并创建 `<style>`，此时会发生 **重排**。因此页面的表现，会先变形，然后回复正常。

而在生产环境下，`webpack` 使用的是 `mini-css-extract-plugin`，这样 `CSS` 在构建结束之后，会由 `<link>` 标签插入到 `<head>` 标签中。

这种情形下，页面加载时，先 `parse HTML`，然后 `recalcute style`，之后 `layout => pre-paint => paint`。这个过程很快，因此用户感知不到 `layout` 偏移。

在上述过程结束之后，继续 `parse HTML`，逐步执行 `<script>`，这时有可能发生**重排**或者**重绘**。

:::tip
要注意的一点是，浏览器并不会等到完全 `parse HTML` 之后，再去 `layout`、`paint` 等。而是逐段 `parse HTML`，尽可能提前展示给用户一部分页面。

这对于用户体验，无疑是一种优化。
:::

关于 `vue` 等单页面应用的开发环境，并无上述问题。笔者认为单页面应用的 `HTML DOM` 结构，本身是由 `JS` 生成的。因此在执行时机上是有差异。

譬如单页面应用的开发环境，也是先 `parse HHTML`，但此时页面中只有 `<div id="app"></div>` 这样的结构，只有等执行到 `<script>` 才会创建 `DOM` 以及 `<style>` 标签。
