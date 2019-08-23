webpackJsonp([277],{2227:function(t,n){t.exports={content:["section",["p","文本域用于输入一段文字。"],["h2","何时使用"],["p","用于编辑或展示代码"]],meta:{category:"Pro Components",type:"Data Entry",title:"CodeArea",subtitle:"代码域",filename:"components-pro/code-area/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","CodeArea"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","options"],["td","编辑器配置，详见",["a",{title:null,href:"https://codemirror.net/doc/manual.html#config"},"CodeMirror Options"]],["td","object"],["td"]],["tr",["td","formatHotKey"],["td","格式化快捷键"],["td","string"],["td",["code","Alt+F"]]],["tr",["td","unFormatHotKey"],["td","清除格式化快捷键"],["td","string"],["td",["code","Alt+R"]]],["tr",["td","formatter"],["td",["code","CodeAreaFormatter"],"类的实例，用于格式化"],["td","CodeAreaFormatter"],["td",["code","new JSONFormatter()"]]]]],["p","更多属性请参考 ",["a",{title:null,href:"/components-pro/field/#FormField"},"FormField"],"。"],["h3","自定义主题"],["p","组件内置",["code","'neat'"],"和",["code","'monokai'"],"两个主题，使用更多主题需要引入对应的样式文件，如下："],["pre",{lang:"less",highlighted:'<span class="token comment" spellcheck="true">// style.less</span>\n<span class="token variable">@import</span> <span class="token string">\'~codemirror/theme/material.css\'</span><span class="token punctuation">;</span>'},["code","// style.less\n@import '~codemirror/theme/material.css';"]],["p","或在",["code","*.js"],"文件中引用"],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token string">\'codemirror/theme/material.css\'</span><span class="token punctuation">;</span>'},["code","import 'codemirror/theme/material.css';"]],["p","所有可用主题请参考 ",["a",{title:null,href:"https://codemirror.net/demo/theme.html"},"CodeMirror Themes"],"。"],["h3","更多编辑器配置项"],["p","更多编辑器配置可以直接作为输入属性传递给组件，如下："],["pre",{lang:"ts",highlighted:'<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> tabSize<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> viewportMargin<span class="token punctuation">:</span> <span class="token number">Infinity</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span>CodeArea options<span class="token operator">=</span><span class="token punctuation">{</span>options<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>'},["code","const options = { tabSize: 4, viewportMargin: Infinity };\n<CodeArea options={options} />"]],["p","所有可用的配置项请参考 ",["a",{title:null,href:"https://codemirror.net/doc/manual.html#config"},"CodeMirror Options"],"。"]]}}});