---
title: Can't find Python executable 'python'
layout: home
---

在项目初始化执行 `npm install` 时，可能会遇到以下错误：

```shell
Error: Can't find Python executable "python", you can set the PYTHON env variable.
```

1. 安装 `pyenv`

```shell
brew install pyenv
```

2. 安装 `python`

```shell
pyenv install 2.7.18
```

设置为全局版本：

```shell
pyenv global 2.7.18
```

3. 添加 `python` 到 `PATH`

在 `~/.zshrc` 中添加以下内容：

```shell
export PATH="${HOME}/.pyenv/shims:${PATH}"
```

4. 将 `python` 的执行目录设置到 `npm config` 中：

```shell
npm config set python $(which python)
```

如果 `npm config set` 命令失败，则可以使用下面命令手动写入文件：

```shell
npm config edit
```

5. 或者创建 `.npmrc` 文件，添加以下内容：

```shell
python = $(which python)
```

6. 执行 `source ~/.zshrc` 使配置生效。然后执行 `npm install` 即可。
