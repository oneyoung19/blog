(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{461:function(e,a,s){e.exports=s.p+"assets/img/webpack.95e13ab6.jpg"},730:function(e,a,s){"use strict";s.r(a);var _=s(40),v=Object(_.a)({},(function(){var e=this,a=e.$createElement,_=e._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"为什么要用webpack"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用webpack"}},[e._v("#")]),e._v(" 为什么要用webpack")]),e._v(" "),_("p",[_("code",[e._v("webpack")]),e._v("是前端工程化发展到一定阶段的必然产物。")]),e._v(" "),_("p",[_("code",[e._v("webpack")]),e._v("的基础是前端的模块化。它提供了对于"),_("code",[e._v("commonJs")]),e._v("、"),_("code",[e._v("AMD")]),e._v("以及"),_("code",[e._v("ES6 import")]),e._v("语法的支持。")]),e._v(" "),_("h2",{attrs:{id:"webpack如何使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webpack如何使用"}},[e._v("#")]),e._v(" webpack如何使用")]),e._v(" "),_("img",{attrs:{src:s(461),alt:"webpack"}}),e._v(" "),_("p",[e._v("官网上的这幅图很形象。"),_("code",[e._v("webpack")]),e._v("会以某文件为入口，依次深层遍历该文件的依赖，将所有的依赖代码打包成一个文件。")]),e._v(" "),_("p",[e._v("值得一提的是，"),_("code",[e._v("webpack")]),e._v("不仅支持"),_("strong",[e._v("SPA单页面应用")]),e._v("，它也能用在多页应用。")]),e._v(" "),_("p",[e._v("不考虑"),_("strong",[e._v("异步Chunk以及公共Chunk")]),e._v("的话，单页面应用的"),_("code",[e._v("js")]),e._v("、"),_("code",[e._v("css")]),e._v("、"),_("code",[e._v("img")]),e._v("等最终都会打包成一个"),_("code",[e._v("JS")]),e._v("文件。而多页应用则会打包成多个。")]),e._v(" "),_("h2",{attrs:{id:"学习webpack"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#学习webpack"}},[e._v("#")]),e._v(" 学习webpack")]),e._v(" "),_("p",[_("code",[e._v("webpack")]),e._v("基础可以分为六部分：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("entry")]),e._v(": 配置入口文件。")]),e._v(" "),_("li",[_("code",[e._v("output")]),e._v(": 配置输出。")]),e._v(" "),_("li",[_("code",[e._v("resolve")]),e._v(": 配置寻找模块的规则。")]),e._v(" "),_("li",[_("code",[e._v("module")]),e._v(": 配置处理模块的规则。")]),e._v(" "),_("li",[_("code",[e._v("plugins")]),e._v(": 配置扩展插件，拓展工作流功能。")]),e._v(" "),_("li",[_("code",[e._v("devServer")]),e._v(": 配置开发环境，使开发环境效率更高。")])]),e._v(" "),_("h2",{attrs:{id:"安装webpack4-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack4-0"}},[e._v("#")]),e._v(" 安装webpack4.0")]),e._v(" "),_("p",[e._v("不推荐全局安装"),_("code",[e._v("webpack")]),e._v("。防止不同项目的依赖版本不同。另外如果想要使用"),_("code",[e._v("webpack")]),e._v("命令行的话，需要安装"),_("code",[e._v("webpack-cli")]),e._v("脚手架。目前"),_("code",[e._v("webpack")]),e._v("的最新版本是"),_("code",[e._v("4.0")]),e._v("。所以下面的"),_("code",[e._v("webpack")]),e._v("相关loader和插件用法等都是基于"),_("code",[e._v("4.0")]),e._v("来说的。")]),e._v(" "),_("div",{staticClass:"language-shell line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" webpack webpack-cli\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br")])]),_("h2",{attrs:{id:"使用webpack4-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用webpack4-0"}},[e._v("#")]),e._v(" 使用webpack4.0")]),e._v(" "),_("p",[e._v("安装完"),_("code",[e._v("webpack")]),e._v("及"),_("code",[e._v("webpack-cli")]),e._v("后，使用"),_("code",[e._v("webpack")]),e._v("命令行有3种常见用法。假设配置文件是"),_("code",[e._v("webpack.config.js")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"_1-终端webpack命令行"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-终端webpack命令行"}},[e._v("#")]),e._v(" 1.终端webpack命令行")]),e._v(" "),_("p",[e._v("如果想要在终端直接执行"),_("code",[e._v("webpack --config webpack.config.js")]),e._v("是不行的。假设当前命令行执行目录与"),_("code",[e._v("node_modules")]),e._v("同级，可以执行"),_("code",[e._v("./node_modules/.bin/webpack --config webpack.config.js")]),e._v("。")]),e._v(" "),_("p",[_("code",[e._v("--config")]),e._v("指令用来自定义"),_("code",[e._v("webpack")]),e._v("的配置文件。")]),e._v(" "),_("h3",{attrs:{id:"_2-npx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-npx"}},[e._v("#")]),e._v(" 2.npx")]),e._v(" "),_("p",[e._v("可能你觉得第一种方式不够优雅。"),_("code",[e._v("npm")]),e._v("自带了一个执行工具"),_("code",[e._v("npx")]),e._v("。于是可以使用："),_("code",[e._v("npx webpack --config webpack.config.js")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"_3-npm-scripts"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm-scripts"}},[e._v("#")]),e._v(" 3.npm scripts")]),e._v(" "),_("p",[e._v("这种也是最常见也是最推荐的用法。")]),e._v(" "),_("div",{staticClass:"language-json line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"webpack --config webpack.config.js"')]),e._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br")])]),_("p",[e._v("这样就可以在终端中执行"),_("code",[e._v("npm run build")]),e._v("或者"),_("code",[e._v("yarn build")]),e._v("。")])])}),[],!1,null,null,null);a.default=v.exports}}]);