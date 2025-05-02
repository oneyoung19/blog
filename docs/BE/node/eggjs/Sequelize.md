---
title: Sequelize
---

[Sequelize](https://sequelize.org/) 是一个 `Node.js` 数据库 `ORM` (`Object Relational Mapping`)框架，用于管理关系型数据库。

它可用于 `MySQL`、`PostgreSQL`、`SQLite`、`MSSQL` 等数据库，并支持事务、查询、模型定义等功能。

:::tip
可以这么理解 `Sequelize`：

`MySQL` 等数据库，是关系型数据库（**使用SQL查询进行访问**），而 `MongoDB` 等数据库，是文档型数据库（**使用对象形式进行访问**）。

`Sequelize` 则是提供了一种方式，将关系型数据库中的数据映射为对象，并使用对象进行操作。
:::

接下来，我们就在 `Egg.js` 项目中一步步的配置 `Sequelize`。

可参考文档：

- [sequelize](http://docs.sequelizejs.com)
- [egg-sequelize](https://github.com/eggjs/egg-sequelize)
- [eggjs sequelize document](https://eggjs.org/zh-cn/tutorials/mysql.html)
- [sequelize-cli and migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)
- [factory-girl](https://github.com/aexmachina/factory-girl)

## 1.sequelize-cli

首先，我们要把当前的 `Egg.js` 项目改造一下，因为 `Sequelize` 需要声明 `model`。

`sequelize-cli` 是一个命令行工具，用于管理 `Sequelize` 的 `model` 模型定义和数据库迁移。

**第一步**，安装 `sequelize-cli`：

:::code-group

```shell [pnpm]
pnpm add sequelize-cli -D 
```

```shell [yarn]
yarn add sequelize-cli -D
```

```shell [npm]
npm install sequelize-cli --save-dev
```
:::

**第二步**，新建一个 `.sequelizerc` 文件，并写入以下内容：

```js
// .sequelizerc
const path = require('path');

module.exports = {
  config: path.join(__dirname, 'database/config.json'),
  'migrations-path': path.join(__dirname, 'database/migrations'),
  'seeders-path': path.join(__dirname, 'database/seeders'),
  'models-path': path.join(__dirname, 'app/model'),
};
```

**第三步**，初始化：

```bash
npx sequelize-cli init
```

这一步执行完成后，会在 `database` 目录下生成 `config.json`、`migrations`、`seeders` 文件夹以及在 `app` 目录下生成 `model` 文件夹。

`app/model` 文件夹下会生成一个 `index.js` 文件，这个文件会自动导入所有 `model` 文件，并导出一个 `sequelize` 实例。(**但如果是 `Egg.js` 环境下使用，这个文件的作用不大，可删除**)。

我们在开发时需要在 `app/model` 中定义数据库模型（**代码运行时每次都会用到，和数据库表结构要保持一致。**）：

假设创建一个 `User` 模型：

```js
// app/model/users.js
module.exports = app => {
  const { STRING } = app.Sequelize

  const Users = app.model.define('users', {
    userId: { type: STRING, primaryKey: true, unique: true, length: 255 },
    email: { type: STRING, unique: true, length: 255 },
    name: { type: STRING, length: 255 },
    company: { type: STRING, length: 255 }
  }, {
    underscored: false, // Sequelize会自动将驼峰转为下划线命名，此处禁用
    timestamps: false, // 不需要created_at和updated_at字段
  })

  return Users
}

```

**第四步**，配置 `migrate` 与 `seed`：

`database/config.json` 文件会在后续执行 `migrate` 数据库迁移或者 `seed` 数据同步时用到，因此首先对应配置下这个文件：

```json
// database/config.json
{
  "development": {
    "dialect": "mysql",
    "host": "mysql",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "your-database-name",
    "timezone": "Asia/Shanghai"
  },
  "test": {
    "dialect": "mysql",
    "host": "mysql",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "your-database-name",
    "timezone": "Asia/Shanghai"
  },
  "production": {
    "dialect": "mysql",
    "host": "mysql",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "your-database-name",
    "timezone": "Asia/Shanghai"
  }
}
```

执行 `npx sequelize-cli migration:generate --name users` 就会创建一个针对 `users` 表的迁移文件：

```js
// database/migrations/20230418150000-users.js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
```

在该文件中，我们可以进行数据库的迁移，比如**创建表**、**添加字段**、**删除字段**等等。以创建 `users` 表为例：

```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // 执行 npx sequelize-cli db:migrate 时，触发up函数
  async up (queryInterface, Sequelize) {
    const { STRING } = Sequelize
    await queryInterface.createTable('users', {
      userId: {
        type: STRING,
        primaryKey: true,
        unique: true,
        length: 255
      },
      email: {
        type: STRING,
        unique: true,
        length: 255
      },
      name: {
        type: STRING,
        length: 255
      },
      company: {
        type: STRING,
        length: 255
      }
    })
  },
  // 执行 npx sequelize-cli db:migrate:undo 时，触发down函数
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
```

`seed` 的相关操作与 `migrate` 类似，但是二者的影响范围不同。

利用 `npx sequelize-cli seed:generate --name users` 创建一个 `users` 的 `seed` 文件：

```js
// database/seeders/20230418150000-users.js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
```

在 `seed` 文件中，我们可以进行数据同步，比如**插入数据**、**删除数据**等等。以同步 `users` 表为例：

```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // 执行 npx sequelize-cli db:seed:all 时，触发up函数
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      userId: '1',
      email: 'xxx@gmail.com',
      name: 'xxx',
      company: 'xxx'
    }], {});
  },
  // 执行 npx sequelize-cli db:seed:undo 时，触发down函数
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { userId: '1' }, {});
  }
};
```

## 2.egg-sequelize

在上一节中，已经对项目做了接入 `Sequelize` 的改造工作。

而当我们在 `Egg.js` 中做开发工作时，我们的代码需要和 `Sequelize` 连接起来，以操作数据库。

此时，我们可以安装[egg-sequelize](https://eggjs.org/zh-CN/tutorials/sequelize)。

首先安装依赖：

:::code-group

```shell [pnpm]
pnpm add egg-sequelize mysql2
```

```shell [yarn]
yarn add egg-sequelize mysql2
```

```shell [npm]
npm install egg-sequelize mysql2 --save
```
:::

:::tip
由于笔者使用的是 `mysql-server`，所以需要手动安装 `mysql2` 驱动。

如果使用的是 `postgreSQL`，则需要安装 `pg` 驱动。
:::

在 `plugin.js` 中进行启用：

```js
// config/plugin.js
module.exports = {
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
}
```

在 `config.default.js` 中进行配置：

```js
// config/config.default.js
module.exports = appInfo => {
  const config = exports = {}
  config.sequelize = {
    dialect: 'mysql',
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'your-database-name',
    timezone: 'Asia/Shanghai'
  }
  return config
}
```

在上述配置完成后，我们就可以使用 `sequelize` 进行数据库操作了。

1. 如果在 `Egg.js` 中要访问 `sequelize` 的方法，那么可以：

```js
const { Op } = ctx.app.Sequelize
```

2. 利用 `sequelize` 进行增删改查：

```js
// Create
this.ctx.model.Users.create({
  userId: 1,
  email: 'test@example.com',
  password: '123456'
})
// Destroy
this.ctx.model.Users.destroy({
  where: {
    userId: 1
  }
})
// Update
this.ctx.model.Users.update({
  password: '123456'
}, {
  where: {
    userId: 1
  }
})
// Find
this.ctx.model.Users.findOne({
  where: {
    userId
  }
})
```

## 3.Sequelize命令总结

```shell
npx sequelize-cli init                        # 初始化项目

npx sequelize-cli migration:generate --name migration_name  # 创建迁移
npx sequelize-cli seed:generate --name seed_name  # 创建 seed

npx sequelize-cli db:migrate                   # 运行所有迁移
npx sequelize-cli db:migrate:undo              # 回滚最后一个迁移
npx sequelize-cli db:migrate:undo:all           # 回滚所有迁移

npx sequelize-cli db:seed:all                  # 运行所有 seed
npx sequelize-cli db:seed:undo                 # 回滚最后一个 seed
npx sequelize-cli db:seed:undo:all               # 回滚所有 seed

npx sequelize-cli db:migrate:status            # 显示迁移状态
```

## 4.Docker中配置Sequelize

我们的 `Egg.js` 程序在部署时，每一次都需要提前运行 `npx sequelize-cli db:migrate ` 或者 `npx sequelize-cli db:seed:all` 来将数据库变动到数据库中。

这一步很麻烦，因此我们可以在 `Docker` 中进行配置，以实现自动执行，减少人工遗忘或者错误。

### 1.在 Dockerfile 中执行（适用于开发环境）

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install

# 执行 migration 和 seed（可选）
RUN npx sequelize-cli db:migrate && \
    npx sequelize-cli db:seed:all

CMD ["npm", "start"]
```

缺点：只会在构建镜像时执行一次，不适合多次部署或集群。

### 2.在入口脚本中执行（推荐）

在 `docker-entrypoint.sh` 或启动脚本中自动执行：

```sh
#!/bin/sh

# 等待数据库启动（可选，取决于你的数据库是否容器化）
# sleep 10

echo "Running DB migration..."
npx sequelize-cli db:migrate

echo "Running DB seed..."
npx sequelize-cli db:seed:all

echo "Starting app..."
npm start
```

然后修改 `Dockerfile`：

```dockerfile
COPY docker-entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]
```
