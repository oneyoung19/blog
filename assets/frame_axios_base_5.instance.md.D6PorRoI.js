import{_ as i,o as a,c as n,aP as e}from"./chunks/framework.D1yHhm2y.js";const r=JSON.parse('{"title":"5.instance","description":"","frontmatter":{"title":"5.instance"},"headers":[],"relativePath":"frame/axios/base/5.instance.md","filePath":"frame/axios/base/5.instance.md","lastUpdated":1735912341000}'),t={name:"frame/axios/base/5.instance.md"};function p(h,s,l,k,o,d){return a(),n("div",null,s[0]||(s[0]=[e(`<p>这一节介绍如何创建 <code>Axios</code> 实例，以及各种 <code>config</code> 之间的优先级。</p><h2 id="_5-1-创建instance" tabindex="-1">5-1.创建instance <a class="header-anchor" href="#_5-1-创建instance" aria-label="Permalink to &quot;5-1.创建instance&quot;">​</a></h2><p>在实际项目中，如果我们始终使用 <code>axios(config)</code> 、 <code>axios.get(url[, config])</code> 或 <code>axios.post(url[, data[, config]])</code> 来发送请求，那么每次请求都需要单独配置 <code>config</code>，这看起来有点过于繁琐。</p><p>较为理想的请求方式是这样的，只关注以下三个方面：</p><ul><li><code>method</code></li><li><code>url</code></li><li><code>params</code> 或 <code>data</code>（分别对应 <code>get</code> <code>post</code> 方式）</li></ul><p>那么此时，我们可以通过 <code>axios.create([config])</code> 来创建一个实例。</p><p>此处的 <code>config</code>，我们可以称作 <code>instance config</code>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> instance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> axios.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseURL: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://some-domain.com/api/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  timeout: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;X-Custom-Header&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foobar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><strong>创建 <code>instance</code> 之后，它会继承 <code>axios</code> 的所有属性和方法</strong>。</p><p>使用 <code>instance</code> 创建的请求，都会有一份基础 <code>instance config</code>。</p><p>那么我们在项目中，可以这样使用：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getSomeThing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://some-domain.com/api/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    params,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> postSomeThing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://some-domain.com/api/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data, config)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>为了不拘泥于 <code>instance config</code>，我们在封装方法的时候，可以把 <code>config</code> 暴露出来，以供二次覆盖。</p><p>这里的 <code>config</code>，可以称作 <code>request config</code>，也就是<strong>实际请求配置</strong>。</p><h2 id="_5-2-config优先级" tabindex="-1">5-2.config优先级 <a class="header-anchor" href="#_5-2-config优先级" aria-label="Permalink to &quot;5-2.config优先级&quot;">​</a></h2><p>截止到本节，我们统共接触到了三种形式的 <code>config</code>。</p><p>它们分别是（<strong>优先级从低到高</strong>）：</p><ul><li><code>defaults config</code> 默认配置</li><li><code>instance config</code> 实例配置</li><li><code>request config</code> 实际请求配置</li></ul><p>当 <code>axios</code> 请求触发时，这三者配置会有一个 <code>merge</code> 合并覆盖的过程。</p><p><strong>高优先级配置会覆盖低优先级配置</strong>。</p>`,20)]))}const E=i(t,[["render",p]]);export{r as __pageData,E as default};