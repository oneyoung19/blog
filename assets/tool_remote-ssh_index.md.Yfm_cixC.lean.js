import{_ as e,o as t,c as s,aP as n}from"./chunks/framework.D1yHhm2y.js";const u=JSON.parse('{"title":"Remote-SSH","description":"","frontmatter":{"title":"Remote-SSH"},"headers":[],"relativePath":"tool/remote-ssh/index.md","filePath":"tool/remote-ssh/index.md","lastUpdated":1735912341000}'),p={name:"tool/remote-ssh/index.md"};function c(i,o,a,d,r,g){return t(),s("div",null,o[0]||(o[0]=[n(`<p><code>Remote SSH</code> 比较直白的翻译，就是<strong>远程登录</strong>。</p><p>目前在 <strong><code>VScode</code> 编辑器</strong>上大放异彩🎉。</p><p>通常利用 <code>ssh</code> 登录一台 <code>linux</code> 机器的指令类似于 <code>ssh name@ip</code>，譬如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root@192.168.168.10</span></span></code></pre></div><p>成功登录之后，就可以正常使用 <code>linux</code> 相关指令在<strong>机器上手工操作</strong>。</p><p>而 <code>Remote SSH</code> 是将整个 <code>linux</code> 的文件系统，同步到本地，用户可以在 <code>vscode</code> 中像操作本地文件一样，操作远程机器的文件。</p><p>这对于开发来说，大大提升了效率，也大大便利了团队协作方式。</p><p>首先在 <code>VScode</code> 应用商店，搜索 <code>Remote-SSH</code> 应用：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301211901.png" alt=""></p><p>安装之后，启动方式有两种。</p><p>第一种是通过 <code>F1</code> 按键，调起弹窗后，输入 <code>remote-ssh</code> 就可以看见许多联想指令。</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212303.png" alt=""></p><p>第二种方式更加便利，也就是编辑器左下角会出现新的标识按钮。</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212327.png" alt=""></p><p>此处，我们以第二种方式为例，会弹出下列弹窗，并选择 <code>Connect to Host</code>：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212633.png" alt=""></p><p>此时就可以在 <code>①</code> 中输入 <code>user@host</code> 进行远程登录：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301212952.png" alt=""></p><p>也可以选择 <code>②</code> 进行定制化配置文件：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301213229.png" alt=""></p><p>推荐选择<strong>用户级配置</strong>中进行配置（<code>xxx.xxx.xxx.xxx</code> 换成实际的 <code>Host</code> 地址）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Host xxx.xxx.xxx.xxx</span></span>
<span class="line"><span>HostName xxx.xxx.xxx.xxx</span></span>
<span class="line"><span>IdentityFile ~/.ssh/id_rsa</span></span>
<span class="line"><span>User root</span></span></code></pre></div><p>上面的配置是利用 <code>~/.ssh/id_rsa</code> <strong>密钥登录</strong>的。</p><p>如果是<strong>密码登录</strong>，实际上不用配置这个文件，在上述的登录过程中，<code>Remote-SSH</code> 会提示输入密码 <code>Password</code> 进行验证。</p><p>当登录成功，选择右侧的图标，此时会显示已经连接上的远程机器。</p><p>然后我们利用 <code>vscode</code> 的快捷键，譬如在 <code>mac</code> 上 <code>command + o</code> 就可以指定要打开的目标文件了：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230301213947.png" alt=""></p><p>后续就可以比较愉快的操作了，不用再过度码 <code>linux</code> 指令了😄。</p>`,28)]))}const m=e(p,[["render",c]]);export{u as __pageData,m as default};