---
title: Compiler
---

在 `Vue` 中，提供了 `template` 选项。

它允许我们像书写 `HTML` 结构一样，编写基础的 `Vue` 模板语法。

除此以外，`template` 模板还支持**属性绑定**、**事件绑定**、**指令**等等。

## 编译流程

事实上，**`template` 并非 `HTML`，它其实是 `render` 函数的变种，`Vue` 以一种可见的方式呈现在我们面前**。

```
`template` 模板字符串
↓
`parse` (解析) → `AST`
↓
`optimize` (优化) → 优化后的 `AST`，标记静态节点
↓
`codegen` (代码生成) → `render` 字符串
↓
`to-function` (转换函数) → `render` 函数
```

## 通用编译

另外，本节中的 `compiler` 是**通用编译**，也就是说**这是一套基础库，它不会涉及到具体平台中的属性处理，但它预留了配置，供跨平台自调用**。

举例说明，假设 `template` 结构如下：

```js
export const template = `<div
  class="container"
  style="color: red"
  v-if="isShow"
  :class="className"
  :style="style"
  :[dynamic]="dynamic"
  @click="handleClick"
  @confirm.stop.prevent="handleConfirm"
  @[event]="handleEvent"
  v-model="value"
  v-html="html"
>
  <span>static</span>
  <span>{{ name }}</span>
  <span>{{ msg | convert }}</span>
</div>`
```

那么**单独**的 `compiler` 解析之后（**即 `baseOptions` 为空对象时**）会存在如下 `AST` 结构:

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20241112202428.png)

`Vue` 在 `platform` 中专门划分了 `web` 平台，当我们传入 `web` 平台定义的编译 `baseOptions`，执行结果如下：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20241112202332.png)

在此例中对比，可以发现，`web compiler` 结果比 `compiler` 结果中多了 `model`、`staticClass`、`staticStyle`、`classBinding` 以及 `styleBinding`。
