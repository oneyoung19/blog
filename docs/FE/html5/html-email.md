---
title: HTML Email总结
---
该章并不属于 `HTML5` 系列。它是 `HTML` 相关的内容。

`HTML Email` 即为利用 `HTML` 创建 `Email` 模板。

在实际开发中通常是会由前端提供模板，后端同学套数据、发邮件。

在我刚开始的认知中，认为直接利用 `CSS` 和基础的 `Html` 进行编写就可以，但是最终实践起来，发现与自己的认知并不同。

由于`Email` 平台的多样以及不统一，导致该部分知识存在大量坑点以及兼容性问题。

该篇文章用于笔者在实践当中的总结。

**绝知此事须躬行**。

## 1.Doctype

目前，兼容性最好的 `Doctype` 是 `XHTML 1.0 Strict`。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>HTML Email</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
</html>
```

## 2.布局

写 `HTML` 的话，逃不过的话题就是布局。

首先，说明下在 `HTML Email` 中能使用的标签：
- `table` 及其他相关标签 `tr` `td` 等。
- `div`
- `span`
- `a`
- `img`

`HTML Email` 的布局方式是 `table` 布局。不能使用 `flex`、`float`等。

即

```html
<body style="margin: 0; padding: 0;">
  <!-- table-layout: fixed;  -->
  <table
    align="center"
    border="1"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="border-collapse: collapse; border-spacing: 0;">
    <tr>
      <td>Hello!</td>
      <td>Hello!</td>
    </tr>
  </table>
</body>
```

如果只是上面的结构，不一定能满足我们的实际开发需要。我们都知道，在平常编写 `HTML` 的开发中，一定存在嵌套。

如果想要在 `td` 元素中继续分块嵌套，那么就仍然需要使用 `table`。

```html
<body style="margin: 0; padding: 0;">
  <!-- table-layout: fixed;  -->
  <table
    align="center"
    border="1"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="border-collapse: collapse; border-spacing: 0;">
    <tr>
      <td>
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          style="border-collapse: collapse;  border-spacing: 0;">
          <tr>
            <td>HTML</td>
            <td>Email</td>
          </tr>
        </table>
      </td>
      <td>Hello!</td>
    </tr>
  </table>
</body>
```

## 3.样式

- 充分利用表格的私有属性来布局。`width`, `height`, `bgcolor`, `background`, `align`,`valign` 等。能利用私有属性，就不要使用 `CSS`。
- 文字的处理。`font-*` 族的 `CSS` 属性不允许使用缩写，请分别定义 `font-size`, `font-weight`, `line-height`, `font-family`(`font-family` 有可能被过滤)
- 注意表格不会继承外部的 `font` 等属性，请务必，在每个 `<td>` 元素上都定义字体属性和颜色。
- 背景的处理  不允许使用 `style="background:url(http://…)"`，请使用 `<td>` 的属性( `attribute` )  `background="http://…"` 。（由于`CSS` 背景图片是一种会影响页面渲染速度的定义，因此大多数 `Web` 邮件系统会过滤它。）  背景颜色，也请使用表格的 `bgcolor` 属性。实际使用中，尽可能不要出现背景图，上面有文字的处理结构。建议将文字合成到图片上，再加载到 `<img>` 标签上。
- 避免使用 `list-style` 来处理列表样式，请使用 ` • ` 字符来替代。
- 禁止使用 `position`, `background`, `float` 样式。
- `margin` 的使用要非常谨慎，不允许使用 `margin` 作为重要的布局依据，不允许使用负 `margin`，避免使用非零和非 `auto` 的 `margin` 属性。
- 要使用完整的6个完整的十六进制编码，如果使用三个简写字符，不总是有效。
- 不允许在 `<tr>` 元素上定义 `CSS` 样式，请将样式尽量定义在 `<td>` 元素上。（`Gmail` 等邮件客户端会过滤 `<tr>` 上的属性
- 禁止使用 `<style type="text/css">` 来处理 **主要样式**，所有的 `Web` 邮件系统都会过滤该标签。因此邮件模板中不能使用伪类（`pseudo class`）和伪元素（`pseudo elements`），以及高级选择符。
- 禁止使用 `<link>` 来加载外联 `CSS`。

### 可定义的样式

```html
<style type="text/css">
  * {
    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    mso-line-height-rule: exactly;
  }
  div[style*="margin: 16px 0"] {
    margin: 0 !important;
  }
  table,
  td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }
  img {
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic;
  }
  .ReadMsgBody,
  .ExternalClass {
    width: 100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%;
  }
</style>
    
<style module>
  _media screen and (max-width:620px) {
    #outer_container {
      border-radius: 0 !important;
      margin-top: 0 !important;
      padding: 0 32px !important;
    }
  }

  _media screen and (max-width:420px) {
    .column.table__key .text,
    .column.table__val .text {
      font-size: 12px;
    }
    .table__key,
    .table__val {
      font-size: 12px;
    }
  }

  _media screen and (max-width:450px) {
    .icon-box {
      display: none;
    }
    .icon-box--in-small {
      display: block;
    }
  }

  _media screen and (min-width:451px) {
    .icon-box {
      display: block;
    }
    .icon-box--in-small {
      display: none;
    }
  }
</style>
<style module>
  .a {
    outline: 0;
    font-size: 16px;
    border: 0;
    color: #139AF9;
    text-decoration: none;
  }

  .a .a__text {
    color: #139AF9;
    text-decoration: none;
  }

  .a:hover {
    color: #0D6CAE;
    text-decoration: underline;
  }

  .a:hover .a__text {
    color: #0D6CAE;
    text-decoration: underline;
  }

  .a:visited {
    color: #470DAE;
  }

  .a:visited .a__text {
    color: #470DAE;
  }
</style>
```

## 4.图片

- 部分邮件客户端 加载不了图片，所以要定义图片 `img` 的 `alt` 属性。保证用户知道图片是什么。

### 遇到的兼容性问题

如果图片宽度设置了 `100%`，它参照的会是 `table` 元素。

在实际开发中，网易邮箱能够将宽度为 `100%` 的图片横向铺满屏幕，而 `QQ` 邮箱却不能。

这个具体方案待研究。

## 6.相关链接

上面的内容看完后可能不是特别清晰，这里推荐一些辅助开发的链接。

[手摸手写一个HTML Email](https://webdesign.tutsplus.com/zh-hans/articles/build-an-html-email-template-from-scratch--webdesign-12770)

[这里有现成的基础样板](http://htmlemailboilerplate.com/)

[在模板中如何使用css](https://css-tricks.com/using-css-in-html-emails-the-real-story/)

[在W3C上校验下代码是否存在错误](https://validator.w3.org/)


:::tip
如果开发完后想要验证下实际的模板效果，比较笨的方法是可以利用网易邮箱的发信件，它支持 `HTML` 模板。

这里也有专门的测试网站，不过都是收费的:

- [emailonacid](https://www.emailonacid.com/)
- [mailchimp](https://mailchimp.com/)
- [litmus](https://www.litmus.com/)

如果你想要用别人写好的模板，也有网站，这个是免费的:

- [campaignmonitor](https://www.campaignmonitor.com/)
:::

