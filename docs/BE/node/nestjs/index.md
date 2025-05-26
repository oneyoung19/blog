---
title: Nest.js
---

[learn-nestjs](https://github.com/oneyoung19/learn-nestjs)

## 1.概述

`Nest.js` 是一个强大、可扩展且渐进式的 `Node.js` 框架，用于构建高效且可扩展的服务器端应用程序。受 `Angular` 启发，`Nest.js` 利用 `TypeScript` 并结合了面向对象编程（`OOP`）、函数式编程（`FP`）和函数式响应式编程（`FRP`）的元素。

## 2.主要特性

- 🚀 **模块化架构**：采用模块化设计，促进代码可重用性和可维护性
- 💻 **TypeScript 支持**：一流的 `TypeScript` 集成，具有强类型
- 🔧 **依赖注入**：强大的内置依赖注入容器
- 🧩 **装饰器**：广泛使用装饰器，实现清晰和声明式的代码
- 🔌 **微服务**：原生支持微服务架构
- 🧪 **测试**：全面的测试工具和支持

## 3.核心概念

### 3-1.模块
`Nest.js` 使用模块来组织应用程序组件。每个模块封装相关功能。

```typescript
@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

### 3-2.控制器
处理传入的 `HTTP` 请求并定义 `API` 端点。

```typescript
@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return '用户列表';
  }
}
```

### 3-3.提供者
服务、仓库、工厂和其他可以作为依赖项注入的类。

```typescript
@Injectable()
export class UsersService {
  findAll() {
    return ['用户1', '用户2'];
  }
}
```

## 4.生命周期

```txt
Incoming Request
      ↓
[Middleware (Express)]
  （基于 Express 层，适合处理日志、请求体解析等通用逻辑）
      ↓
[Nest Lifecycle]
  ├─> Global Guards          ← 权限/认证控制（可依赖注入）
  ├─> Route Guards
      ↓
  ├─> Global Pipes           ← 参数验证、转换
  ├─> Route Pipes
      ↓
  ├─> Global Interceptors    ← 方法前：日志、缓存、格式包装等
  ├─> Route Interceptors
      ↓
  ├─> Controller Handler     ← 执行业务处理逻辑（Service 等）
      ↓
  ├─> Route Interceptors     ← 方法后：结果包装、异常处理
  ├─> Global Interceptors
      ↓
[If any error occurs at any step above]
      ↓
Exception Filters (Route → Global) ← 捕获异常，统一格式响应
```

## 5.生态系统

- `ORM` 集成（`TypeORM`, `Mongoose`）
- `GraphQL` 支持
- `WebSockets`
- 微服务模式
- 身份验证与授权
- 验证
- 缓存
- 任务调度

## 6.了解更多

- [官方文档](https://docs.nestjs.com)
- [GitHub 仓库](https://github.com/nestjs/nest)
- [Nest.js 教程](https://nestjs.com)

