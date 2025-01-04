import{_ as i,o as a,c as n,aP as l}from"./chunks/framework.D1yHhm2y.js";const d=JSON.parse('{"title":"Private Registry","description":"","frontmatter":{"title":"Private Registry"},"headers":[],"relativePath":"engineer/pkg-manager/npm/6.private-registry.md","filePath":"engineer/pkg-manager/npm/6.private-registry.md","lastUpdated":1735989283000}'),p={name:"engineer/pkg-manager/npm/6.private-registry.md"};function t(e,s,h,k,r,o){return a(),n("div",null,s[0]||(s[0]=[l(`<p>目前的 <code>NPM</code> 私有库有以下 <code>3</code> 种方案：</p><ol><li><p><code>NPM</code> 官方私有库，服务齐全、操作简便。唯一缺点是<strong>付费较贵</strong>。</p></li><li><p><code>CNPM</code> 私有库，淘宝出品。缺点是<strong>热度较低，维护不频繁，而且配置繁琐</strong>。</p></li><li><p><code>verdaccio</code> 私有库，轻量级、配置简单、托管服务器、安装启动即可。缺点是<strong>权限设计简陋</strong>。</p></li></ol><p>从以上三者对比来看，小团队选择 <code>verdaccio</code> 即可。</p><p>官网：<a href="https://verdaccio.org/" target="_blank" rel="noreferrer">verdaccio</a></p><h2 id="_1-原理" tabindex="-1">1.原理 <a class="header-anchor" href="#_1-原理" aria-label="Permalink to &quot;1.原理&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20231025115044.png" alt=""></p><h2 id="_2-安装" tabindex="-1">2.安装 <a class="header-anchor" href="#_2-安装" aria-label="Permalink to &quot;2.安装&quot;">​</a></h2><p>根据本地工具 <code>npm</code>、<code>yarn</code>、<code>pnpm</code> 的不同，可以分别采用以下几种形式：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location=global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verdaccio</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verdaccio</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verdaccio</span></span></code></pre></div><p><code>docker</code> 安装：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verdaccio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 4873:4873</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> verdaccio/verdaccio</span></span></code></pre></div><h2 id="_3-运行" tabindex="-1">3.运行 <a class="header-anchor" href="#_3-运行" aria-label="Permalink to &quot;3.运行&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">verdaccio</span></span></code></pre></div><p><code>verdaccio</code> 的用户机制和 <code>npm</code> 官方并不共享，也就是说 <code>npm</code> 的原有账号，并不能登录 <code>verdaccio</code>。</p><p>新用户需要重新创建。</p><h2 id="_4-设置-registry" tabindex="-1">4.设置 <code>registry</code> <a class="header-anchor" href="#_4-设置-registry" aria-label="Permalink to &quot;4.设置 \`registry\`&quot;">​</a></h2><ol><li><p><code>npm set registry http://localhost:4873/</code> or <code>yarn config set registry http://localhost:4873</code></p></li><li><p><code>npm install --registry http://localhost:4873</code> or <code>yarn add --registry http://localhost:4873</code></p></li><li><p><code>.npmrc</code> 或者 <code>.yarnrc</code></p></li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#.npmrc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://localhost:4873</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#.yarnrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://localhost:4873&quot;</span></span></code></pre></div><ol start="4"><li>a <code>publishConfig</code> in your <code>package.json</code></li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;publishConfig&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;registry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:4873&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>npm update</code> 更新依赖？</p><ul><li><code>npm update</code> 会按照 <code>semver</code> 来更新依赖包。但并不会更改 <code>package.json</code> 中声明的包版本。</li></ul></div><h2 id="_5-配置文件" tabindex="-1">5.配置文件 <a class="header-anchor" href="#_5-配置文件" aria-label="Permalink to &quot;5.配置文件&quot;">​</a></h2><p><code>verdaccio</code> 启动后，会默认生成 <code>~/.config/verdaccio/config.yaml</code> （<code>macos</code>）配置文件。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># path to a directory with all packages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">storage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Users/user-name/.local/share/verdaccio/storage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># path to a directory with plugins to include</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./plugins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/webui</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">web</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Verdaccio</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # comment out to disable gravatar support</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # gravatar: false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # by default packages are ordercer ascendant (asc|desc)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # sort_packages: asc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # convert your UI to the dark side</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # darkMode: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # html_cache: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # by default all features are displayed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # login: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showInfo: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showSettings: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # In combination with darkMode you can force specific theme</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showThemeSwitch: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showFooter: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showSearch: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showRaw: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # showDownloadTarball: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  HTML tags injected after manifest &lt;scripts/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # scriptsBodyAfter:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://my.company.com/customJS.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  HTML tags injected before ends &lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  metaScripts:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://code.jquery.com/jquery-3.5.1.slim.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #    - &#39;&lt;script type=&quot;text/javascript&quot; src=&quot;https://browser.sentry-cdn.com/5.15.5/bundle.min.js&quot;&gt;&lt;/script&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #    - &#39;&lt;meta name=&quot;robots&quot; content=&quot;noindex&quot; /&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  HTML tags injected first child at &lt;body/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  bodyBefore:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #    - &#39;&lt;div id=&quot;myId&quot;&gt;html before webpack scripts&lt;/div&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  Public path for template manifest scripts (only manifest)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #  publicPath: http://somedomain.org/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#authentication</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">auth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  htpasswd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./htpasswd</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Maximum amount of users allowed to register, defaults to &quot;+inf&quot;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # You can set this to -1 to disable registration.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    max_users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Hash algorithm, possible options are: &quot;bcrypt&quot;, &quot;md5&quot;, &quot;sha1&quot;, &quot;crypt&quot;.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # algorithm: bcrypt # by default is crypt, but is recommended use bcrypt for new installations</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Rounds number for &quot;bcrypt&quot;, will be ignored for other algorithms.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # rounds: 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#uplinks</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a list of other known repositories we can talk to</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uplinks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  npmjs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://registry.npmjs.org/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Learn how to protect your packages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/protect-your-dependencies/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#packages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">packages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;@*/*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # scoped packages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    access</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$all</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    publish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$authenticated</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    unpublish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$authenticated</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npmjs</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;**&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # allow all users (including non-authenticated users) to read and</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # publish all packages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # you can specify usernames/groupnames (depending on your auth plugin)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # and three keywords: &quot;$all&quot;, &quot;$anonymous&quot;, &quot;$authenticated&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    access</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # allow all known users to publish/publish packages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # (anyone can register by default, remember?)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    publish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$authenticated</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    unpublish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$authenticated</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # if package is not available locally, proxy requests to &#39;npmjs&#39; registry</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npmjs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  keepAliveTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Allow \`req.ip\` to resolve properly when Verdaccio is behind a proxy or load-balancer</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # See: https://expressjs.com/en/guide/behind-proxies.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # trustProxy: &#39;127.0.0.1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#offline-publish</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># publish:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   allow_offline: false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#url-prefix</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># url_prefix: /verdaccio/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org&#39;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># url_prefix: &#39;/my_prefix&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># // url -&gt; https://somedomain.org/my_prefix/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org&#39;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># url_prefix: &#39;/&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># // url -&gt; https://somedomain.org/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># VERDACCIO_PUBLIC_URL=&#39;https://somedomain.org/first_prefix&#39;;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># url_prefix: &#39;/second_prefix&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># // url -&gt; https://somedomain.org/second_prefix/&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#security</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># security:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   api:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     legacy: true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     jwt:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#       sign:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         expiresIn: 29d</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#       verify:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         someProp: [value]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    web:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#      sign:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#        expiresIn: 1h # 1 hour by default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#      verify:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#         someProp: [value]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#user-rate-limit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># userRateLimit:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   windowMs: 50000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   max: 1000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#max-body-size</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># max_body_size: 10mb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#listen-port</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># listen:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - localhost:4873            # default value</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - http://localhost:4873     # same thing</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 0.0.0.0:4873              # listen on all addresses (INADDR_ANY)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - https://example.org:4873  # if you want to use https</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - &quot;[::1]:4873&quot;                # ipv6</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - unix:/tmp/verdaccio.sock    # unix socket</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The HTTPS configuration is useful if you do not consider use a HTTP Proxy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#https</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   key: ./path/verdaccio-key.pem</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   cert: ./path/verdaccio-cert.pem</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   ca: ./path/verdaccio-csr.pem</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#proxy</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http_proxy: http://something.local/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https_proxy: https://something.local/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/configuration#notifications</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># notify:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   method: POST</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   headers: [{ &quot;Content-Type&quot;: &quot;application/json&quot; }]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   endpoint: https://usagge.hipchat.com/v2/room/3729485/notification?auth_token=mySecretToken</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   content: &#39;{&quot;color&quot;:&quot;green&quot;,&quot;message&quot;:&quot;New package published: * {{ name }}*&quot;,&quot;notify&quot;:true,&quot;message_format&quot;:&quot;text&quot;}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">middlewares</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  audit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://verdaccio.org/docs/logger</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># log settings</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">stdout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pretty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#experiments:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  # support for npm token command</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  token: false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  # disable writing body size to logs, read more on ticket 1912</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  bytesin_off: false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  # enable tarball URL redirect for hosting tarball with a different server, the tarball_url_redirect can be a template string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  tarball_url_redirect: &#39;https://mycdn.com/verdaccio/\${packageName}/\${filename}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  # the tarball_url_redirect can be a function, takes packageName and filename and returns the url, when working with a js configuration file</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  tarball_url_redirect(packageName, filename) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    const signedUrl = // generate a signed url</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    return signedUrl;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># translate your registry, api i18n not available yet</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># i18n:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># list of the available translations https://github.com/verdaccio/verdaccio/blob/master/packages/plugins/ui-theme/src/i18n/ABOUT_TRANSLATIONS.md</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   web: en-US</span></span></code></pre></div><h2 id="_6-权限控制" tabindex="-1">6.权限控制 <a class="header-anchor" href="#_6-权限控制" aria-label="Permalink to &quot;6.权限控制&quot;">​</a></h2><p><code>verdaccio</code> 的权限控制比较简陋。</p><p>目前的方案是，将 <code>config.yaml</code> 中的 <code>max_users</code> 设置为 <code>1</code>，只允许注册一个账号。</p><p>其他配置使用 <code>config.yaml</code> 的默认配置即可。</p><p>这样，发布和删除包，可以使用已注册的账号。而访问包，在内网环境下的所有人均可以。</p><h2 id="_7-参考文章" tabindex="-1">7.参考文章 <a class="header-anchor" href="#_7-参考文章" aria-label="Permalink to &quot;7.参考文章&quot;">​</a></h2><ol><li><p><a href="https://juejin.cn/post/6953115364511186975" target="_blank" rel="noreferrer">私有npm仓库</a></p></li><li><p><a href="https://zhaomenghuan.js.org/blog/npm-private-repository-verdaccio.html" target="_blank" rel="noreferrer">npm 私有仓库工具 Verdaccio 搭建</a></p></li><li><p><a href="http://www.wynneit.cn/2021/07/12/verdaccio/" target="_blank" rel="noreferrer">搭建属于自己的私有npm库</a></p></li></ol>`,34)]))}const g=i(p,[["render",t]]);export{d as __pageData,g as default};
