import{_ as s,o as a,c as p,aP as e}from"./chunks/framework.D1yHhm2y.js";const u=JSON.parse('{"title":"3.Command Line","description":"","frontmatter":{"title":"3.Command Line"},"headers":[],"relativePath":"engineer/rollup/3.command-line.md","filePath":"engineer/rollup/3.command-line.md","lastUpdated":1735912341000}'),l={name:"engineer/rollup/3.command-line.md"};function t(i,n,c,o,r,d){return a(),p("div",null,n[0]||(n[0]=[e(`<p>上一节说到了 <code>rollup -c</code> 这个基础指令，除此以外，还有<a href="https://cn.rollupjs.org/command-line-interface/#command-line-flags" target="_blank" rel="noreferrer">其他指令</a>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-c, --config &lt;filename&gt;     使用此配置文件</span></span>
<span class="line"><span>														（如果使用参数但未指定值，则默认为 rollup.config.js）</span></span>
<span class="line"><span>-d, --dir &lt;dirname&gt;         用于块的目录（如果不存在，则打印到 stdout）</span></span>
<span class="line"><span>-e, --external &lt;ids&gt;        排除模块 ID 的逗号分隔列表</span></span>
<span class="line"><span>-f, --format &lt;format&gt;       输出类型（amd、cjs、es、iife、umd、system）</span></span>
<span class="line"><span>-g, --globals &lt;pairs&gt;       \`moduleID:Global\` 对的逗号分隔列表</span></span>
<span class="line"><span>-h, --help                  显示此帮助消息</span></span>
<span class="line"><span>-i, --input &lt;filename&gt;      输入（替代 &lt;entry file&gt;）</span></span>
<span class="line"><span>-m, --sourcemap             生成源映射（\`-m inline\` 为内联映射）</span></span>
<span class="line"><span>-n, --name &lt;name&gt;           UMD 导出的名称</span></span>
<span class="line"><span>-o, --file &lt;output&gt;         单个输出文件（如果不存在，则打印到 stdout）</span></span>
<span class="line"><span>-p, --plugin &lt;plugin&gt;       使用指定的插件（可重复）</span></span>
<span class="line"><span>-v, --version               显示版本号</span></span>
<span class="line"><span>-w, --watch                 监视产物文件并在更改时重新构建</span></span>
<span class="line"><span>--amd.autoId                基于块名称生成 AMD ID</span></span>
<span class="line"><span>--amd.basePath &lt;prefix&gt;     要预先添加到自动生成的 AMD ID 的路径</span></span>
<span class="line"><span>--amd.define &lt;name&gt;         在 \`define\` 位置使用的函数</span></span>
<span class="line"><span>--amd.forceJsExtensionForImports 在 AMD 导入中使用 \`.js\` 扩展名</span></span>
<span class="line"><span>--amd.id &lt;id&gt;               AMD 模块的 ID（默认为匿名）</span></span>
<span class="line"><span>--assetFileNames &lt;pattern&gt;  发布资源的名称模式</span></span>
<span class="line"><span>--banner &lt;text&gt;             在产物顶部插入的代码（位于包装器之外）</span></span>
<span class="line"><span>--chunkFileNames &lt;pattern&gt;  发布次要块的名称模式</span></span>
<span class="line"><span>--compact                   缩小包装器代码</span></span>
<span class="line"><span>--context &lt;variable&gt;        指定顶级 \`this\` 值</span></span>
<span class="line"><span>--no-dynamicImportInCjs     将外部动态 CommonJS 导入编写为 require</span></span>
<span class="line"><span>--entryFileNames &lt;pattern&gt;  发布入口块的名称模式</span></span>
<span class="line"><span>--environment &lt;values&gt;      传递给配置文件的设置（请参阅示例）</span></span>
<span class="line"><span>--no-esModule               不添加 __esModule 属性</span></span>
<span class="line"><span>--exports &lt;mode&gt;            指定导出模式（auto、default、named、none）</span></span>
<span class="line"><span>--extend                    扩展由 --name 定义的全局变量</span></span>
<span class="line"><span>--no-externalImportAssertions 在 &quot;es&quot; 输出中省略导入断言</span></span>
<span class="line"><span>--no-externalLiveBindings   不生成支持实时绑定的代码</span></span>
<span class="line"><span>--failAfterWarnings         如果生成的构建产生警告，则退出并显示错误</span></span>
<span class="line"><span>--footer &lt;text&gt;             在产物底部插入的代码（位于包装器之外）</span></span>
<span class="line"><span>--no-freeze                 不冻结命名空间对象</span></span>
<span class="line"><span>--generatedCode &lt;preset&gt;    使用哪些代码特性（es5/es2015）</span></span>
<span class="line"><span>--generatedCode.arrowFunctions 在生成的代码中使用箭头函数</span></span>
<span class="line"><span>--generatedCode.constBindings 在生成的代码中使用 &quot;const&quot;</span></span>
<span class="line"><span>--generatedCode.objectShorthand 在生成的代码中使用简写属性</span></span>
<span class="line"><span>--no-generatedCode.reservedNamesAsProps 始终引用保留名称作为 props</span></span>
<span class="line"><span>--generatedCode.symbols     在生成的代码中使用符号</span></span>
<span class="line"><span>--no-hoistTransitiveImports 不将中转导入提升到入口块中</span></span>
<span class="line"><span>--no-indent                 不缩进结果</span></span>
<span class="line"><span>--inlineDynamicImports      使用动态导入时创建单次打包</span></span>
<span class="line"><span>--no-interop                不包括交互操作块</span></span>
<span class="line"><span>--intro &lt;text&gt;              在产物顶部插入的代码（位于包装器内部）</span></span>
<span class="line"><span>--no-makeAbsoluteExternalsRelative 不规范化外部导入</span></span>
<span class="line"><span>--maxParallelFileOps &lt;value&gt; 并行读取的文件数</span></span>
<span class="line"><span>--minifyInternalExports     强制或禁用内部导出的缩小</span></span>
<span class="line"><span>--noConflict                为 UMD 全局生成 noConflict 方法</span></span>
<span class="line"><span>--outro &lt;text&gt;              在产物底部插入的代码（位于包装器内部）</span></span>
<span class="line"><span>--perf                      显示性能计时</span></span>
<span class="line"><span>--no-preserveEntrySignatures 避免入口点的门面块</span></span>
<span class="line"><span>--preserveModules           保留模块结构</span></span>
<span class="line"><span>--preserveModulesRoot       将保留的模块放置在根路径下的此路径下</span></span>
<span class="line"><span>--preserveSymlinks          解析文件时不要跟随符号链接</span></span>
<span class="line"><span>--no-sanitizeFileName       不要替换文件名中的无效字符</span></span>
<span class="line"><span>--shimMissingExports        为丢失的导出创建卡扣变量</span></span>
<span class="line"><span>--silent                    不打印警告</span></span>
<span class="line"><span>--sourcemapBaseUrl &lt;url&gt;    使用给定的基本 URL 发出绝对源映射 URL</span></span>
<span class="line"><span>--sourcemapExcludeSources   在源映射中不包括源代码</span></span>
<span class="line"><span>--sourcemapFile &lt;file&gt;      指定源映射的包位置</span></span>
<span class="line"><span>--stdin=ext                 指定用于标准输入的文件扩展名</span></span>
<span class="line"><span>--no-stdin                  不要从 stdin 读取 &quot;-&quot;</span></span>
<span class="line"><span>--no-strict                 不在生成的模块中发出 \`&quot;use strict&quot;;\`</span></span>
<span class="line"><span>--strictDeprecations        抛出有关不推荐使用的功能的错误</span></span>
<span class="line"><span>--no-systemNullSetters      不要将空的 SystemJS setter 替换为 \`null\`</span></span>
<span class="line"><span>--no-treeshake              禁用除屑优化</span></span>
<span class="line"><span>--no-treeshake.annotations 忽略纯调用注释</span></span>
<span class="line"><span>--treeshake.correctVarValueBeforeDeclaration 在声明之前将变量取消优化</span></span>
<span class="line"><span>--treeshake.manualPureFunctions &lt;names&gt; 手动将函数声明为纯函数</span></span>
<span class="line"><span>--no-treeshake.moduleSideEffects 假设模块没有副作用</span></span>
<span class="line"><span>--no-treeshake.propertyReadSideEffects 忽略属性访问副作用</span></span>
<span class="line"><span>--no-treeshake.tryCatchDeoptimization 不要关闭 try-catch-tree-shaking</span></span>
<span class="line"><span>--no-treeshake.unknownGlobalSideEffects 假设未知的全局变量不会抛出异常</span></span>
<span class="line"><span>--validate                  验证输出</span></span>
<span class="line"><span>--waitForBundleInput        等待打包输入文件</span></span>
<span class="line"><span>--watch.buildDelay &lt;number&gt; 节流观察重建</span></span>
<span class="line"><span>--no-watch.clearScreen      重建时不要清除屏幕</span></span>
<span class="line"><span>--watch.exclude &lt;files&gt;     排除要观察的文件</span></span>
<span class="line"><span>--watch.include &lt;files&gt;     限制观察到指定文件</span></span>
<span class="line"><span>--watch.onBundleEnd &lt;cmd&gt;   在 &quot;BUNDLE_END&quot; 事件上运行的 Shell 命令</span></span>
<span class="line"><span>--watch.onBundleStart &lt;cmd&gt; 在 &quot;BUNDLE_START&quot; 事件上运行的 Shell 命令</span></span>
<span class="line"><span>--watch.onEnd &lt;cmd&gt;         在 &quot;END&quot; 事件上运行的 Shell 命令</span></span>
<span class="line"><span>--watch.onError &lt;cmd&gt;       在 &quot;ERROR&quot; 事件上运行的 Shell 命令</span></span>
<span class="line"><span>--watch.onStart &lt;cmd&gt;       在 &quot;START&quot; 事件上运行的 Shell 命令</span></span>
<span class="line"><span>--watch.skipWrite           在监视时不要将文件写入磁盘</span></span></code></pre></div>`,2)]))}const g=s(l,[["render",t]]);export{u as __pageData,g as default};