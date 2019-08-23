webpackJsonp([248],{2266:function(t,o){t.exports={content:["section",["p","表单控件。"],["h2","何时使用"]],meta:{category:"Pro Components",subtitle:"模态框",type:"Feedback",title:"Modal",filename:"components-pro/modal/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Modal"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","key"],["td","唯一键， 当destroyOnClose为false时，必须指定key。为了避免与其他modal的key重复，可通过Modal.key()来获取唯一key。"],["td","string"],["td"]],["tr",["td","title"],["td","标题"],["td","ReactNode"],["td"]],["tr",["td","header"],["td","是否显示头部"],["td","boolean"],["td"]],["tr",["td","closable"],["td","显示右上角关闭按钮"],["td","boolean"],["td","true"]],["tr",["td","movable"],["td","可移动， drawer无法移动"],["td","boolean"],["td","true"]],["tr",["td","fullScreen"],["td","全屏显示"],["td","boolean"],["td","false"]],["tr",["td","maskClosable"],["td","点击蒙层是否允许关闭"],["td","boolean"],["td","false"]],["tr",["td","keyboardClosable"],["td","按esc键是否允许关闭"],["td","boolean"],["td","true"]],["tr",["td","destroyOnClose"],["td","关闭时是否销毁"],["td","boolean"],["td","true"]],["tr",["td","footer"],["td","底部内容"],["td","ReactNode或",["code","(okBtn: ReactNode, cancelBtn: ReactNode) => ReactNode"]],["td"]],["tr",["td","okText"],["td","确认按钮文字"],["td","ReactNode"],["td","确定"]],["tr",["td","cancelText"],["td","取消按钮文字"],["td","ReactNode"],["td","取消"]],["tr",["td","onClose"],["td","关闭时回调，返回",["code","false"]," ",["code","Promise.resolve(false)"],"或",["code","Promise.reject()"],"不会关闭， 其他自动关闭"],["td","() => Promise","<","boolean",">"],["td"]],["tr",["td","onOk"],["td","点击确定回调，返回",["code","false"]," ",["code","Promise.resolve(false)"],"或",["code","Promise.reject()"],"不会关闭， 其他自动关闭"],["td","() => Promise","<","boolean",">"],["td"]],["tr",["td","onCancel"],["td","点击取消回调，返回",["code","false"]," ",["code","Promise.resolve(false)"],"或",["code","Promise.reject()"],"不会关闭， 其他自动关闭"],["td","() => Promise","<","boolean",">"],["td"]],["tr",["td","afterClose"],["td","关闭后回调"],["td","() => void"],["td"]],["tr",["td","drawer"],["td","抽屉模式"],["td","boolean"],["td","false"]],["tr",["td","okCancel"],["td","同时显示ok和cancel按钮，false的时候只显示ok按钮"],["td","boolean"],["td","true"]],["tr",["td","okFirst"],["td","ok按钮是否排在第一个"],["td","boolean"],["td","true"]],["tr",["td","okProps"],["td","ok按钮属性"],["td","object"],["td"]],["tr",["td","cancelProps"],["td","cancel按钮属性"],["td","object"],["td"]]]],["style","\n.code-box-demo .c7n-pro-btn {\n    margin-right: 8px;\n}\n"],["h3","ModalContainer"],["ul",["li",["p","使用Modal前，需要在页面Root内插入ModalContainer。如果路由切换时要清空所有Modal，需要在ModalContiner传入location，如下所示。"]],["li",["p","如要使用react-intl之类的多语言库，请将ModalContainer至于IntlProvider之下。"]]],["pre",{lang:"jsx harmony",highlighted:'import { ModalContainer } from <span class="token string">\'choerodon-ui/pro\'</span><span class="token comment" spellcheck="true">;</span>\nimport { withRouter } from <span class="token string">\'react-router\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token variable">@withRouter</span>\nclass App extends React<span class="token punctuation">.</span>Component {\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> { location } <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token comment" spellcheck="true">;</span>\n    return <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ModalContainer location<span class="token operator">=</span>{location} <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  }\n}\n\n<span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},["code","import { ModalContainer } from 'choerodon-ui/pro';\nimport { withRouter } from 'react-router';\n\n@withRouter\nclass App extends React.Component {\n  render() {\n    const { location } = this.props;\n    return (\n      <div>\n        <ModalContainer location={location} />\n      </div>\n    );\n  }\n}\n\nrender(\n  <App />\n  , mountNode\n)"]],["h3","Modal.open"],["p","Modal.open()返回一个对象，该对象具有如下方法："],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"]]],["tbody",["tr",["td","close(destroy)"],["td","关闭"],["td",["code","destroy"]," - 是否销毁"]],["tr",["td","open()"],["td","打开"],["td"]],["tr",["td","update(props)"],["td","更新"],["td"]]]],["h3","props.modal"],["p","Modal会向内部组件注入modal对象，该对象具有如下属性与方法："],["table",["thead",["tr",["th","名称"],["th","说明"],["th","参数"]]],["tbody",["tr",["td","handleOk(callback)"],["td","注册响应ok按钮的钩子，返回值为false将阻止关闭"],["td",["code","callback"]," - 钩子"]],["tr",["td","handleCancel(callback)"],["td","注册响应cancel按钮的钩子，返回值为false将阻止关闭"],["td",["code","callback"]," - 钩子"]],["tr",["td","close(destroy)"],["td","关闭"],["td",["code","destroy"]," - 是否销毁"]],["tr",["td","update(props)"],["td","更新"],["td"]],["tr",["td","props"],["td","modal的props"],["td"]]]]]}}});