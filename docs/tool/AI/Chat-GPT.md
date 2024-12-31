---
title: Chat-GPT
---

`Chat-GPT` 是一种基于 `GPT` 模型的自然语言处理模型，用于生成对话和回复。

它是 `OpenAI` 的一项技术，具有强大的语言生成能力和上下文理解能力，可以进行对话生成、文本生成、问题回答等多项任务。

## 注册

如果没有账号的话，需要在 [https://chat.openai.com/](https://chat.openai.com/) 注册一个账号。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405141458.png)

**第一步的话，输入邮箱进行注册**。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405141619.png)

从上图中的提示，可以看出，注册流程中会需要**验证手机号**。

那么邮箱验证通过之后，**第二步的话，就是验证手机号**。

同样，部分地区限制了 `Chat-GPT` 的服务，并不支持注册。

因此我们需要利用**虚拟手机号**进行绑定注册。

可以在 [http://sms-activate.org/](http://sms-activate.org/) 这个网站上，获取一个虚拟手机号。

`sms-activate` 支持使用支付宝充值，视个人情况而定，可以充值 `1` 美元或者 `2` 美元即可。

**充值完毕后**，选择左侧栏的 `OpenAI`：

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405142412.png)

然后可以看到左侧栏，列出了一系列国家的 `OpenAI` 虚拟手机号。**购物车符号一定要慎点，点了就相当于下单。**

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405142604.png)

**我们可以先在 `OpenAI` 的官网上，查看一下注册时支持的国家和地区**。

笔者在实际操作中，选择了**印度尼西亚**的手机号，成功尝试注册了。

## 使用

注册成功之后，就可以在 [https://chat.openai.com/](https://chat.openai.com/) 上登录使用了。

除此以外，`OpenAI` 还提供了 `API`，可以在 [https://platform.openai.com/](https://platform.openai.com/) 上进行使用。

可以在这个平台上登录，此平台会包含你的**账号使用信息**，以及**各种 `API` 相关服务**。

其中，**较为重要的是 `API` 的 `Key`，可以在 `Personal` 中的 `View API Keys` 中查看**。

你可以在这个模块中，新创建一个 `Key`。

这个 `API` 的 `Key`，在某种程度上，是你的身份标识。注意好好保管它，只能看见一次明文。

![](https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230405143616.png)

其他第三方集成了 `Chat-GPT` 的平台，可以通过这个 `API Key` 来提供服务，譬如下一节中的 `VSCode` 插件 `CodeGPT`。
