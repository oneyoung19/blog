import{_ as i,o as a,c as n,aP as e}from"./chunks/framework.D1yHhm2y.js";const F=JSON.parse('{"title":"安装","description":"","frontmatter":{"title":"安装"},"headers":[],"relativePath":"deploy/nginx/1.install.md","filePath":"deploy/nginx/1.install.md","lastUpdated":1735912341000}'),l={name:"deploy/nginx/1.install.md"};function t(p,s,h,d,k,c){return a(),n("div",null,s[0]||(s[0]=[e(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>以<code>centos</code>为例。利用<code>yum</code>安装<code>nginx</code>。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看是否安装了nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开机自启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#启动nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#重启nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#重新加载nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在使用<code>sudo yum install nginx</code>安装时，如果报错<code>没有可用软件包nginx</code>的话，执行下<code>sudo yum install epel-release</code>，然后再执行<code>sudo yum install nginx</code>。这是由于<code>centos</code>官方库中可能并没有<code>nginx</code>，需要在<code>EPEL</code>库中获取。</p></div><p>利用这种方式安装。默认的配置文件目录会是<code>/etc/nginx/</code></p><p><code>nginx</code>会默认配置<code>80</code>端口。安装完毕后，在浏览器中输入你的服务器<code>IP</code>地址，如果出现的页面有<code>welcome to nginx</code>或者<code>welcome to centos</code>等成功标志，证明安装并启动成功。</p><p>如果<code>80</code>端口的页面不能正常打开的话，可能是由于服务器有防火墙设置。像国内的阿里云与腾讯云，其安全组也可能会默认屏蔽<code>80</code>与<code>443</code>端口。所以在服务器上执行下列代码，打开<code>80</code>和<code>443</code>端口。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-service=http</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add-service=https</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reload</span></span></code></pre></div>`,8)]))}const r=i(l,[["render",t]]);export{F as __pageData,r as default};