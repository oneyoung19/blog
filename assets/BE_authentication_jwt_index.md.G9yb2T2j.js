import{_ as o,o as s,c as i,aP as a}from"./chunks/framework.D1yHhm2y.js";const k=JSON.parse('{"title":"JWT","description":"","frontmatter":{"title":"JWT"},"headers":[],"relativePath":"BE/authentication/jwt/index.md","filePath":"BE/authentication/jwt/index.md","lastUpdated":1735912341000}'),d={name:"BE/authentication/jwt/index.md"};function c(t,e,l,n,p,r){return s(),i("div",null,e[0]||(e[0]=[a(`<p><code>JWT</code> 的全称是 <code>JSON Web Token</code>。</p><p><a href="https://jwt.io/" target="_blank" rel="noreferrer">在线生成JWT</a></p><p><a href="https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html" target="_blank" rel="noreferrer">JSON WEB TOKEN——阮一峰</a></p><p><a href="https://www.zhihu.com/question/300576967/answer/659406256" target="_blank" rel="noreferrer">虽然JWT规范是无状态，但实际业务中依然要存状态</a></p><h2 id="_1-session" tabindex="-1">1.Session <a class="header-anchor" href="#_1-session" aria-label="Permalink to &quot;1.Session&quot;">​</a></h2><p><code>Session</code> 的交互模式是，在服务端存储用户信息，并根据用户生成唯一对应的 <code>sessionID</code> ，将 <code>sessionID</code> 设置到响应头的 <code>set-cookie</code>，后续通信则通过客户端传递 <code>cookie</code> 进行。</p><p>这种模式的缺点有：</p><ol><li><p>用户信息存储在服务端，消耗服务器资源和内存；</p></li><li><p>由于用户信息存储在数据库，因此不利于分布式部署的拓展。</p></li><li><p>利用 <code>cookie</code> 机制，可能会产生 <code>CSRF</code> 攻击。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前的现实业务中，有可能是将 <code>Session</code> 与 <code>Token</code> 结合的机制。而不是 <code>Session</code> 与 <code>Cookie</code>。</p><p>也就是将 <code>sessionID</code> 作为 <code>Token</code> 返回给客户端，然后在通信的时候，将 <code>Token</code> 设置到请求头中。</p></div><h2 id="_2-jwt" tabindex="-1">2.JWT <a class="header-anchor" href="#_2-jwt" aria-label="Permalink to &quot;2.JWT&quot;">​</a></h2><p>为了解决上述 <code>Session</code> 的第 <code>1</code> 和第 <code>2</code> 缺点，引入了 <code>JWT</code> 规范。</p><p>该规范的主要设计目的，就是<strong>将用户信息存储到客户端</strong>。</p><h3 id="_2-1-数据结构" tabindex="-1">2-1.数据结构 <a class="header-anchor" href="#_2-1-数据结构" aria-label="Permalink to &quot;2-1.数据结构&quot;">​</a></h3><p><strong><code>JWT</code> 的数据结构设计为 <code>Header.Payload.Signature</code></strong>。</p><ol><li><code>Header</code></li></ol><p>表示信息头部。</p><p>它通常是一个 <code>JSON</code> 对象，描述 <code>JWT</code> 的元数据：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;alg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HS256&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;typ&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JWT&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其中：</p><ul><li><code>alg</code> 表示签名的算法（<code>algorithm</code>），默认是 <code>HMAC SHA256</code>（写成 <code>HS256</code>）；</li><li><code>typ</code>属性表示这个令牌（<code>token</code>）的类型（<code>type</code>），<code>JWT</code> 令牌统一写为 <code>JWT</code>。</li></ul><p><strong>定义 <code>JSON</code> 对象后，进行 <code>base64URL</code> 转码得到 <code>Header</code> 字符串</strong>。</p><ol start="2"><li><code>Payload</code></li></ol><p>表示信息负载。</p><p><code>Payload</code> 部分也是一个 <code>JSON</code> 对象，用来存放实际需要传递的数据。<code>JWT</code> 规定了 <code>7</code> 个官方字段，供选用：</p><ul><li><code>iss (issuer)</code>：签发人</li><li><code>exp (expiration time)</code>：过期时间</li><li><code>sub (subject)</code>：主题</li><li><code>aud (audience)</code>：受众</li><li><code>nbf (Not Before)</code>：生效时间</li><li><code>iat (Issued At)</code>：签发时间</li><li><code>jti (JWT ID)</code>：编号</li></ul><p>当然，除此以外，也可以在 <code>Payload</code> 中<strong>添加自定义字段</strong>。</p><p><strong>定义 <code>JSON</code> 对象后，进行 <code>base64URL</code> 转码得到 <code>Payload</code> 字符串</strong>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>要注意的是，由于不存在加密，因此 <code>Payload</code> 里不要携带用户的敏感信息。</p></div><ol start="3"><li><code>Signature</code></li></ol><p>表示信息签名。</p><p>该签名算法的原理是：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">HMACSHA256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  base64UrlEncode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(header) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  base64UrlEncode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(payload),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  secret)</span></span></code></pre></div><p>其中，<code>secret</code> 表示密钥。<strong>上述算法执行之后，得到 <code>Signature</code> 字符串</strong>。</p><h3 id="_2-2-优缺点" tabindex="-1">2-2.优缺点 <a class="header-anchor" href="#_2-2-优缺点" aria-label="Permalink to &quot;2-2.优缺点&quot;">​</a></h3><p><strong>优点</strong>：</p><ol><li>有效使用 <code>JWT</code>，可以降低服务器查询数据库的次数。</li><li>某种程度上有利于分布式系统拓展。</li></ol><p><strong>缺点</strong>：</p><ol><li>有可能泄露。（一是 <code>Token</code> 没有加密的话，任何人都可以转码获取到具体信息。二是在实际应用中，<code>Token</code> 有可能是明文携带在 <code>URL</code> 中，相当于直接暴露——相对 <code>Cookie</code> 而言）。</li><li>在失效时间内，无法二次控制。譬如，实际业务中，要实现不同设备登录同一个账号，要互踢的话，纯 <code>Token</code> 的设计无法实现。</li></ol><p>即便 <code>Token</code> 的特点是<strong>无状态</strong>，但实际业务中，可能依然要结合 <code>redis</code> 等实现需求。</p><p>因此 <code>Token</code> 只是一种规范。单纯使用 <code>Token</code> 其实无法彻底满足业务需要。</p>`,40)]))}const g=o(d,[["render",c]]);export{k as __pageData,g as default};