(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{661:function(t,_,e){"use strict";e.r(_);var s=e(40),v=Object(s.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在上一节，我们介绍了"),e("strong",[t._v("字符集")]),t._v("。")]),t._v(" "),e("p",[t._v("我们能够认识到"),e("strong",[t._v("每一个字符都会对应一个码值")]),t._v("。")]),t._v(" "),e("p",[t._v("这一节，我们来了解下"),e("strong",[t._v("编码方式")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("同一个码值在不同的编码方式下，它的字节长度和表示方式是不同的。")])]),t._v(" "),e("h2",{attrs:{id:"_1-ucs-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ucs-2"}},[t._v("#")]),t._v(" 1.UCS-2")]),t._v(" "),e("h2",{attrs:{id:"_2-utf-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-utf-16"}},[t._v("#")]),t._v(" 2.UTF-16")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'😂'")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("这其实是由于 "),e("strong",[e("code",[t._v("JavaScript")]),t._v(" 的字符串长度是按照 "),e("code",[t._v("utf-16")]),t._v(" 代码单元来读取的")]),t._v("。")]),t._v(" "),e("p",[t._v("这部分内容可见 "),e("code",[t._v("ECMAScript")]),t._v(" 语言标准："),e("a",{attrs:{href:"https://262.ecma-international.org/5.1/#sec-8.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScript® Language Specification"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("字符串类型是由 0 位或 16 位以上无符号整数值(元素)组成的所有有限有序序列的集合。")])]),t._v(" "),e("blockquote",[e("p",[t._v("字符串类型通常用于表示运行中的ECMAScript 程序中的文本数据，在这种情况下，字符串中的每个元素都被视为码元值(参见第6条)。")])]),t._v(" "),e("blockquote",[e("p",[t._v("这些位置用非负整数作索引。第一个元素(如果有)位于位置 0，下一个元素(如果有)位于位置 1，以此类推。字符串的长度是元素的数量(即，16位值)。空字符串的长度为零，因此不包含任何元素。")])]),t._v(" "),e("blockquote",[e("p",[t._v("当字符串包含实际的文本数据时，每个元素都被认为是一个单独的 UTF-16 码元。")])]),t._v(" "),e("blockquote",[e("p",[t._v("无论这是否是字符串的实际存储格式，字符串中的字符都是通过其初始码元元素位置进行编号的，就像使用 UTF-16 表示一样。所有字符串上的操作(除非另有说明)都将它们视为无差异 16 位无符号整数的序列，它们不能确保得到的字符串是标准格式的，也不能确保得到对语言敏感的结果。")])]),t._v(" "),e("h2",{attrs:{id:"_3-utf-32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-utf-32"}},[t._v("#")]),t._v(" 3.UTF-32")]),t._v(" "),e("h2",{attrs:{id:"_4-utf-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-utf-8"}},[t._v("#")]),t._v(" 4.UTF-8")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/UTF-8",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTF-8-维基百科"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("UTF-8")]),t._v("（"),e("code",[t._v("8-bit Unicode Transformation Format")]),t._v("）是一种针对 "),e("code",[t._v("Unicode")]),t._v(" 的"),e("strong",[t._v("可变长度字符编码")]),t._v("，也是一种"),e("strong",[t._v("前缀码")]),t._v("。")]),t._v(" "),e("p",[t._v("它可以用"),e("strong",[t._v("一至四个字节")]),t._v("对 "),e("code",[t._v("Unicode")]),t._v(" 字符集中的所有有效编码点进行编码，属于 "),e("code",[t._v("Unicode")]),t._v(" 标准的一部分。")]),t._v(" "),e("p",[e("code",[t._v("UTF-8")]),t._v(" 就是为了解决向后兼容 "),e("code",[t._v("ASCII")]),t._v(" 码而设计，"),e("code",[t._v("Unicode")]),t._v(" 中前 "),e("code",[t._v("128")]),t._v(" 个字符，使用与 "),e("code",[t._v("ASCII")]),t._v(" 码相同的二进制值的单个字节进行编码，而且字面与"),e("code",[t._v("ASCII")]),t._v(" 码的字面一一对应，这使得原来处理 "),e("code",[t._v("ASCII")]),t._v(" 字符的软件无须或只须做少部分修改，即可继续使用。")])])}),[],!1,null,null,null);_.default=v.exports}}]);