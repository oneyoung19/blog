import{_ as i,o as a,c as t,aP as e}from"./chunks/framework.D1yHhm2y.js";const r=JSON.parse('{"title":"4.本地仓库","description":"","frontmatter":{"title":"4.本地仓库"},"headers":[],"relativePath":"engineer/git/4.local.md","filePath":"engineer/git/4.local.md","lastUpdated":1735912341000}'),l={name:"engineer/git/4.local.md"};function p(n,s,h,k,d,o){return a(),t("div",null,s[0]||(s[0]=[e(`<h2 id="_4-1-操作" tabindex="-1">4-1.操作 <a class="header-anchor" href="#_4-1-操作" aria-label="Permalink to &quot;4-1.操作&quot;">​</a></h2><p>在暂存区使用 <code>git commit</code> 后，就会将文件提交到本地仓库。</p><p>使用 <code>git status</code> 查看下当前状态：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/008eGmZEly1gp4eeu2wokj30v404wdgl.jpg" alt=""></p><p>这时，<code>Git</code> 提示我们使用 <code>git push</code> 将文件推送到远程仓库。远程仓库的建立需要看下节。</p><p>我们先额外说一点注意事项。</p><p><code>git push</code> 实际上是 <code>git push &lt;name&gt; &lt;local&gt;:&lt;remote&gt;</code> 的简写形式。</p><p>其中 <code>name</code> 指代的是远程主机名，<code>local</code> 指代本地分支名，<code>remote</code> 指代远程分支名。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果省略了 <code>local</code> 或者 <code>remote</code>，直接使用 <code>git push &lt;name&gt; &lt;branch&gt;</code> 的话，</p><p>是将本地的 <code>branch</code> 分支推送到远程的 <code>branch</code> 分支。</p><p>这一点与 <code>git pull &lt;name&gt; &lt;branch&gt;</code> 有区别。该指令是将远程的 <code>branch</code> 分支拉取到<strong>本地的当前分支</strong>。而不是本地的对应 <code>branch</code> 分支。</p></div><p>在终端直接使用 <code>git push</code> 时，可能会报如下错误：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/008eGmZEly1gp4ej1zmyuj30ws04m0td.jpg" alt=""></p><p>它的意思是说，<strong>当前分支没有对应的上游分支</strong>。</p><p>我们可以执行一次 <code>git push --set-upstream origin master</code> 来推送到远程仓库。执行之后，本地分支与上游分支就会绑定。后面我们就可以愉快的使用简写了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用 <code>git clone &lt;remote&gt;</code> 拉取远程仓库的话，上游分支与本地分支会自动绑定，使用 <code>git push</code> 不会发生上述警告。</p></div><h2 id="_4-2-撤销" tabindex="-1">4-2.撤销 <a class="header-anchor" href="#_4-2-撤销" aria-label="Permalink to &quot;4-2.撤销&quot;">​</a></h2><p>在本地仓库，如果想要撤销操作的话，可以使用 <code>git reset &lt;commit id&gt;</code> 指令。</p><p>该指令有 3 条配置：</p><ul><li><code>--mixed</code>: 回退的版本会放在工作区</li><li><code>--soft</code>: 回退的版本会放在暂存区</li><li><code>--hard</code>: 回退的版本会丢弃</li></ul><h2 id="指令总结" tabindex="-1">指令总结 <a class="header-anchor" href="#指令总结" aria-label="Permalink to &quot;指令总结&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送本地分支至远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">loca</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">remot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 本地分支与上游分支绑定</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set-upstream</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">loca</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">remot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销本地仓库文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mixed/soft/hard</span></span></code></pre></div>`,20)]))}const g=i(l,[["render",p]]);export{r as __pageData,g as default};