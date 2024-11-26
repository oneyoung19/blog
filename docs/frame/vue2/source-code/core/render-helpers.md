---
title: 渲染工具函数
---

在 `Vue` 中会注入以下渲染工具函数：

```ts
function installRenderHelpers(target: any) {
  target._o = markOnce
  target._n = toNumber
  target._s = toString
  target._l = renderList
  target._t = renderSlot
  target._q = looseEqual
  target._i = looseIndexOf
  target._m = renderStatic
  target._f = resolveFilter
  target._k = checkKeyCodes
  target._b = bindObjectProps
  target._v = createTextVNode
  target._e = createEmptyVNode
  target._u = resolveScopedSlots
  target._g = bindObjectListeners
  target._d = bindDynamicKeys
  target._p = prependModifier
}
```

## 1.markOnce

`markOnce` 即 `_o`。

**该函数只会包裹处理 `v-for` 循环中的 `v-once` 节点**。

譬如有如下 `template`：

```html
<div>
  <div v-for="item in list" :key="item">
    <div v-once>{{ once }}</div>
  </div>
  <div v-once>{{ once2 }}</div>
</div>
```

其中的 `once2` 节点会直接当做 `static` 节点，用 `_m` 包裹，而 `v-for` 中的 `once` 节点则是用 `_o` 包裹。

我们将上述 `template` 解析为 `render` 字符串的话，会得到如下结果：

```json
{
  "render": "with(this){return _c('div',[_l((list),function(item){return _c('div',{key:item},[_o(_c('div',[_v(_s(once))]),0,item)],1)}),_v(\" \"),_m(0)],2)}",
  "staticRenderFns": ["with(this){return _c('div',[_v(_s(once2))])}"]
}
```

当我们知道上述结论之后，那么 `markOnce` 的作用就是对 `v-for` 循环中的 `v-once` 节点做额外标记：

```ts
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
export function markOnce(
  tree: VNode | Array<VNode>,
  index: number,
  key: string
) {
  markStatic(tree, `__once__${index}${key ? `_${key}` : ``}`, true)
  return tree
}

function markStatic(tree: VNode | Array<VNode>, key: string, isOnce: boolean) {
  if (isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], `${key}_${i}`, isOnce)
      }
    }
  } else {
    markStaticNode(tree, key, isOnce)
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true
  node.key = key
  node.isOnce = isOnce
}
```

## 2.toNumber

`toNumber` 即 `_n`。

**该函数用来做数字类型转化**。

```ts
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
export function toNumber(val: string): number | string {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}
```

## 3.toString

`toString` 即 `_s`。

**该函数用来做字符串类型转化**。

```ts
/**
 * Convert a value to a string that is actually rendered.
 */
export function toString(val: any): string {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
    ? JSON.stringify(val, replacer, 2)
    : String(val)
}

function replacer(_key: string, val: any): any {
  // avoid circular deps from v3
  if (val && val.__v_isRef) {
    return val.value
  }
  return val
}
```

## 4.renderList

`renderList` 即 `_l`。

**该函数用来渲染列表**。

```ts
/**
 * Runtime helper for rendering v-for lists.
 */
export function renderList(
  val: any,
  render: (val: any, keyOrIndex: string | number, index?: number) => VNode
): Array<VNode> | null {
  let ret: Array<VNode> | null = null,
    i,
    l,
    keys,
    key
  if (isArray(val) || typeof val === 'string') {
    ret = new Array(val.length)
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i)
    }
  } else if (typeof val === 'number') {
    ret = new Array(val)
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i)
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = []
      const iterator: Iterator<any> = val[Symbol.iterator]()
      let result = iterator.next()
      while (!result.done) {
        ret.push(render(result.value, ret.length))
        result = iterator.next()
      }
    } else {
      keys = Object.keys(val)
      ret = new Array(keys.length)
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i]
        ret[i] = render(val[key], key, i)
      }
    }
  }
  if (!isDef(ret)) {
    ret = []
  }
  ;(ret as any)._isVList = true
  return ret
}
```

## 5.renderSlot

`renderSlot` 即 `_t`。

**该函数用来渲染 `<slot>` 插槽**。

```ts
/**
 * Runtime helper for rendering <slot>
 */
export function renderSlot(
  name: string,
  fallbackRender: ((() => Array<VNode>) | Array<VNode>) | null,
  props: Record<string, any> | null,
  bindObject: object | null
): Array<VNode> | null {
  const scopedSlotFn = this.$scopedSlots[name]
  let nodes
  if (scopedSlotFn) {
    // scoped slot
    props = props || {}
    if (bindObject) {
      if (__DEV__ && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this)
      }
      props = extend(extend({}, bindObject), props)
    }
    nodes =
      scopedSlotFn(props) ||
      (isFunction(fallbackRender) ? fallbackRender() : fallbackRender)
  } else {
    nodes =
      this.$slots[name] ||
      (isFunction(fallbackRender) ? fallbackRender() : fallbackRender)
  }

  const target = props && props.slot
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}
```

## 6.looseEqual

`looseEqual` 即 `_q`。

**该函数用来宽松的比较两个值是否相等**。

```ts
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
export function looseEqual(a: any, b: any): boolean {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every((e: any, i: any) => {
            return looseEqual(e, b[i])
          })
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return (
          keysA.length === keysB.length &&
          keysA.every(key => {
            return looseEqual(a[key], b[key])
          })
        )
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e: any) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
```

## 7.looseIndexOf

`looseIndexOf` 即 `_i`。

**该函数用来宽松的获取索引**。

```ts
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
export function looseIndexOf(arr: Array<unknown>, val: unknown): number {
  for (let i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) return i
  }
  return -1
}
```

## 8.renderStatic

`renderStatic` 即 `_m`。

**该函数用来渲染 `static` 静态节点**。

1. 缓存静态树：
  - 函数维护了一个 `_staticTrees` 数组来缓存已经渲染过的静态树
  - 通过 `index` 参数来索引不同的静态树
2. 优化性能：
  - 如果某个静态树已经被渲染过（即在缓存中存在），并且不是在 `v-for` 循环中使用（`isInFor` 为 `false`），就直接返回缓存的树，避免重复渲染
  - 这种缓存机制可以显著提高性能，因为静态内容不需要重新创建 `VNode`
3. 渲染新树：
  - 如果缓存中没有，或者是在 `v-for` 中使用，就会重新渲染一个新的树
  - 使用 `staticRenderFns` 来生成新的 `VNode` 树
  - 生成后会用 `markStatic` 标记这个树为静态内容

```ts
/**
 * Runtime helper for rendering static trees.
 */
export function renderStatic(
  index: number,
  isInFor: boolean
): VNode | Array<VNode> {
  const cached = this._staticTrees || (this._staticTrees = [])
  let tree = cached[index]
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    this._c,
    this // for render fns generated for functional component templates
  )
  markStatic(tree, `__static__${index}`, false)
  return tree
}
```

## 9.resolveFilter

`resolveFilter` 即 `_f`。

**该函数用来解析过滤器**。

```ts
/**
 * Runtime helper for resolving filters
 */
export function resolveFilter(id: string): Function {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/**
 * Return the same value.
 */
export const identity = (_: any) => _
```

## 10.checkKeyCodes

`checkKeyCodes` 即 `_k`。

**该函数用来检测键盘码值**。

```ts
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
export function checkKeyCodes(
  eventKeyCode: number,
  key: string,
  builtInKeyCode?: number | Array<number>,
  eventKeyName?: string,
  builtInKeyName?: string | Array<string>
): boolean | null | undefined {
  const mappedKeyCode = config.keyCodes[key] || builtInKeyCode
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}
```

## 11.bindObjectProps

`bindObjectProps` 即 `_b`。

**该函数用来处理 `v-bind` 绑定的对象，并将其正确解析**。

譬如有如下 `template`：

```html
<template>
  <!-- 这样的绑定 -->
  <input v-bind="{ value: msg, 'data-test': 'foo' }" :sync="true">
</template>
```

会被解析为：

```js
{
  domProps: { value: msg },        // value 是 DOM 属性
  attrs: { 'data-test': 'foo' },   // data-test 是 HTML 属性
  on: {
    'update:value': ($event) => { msg = $event }  // 双向绑定处理器
  }
}
```

```ts
/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
export function bindObjectProps(
  data: any,        // VNode 的数据对象
  tag: string,      // 标签名称
  value: any,       // v-bind 绑定的值
  asProp: boolean,  // 是否作为 DOM 属性处理
  isSync?: boolean  // 是否需要双向绑定
): VNodeData {
  if (value) {
    // 检查值是否为对象或数组
    if (!isObject(value)) {
      // 开发环境下发出警告
      __DEV__ && warn('v-bind without argument expects an Object or Array value', this)
    } else {
      // 如果是数组，转换为对象
      if (isArray(value)) {
        value = toObject(value)
      }
      
      let hash
      for (const key in value) {
        // 特殊属性处理：class、style 和保留属性直接放入 data
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data
        } else {
          // 获取元素的 type 属性
          const type = data.attrs && data.attrs.type
          // 决定属性放在 domProps 还是 attrs 中
          hash =
            asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {}) // DOM 属性
              : data.attrs || (data.attrs = {})       // HTML 属性
        }

        // 生成属性的驼峰式和连字符式名称
        const camelizedKey = camelize(key)    // 例如：my-prop → myProp
        const hyphenatedKey = hyphenate(key)  // 例如：myProp → my-prop

        // 如果属性不存在（两种形式都检查），则添加该属性
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key]

          // 处理双向绑定
          if (isSync) {
            // 创建或获取事件对象
            const on = data.on || (data.on = {})
            // 添加 update:属性名 事件处理器
            on[`update:${key}`] = function ($event) {
              value[key] = $event
            }
          }
        }
      }
    }
  }
  return data
}
```

## 12.createTextVNode

`createTextVNode` 即 `_v`。

**该函数用来创建文本虚拟节点**。

```ts
export function createTextVNode(val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val))
}
```

## 13.createEmptyVNode

`createEmptyVNode` 即 `_v`。

**该函数用来创建空虚拟节点，也可以称作注释节点**。

注释节点会在实际的 `DOM` 中渲染成 `HTML` 注释节点：

```html
<!-- -->
```

如果设置了 text 参数，则会显示为：

```html
<!-- text内容 -->
```

这种注释节点在 `Vue` 中有几个重要用途：

1. 作为占位符：
  - 当使用 `v-if` 且条件为 `false` 时
  - 异步组件未加载完成时

2. 作为标记点：
  - 帮助 `Vue` 在 `DOM` 更新时定位特定位置
  - 在服务器端渲染 `SSR` 中标记动态内容的位置

```ts
export const createEmptyVNode = (text: string = '') => {
  const node = new VNode()
  node.text = text
  node.isComment = true
  return node
}
```

## 14.resolveScopedSlots

`resolveScopedSlots` 即 `_u`。

**该函数用于解析 `scopedSlots`**。

假设有如下 `template`：

```html
<HelloWorld>
  <template v-slot:default>123</template>
  <template v-slot:scope="slotScope">
    {{ slotScope }}
  </template>
</HelloWorld>
```

经过解析之后，转化为如下 `render` 函数：

```js
_c("HelloWorld", {
  scopedSlots: _u(
    [
      {
        key: "default",
        fn: function() {
          return [_v("123")];
        },
        proxy: true,
      },
      {
        key: "scope",
        fn: function(slotScope) {
          return [_v("\\n      " + _s(slotScope) + "\\n    ")];
        },
      },
    ],
    null,
    false,
    4125560985
  ),
});
```

当经过 `_u` 即 `resolveScopedSlots` 处理之后：

```js
fn: function(slotProps) {
  return createElement('div', { class: 'item' }, [slotProps.item.name])
}

{
  scopedSlots: {
    $stable: true,
    $key: 4125560985,
    'default': function() {
      return [_v("123")];
    },
    scope: function(slotScope) {
      return [_v("\\n      " + _s(slotScope) + "\\n    ")];
    }
  }
}
```

```ts
export function resolveScopedSlots(
  fns: ScopedSlotsData,
  res?: Record<string, any>,
  // the following are added in 2.6
  hasDynamicKeys?: boolean,
  contentHashKey?: number
): { $stable: boolean } & { [key: string]: Function } {
  res = res || { $stable: !hasDynamicKeys }
  for (let i = 0; i < fns.length; i++) {
    const slot = fns[i]
    if (isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys)
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      // @ts-expect-error
      if (slot.proxy) {
        // @ts-expect-error
        slot.fn.proxy = true
      }
      res[slot.key] = slot.fn
    }
  }
  if (contentHashKey) {
    ;(res as any).$key = contentHashKey
  }
  return res as any
}
```

## 15.bindObjectListeners

`bindObjectListeners` 即 `_g`。

**该函数用于绑定对象形式的事件监听器**。譬如 `v-on=myEvents`。

假设有如下 `template`：

```vue
<template>
  <button class="btn" @click="handleMyClick" v-on="myEvents">Click me</button>
</template>

<script>
export default {
  data() {
    return {
      myEvents: {
        click: this.handleClick,
        mouseenter: this.handleMouseEnter
      }
    }
  },
  methods: {
    handleMyClick() {
      console.log('MyClick')
    },
    handleClick() {
      console.log('clicked')
    },
    handleMouseEnter() {
      console.log('mouse entered')
    }
  }
}
</script>
```

`template` 模板在编译时，会执行如下代码：

```js
export default function on(el: ASTElement, dir: ASTDirective) {
  // "_g(_c('button', { class: 'btn' }), myEvents)"
  el.wrapListeners = (code: string) => `_g(${code},${dir.value})`
}
```

因此最终的实际 `render` 函数为：

```js
// 简化版的渲染函数
render() {
  return _g(
    // code: VNode 的基础数据
    {
      on:{
        "click":handleMyClick
      }
    },
    // dir.value: 就是 this.myEvents
    this.myEvents
  )
}
```

当执行 `bindObjectListeners` 之后，最终结果为：

```js
{
  tag: 'button',
  on: {
    click: function handleClick() { console.log('clicked') },
    mouseenter: function handleMouseEnter() { console.log('mouse entered') }
  }
  // ... 其他数据
}
```

```ts
export function bindObjectListeners(data: any, value: any): VNodeData {
  if (value) {
    if (!isPlainObject(value)) {
      __DEV__ && warn('v-on without argument expects an Object value', this)
    } else {
      const on = (data.on = data.on ? extend({}, data.on) : {})
      for (const key in value) {
        const existing = on[key]
        const ours = value[key]
        on[key] = existing ? [].concat(existing, ours) : ours
      }
    }
  }
  return data
}
```

## 16.bindDynamicKeys

`bindDynamicKeys` 即 `_d`。

**该函数用来绑定动态键**。

假如有如下 `template`：

```html
<div id="app" :[key1]="value1" :[key2]="value2" @[event1]="handleEvent1" @[event2]="handleEvent2""></div>
```

以上 `template` 转化为 `render` 函数如下：

```js
function render () {
  with (this) {
    return _c('div', _b({
      attrs: {
        "id": "app"
      },
      on: _d({}, [event1, handleEvent1, event2, handleEvent2])
    }, "div", _d({}, [key1, value1, key2, value2])))
  }
}
```

```ts
export function bindDynamicKeys(
  baseObj: Record<string, any>,
  values: Array<any>
): Object {
  for (let i = 0; i < values.length; i += 2) {
    const key = values[i]
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1]
    } else if (__DEV__ && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        `Invalid value for dynamic directive argument (expected string or null): ${key}`,
        this
      )
    }
  }
  return baseObj
}
```

## 17.prependModifier

`prependModifier` 即 `_p`。

**该函数用来动态处理事件修饰符**。

假设有如下 `template`：

```html
<button @[eventName].once="handleClick">
<!-- 转换后内部表示为 _p(eventName,"~") -->
```

```ts
// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
export function prependModifier(value: any, symbol: string): any {
  return typeof value === 'string' ? symbol + value : value
}
```
