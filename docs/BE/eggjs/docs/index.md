---
title: EggJs 学习指南
---

`Egg.js` 是一个基于 `Node.js` 的企业级框架，主要用于构建高性能的 `Web` 应用和 `API`。

它由阿里巴巴团队开发，旨在提供一个灵活、可扩展的开发环境，适合大型项目的需求。

### 1. 特性

- **插件化架构**：`Egg.js` 采用插件化的设计，允许开发者根据需要选择和使用不同的插件，增强应用的功能。
- **中间件支持**：`Egg.js` 支持中间件，可以在请求处理的不同阶段插入自定义逻辑，方便进行请求处理、日志记录、权限验证等操作。
- **强大的路由系统**：`Egg.js` 提供了灵活的路由配置，支持 RESTful 风格的 API 设计，方便管理和组织路由。
- **高性能**：基于 `Koa.js`，`Egg.js` 继承了 `Koa` 的高性能特性，能够处理大量并发请求。
- **内置支持 TypeScript**：`Egg.js` 原生支持 `TypeScript`，方便开发者使用类型系统来提高代码的可维护性和可读性。

### 2. 目录结构

`Egg.js` 的项目结构清晰，通常包括以下几个主要目录：

- `app`：应用的核心代码，包括控制器、服务、路由等。
- `config`：应用的配置文件，包括环境配置、插件配置等。
- `public`：静态资源文件，如图片、`CSS`、`JavaScript` 等。
- `test`：测试代码，支持单元测试和集成测试。

:::tip
完整结构可查看[egg目录结构](https://www.eggjs.org/zh-CN/basics/structure)。
:::

### 3. 安装和使用

要创建一个新的 `Egg.js` 项目，可以使用以下命令：

:::code-group

```shell [pnpm]
pnpm create egg --type=simple --registry=http://r.cnpmjs.org
```

```shell [npm]
npm init egg --type=simple
```

:::

- `simple` 简单应用程序骨架
- `empty` 空的应用程序骨架
- `plugin` 插件骨架
- `framework` 框架骨架

然后进入项目目录，安装依赖：

```bash
cd your-project-name
pnpm install
```

启动应用：

```bash
pnpm run dev
```
