---
title: Husky
---

本章主要说明结合了 `Git Hooks` 与 `NPM Hooks` 的 `husky` 仓库。

以实现在 `git commit` 操作时对代码进行 `lint-staged` 操作。

## 1.yorkie & husky

### 1-1.yorkie

`yorkie` 是 `fork` 自 `husky` 的项目。目前较新版本是[yorkie@2.0.0](https://www.npmjs.com/package/yorkie)

1. 项目中执行 `git init`，以支持 `yorkie` 在 `.git/hooks` 目录下创建 `hooks` 文件。

2. 它内置了 `install` 生命周期钩子，在安装该依赖包时，会自动在 `.git/hooks` 目录下注册所有可用 `hooks`。

3. 用户在使用时，需要在 `package.json` 中定制化声明 `Git Hooks`，譬如：

```json
{
	"gitHooks": {
		"pre-commit": "lint-staged"
	},
	"lint-staged": {
		"*.{js,jsx,vue}": ["vue-cli-service lint", "git add"]
	}
}
```

这样，在执行 `git commit` 时，就会触发 `pre-commit` 钩子。

**_要注意的的一点，由于 `yorkie` 依赖 `.git` 目录，所以在安装 `yorkie` 之前，最好保证当前项目目录已经执行 `git init` 命令，创建了 `.git` 目录_**。

如果说，先安装了 `yorkie`，后执行了 `git init`。那么你可以手动执行 `yorkie` 的 `bin/install.js` 文件进行补救：

```shell
node "node_modules/yorkie/bin/install.js"
```

### 1-2.husky

较新版本的[husky](https://typicode.github.io/husky/) 已经[不推荐 `autoinstall`](https://blog.typicode.com/husky-git-hooks-autoinstall/)。

譬如笔者在测试中使用的版本是[husky@^8.0.3](https://www.npmjs.com/package/husky)。

新版本的 `husky` 使用方式有两种：

1. 第一种是利用 `npx husky-init`

2. 第二种是手动安装 `husky`，然后配置 `Git Hooks`。

详见[安装husky](https://typicode.github.io/husky/getting-started.html)

安装完成后，执行 `git config -l` 会发现 `core.hookspath=.husky`。

如果要卸载 `husky` 的话，执行：

```shell
npm uninstall husky && git config --unset core.hooksPath
```

然后你可以根据实际需求，抉择是否删除 `.husky` 目录：

```shell
rm -rf .husky
```

**_`husky` 根据 `git` 提供的 `core.hooksPath` 创建了 `.husky` 目录，不再依赖 `.git` 目录_**。

**_但由于映射关系的存在，同样需要先利用 `git init` 创建 `.git` 目录_**。

## 2.yorkie of vue-cli

**`yorkie` 是 `fork` 自 `husky`，在安装时，会 `autoinstall`。**

假设 `vue-app-git` 和 `vue-app-not-git` 都是利用 `vue create` 创建的项目。

二者的唯一区别是，`vue-app-git` 是在本机检测有 `git` 的情况下安装的，而 `vue-app-not-git` 则是在本机检测没有 `git` 的情况下安装的。

上述区别是通过更改全局包 `@vue/cli-shared-utils` 中的 `hasGit` 函数返回值实现的。

`vue-app-git` 和 `vue-app-not-git` 都是选择了 `lint on commit`，但实际执行，会发现：

1. `vue-app-git` 的 `git commit` 会触发检测。
2. `vue-app-not-git` 的 `git commit` 则不会触发检测。

这是因为当 `yorkie` 在安装会自动执行，但在 `vue-app-not-git` 下没有找到 `.git` 目录，也就无法在 `.git/hooks` 下注入执行脚本。

## 3.Notes

### 3-1.prepare

在 `scripts` 下定义了 `prepare` 生命周期钩子。

但利用 `yarn add yorkie -D` 时，`prepare` 会触发，而 `npm install yorkie --save-dev` 并不会触发。

执行 `npm install` 会触发 `prepare` 生命周期钩子。

### 3-2.install & uninstall

在 `scripts` 下定义了 `install` 和 `uninstall`。

但为什么触发 `install` 和 `uninstall` 时，并没有打印 `node bin/install.js` 中的 `console` 呢?

答案是[与 `npm` 版本相关](https://docs.npmjs.com/cli/v10/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts)。

测试了下，`pnpm@7.33.6` 在安装或者卸载包时，不会触发 `install` 或 `uninstall` 生命周期钩子。

因此 `vue-app-git-pnpm` 目录下的 `git commit` 不会触发 `pre-commit` 钩子。

## 4.NPM Life Cycle Scripts

查看 `NPM` 支持的生命周期钩子：[life-cycle-scripts](https://docs.npmjs.com/cli/v10/using-npm/scripts#life-cycle-scripts)

## 5.Git Hooks

查看 `Git` 支持的钩子：[Git Hooks](https://git-scm.com/docs/githooks)