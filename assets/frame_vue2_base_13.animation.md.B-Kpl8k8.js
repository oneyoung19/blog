import{_ as o,o as t,c,aP as a}from"./chunks/framework.D1yHhm2y.js";const u=JSON.parse('{"title":"13.动画","description":"","frontmatter":{"title":"13.动画"},"headers":[],"relativePath":"frame/vue2/base/13.animation.md","filePath":"frame/vue2/base/13.animation.md","lastUpdated":1735912341000}'),i={name:"frame/vue2/base/13.animation.md"};function d(l,e,n,r,p,s){return t(),c("div",null,e[0]||(e[0]=[a("<p><code>Vue</code> 提供了 <code>&lt;transition&gt;</code> 过渡组件。</p><p>当元素用 <code>&lt;transition&gt;</code> 包裹后，以下场景会触发动画效果：</p><ol><li>条件渲染 <code>v-if</code></li><li>条件展示 <code>v-show</code></li><li>动态组件</li><li>组件根节点</li></ol><p>当插入或删除包含在 <code>transition</code> 组件中的元素时，<code>Vue</code> 将会做以下处理：</p><ul><li><p>自动嗅探目标元素是否应用了 <code>CSS</code> 过渡或动画，如果是，在恰当的时机添加/删除 <code>CSS</code> 类名。</p></li><li><p>如果过渡组件提供了 <code>JavaScript</code> 钩子函数，这些钩子函数将在恰当的时机被调用。</p></li><li><p>如果没有找到 <code>JavaScript</code> 钩子并且也没有检测到 <code>CSS</code> 过渡/动画，<code>DOM</code> 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 <code>Vue</code> 的 <code>nextTicxk</code> 概念不同)</p></li></ul>",5)]))}const f=o(i,[["render",d]]);export{u as __pageData,f as default};