(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{520:function(e,t,v){"use strict";v.r(t);var _=v(40),s=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[e._v("该属性意为"),v("strong",[e._v("变换、转换")]),e._v("。")]),e._v(" "),v("p",[e._v("其主要有以下几方面：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("translate")]),e._v(" "),v("strong",[e._v("平移")]),e._v("，具体可分为 "),v("code",[e._v("translateX")]),e._v("、"),v("code",[e._v("translateY")]),e._v("、 "),v("code",[e._v("translateZ")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("scale")]),e._v(" "),v("strong",[e._v("缩放")]),e._v("，具体可分为 "),v("code",[e._v("scaleX")]),e._v("、"),v("code",[e._v("scaleY")]),e._v("、"),v("code",[e._v("scaleZ")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("rotate")]),e._v(" "),v("strong",[e._v("旋转")]),e._v("，具体可分为 "),v("code",[e._v("rotateX")]),e._v("、"),v("code",[e._v("rotateY")]),e._v("、"),v("code",[e._v("rotateZ")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("skew")]),e._v(" "),v("strong",[e._v("倾斜")]),e._v("。")])]),e._v(" "),v("p",[e._v("另外，"),v("code",[e._v("transform")]),e._v(" 的效果还分为 "),v("code",[e._v("2D")]),e._v(" 平面和 "),v("code",[e._v("3D")]),e._v(" 立体。")]),e._v(" "),v("p",[v("code",[e._v("2D")]),e._v(" 的坐标系有 "),v("code",[e._v("x")]),e._v(" 轴和 "),v("code",[e._v("y")]),e._v(" 轴。")]),e._v(" "),v("p",[e._v("而 "),v("code",[e._v("3D")]),e._v(" 的坐标系则有 "),v("code",[e._v("x")]),e._v(" 轴、"),v("code",[e._v("y")]),e._v(" 轴以及 "),v("code",[e._v("z")]),e._v(" 轴。")]),e._v(" "),v("h2",{attrs:{id:"_10-1-transform-origin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-transform-origin"}},[e._v("#")]),e._v(" 10-1.Transform Origin")]),e._v(" "),v("p",[v("code",[e._v("transform-origin")]),e._v(" 属性用来设置 "),v("code",[e._v("transform")]),e._v(" 的"),v("strong",[e._v("原点")]),e._v("。")]),e._v(" "),v("p",[e._v("默认是 "),v("code",[e._v("(50%, 50%, 0)")]),e._v(" 坐标点。")]),e._v(" "),v("h2",{attrs:{id:"_10-2-transform-2d"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-transform-2d"}},[e._v("#")]),e._v(" 10-2.Transform 2D")]),e._v(" "),v("p",[v("code",[e._v("Transform 2D")]),e._v(" 指的就是 "),v("code",[e._v("2D")]),e._v(" 平面下的"),v("strong",[e._v("变换、转换")]),e._v("。")]),e._v(" "),v("p",[e._v("需要补充的一点是，"),v("code",[e._v("translate")]),e._v("、"),v("code",[e._v("scale")]),e._v("、"),v("code",[e._v("rotate")]),e._v(" 这三者都有 "),v("code",[e._v("z")]),e._v(" 轴，即对应的 "),v("code",[e._v("translateZ")]),e._v("、"),v("code",[e._v("scaleZ")]),e._v("、"),v("code",[e._v("rotateZ")]),e._v("。")]),e._v(" "),v("p",[e._v("而 "),v("code",[e._v("skew")]),e._v(" 则没有 "),v("code",[e._v("skewZ")]),e._v(" 这种用法。")]),e._v(" "),v("h3",{attrs:{id:"_10-2-1-translate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-1-translate"}},[e._v("#")]),e._v(" 10-2-1.translate")]),e._v(" "),v("p",[e._v("我们来比较下，"),v("code",[e._v("translate")]),e._v(" 的实际效果：")]),e._v(" "),v("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"test",src:"https://codepen.io/code1994/embed/RwQJLZr?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),v("a",{attrs:{href:"https://codepen.io/code1994/pen/RwQJLZr"}},[e._v("\n  test")]),e._v(" by Code1994 ("),v("a",{attrs:{href:"https://codepen.io/code1994"}},[e._v("@code1994")]),e._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),v("p",[e._v("可以注意到，"),v("code",[e._v("translateZ")]),e._v(" 在当前代码下并无效果，其他属性的效果正常。")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[v("code",[e._v("translateZ")]),e._v(" 不能使用百分比设置值，而 "),v("code",[e._v("translateX")]),e._v("、"),v("code",[e._v("translateY")]),e._v(" 能够设置百分比，其相对的是自身宽和高。")])]),e._v(" "),v("h3",{attrs:{id:"_10-2-2-scale"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-2-scale"}},[e._v("#")]),e._v(" 10-2-2.scale")]),e._v(" "),v("p",[v("code",[e._v("scale")]),e._v(" 的实际效果：")]),e._v(" "),v("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"scale",src:"https://codepen.io/code1994/embed/ExQRwJq?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),v("a",{attrs:{href:"https://codepen.io/code1994/pen/ExQRwJq"}},[e._v("\n  scale")]),e._v(" by Code1994 ("),v("a",{attrs:{href:"https://codepen.io/code1994"}},[e._v("@code1994")]),e._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),v("p",[e._v("可以注意到，"),v("code",[e._v("scaleZ")]),e._v(" 在当前代码下并无效果，其他属性的效果正常。")]),e._v(" "),v("h3",{attrs:{id:"_10-2-3-rotate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-3-rotate"}},[e._v("#")]),e._v(" 10-2-3.rotate")]),e._v(" "),v("p",[v("code",[e._v("rotate")]),e._v(" 的实际效果：")]),e._v(" "),v("iframe",{staticStyle:{width:"100%"},attrs:{height:"319.87109375",scrolling:"no",title:"rotate",src:"https://codepen.io/code1994/embed/qBxKVWO?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),v("a",{attrs:{href:"https://codepen.io/code1994/pen/qBxKVWO"}},[e._v("\n  rotate")]),e._v(" by Code1994 ("),v("a",{attrs:{href:"https://codepen.io/code1994"}},[e._v("@code1994")]),e._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),v("p",[e._v("可以注意到，"),v("code",[e._v("rotateZ")]),e._v(" 在当前代码下有效果，其他属性的效果也正常。")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[v("code",[e._v("rotate")]),e._v(" 属性会改变 "),v("code",[e._v("x")]),e._v(" "),v("code",[e._v("y")]),e._v(" "),v("code",[e._v("z")]),e._v(" 的坐标系指向。")]),e._v(" "),v("p",[e._v("所以在需要使用 "),v("code",[e._v("transform")]),e._v(" 组合属性的情况下，可以先使用 "),v("code",[e._v("translate")]),e._v(" 等属性，最后使用 "),v("code",[e._v("rotate")]),e._v("。")]),e._v(" "),v("p",[e._v("譬如："),v("code",[e._v("transform: translateX(50px) rotate(90deg);")])])]),e._v(" "),v("h3",{attrs:{id:"_10-2-4-skew"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-4-skew"}},[e._v("#")]),e._v(" 10-2-4.skew")]),e._v(" "),v("p",[v("code",[e._v("skew")]),e._v(" 的实际效果：")]),e._v(" "),v("p",{staticClass:"codepen",staticStyle:{height:"300px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"300","data-default-tab":"html,result","data-slug-hash":"vYdrWdW","data-user":"code1994"}},[v("span",[e._v("See the Pen "),v("a",{attrs:{href:"https://codepen.io/code1994/pen/vYdrWdW"}},[e._v("\n  Untitled")]),e._v(" by Code1994 ("),v("a",{attrs:{href:"https://codepen.io/code1994"}},[e._v("@code1994")]),e._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])]),e._v(" "),v("script",{attrs:{async:"",src:"https://cpwebassets.codepen.io/assets/embed/ei.js"}}),e._v(" "),v("p",[e._v("可以注意到，"),v("code",[e._v("skewZ")]),e._v(" 在当前代码下并无效果，其他属性的效果正常。")]),e._v(" "),v("h2",{attrs:{id:"_10-3-transform-3d"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-transform-3d"}},[e._v("#")]),e._v(" 10-3.Transform 3D")]),e._v(" "),v("p",[v("code",[e._v("Transform 3D")]),e._v(" 指的就是 "),v("code",[e._v("3D")]),e._v(" 立体下的"),v("strong",[e._v("变换、转换")]),e._v("。")]),e._v(" "),v("p",[e._v("为了实现 "),v("code",[e._v("3D")]),e._v(" 效果，除了基础的 "),v("code",[e._v("transform")]),e._v(" 属性之外，还需要一些额外属性的配合。")]),e._v(" "),v("p",[e._v("本节将主要介绍该系列属性。")]),e._v(" "),v("p",[e._v("如下是一个 "),v("code",[e._v("3D")]),e._v(" 效果的旋转正方体：")]),e._v(" "),v("p",{staticClass:"codepen",staticStyle:{height:"548.859375px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"548.859375","data-default-tab":"html,result","data-slug-hash":"MWQXOBW","data-user":"code1994"}},[v("span",[e._v("See the Pen "),v("a",{attrs:{href:"https://codepen.io/code1994/pen/MWQXOBW"}},[e._v("\n  transform-3d-cube")]),e._v(" by Code1994 ("),v("a",{attrs:{href:"https://codepen.io/code1994"}},[e._v("@code1994")]),e._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])]),e._v(" "),v("script",{attrs:{async:"",src:"https://cpwebassets.codepen.io/assets/embed/ei.js"}}),e._v(" "),v("h3",{attrs:{id:"_10-3-1-perspective"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-1-perspective"}},[e._v("#")]),e._v(" 10-3-1.perspective")]),e._v(" "),v("p",[v("code",[e._v("perspective")]),e._v(" 意为"),v("strong",[e._v("视角")]),e._v("。")]),e._v(" "),v("p",[e._v("该属性用来声明"),v("strong",[e._v("观察者视角与元素")]),e._v("之间的距离。")]),e._v(" "),v("p",[e._v("通常建议设置在 "),v("code",[e._v("1000px")]),e._v(" 至 "),v("code",[e._v("2000px")]),e._v(" 之间。")]),e._v(" "),v("p",[e._v("该属性有两种使用方式：")]),e._v(" "),v("div",{staticClass:"language-css line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 声明在最外层容器上。这样，内部的所有元素都将在 `3d` 视角下渲染 */")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token property"}},[e._v("perspective")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1000px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 当perspective与transform属性作用于同一元素 使用下列用法 */")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token property"}},[e._v("transform")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("perspective")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("1000px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[e._v("translateZ")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("300px"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br"),v("span",{staticClass:"line-number"},[e._v("4")]),v("br"),v("span",{staticClass:"line-number"},[e._v("5")]),v("br")])]),v("p",[e._v("以 "),v("code",[e._v("translateZ")]),e._v(" 为例：")]),e._v(" "),v("iframe",{staticStyle:{width:"100%"},attrs:{height:"372.64453125",scrolling:"no",title:"perspective",src:"https://codepen.io/code1994/embed/ExQRbqW?default-tab=html%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"}},[e._v("\n  See the Pen "),v("a",{attrs:{href:"https://codepen.io/code1994/pen/ExQRbqW"}},[e._v("\n  perspective")]),e._v(" by Code1994 ("),v("a",{attrs:{href:"https://codepen.io/code1994"}},[e._v("@code1994")]),e._v(")\n  on "),v("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".\n")]),e._v(" "),v("p",[e._v("可以看到，"),v("code",[e._v("transform")]),e._v(" 在加上了 "),v("code",[e._v("perspective")]),e._v(" 之后，就有了移动 "),v("code",[e._v("z")]),e._v(" 轴距离的视觉效果。")]),e._v(" "),v("h3",{attrs:{id:"_10-3-2-perspective-origin"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-2-perspective-origin"}},[e._v("#")]),e._v(" 10-3-2.perspective-origin")]),e._v(" "),v("p",[v("code",[e._v("perspective-origin")]),e._v(" 属性，我将其理解为"),v("strong",[e._v("视点")]),e._v("。")]),e._v(" "),v("p",[e._v("更白话的讲，可以将其理解为"),v("strong",[e._v("人眼的观察位置")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[e._v("perspective-origin: x, y;")])]),e._v(" "),v("p",[e._v("其中 "),v("code",[e._v("x")]),e._v(" 是相对于 "),v("code",[e._v("x")]),e._v(" 轴"),v("strong",[e._v("原点")]),e._v("的距离，"),v("code",[e._v("y")]),e._v(" 是相对于 "),v("code",[e._v("y")]),e._v(" 轴"),v("strong",[e._v("原点")]),e._v("的距离。")]),e._v(" "),v("h3",{attrs:{id:"_10-3-3-transform-style"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-3-transform-style"}},[e._v("#")]),e._v(" 10-3-3.transform-style")]),e._v(" "),v("p",[v("code",[e._v("transform-style")]),e._v(" 设置元素的子元素是位于 "),v("code",[e._v("3D")]),e._v(" 空间中还是平面中。")]),e._v(" "),v("blockquote",[v("p",[e._v("transform-style: preserve-3d | flat;")])]),e._v(" "),v("p",[e._v("其可设置的值如下：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("flat")]),e._v(": "),v("strong",[e._v("默认值")]),e._v("，元素的子元素将位于平面中。")]),e._v(" "),v("li",[v("code",[e._v("preserve-3d")]),e._v(": 元素的子元素将位于 "),v("code",[e._v("3D")]),e._v(" 空间中。")])]),e._v(" "),v("h3",{attrs:{id:"_10-3-4-backface-visibility"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-3-4-backface-visibility"}},[e._v("#")]),e._v(" 10-3-4.backface-visibility")]),e._v(" "),v("p",[v("code",[e._v("backface-visibility")]),e._v(" 属性指定当元素背面朝向观察者时是否可见。")]),e._v(" "),v("blockquote",[v("p",[e._v("backface-visibility: visible | hidden;")])]),e._v(" "),v("p",[e._v("其可设置的值如下：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("visible")]),e._v(": "),v("strong",[e._v("默认值")]),e._v("，背面朝向用户时可见。")]),e._v(" "),v("li",[v("code",[e._v("hidden")]),e._v(": 背面朝向用户时不可见。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);