在梳理具体的响应式之前，可以从官网上的这张图一窥整体逻辑：

![reactive](./image/reactive.png)

从上图中，抛却 `UI` 部分，我们可以将响应式核心逻辑拆分为以下几个部分：

1. 数据劫持
2. 依赖收集
3. 依赖触发

事实上，`Vue` 的核心代码就是围绕着这三部分展开的：

```js
import { observe } from '../observer/index'
import Watcher from '../observer/watcher'

const data1 = {
  msg: 'data1'
}
const data2 = {
  msg: 'data2'
}

// 数据劫持
observe(data1)
observe(data2)

// 依赖收集、依赖触发
new Watcher(null, () => data1.msg + data2.msg, (value) => {
  console.log('value', value)
})
```

简单整理一下上述代码的逻辑：

1. 数据劫持：`observe` 函数对数据进行劫持，为每个数据添加 `getter` 和 `setter`。
2. 依赖收集：`Watcher` 类在创建时，会调用 `get` 方法，在 `get` 方法中，会调用 `pushTarget` 将当前 `Watcher` 实例添加到 `Dep.target` 中，然后调用 `getter` 方法，在 `getter` 方法中，会调用 `Dep.depend` 方法，将当前 `Watcher` 实例添加到 `Dep` 的 `subs` 数组中。
3. 依赖触发：当数据发生变化时，会调用 `setter` 方法，在 `setter` 方法中，会调用 `Dep.notify` 方法，遍历 `Dep` 的 `subs` 数组，调用每个 `Watcher` 实例的 `update` 方法，最终调用 `run` 方法，执行回调函数。
