import{_ as i,o as a,c as n,aP as p}from"./chunks/framework.D1yHhm2y.js";const g=JSON.parse('{"title":"数据安全","description":"","frontmatter":{"title":"数据安全"},"headers":[],"relativePath":"cs/https/encryption.md","filePath":"cs/https/encryption.md","lastUpdated":1735912341000}'),l={name:"cs/https/encryption.md"};function h(t,s,k,e,r,E){return a(),n("div",null,s[0]||(s[0]=[p(`<p>关于数据安全，笔者认为有三个方向的概念。分别是：</p><ol><li>数据脱敏</li><li>数据加密</li><li>数据签名</li></ol><p><strong>数据脱敏与加密都是为了防破解，数据签名是为了防篡改</strong>。</p><p>虽然数据脱敏与加密的实现目的是类似的，但在实际操作中是两个不同的概念。</p><p>数据脱敏具有以下特点：</p><ol><li><strong>数据脱敏是不可逆的</strong>，一旦数据被脱敏，通常无法还原为原始数据。</li><li>数据脱敏方法包括替换、掩盖、截断、模糊等。</li></ol><p>而相对应的，数据加密的特点是：</p><ol><li><strong>数据加密是可逆的</strong>，只要具有正确的<strong>密钥</strong>，就可以将密文还原为原始明文数据。</li><li>数据加密使用算法和密钥来对数据进行数学变换，将其转化为密文。只有持有正确密钥的人可以解密数据。</li></ol><h2 id="_1-数据脱敏" tabindex="-1">1.数据脱敏 <a class="header-anchor" href="#_1-数据脱敏" aria-label="Permalink to &quot;1.数据脱敏&quot;">​</a></h2><p>在现实业务中，<strong>实现数据脱敏的方式，大多数是利用 <a href="/blog/frame/crypto-js/base/2.Hashing.html"><code>Hashing</code> 哈希算法</a></strong>。</p><p>譬如，用户在 <code>web</code> 页面输入的 <code>password</code> 密码，通常是要经过哈希化，才存储到数据库中。</p><p>目前，比较常用的哈希算法是 <code>MD5</code> 以及 <code>SHA256</code>。</p><h3 id="_1-1-md5" tabindex="-1">1-1.MD5 <a class="header-anchor" href="#_1-1-md5" aria-label="Permalink to &quot;1-1.MD5&quot;">​</a></h3><p><code>MD5</code>（<code>Message Digest Algorithm 5</code> 即<strong>信息摘要算法</strong>）是一种广泛用于计算数据摘要（或称哈希值）的密码学散列函数。</p><p>它是由计算机科学家 <code>Ronald Rivest</code> 于 <code>1991</code> 年设计的，用于产生 <code>128</code> 位（<code>16</code>字节）的固定长度哈希值。</p><p><code>MD5</code> 算法的主要特点包括：</p><ol><li><p><strong>固定长度</strong>哈希值：无论输入数据的大小如何，<code>MD5</code> 始终生成固定长度的 <code>128</code> 位哈希值。</p></li><li><p><strong>快速计算</strong>：<code>MD5</code> 的计算速度相对较快，适用于大多数常见用途，如校验文件完整性。</p></li><li><p><strong>不可逆</strong>：<code>MD5</code>是一种单向函数，即无法从哈希值还原出原始输入数据。这意味着无法通过哈希值逆向推导出原始消息内容。</p></li></ol><p>我们以<a href="https://github.com/brix/crypto-js" target="_blank" rel="noreferrer">crypto-js</a>中的 <code>MD5</code> 算法为例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CryptoJS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crypto-js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello World&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   words: [ -1324708431, 1692431681, 95922587, -416399387 ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   sigBytes: 16</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CryptoJS.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MD5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// b10a8db164e0754105b7a99be72e3fe5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CryptoJS.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MD5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><p>无论执行多少次，<code>Hello World</code> 经过 <code>MD5</code> 算法的脱敏，其结果始终是 <code>b10a8db164e0754105b7a99be72e3fe5</code>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>不建议在安全性要求较高的应用程序中使用 <code>MD5</code> 来保护数据的完整性和隐私。因为 <code>MD5</code> 已经被证明存在一些严重的安全问题：</p><ol><li><p><strong>碰撞攻击</strong>：<code>MD5</code> 算法已经受到碰撞攻击的影响，这意味着攻击者可以找到两个不同的输入，产生相同的 <code>MD5</code> 哈希值。这严重破坏了 <code>MD5</code> 的完整性和安全性。</p></li><li><p><strong>预映射攻击</strong>：<code>MD5</code> 的预映射攻击使其容易受到暴力破解和彩虹表攻击的影响，因此不再被视为足够安全的哈希算法。</p></li></ol><p>应该使用更强大的哈希算法，如 <code>SHA256</code> 或 <code>SHA3</code>，并采用适当的<strong>加盐</strong>和<strong>迭代</strong>等安全措施。</p></div><h3 id="_1-2-sha256" tabindex="-1">1-2.SHA256 <a class="header-anchor" href="#_1-2-sha256" aria-label="Permalink to &quot;1-2.SHA256&quot;">​</a></h3><p><strong><code>SHA256</code> 相比 <code>MD5</code> 更加安全</strong>。</p><p><code>SHA256</code> 属于 <code>SHA2</code> 版本中的一员，除此以外，还有 <code>SHA224</code>、<code>SHA384</code> 以及 <code>SHA512</code>。</p><p>该类之间的区别只是计算结果的字段长度不同。使用方式如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CryptoJS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crypto-js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello World&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   words: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     -1517181228,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     200548416,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     1241585459,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     -810045040,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     -701733441,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     198026027,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     1471313881,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     -1382083474</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   ],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   sigBytes: 32</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CryptoJS.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHA256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CryptoJS.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SHA256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre></div><h2 id="_2-数据加密" tabindex="-1">2.数据加密 <a class="header-anchor" href="#_2-数据加密" aria-label="Permalink to &quot;2.数据加密&quot;">​</a></h2><p>数据加密，需要使用加密算法。</p><p>而<strong>加密算法，最显著的特点就是，需要设置密钥</strong>。</p><h3 id="_2-1-对称加密" tabindex="-1">2-1.对称加密 <a class="header-anchor" href="#_2-1-对称加密" aria-label="Permalink to &quot;2-1.对称加密&quot;">​</a></h3><p>对称加密，目前最常用且可靠的算法是 <code>AES</code>，即 <code>Advanced Encryption Standard</code>。</p><p><a href="/blog/frame/crypto-js/base/5.Ciphers.html"><code>crypto-js</code> 中的对称加密</a></p><h3 id="_2-2-非对称加密" tabindex="-1">2-2.非对称加密 <a class="header-anchor" href="#_2-2-非对称加密" aria-label="Permalink to &quot;2-2.非对称加密&quot;">​</a></h3><p>非对称加密使用一对密钥，即<strong>公钥</strong>和<strong>私钥</strong>，来进行加/解密操作。</p><ul><li><p>公钥（<code>Public Key</code>）：<strong>公钥是公开的，任何人都可以获得和使用它来加密数据</strong>。公钥通常用于加密要发送给拥有私钥的接收者的数据。</p></li><li><p>私钥（<code>Private Key</code>）：<strong>私钥是保密的，只有拥有私钥的人或实体才能使用它来解密使用公钥加密的数据</strong>。私钥必须始终保持机密，只有授权的人可以访问它。</p></li></ul><p>目前非对称加密中，最广泛使用且比较安全的是 <code>RSA</code> 算法。</p><p><code>RSA</code> 密钥的原理是：<em><strong>根据数论，寻求两个大素数比较简单，而将它们的乘积进行因式分解却极其困难，因此可以将乘积公开作为加密密钥</strong></em>。</p><ol><li><p>如果是命令行，可以通过<a href="https://github.com/openssl/openssl" target="_blank" rel="noreferrer">openssl</a>来生成公钥和私钥。</p></li><li><p>在实际业务中，服务端可以利用 <code>java</code> 生成密钥对：</p></li></ol><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java.security.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GenerateKeyPairExample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 使用RSA算法生成密钥对</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      KeyPairGenerator keyPairGenerator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KeyPairGenerator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;RSA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      keyPairGenerator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置密钥长度（一般为2048位）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 生成密钥对</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      KeyPair keyPair </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keyPairGenerator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKeyPair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 获取公钥和私钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      PublicKey publicKey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keyPair.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPublic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      PrivateKey privateKey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keyPair.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPrivate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 打印公钥和私钥（注意：实际应用中不要直接打印私钥）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;公钥：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> publicKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;私钥：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> privateKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (NoSuchAlgorithmException </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printStackTrace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li>在浏览器中通过 <code>JS</code> 生成密钥对，可以利用 <code>window.crypto</code> (<strong>实际业务中不推荐</strong>)：</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 SubtleCrypto API 生成非对称密钥对</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> generateKeyPair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> keyPair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.crypto.subtle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RSA-OAEP&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        modulusLength: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 密钥长度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        publicExponent: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Uint8Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]), </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 公钥指数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        hash: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SHA-256&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 哈希算法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否可以导出私钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;encrypt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;decrypt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用途（这里是加密和解密）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 获取公钥和私钥</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> publicKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.crypto.subtle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exportKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;spki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, keyPair.publicKey);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> privateKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.crypto.subtle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exportKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkcs8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, keyPair.privateKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 将公钥和私钥转换成可用的字符串或数据格式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> publicKeyStr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> arrayBufferToBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(publicKey);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> privateKeyStr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> arrayBufferToBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(privateKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;公钥:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, publicKeyStr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;私钥:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, privateKeyStr);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;生成密钥对时出错:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 辅助函数：将ArrayBuffer转换为Base64字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> arrayBufferToBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> byteArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Uint8Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buffer);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> byte</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> byteArray) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    binary </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCharCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(byte);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> btoa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(binary);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用生成密钥对函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKeyPair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><ol start="4"><li>如果前端想要在具体的业务场景中利用公钥和私钥进行 <code>RSA</code> 加解密算法，那么可以使用<a href="https://github.com/travist/jsencrypt" target="_blank" rel="noreferrer">jsencrypt</a>。</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://github.com/brix/crypto-js" target="_blank" rel="noreferrer">crypto-js</a> 支持 <code>AES</code> 对称加密算法，但并不支持 <code>RSA</code> 非对称加密算法。</p></div><h2 id="_3-数据签名" tabindex="-1">3.数据签名 <a class="header-anchor" href="#_3-数据签名" aria-label="Permalink to &quot;3.数据签名&quot;">​</a></h2><p>数据签名是一种用于<strong>确保数据完整性</strong>和<strong>身份验证</strong>的加密技术。</p><p>在 <code>Https</code> 证书中含有<a href="https://zh.wikipedia.org/zh-hans/%E6%95%B8%E4%BD%8D%E7%B0%BD%E7%AB%A0" target="_blank" rel="noreferrer"><strong>数字签名</strong></a>，它的流程逻辑如下：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/Https_Signature.png" alt=""></p><p>如果，要在<strong>实际业务</strong>中将通信数据作签名处理，可以考虑以下流程（以转账为例）：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/%E6%95%B0%E6%8D%AE%E7%AD%BE%E5%90%8D.jpg" alt=""></p>`,49)]))}const o=i(l,[["render",h]]);export{g as __pageData,o as default};