import{_ as t,o as s,c as d,aP as i}from"./chunks/framework.D1yHhm2y.js";const k=JSON.parse('{"title":"Linux命令行","description":"","frontmatter":{"title":"Linux命令行"},"headers":[],"relativePath":"deploy/linux/index.md","filePath":"deploy/linux/index.md","lastUpdated":1735912341000}'),a={name:"deploy/linux/index.md"};function l(o,e,c,n,h,p){return s(),d("div",null,e[0]||(e[0]=[i(`<h2 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h2><ul><li><code>date</code> 列出当前日期</li><li><code>cal</code> 列出当前日历</li><li><code>cd -</code> 打开先前目录</li><li><code>cd ~username/</code> 打开用户目录</li><li><code>ls</code> 查看当前目录下的文件信息</li><li><code>file</code> 查看某一文件的具体信息</li></ul><h2 id="操作文件与目录" tabindex="-1">操作文件与目录 <a class="header-anchor" href="#操作文件与目录" aria-label="Permalink to &quot;操作文件与目录&quot;">​</a></h2><ul><li><code>cp</code> 复制文件或目录</li><li><code>mv</code> 移动或重命名文件或目录</li><li><code>mkdir</code> 创建目录</li><li><code>rm</code> 移除文件或目录</li><li><code>ln</code> 创建硬链接或符号链接</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>硬链接可以看作文件复制（且共享同一地址），修改、删除等操作互不影响。</p><p>而软连接则是看作快捷方式，当删除快捷方式时不受影响，删除源文件时，快捷方式则会受影响。</p></div><h2 id="查看命令信息" tabindex="-1">查看命令信息 <a class="header-anchor" href="#查看命令信息" aria-label="Permalink to &quot;查看命令信息&quot;">​</a></h2><p>所谓命令不外乎以下 <code>4</code> 种情况：</p><ol><li><strong>可执行程序</strong>。譬如 <code>nginx</code> <code>npm</code> 等等。</li><li><strong>shell内置命令</strong>。譬如 <code>cd</code> <code>cp</code> 等等。</li><li><strong>shell函数</strong>。<code>shell</code> 函数是合并到环境变量中的小型 <code>shell</code> 脚本。</li><li><strong>alias命令</strong>。相当于自定义命令。</li></ol><ul><li><code>type</code> 查看命令类型</li><li><code>which</code> 查看<strong>可执行程序</strong>的位置</li><li><code>man</code> 显示程序的手册页（<code>man page</code>）</li><li><code>alias</code> 创建自定义命令</li></ul><h2 id="重定向" tabindex="-1">重定向 <a class="header-anchor" href="#重定向" aria-label="Permalink to &quot;重定向&quot;">​</a></h2><p>在执行 <code>linux</code> 命令行时，在键盘上输入命令，然后结果输出到屏幕上。譬如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre></div><p>在这个过程中，标准输入 <code>standard input</code> 来源是键盘，标准输出 <code>standard output</code> 目标是屏幕。</p><p>如果我们想要改变输出结果的目标，那么可以使用 <code>&gt;</code> 重定向符号。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-output.txt</span></span></code></pre></div><p><code>&gt;</code> 符号是从头写入，如果想要从尾追加的话，可以使用 <code>&gt;&gt;</code> 符号。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-output.txt</span></span></code></pre></div><p>假设在 <code>linux</code> 命令行执行过程中，出现标准错误。那么可以利用 <code>2&gt;</code> 符号将标准错误输出到指定目标：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-error.txt</span></span></code></pre></div><p>如果想要将标准输出和标准错误，统一输出到指定目标，那么可以使用 <code>&amp;&gt;</code> 符号：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ls-result.txt</span></span></code></pre></div><ul><li><code>cat</code> 意为 <code>concat</code>。它可以将文件或者普通文本内容连接读取。</li><li><code>sort</code> 将结果排序。</li><li><code>uniq</code> 将结果去重。</li><li><code>grep</code> 以给定正则匹配结果（<code>Global regular expression</code>）</li><li><code>head</code> 打印结果头部的十行。可利用 <code>-n</code> 参数额外指定行数。</li><li><code>tail</code> 打印结果尾部的十行。可利用 <code>-n</code> 参数额外指定行数。</li></ul><h2 id="键盘技巧" tabindex="-1">键盘技巧 <a class="header-anchor" href="#键盘技巧" aria-label="Permalink to &quot;键盘技巧&quot;">​</a></h2><h3 id="光标移动" tabindex="-1">光标移动 <a class="header-anchor" href="#光标移动" aria-label="Permalink to &quot;光标移动&quot;">​</a></h3><table tabindex="0"><thead><tr><th>组合键</th><th>作用</th></tr></thead><tbody><tr><td><code>Ctrl + A</code></td><td>移动光标到行首</td></tr><tr><td><code>Ctrl + E</code></td><td>移动光标到行尾</td></tr><tr><td><code>Ctrl + F</code></td><td>光标向前移动一个字符，<strong>同右箭头</strong></td></tr><tr><td><code>Ctrl + B</code></td><td>光标向后移动一个字符，<strong>同左箭头</strong></td></tr><tr><td><code>Ctrl + L</code></td><td>清屏并把光标移动到左上角。<strong>同 <code>clear</code> 命令</strong></td></tr></tbody></table><h3 id="修改文本" tabindex="-1">修改文本 <a class="header-anchor" href="#修改文本" aria-label="Permalink to &quot;修改文本&quot;">​</a></h3><table tabindex="0"><thead><tr><th>组合键</th><th>作用</th></tr></thead><tbody><tr><td><code>Ctrl + D</code></td><td>删除光标处的字符</td></tr><tr><td><code>Ctrl + T</code></td><td>光标处的字符和它前面的字符调换位置</td></tr></tbody></table><h3 id="剪切粘贴" tabindex="-1">剪切粘贴 <a class="header-anchor" href="#剪切粘贴" aria-label="Permalink to &quot;剪切粘贴&quot;">​</a></h3><ul><li>剪切 <code>killing</code></li><li>粘贴 <code>yanking</code></li></ul><table tabindex="0"><thead><tr><th>组合键</th><th>作用</th></tr></thead><tbody><tr><td><code>Ctrl + K</code></td><td>剪切从光标到行尾的文本</td></tr><tr><td><code>Ctrl + U</code></td><td>剪切从光标到行首的文本</td></tr><tr><td><code>Ctrl + Y</code></td><td>把 <code>kill-ring</code> 缓冲区中的文本粘贴到光标位置</td></tr></tbody></table><h3 id="历史命令" tabindex="-1">历史命令 <a class="header-anchor" href="#历史命令" aria-label="Permalink to &quot;历史命令&quot;">​</a></h3><p><code>bash</code> 默认会保存用户最近使用过的 <code>500</code> 个命令。</p><p>可使用 <code>history</code> 命令查看：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">history</span></span></code></pre></div><p>打印结果会携带 <code>id</code>。可以使用 <code>!id</code> 来访问指定历史命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10318*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whatis</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10318</span></span></code></pre></div><h2 id="权限" tabindex="-1">权限 <a class="header-anchor" href="#权限" aria-label="Permalink to &quot;权限&quot;">​</a></h2><p><code>linux</code> 系统将权限角色划分为<strong>当前用户</strong>、<strong>当前用户所在组</strong>以及<strong>其他用户</strong>。</p><h3 id="文件模式分类" tabindex="-1">文件模式分类 <a class="header-anchor" href="#文件模式分类" aria-label="Permalink to &quot;文件模式分类&quot;">​</a></h3><p>文件模式分为<strong>读取</strong>、<strong>修改</strong>以及<strong>执行</strong>。</p><p>查看某一文件的可用模式权限，可以使用 <code>ls -l</code> 指令，譬如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.txt</span></span></code></pre></div><p>打印结果可能如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-rw-r--r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  staff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 28</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 18:49</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.txt</span></span></code></pre></div><p>其中第一列标识的即是文件相关权限。共 <code>10</code> 位。</p><p>其中<strong>第一位表示文件类型</strong>，<strong>后九位分别表示文件 所有者、文件所属群组以及其他所有用户对该文件的读取、写入和执行权限</strong>。</p><p>文件类型一览：</p><table tabindex="0"><thead><tr><th>属性</th><th>文件类型</th></tr></thead><tbody><tr><td><code>-</code></td><td>普通文件</td></tr><tr><td><code>d</code></td><td>目录文件</td></tr><tr><td><code>l</code></td><td>符号链接。注意对于符号链接文件，剩下的文件属性始终是 <code>rwxrwxrwx</code>，它是个<strong>伪属性值</strong>。<strong>符号链接指向的文件的属性才是真正的文件属性</strong>。</td></tr><tr><td><code>c</code></td><td>字符设备文件。该文件类型表示以字节流形式处理数据的设备，如终端或调制解调器</td></tr><tr><td><code>b</code></td><td>块设备文件。该文件类型表示以数据块方式处理数据的设备，如硬盘驱动或者光盘驱动</td></tr></tbody></table><p>关于 <code>r</code>、<code>w</code> 和 <code>x</code> 模式的解释如下：</p><table tabindex="0"><thead><tr><th>属性</th><th>文件</th><th>目录</th></tr></thead><tbody><tr><td><code>r</code></td><td>允许打开和读取文件</td><td>如果设置了执行权限，那么允许列出目录下的内容</td></tr><tr><td><code>w</code></td><td>允许写入或者截短文件;如果也设置了执行 权限，那么目录中的文件允许被创建、被删除以及被重命名</td><td>但是该权限不允许重命名或者删除文件。是否能重命名和删除文件由目录权限决定</td></tr><tr><td><code>x</code></td><td>允许把文件当作程序一样来执行。用脚本语言写的程序文件必须被设置为可读，以便能 被执行</td><td>允许进入目录下，例如 <code>cd directory</code></td></tr></tbody></table><h2 id="修改文件模式" tabindex="-1">修改文件模式 <a class="header-anchor" href="#修改文件模式" aria-label="Permalink to &quot;修改文件模式&quot;">​</a></h2><p>修改文件模式可以使用 <code>chmod</code> 命令，即 <code>change mode</code>。</p><p>该命令支持两种表示法，<strong>八进制数字表示法</strong>以及<strong>符号表示法</strong>。</p><h3 id="八进制数字表示法" tabindex="-1">八进制数字表示法 <a class="header-anchor" href="#八进制数字表示法" aria-label="Permalink to &quot;八进制数字表示法&quot;">​</a></h3><p><code>rwx</code> 一共三位，单个位上各存在两种情况，譬如 <code>-/r</code> 、<code>-/w</code>、<code>-/x</code>。</p><p>根据概率论可知，组合共有 <code>2*2*2</code> 即 <code>8</code> 种。</p><p>因此，文件模式，可以利用八进制进行表示：</p><table tabindex="0"><thead><tr><th>八进制</th><th>二进制</th><th>文件模式</th></tr></thead><tbody><tr><td><code>0</code></td><td><code>000</code></td><td><code>---</code></td></tr><tr><td><code>1</code></td><td><code>001</code></td><td><code>--x</code></td></tr><tr><td><code>2</code></td><td><code>010</code></td><td><code>-w-</code></td></tr><tr><td><code>3</code></td><td><code>011</code></td><td><code>-wx</code></td></tr><tr><td><code>4</code></td><td><code>100</code></td><td><code>r--</code></td></tr><tr><td><code>5</code></td><td><code>101</code></td><td><code>r-x</code></td></tr><tr><td><code>6</code></td><td><code>110</code></td><td><code>rw-</code></td></tr><tr><td><code>7</code></td><td><code>111</code></td><td><code>rwx</code></td></tr></tbody></table><p>同时使用 <code>3</code> 位<strong>八进制数字</strong>，我们就可以设置文件所有者、组成员和其他所有用户的文件模式。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 600</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.tx</span></span></code></pre></div><h3 id="符号表示法" tabindex="-1">符号表示法 <a class="header-anchor" href="#符号表示法" aria-label="Permalink to &quot;符号表示法&quot;">​</a></h3><p>符号表示法分为三部分：</p><ol><li><strong>更改会影响谁</strong>；分为 <code>u</code> 、<code>g</code>、<code>o</code> 以及 <code>a</code>。</li><li><strong>要执行哪个操作</strong>；分为 <code>+</code>、<code>-</code>、<code>=</code>。</li><li><strong>要设置哪种权限</strong>；分为 <code>r</code>、<code>w</code>、<code>x</code>。</li></ol><table tabindex="0"><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td><code>u</code></td><td><code>user</code> 的简写，表示文件或者目录的所有者</td></tr><tr><td><code>g</code></td><td><code>group</code> 的简写，表示文件所属群组</td></tr><tr><td><code>o</code></td><td><code>others</code>的简写，表示其他所有用户</td></tr><tr><td><code>a</code></td><td><code>all</code> 的简写，是 <code>u</code>、 <code>g</code> 和 <code>o</code> 三者的组合</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果上述选项在命令中都省略的话，那么等同于 <code>all</code> 选项。</p></div><table tabindex="0"><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td><code>+</code></td><td>添加权限</td></tr><tr><td><code>-</code></td><td>删除权限</td></tr><tr><td><code>=</code></td><td>只有指定的权限可用，其他所有的权限都被删除</td></tr></tbody></table><p>譬如以下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给所有用户添加foo.txt的执行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 给当前用户添加foo.txt的执行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> u+x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo.txt</span></span></code></pre></div><h3 id="更改身份" tabindex="-1">更改身份 <a class="header-anchor" href="#更改身份" aria-label="Permalink to &quot;更改身份&quot;">​</a></h3><ul><li><code>sudo</code> 以管理员身份运行</li><li><code>chown</code> 更改文件所有者和所属群组。<code>chown [owner]:[[group]] file...</code></li></ul><h3 id="更改用户密码" tabindex="-1">更改用户密码 <a class="header-anchor" href="#更改用户密码" aria-label="Permalink to &quot;更改用户密码&quot;">​</a></h3><ul><li><code>passwd [user]</code></li></ul><p>如果拥有超级用户权限，那么可以利用 <code>passwd [user]</code> 为其他用户设置权限。</p><p>如果只是当前用户修改密码，那么可以直接使用 <code>passwd</code> 命令即可。</p><h2 id="进程" tabindex="-1">进程 <a class="header-anchor" href="#进程" aria-label="Permalink to &quot;进程&quot;">​</a></h2><ul><li><code>ps</code> 查看进程列表。</li><li><code>kill -[signal] pid</code> 可以发送不同的信号给目标进程，来实现不同的操作，如果不指定信号，默认会发送 <code>TERM</code> 信号（<code>15</code>），即终止 <code>terminal</code>。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>signal</code> 的数量很多，可以利用 <code>kill -l</code> 查看完整列表数据。</p></div><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><p>在 <code>SHELL</code> 中，环境数据大致分为以下几种：</p><ol><li><code>shell</code> 变量</li><li>环境变量</li><li><code>alias</code> 别名和 <code>shell</code> 函数</li></ol><p>环境相关的命令如下：</p><ul><li><code>set</code> 显示所有 <code>shell</code> 变量和环境变量；</li><li><code>printenv</code> 显示所有环境变量或者显示某一环境变量；</li><li><code>echo $[VAR]</code> 显示某一环境变量。</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示所有环境变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printenv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示单个环境变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> USER</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示单个环境变量</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span></code></pre></div><h3 id="定义环境变量" tabindex="-1">定义环境变量 <a class="header-anchor" href="#定义环境变量" aria-label="Permalink to &quot;定义环境变量&quot;">​</a></h3><p><code>shell</code> 会话分为两种：</p><ol><li><code>login shell</code> 会话；</li><li><code>non-login shell</code> 会话。</li></ol><p><code>login shell</code> 会话意味着<strong>只会在登录完成后执行一次</strong>。对应执行文件有 <code>~/.bash_profile</code>。</p><p><code>non-login shell</code> 会话则是<strong>每次登录或打开新 <code>shell</code> 窗口时都会执行</strong>。对应执行文件有 <code>~/.bashrc</code>。</p><p>所以一般优先把变量设置在 <code>.bashrc</code> 里面，这样我们重新打开 <code>shell</code> 会话时，变量就会生效。</p><p>如果定义在 <code>.bash_profile</code>，那么可以利用 <code>source ~/.bash_profile</code> 重启生效。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.rvm/bin&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ls -l&quot;</span></span></code></pre></div>`,93)]))}const g=t(a,[["render",l]]);export{k as __pageData,g as default};