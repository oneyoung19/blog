import{_ as d,o as e,c as a,aP as s}from"./chunks/framework.D1yHhm2y.js";const k=JSON.parse('{"title":"操作符","description":"","frontmatter":{"title":"操作符"},"headers":[],"relativePath":"DB/mongodb/operators.md","filePath":"DB/mongodb/operators.md","lastUpdated":1735912341000}'),r={name:"DB/mongodb/operators.md"};function o(i,t,n,c,h,l){return e(),a("div",null,t[0]||(t[0]=[s(`<p>本节列举一些常用的操作符，更多操作符请参考：<a href="https://www.mongodb.com/docs/manual/reference/operator/" target="_blank" rel="noreferrer">https://www.mongodb.com/docs/manual/reference/operator/</a></p><h2 id="查询操作符" tabindex="-1">查询操作符 <a class="header-anchor" href="#查询操作符" aria-label="Permalink to &quot;查询操作符&quot;">​</a></h2><h3 id="比较查询操作符" tabindex="-1">比较查询操作符 <a class="header-anchor" href="#比较查询操作符" aria-label="Permalink to &quot;比较查询操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$eq</code></td><td>等于</td></tr><tr><td><code>$gt</code></td><td>大于</td></tr><tr><td><code>$gte</code></td><td>大于等于</td></tr><tr><td><code>$lt</code></td><td>小于</td></tr><tr><td><code>$lte</code></td><td>小于等于</td></tr><tr><td><code>$ne</code></td><td>不等于</td></tr><tr><td><code>$in</code></td><td>包含</td></tr><tr><td><code>$nin</code></td><td>不包含</td></tr></tbody></table><h3 id="逻辑查询操作符" tabindex="-1">逻辑查询操作符 <a class="header-anchor" href="#逻辑查询操作符" aria-label="Permalink to &quot;逻辑查询操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$and</code></td><td>与</td></tr><tr><td><code>$or</code></td><td>或</td></tr><tr><td><code>$not</code></td><td>非</td></tr><tr><td><code>$nor</code></td><td>非或</td></tr></tbody></table><h3 id="元素查询操作符" tabindex="-1">元素查询操作符 <a class="header-anchor" href="#元素查询操作符" aria-label="Permalink to &quot;元素查询操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$exists</code></td><td>匹配具有指定字段的文档。</td></tr><tr><td><code>$type</code></td><td>如果字段是指定类型，则选择文档。</td></tr></tbody></table><h3 id="评估查询操作符" tabindex="-1">评估查询操作符 <a class="header-anchor" href="#评估查询操作符" aria-label="Permalink to &quot;评估查询操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$mod</code></td><td>模</td></tr><tr><td><code>$regex</code></td><td>正则表达式</td></tr><tr><td><code>$text</code></td><td>文本</td></tr><tr><td><code>$where</code></td><td>匹配满足 <code>JavaScript</code> 表达式的文档。</td></tr></tbody></table><h3 id="数组查询操作符" tabindex="-1">数组查询操作符 <a class="header-anchor" href="#数组查询操作符" aria-label="Permalink to &quot;数组查询操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$all</code></td><td>匹配包含查询中指定的所有元素的数组。</td></tr><tr><td><code>$elemMatch</code></td><td>如果 <code>array</code> 字段中的元素符合所有指定 <code>$elemMatch</code> 条件，则选择文档。</td></tr><tr><td><code>$size</code></td><td>如果数组字段为指定大小，则选择文档。</td></tr></tbody></table><h3 id="地理空间查询操作符" tabindex="-1">地理空间查询操作符 <a class="header-anchor" href="#地理空间查询操作符" aria-label="Permalink to &quot;地理空间查询操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$geoIntersects</code></td><td>如果 <code>GeoJSON</code> 几何体与字段的几何体相交，则选择文档。</td></tr><tr><td><code>$geoWithin</code></td><td>如果 <code>GeoJSON</code> 几何体完全包含在字段的几何体内，则选择文档。</td></tr><tr><td><code>$near</code></td><td>返回与指定地理空间点最接近的文档。</td></tr><tr><td><code>$nearSphere</code></td><td>返回与指定地理空间点最接近的文档。</td></tr></tbody></table><h2 id="更新操作符" tabindex="-1">更新操作符 <a class="header-anchor" href="#更新操作符" aria-label="Permalink to &quot;更新操作符&quot;">​</a></h2><h3 id="字段更新操作符" tabindex="-1">字段更新操作符 <a class="header-anchor" href="#字段更新操作符" aria-label="Permalink to &quot;字段更新操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$currentDate</code></td><td>将字段更新为当前日期，时间或时间戳。</td></tr><tr><td><code>$inc</code></td><td>增加字段的值。</td></tr><tr><td><code>$min</code></td><td>仅当指定的值小于当前字段值时，才更新字段。</td></tr><tr><td><code>$max</code></td><td>仅当指定的值大于当前字段值时，才更新字段。</td></tr><tr><td><code>$mul</code></td><td>将字段的值乘以指定的值。</td></tr><tr><td><code>$rename</code></td><td>重命名字段。</td></tr><tr><td><code>$set</code></td><td>设置字段的值。</td></tr><tr><td><code>$setOnInsert</code></td><td>如果插入文档，则设置字段的值。</td></tr><tr><td><code>$unset</code></td><td>删除字段。</td></tr></tbody></table><h3 id="数组更新操作符" tabindex="-1">数组更新操作符 <a class="header-anchor" href="#数组更新操作符" aria-label="Permalink to &quot;数组更新操作符&quot;">​</a></h3><table tabindex="0"><thead><tr><th>操作符</th><th>说明</th></tr></thead><tbody><tr><td><code>$addToSet</code></td><td>将值添加到数组中，但不会创建副本。</td></tr><tr><td><code>$pop</code></td><td>从数组中删除第一个或最后一个元素。</td></tr><tr><td><code>$pull</code></td><td>从数组中删除所有匹配查询的元素。</td></tr><tr><td><code>$pullAll</code></td><td>从数组中删除所有匹配指定值的元素。</td></tr><tr><td><code>$push</code></td><td>将值添加到数组中。</td></tr></tbody></table><p>有一些额外的修饰符可以与 <code>$push</code> 操作符一起使用。</p><table tabindex="0"><thead><tr><th>修饰符</th><th>说明</th></tr></thead><tbody><tr><td><code>$each</code></td><td>将多个值添加到数组中。</td></tr><tr><td><code>$position</code></td><td>指定在数组中插入值的位置。</td></tr><tr><td><code>$slice</code></td><td>限制数组的大小。</td></tr><tr><td><code>$sort</code></td><td>按指定顺序排序数组。</td></tr></tbody></table><h2 id="聚合管道操作符" tabindex="-1">聚合管道操作符 <a class="header-anchor" href="#聚合管道操作符" aria-label="Permalink to &quot;聚合管道操作符&quot;">​</a></h2><p>这部分，需要先了解两个概念：<strong>聚合管道阶段</strong>和<strong>聚合管道操作符</strong>。</p><p>聚合管道阶段是指在 <code>MongoDB</code> 中，聚合操作被划分为不同的步骤或阶段，每个阶段都会对输入的文档进行一定的处理，并将处理结果传递给下一个阶段，最终得到最终的输出结果。</p><p>聚合管道操作符是指在聚合管道的每个阶段中，用于完成不同操作的工具集，如筛选、过滤、排序、修改等，是聚合管道的基本操作单位。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">collection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">aggregate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { $stage1: { ... } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { $stage2: { ... } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { $stageN: { ... } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># 或者 (MongoDB </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">aggregate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { $stage1: { ... } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { $stage2: { ... } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { $stageN: { ... } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>从 <code>MongoDb 4.2</code> 开始，可以在 <code>update</code> 相关的操作中使用聚合管道操作符。</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">collection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.updateMany(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { $stage1: { ... } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { $stage2: { ... } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { $stageN: { ... } }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>所有阶段列表如下：</p><table tabindex="0"><thead><tr><th>阶段</th><th>说明</th></tr></thead><tbody><tr><td><code>$addFields</code></td><td>将新字段添加到输入文档。</td></tr><tr><td><code>$bucket</code></td><td>将文档分组到指定的边界中。</td></tr><tr><td><code>$bucketAuto</code></td><td>将文档分组到指定数量的边界中。</td></tr><tr><td><code>$collStats</code></td><td>返回关于集合的统计信息。</td></tr><tr><td><code>$count</code></td><td>返回输入文档的数量。</td></tr><tr><td><code>$currentOp</code></td><td>返回当前正在运行的操作。</td></tr><tr><td><code>$facet</code></td><td>将输入文档分组到多个聚合管道中。</td></tr><tr><td><code>$geoNear</code></td><td>返回接近某一地理位置的有序文档。</td></tr><tr><td><code>$graphLookup</code></td><td>递归地执行管道以查找与输入文档相关联的文档。</td></tr><tr><td><code>$group</code></td><td>将集合中的文档分组，可用于统计结果。</td></tr><tr><td><code>$indexStats</code></td><td>返回有关集合索引的统计信息。</td></tr><tr><td><code>$limit</code></td><td>限制聚合管道返回的文档数。</td></tr><tr><td><code>$listLocalSessions</code></td><td>返回当前活动的客户端会话。</td></tr><tr><td><code>$listSessions</code></td><td>返回当前活动的客户端会话。</td></tr><tr><td><code>$lookup</code></td><td>将来自另一个集合的文档与当前文档结合起来。</td></tr><tr><td><code>$match</code></td><td>选择满足条件的文档，类似于 <code>SQL</code> 中的 <code>WHERE</code> 子句。</td></tr><tr><td><code>$merge</code></td><td>将聚合管道的输出写入集合。</td></tr><tr><td><code>$out</code></td><td>将聚合管道的输出写入集合。</td></tr><tr><td><code>$planCacheStats</code></td><td>返回有关查询计划缓存的统计信息。</td></tr><tr><td><code>$project</code></td><td>重组文档，可以用于重命名、增加或删除字段，也可以用于创建计算结果以及嵌套文档。</td></tr><tr><td><code>$redact</code></td><td>限制可见性的数据。</td></tr><tr><td><code>$replaceRoot</code></td><td>用新文档替换根文档。</td></tr><tr><td><code>$replaceWith</code></td><td>用新文档替换输入文档。</td></tr><tr><td><code>$sample</code></td><td>从集合中选择随机的文档。</td></tr><tr><td><code>$set</code></td><td>设置字段的值。</td></tr><tr><td><code>$setDifference</code></td><td>返回在第一个数组中存在但在第二个数组中不存在的元素。</td></tr><tr><td><code>$setEquals</code></td><td>如果两个数组包含相同的元素，则返回 <code>true</code>。</td></tr><tr><td><code>$setIntersection</code></td><td>返回两个数组中都存在的元素。</td></tr><tr><td><code>$setIsSubset</code></td><td>如果第一个数组中的每个元素都包含在第二个数组中，则返回 <code>true</code>。</td></tr><tr><td><code>$setUnion</code></td><td>返回包含所有输入数组中的唯一元素的数组。</td></tr><tr><td><code>$skip</code></td><td>跳过指定数量的文档，并返回余下的文档。</td></tr><tr><td><code>$sort</code></td><td>将输入文档排序后输出。</td></tr><tr><td><code>$sortByCount</code></td><td>将文档分组并返回每个组的数量。</td></tr><tr><td><code>$unset</code></td><td>删除字段。</td></tr><tr><td><code>$unwind</code></td><td>将文档中的数组字段拆分为多个文档。</td></tr></tbody></table>`,30)]))}const E=d(r,[["render",o]]);export{k as __pageData,E as default};