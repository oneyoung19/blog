---
title: 开始
---

`Vite` 是一种前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：

1. **一个开发服务器**，它基于原生 `ES` 模块提供了丰富的内建功能，如模块热更新（`HMR`）。

2. **一套构建指令**，它使用 `Rollup` 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

`Vite` 是**开箱即用**的，它已经内置了对于静态资源的处理和其他配置。

## 创建项目

可以直接执行下述命令，根据提示进行项目初始化：

```shell
npm create vite@latest

yarn create vite

pnpm create vite
```

也可以通过附加的命令行选项直接指定项目名称和想要使用的模板：

```shell
# npm 7+, 需要额外加 --:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue
```
