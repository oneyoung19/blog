(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{407:function(t,s,n){},408:function(t,s,n){},452:function(t,s,n){"use strict";var a=n(407);n.n(a).a},453:function(t,s,n){"use strict";var a=n(408);n.n(a).a},469:function(t,s,n){"use strict";n.r(s);var a={data:function(){return{recorderVisible:!1}},computed:{isIos:function(){return/iPhone|iPad/.test(window.navigator.userAgent)},mediaRecorderConfig:function(){return this.isIos?{video:{aspectRatio:1},mirror:!0}:{video:{aspectRatio:4/3},mirror:!0}}},mounted:function(){window.onload=function(){var t=document.querySelector(".toggle"),s=document.querySelector(".fullscreen-area");t.addEventListener("click",(function(){document.fullscreenElement?document.exitFullscreen():s.requestFullscreen()})),document.addEventListener("fullscreenchange",(function(t){console.log("change",t)})),document.addEventListener("fullscreenerror",(function(t){console.log("error",t)}))}},methods:{handleClick:function(){this.recorderVisible=!0},handleTakePhoto:function(t){console.log("Download Photo");var s=t.dataUrl,n=document.createElement("a");n.href=s,n.download="avatar.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},e=(n(452),n(453),n(40)),r=Object(e.a)(a,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("code",[t._v("HTML5")]),t._v(" 的设备访问（"),n("code",[t._v("Device Access")]),t._v("）功能允许 "),n("code",[t._v("Web")]),t._v(" 应用程序通过浏览器访问设备的输入和输出功能，从而与用户的硬件设备进行交互。")]),t._v(" "),n("p",[t._v("这使得 "),n("code",[t._v("Web")]),t._v(" 应用可以更加紧密地集成设备功能，提供更丰富的用户体验。以下是 "),n("code",[t._v("HTML5")]),t._v(" 中设备访问的几个方面：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("地理位置（"),n("code",[t._v("Geolocation")]),t._v("）："),n("code",[t._v("HTML5")]),t._v(" 引入了 "),n("code",[t._v("Geolocation API")]),t._v("，使得 "),n("code",[t._v("Web")]),t._v(" 应用能够获取用户设备的地理位置信息。这为开发基于地理位置的应用（如地图导航、位置服务等）提供了便捷的途径。")])]),t._v(" "),n("li",[n("p",[t._v("摄像头和麦克风（"),n("code",[t._v("Media Devices")]),t._v("）：通过 "),n("code",[t._v("Media Devices API")]),t._v("，"),n("code",[t._v("Web")]),t._v(" 应用可以访问用户设备的摄像头和麦克风，从而实现实时视频通话、视频录制和音频录制等功能。")])]),t._v(" "),n("li",[n("p",[t._v("传感器数据（"),n("code",[t._v("Sensors")]),t._v("）："),n("code",[t._v("HTML5")]),t._v(" 还提供了一系列传感器 "),n("code",[t._v("API")]),t._v("，如加速度计、陀螺仪、罗盘等，使得 "),n("code",[t._v("Web")]),t._v(" 应用可以获取设备的物理传感器数据，用于游戏、导航、体感应用等。")])]),t._v(" "),n("li",[n("p",[t._v("屏幕方向（"),n("code",[t._v("Screen Orientation")]),t._v("）："),n("code",[t._v("Screen Orientation API")]),t._v(" 允许 "),n("code",[t._v("Web")]),t._v(" 应用检测用户设备的屏幕方向，从而根据设备的横竖屏状态来调整页面布局和显示方式。")])]),t._v(" "),n("li",[n("p",[t._v("全屏显示（"),n("code",[t._v("Full-Screen")]),t._v("）："),n("code",[t._v("HTML5")]),t._v(" 引入了 "),n("code",[t._v("Full-Screen API")]),t._v("，允许 "),n("code",[t._v("Web")]),t._v(" 应用以全屏模式运行，使得应用能够充分利用设备的屏幕空间。")])])]),t._v(" "),n("p",[t._v("通过这些设备访问的 "),n("code",[t._v("API")]),t._v("，"),n("code",[t._v("HTML5")]),t._v(" 使得 "),n("code",[t._v("Web")]),t._v(" 应用能够更好地融合到用户的硬件设备中，为开发者提供了更多创新的可能性，同时也为用户带来了更丰富、更便捷的使用体验。然而，出于安全考虑，浏览器通常会要求用户明确授权，才允许 "),n("code",[t._v("Web")]),t._v(" 应用访问设备的功能。")]),t._v(" "),n("h2",{attrs:{id:"_1-geolocation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-geolocation"}},[t._v("#")]),t._v(" 1.Geolocation")]),t._v(" "),n("p",[n("code",[t._v("HTML5")]),t._v(" 中的 "),n("code",[t._v("Geolocation API")]),t._v(" 提供了以下几种方法：")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("getCurrentPosition")])]),t._v(" "),n("li",[n("code",[t._v("watchPosition")])]),t._v(" "),n("li",[n("code",[t._v("clearWatch")])])]),t._v(" "),n("p",[n("strong",[t._v("这三种方法均在 "),n("code",[t._v("Secure Context")]),t._v(" 即 "),n("code",[t._v("Https")]),t._v(" 的场景下才被允许（本地调试，可以使用 "),n("code",[t._v("localhost")]),t._v(" 地址）。")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("successCallback")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" coords"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accuracy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accuracy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("watchCallback")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" coords"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latitude "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'watch'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("errorCallback")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  maximumAge"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  enablehighaccuracy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nnavigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("successCallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorCallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" watchId "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchPosition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watchCallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorCallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nnavigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearWatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("watchId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])]),n("p",[n("em",[n("code",[t._v("successCallback")])]),t._v(" 中的 "),n("code",[t._v("position")]),t._v(" 中会含有坐标点 "),n("code",[t._v("coords")]),t._v(" 信息。")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("coords")]),t._v(" 中会包含 经度 "),n("code",[t._v("longitude")]),t._v("、纬度 "),n("code",[t._v("longitude")]),t._v("、精准度 "),n("code",[t._v("accuracy")]),t._v("（单位 "),n("code",[t._v("meters")]),t._v("，表示经纬度与实际地址可能差了多少米）。")]),t._v(" "),n("p",[n("em",[n("code",[t._v("errorCallback")])]),t._v(" 通常在用户未授权或者不满足 "),n("code",[t._v("Secure Context")]),t._v(" 的场景下会触发。譬如在 "),n("code",[t._v("Chrome")]),t._v(" 浏览器下，打印 "),n("code",[t._v("error")]),t._v("，可能会是：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n  code: 1,\n  message: "Only secure origins are allowed (see: https://goo.gl/Y0ZkNV).\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[n("em",[n("code",[t._v("options")])]),t._v(" 可配置如下几种属性：")]),t._v(" "),n("ol",[n("li",[n("p",[n("code",[t._v("enableHighAccuracy")]),t._v("（布尔值，默认值为 "),n("code",[t._v("false")]),t._v("）： 指定是否使用高精度位置信息。如果为 "),n("code",[t._v("true")]),t._v("，则 "),n("code",[t._v("API")]),t._v(" 将尝试获取更精确的位置信息，通常使用 "),n("code",[t._v("GPS")]),t._v("。这可能会增加获取位置信息的时间和电池消耗。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("timeout")]),t._v("（毫秒，默认值为 "),n("code",[t._v("Infinity")]),t._v("）： 指定获取位置信息的最大等待时间。如果在指定的时间内无法获取位置信息，将触发错误回调。如果设为 "),n("code",[t._v("Infinity")]),t._v("，则表示没有超时限制。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("maximumAge")]),t._v("（毫秒，默认值为 "),n("code",[t._v("0")]),t._v("）： 指定允许使用的最大缓存位置的最大年龄。如果设置为 "),n("code",[t._v("0")]),t._v("，则表示不使用缓存的位置信息。")])])]),t._v(" "),n("h2",{attrs:{id:"_2-media-devices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-media-devices"}},[t._v("#")]),t._v(" 2.Media Devices")]),t._v(" "),[n("button",{staticClass:"media-btn",on:{click:t.handleClick}},[t._v("Start Media")]),t._v(" "),t.recorderVisible?n("MediaRecorder",{attrs:{visible:t.recorderVisible,config:t.mediaRecorderConfig},on:{"update:visible":function(s){t.recorderVisible=s},takePhoto:t.handleTakePhoto}}):t._e()],t._v(" "),n("p",[t._v("这部分功能可分为"),n("strong",[t._v("摄像")]),t._v("、"),n("strong",[t._v("视频录制及重播")]),t._v("以及"),n("strong",[t._v("拍照")]),t._v("。")]),t._v(" "),n("p",[t._v("笔者在业务开发中封装了一套 "),n("code",[t._v("media")]),t._v(" 库，可点击上面 "),n("code",[t._v("Start Media")]),t._v(" 按钮，体验摄像以及拍照功能。")]),t._v(" "),n("h2",{attrs:{id:"_3-sensors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-sensors"}},[t._v("#")]),t._v(" 3.Sensors")]),t._v(" "),n("p",[t._v("目前，"),n("code",[t._v("Sensor API")]),t._v(" 提供了以下几种传感器：")]),t._v(" "),n("ol",[n("li",[n("p",[n("code",[t._v("Accelerometer")]),t._v("（加速度计传感器）： 用于测量设备在 "),n("code",[t._v("X")]),t._v("、"),n("code",[t._v("Y")]),t._v(" 和 "),n("code",[t._v("Z")]),t._v(" 轴上的加速度。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Gyroscope")]),t._v("（陀螺仪传感器）： 用于测量设备的旋转速度。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("Magnetometer")]),t._v("（磁力计传感器）： 用于测量设备周围的磁场。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("AmbientLightSensor")]),t._v("（环境光传感器）： 用于测量周围环境的光照强度。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("ProximitySensor")]),t._v("（接近传感器）： 用于检测物体与设备的距离。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("AbsoluteOrientationSensor")]),t._v("（绝对方向传感器）： 用于获取设备的绝对方向，包括旋转、倾斜和方向。")])])]),t._v(" "),n("p",[t._v("譬如使用加速度计传感器 "),n("code",[t._v("Accelerometer")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accelerometer'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accelerometer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Accelerometer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  accelerometer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reading'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Acceleration along X-axis: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" accelerometer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Acceleration along Y-axis: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" accelerometer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Acceleration along Z-axis: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" accelerometer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  accelerometer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accelerometer not supported'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h2",{attrs:{id:"_4-screen-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-screen-orientation"}},[t._v("#")]),t._v(" 4.Screen Orientation")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Screen Orientation API"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("code",[t._v("Screen Orientation")]),t._v(" 可以支持开发者在 "),n("code",[t._v("Web")]),t._v(" 应用中判断横竖屏方向，进而兼容应用的实现方式。")]),t._v(" "),n("p",[n("strong",[t._v("相对于 "),n("code",[t._v("Andriod")]),t._v("，在 "),n("code",[t._v("IOS")]),t._v(" 上，系统权限更加严格，因此 "),n("code",[t._v("Screen Orientation")]),t._v(" 在实际应用中的兼容性并不乐观")]),t._v("。")]),t._v(" "),n("p",[t._v("不过我们依然先总结下 "),n("code",[t._v("Screen Orientation")]),t._v(" 的相关属性和 "),n("code",[t._v("API")]),t._v("。")]),t._v(" "),n("p",[t._v("目前官方推荐使用的相关属性和 "),n("code",[t._v("API")]),t._v(" 有如下几种：")]),t._v(" "),n("ol",[n("li",[t._v("一个属性\n"),n("ul",[n("li",[n("code",[t._v("window.screen.orientation")]),t._v("，包含如下属性 "),n("code",[t._v("{angle: 0, type: 'landscape-primary', onchange: null}")]),t._v("。")])])]),t._v(" "),n("li",[t._v("两个方法\n"),n("ul",[n("li",[n("code",[t._v("window.screen.orientation.lock(orientation)")]),t._v(" 锁定指定的屏幕方向")]),t._v(" "),n("li",[n("code",[t._v("window.screen.orientation.unlock()")]),t._v(" 解锁方向")])])]),t._v(" "),n("li",[t._v("一个事件\n"),n("ul",[n("li",[n("code",[t._v("window.screen.orientation.addEventListener('change', callback)")])])])])]),t._v(" "),n("p",[t._v("然而实际上，以上属性和 "),n("code",[t._v("API")]),t._v(" 的兼容性在 "),n("code",[t._v("IOS")]),t._v(" 上均不理想。")]),t._v(" "),n("p",[t._v("因此可以选择 "),n("code",[t._v("window")]),t._v(" 上的相关属性和事件监听：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onorientationchange'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 竖屏")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 横屏")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("关于更多横竖屏的检测与适配，可以参考文章：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://caibaojian.com/landscape_mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动设备强制横屏显示以及兼容问题"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"_5-full-screen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-full-screen"}},[t._v("#")]),t._v(" 5.Full-Screen")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fullscreen API"),n("OutboundLink")],1)]),t._v(" "),n("ol",[n("li",[n("p",[t._v("一个属性")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("document.fullscreenElement")]),t._v(" 标识是否存在全屏元素")])])]),t._v(" "),n("li",[n("p",[t._v("两个方法")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("fullscreenElement.requestFullscreen()")]),t._v(" 目标元素进行全屏")]),t._v(" "),n("li",[n("code",[t._v("document.exitFullscreen()")]),t._v(" 文档退出全屏")])])]),t._v(" "),n("li",[n("p",[t._v("两个事件")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("fullscreenchange")]),t._v(" 全屏更改监听事件")]),t._v(" "),n("li",[n("code",[t._v("fullscreenerror")]),t._v(" 全屏错误监听事件")])])])]),t._v(" "),n("p",[t._v("另外，由于存在浏览器兼容性，因此在实际业务开发中，可以考虑使用"),n("a",{attrs:{href:"https://github.com/sindresorhus/screenfull",target:"_blank",rel:"noopener noreferrer"}},[t._v("screenfull"),n("OutboundLink")],1),t._v("第三方库。")]),t._v(" "),n("p",[t._v("点击下例中的 "),n("code",[t._v("Toggle")]),t._v(" 按钮尝试：")]),t._v(" "),n("div",{staticClass:"fullscreen-area"},[n("button",{staticClass:"toggle"},[t._v("Toggle")])]),t._v(" "),n("p",[t._v("核心 "),n("code",[t._v("JS")]),t._v(" 代码如下：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" btn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.toggle'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" targetElement "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.fullscreen-area'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbtn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const targetElement = document.documentElement")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullscreenElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exitFullscreen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   targetElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestFullscreen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullscreenchange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullscreenerror'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])])],2)}),[],!1,null,null,null);s.default=r.exports}}]);