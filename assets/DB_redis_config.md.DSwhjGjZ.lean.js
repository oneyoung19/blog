import{_ as e,o as t,c as o,aP as c}from"./chunks/framework.D1yHhm2y.js";const g=JSON.parse('{"title":"配置","description":"","frontmatter":{"title":"配置"},"headers":[],"relativePath":"DB/redis/config.md","filePath":"DB/redis/config.md","lastUpdated":1735912341000}'),s={name:"DB/redis/config.md"};function a(r,d,i,n,p,l){return t(),o("div",null,d[0]||(d[0]=[c('<p>在前文中，我们提到了 <code>redis.conf</code> 这个配置文件。</p><p>这个文件中包含了 <code>redis</code> 的所有配置项，<strong>我们可以根据自己的需求通过修改 <code>redis.conf</code> 来修改这些配置项</strong>。</p><p>另一种方式是，<strong>在连接上 <code>redis-cli</code> 之后</strong>，通过 <code>CONFIG</code> 命令查看或设置配置项。</p><h2 id="查看配置" tabindex="-1">查看配置 <a class="header-anchor" href="#查看配置" aria-label="Permalink to &quot;查看配置&quot;">​</a></h2><p>譬如使用 <code>*</code> 号来查看所有配置项：</p><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407174511.png" alt=""></p><p>如果想要查看某个配置项，可以使用 <code>CONFIG GET &lt;config&gt;</code> 命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CONFIG</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loglevel</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407175553.png" alt=""></p><h2 id="设置配置" tabindex="-1">设置配置 <a class="header-anchor" href="#设置配置" aria-label="Permalink to &quot;设置配置&quot;">​</a></h2><p>如果想要设置某个配置项，可以使用 <code>CONFIG SET &lt;config&gt; &lt;value&gt;</code> 命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CONFIG</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> loglevel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;notice&quot;</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/20230407175754.png" alt=""></p><h2 id="常用配置项" tabindex="-1">常用配置项 <a class="header-anchor" href="#常用配置项" aria-label="Permalink to &quot;常用配置项&quot;">​</a></h2><p>下面是一些常用的配置项：</p><table tabindex="0"><thead><tr><th>配置参数</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>daemonize</code></td><td><code>no</code></td><td><code>redis-serve</code> 启动的服务默认不是守护进程的方式。设置 <code>yes</code> 以启动守护进程。</td></tr><tr><td><code>pidfile</code></td><td><code>/var/run/redis.pid</code></td><td><code>Redis</code> 默认会把 <code>pid</code> 写入 <code>/var/run/redis.pid</code> 文件，可以通过 <code>pidfile</code> 指定。</td></tr><tr><td><code>port</code></td><td><code>6379</code></td><td>监听端口，默认端口为 <code>6379</code>。</td></tr><tr><td><code>bind</code></td><td><code>127.0.0.1</code></td><td>绑定的主机地址。</td></tr><tr><td><code>timeout</code></td><td><code>300</code></td><td>当 客户端闲置多长时间后关闭连接，如果指定为 <code>0</code>，表示关闭该功能</td></tr><tr><td><code>loglevel</code></td><td><code>verbose</code></td><td>指定日志记录级别，总共支持四个级别：<code>debug</code>、<code>verbose</code>、<code>notice</code>、<code>warning</code>，默认为 <code>verbose</code>。</td></tr><tr><td><code>logfile</code></td><td><code>stdout</code></td><td>日志记录方式，默认为标准输出。</td></tr><tr><td><code>database</code></td><td><code>16</code></td><td>设置数据库的数量，默认数据库为 <code>0</code>，可以使用 <code>SELECT &lt;dbid&gt;</code> 命令在连接上指定数据库<code>id</code>。</td></tr><tr><td><code>save</code></td><td><code>3600 1 300 100 60 10000</code></td><td><code>save &lt;seconds&gt; &lt;changes&gt;</code>指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合。</td></tr><tr><td><code>rdbcompression</code></td><td><code>yes</code></td><td>指定存储至本地数据库时是否压缩数据，默认为 <code>yes</code>，<code>Redis</code> 采用 <code>LZF</code> 压缩，如果为了节省 <code>CPU</code> 时间，可以关闭该选项，但会导致数据库文件变的巨大。</td></tr><tr><td><code>dbfilename</code></td><td><code>dump.rdb</code></td><td>指定本地数据库文件名，默认值为 <code>dump.rdb</code></td></tr><tr><td><code>dir</code></td><td><code>./</code></td><td>指定本地数据库存放目录</td></tr><tr><td><code>slaveof</code></td><td><code>&#39;&#39;</code></td><td><code>slaveof &lt;masterip&gt; &lt;masterport&gt;</code> 设置当本机为 <code>slav</code> 服务时，设置 <code>master</code> 服务的 <code>IP</code> 地址及端口，在 <code>Redis</code> 启动时，它会自动从 <code>master</code> 进行数据同步</td></tr><tr><td><code>masterauth</code></td><td><code>&#39;&#39;</code></td><td><code>masterauth &lt;master-password&gt;</code> 当 <code>master</code> 服务设置了密码保护时，<code>slav</code> 服务连接 <code>master</code> 的密码</td></tr><tr><td><code>requirepass</code></td><td><code>&#39;&#39;</code></td><td>设置 <code>Redis</code> 连接密码，如果配置了连接密码，客户端在连接 <code>Redis</code> 时需要通过<code>AUTH &lt;password&gt;</code> 命令提供密码，默认关闭。</td></tr><tr><td><code>maxclients</code></td><td><code>128</code></td><td>设置同一时间最大客户端连接数，默认无限制，<code>Redis</code> 可以同时打开的客户端连接数为 <code>Redis</code> 进程可以打开的最大文件描述符数，如果设置 <code>maxclients 0</code>，表示不作限制。当客户端连接数到达限制时，<code>Redis</code> 会关闭新的连接并向客户端返回 <code>max number of clients reached</code> 错误信息。</td></tr><tr><td><code>maxmemory</code></td><td><code>0</code></td><td>指定 <code>Redis</code> 最大内存限制，<code>Redis</code> 在启动时会把数据加载到内存中，达到最大内存后，<code>Redis</code> 会先尝试清除已到期或即将到期的 <code>Key</code>，当此方法处理 后，仍然到达最大内存设置，将无法再进行写入操作，但仍然可以进行读取操作。<code>Redis</code> 新的 <code>vm</code> 机制，会把 <code>Key</code> 存放内存，<code>Value</code> 会存放在 <code>swap</code> 区。</td></tr><tr><td><code>appendonly</code></td><td><code>no</code></td><td>指定是否在每次更新操作后进行日志记录，<code>Redis</code> 在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一段时间内的数据丢失。因为 <code>redis</code> 本身同步数据文件是按上面 <code>save</code> 条件来同步的，所以有的数据会在一段时间内只存在于内存中。默认为 <code>no</code>。</td></tr><tr><td><code>appendfilename</code></td><td><code>appendonly.aof</code></td><td>指定更新日志文件名，默认为 <code>appendonly.aof</code>。</td></tr><tr><td><code>appendfsync</code></td><td><code>everysec</code></td><td>指定更新日志条件，共有3个可选值：<br> <code>no</code>：表示等操作系统进行数据缓存同步到磁盘（快） <br> <code>always</code>：表示每次更新操作后手动调用 <code>fsync()</code> 将数据写到磁盘（慢，安全） <br> <code>everysec</code>：表示每秒同步一次（折中，默认值）</td></tr><tr><td><code>vm-enabled</code></td><td><code>no</code></td><td>指定是否启用虚拟内存机制。</td></tr><tr><td><code>vm-swap-file</code></td><td><code>/tmp/redis.swap</code></td><td>虚拟内存文件路径。</td></tr><tr><td><code>vm-max-memory</code></td><td><code>0</code></td><td>当 <code>vm-max-memory</code> 设置为 <code>0</code> 的时候，所有 <code>value</code> 都存在于磁盘。</td></tr><tr><td><code>vm-page-size</code></td><td><code>32</code></td><td><code>Redis swap</code> 文件分成了很多的 <code>page</code>，<code>vm-page-size</code> 是要根据存储的数据大小来设定的。</td></tr><tr><td><code>vm-pages</code></td><td><code>134217728</code></td><td>设置 <code>swap</code> 文件中的 <code>page</code> 数量，由于页表（一种表示页面空闲或使用的 <code>bitmap</code>）是在放在内存中的，，在磁盘上每 <code>8</code> 个 <code>pages</code> 将消耗 <code>1byte</code> 的内存。</td></tr><tr><td><code>vm-max-threads</code></td><td><code>4</code></td><td>设置访问 <code>swap</code> 文件的线程数，最好不要超过机器的核数，如果设置为 <code>0</code>，那么所有对 <code>swap</code> 文件的操作都是串行的，可能会造成比较长时间的延迟。</td></tr><tr><td><code>glueoutputbuf</code></td><td><code>yes</code></td><td>设置在向客户端应答时，是否把较小的包合并为一个包发送。</td></tr><tr><td><code>hash-max-zipmap-entries</code></td><td><code>64</code></td><td>指定在超过一定的数量超过某一临界值时，采用一种特殊的哈希算法。</td></tr><tr><td><code>hash-max-zipmap-value</code></td><td><code>512</code></td><td>指定在超过最大的元素超过某一临界值时，采用一种特殊的哈希算法。</td></tr><tr><td><code>activerehashing</code></td><td><code>yes</code></td><td>指定是否激活重置哈希。</td></tr><tr><td><code>include</code></td><td><code>/path/to/local.conf</code></td><td>指定包含其它的配置文件，可以在同一主机上多个 <code>Redis</code> 实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件。</td></tr></tbody></table>',16)]))}const m=e(s,[["render",a]]);export{g as __pageData,m as default};