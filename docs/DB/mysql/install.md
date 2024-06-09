---
title: 安装
---

本文以 `macos` 系统安装 `mysql` 为例。

在 [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/) 上根据 `macos` 的版本号选择下载安装包。

如果 `mac` 使用的是 `M1` 芯片，需要下载 `arm64` 版本的安装包。

否则，下载 `x86_64` 版本的安装包。

另外，安装包分为 `DMG` 、`TAR` 以及 `Compressed TAR` 这些类型。

我们推荐直接下载 `DMG` 类型的安装包。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405160104.png)

下载完成后，双击安装包，然后按照提示安装即可。

**在这个过程中，需要设置 `root` 用户的密码**。

安装完成后，打开 `系统偏好设置`，可以看到多了一个 `Mysql` 图标。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405160718.png)

点击打开，可以看到 `Mysql` 的状态。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405160718.png)

安装完成之后，如果在控制台中执行命令时，提示 `command not found` ，则需要将 `mysql` 的安装路径添加到 `PATH` 环境变量中。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405161046.png)

在 `~/.bash_profile` 文件中添加如下内容：

```bash
# mysql环境配置
export PATH=$PATH:/usr/local/mysql/bin
export PATH=$PATH:/usr/local/mysql/support-files
```

**然后重启一下 `shell` ，再次执行命令，就可以正常使用了**。
