(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{689:function(s,e,t){"use strict";t.r(e);var a=t(40),v=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("预设")]),s._v(" 是一组插件的集合。这是为了方便开发者在实际应用中无需再手动配置各类插件。")]),s._v(" "),t("h2",{attrs:{id:"官方预设"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方预设"}},[s._v("#")]),s._v(" 官方预设")]),s._v(" "),t("p",[t("code",[s._v("babel")]),s._v(" 官方已经提供了一些预设。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("@babel/preset-env")])]),s._v(" "),t("li",[t("code",[s._v("@babel/preset-flow")])]),s._v(" "),t("li",[t("code",[s._v("@babel/preset-react")])]),s._v(" "),t("li",[t("code",[s._v("@bbael/preset-typescript")])])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/search?q=babel-preset",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多预设"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("预设的使用配置跟插件的大致相同。")]),s._v(" "),t("p",[s._v("唯一要注意的是，"),t("strong",[s._v("预设的执行顺序与插件是相反的")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"babel-preset-env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env"}},[s._v("#")]),s._v(" @babel/preset-env")]),s._v(" "),t("p",[s._v("该预设可以称作环境预设。")]),s._v(" "),t("p",[s._v("提到环境，有非常重要的两点："),t("strong",[s._v("代码转换")]),s._v(" 与 "),t("strong",[s._v("polyfill")]),s._v("。恰好 "),t("code",[s._v("@babel/preset-env")]),s._v(" 帮我们把这两件事都比较优雅的实现了。")]),s._v(" "),t("p",[s._v("又由于浏览器的版本众多，我们必须在使用预设的时候告诉它，我们的目标浏览器是什么及是什么版本。也就是需要设置 "),t("code",[s._v("browserslist")]),s._v("。")]),s._v(" "),t("p",[s._v("为了行文方便，本章节所有 "),t("code",[s._v("preset-env")]),s._v(" 皆指代 "),t("code",[s._v("@babel/preset-env")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"browserslist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#browserslist"}},[s._v("#")]),s._v(" browserslist")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("babel")]),s._v(" 配合 "),t("code",[s._v("preset-env")]),s._v("使用，共有三种配置方法：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v(".browserslistrc")]),s._v("\n在项目根目录下添加 "),t("code",[s._v(".browserslistrc")]),s._v(" 文件。要注意的是，该文件是全局配置。譬如如果项目有 "),t("code",[s._v("postcss")]),s._v("，那么它也会读取该文件。")])]),s._v(" "),t("div",{staticClass:"language-rc line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> 1%\nlast 2 versions\nnot ie <= 8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("package.json")]),s._v(" 中设置 "),t("code",[s._v("browserslist")]),s._v("。"),t("strong",[s._v("该配置在项目范围中的作用及优先级同上项")]),s._v("。\n数组形式：")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"browserslist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie <= 8"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("字符串形式：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"browserslist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%, last 2 versions, not ie <= 8"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("给预设 "),t("code",[s._v("@babel/preset-env")]),s._v(" 设置 "),t("code",[s._v("target")]),s._v(" 参数。"),t("strong",[s._v("优先级在这三者中最高")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/preset-env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"targets"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not ie <= 8"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" options")]),s._v(" "),t("p",[s._v("下面是一些常见的设置属性。")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("targets")])])]),s._v(" "),t("p",[t("code",[s._v("string | Array<string> | { [string]: string }")]),s._v("，defaults to "),t("code",[s._v("{}")]),s._v("。")]),s._v(" "),t("p",[s._v("用来设置目标浏览器。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[s._v("modules")])])]),s._v(" "),t("p",[t("code",[s._v('"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false')]),s._v("，defaults to "),t("code",[s._v("auto")]),s._v("。")]),s._v(" "),t("p",[s._v("用来设置转译后的代码采用何种模块化方式。设置为 "),t("code",[s._v("false")]),s._v("时，将保留采用 "),t("code",[s._v("ES Module")]),s._v("。")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("webpack")]),s._v(" 项目中，强烈建议设置为 "),t("code",[s._v("false")]),s._v("，将 "),t("code",[s._v("import")]),s._v(" 交由 "),t("code",[s._v("webpack")]),s._v(" 处理。")]),s._v(" "),t("p",[s._v("因为 "),t("code",[s._v("webpack")]),s._v(" 可以对 "),t("code",[s._v("ES Module")]),s._v(" 做 "),t("code",[s._v("tree shaking")]),s._v("。")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("code",[s._v("useBuiltIns")])])]),s._v(" "),t("p",[t("code",[s._v('"usage"| "entry" | false')]),s._v("。default to "),t("code",[s._v("false")]),s._v("。")]),s._v(" "),t("p",[s._v("用来配置 "),t("code",[s._v("preset-env")]),s._v(" 如何处理 "),t("code",[s._v("polyfill")]),s._v("。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('"usage"')]),s._v(" 自动按需导入。")]),s._v(" "),t("li",[t("code",[s._v('"entry"')]),s._v(" 入口文件处引入 "),t("code",[s._v("polyfill")]),s._v("，"),t("code",[s._v("preset-env")]),s._v(" 会全量导入 "),t("code",[s._v("polyfill")]),s._v("。")]),s._v(" "),t("li",[t("code",[s._v("false")]),s._v(" 不再使用 "),t("code",[s._v("polyfill")]),s._v("。")])]),s._v(" "),t("p",[s._v("但 "),t("code",[s._v("preset-env")]),s._v(" 并不内置 "),t("code",[s._v("polyfill")]),s._v("，它只是一系列插件的集合。所以我们在使用该配置属性前需要安装"),t("code",[s._v("@babel/polyfill")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("babel@7.4.0")]),s._v(" 已开始弃用 "),t("code",[s._v("@babel/polyfill")]),s._v("。推荐使用"),t("code",[s._v("core-js")]),s._v("。当使用 "),t("code",[s._v("core-js")]),s._v(" 时，需要配合下个属性进行设置。")]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("code",[s._v("core-js")])])]),s._v(" "),t("p",[t("code",[s._v("2")]),s._v(", "),t("code",[s._v("3")]),s._v(" or "),t("code",[s._v("{ version: 2 | 3, proposals: boolean }")]),s._v(", defaults to "),t("code",[s._v("2")])]),s._v(" "),t("p",[s._v("用来配置 "),t("code",[s._v("core-js")]),s._v(" 的版本。")]),s._v(" "),t("p",[s._v("当设置其版本为 "),t("code",[s._v("2")]),s._v(" 或 "),t("code",[s._v("3")]),s._v(" 时，需要对应安装 "),t("code",[s._v("core-js@2")]),s._v(" 或 "),t("code",[s._v("core-js@3")]),s._v("。")]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("code",[s._v("ignoreBrowserslistConfig")])])]),s._v(" "),t("p",[t("code",[s._v("Boolean")]),s._v(", defaults to "),t("code",[s._v("false")]),s._v(".")]),s._v(" "),t("p",[s._v("配置是否忽略 "),t("code",[s._v("browserslist")]),s._v(" 文件及 "),t("code",[s._v("package.json")]),s._v(" 中的 "),t("code",[s._v("browserslist")]),s._v(" 键。")])])}),[],!1,null,null,null);e.default=v.exports}}]);