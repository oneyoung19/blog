import{_ as i,c as a,o as n,b0 as p}from"./chunks/framework.DpiX_U7m.js";const o=JSON.parse('{"title":"2.IIFE","description":"","frontmatter":{"title":"2.IIFE"},"headers":[],"relativePath":"FE/js-advance/module/2.IIFE.md","filePath":"FE/js-advance/module/2.IIFE.md","lastUpdated":1748348682000}'),l={name:"FE/js-advance/module/2.IIFE.md"};function e(t,s,h,k,d,c){return n(),a("div",null,s[0]||(s[0]=[p(`<p><code>IIFE</code> 意为 <code>Immediately Invoked Functions Expression</code>。</p><p>它指的是<strong>在定义时就会立即执行的函数</strong>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre></div><p>上述语法包含两部分：</p><ol><li>用 <code>()</code> 包裹一个匿名函数。这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 <code>IIFE</code> 中的变量，而且又不会污染全局作用域。</li><li>再一次使用 <code>()</code> 创建了一个立即执行函数表达式，<code>JavaScript</code> 引擎到此将直接执行函数。</li></ol><p><code>IIFE</code> 不单单有上面列举的语法，它的所有可使用语法如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1.缺点是无法表明函数与之后的()的整体性，但最普及，大多数库都是这种形式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2.能够将匿名函数与()视作整体，推荐使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3.放在中括号内执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4.使用！开头</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5.使用 + 运算符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 6.使用 - 运算符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 7.使用 ~ 波浪符</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()</span></span></code></pre></div><p>前文中，我们提到，模块化的目的有两个：</p><ol><li>不污染全局变量。</li><li>更好的组织和维护代码模块之间的关系。</li></ol><p>但显而易见的是，<code>IIFE</code> 并不能完全达到上述两个结果，即使 <code>IIFE</code> 在一定程度上<strong>减少了</strong>全局变量的污染概率。</p>`,10)]))}const r=i(l,[["render",e]]);export{o as __pageData,r as default};
