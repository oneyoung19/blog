---
title: Remote-SSH
---

`Remote SSH` 比较直白的翻译，就是**远程登录**。

目前在 **`VScode` 编辑器**上大放异彩:tada:。

通常利用 `ssh` 登录一台 `linux` 机器的指令类似于 `ssh name@ip`，譬如：

```shell
ssh root@192.168.168.10
```

成功登录之后，就可以正常使用 `linux` 相关指令在**机器上手工操作**。

而 `Remote SSH` 是将整个 `linux` 的文件系统，同步到本地，用户可以在 `vscode` 中像操作本地文件一样，操作远程机器的文件。

这对于开发来说，大大提升了效率，也大大便利了团队协作方式。

首先在 `VScode` 应用商店，搜索 `Remote-SSH` 应用：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301211901.png)

安装之后，启动方式有两种。

第一种是通过 `F1` 按键，调起弹窗后，输入 `remote-ssh` 就可以看见许多联想指令。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212303.png)

第二种方式更加便利，也就是编辑器左下角会出现新的标识按钮。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212327.png)

此处，我们以第二种方式为例，会弹出下列弹窗，并选择 `Connect to Host`：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212633.png)

此时就可以在 `①` 中输入 `user@host` 进行远程登录：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212952.png)

也可以选择 `②` 进行定制化配置文件：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301213229.png)

推荐选择**用户级配置**中进行配置（`xxx.xxx.xxx.xxx` 换成实际的 `Host` 地址）：

```
Host xxx.xxx.xxx.xxx
HostName xxx.xxx.xxx.xxx
IdentityFile ~/.ssh/id_rsa
User root
```

上面的配置是利用 `~/.ssh/id_rsa` **密钥登录**的。

如果是**密码登录**，实际上不用配置这个文件，在上述的登录过程中，`Remote-SSH` 会提示输入密码 `Password` 进行验证。

当登录成功，选择右侧的图标，此时会显示已经连接上的远程机器。

然后我们利用 `vscode` 的快捷键，譬如在 `mac` 上 `command + o` 就可以指定要打开的目标文件了：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301213947.png)

后续就可以比较愉快的操作了，不用再过度码 `linux` 指令了:smile:。
