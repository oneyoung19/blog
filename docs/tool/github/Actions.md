---
title: Actions
---

`GitHub Actions` 是 GitHub 提供的持续集成服务，可以自动构建、测试和部署代码。`

它能够定义具体的触发时机和触发条件，当满足条件时，就会自动执行定义的步骤。

详见[GitHub Actions 入门教程——阮一峰](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)。

该配置通常定义在 `.github/workflows` 目录下，譬如有 `.github/workflows/build-and-deploy.yml`：

```yml
name: Build and Deploy

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.13.0]

    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Build
      run: |
        npm install
        npm run build
    
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        folder: dist
```

以上的 `yml` 配置，当推送到 `main` 分支或者合并 `PR` 到 `main`时，就会自动执行 `Build` 和 `Deploy` 两个步骤。

其中 `Build` 步骤指定了使用 `Node.js 16.13.0`，并执行了 `npm install` 和 `npm run build` 命令。

`Deploy` 步骤使用了 [JamesIves/github-pages-deploy-action](https://github.com/marketplace/actions/deploy-to-github-pages) 插件，将 `dist` 目录下的文件部署到 `GitHub Pages`。

:::tip
`permissions: contents: write` 指令表明该工作流可以修改仓库的内容。

配合 `JamesIves/github-pages-deploy-action` 插件，可以免设置 `GitHub Access Token`。
:::
