import{_ as s,o as a,c as e,aP as o}from"./chunks/framework.D1yHhm2y.js";const k=JSON.parse('{"title":"前端网络安全","description":"","frontmatter":{"title":"前端网络安全"},"headers":[],"relativePath":"cs/http/security.md","filePath":"cs/http/security.md","lastUpdated":1735912341000}'),t={name:"cs/http/security.md"};function l(n,i,p,r,d,h){return a(),e("div",null,i[0]||(i[0]=[o(`<h2 id="_1-xss" tabindex="-1">1.XSS <a class="header-anchor" href="#_1-xss" aria-label="Permalink to &quot;1.XSS&quot;">​</a></h2><p><a href="https://tech.meituan.com/2018/09/27/fe-security.html" target="_blank" rel="noreferrer">前端安全系列（一）：如何防止XSS攻击？</a></p><p><code>XSS</code> 的全称为 <code>Cross Site Scripting</code>，即<strong>跨站脚本攻击</strong>。</p><p>根据具体方式，可以分为三类：</p><ol><li>存储型</li><li>反射型</li><li>DOM型</li></ol><p>以上三种方式的区别，主要在于<strong>攻击脚本的触发场景和执行时机</strong>。</p><h3 id="_1-1-存储型" tabindex="-1">1-1.存储型 <a class="header-anchor" href="#_1-1-存储型" aria-label="Permalink to &quot;1-1.存储型&quot;">​</a></h3><p><strong>存储型</strong>意为，攻击脚本被提交存储到数据库，后端程序直接将数据库数据渲染到页面上，进而造成脚本执行。</p><p>具体步骤大致如下：</p><ol><li>攻击者将恶意代码提交到目标网站的数据库中。</li><li>用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器。</li><li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ol><p>存储型 <code>XSS</code> 常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>关于如何解决，我们能直观的想到，应该在数据提交到数据库前，进行数据转义或过滤（<strong>输入过滤</strong>）。</p><p>但这种方式有缺陷，可能也会影响到用户提交的正常数据。</p></div><h3 id="_1-2-反射型" tabindex="-1">1-2.反射型 <a class="header-anchor" href="#_1-2-反射型" aria-label="Permalink to &quot;1-2.反射型&quot;">​</a></h3><p><strong>反射型</strong>意为，攻击脚本携带在 <code>URL</code> 中，<code>URL</code> 中的参数被解析后，后端程序不作处理直接渲染到页面上，造成脚本执行。</p><p>具体步骤大致如下：</p><ol><li>攻击者构造出特殊的 <code>URL</code>，其中包含恶意代码。</li><li>用户打开带有恶意代码的 <code>URL</code> 时，网站服务端将恶意代码从 <code>URL</code> 中取出，拼接在 <code>HTML</code> 中返回给浏览器。</li><li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作</li></ol><p>反射型 <code>XSS</code> 常见于通过 <code>URL</code> 传递参数的功能，如网站搜索、跳转等。</p><h3 id="_1-3-dom型" tabindex="-1">1-3.DOM型 <a class="header-anchor" href="#_1-3-dom型" aria-label="Permalink to &quot;1-3.DOM型&quot;">​</a></h3><p><strong>DOM型</strong>意为，<code>JavaScript</code> 在客户端，直接信任用户输入数据，且作为 <code>innerHTML</code> 方式渲染。</p><p>具体步骤大致如下：</p><ol><li>攻击者构造出特殊的 <code>URL</code>，其中包含恶意代码。</li><li>用户打开带有恶意代码的 <code>URL</code>。</li><li>用户浏览器接收到响应后解析执行，前端 <code>JavaScript</code> 取出 <code>URL</code> 中的恶意代码并执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ol><h3 id="_1-4-如何防范" tabindex="-1">1-4.如何防范 <a class="header-anchor" href="#_1-4-如何防范" aria-label="Permalink to &quot;1-4.如何防范&quot;">​</a></h3><p>其实，存储型和反射型攻击，与后端联系更为紧密。而 <code>DOM</code> 型攻击则是前端领域。</p><p>关于防范 <code>XSS</code> 攻击，其实是两条思路：</p><ol><li>输入过滤</li><li>输出过滤</li></ol><p>但如上文所说，<strong>输入过滤</strong>的方案实行起来有缺陷，如果真要按照这种方案来实现，整个方案设计也一定很复杂。</p><p>因此，我们<strong>在实际业务中不考虑输入过滤</strong>。</p><p>那么唯一剩下的方案只有<strong>输出过滤</strong>：</p><p>核心规则只有一条，即<strong>不要将不可信的内容，利用 <code>innerHTML</code> 方式渲染到页面上</strong>。</p><p>无论你在业务开发中，使用原生 <code>JavaScript</code> 或者 <code>HTML</code>模板，又或是 <code>vue/react</code> 框架，都需要遵守上述规则。</p><h2 id="_2-csrf" tabindex="-1">2.CSRF <a class="header-anchor" href="#_2-csrf" aria-label="Permalink to &quot;2.CSRF&quot;">​</a></h2><p><a href="https://tech.meituan.com/2018/10/11/fe-security-csrf.html" target="_blank" rel="noreferrer">前端安全系列（二）：如何防止CSRF攻击？</a></p><h3 id="_2-1-csrf原理及特点" tabindex="-1">2-1.CSRF原理及特点 <a class="header-anchor" href="#_2-1-csrf原理及特点" aria-label="Permalink to &quot;2-1.CSRF原理及特点&quot;">​</a></h3><p><code>CSRF</code> 的原理就是<strong>利用 <code>Cookie</code> 的自动传输机制</strong>。整体特点如下：</p><ol><li><code>CSRF</code>（通常）发生在第三方域名。</li><li><code>CSRF</code> 攻击者不能获取到 <code>Cookie</code> 等信息，只是利用 <code>Cookie</code> 的自动传输。</li></ol><p>针对以上两点，有以下解决方式：</p><ol><li>阻止不明外域的访问</li></ol><ul><li>同源检测</li><li><code>Samesite Cookie</code></li></ul><ol start="2"><li>提交时要求附加本域才能获取的信息</li></ol><ul><li><code>CSRF Token</code></li><li>双重 <code>Cookie</code> 验证</li></ul><ol start="3"><li>目前业务中常用的 <code>JWT</code>。</li></ol><p>以上后四种方式的讲解可以参考<a href="./cookie.html">Cookie</a>章节。</p><h2 id="_3-ddos" tabindex="-1">3.DDoS <a class="header-anchor" href="#_3-ddos" aria-label="Permalink to &quot;3.DDoS&quot;">​</a></h2><p><a href="https://www.cloudflare.com/zh-cn/learning/ddos/what-is-a-ddos-attack/" target="_blank" rel="noreferrer">什么是 DDoS 攻击——Cloudflare</a></p><p><a href="https://blog.cloudflare.com/an-introduction-to-javascript-based-ddos/" target="_blank" rel="noreferrer">基于 JavaScript 的 DDoS</a></p><p><a href="https://github.com/zhazhanitian/weekly/blob/main/learning/%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8%E7%AC%AC%E4%B8%89%E6%9C%9F.md" target="_blank" rel="noreferrer">前端安全之 DDoS</a></p><p><code>DDoS</code> 攻击包括很多方面。常见的 <code>DDoS</code> 攻击包括以下几类：</p><ol><li><strong>网络层攻击</strong></li></ol><p>比较典型的攻击类型是 <code>UDP</code> 反射攻击，例如 <code>NTP Flood</code> 攻击。这类攻击主要利用大流量拥塞被攻击者的网络带宽，导致被攻击者的业务无法正常响应客户访问。</p><ol start="2"><li><strong>传输层攻击</strong></li></ol><p>比较典型的攻击类型包括 <code>SYN Flood</code> 攻击、连接数攻击等。这类攻击通过占用服务器的连接池资源从而达到拒绝服务的目的。</p><ol start="3"><li><strong>会话层攻击</strong></li></ol><p>比较典型的攻击类型是 <code>SSL</code> 连接攻击。这类攻击占用服务器的 <code>SSL</code> 会话资源从而达到拒绝服务的目的。</p><ol start="4"><li><strong>应用层攻击</strong></li></ol><p>比较典型的攻击类型包括 <code>DNS flood</code> 攻击、<code>HTTP flood</code> 攻击（即 <code>CC</code> 攻击）、游戏假人攻击等。这类攻击占用服务器的应用处理资源，消耗服务器计算资源，从而达到拒绝服务的目的。</p><p>本节详细分析记录下和前端联系较为紧密的<strong>应用层攻击</strong>。</p><h3 id="_3-1-javascript攻击" tabindex="-1">3-1.JavaScript攻击 <a class="header-anchor" href="#_3-1-javascript攻击" aria-label="Permalink to &quot;3-1.JavaScript攻击&quot;">​</a></h3><p>假设我们在 <code>hacker.com</code> 运行如下脚本：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> imgflood</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TARGET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;victim.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> URI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/index.php?&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rand </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pic.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TARGET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rand</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;=val&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(imgflood, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>那么上述脚本就会对 <code>victim.com</code> 发起大量的 <code>HTTP</code> 请求，进而造成 <code>victim.com</code> 的响应堵塞。</p><p>这种方式的优点在于实现起来很简便。但缺点是在业务实际中 <code>hacker.com</code> 类似的攻击网站的<strong>访问量很小</strong>（几乎没有什么门户网站会把这种脚本放到自己的代码中，相当于让品牌自取灭亡），并不能造成很大的并发量。</p><p>因此，事实上使用这种方式以达到大规模 <code>DDoS</code> 攻击的效果，运行成本会很高。</p><h3 id="_3-2-服务器劫持" tabindex="-1">3-2.服务器劫持 <a class="header-anchor" href="#_3-2-服务器劫持" aria-label="Permalink to &quot;3-2.服务器劫持&quot;">​</a></h3><p>在业务开发中，我们通常会依赖 <code>CDN</code> 资源。</p><p>但假设有黑客篡改了该 <code>CDN</code> 上的对应资源，添加了 <code>DDoS</code> 代码，那所有的依赖网站，都将注入攻击脚本。</p><p>这种形式的攻击通常称作，<strong>服务器劫持</strong>。</p><p>为了防护该攻击，浏览器提供了<a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity" target="_blank" rel="noreferrer">子资源完整性</a>校验。</p><p>因此，当我们使用 <code>JQuery</code> 时，可以这样引入：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://code.jquery.com/jquery-1.10.2.min.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  integrity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sha256-C6CB9UYIS9UJeqinPHWTHVqh/E1uhG5Twh+Y5qFQmYg=&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  crossorigin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;anonymous&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_3-3-中间人攻击" tabindex="-1">3-3.中间人攻击 <a class="header-anchor" href="#_3-3-中间人攻击" aria-label="Permalink to &quot;3-3.中间人攻击&quot;">​</a></h3><p>中间人攻击，全称为 <code>Man-in-the-middle Attack</code>。</p><p>网络在通信过程中，是依赖于各个网络节点的。</p><p>譬如当你在家里访问网站，网络首先是传输到单元楼的节点，然后单元楼再中转到小区，小区再中转到街道，街道中转到 <code>4G</code> 提供商，然后根据你访问的网站地址，继续中转，直到服务提供商。（该论述是模拟，实际情况可能有出入）</p><p>那么在信息返回时，在以上的任一节点进行拦截，注入 <code>DDos</code> 脚本，那么此时该网站的所有访问者都将变为 <code>DDoS</code> 参与者。</p><p>该攻击的防护方式，就是要使用 <code>HTTPS</code>，浏览器和 <code>Web</code> 服务器之间的所有通信都经过加密和身份验证，防止中间方对其进行修改。</p><p><a href="https://segmentfault.com/a/1190000041047662" target="_blank" rel="noreferrer">中间人攻击原理与实践</a></p><h2 id="_4-页面劫持" tabindex="-1">4.页面劫持 <a class="header-anchor" href="#_4-页面劫持" aria-label="Permalink to &quot;4.页面劫持&quot;">​</a></h2><h3 id="_4-1-dns劫持" tabindex="-1">4-1.DNS劫持 <a class="header-anchor" href="#_4-1-dns劫持" aria-label="Permalink to &quot;4-1.DNS劫持&quot;">​</a></h3><p><code>DNS</code> 劫持通常是指攻击者劫持了 <code>DNS</code> 服务器，通过某些手段取得某域名的解析记录控制权，进而修改此域名的解析结果，导致用户对该域名地址的访问由原 <code>IP</code> 地址转入到修改后的指定 <code>IP</code> 地址的现象。</p><p>其结果就是让正确的网址不能解析或被解析指向另一网站 <code>IP</code>，实现获取用户资料或者破坏原有网站正常服务的目的。</p><p><code>DNS</code> 劫持一般通过篡改 <code>DNS</code> 服务器上的域名解析记录，来返回给用户一个错误的 <code>DNS</code> 查询结果实现。</p><p>该劫持的防护方式，一般都是，联系 <code>DNS</code> 服务提供商处理。</p><h3 id="_4-2-http劫持" tabindex="-1">4-2.HTTP劫持 <a class="header-anchor" href="#_4-2-http劫持" aria-label="Permalink to &quot;4-2.HTTP劫持&quot;">​</a></h3><p><code>HTTP</code> 劫持是指，在用户浏览器与访问的目的服务器之间所建立的网络数据传输通道中从网关或防火墙层上监视特定数据信息，当满足一定的条件时，就会在正常的数据包中插入或修改成为攻击者设计的网络数据包（比如 <code>js</code>文件）。</p><p>目的是让用户浏览器解释“错误”的数据，或者以弹出新窗口的形式在使用者浏览器界面上展示宣传性广告或者直接显示某块其他的内容。</p><p>譬如在某些场合（比如星巴克。访问任何链接，都要事先经过登录）的网络打开百度时：右下角出现广告。</p><p><img src="https://cloud.tencent.com/developer/article/1500773" alt=""></p><p>该劫持的防护方式是：</p><ol><li>尽量使用可信的公共网络。</li><li>使用 <code>HTPPS</code> 协议的网络。</li></ol><h3 id="_4-3-点击劫持-iframe劫持" tabindex="-1">4-3.点击劫持/iframe劫持 <a class="header-anchor" href="#_4-3-点击劫持-iframe劫持" aria-label="Permalink to &quot;4-3.点击劫持/iframe劫持&quot;">​</a></h3><p>点击劫持是一种视觉欺骗的攻击手段。</p><p>攻击者将需要攻击的网站通过 <code>iframe</code> 嵌套的方式嵌入自己的网页中，并将 <code>iframe</code> 设置为透明，在页面中透出一个按钮诱导用户点击。</p><p>从而使得当用户点击时，触发恶意脚本。</p><p>该劫持的防护方式是，<strong>利用 <code>x-frame-options</code> 响应头设置网站的 <code>iframe</code> 嵌套规则</strong>。</p><h2 id="_5-csp" tabindex="-1">5.CSP <a class="header-anchor" href="#_5-csp" aria-label="Permalink to &quot;5.CSP&quot;">​</a></h2><p><a href="https://www.ruanyifeng.com/blog/2016/09/csp.html" target="_blank" rel="noreferrer">Content Security Policy——阮一峰</a></p><p><code>CSP</code> 全称为 <code>Content Security Policy</code>，即<strong>内容安全策略</strong>。</p><p>该策略，能够设置资源的加载方式。</p><p>通过禁止加载<strong>内联脚本</strong>或<strong>外源脚本</strong>，能够在一定程度上有效防止 <code>XSS</code> 攻击。</p>`,99)]))}const g=s(t,[["render",l]]);export{k as __pageData,g as default};