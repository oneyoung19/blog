(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{795:function(s,t,a){"use strict";a.r(t);var n=a(40),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("code",[s._v("HMAC")]),s._v(" 的全称是 "),a("code",[s._v("Hash-based Message Authentication Code")]),s._v("，即"),a("strong",[s._v("基于哈希的信息验证算法")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("HMAC")]),s._v(" 使用散列函数（如 "),a("code",[s._v("MD5")]),s._v("、"),a("code",[s._v("SHA-256")]),s._v("等）和一个密钥来生成认证码。")]),s._v(" "),a("p",[s._v("发送方和接收方都知道共享的密钥，发送方使用密钥和消息一起计算认证码，然后将认证码发送给接收方。")]),s._v(" "),a("p",[s._v("接收方使用相同的密钥和接收到的消息计算认证码，然后比较计算得到的认证码与接收到的认证码是否匹配。")]),s._v(" "),a("p",[s._v("如果匹配，消息被认为是可信的和完整的；如果不匹配，消息可能已被篡改或来自未经授权的发送方。")]),s._v(" "),a("p",[s._v("它通常用于保护数据的完整性和防止数据篡改。")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("HMAC")]),s._v(" 结合了散列函数（通常是 "),a("code",[s._v("SHA-256")]),s._v("、"),a("code",[s._v("SHA-512")]),s._v(" 等）和一个密钥，通过在消息上执行哈希运算来生成一个固定长度的认证码")]),s._v("。")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("HMAC")]),s._v(" 是基于 "),a("code",[s._v("Hash")]),s._v("，因此在 "),a("code",[s._v("crypto-js")]),s._v(" 中提供了类似于上节中 "),a("code",[s._v("Hash")]),s._v(" 方法的 "),a("code",[s._v("API")]),s._v("：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("HmacMD5")])]),s._v(" "),a("li",[a("code",[s._v("HmacSHA1")])]),s._v(" "),a("li",[a("code",[s._v("HmacSHA224")])]),s._v(" "),a("li",[a("code",[s._v("HmacSHA256")])]),s._v(" "),a("li",[a("code",[s._v("HmacSHA384")])]),s._v(" "),a("li",[a("code",[s._v("HmacSHA512")])]),s._v(" "),a("li",[a("code",[s._v("HmacRIPEMD160")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" md5Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HmacMD5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Secret Passphrase'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sha1Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HmacSHA1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Secret Passphrase'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sha256Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HmacSHA256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Secret Passphrase'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sha512Hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HmacSHA512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Secret Passphrase'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("以 "),a("code",[s._v("HmacMD5")]),s._v(" 为例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CryptoJs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'crypto-js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 880c4dcdc4ce1f8696b9645c44b275c6")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CryptoJs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HmacMD5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);