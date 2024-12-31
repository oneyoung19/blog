---
title: create-compiler
---

在前文中，我们已经大致梳理了 `Vue` 当中的 `compile` 流程一共有 `4` 部分：

1. `parse`
2. `optimize`
3. `codegen`
4. `to-function`

而 `Vue` 的高级之处在于，它将这个流程整体抽离了出来，创建了一个工厂函数以供不同的编译场景使用（`setup`、`SSR`、`web`）。

## 1.compile

**核心内置 `compile` 函数**如下：

```js
function compile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}
```

## 2.createCompilerCreator

`createCompilerCreator` 工厂函数支持传入 `compile` 参数以支持函数转化：

```js
import { createCompileToFunctionFn } from './to-function.ts'

function createCompilerCreator(compile: Function): Function {
  return function createCompiler(compilerOptions: CompilerOptions) {
    return {
      compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}
```

## 3.createCompiler

`createCompiler` 函数传入不同场景下的 `compilerOptions` 以创建 `compile` 和 `compileToFunctions`：

```js
import { template, template2, template4 } from './template'
import { createCompiler } from '../index'

import { baseOptions } from 'web/compiler/options'
const { compile, compileToFunctions } = createCompiler(baseOptions)

// compile会将template编译成render字符串
// compileToFunctions会将template编译成render函数
console.log('template', compile(template))
console.log('template', compileToFunctions(template))
```
