---
title: 1.Assertion Testing
---

## 1-1.严格模式

`node:assert` 中分为严格模式和传统模式。

这二者最突出的区别是，**在严格断言模式，比较使用 `===` 符号，而传统断言使用的则是 `==` 符号**。

```js
const assert = require('node:assert/strict')

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5])
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]
```

## 1-2.断言错误信息

在 `node` 中，可以利用 `AssertionError` 来描述自定义断言错误。

这样，我们就能断言，目标结果是否满足自定义错误信息格式：

```js
const assert = require('node:assert')

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 3,
  operator: 'strictEqual'
})

// Verify error output:
try {
  assert.strictEqual(1, 2)
} catch (err) {
  assert(err instanceof assert.AssertionError)
  assert.strictEqual(err.message, message)
  // assert.strictEqual(err.name, 'AssertionError')
  // assert.strictEqual(err.actual, 1)
  // assert.strictEqual(err.expected, 2)
  // assert.strictEqual(err.code, 'ERR_ASSERTION')
  // assert.strictEqual(err.operator, 'strictEqual')
  // assert.strictEqual(err.generatedMessage, true)
}
```

## 1-3.方法集

```js
// Strict Mode
const assert = require('node:assert/strict')
```

关于 `node:assert` 的方法集合：

### 1-3-1.assert()

`assert(value[,message])` 等同于 `assert.ok(value[,message])`。

该方法用来判断**输入值是否为 `truthy`**。

```js
assert(1, 'value is not truthy')
```

### 1-3-2-1.assert.equal()

`assert.equal(actual, expected[,message])`

该方法用来判断**浅度相等**。

```js
assert.equal(1, 1)
```

### 1-3-2-2.assert.notEqual()

`assert.notEqual(actual, expected[,message])`

该方法用来判断**浅度不相等**。

```js
assert.notEqual(1, 2)
```

### 1-3-3-1.assert.deepEqual()

`assert.deepEqual(actual, expected[,message])`

该方法用来判断**深度相等**。

```js
// assert.deepEqual([1, 2, [3]], [1, 2, ['3']])
assert.deepEqual({ a: { b: 1 } }, { a: { b: 1 } })
```

### 1-3-3-2.assert.notDeepEqual()

`assert.notDeepEqual(actual, expected[,message])`

该方法用来判断**深度不相等**。

```js
assert.notDeepEqual({ a: { b: 1 } }, { a: { b: 2 } })
```

### 1-3-4-1.assert.match()

`assert.match(string, reg[,message])`

该方法用来判断**目标字符串匹配给定正则**。

```js
assert.match('Hello World', /W/)
```

### 1-3-4-2.assert.doesNotMatch()

`assert.doesNotMatch(string, reg[,message])`

该方法用来判断**目标字符串不匹配给定正则**。

```js
assert.doesNotMatch('Hello World', /w/)
```

### 1-3-5-1.assert.rejects()

`assert.rejects(asyncFn[,error][,message])`

该方法用来判断**目标异步函数拒绝**。

```js
assert.rejects(new Promise((resolve, reject) => {
  reject('Reject')
}))
```

### 1-3-5-2.assert.doesNotReject()

`assert.doesNotReject(asyncFn[,error][,message])`

该方法用来判断**目标异步函数不拒绝**。

```js
assert.doesNotReject(Promise.resolve('Value'))
```

### 1-3-6-1.assert.throws()

`assert.throws(fn[,error][,message])`

该方法用来判断**目标函数抛出错误**。

```js
assert.throws(() => {
  throw new Error('error')
}, {
  name: 'TypeError',
  message: 'Wrong value'
})
```

### 1-3-6-2.assert.doesNotThrow()

`assert.doesNotThrow(fn[,error][,message])`

该方法用来判断**目标函数不抛出错误**。

```js
assert.doesNotThrow(() => {
})
```

### 1-3-7.assert.fail()

`assert.fail([message])`

该方法用来判断**主动抛出错误**。

```js
assert.fail('Fail Message')
```

### 1-3-8.assert.ifError()

`assert.ifError(value)`

该方法用来判断**检测目标值是否 `undefined` 或者 `null`**。

```js
assert.ifError(null)
```
