---
title: PM2托管
---

## 1.前言

- [PM2 Github仓库](https://github.com/Unitech/pm2)
- [PM2官网](https://pm2.keymetrics.io/docs/usage/quick-start/)

`PM2` 是一个流行的 `Node.js` 进程管理工具，用于管理和监控 `Node.js` 应用程序。

它提供了一个强大的命令行工具，能够简化应用程序的启动、停止、重启和监控。

`PM2` 的主要功能包括：

1. **进程管理**：可以同时管理多个 `Node.js` 应用程序，支持应用程序的启动、停止、重启等操作。
2. **负载均衡**：支持多实例模式，可以在多核 `CPU` 上运行多个应用实例，提供负载均衡。
3. **进程监控**：实时监控应用程序的运行状态，如 `CPU` 和内存使用情况，并可以自动重启崩溃的应用。
4. **日志管理**：自动管理应用程序的日志，支持日志轮换和合并日志。
5. **集群模式**：支持集群模式，可以在多个服务器上分布式部署应用程序。
6. **零停机重载**：在不停止服务的情况下更新代码并重新加载应用程序。
7. **支持多种语言**：虽然 `PM2` 是为 `Node.js` 设计的，但它也可以用于管理其他语言编写的应用程序。

## 2.安装及常用命令

```shell
# 全局安装
npm install pm2 -g
```

- `pm2 list` 查看正在运行的应用;
- `pm2 logs` 查看应用程序的日志。

## 3.ecosystem.config.js

虽然可以通过 `pm2 start app.js` 的方式来直接启动应用程序，但是 `PM2` 还提供了一种更方便的方式来管理应用程序，即 `ecosystem.config.js` 文件。

```js
module.exports = {
  apps: [
    {
      // 应用名称
      name: 'www',           
      // 启动脚本路径
      script: '.output/server/index.mjs',      
      // 实例数量，可以是数字或 'max'
      instances: '1',        
      // 启动模式，如 'cluster' 或 'fork'
      exec_mode: 'cluster',    
      // 是否启用文件监控，自动重启
      watch: true,
      // 忽略文件
      ignore_watch: ['node_modules', 'log'],
      // 最大内存限制，超出时重启
      max_memory_restart: '500M', 
      // 应用程序所在的目录
      cwd: '',
      // 传递给脚本的参数，例如nuxt start命令，参数为start
      args: '',
      // 完整日志路径
      output: 'log/output.log',
      // 错误日志路径
      error: 'log/error.log',
      // 访问日志路径
      log: 'log/access.log',
      // 日志格式
      log_type: 'json',
      // 合并日志
      merge_logs: true,
      // 日志日期格式
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // 最小运行时间，这里设置的是60s即如果应用程序在* 60s内退出，pm2会认为程序异常退出，此时触发重启* max_restarts设置数量，应用运行少于时间被认为是异常启动
      min_uptime: '60s',
      // 设置应用程序异常退出重启的次数，默认15次（从0开始计数）,最大异常重启次数，即小于min_uptime运行时间重启次数；
      max_restarts: 10,
      // 启用/禁用应用程序崩溃或退出时自动重启，默认为true, 发生异常的情况下自动重启
      autorestart: true,
      // 异常重启情况下，延时重启时间
      restart_delay: 30,
      // pm2 start ecosystem.config.cjs 
      env: {                   
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_SIT: {                   
        NODE_ENV: 'production',
        PORT: 3030,
      },
      env_UAT: {                   
        NODE_ENV: 'production',
        PORT: 3030,
      },
      // pm2 start ecosystem.config.cjs --env PROD
      env_PROD: {                   
        NODE_ENV: 'production',
        PORT: 3030,
      }
    },
    // {
    //   script: './service-worker/',
    //   watch: ['./service-worker']
    // }
  ],
  deploy : {
    production : {
      // SSH 用户名
      user: '',
      // 服务器地址
      host: '',
      // Git 分支
      ref: 'origin/master', 
      // Git 仓库地址
      repo: 'GIT_REPOSITORY', 
      // 远程服务器上项目路径
      path: 'DESTINATION_PATH',
      // 部署后要执行的命令
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.cjs --env production' 
    }
  }
}
```