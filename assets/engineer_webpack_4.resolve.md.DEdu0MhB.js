import{_ as e,o as a,c as i,aP as n}from"./chunks/framework.D1yHhm2y.js";const c=JSON.parse('{"title":"resolve","description":"","frontmatter":{"title":"resolve"},"headers":[],"relativePath":"engineer/webpack/4.resolve.md","filePath":"engineer/webpack/4.resolve.md","lastUpdated":1735912341000}'),t={name:"engineer/webpack/4.resolve.md"};function p(l,s,o,h,r,d){return a(),i("div",null,s[0]||(s[0]=[n(`<p><code>resolve</code>用来配置<code>webpack</code>如何寻找模块。非常显著的一个优点是使得代码更加精简清爽。</p><p>下面介绍下比较常用的配置：</p><h2 id="_1-alias" tabindex="-1">1.alias <a class="header-anchor" href="#_1-alias" aria-label="Permalink to &quot;1.alias&quot;">​</a></h2><p><code>alias</code>意为<strong>别名</strong>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;@&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/path/to/src&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>使用上面的配置，就可以使<code>@</code>映射到<code>src</code>目录。譬如没有使用<code>alias</code>相关配置之前，导入模块路径是这样的：<code>../../src/path/to/main.js</code>。使用之后，代码可以是这样：<code>@/path/to/main.js</code>。</p><h2 id="_2-extensions" tabindex="-1">2.extensions <a class="header-anchor" href="#_2-extensions" aria-label="Permalink to &quot;2.extensions&quot;">​</a></h2><p><code>extensions</code>意为扩展。在这里特指文件扩展名。</p><p>默认值为：<code>[&quot;.js&quot;, &quot;.json&quot;]</code>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在这里设置的数组 会覆盖extensions的默认值。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    extensions: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>import target from &#39;@/src/views/target&#39;</code></p><p>假设<code>target</code>是文件，这样的语法，会按照优先级分别寻找<code>target.vue</code>、<code>target.js</code>、<code>target.json</code>。</p><h2 id="_3-enforceextension" tabindex="-1">3.enforceExtension <a class="header-anchor" href="#_3-enforceextension" aria-label="Permalink to &quot;3.enforceExtension&quot;">​</a></h2><p>如果是<code>true</code>，将不允许无扩展名(extension-less)文件。默认如果 <code>./foo</code> 有 <code>.js</code> 扩展，<code>require(&#39;./foo&#39;)</code> 可以正常运行。但如果启用此选项，只有 <code>require(&#39;./foo.js&#39;)</code> 能够正常工作。</p><p>默认值为<code>false</code>。</p><p>其他<code>extensions</code>相关配置可见<a href="https://www.webpackjs.com/configuration/resolve/#resolve" target="_blank" rel="noreferrer">官网</a></p>`,16)]))}const E=e(t,[["render",p]]);export{c as __pageData,E as default};