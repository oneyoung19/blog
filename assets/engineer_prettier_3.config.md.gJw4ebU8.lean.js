import{_ as i,o as a,c as e,aP as t}from"./chunks/framework.D1yHhm2y.js";const k=JSON.parse('{"title":"3.Config","description":"","frontmatter":{"title":"3.Config"},"headers":[],"relativePath":"engineer/prettier/3.config.md","filePath":"engineer/prettier/3.config.md","lastUpdated":1735912341000}'),n={name:"engineer/prettier/3.config.md"};function l(p,s,h,o,d,r){return a(),e("div",null,s[0]||(s[0]=[t(`<p><code>Prettier</code> 暴露了<strong>部分</strong> <code>Config</code> 供用户自定义配置。</p><p>结合上一节中的 <code>CLI</code> 配置，我们就可以调整项目中的风格细节。</p><h2 id="config-files" tabindex="-1">Config Files <a class="header-anchor" href="#config-files" aria-label="Permalink to &quot;Config Files&quot;">​</a></h2><p><code>Prettier</code> 使用了 <a href="https://github.com/cosmiconfig/cosmiconfig" target="_blank" rel="noreferrer">cosmiconfig</a> 来解析配置文件。</p><p>在项目中可使用的配置方式，<strong>优先级从高到低</strong>分别为：</p><ul><li><p><code>package.json</code> 中的 <code>prettier</code> 键值</p></li><li><p><code>.prettierrc</code></p></li><li><p><code>.prettierrc.[json|yml|yaml|json5]</code></p></li><li><p><code>.prettierrc.js</code> 或 <code>prettier.config.js</code></p></li><li><p><code>.prettierrc.mjs</code> 或 <code>prettier.config.mjs</code></p></li><li><p><code>.prettierrc.cjs</code> 或 <code>prettier.config.cjs</code></p></li><li><p><code>.prettierrc.toml</code></p></li></ul><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="_1-print-width" tabindex="-1">1.Print Width <a class="header-anchor" href="#_1-print-width" aria-label="Permalink to &quot;1.Print Width&quot;">​</a></h3><p><code>printWidth&lt;number&gt;</code> 声明指定一行代码的最大长度。</p><p>当代码的行长度超过指定的 <code>printWidth</code> 值时，<code>Prettier</code> 会尝试自动将代码拆分成多行，以保持每行代码的长度不超过 <code>printWidth</code>。</p><p>例如，如果你将 <code>printWidth</code> 设置为 <code>80</code>，那么当一行代码的长度超过 <code>80</code> 个字符时，<code>Prettier</code> 会自动将该行代码拆分成多行，使得每行代码的长度不超过 <code>80</code> 个字符。</p><h3 id="_2-tab-width" tabindex="-1">2.Tab Width <a class="header-anchor" href="#_2-tab-width" aria-label="Permalink to &quot;2.Tab Width&quot;">​</a></h3><p><code>tabWidth&lt;number&gt;</code> 声明缩进占几个空格，在 <code>useTabs</code> 为 <code>false</code> 才会起作用。</p><p>如果 <code>useTabs</code> 为 <code>true</code>，则缩进宽度会固定为 <code>1</code> 个 <code>tab</code> 宽度。<strong>具体的 <code>1</code> 个 <code>tab</code> 宽度占多少空格，由编辑器设置决定</strong>。</p><p>因此，如果使用 <code>useTabs</code> 为 <code>true</code>，推荐结合 <code>.editorconfig</code> 文件来使用。</p><p><strong>该属性并非声明一个 <code>tab</code> 占几个空格</strong>。</p><h3 id="_3-tabs" tabindex="-1">3.Tabs <a class="header-anchor" href="#_3-tabs" aria-label="Permalink to &quot;3.Tabs&quot;">​</a></h3><p><code>useTabs&lt;boolean&gt;</code> 声明使用 <code>tab</code> 进行缩进，而非 <code>space</code>。</p><p>通常的共识是，<em><strong>使用 <code>tab</code> 进行缩进、使用 <code>space</code> 进行对齐</strong></em>。</p><h3 id="_4-semicolons" tabindex="-1">4.Semicolons <a class="header-anchor" href="#_4-semicolons" aria-label="Permalink to &quot;4.Semicolons&quot;">​</a></h3><p><code>semi&lt;boolean&gt;</code> 声明是否在表达式末尾使用分号。</p><h3 id="_5-quotes" tabindex="-1">5.Quotes <a class="header-anchor" href="#_5-quotes" aria-label="Permalink to &quot;5.Quotes&quot;">​</a></h3><p><code>singleQuote&lt;boolean&gt;</code> 声明使用单引号而非双引号。</p><h3 id="_6-quote-props" tabindex="-1">6.Quote Props <a class="header-anchor" href="#_6-quote-props" aria-label="Permalink to &quot;6.Quote Props&quot;">​</a></h3><p><code>quoteProps&lt;string&gt;</code> 声明对象属性是否使用引号。</p><ol><li><p><code>as-needed</code> 只有需要的时候，才会添加引号。</p></li><li><p><code>consistent</code> 如果有任一属性带了引号，则其他属性统一带引号。</p></li><li><p><code>preserve</code> 写成啥样，就是啥样。不作额外处理。</p></li></ol><h3 id="_7-trailing-commas" tabindex="-1">7.Trailing Commas <a class="header-anchor" href="#_7-trailing-commas" aria-label="Permalink to &quot;7.Trailing Commas&quot;">​</a></h3><p><code>trailingComma&lt;string&gt;</code> 声明尾部逗号。</p><ol><li><p><code>all</code> 所有场景都适用尾部逗号，包含<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#trailing_commas_in_functions" target="_blank" rel="noreferrer">函数声明与函数调用</a>。</p></li><li><p><code>es5</code> 只在 <code>es5</code> 规范下使用尾部逗号。</p></li><li><p><code>none</code> 不使用尾部逗号。</p></li></ol><h3 id="_8-bracket-spacing" tabindex="-1">8.Bracket Spacing <a class="header-anchor" href="#_8-bracket-spacing" aria-label="Permalink to &quot;8.Bracket Spacing&quot;">​</a></h3><p><code>bracketSpacing&lt;boolean&gt;</code> 声明对象括号与文字之间是否有间距。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: bar }</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: bar}</span></span></code></pre></div><h3 id="_9-bracket-line" tabindex="-1">9.Bracket Line <a class="header-anchor" href="#_9-bracket-line" aria-label="Permalink to &quot;9.Bracket Line&quot;">​</a></h3><p><code>bracketSameLine&lt;boolean&gt;</code> 声明 <code>html</code> 多行元素的末尾括号是否与末尾元素在同一条线上。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- true --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  className</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier-class&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{this.handleClick}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Click Here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- false --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  className</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier-class&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{this.handleClick}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Click Here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_10-arrow-function-parentheses" tabindex="-1">10.Arrow Function Parentheses <a class="header-anchor" href="#_10-arrow-function-parentheses" aria-label="Permalink to &quot;10.Arrow Function Parentheses&quot;">​</a></h3><p><code>arrowParens&lt;string&gt;</code> 声明当箭头函数只有一个参数时，该参数是否保留圆括号。</p><ol><li><p><code>always</code> 总是保留圆括号，<code>(x) =&gt; x</code></p></li><li><p><code>aviod</code> 不保留圆括号，<code>x =&gt; x</code></p></li></ol><h3 id="_11-end-of-line" tabindex="-1">11.End of Line <a class="header-anchor" href="#_11-end-of-line" aria-label="Permalink to &quot;11.End of Line&quot;">​</a></h3><p><code>endOfLine&lt;string&gt;</code> 声明行尾换行方式。</p><ol><li><p><code>lf</code> 换行符即 <code>Line Feed</code>（<code>\\n</code>），在 <code>Linux</code>、<code>Macos</code> 以及 <code>git</code> 仓库中通用。</p></li><li><p><code>crlf</code> 回车换行符即 <code>Carriage Return + Line Feed</code> (<code>\\r\\n</code>)，在 <code>Windows</code> 上通用。</p></li><li><p><code>cr</code> 回车符即 <code>Carriage Return</code> (<code>\\r</code>)，很少用到。</p></li><li><p><code>auto</code> 维护现有的行结尾（通过查看第一行之后使用的内容来标准化一个文件中的混合值）。</p></li></ol><h3 id="_12-html-whitespace-sensitivity" tabindex="-1">12.HTML Whitespace Sensitivity <a class="header-anchor" href="#_12-html-whitespace-sensitivity" aria-label="Permalink to &quot;12.HTML Whitespace Sensitivity&quot;">​</a></h3><p><code>htmlWhitespaceSensitivity&lt;string&gt;</code> 声明 <code>html</code> 中空格敏感性，大多数场景下是由于空格和换行对于行内元素是会产生影响的。</p><ol><li><p><code>css</code> 按照 <code>css</code> 规则来解析。</p></li><li><p><code>strict</code> 所有标签里的空格，都被当做是有意义的。</p></li><li><p><code>ignore</code> 所有标签里的空格，都被当做是无意义的。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>虽然如今前端工程化中的脚手架工具，在<strong>生产打包</strong>时都会将模板中的<strong>空格</strong>抹除掉。</p><p>但考虑到<strong>实际开发中可能有纯 <code>HTML</code> 文件</strong>或者为了<strong>保证开发和生产表现一致</strong>，所以该项推荐设置为 <code>css</code>，整体来说，这样研发成本最低。</p></div><h3 id="_13-vue-files-script-and-style-tags-indentation" tabindex="-1">13.Vue files script and style tags indentation <a class="header-anchor" href="#_13-vue-files-script-and-style-tags-indentation" aria-label="Permalink to &quot;13.Vue files script and style tags indentation&quot;">​</a></h3><p><code>vueIndentScriptAndStyle&lt;boolean&gt;</code> 声明 <code>vue</code> 单文件中的 <code>script</code> 和 <code>style</code> 标签内的元素是否缩进。</p><p>默认为 <code>false</code>。</p><h3 id="_14-single-attribute-per-line" tabindex="-1">14.Single Attribute Per Line <a class="header-anchor" href="#_14-single-attribute-per-line" aria-label="Permalink to &quot;14.Single Attribute Per Line&quot;">​</a></h3><p><code>singleAttributePerLine&lt;boolean&gt;</code> 声明单行单属性。</p><p>默认为 <code>false</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- false --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- true --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="_15-prose-wrap" tabindex="-1">15.Prose Wrap <a class="header-anchor" href="#_15-prose-wrap" aria-label="Permalink to &quot;15.Prose Wrap&quot;">​</a></h3><p><code>proseWrap&lt;string&gt;</code> 声明 <code>markdown</code> 段落是否换行。</p><ol><li><p><code>preserve</code> 默认值，即保留 <code>markdown</code> 本身段落格式，不作额外处理。</p></li><li><p><code>always</code> 总是将 <code>markdown</code> 段落按照 <code>printWidth</code> 的限制换行。</p></li><li><p><code>never</code> 从不按照 <code>markdown</code> 段落按照 <code>printWidth</code> 的限制换行。</p></li></ol><h3 id="_16-require-pragma" tabindex="-1">16.Require Pragma <a class="header-anchor" href="#_16-require-pragma" aria-label="Permalink to &quot;16.Require Pragma&quot;">​</a></h3><p><code>requirePragma&lt;boolean&gt;</code> 声明只有文件头部包含了特定 <code>pragma</code> 时，该文件才会被格式化。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@prettier</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><p>或者：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@format</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div><h3 id="_17-insert-pragma" tabindex="-1">17.Insert Pragma <a class="header-anchor" href="#_17-insert-pragma" aria-label="Permalink to &quot;17.Insert Pragma&quot;">​</a></h3><p><code>insertPragma&lt;boolean&gt;</code> 声明文件格式化之后，是否在文档头部添加 <code>@format</code> 的 <code>pragma</code> 标记。</p><h2 id="best-practice" tabindex="-1">Best Practice <a class="header-anchor" href="#best-practice" aria-label="Permalink to &quot;Best Practice&quot;">​</a></h2><p>笔者在项目中的配置是 <code>.prettierrc.js</code>，此处贴一下完整代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// When the characters is more than 80 in the line, it will wrap.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	printWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// The indent space is 2.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tabWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// The indent style is tab, not space.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	useTabs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Don&#39;t use semicolon at the end.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	semi: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Use single quote.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	singleQuote: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// If only when the object props need quotes, should add the quotes.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	quoteProps: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;as-needed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Don&#39;t need the trailing comma.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	trailingComma: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;none&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Use spaces in the bracket.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	bracketSpacing: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// The end bracket should be same line with the element attribute.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	bracketSameLine: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Don&#39;t use parenstheses when the arrow funtion params is only one.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	arrowParens: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;avoid&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// The end of line is lf.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	endOfLine: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lf&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// It should be single attribute at per line in html or vue template.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	singleAttributePerLine: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Don&#39;t indent script and style at the begin in vue file.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	vueIndentScriptAndStyle: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// The space in inline element should display as css rules. See: https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	htmlWhitespaceSensitivity: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// Keep the prose style of your writing in markdown.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	proseWrap: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;preserve&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,68)]))}const g=i(n,[["render",l]]);export{k as __pageData,g as default};