webpackJsonp([36],{2319:function(n,s,a){n.exports={async:a(3107),basic:a(3108),"custom-handler":a(3109),data:a(3110),extra:a(3111),length:a(3112),"upload-method":a(3113)}},3107:function(n,s,a){n.exports={content:{"zh-CN":[["p","选择文件后，点击按钮上传。"]],"en-US":[["p","Click a button to upload after selecting files."]]},meta:{order:1,title:{"zh-CN":"点击按钮上传","en-US":"Click a button to upload"},filename:"components-pro/upload/demo/async.md",id:"components-pro-upload-demo-async"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.deb\'</span><span class="token punctuation">,</span> <span class="token string">\'.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'.pdf\'</span><span class="token punctuation">,</span> <span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Upload <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(7),a(489)),t={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:[".deb",".txt",".pdf","image/*"],uploadImmediately:!1};return n.createElement("div",null,n.createElement(s.Upload,t))}}},3108:function(n,s,a){n.exports={content:{"zh-CN":[["p","文件上传。"]],"en-US":[["p","File Upload."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic Usage"},filename:"components-pro/upload/demo/basic.md",id:"components-pro-upload-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.deb\'</span><span class="token punctuation">,</span> <span class="token string">\'.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'.pdf\'</span><span class="token punctuation">,</span> <span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Upload <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(7),a(489)),t={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:[".deb",".txt",".pdf","image/*"],uploadImmediately:!0};return n.createElement("div",null,n.createElement(s.Upload,t))}}},3109:function(n,s,a){n.exports={content:{"zh-CN":[["p","可以自定义上传请求得到响应后的处理方式，包括成功和失败。\n这将覆盖默认的处理行为。"]],"en-US":[["p","Customize the response handler, including success and failure.\nThis will override the default handlers."]]},meta:{order:3,title:{"zh-CN":"自定义响应处理方法","en-US":"Customize The Response Handler"},filename:"components-pro/upload/demo/custom-handler.md",id:"components-pro-upload-demo-custom-handler"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.deb\'</span><span class="token punctuation">,</span> <span class="token string">\'.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'.pdf\'</span><span class="token punctuation">,</span> <span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  onUploadSuccess<span class="token punctuation">:</span> response <span class="token operator">=</span><span class="token operator">></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  onUploadError<span class="token punctuation">:</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> file<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> response<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Upload <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(7),a(489)),t={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:[".deb",".txt",".pdf","image/*"],uploadImmediately:!1,onUploadSuccess:function(n){return s.message.success(n)},onUploadError:function(n,s,a){return console.log(n,s,a)}};return n.createElement("div",null,n.createElement(s.Upload,t))}}},3110:function(n,s,a){n.exports={content:{"zh-CN":[["p","为一个文件上传请求追加一个",["code","FormData"],"实例。\n请查看开发者工具中的Network标签。"]],"en-US":[["p","Append an extra ",["code","FormData"]," instance to a file upload request.\nPlease checkout the 'Network' tab in the developer tool."]]},meta:{order:4,title:{"zh-CN":"附加额外数据","en-US":"Append Extra Data"},filename:"components-pro/upload/demo/data.md",id:"components-pro-upload-demo-data"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.deb\'</span><span class="token punctuation">,</span> <span class="token string">\'.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'.pdf\'</span><span class="token punctuation">,</span> <span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    key1<span class="token punctuation">:</span> <span class="token string">\'value1\'</span><span class="token punctuation">,</span>\n    key2<span class="token punctuation">:</span> <span class="token string">\'value2\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onUploadSuccess<span class="token punctuation">:</span> response <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Upload <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(7),a(489)),t={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:[".deb",".txt",".pdf","image/*"],uploadImmediately:!1,data:{key1:"value1",key2:"value2"},onUploadSuccess:function(n){return console.log(n)}};return n.createElement("div",null,n.createElement(s.Upload,t))}}},3111:function(n,s,a){n.exports={content:{"zh-CN":[["p","在组件右上角显示提示信息，如接受的文件类型等。"]],"en-US":[["p","Display hint on the top-right corner, such as acceptable types."]]},meta:{order:5,title:{"zh-CN":"附加提示信息","en-US":"Extra hint"},filename:"components-pro/upload/demo/extra.md",id:"components-pro-upload-demo-extra"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  extra<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token function">请上传图片文件</span><span class="token punctuation">(</span>jpg<span class="token punctuation">,</span> jpeg<span class="token punctuation">,</span> png<span class="token operator">...</span><span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  onUploadSuccess<span class="token punctuation">:</span> response <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Upload <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(7),a(489)),t={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:["image/*"],uploadImmediately:!1,extra:n.createElement("p",null,"请上传图片文件(jpg, jpeg, png...)"),onUploadSuccess:function(n){return console.log(n)}};return n.createElement("div",null,n.createElement(s.Upload,t))}}},3112:function(n,s,a){n.exports={content:{"zh-CN":[["p","限制同时上传文件的数量。"]],"en-US":[["p","Constraint the amount of filed being uploaded at one time."]]},meta:{order:2,title:{"zh-CN":"数量限制","en-US":"Count Constraint"},filename:"components-pro/upload/demo/length.md",id:"components-pro-upload-demo-length"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.deb\'</span><span class="token punctuation">,</span> <span class="token string">\'.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'.pdf\'</span><span class="token punctuation">,</span> <span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  fileListMaxLength<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Upload <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(7),a(489)),t={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:[".deb",".txt",".pdf","image/*"],uploadImmediately:!1,fileListMaxLength:2};return n.createElement("div",null,n.createElement(s.Upload,t))}}},3113:function(n,s,a){n.exports={content:{"zh-CN":[["p","直接调用组件的上传方法，可以使用",["code","showUploadBtn={false}"],"使自带的上传按钮消失。"]],"en-US":[["p","Call ",["code","Upload"],"'s ",["code","startUpload"]," method directly. You can use ",["code","showUploadBtn={false}"]," to hide the original upload button."]]},meta:{order:6,title:{"zh-CN":"上传方法","en-US":"Upload method"},filename:"components-pro/upload/demo/upload-method.md",id:"components-pro-upload-demo-upload-method"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Upload<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Output <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>\n  headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  action<span class="token punctuation">:</span> <span class="token string">\'//localhost:3000/upload\'</span><span class="token punctuation">,</span>\n  multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  accept<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.deb\'</span><span class="token punctuation">,</span> <span class="token string">\'.txt\'</span><span class="token punctuation">,</span> <span class="token string">\'.pdf\'</span><span class="token punctuation">,</span> <span class="token string">\'image/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  uploadImmediately<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  showUploadBtn<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  showPreviewImage<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  upload<span class="token punctuation">;</span>\n\n  saveUpload <span class="token operator">=</span> node <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>upload <span class="token operator">=</span> node<span class="token punctuation">;</span>\n\n  handleBtnClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function">startUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>文件管理<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Output</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>选择Logo<span class="token punctuation">"</span></span> <span class="token attr-name">renderer</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Upload ref<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>saveUpload<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleBtnClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function s(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function t(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}var p=a(0),o=(a(7),Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}),e=function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}(),c=a(489),l={headers:{"Access-Control-Allow-Origin":"*"},action:"//localhost:3000/upload",multiple:!0,accept:[".deb",".txt",".pdf","image/*"],uploadImmediately:!1,showUploadBtn:!1,showPreviewImage:!0},u=function(a){function u(){var a,t,p,o;n(this,u);for(var e=arguments.length,c=Array(e),l=0;l<e;l++)c[l]=arguments[l];return t=p=s(this,(a=u.__proto__||Object.getPrototypeOf(u)).call.apply(a,[this].concat(c))),p.saveUpload=function(n){return p.upload=n},p.handleBtnClick=function(){p.upload.startUpload()},o=t,s(p,o)}return t(u,a),e(u,[{key:"render",value:function(){var n=this;return p.createElement(c.Form,{header:"文件管理"},p.createElement(c.Output,{label:"选择Logo",renderer:function(){return p.createElement(c.Upload,o({ref:n.saveUpload},l))}}),p.createElement(c.Button,{style:{marginBottom:10},color:"blue",onClick:this.handleBtnClick},"提交"))}}]),u}(p.Component);return p.createElement(u,null)}}}});