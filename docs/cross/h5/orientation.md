---
title: 禁止屏幕旋转
---

屏幕方向分为**竖向**和**横向**。

无论是 `HTML`、`CSS` 或 `JS`，标志代码是一致的：

1. 竖向：`portrait`
2. 横向：`landscape`

## 1.使用 HTML 锁定页面方向

我们可以利用 `HTML` 中的 `meta` 标签来声明屏幕方向：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, orientation=portrait">
```

## 2.使用 CSS 锁定页面方向

```css
/* 锁定页面为竖屏方向 */
@media screen and (orientation: landscape) {
  body {
    transform: rotate(90deg);
    transform-origin: right top;
    width: 100vh;
    height: 100vw;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
}
```

## 3.使用 JS 锁定页面方向

```js
function lockOrientation () {
  if (window.orientation === 90 || window.orientation === -90) {
    // 如果设备方向为横屏，则锁定为竖屏
    if (typeof window.screen.orientation !== 'undefined') {
      window.screen.orientation.lock('portrait')
    } else {
      window.ScreenOrientation.prototype.lock('portrait')
    }
  }
}

// 监听设备方向变化事件
window.addEventListener('orientationchange', lockOrientation)

// 初次加载时锁定方向
lockOrientation()
```

然而在实际业务中进行测试时，发现**在 `IOS` 设备上，上述两种方式均不能正常作用**。

因此，限制屏幕旋转，这种方式是走不通的。

**可以考虑竖屏和横屏样式适配，但是提示用户切横屏操作**。

更多细节，推荐[移动设备强制横屏显示以及兼容问题](http://caibaojian.com/landscape_mode.html)
