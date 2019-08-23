webpackJsonp([110],{2201:function(t,n){t.exports={content:["section",["p","当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。"]],meta:{category:"Components",subtitle:"时间选择框",type:"Data Entry",title:"TimePicker",filename:"components/time-picker/index.zh-CN.md"},description:["section",["p","输入或选择时间的控件。"],["h2","何时使用"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#方法",title:"方法"},"方法"]]],api:["section",["h2","API"],["hr"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'13:30:56\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","import moment from 'moment';\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","addon"],["td","选择框底部显示自定义的内容"],["td","function"],["td","无"]],["tr",["td","allowEmpty"],["td","是否展示清除按钮"],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","选择器类名"],["td","string"],["td","''"]],["tr",["td","clearText"],["td","清除按钮的提示文案"],["td","string"],["td","clear"]],["tr",["td","defaultOpenValue"],["td","当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"]],["tr",["td","defaultValue"],["td","默认时间"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","disabled"],["td","禁用全部操作"],["td","boolean"],["td","false"]],["tr",["td","disabledHours"],["td","禁止选择部分小时选项"],["td","function()"],["td","无"]],["tr",["td","disabledMinutes"],["td","禁止选择部分分钟选项"],["td","function(selectedHour)"],["td","无"]],["tr",["td","disabledSeconds"],["td","禁止选择部分秒选项"],["td","function(selectedHour, selectedMinute)"],["td","无"]],["tr",["td","format"],["td","展示的时间格式"],["td","string"],["td",'"HH:mm:ss"']],["tr",["td","getPopupContainer"],["td","定义浮层的容器，默认为 body 上新建 div"],["td","function(trigger)"],["td","无"]],["tr",["td","hideDisabledOptions"],["td","隐藏禁止选择的选项"],["td","boolean"],["td","false"]],["tr",["td","hourStep"],["td","小时选项间隔"],["td","number"],["td","1"]],["tr",["td","inputReadOnly"],["td","设置输入框为只读（避免在移动设备上打开虚拟键盘）"],["td","boolean"],["td","false"]],["tr",["td","minuteStep"],["td","分钟选项间隔"],["td","number"],["td","1"]],["tr",["td","open"],["td","面板是否打开"],["td","boolean"],["td","false"]],["tr",["td","placeholder"],["td","没有值的时候显示的内容"],["td","string"],["td",'"请选择时间"']],["tr",["td","popupClassName"],["td","弹出层类名"],["td","string"],["td","''"]],["tr",["td","secondStep"],["td","秒选项间隔"],["td","number"],["td","1"]],["tr",["td","use12Hours"],["td","使用 12 小时制，为 true 时 ",["code","format"]," 默认为 ",["code","h:mm:ss a"]],["td","boolean"],["td","false"]],["tr",["td","value"],["td","当前时间"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"]],["tr",["td","onChange"],["td","时间发生变化的回调"],["td","function(time: moment, timeString: string): void"],["td","无"]],["tr",["td","onOpenChange"],["td","面板打开/关闭时的回调"],["td","(open: boolean): void"],["td","无"]]]],["h2","方法"],["table",["thead",["tr",["th","名称"],["th","描述"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"]],["tr",["td","focus()"],["td","获取焦点"]]]],["style",".code-box-demo .c7n-time-picker { margin: 0 8px 12px 0; }"]]}}});