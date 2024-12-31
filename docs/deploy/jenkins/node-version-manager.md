---
title: Node管理
---

## [nvm VS n](https://fed.taobao.org/blog/taofed/do71ct/nvm-or-n/)

`nvm` 不会影响到全局 `node` 版本。它的生效期是在每一个 `shell` 沙盒内。

而所有的 `node` 版本都声明在 `~/.nvm/versions` 下。

`n` 始终是改变 `/usr/local/bin` 下的 `node` 版本，因此实际上 `n` 是影响全局 `node` 版本的。

## [Jenkins中使用nvm](https://blog.yasking.org/a/jenkins-use-nodejs-with-nvm.html)：

1. 使用 `nvm-wrapper` 插件；
2. 构建机器上安装 `nvm`，`Shell` 脚本中加载 `nvm` 环境变量；

## [Jenkins中使用n](https://www.cnblogs.com/zksfyz/p/9054592.html)

全局安装 `n`，执行切换指令

## [Jenkins中集成GitLab](https://gitlab.cn/blog/2021/09/03/jenkins-jihu/)

1. 集成
2. `webhook`
3. `.gitlab-ci.yaml`

