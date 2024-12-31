---
title: Conventional Changelog
---

`conventional-changelog` 是一个根据 `Git` 记录自动生成 `changelog` 的工具。

笔者初次是在尤大写的[register-service-worker](https://www.npmjs.com/package/register-service-worker)库中接触到该工具。

本文以 [conventional-changelog-cli@^4.1.0](https://www.npmjs.com/package/conventional-changelog-cli) 版本为例。

## 1.使用步骤

1. 安装 `conventional-changelog-cli@^4.1.0`

2. 定义 `scripts`

```json
{
	"scripts": {
		"prepublishOnly": "conventional-changelog -p angular -i CHANGELOG.md -s"
	}
}
```

3. 执行 `npm run prepublishOnly` 就会写入 `changelog` 日志

## 2.参数详解

`conventional-changelog -p angular -i CHANGELOG.md -s` 命令会读取 `package.json` 中的版本，**根据 `angular` 规范**，将截止到上一次 `tag` 的所有 `commit` 输入到指定文件中。

其中：

- `-p` 代表 `preset`，即使用 `angular commit` 规范。

- `-i` 代表 `infile`，即从 `CHANGELOG.md` 文件中读取日志。

- `-s` 代表 `same-file`，即输出文件也是 `CHANGELOG.md`。

假设项目的 `git` 操作树为 `tag1 => tag2 => tag3 => commits`，

执行 `prepublishOnly` 后，会读取 `package.json` 版本，根据 `angular` 规范将 `commits` 输出到指定文件中。

此外，还可以设置一个参数：

- `-r` 代表 `release-count`，默认是 `1`，因此读取上例中的 `commits`；如果设置为 `2`，则会读取 `tag3` 和 `commits`；以此类推。

如果 `-r` 设置为 `0`，则会读取所有日志，即本例中的 `tag1 tag2 tag3 commits`。
