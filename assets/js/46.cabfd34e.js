(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{495:function(e,s,v){"use strict";v.r(s);var _=v(40),r=Object(_.a)({},(function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[v("code",[e._v("Redis")]),e._v(" 默认地址是 "),v("code",[e._v("127.0.0.1:6379")]),e._v("。")]),e._v(" "),v("p",[e._v("当使用 "),v("code",[e._v("redis-cli")]),e._v(" 时，默认是不需要密码的。")]),e._v(" "),v("p",[e._v("如果想要更加安全，那么可以给 "),v("code",[e._v("Redis")]),e._v(" 添加密码验证。")]),e._v(" "),v("p",[e._v("首先找到 "),v("code",[e._v("Redis")]),e._v(" 的配置文件 "),v("code",[e._v("/etc/redis.conf")]),e._v(" 或者 "),v("code",[e._v("/usr/local/etc/redis.conf")]),e._v("，")]),e._v(" "),v("p",[e._v("在该文件中查找 "),v("code",[e._v("requirepass")]),e._v(" 字段，默认如下：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("# requirepass foobared\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("将以上配置修改为：")]),e._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("requirepass <password>\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("利用 "),v("code",[e._v("brew services restart redis")]),e._v(" 重启 "),v("code",[e._v("Redis")]),e._v(" 之后，配置生效。")]),e._v(" "),v("p",[e._v("此后，登录 "),v("code",[e._v("Redis")]),e._v(" 有以下两种方式：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("redis-cli -a <password>")])]),e._v(" "),v("li",[v("code",[e._v("redis-cli")]),e._v(" 之后，然后执行 "),v("code",[e._v("AUTH <password>")]),e._v("。（"),v("strong",[e._v("推荐")]),e._v("）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);