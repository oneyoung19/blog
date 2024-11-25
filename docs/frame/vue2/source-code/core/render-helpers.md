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

## 10.checkKeyCodes

## 11.bindObjectProps

## 12.createTextVNode

## 13.createEmptyVNode

## 14.resolveScopedSlots

## 15.bindObjectListeners

## 16.bindDynamicKeys

## 17.prependModifier
