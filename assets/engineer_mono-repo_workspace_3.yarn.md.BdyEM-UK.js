import{_ as a,o as i,c as e,aP as n}from"./chunks/framework.D1yHhm2y.js";const c=JSON.parse('{"title":"Yarn","description":"","frontmatter":{"title":"Yarn"},"headers":[],"relativePath":"engineer/mono-repo/workspace/3.yarn.md","filePath":"engineer/mono-repo/workspace/3.yarn.md","lastUpdated":1735912341000}'),t={name:"engineer/mono-repo/workspace/3.yarn.md"};function p(l,s,h,k,r,o){return i(),e("div",null,s[0]||(s[0]=[n(`<h2 id="_1-使用单个workspace" tabindex="-1">1.使用单个workspace <a class="header-anchor" href="#_1-使用单个workspace" aria-label="Permalink to &quot;1.使用单个workspace&quot;">​</a></h2><p>单个 <code>workspace</code> 执行指令。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">workspace_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>譬如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加vue依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移除vue依赖</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>利用 <code>yarn workspace &lt;workspace_name&gt; add</code> 安装包时，会默认有 <code>hoist</code> 效果。如果想要针对某些包关闭此特性，可以参考使用<a href="https://classic.yarnpkg.com/blog/2018/02/15/nohoist/" target="_blank" rel="noreferrer">nohoist</a>。</p></div><h2 id="_2-使用workspaces" tabindex="-1">2.使用workspaces <a class="header-anchor" href="#_2-使用workspaces" aria-label="Permalink to &quot;2.使用workspaces&quot;">​</a></h2><p>整个 <code>workspaces</code> 下的所有 <code>workspace</code> 执行指令。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspaces</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>譬如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspaces</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看依赖关系树</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> workspaces</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span></code></pre></div>`,11)]))}const g=a(t,[["render",p]]);export{c as __pageData,g as default};