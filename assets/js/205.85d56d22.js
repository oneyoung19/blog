(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{667:function(s,a,t){"use strict";t.r(a);var e=t(40),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本节内容主要记录 "),t("code",[s._v("Eslint")]),s._v(" 涉及到的各种命令行。")]),s._v(" "),t("p",[s._v("在前文中，应该已经了解到了 "),t("code",[s._v("Eslint")]),s._v(" 检测文件的基础语法：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("npx eslint "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("glob"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上述语法中的 "),t("code",[s._v("options")]),s._v(" 即是本节重点论述内容。")]),s._v(" "),t("p",[s._v("参考文档："),t("a",{attrs:{href:"https://zh-hans.eslint.org/docs/latest/user-guide/command-line-interface",target:"_blank",rel:"noopener noreferrer"}},[s._v("Eslint命令行"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"_9-1-基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-基础配置"}},[s._v("#")]),s._v(" 9-1.基础配置")]),s._v(" "),t("h3",{attrs:{id:"_9-1-1-no-eslintrc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-1-no-eslintrc"}},[s._v("#")]),s._v(" 9-1-1."),t("code",[s._v("--no-eslintrc")])]),s._v(" "),t("p",[s._v("忽略 "),t("code",[s._v(".eslintrc.*")]),s._v(" 和 "),t("code",[s._v("package.json")]),s._v(" 文件中的配置。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-2-c-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-2-c-config"}},[s._v("#")]),s._v(" 9-1-2."),t("code",[s._v("-c, --config")])]),s._v(" "),t("p",[s._v("指定配置文件。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-3-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-3-env"}},[s._v("#")]),s._v(" 9-1-3."),t("code",[s._v("--env")])]),s._v(" "),t("p",[s._v("指定语言环境。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-4-ext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-4-ext"}},[s._v("#")]),s._v(" 9-1-4."),t("code",[s._v("--ext")])]),s._v(" "),t("p",[s._v("指定匹配目标文件的扩展名。")]),s._v(" "),t("p",[t("code",[s._v("--ext")]),s._v(" 只适用于检测目标为"),t("strong",[s._v("目录")]),s._v("的情况。若使用匹配模式或指定文件名，则忽略 "),t("code",[s._v("--ext")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-5-global"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-5-global"}},[s._v("#")]),s._v(" 9-1-5."),t("code",[s._v("--global")])]),s._v(" "),t("p",[s._v("指定全局变量。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-6-parser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-6-parser"}},[s._v("#")]),s._v(" 9-1-6."),t("code",[s._v("--parser")])]),s._v(" "),t("p",[s._v("指定解析器，默认使用 "),t("code",[s._v("espree")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-7-parser-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-7-parser-options"}},[s._v("#")]),s._v(" 9-1-7."),t("code",[s._v("--parser-options")])]),s._v(" "),t("p",[s._v("指定解析器的配置选项。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-8-resolve-plugins-relative-to"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-8-resolve-plugins-relative-to"}},[s._v("#")]),s._v(" 9-1-8."),t("code",[s._v("--resolve-plugins-relative-to")])]),s._v(" "),t("p",[s._v("指定解析插件的目录位置。")]),s._v(" "),t("p",[s._v("默认为当前目录，即默认从当前目录下的 "),t("code",[s._v("node_modules")]),s._v(" 中加载。")]),s._v(" "),t("h2",{attrs:{id:"_9-2-指定规则与插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-指定规则与插件"}},[s._v("#")]),s._v(" 9-2.指定规则与插件")]),s._v(" "),t("h3",{attrs:{id:"_9-2-1-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-1-plugin"}},[s._v("#")]),s._v(" 9-2-1."),t("code",[s._v("--plugin")])]),s._v(" "),t("p",[s._v("指定要加载的插件。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("npx eslint --plugin jquery file.js\nnpx eslint --plugin eslint-plugin-mocha file.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_9-2-2-rule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-2-rule"}},[s._v("#")]),s._v(" 9-2-2."),t("code",[s._v("--rule")])]),s._v(" "),t("p",[s._v("指定规则。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("npx eslint --rule "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'quotes: [error, double]'")]),s._v("\nnpx eslint --rule "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'guard-for-in: error'")]),s._v(" --rule "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'brace-style: [error, 1tbs]'")]),s._v("\nnpx eslint --rule "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jquery/dollar-sign: error'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_9-3-修复问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-修复问题"}},[s._v("#")]),s._v(" 9-3.修复问题")]),s._v(" "),t("h3",{attrs:{id:"_9-3-1-fix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-1-fix"}},[s._v("#")]),s._v(" 9-3-1."),t("code",[s._v("--fix")])]),s._v(" "),t("p",[t("code",[s._v("Eslint")]),s._v(" 尽可能的修复可以修复的问题。")]),s._v(" "),t("p",[s._v("这些修复会对文件本身产生影响。")]),s._v(" "),t("h3",{attrs:{id:"_9-3-2-fix-dry-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-2-fix-dry-run"}},[s._v("#")]),s._v(" 9-3-2."),t("code",[s._v("--fix-dry-run")])]),s._v(" "),t("p",[s._v("此项与 "),t("code",[s._v("--fix")]),s._v(" 的效果相同，但有一点不同：修复后的代码不会保存在文件系统中。")]),s._v(" "),t("p",[s._v("这使得从 "),t("code",[s._v("stdin")]),s._v(" 中修复代码成为可能（当与 "),t("code",[s._v("--stdin")]),s._v(" 标志一起使用时）。")]),s._v(" "),t("p",[s._v("因为默认的格式不输出固定的代码，你必须使用另一种格式（如 "),t("code",[s._v("json")]),s._v("）来获得固定的内容。这里有该模式的示例：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" lint:command-line --no-eslintrc --stdin --fix-dry-run --format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此标志适用于需要命令行进行自动修复却不保存到文件系统的集成（例如编辑器插件）。")]),s._v(" "),t("h3",{attrs:{id:"_9-3-3-fix-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-3-fix-type"}},[s._v("#")]),s._v(" 9-3-3."),t("code",[s._v("--fix-type")])]),s._v(" "),t("p",[s._v("指定在使用 "),t("code",[s._v("--fix")]),s._v(" 或 "),t("code",[s._v("--fix-dry-run")]),s._v(" 时指定的修复类型。")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("problem")]),s._v(" 修复代码中的潜在错误")]),s._v(" "),t("li",[t("code",[s._v("suggestion")]),s._v(" 改进代码")]),s._v(" "),t("li",[t("code",[s._v("layout")]),s._v(" 修复不改变程序结构（AST）的问题")]),s._v(" "),t("li",[t("code",[s._v("directive")]),s._v(" 修复内联指令，如 // eslint-disable。")])]),s._v(" "),t("h2",{attrs:{id:"_9-4-忽略文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-忽略文件"}},[s._v("#")]),s._v(" 9-4.忽略文件")]),s._v(" "),t("h3",{attrs:{id:"_9-4-1-ignore-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-1-ignore-path"}},[s._v("#")]),s._v(" 9-4-1."),t("code",[s._v("--ignore-path")])]),s._v(" "),t("p",[s._v("指定 "),t("code",[s._v(".eslintignore")]),s._v(" 文件位置。")]),s._v(" "),t("p",[t("code",[s._v("Eslint")]),s._v(" 默认从当前工作目录下寻找 "),t("code",[s._v(".eslintignore")]),s._v(" 文件。")]),s._v(" "),t("p",[s._v("可以通过此命令行选项进行覆盖此默认情况。")]),s._v(" "),t("h3",{attrs:{id:"_9-4-2-no-ignore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-2-no-ignore"}},[s._v("#")]),s._v(" 9-4-2."),t("code",[s._v("--no-ignore")])]),s._v(" "),t("p",[s._v("禁止根据 "),t("code",[s._v(".eslintignore")]),s._v("、"),t("code",[s._v("--ignore-path")]),s._v("、"),t("code",[s._v("--ignore-pattern")]),s._v("、"),t("code",[s._v("ignorePatterns")]),s._v(" 属性排除文件。")]),s._v(" "),t("h3",{attrs:{id:"_9-4-3-ignore-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-3-ignore-pattern"}},[s._v("#")]),s._v(" 9-4-3."),t("code",[s._v("--ignore-pattern")])]),s._v(" "),t("p",[s._v("指定目标忽略文件的匹配格式。")]),s._v(" "),t("p",[s._v("使用方式基本雷同 "),t("code",[s._v(".eslintignore")]),s._v(" 的匹配方式。")]),s._v(" "),t("p",[s._v("要注意的一点是如果要指定多种匹配格式的话：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# work")]),s._v("\neslint file.js --ignore-pattern "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lib/*.js'")]),s._v(" --ignore-pattern "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'util/*.js'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# not work")]),s._v("\neslint file.js --ignore-pattern "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lib/*.js'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'util/*.js'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_9-5-使用stdin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-使用stdin"}},[s._v("#")]),s._v(" 9-5.使用stdin")]),s._v(" "),t("p",[s._v("什么是"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000018650023",target:"_blank",rel:"noopener noreferrer"}},[s._v("stdin"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"_9-5-1-stdin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-1-stdin"}},[s._v("#")]),s._v(" 9-5-1."),t("code",[s._v("--stdin")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相当于 在pipe流中运行eslint 然后将结果从标准化输入中读取")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" main.js  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" npx eslint --stdin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("更多的场景下，一般与 "),t("code",[s._v("--fix-dry-run")]),s._v(" 联用（必须设置 "),t("code",[s._v("--format")]),s._v("，譬如可以将结果以 "),t("code",[s._v("json")]),s._v(" 形式读取出来）：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" main.js "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" npx eslint --stdin --fix-dry-run --format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_9-6-处理警告"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-处理警告"}},[s._v("#")]),s._v(" 9-6.处理警告")]),s._v(" "),t("h3",{attrs:{id:"_9-6-1-quiet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-1-quiet"}},[s._v("#")]),s._v(" 9-6-1."),t("code",[s._v("--quiet")])]),s._v(" "),t("p",[s._v("关闭 "),t("code",[s._v("warn")]),s._v(" 警告，只会报告 "),t("code",[s._v("error")]),s._v(" 错误警告。")]),s._v(" "),t("h3",{attrs:{id:"_9-6-2-max-warnings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-2-max-warnings"}},[s._v("#")]),s._v(" 9-6-2."),t("code",[s._v("--max-warnings")])]),s._v(" "),t("p",[s._v("指定 "),t("code",[s._v("warn")]),s._v(" 警告的数量上限，当超过这个上限之后，"),t("code",[s._v("eslint")]),s._v(" 在控制台会以错误状态退出，并可能伴随着以下类似提示：")]),s._v(" "),t("p",[t("code",[s._v("ESLint found too many warnings (maximum: 1)")])]),s._v(" "),t("h2",{attrs:{id:"_9-7-输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-输出"}},[s._v("#")]),s._v(" 9-7.输出")]),s._v(" "),t("h3",{attrs:{id:"_9-7-1-o-output-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-1-o-output-file"}},[s._v("#")]),s._v(" 9-7-1."),t("code",[s._v("-o, --output-file")])]),s._v(" "),t("p",[s._v("将报告写入到指定文件内。")]),s._v(" "),t("h3",{attrs:{id:"_9-7-2-f-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-2-f-format"}},[s._v("#")]),s._v(" 9-7-2."),t("code",[s._v("-f, --format")])]),s._v(" "),t("p",[s._v("指定控制台的输出格式。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://zh-hans.eslint.org/docs/latest/user-guide/formatters/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Eslint内置格式化一览"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" lint:command-line -o ./src/command-line/log.html --format"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_9-7-3-color-no-color"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-3-color-no-color"}},[s._v("#")]),s._v(" 9-7-3."),t("code",[s._v("--color, --no-color")])]),s._v(" "),t("p",[s._v("启用/禁用控制台上的颜色渲染。")]),s._v(" "),t("h2",{attrs:{id:"_9-8-行内配置注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-行内配置注释"}},[s._v("#")]),s._v(" 9-8.行内配置注释")]),s._v(" "),t("h3",{attrs:{id:"_9-8-1-no-inline-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-1-no-inline-config"}},[s._v("#")]),s._v(" 9-8-1."),t("code",[s._v("--no-inline-config")])]),s._v(" "),t("p",[s._v("禁止内联注释配置。")]),s._v(" "),t("p",[s._v("设置之后，如 "),t("code",[s._v("eslint-enable")]),s._v(" 、"),t("code",[s._v("eslint-disable")]),s._v(" 等内联注释都会失效。")]),s._v(" "),t("h3",{attrs:{id:"_9-8-2-report-unused-disable-directives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-2-report-unused-disable-directives"}},[s._v("#")]),s._v(" 9-8-2."),t("code",[s._v("--report-unused-disable-directives")])]),s._v(" "),t("p",[s._v("报告实际没有产生作用的内联注释配置。")]),s._v(" "),t("p",[s._v("主要的应用场景是这样：")]),s._v(" "),t("p",[s._v("譬如，在某次开发中，发现代码的一行需要 "),t("code",[s._v("lint")]),s._v("。")]),s._v(" "),t("p",[s._v("为了快速和方便，直接添加了 "),t("code",[s._v("//eslint-disable-line")]),s._v("。")]),s._v(" "),t("p",[s._v("但后续可能 "),t("code",[s._v("eslint")]),s._v(" 版本升级修复了规则，或者其他开发成员在 "),t("code",[s._v("rules")]),s._v(" 中关闭了规则。")]),s._v(" "),t("p",[s._v("那么这时就可以利用该命令行，进行检测代码中无用的配置，进而优化代码。")]),s._v(" "),t("h2",{attrs:{id:"_9-9-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-9-缓存"}},[s._v("#")]),s._v(" 9-9.缓存")]),s._v(" "),t("h3",{attrs:{id:"_9-9-1-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-9-1-cache"}},[s._v("#")]),s._v(" 9-9-1."),t("code",[s._v("--cache")])]),s._v(" "),t("p",[s._v("使用该命令时，默认会在当前工作目录下创建一个 "),t("code",[s._v(".eslintcache")]),s._v(" 文件。")]),s._v(" "),t("p",[s._v("该文件会提高检测和 "),t("code",[s._v("lint")]),s._v(" 执行效率。")]),s._v(" "),t("h3",{attrs:{id:"_9-9-2-cache-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-9-2-cache-location"}},[s._v("#")]),s._v(" 9-9-2."),t("code",[s._v("--cache-location")])]),s._v(" "),t("p",[s._v("也可以使用该命令行选项，指定在某一目录下创建 "),t("code",[s._v(".eslintcache")]),s._v(" 文件，或者指定某一文件为 "),t("code",[s._v(".eslintcache")]),s._v(" 文件（内容会被写入该文件内）。")]),s._v(" "),t("h3",{attrs:{id:"_9-9-3-cache-strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-9-3-cache-strategy"}},[s._v("#")]),s._v(" 9-9-3."),t("code",[s._v("--cache-strategy")])]),s._v(" "),t("p",[s._v("该项用于指定检测文件是否变更的缓存策略。")]),s._v(" "),t("p",[s._v("可设定值有 "),t("code",[s._v("metadata")]),s._v("、"),t("code",[s._v("content")]),s._v("。")]),s._v(" "),t("p",[s._v("默认为 "),t("code",[s._v("metadata")]),s._v("，即文件修改时间等数据信息。")]),s._v(" "),t("p",[s._v("设定为 "),t("code",[s._v("content")]),s._v(" 后，会根据文件内容是否变更，来判定文件是否变更。")]),s._v(" "),t("h2",{attrs:{id:"_9-10-杂项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-杂项"}},[s._v("#")]),s._v(" 9-10.杂项")]),s._v(" "),t("h3",{attrs:{id:"_9-10-1-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-1-init"}},[s._v("#")]),s._v(" 9-10-1."),t("code",[s._v("--init")])]),s._v(" "),t("p",[s._v("此项将基于当前目录运行 "),t("code",[s._v("npm init @eslint/config")]),s._v(" 来启动配置并初始化项目。")]),s._v(" "),t("p",[t("code",[s._v("npm init")]),s._v(" 有以下几种用法：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--force"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-f"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--yes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--scope"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("same as "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("npx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/create"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("same as "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("npx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("@scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("create-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("因此，"),t("code",[s._v("npm init @eslint/config")]),s._v(" 实际上相当于 "),t("code",[s._v("npx @eslint/create-config")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_9-10-2-env-info"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-2-env-info"}},[s._v("#")]),s._v(" 9-10-2."),t("code",[s._v("--env-info")])]),s._v(" "),t("p",[s._v("此项输出关于执行环境的信息，包括 "),t("code",[s._v("Node")]),s._v("、"),t("code",[s._v("npm")]),s._v(" 的版本，以及 "),t("code",[s._v("ESLint")]),s._v(" 的本地和全局安装。")]),s._v(" "),t("p",[t("code",[s._v("ESLint")]),s._v(" 团队可能会要求提供这些信息以帮助解决 "),t("code",[s._v("bug")]),s._v("。")]),s._v(" "),t("p",[s._v("可能有如下类似输出：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Environment Info:\n\nNode version: v14.16.0\nnpm version: v6.14.11\nLocal ESLint version: v8.28.0 (Currently used)\nGlobal ESLint version: Not found\nOperating System: darwin 19.6.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_9-10-3-debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-3-debug"}},[s._v("#")]),s._v(" 9-10-3."),t("code",[s._v("--debug")])]),s._v(" "),t("p",[s._v("该选项将调试信息输出到控制台。")]),s._v(" "),t("h3",{attrs:{id:"_9-10-4-h-help"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-4-h-help"}},[s._v("#")]),s._v(" 9-10-4."),t("code",[s._v("-h,--help")])]),s._v(" "),t("p",[s._v("输出帮助菜单并显示所有可用选项。若此项存在，则忽略其他选项。")]),s._v(" "),t("h3",{attrs:{id:"_9-10-5-v-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-5-v-version"}},[s._v("#")]),s._v(" 9-10-5."),t("code",[s._v("-v, --version")])]),s._v(" "),t("p",[s._v("输出当前的 "),t("code",[s._v("ESLint")]),s._v(" 版本至控制台。若此项存在，则忽略其他选项。")]),s._v(" "),t("h3",{attrs:{id:"_9-10-6-print-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-10-6-print-config"}},[s._v("#")]),s._v(" 9-10-6."),t("code",[s._v("--print-config")])]),s._v(" "),t("p",[s._v("输出用于传递的文件的配置。"),t("strong",[s._v("若此项存在，则将不会进行 "),t("code",[s._v("lint")]),s._v(" 提示，并且仅与该选项相关的其他命令行选项才会生效")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("npx eslint --print-config file.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("额外注意的一点：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --cache选项失效 而且不会进行lint检测")]),s._v("\nnpx eslint --cache --print-config file.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_9-11-退出码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-11-退出码"}},[s._v("#")]),s._v(" 9-11.退出码")]),s._v(" "),t("p",[s._v("当对文件进行检查时，"),t("code",[s._v("Eslint")]),s._v(" 将以下方任一代码退出：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("0")]),s._v(": 检查通过，没有任何错误。若 "),t("code",[s._v("--max-warnings")]),s._v(" 标志为 "),t("code",[s._v("n")]),s._v("，则最多允许有 "),t("code",[s._v("n")]),s._v(" 个警告。")]),s._v(" "),t("li",[t("code",[s._v("1")]),s._v(": 着色成功，但至少有一个错误或有超过 "),t("code",[s._v("--max-warnings")]),s._v(" 项的警告数。")]),s._v(" "),t("li",[t("code",[s._v("2")]),s._v(": 由于配置问题或内部错误，检查失败。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);