(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{504:function(s,t,a){"use strict";a.r(t);var e=a(40),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("SQL")]),s._v(" 不区分大小写（除了表格名）")]),s._v("。")]),s._v(" "),a("p",[s._v("但书写 "),a("code",[s._v("SQL")]),s._v(" 关键字时，我们推荐用大写形式。")]),s._v(" "),a("p",[s._v("这有助于我们把"),a("strong",[s._v("关键字")]),s._v("和 表名、列名区分开，让 "),a("code",[s._v("SQL")]),s._v(" 更容易理解。")])]),s._v(" "),a("h2",{attrs:{id:"查询所有列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询所有列"}},[s._v("#")]),s._v(" 查询所有列")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查询指定列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询指定列"}},[s._v("#")]),s._v(" 查询指定列")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" another_column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"基础条件查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础条件查询"}},[s._v("#")]),s._v(" 基础条件查询")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" another_column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" condition\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" another_condition\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" …\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("条件 "),a("code",[s._v("condition")]),s._v(" 是包含操作符 "),a("code",[s._v("operator")]),s._v(" 的表达式。")]),s._v(" "),a("p",[s._v("以下操作符可以用来"),a("strong",[s._v("筛选数字属性列")]),s._v("：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Operator")]),s._v(" "),a("th",[s._v("Condition")]),s._v(" "),a("th",[s._v("Example")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("=")]),s._v(" "),a("code",[s._v("!=")]),s._v(" "),a("code",[s._v("<")]),s._v(" "),a("code",[s._v("<=")]),s._v(" "),a("code",[s._v(">")]),s._v(" "),a("code",[s._v(">=")])]),s._v(" "),a("td",[s._v("比较运算")]),s._v(" "),a("td",[a("code",[s._v("goods_num > 100")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("BETWEEN...AND...")])]),s._v(" "),a("td",[s._v("在区域之间")]),s._v(" "),a("td",[a("code",[s._v("goods_num BETWEEN 100 AND 1000")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("NOT BETWEEN...AND...")])]),s._v(" "),a("td",[s._v("不在区域之间")]),s._v(" "),a("td",[a("code",[s._v("goods_num NOT BETWEEN 100 AND 1000")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("IN (...)")])]),s._v(" "),a("td",[s._v("在列表中")]),s._v(" "),a("td",[a("code",[s._v("goods_num IN (200, 400, 600)")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("NOT IN (...)")])]),s._v(" "),a("td",[s._v("不在列表中")]),s._v(" "),a("td",[a("code",[s._v("goods_num NOT IN (200, 400, 600)")])])])])]),s._v(" "),a("p",[s._v("以下操作符可以用来"),a("strong",[s._v("筛选字符串属性列")]),s._v("：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Operator")]),s._v(" "),a("th",[s._v("Condition")]),s._v(" "),a("th",[s._v("Example")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("=")])]),s._v(" "),a("td",[s._v("等于")]),s._v(" "),a("td",[a("code",[s._v("goods_name = 'apple'")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("!=")]),s._v(" 或 "),a("code",[s._v("<>")])]),s._v(" "),a("td",[s._v("不等于")]),s._v(" "),a("td",[a("code",[s._v("goods_name != 'apple'")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("LIKE")])]),s._v(" "),a("td",[s._v("没有用通配符时，等价于 "),a("code",[s._v("=")])]),s._v(" "),a("td",[a("code",[s._v("goods_name LIKE 'apple'")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("NOT LIKE")])]),s._v(" "),a("td",[s._v("没有用通配符等价于 "),a("code",[s._v("!=")])]),s._v(" "),a("td",[a("code",[s._v("goods_name NOT LIKE 'apple'")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("%")])]),s._v(" "),a("td",[s._v("通配符。只和 "),a("code",[s._v("LIKE")]),s._v(" 或 "),a("code",[s._v("NOT LIKE")]),s._v(" 连用。代表匹配 "),a("code",[s._v("0")]),s._v(" 个以上的字符。")]),s._v(" "),a("td",[a("code",[s._v("goods_name LIKE '%apple%'")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("_")])]),s._v(" "),a("td",[s._v("使用方式同 "),a("code",[s._v("%")]),s._v(" ，区别在于 "),a("code",[s._v("_")]),s._v(" 代表匹配 "),a("code",[s._v("1")]),s._v(" 个字符。")]),s._v(" "),a("td",[a("code",[s._v("goods_name LIKE 'apple_'")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("IN (...)")])]),s._v(" "),a("td",[s._v("在列表中")]),s._v(" "),a("td",[a("code",[s._v("goods_num IN ('apple', 'banana')")])])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("NOT IN (...)")])]),s._v(" "),a("td",[s._v("不在列表中")]),s._v(" "),a("td",[a("code",[s._v("goods_num NOT IN ('apple', 'banana')")])])])])]),s._v(" "),a("h2",{attrs:{id:"数据去重-distinct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据去重-distinct"}},[s._v("#")]),s._v(" 数据去重 "),a("code",[s._v("DISTINCT")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" another_column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"数据排序-order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据排序-order-by"}},[s._v("#")]),s._v(" 数据排序 "),a("code",[s._v("ORDER BY")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" another_column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"数据截取-limit、offset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据截取-limit、offset"}},[s._v("#")]),s._v(" 数据截取 "),a("code",[s._v("LIMIT")]),s._v("、"),a("code",[s._v("OFFSET")])]),s._v(" "),a("p",[a("strong",[a("code",[s._v("LIMIT")]),s._v(" 和 "),a("code",[s._v("OFFSET")]),s._v(" 子句通常和 "),a("code",[s._v("ORDER BY")]),s._v(" 语句一起使用")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("LIMIT")]),s._v(" 代表数据数量限制，"),a("code",[s._v("OFFSET")]),s._v(" 代表数据截取偏移量。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" another_column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" num_limit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" num_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"联表查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联表查询"}},[s._v("#")]),s._v(" 联表查询")]),s._v(" "),a("p",[a("code",[s._v("JOINs")]),s._v(" 类别分为两种 "),a("code",[s._v("INNER JOIN")]),s._v(" 和 "),a("code",[s._v("OUTER JOIN")]),s._v("。")]),s._v(" "),a("p",[s._v("其中 "),a("code",[s._v("OUTER JOIN")]),s._v(" 又可以细分为:")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("LEFT JOIN")])]),s._v(" "),a("li",[a("code",[s._v("RIGHT JOIN")])]),s._v(" "),a("li",[a("code",[s._v("FULL JOIN")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230322141509.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" another_table\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" tableName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" another_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" num_limit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" num_offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"null-字段的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-字段的处理"}},[s._v("#")]),s._v(" "),a("code",[s._v("NULL")]),s._v(" 字段的处理")]),s._v(" "),a("p",[s._v("之前我们已经接触过 "),a("code",[s._v("NULL")]),s._v("。 在数据库中，"),a("code",[s._v("NULL")]),s._v(' 表达的是 "无" 的概念，或者说没有东西。因为 '),a("code",[s._v("NULL")]),s._v(" 的存在，我们需要在编写 "),a("code",[s._v("SQL")]),s._v(" 时考虑到某个属性列可能是 "),a("code",[s._v("NULL")]),s._v(" 的情况， 这种特殊性会造成编写 "),a("code",[s._v("SQL")]),s._v(" 的复杂性，所以没有必要的情况下，我们应该尽量减少 "),a("code",[s._v("NULL")]),s._v(" 的使用，让数据中尽可能少出现 "),a("code",[s._v("NULL")]),s._v(" 的情况。")]),s._v(" "),a("p",[s._v("如果某个字段你没有填写到数据库，很可能就会出现 "),a("code",[s._v("NULL")]),s._v(" 。所已一个常见的方式就是为字段设置默认值,比如 数字的默认值设置为 "),a("code",[s._v("0")]),s._v("，字符串设置为 "),a("code",[s._v('""')]),s._v(" 字符串。")]),s._v(" "),a("p",[s._v("但是在一些 "),a("code",[s._v("NULL")]),s._v(" 表示它本来含义的场景，需要注意是否设置默认值还是保持 "),a("code",[s._v("NULL")]),s._v("。 (比如, 当你计算一些行的平均值的时候，如果是 "),a("code",[s._v("0")]),s._v(" 会参与计算导致平均值差错，是 "),a("code",[s._v("NULL")]),s._v(" 则不会参与计算)。")]),s._v(" "),a("p",[s._v("还有一些情况很难避免 "),a("code",[s._v("NULL")]),s._v(" 的出现, 比如之前说的 "),a("code",[s._v("OUTER JOINs")]),s._v(" 多表连接，"),a("code",[s._v("A")]),s._v(" 和 "),a("code",[s._v("B")]),s._v(" 有数据差异时，必须用 "),a("code",[s._v("NULL")]),s._v(" 来填充。这种情况，可以用 "),a("code",[s._v("IS NULL")]),s._v(" 和 "),a("code",[s._v("IS NOT NULL")]),s._v(" 来判断在某个字段是否等于 "),a("code",[s._v("NULL")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" another_table\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" tableName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" another_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"在-sql-查询中使用表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-sql-查询中使用表达式"}},[s._v("#")]),s._v(" 在 "),a("code",[s._v("SQL")]),s._v(" 查询中使用表达式")]),s._v(" "),a("p",[s._v("之前我们在 "),a("code",[s._v("SQL")]),s._v(" 中的出现 "),a("code",[s._v("column")]),s._v("（属性名）的地方，我们都只是写上 "),a("code",[s._v("column")]),s._v(" 自身。")]),s._v(" "),a("p",[a("strong",[s._v("其实在 "),a("code",[s._v("SQL")]),s._v(" 中可以用 "),a("code",[s._v("column")]),s._v(" 的地方，都可以用表达式来指定对属性进行一定的计算或处理")]),s._v("。")]),s._v(" "),a("p",[s._v("同时，"),a("strong",[s._v("还能使用 "),a("code",[s._v("AS")]),s._v(" 命名新的 "),a("code",[s._v("column")]),s._v(" 名")]),s._v("。")]),s._v(" "),a("p",[s._v("譬如针对 "),a("code",[s._v("John Lasseter")]),s._v(" 导演的每部电影每分钟值多少钱，筛选出最高的 "),a("code",[s._v("3")]),s._v(" 个电影名和价值:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Domestic_sales "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" International_sales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Length_minutes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" movies\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" Boxoffice\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" movies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Boxoffice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Movie_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" Director "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'John Lasseter'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"在查询中进行统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在查询中进行统计"}},[s._v("#")]),s._v(" 在查询中进行统计")]),s._v(" "),a("p",[s._v("我们之前只是这样使用：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tableName\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但实际上 "),a("code",[s._v("SQL")]),s._v(" 提供了一些"),a("strong",[s._v("聚合函数")]),s._v("以供我们对指定列进行操作。")]),s._v(" "),a("p",[s._v("常用的"),a("strong",[s._v("聚合函数")]),s._v("有：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Function")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("COUNT(*)")]),s._v("，"),a("code",[s._v("COUNT(column)")])]),s._v(" "),a("td",[s._v("计数！"),a("code",[s._v("COUNT(*)")]),s._v(" 统计数据行数，"),a("code",[s._v("COUNT(column)")]),s._v(" 统计 "),a("code",[s._v("column")]),s._v(" 非 "),a("code",[s._v("NULL")]),s._v(" 的行数。")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("MIN(column)")])]),s._v(" "),a("td",[s._v("找 "),a("code",[s._v("column")]),s._v(" 最小的一行")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("MAX(column)")])]),s._v(" "),a("td",[s._v("找 "),a("code",[s._v("column")]),s._v(" 最大的一行")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("AVG(column)")])]),s._v(" "),a("td",[s._v("对 "),a("code",[s._v("column")]),s._v(" 的所有行求平均值")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("SUM(column)")])]),s._v(" "),a("td",[s._v("对 "),a("code",[s._v("column")]),s._v(" 的所有行求和")])])])]),s._v(" "),a("p",[s._v("譬如，以下形式是对指定列求和：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("years"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" movies\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("关于这些函数的使用方式，要注意的一点是，"),a("strong",[s._v("获取到指定列后再操作")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230322194216.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"数据分组-group-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据分组-group-by"}},[s._v("#")]),s._v(" 数据分组 "),a("code",[s._v("GROUP BY")])]),s._v(" "),a("p",[s._v("数据分组，就是按照指定列的相同数据进行分组。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" work_year "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emplyees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230322200335.png",alt:""}})]),s._v(" "),a("p",[s._v("通常情况下"),a("strong",[s._v("聚合函数")]),s._v("会与 "),a("code",[s._v("GROUP BY")]),s._v(" 分组联用。")]),s._v(" "),a("p",[s._v("譬如，计算角色的平均工作年限：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("work_year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emplyees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"数据子集过滤-having"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据子集过滤-having"}},[s._v("#")]),s._v(" 数据子集过滤 "),a("code",[s._v("HAVING")])]),s._v(" "),a("p",[s._v("当我们使用 "),a("code",[s._v("GROUP BY")]),s._v(" 对数据分组之后，如果想要进一步筛选，就可以使用 "),a("code",[s._v("HAVING")]),s._v("。")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("HAVING")]),s._v(" 的语法类似于 "),a("code",[s._v("WHERE")]),s._v("，但二者针对的数据集不同")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" role_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("work_year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" avg_work_year "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" emplyees\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" role_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HAVING")]),s._v(" avg_work_year "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230322201015.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"select-查询执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-查询执行顺序"}},[s._v("#")]),s._v(" "),a("code",[s._v("SELECT")]),s._v(" 查询执行顺序")]),s._v(" "),a("p",[s._v("完整的 "),a("code",[s._v("SELECT")]),s._v(" 语句如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AGG_FUNC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column_or_expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" …\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mytable\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" another_table\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" mytable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" another_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" constraint_expression\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HAVING")]),s._v(" constraint_expression\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" COUNT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("执行顺序：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("FROM")]),s._v(" 和 "),a("code",[s._v("JOINs")])]),s._v(" "),a("li",[a("code",[s._v("WHERE")])]),s._v(" "),a("li",[a("code",[s._v("GROUP BY")])]),s._v(" "),a("li",[a("code",[s._v("HAVING")])]),s._v(" "),a("li",[a("code",[s._v("SELECT")])]),s._v(" "),a("li",[a("code",[s._v("DISTINCT")])]),s._v(" "),a("li",[a("code",[s._v("ORDER BY")])]),s._v(" "),a("li",[a("code",[s._v("LIMIT")]),s._v(" 和 "),a("code",[s._v("OFFSET")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);