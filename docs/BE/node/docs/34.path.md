---
title: 34.Path
---

## 1.Windows vs. POSIX

首先，需要明确的一点是，`Node.js` 是**跨平台**的，它可以运行在 `Windows`、`Linux`、`macOS` 等操作系统上。

也就是说 **`Node.js` 源码会兼容不同的操作系统**。

`Window` 代指我们熟知的 `Windows` 操作系统。

`POSIX` 代指 `Portable Operating System Interface`，即可移植操作系统接口，它是一种标准，定义了操作系统应该为应用程序提供的接口标准。

而 `UNIX` 和 `macOS`（前身是 `Mac OS X`）是基于 `POSIX` 标准的操作系统。

我们本节中介绍的 `node:path` 模块，本身是跨平台的。譬如：

**当在 `Windows` 系统上**，`path.basename` 会自动识别 `Windows` 风格的路径分隔符 `\`，并且返回正确的结果。

```js
path.basename('C:\\temp\\myfile.html')
// Returns: 'myfile.html'

path.basename('/temp/myfile.html')
// Returns: '/temp/myfile.html'
```

**当在 `POSIX` 系统上**，`path.basename` 会自动识别 `POSIX` 风格的路径分隔符 `/`，并且返回正确的结果。

```js
path.basename('C:\\temp\\myfile.html')
// Returns: 'C:\temp\myfile.html'

path.basename('/temp/myfile.html')
// Returns: 'myfile.html'
```

但是，`Windows` 和 `POSIX` 系统在路径表示和分隔符上存在差异，因此 `Node.js` 提供了 `path.win32` 和 `path.posix` 子模块，用于处理 `Windows` 风格的路径和 `POSIX` 风格的路径。

## 2.path.win32

**当在 `POSIX` 系统上操作 `Windows` 格式的文件时，可以利用 `path.win32` 以使用 `Windows` 文件规范来解析目标。**

`path.win32` 是 `Node.js` 中的 `path` 模块下的一个子模块，它提供了特定于 `Windows` 操作系统的路径处理功能。

在跨平台的 `Node.js` 应用程序中，可以使用 `path` 模块来进行路径操作，无论是运行在类 `UNIX` 操作系统还是 `Windows` 操作系统上。

然而，由于 `Windows` 操作系统与类 `UNIX` 操作系统在路径表示和分隔符上存在差异，因此 `Node.js` 提供了 `path.win32` 子模块，用于处理 `Windows` 风格的路径。

通过使用 `path.win32` 模块，你可以确保在 `Windows` 操作系统上正确处理和操作文件路径，而不会受到类 `UNIX` 操作系统路径约定的影响。它提供了与 `Windows` 操作系统相关的路径处理功能，使你能够编写跨平台的代码，同时确保与 `Windows` 操作系统的兼容性。

## 3.path.posix

**当在 `Windows` 系统上操作 `POSIX` 格式的文件时，可以利用 `path.posix` 以使用 `POSIX` 文件规范来解析目标。**

该方式与 `path.win32` 的目的一致。

## 4.path.delimiter

`path.delimiter` 属性提供了平台特定的**路径分隔符**。

当访问 `path.delimiter` 时：

- `Windows` 上是 `;`。
- `POSIX` 上是 `:`。

在 `POSIX` 上：

```js
console.log(process.env.PATH)
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

process.env.PATH.split(path.delimiter)
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']
```

在 `Windows` 上:

```js
console.log(process.env.PATH)
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

process.env.PATH.split(path.delimiter)
// Returns: ['C:\Windows\system32', 'C:\Windows', 'C:\Program Files\node\']
```

## 5.path.sep

`path.sep` 属性提供了平台特定的**路径片段分隔符**。

`sep` 即 `separate`。

当访问 `path.sep` 时：

- `Windows` 上是 `\`。
- `POSIX` 上是 `/`。

在 `POSIX` 上：

```js
'foo/bar/baz'.split(path.sep)
// Returns: ['foo', 'bar', 'baz']
```

在 `Windows` 上：

```js
'foo\\bar\\baz'.split(path.sep)
// Returns: ['foo', 'bar', 'baz']
```

## 6.path.dirname(path)

`path.dirname` 方法返回一个路径的目录名，类似于 `Unix` 的 `dirname` 命令。

```js
path.dirname('/foo/bar/baz/asdf/quux')
// Returns: '/foo/bar/baz/asdf'
```

## 7.path.basename(path[, suffix])

`path.basename()` 方法返回**路径的最后一部分**，类似于 `Unix` 的 `basename` 命令。它会忽略末尾的目录分隔符。

简单来说，`path.basename()` 方法用于从一个给定的路径中提取文件名或目录名的最后一部分。

它可以用于获取路径中的文件名，而忽略路径的其他部分。

**如果路径以目录分隔符结尾（例如 `/path/to/directory/`），`path.basename()` 方法会忽略末尾的目录分隔符，仅返回目录名**。

```js
path.basename('/foo/bar/baz/asdf/quux.html')
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// Returns: 'quux'

path.basename('/foo/bar/baz/asdf/')
// Returns: 'asdf'

path.basename('C:\\foo\\bar\\baz\\asdf\\quux.html')
// Returns: 'C:\foo\bar\baz\asdf\quux.html'
```

另外，`Windows` 系统中是不区分大小写的，但 `path.basename()` 方法区分大小写。

```js
path.basename('C:\\temp\\myfile.html')
// Returns: 'C:\temp\myfile.html'

path.win32.basename('C:\\temp\\myfile.html', '.html')
// Returns: 'myfile'

path.win32.basename('C:\\temp\\myfile.HTML', '.html')
// Returns: 'myfile.HTML'
```

## 8.path.extname(path)

`path.extname` 方法返回 `path` 的**扩展名**，从最后一次出现 `.`（句点）字符到 `path` 最后一部分的字符串结束。

如果在 `path` 的最后一部分中没有 `.`，或者如果 `path` 的基本名称（参阅 `path.basename()`）的第一个字符是 `.`，则返回一个空字符串。

```js
path.extname('index.html')
// Returns: '.html'

path.extname('index.coffee.md')
// Returns: '.md

path.extname('index.')
// Returns: '.'

path.extname('index')
// Returns: ''

path.extname('.index')
// Returns: ''

path.extname('.index.md')
// Returns: '.md'
```

## 9.path.parse(path)

`path.parse()` 方法返回一个对象，对象的属性表示 `path` 的元素。

```js
path.parse('/home/user/dir/file.txt')
// Returns:
// {
//   root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }
```

## 10.path.format(pathObject)

`path.format()` 方法从对象返回路径字符串。 与 `path.parse()` 相反。

```js
path.format({
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt'
})
// Returns: '/home/user/dir/file.txt'
```

## 11.path.isAbsolute(path)

`path.isAbsolute()` 方法检测 `path` 是否为绝对路径。

在 `POSIX` 上:

```js
path.isAbsolute('/foo/bar')
// Returns: true

path.isAbsolute('/baz/..')
// Returns: true

path.isAbsolute('qux/')
// Returns: false

path.isAbsolute('.')
// Returns: false
```

在 `Windows` 上:

```js
path.isAbsolute('//server')
// Returns: true

path.isAbsolute('\\\\server')
// Returns: true

path.isAbsolute('C:/foo/..')
// Returns: true

path.isAbsolute('C:\\foo\\..')
// Returns: true

path.isAbsolute('bar\\baz')
// Returns: false

path.isAbsolute('bar/baz')
// Returns: false

path.isAbsolute('.')
// Returns: false
```

## 12.path.normalize(path)

`path.normalize()` 方法规范化给定的 `path`，解析 `..` 和 `.` 片段。

当发现多个连续的路径分隔符时（如 `POSIX` 上的 `/`，`Windows` 上的 `\` 或 `\\`），它们会被单个的路径分隔符 `/` 替换。

末尾的多个分隔符会被保留。

```js
path.normalize('/foo/bar//baz/asdf/quux/..')
// Returns: '/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/.')
// Returns: '/foo/bar/baz/asdf/quux'

path.normalize('./foo/bar//baz/asdf/quux/..')
// Returns: 'foo/bar/baz/asdf'

path.normalize('/foo/bar/baz/asdf/quux/')
// Returns: '/foo/bar/baz/asdf/quux/'
```


## 13.path.join([...paths])

`path.join()` 方法使用平台特定的分隔符把全部给定的 `path` 片段连接到一起，并**规范化**生成的路径。

**可以将其类比为 `Array.prototype.join()`，只不过是用于路径。**

拼接符号是平台特定的，`Windows` 上是 `\`，`POSIX` 上是 `/`。

```js
// 此处的..是指上一级目录
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar')
// Throws 'TypeError: Path must be a string. Received {}'
```

## 14.path.resolve([...paths])

`path.resolve()` 方法将路径或路径片段的序列**解析为绝对路径**。

给定的路径序列**从右到左**进行处理，每个后续的 `path` 前置，**直到构造出一个绝对路径**。

**如果在处理完所有给定的 `path` 片段之后还未生成绝对路径，则再加上当前工作目录**。

生成的路径是规范化后的，且末尾的斜杠会被删除（除非路径被解析为根目录）。

```js
path.resolve('/foo/bar', './baz')
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/')
// Returns: '/tmp/file/'

// 如果当前工作目录是 /home/myself/node
path.resolve('foo/bar')
// Returns: '/home/myself/node/foo/bar'
```

## 15.path.relative(from, to)

`path.relative()` 方法根据当前工作目录返回 `from` 到 `to` 的相对路径。

如果 `from` 和 `to` 各自解析到同一路径（调用 `path.resolve()`），则返回一个长度为零的字符串。

```js
path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')
// Returns: '..\\..\\impl\\bbb'

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')
// Returns: '../../impl/bbb'
```

## 16.path.toNamespacedPath(path)

`path.toNamespacedPath()` 方法以平台特定的方式返回路径的等效名称空间路径。

在 `Windows` 操作系统上，文件路径可以包含命名空间前缀，例如 `\\?\` 或 `\\.\`。

这些命名空间前缀可以用于访问一些特殊路径或处理超长路径等情况。

`path.toNamespacedPath()` 方法接受一个路径作为参数，并将其转换为对应的命名空间路径。

**该方法只在 `Windows` 操作系统上有效，对于其他操作系统，调用该方法将返回原始路径，不进行任何转换。**

```js
path.toNamespacedPath('C:\\temp')
// Returns: '\\\\?\\C:\\temp'
```
