---
title: ref&reactive
---

`Vue 2` 和 `Vue 3` 中基本类型的响应式差异：

## 1. **Vue 2 中的基本类型**

```javascript
// Vue 2 组件
export default {
  data() {
    return {
      count: 0,  // 基本类型
      user: {    // 对象类型
        name: 'Tom'
      }
    }
  },
  methods: {
    increment() {
      // 这是响应式的，因为count是data对象的属性
      this.count++
      
      // 这也是响应式的
      this.user.name = 'Jerry'
    }
  }
}
```

在 Vue 2 中，基本类型是响应式的，**但必须作为 data 对象的属性**。

## 2. **Vue 2 中的局限**

```javascript
// Vue 2 组件
export default {
  data() {
    return {
      state: {
        count: 0
      }
    }
  },
  methods: {
    handleClick() {
      // ❌ 解构后失去响应式
      let { count } = this.state
      count++ // 这个修改不会触发视图更新
      
      // ✅ 必须这样写才能保持响应式
      this.state.count++
    },
    
    async fetchData() {
      // ❌ 在异步函数或其他方法中想要一个响应式的基本类型很困难
      let count = 0
      setInterval(() => {
        count++ // 这个修改不会触发视图更新
      }, 1000)
    }
  }
}
```

## 3. **Vue 3 中使用 ref**

```typescript
import { ref } from 'vue'

// 组合式 API
export default {
  setup() {
    // ✅ 创建独立的响应式基本类型
    const count = ref(0)
    
    // ✅ 可以安全地解构
    const state = reactive({ count: ref(0) })
    const { count: countRef } = state
    
    // ✅ 在任何地方都可以使用
    async function fetchData() {
      const localCount = ref(0)
      setInterval(() => {
        localCount.value++ // 这个修改会触发视图更新
      }, 1000)
    }
    
    // ✅ 可以方便地在组件间传递
    function useCounter() {
      const count = ref(0)
      return { count }
    }
    
    return {
      count,
      // 在模板中自动解包，不需要 .value
      // <div>{{ count }}</div>
    }
  }
}
```

## 4. **为什么需要 .value**

```typescript
const count = ref(0)

// 如果不需要 .value，JavaScript 无法拦截基本类型的读写
count = 1 // ❌ 这样无法触发响应式更新

// 通过对象属性的方式，我们可以拦截读写操作
count.value = 1 // ✅ 这样可以触发响应式更新
```

总结：
1. `Vue 2` 中基本类型必须作为 `data` 对象的属性才能是响应式的
2. 这导致在复杂场景下使用基本类型很不方便
3. `Vue 3` 的 `ref` 通过将基本类型包装成对象，解决了这个问题
4. `ref` 让基本类型可以：
   - 独立存在
   - 安全地解构
   - 方便地传递
   - 在任何地方使用
5. 需要使用 `.value` 是因为 `JavaScript` 的语言限制，无法直接拦截基本类型的读写操作
