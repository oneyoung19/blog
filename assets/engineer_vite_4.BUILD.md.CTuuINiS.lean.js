import{_ as a,o as i,c as n,aP as e}from"./chunks/framework.D1yHhm2y.js";const c=JSON.parse('{"title":"4.生产构建","description":"","frontmatter":{"title":"4.生产构建"},"headers":[],"relativePath":"engineer/vite/4.BUILD.md","filePath":"engineer/vite/4.BUILD.md","lastUpdated":1735912341000}'),l={name:"engineer/vite/4.BUILD.md"};function t(p,s,h,d,o,r){return i(),n("div",null,s[0]||(s[0]=[e(`<h2 id="_1-浏览器兼容性" tabindex="-1">1.浏览器兼容性 <a class="header-anchor" href="#_1-浏览器兼容性" aria-label="Permalink to &quot;1.浏览器兼容性&quot;">​</a></h2><p>用于生产环境的构建包会假设目标浏览器支持现代 <code>JavaScript</code> 语法。</p><p>默认情况下，<code>Vite</code> 的目标是能够 支持原生 <code>ESM script</code> 标签、支持原生 <code>ESM</code> 动态导入 和 <code>import.meta</code> 的浏览器：</p><ul><li>Chrome &gt;=87</li><li>Firefox &gt;=78</li><li>Safari &gt;=14</li><li>Edge &gt;=88</li></ul><p>你也可以通过 <strong><code>build.target</code></strong> 配置项 指定构建目标，最低支持 <code>es2015</code>。</p><p>传统浏览器可以通过插件 <code>@vitejs/plugin-legacy</code> 来支持，它将自动生成传统版本的 <code>chunk</code> 及与其相对应 <code>ES</code> 语言特性方面的 <code>polyfill</code>。</p><p>兼容版的 <code>chunk</code> 只会在不支持原生 <code>ESM</code> 的浏览器中进行按需加载。</p><h2 id="_2-公共基础路径" tabindex="-1">2.公共基础路径 <a class="header-anchor" href="#_2-公共基础路径" aria-label="Permalink to &quot;2.公共基础路径&quot;">​</a></h2><p>该属性的功能类似于 <code>webpack</code> 中的 <code>publicPath</code>。</p><p>在 <code>vite.config.js</code> 中可通过 <a href="https://cn.vitejs.dev/config/shared-options.html#base" target="_blank" rel="noreferrer">base</a> 属性设置。</p><p>如果在代码中想要访问该属性的话，可以通过 <code>import.meta.env.BASR_URL</code> 来读取。</p><h2 id="_3-自定义构建" tabindex="-1">3.自定义构建 <a class="header-anchor" href="#_3-自定义构建" aria-label="Permalink to &quot;3.自定义构建&quot;">​</a></h2><p>可以通过配置 <code>rollup</code> 以实现在 <code>build</code> 过程中的自定义构建：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rollupOptions: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // https://rollupjs.org/configuration-options/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="_4-split-chunks" tabindex="-1">4.Split Chunks <a class="header-anchor" href="#_4-split-chunks" aria-label="Permalink to &quot;4.Split Chunks&quot;">​</a></h2><p><a href="https://cn.vitejs.dev/guide/build.html#chunking-strategy" target="_blank" rel="noreferrer">chunking-strategy</a></p><h2 id="_5-watch" tabindex="-1">5.Watch <a class="header-anchor" href="#_5-watch" aria-label="Permalink to &quot;5.Watch&quot;">​</a></h2><p>可以使用 <code>vite build --watch</code> 来启用 <code>rollup</code> 的监听器。</p><p>或者，你可以直接通过 <code>build.watch</code> 调整底层的 <code>WatcherOptions</code> 选项：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    watch: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // https://rollupjs.org/configuration-options/#watch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>当启用 <code>--watch</code> 标志时，对 <code>vite.config.js</code> 的改动，以及任何要打包的文件，都将触发重新构建。</p><h2 id="_6-multiple-pages" tabindex="-1">6.Multiple Pages <a class="header-anchor" href="#_6-multiple-pages" aria-label="Permalink to &quot;6.Multiple Pages&quot;">​</a></h2><p>假设有下面这样的项目文件结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── vite.config.js</span></span>
<span class="line"><span>├── index.html</span></span>
<span class="line"><span>├── main.js</span></span>
<span class="line"><span>└── nested</span></span>
<span class="line"><span>    ├── index.html</span></span>
<span class="line"><span>    └── nested.js</span></span></code></pre></div><p>在<strong>开发过程</strong>中，简单地导航或链接到 <code>/nested/</code> - 将会按预期工作，与正常的静态文件服务器表现一致。</p><p>在<strong>构建过程</strong>中，你只需指定多个 <code>.html</code> 文件作为入口点即可：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { resolve } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;path&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rollupOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      input: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        main: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;index.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nested: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;nested/index.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="_7-library-mode" tabindex="-1">7.Library Mode <a class="header-anchor" href="#_7-library-mode" aria-label="Permalink to &quot;7.Library Mode&quot;">​</a></h2><p><a href="https://cn.vitejs.dev/guide/build.html#library-mode" target="_blank" rel="noreferrer">library-mode</a></p>`,29)]))}const g=a(l,[["render",t]]);export{c as __pageData,g as default};