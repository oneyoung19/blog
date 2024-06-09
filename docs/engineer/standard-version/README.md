---
title: Standard Version
---

`standard-version` 是一个自动对项目更新版本号、生成日志、版本标记的工具。

笔者以[standard-version@^9.5.0](https://www.npmjs.com/package/standard-version)为例进行调试。

## 1.使用步骤

1. 项目需要遵循[Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)；

2. 安装并直接执行 `standard-version`。

上述命令默认会执行 `4` 个阶段：

1. `bump` 自动升级版本号（`fix` 升级 `patch`，`feat` 升级 `minor`）
2. `changelog` 根据 `Conventional Commits Specification` 生成新版本的日志文件
3. `commit` 提交本地更改
4. `tag` 生成版本标记

## 2.参数详解

除了上述的自动版本升级，也可以使用如下指令：

```shell
# 首次发布版本
standard-version --first-release
```

```shell
# 手动指定发布版本
standard-version --release-as <major|minor|patch>
```

更多参数可以使用 `standard-version -h` 查看：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20231130205525.png)

## 3.配置文件

我们可以在**项目根目录**下定义一个 `.versionrc.js` 配置文件，其中可以配置上一节图片中列出的 `Preset Configuration`：

```js
// .versionrc.js
module.exports = {
	types: [
		{ type: 'feat', section: '✨ Features | 新功能' },
		{ type: 'fix', section: '🐛 Bug Fixes | Bug 修复' },
		{ type: 'init', section: '🎉 Init | 初始化' },
		{ type: 'docs', section: '✏️ Documentation | 文档' },
		{ type: 'style', section: '💄 Styles | 风格' },
		{ type: 'refactor', section: '♻️ Code Refactoring | 代码重构' },
		{ type: 'perf', section: '⚡ Performance Improvements | 性能优化' },
		{ type: 'test', section: '✅ Tests | 测试' },
		{ type: 'revert', section: '⏪ Revert | 回退', hidden: true },
		{ type: 'build', section: '📦‍ Build System | 打包构建' },
		{ type: 'chore', section: '🚀 Chore | 构建/工程依赖/工具' },
		{ type: 'ci', section: '👷 Continuous Integration | CI 配置' }
	],
	// 默认值: "chore(release): {{currentTag}}"
	releaseCommitMessageFormat: "{{currentTag}}",
	// 跳过某步骤 可设置 bump changelog commit tag
	skip: {
		// changelog: true
	}
}
```

后续执行 `standard-version` 相关命令时，会自动读取该文件。

## 4.参考文章

- [standard-version使用](https://juejin.cn/post/7020289124993073189)
- [standard version 自动化](https://juejin.cn/post/7000702195758792718)
- [learn-standard-version](https://github.com/BestDingSheng/learn-standard-version)
- [standard-version 自动化](https://jianshu.com/p/acfdd4ca0104)
- [自动产出changelog-第二节：自动产出](https://segmentfault.com/a/1190000039813329)

