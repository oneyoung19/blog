---
title: inject
---

## 1.initProvide

当实例化时会先执行 `vm._provided = parent ? parent._provided : Object.create(null)`，

也就是组件的默认 `_provided` 取的是父组件的 `_provided` 或者是个空对象。

当正式初始化 `provide` 时，会先解析 `provide`，如果和父组件的 `_provided` 一样，则会利用**原型链**进行继承。

然后利用组件定义的 `provideOption` 对 `provide` 进行定向配置（**利用了 `Object.defineProperty` 以及 `Object.getOwnPropertyDescriptor`**）。

```ts
export function initProvide(vm: Component) {
  const provideOption = vm.$options.provide
  if (provideOption) {
    const provided = isFunction(provideOption)
      ? provideOption.call(vm)
      : provideOption
    if (!isObject(provided)) {
      return
    }
    const source = resolveProvided(vm)
    // IE9 doesn't support Object.getOwnPropertyDescriptors so we have to
    // iterate the keys ourselves.
    const keys = hasSymbol ? Reflect.ownKeys(provided) : Object.keys(provided)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      Object.defineProperty(
        source,
        key,
        Object.getOwnPropertyDescriptor(provided, key)!
      )
    }
  }
}

export function resolveProvided(vm: Component): Record<string, any> {
  const existing = vm._provided
  const parentProvides = vm.$parent && vm.$parent._provided
  if (parentProvides === existing) {
    return (vm._provided = Object.create(parentProvides))
  } else {
    return existing
  }
}
```

## 2.为什么利用defineProperty和getOwnPropertyDescriptor

使用 `Object.defineProperty` 和 `Object.getOwnPropertyDescriptor` 的组合是为了完整地复制属性的所有特性（`property descriptors`），而不仅仅是值。

1. **属性描述符包含的信息**：
```js
// 一个属性可能包含以下特性
{
  value: any,           // 属性值
  writable: boolean,    // 是否可写
  enumerable: boolean,  // 是否可枚举
  configurable: boolean,// 是否可配置
  get: function(),      // getter
  set: function()       // setter
}
```

2. **如果直接赋值的问题**：
```js
// 如果直接赋值，只会复制值，会丢失其他特性
source[key] = provided[key] // ❌ 这样做会丢失原属性的特性
```

3. **使用 Object.defineProperty 的正确方式**：
```ts
// 完整地复制所有属性特性
Object.defineProperty(
  source,
  key,
  Object.getOwnPropertyDescriptor(provided, key)! // ✅ 保留所有原属性特性
)
```

这样做的好处是：

1. **保留 getter/setter**：如果原属性是通过 getter/setter 定义的，这些访问器会被正确地复制
2. **保留属性特性**：writable、enumerable、configurable 等特性会被完整保留
3. **保持响应式**：如果原属性是响应式的，这种方式可以保持其响应式特性


## 3.initInjections

`resolveInject` 的逻辑就是根据 `inject` 对象定义，从 `provide` 中获取对应的值。

TODO:为什么在获取 `provide` 时利用了 `Object.defineProperty`，而设置 `inject` 时则是重新设置响应式了？？

```ts
export function initInjections(vm: Component) {
  const result = resolveInject(vm.$options.inject, vm)
  if (result) {
    toggleObserving(false)
    Object.keys(result).forEach(key => {
      /* istanbul ignore else */
      if (__DEV__) {
        defineReactive(vm, key, result[key], () => {
          warn(
            `Avoid mutating an injected value directly since the changes will be ` +
              `overwritten whenever the provided component re-renders. ` +
              `injection being mutated: "${key}"`,
            vm
          )
        })
      } else {
        defineReactive(vm, key, result[key])
      }
    })
    toggleObserving(true)
  }
}

export function resolveInject(
  inject: any,
  vm: Component
): Record<string, any> | undefined | null {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    const result = Object.create(null)
    const keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      // #6574 in case the inject object is observed...
      if (key === '__ob__') continue
      const provideKey = inject[key].from
      if (provideKey in vm._provided) {
        result[key] = vm._provided[provideKey]
      } else if ('default' in inject[key]) {
        const provideDefault = inject[key].default
        result[key] = isFunction(provideDefault)
          ? provideDefault.call(vm)
          : provideDefault
      } else if (__DEV__) {
        warn(`Injection "${key as string}" not found`, vm)
      }
    }
    return result
  }
}
```
