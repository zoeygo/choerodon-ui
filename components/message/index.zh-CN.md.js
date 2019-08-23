webpackJsonp([146],{2147:function(t,e){t.exports={content:["section",["p","全局展示操作反馈信息。"],["h2","何时使用"],["ul",["li",["p","可提供成功、警告和错误等反馈信息。"]],["li",["p","顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。"]]]],meta:{category:"Components",subtitle:"全局提示",type:"Feedback",noinstant:!0,title:"Message",filename:"components/message/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","组件提供了一些静态方法，使用方式和参数如下："],["ul",["li",["p",["code","message.success(content, [duration], [onClose], placement)"]]],["li",["p",["code","message.error(content, [duration], [onClose], placement)"]]],["li",["p",["code","message.info(content, [duration], [onClose], placement)"]]],["li",["p",["code","message.warning(content, [duration], [onClose], placement)"]]],["li",["p",["code","message.warn(content, [duration], [onClose], placement)"]," // alias of warning"]],["li",["p",["code","message.loading(content, [duration], [onClose], placement)"]]]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","content"],["td","提示内容"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","duration"],["td","自动关闭的延时，单位秒"],["td","number"],["td","3"]],["tr",["td","onClose"],["td","关闭时触发的回调函数"],["td","Function"],["td","-"]],["tr",["td","placement"],["td","消息展示的位置, 可选值： ",["code","top"]," ",["code","left"]," ",["code","right"]," ",["code","bottom"]," ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","leftTop"]," ",["code","leftBottom"]," ",["code","rightTop"]," ",["code","rightBottom"]],["td","string"],["td",["code","leftBottom"]]]]],["p","还提供了全局配置和全局销毁方法："],["ul",["li",["p",["code","message.config(options)"]]],["li",["p",["code","message.destroy()"]]]],["h3","message.config"],["pre",{lang:"js",highlighted:'message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  top<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","message.config({\n  top: 100,\n  duration: 2,\n});"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","duration"],["td","默认自动关闭延时，单位秒"],["td","number"],["td","3"]],["tr",["td","getContainer"],["td","配置渲染节点的输出位置"],["td","() => HTMLElement"],["td","() => document.body"]],["tr",["td","top"],["td","消息在顶部出现时距离顶部的位置"],["td","number"],["td","24"]],["tr",["td","bottom"],["td","消息在底部出现时距离底部的位置"],["td","number"],["td","24"]],["tr",["td","placement"],["td","消息展示的位置, 可选值： ",["code","top"]," ",["code","left"]," ",["code","right"]," ",["code","bottom"]," ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","leftTop"]," ",["code","leftBottom"]," ",["code","rightTop"]," ",["code","rightBottom"]],["td","string"],["td",["code","leftBottom"]]]]]]}}});