import{_ as e,o as c,c as d,aP as t}from"./chunks/framework.D1yHhm2y.js";const m=JSON.parse('{"title":"HTTP通信","description":"","frontmatter":{"title":"HTTP通信"},"headers":[],"relativePath":"cs/http/communication.md","filePath":"cs/http/communication.md","lastUpdated":1735912341000}'),i={name:"cs/http/communication.md"};function l(p,o,a,n,s,r){return c(),d("div",null,o[0]||(o[0]=[t('<h2 id="_1-半双工通信" tabindex="-1">1.半双工通信 <a class="header-anchor" href="#_1-半双工通信" aria-label="Permalink to &quot;1.半双工通信&quot;">​</a></h2><p><strong>双工通信</strong>（<code>Full-Duplex Communication</code>）是指在通信过程中，两个参与通信的实体能够同时进行双向数据传输，即可以同时发送和接收数据，而不必等待另一方的响应或完成。</p><p>在双工通信中，通信的两端可以同时进行发送和接收操作，就像两个人进行对话一样，每个人都可以随时说话而不必等待对方完成。</p><p>这种通信方式能够实现更高效的数据传输，因为双方无需等待彼此的确认或响应，从而节省了通信的时间。</p><p>双工通信与其对应的单工通信和半双工通信有所不同：</p><ul><li><p><strong>单工通信</strong>（<code>Simplex Communication</code>）： 在单工通信中，数据只能在一个方向上传输，即只能从一个设备传输到另一个设备，而接收方无法回应。</p></li><li><p><strong>半双工通信</strong>（<code>Half-Duplex Communication</code>）： 在半双工通信中，通信的两端可以在不同的时间段内进行双向数据传输，但不能同时进行。这意味着每个设备必须在发送和接收之间切换，类似于对讲机，一方说话时另一方必须等待。</p></li><li><p><strong>双工通信</strong>（<code>Full-Duplex Communication</code>）： 双工通信允许两个设备同时进行双向数据传输，无需等待。这在许多通信场景中是很常见的，如电话通话、网络通信（如全双工以太网）、无线通信等。</p></li></ul><p><code>HTTP</code>（<code>Hypertext Transfer Protocol</code>）是一种应用层协议，它使用的是一种请求-响应（<code>Request-Response</code>）模式的通信。</p><p>在 <code>HTTP</code> 协议中，客户端发送请求给服务器，服务器接收请求并发送响应回客户端。<strong>这种通信模式是典型的半双工通信</strong>。</p><p>具体来说，在典型的 <code>HTTP</code> 通信中，通信流程如下：</p><ol><li><p>客户端发送请求： 客户端（例如浏览器）向服务器发送一个 <code>HTTP</code> 请求，请求某个资源，如网页、图像、视频等。这个请求包含一些头部信息，可能还包括请求体（对于某些请求方法，如 <code>POST</code>）。</p></li><li><p>服务器处理请求： 服务器接收到请求后，会解析请求信息，确定所需资源，并进行相应的处理，可能涉及从数据库获取数据、执行后端逻辑等。</p></li><li><p>服务器发送响应： 服务器生成一个 <code>HTTP</code> 响应，包括响应状态码、响应头部以及响应体（资源的实际内容）。然后，服务器将响应发送回客户端。</p></li><li><p>客户端处理响应： 客户端接收到服务器的响应后，会解析响应信息，根据响应状态码判断请求是否成功，并在需要时处理响应体，例如渲染页面或显示图片。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要注意的是，虽然 <code>HTTP</code> 是一种半双工通信协议，但在现代的网络通信中，可以通过一些技术来实现类似全双工通信的效果。</p><p>例如，使用 <code>WebSockets</code> 技术可以在同一个连接上实现双向通信，而不必依赖多个请求-响应循环。</p></div><h2 id="_2-三次握手" tabindex="-1">2.三次握手 <a class="header-anchor" href="#_2-三次握手" aria-label="Permalink to &quot;2.三次握手&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/oneyoung19/vuepress-blog-img/Not-Count-Contribution/img/http-handshake.png" alt=""></p><ol><li><p>第一步：客户端发送 <code>SYN</code>（<code>synchronous</code> 同步）报文。 客户端（通常是浏览器）向服务器发送一个带有 <code>SYN</code> 标志的数据包，表示客户端想要建立一个连接。</p></li><li><p>第二步：服务器发送 <code>SYN + ACK</code> 报文。 服务器收到客户端的 <code>SYN</code> 报文后，会返回一个带有 <code>SYN</code> 和 <code>ACK</code>（<code>acknowledge</code> 确认）标志的数据包作为响应，表示服务器同意建立连接。</p></li><li><p>第三步：客户端发送 <code>ACK</code> 报文。 客户端收到服务器的 <code>SYN + ACK</code> 报文后，向服务器发送一个带有 <code>ACK</code> 标志的数据包，确认连接建立。从而，双方都确认了连接的建立。</p></li></ol><h2 id="_3-四次挥手" tabindex="-1">3.四次挥手 <a class="header-anchor" href="#_3-四次挥手" aria-label="Permalink to &quot;3.四次挥手&quot;">​</a></h2><ol><li><p>第一步：客户端发送 <code>FIN</code> 报文。 客户端决定关闭连接，发送一个带有 <code>FIN</code>（<code>finish</code> 结束）标志的数据包给服务器，表示客户端没有更多的数据要发送了。</p></li><li><p>第二步：服务器发送 <code>ACK</code> 报文。 服务器收到客户端的 <code>FIN</code> 报文后，发送一个带有ACK标志的数据包作为确认。服务器仍然可以发送数据给客户端，但不再接受客户端的数据。</p></li><li><p>第三步：服务器发送 <code>FIN</code> 报文。 当服务器决定关闭连接时，它发送一个带有FIN标志的数据包给客户端，表示服务器完成了数据发送。</p></li><li><p>第四步：客户端发送 <code>ACK</code> 报文。 客户端收到服务器的 <code>FIN</code> 报文后，发送一个带有 <code>ACK</code> 标志的数据包作为确认。这样，连接就完全关闭了。服务器和客户端都知道彼此没有更多的数据要传输。</p></li></ol>',16)]))}const h=e(i,[["render",l]]);export{m as __pageData,h as default};