import{_ as o,o as d,c,aP as t}from"./chunks/framework.D1yHhm2y.js";const m=JSON.parse('{"title":"5.修饰符","description":"","frontmatter":{"title":"5.修饰符"},"headers":[],"relativePath":"frame/vue2/base/5.modifiers.md","filePath":"frame/vue2/base/5.modifiers.md","lastUpdated":1735912341000}'),l={name:"frame/vue2/base/5.modifiers.md"};function i(p,e,a,s,r,n){return d(),c("div",null,e[0]||(e[0]=[t('<p>事件修饰符</p><ul><li><code>.stop</code> 停止冒泡</li><li><code>.prevent</code> 阻止默认事件</li><li><code>.capture</code> 捕获阶段触发事件</li><li><code>.self</code> <code>e.target</code> 与 <code>e.currentTarget</code> 是同一个元素时触发</li><li><code>.once</code> 事件只执行一次</li><li><code>.passive</code> 同 <code>addEventListener</code> 中的 <code>passive</code> 选项。</li></ul><p>按键修饰符(用于<strong>键盘事件</strong>)</p><ul><li><code>.enter</code></li><li><code>.tab</code></li><li><code>.delete</code> (捕获“删除”和“退格”键)</li><li><code>.esc</code></li><li><code>.space</code></li><li><code>.up</code></li><li><code>.down</code></li><li><code>.left</code></li><li><code>.right</code></li></ul><p>系统修饰符(用于<strong>按下相应按键时</strong>才触发鼠标或键盘事件的监听器)</p><ul><li><code>.ctrl</code></li><li><code>.alt</code></li><li><code>.shift</code></li><li><code>.meta</code></li></ul><p>精确修饰符(控制由精确的系统修饰符组合触发的事件)</p><ul><li><code>.exact</code></li></ul><p>鼠标按钮修饰符</p><ul><li><code>.left</code></li><li><code>.right</code></li><li><code>.middle</code></li></ul><p><code>v-model</code> 修饰符</p><ul><li><p><code>.lazy</code> 在默认情况下，<code>v-model</code> 在每次 <code>input</code> 事件触发后将输入框的值与数据进行同步 (<strong>除了输入法组合文字时</strong>)。</p><p>可以添加 <code>lazy</code> 修饰符，从而转为在 <code>change</code> 事件之后进行同步。</p></li><li><p><code>.number</code> 如果想<strong>自动将用户的输入值转为数值类型</strong>，可以给 <code>v-model</code> 添加 <code>number</code> 修饰符。</p><p>如果这个值无法被 <code>parseFloat()</code> 解析，则会返回原始的值。</p></li><li><p><code>.trim</code> 如果要<strong>自动过滤用户输入的首尾空白字符</strong>，可以给 <code>v-model</code> 添加 <code>trim</code> 修饰符。</p></li></ul><p>额外修饰符</p><ul><li><p><code>.native</code><code>vue.js:634 [Vue warn]: The .native modifier for v-on is only valid on components but it was used on &lt;button&gt;.</code></p><p>自定义组件上的事件，通常都是通过 <code>$emit</code> 来触发的。</p><p>如果想要触发自定义组件上的原生事件，那么可以使用 <code>.native</code> 修饰符。</p></li><li><p><code>.sync</code></p><p>更加方便的更改自定义组件的 <code>prop</code></p><p>单纯的使用 <code>prop</code> 结合 <code>$emit</code> 实现父子组件间的通信，进而动态 <code>prop</code>，这种方式过于复杂化了。</p><p><code>Vue</code> 提供了 <code>.sync</code> 修饰符来简化这种场景实现。</p><p>原始是：</p><p>自定义组件上使用了 <code>:title=&quot;title&quot;</code> 和 <code>@update:title=&quot;title = $event&quot;</code>，组件内部调用 <code>$emit(&#39;update:title&#39;, newTitle)</code></p><p>简化之后：</p><p>自定义组件上使用 <code>:title.sync=&quot;title&quot;</code>，组件内部调用 <code>$emit(&#39;update:title&#39;, newTitle)</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 <code>Vue</code> 的模板中，事件程序中的 <code>$event</code> 有两种场景含义：</p><p>在原生 <code>DOM</code> 事件中，指代的是事件对象 <code>e</code>。</p><p>在组件的自定义事件中，指代的是 <code>$emit(&#39;name&#39;, val)</code> 中的参数 <code>val</code>。</p></div></li></ul>',14)]))}const v=o(l,[["render",i]]);export{m as __pageData,v as default};