import{_ as a,o as n,c as e,aP as t}from"./chunks/framework.D1yHhm2y.js";const l={mounted(){window.onload=function(){var s=document.querySelector("#span");s.innerText=window.navigator.onLine?"online":"offline"},window.addEventListener("online",()=>{var s=document.querySelector("#span");s.innerText="online"}),window.addEventListener("offline",()=>{var s=document.querySelector("#span");s.innerText="offline"})}},g=JSON.parse('{"title":"3.navigator","description":"","frontmatter":{"title":"3.navigator"},"headers":[],"relativePath":"FE/javascript/BOM/3.navigator.md","filePath":"FE/javascript/BOM/3.navigator.md","lastUpdated":1735912341000}');function p(s,i,h,k,o,r){return n(),e("div",null,i[0]||(i[0]=[t(`<p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h1z2i6j0yij218p0u0dmu.jpg" alt=""></p><h2 id="_3-1-useragent" tabindex="-1">3-1.userAgent <a class="header-anchor" href="#_3-1-useragent" aria-label="Permalink to &quot;3-1.userAgent&quot;">​</a></h2><p><code>navigator.userAgent</code> 属性返回浏览器的 <code>User Agent</code> 字符串，表示用户设备信息，包含了浏览器的厂商、版本、操作系统等信息。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// chrome浏览器下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.navigator.userAgent)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36</span></span></code></pre></div><h2 id="_3-2-platform" tabindex="-1">3-2.platform <a class="header-anchor" href="#_3-2-platform" aria-label="Permalink to &quot;3-2.platform&quot;">​</a></h2><p><code>navigator.platform</code> 属性返回用户的操作系统信息，比如 <code>MacIntel</code>、<code>Win32</code>、<code>Linux x86_64</code>等。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// mac下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(navigator.platform) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// MacIntel</span></span></code></pre></div><h2 id="_3-2-online" tabindex="-1">3-2.onLine <a class="header-anchor" href="#_3-2-online" aria-label="Permalink to &quot;3-2.onLine&quot;">​</a></h2><p><code>navigator.onLine</code> 属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。</p><p>有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的 <code>onLine</code> 属性会返回true，所以不能假定只要是true，用户就一定能访问互联网。</p><p>不过，如果是 <code>false</code>，可以断定用户一定离线。</p><p>用户变成在线会触发 <code>online</code> 事件，变成离线会触发 <code>offline</code> 事件。</p><p style="font-weight:bold;">您现在的网络状态是: <span id="span" style="color:red;"></span></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-weight: bold;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;您现在的网络状态是: &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;span&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color: red;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> span </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    span.innerText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.navigator.onLine </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;online&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;offline&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;online&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> span </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    span.innerText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;online&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;offline&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> span </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    span.innerText </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;offline&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="_3-3-language" tabindex="-1">3-3.language <a class="header-anchor" href="#_3-3-language" aria-label="Permalink to &quot;3-3.language&quot;">​</a></h2><p><code>navigator.language</code> 属性返回一个字符串，表示浏览器的<strong>首选语言</strong>。该属性只读。</p><p><code>navigator.languages</code> 属性返回一个数组，表示用户可以接受的语言。</p><p><code>navigator.language</code> 总是这个数组的第一个成员。</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h207apjjbpj21o60ao75d.jpg" alt=""></p><p><code>HTTP</code> 请求头信息的 <code>Accept-Language</code> 字段，就来自这个数组:</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/main/img/e6c9d24ely1h2079ucs10j220t0u0tj0.jpg" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>另外，需要判断用户端的浏览器语言，可使用 <code>navigator.language</code> 属性。</p><p><strong>而且该属性不会受用户自定义浏览器配置的影响，只跟不同区域的浏览器版本相关</strong>。</p><p>即如果在<a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank" rel="noreferrer">中文网站</a>下载了 <code>chrome</code> 浏览器，则该属性会是 <code>zh-CN</code>。即使在<strong>设置</strong>里更改语言，该属性也不会变动。</p><p>除非在<a href="https://www.google.cn/intl/en/chrome/" target="_blank" rel="noreferrer">英文网站</a>下载了 <code>chrome</code> 浏览器，则该属性会是 <code>en</code>。</p></div><h2 id="_3-4-geolocation" tabindex="-1">3-4.geolocation <a class="header-anchor" href="#_3-4-geolocation" aria-label="Permalink to &quot;3-4.geolocation&quot;">​</a></h2><p><code>navigator.geolocation</code> 属性返回一个 <code>Geolocation</code> 对象，用来获取<strong>用户地理位置信息</strong>。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意，该 <code>API</code> 只有在 <code>HTTPS</code> 协议下可用，否则调用下面方法时会报错。</p></div><p><code>Geolocation</code> 对象提供下面三个方法。</p><ol><li><code>getCurrentPosition()</code>：得到用户的当前位置。</li><li><code>watchPosition()</code>：监听用户位置变化。</li><li><code>clearWatch()</code>：取消 <code>watchPosition()</code> 方法指定的监听函数。</li></ol><p>注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。</p>`,28)]))}const E=a(l,[["render",p]]);export{g as __pageData,E as default};