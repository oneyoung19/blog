---
title: Egg.js 中的 MVC
---

`MVC`（`Model-View-Controller`）是一种经典的软件架构模式，在 `Egg.js` 框架中也采用了这种设计模式。

`Egg.js` 中 `MVC` 的各个组成部分如下：

## 1. Model (模型)

- 负责数据存取和业务逻辑
- 通常对应数据库操作
- 在 `Egg.js` 中，模型一般放在 `app/model/` 目录下
- 可以通过 `ctx.model` 或 `app.model` 访问

```javascript
// app/model/user.js
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define('user', {
    name: STRING,
    age: INTEGER,
  });
  return User;
};
```

## 2. View (视图)

- 负责展示数据，通常是前端页面
- 在 `Egg.js` 中支持多种模板引擎（如 `EJS`、`Nunjucks` 等）
- 视图文件放在 `app/view/` 目录下
- 通过 `ctx.render()` 方法渲染视图

```javascript
// 在控制器中渲染视图
async function index() {
  const { ctx } = this;
  await ctx.render('user.tpl', { name: 'egg' });
}
```

## 3. Controller (控制器)

- 负责处理用户请求和返回响应
- 作为 `Model` 和 `View` 的桥梁
- 在 `Egg.js` 中，控制器放在 `app/controller/` 目录下
- 通过 `ctx.controller` 访问

```javascript
// app/controller/user.js
const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.model.User.findByPk(userId);
    ctx.body = userInfo;
  }
}

module.exports = UserController;
```

## Egg.js 中 MVC 的工作流程

1. 用户发起请求 → 路由（`Router`）
2. 路由将请求分发到对应的控制器（`Controller`）
3. 控制器调用模型（`Model`）处理业务逻辑和数据存取
4. 模型返回数据给控制器
5. 控制器决定是直接返回数据还是渲染视图（`View`）
6. 视图（**如果需要**）渲染完成后返回给用户

:::tip
`Egg.js` 在传统 `MVC` 基础上还提供了 `Service` 层（放在 `app/service/`），用于处理复杂的业务逻辑，使控制器更加简洁。
:::
