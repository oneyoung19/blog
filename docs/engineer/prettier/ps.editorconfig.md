---
title: PS.Editor Config
---

`.editorconfig` 用来规范编辑器设置。

[官网介绍](https://editorconfig.org/)

## editorconfig & prettier

`.editorconfig` 与 `prettier` 并不冲突。但部分选项可以通过 `prettier` 的 `options` [进行覆盖](https://prettier.io/docs/en/configuration#editorconfig)。

之所以说 `prettier` 不冲突，是因为二者方向不完全一样。

- `prettier` 是从脚本方面对代码进行格式化；
- 而`.editorconfig` 是约束编辑器的配置。

譬如假设 `prettier` 配置了 `tabs: true` 和 `tabWidth: 2`，也就是说是用 `tab` 缩进且单个宽度为 `2` 字符。

但在编辑器中，可能 `tab` 的单个宽度为 `4` 字符。那么此时在代码书写完后，只能通过 `prettier . --write` 重新格式化。

但如果利用 `.editorconfig` 设置 `tab` 为 `2` 字符，则保持一致，那么就无需 `prettier . --write` 格式化了。

:::tip
如果通过 `CLI` 调用 `prettier`，那么 `prettier` 会自动读取项目根目录下的 `.editorconfig`，并[将其中的可转化属性，集成到 `Prettier` 设置中](https://prettier.io/docs/en/configuration#editorconfig)。

如果通过 `API` 调用 `prettier`，那么需要设置 `options.editorconfig = true`，才会读取项目根目录下的 `.editorconfig`。

可以查看这个[issue](https://github.com/prettier/prettier/issues/6176)。
:::

## .editorconfig

这里有一份完整的 `.editorconfig` 可供日常开发使用：

```yaml
# If use the editor vscode, you need to install 'EditorConfig for VS Code' in the extensions store.
# See more at https://editorconfig.org & https://spec.editorconfig.org/#supported-pairs
root = true

[*]
charset = utf-8

# Prettier builts in
insert_final_newline = true

# Prettier won’t trim trailing whitespace inside template strings, but editor might.
trim_trailing_whitespace = true

# Configurable Prettier behaviors
indent_style = tab
indent_size = 2
max_line_length = 80
end_of_line = lf

# Other specific file type configurations are primarily handled by Prettier.
```

## EditorConfig for VS Code

如果要在 `VS Code` 等不支持 `EditorConfig` 的编辑器中使用，需要安装额外插件。

譬如在 `VS Code` 中安装 `EditorConfig for VS Code` 插件。
