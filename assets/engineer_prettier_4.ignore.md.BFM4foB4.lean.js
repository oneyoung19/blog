import{_ as s,o as a,c as e,aP as t}from"./chunks/framework.D1yHhm2y.js";const c=JSON.parse('{"title":"4.Ignore","description":"","frontmatter":{"title":"4.Ignore"},"headers":[],"relativePath":"engineer/prettier/4.ignore.md","filePath":"engineer/prettier/4.ignore.md","lastUpdated":1735912341000}'),n={name:"engineer/prettier/4.ignore.md"};function l(p,i,r,o,h,d){return a(),e("div",null,i[0]||(i[0]=[t(`<p><code>Prettier</code> 提供了 <code>3</code> 种方式来配置忽略文件。分别是：</p><ol><li><p><code>Command Line</code> 命令行</p></li><li><p><code>Comments</code> 注释</p></li><li><p><code>.prettierignore</code> 文件</p></li></ol><h2 id="command-line" tabindex="-1">Command Line <a class="header-anchor" href="#command-line" aria-label="Permalink to &quot;Command Line&quot;">​</a></h2><p>在命令行中，可以利用<strong>否定模式</strong>来结合<a href="https://github.com/mrmlnc/fast-glob" target="_blank" rel="noreferrer">fast-glob</a>忽略特定文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prettier</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;!**/*.{js,jsx,vue}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --write</span></span></code></pre></div><h2 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h2><p>在项目代码中，可以利用<a href="https://prettier.io/docs/en/ignore#javascript" target="_blank" rel="noreferrer">prettier-ignore</a>注释来忽略下一行的节点格式化。</p><p>譬如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// prettier-ignore</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>也可以利用 <code>prettier-ignore-start</code> 与 <code>prettier-ignore-end</code> 来忽略文件中的某一范围区域格式化。</p><h2 id="ignoring-files" tabindex="-1">Ignoring Files <a class="header-anchor" href="#ignoring-files" aria-label="Permalink to &quot;Ignoring Files&quot;">​</a></h2><p>但在实际开发中，我们更推荐使用 <code>.prettierignore</code> 文件来忽略特定文件。</p><p>譬如：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">/*.min.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">/*.min.css</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">/*.md</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package.json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-lock.json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yarn.lock</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm-lock.yaml</span></span></code></pre></div>`,14)]))}const g=s(n,[["render",l]]);export{c as __pageData,g as default};