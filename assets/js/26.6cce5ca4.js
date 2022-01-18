(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{428:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"拖拽创建节点-dnd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拖拽创建节点-dnd"}},[t._v("#")]),t._v(" 拖拽创建节点 Dnd")]),t._v(" "),a("blockquote",[a("p",[t._v("在流程图编辑场景中比起通过代码配置注册节点以外，我们可能更需要通过图形用户界面来操作创建流程图，这时候就可以通过拖拽的方式来实现。")])]),t._v(" "),a("p",[t._v("拖拽需要结合图形面板来实现，步骤：创建面板 → 拖拽初始化 → 监听drop事件创建节点")]),t._v(" "),a("p",[t._v("示例如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("lf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dnd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startDrag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("节点")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/logicflow-base18-odj3g?fontsize=14&hidenavigation=1&theme=dark&view=preview",title:"logicflow-base18",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}}),t._v(" "),a("p",[t._v("通过上面的代码可以看出，将节点通过"),a("code",[t._v("div")]),t._v("标签+"),a("code",[t._v("css")]),t._v("样式的方式绘制到面板中，并为其绑定"),a("code",[t._v("onMouseDown")]),t._v("事件，当拖拽图形时，会触发"),a("code",[t._v("lf.dnd.startDrag")]),t._v("函数，表示开始拖拽，并传入选中图形的配置，"),a("code",[t._v("startDrag")]),t._v("入参格式：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("lf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dnd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startDrag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" NodeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n\ntype NodeConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不建议直接传id, logicflow id不允许重复")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TextConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Record"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unknown"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("拖拽结束鼠标松开时，将当前鼠标的位置转换为画布上的坐标，并以此为节点的中心点坐标"),a("code",[t._v("x")]),t._v("、"),a("code",[t._v("y")]),t._v("，合并拖拽节点传入的"),a("code",[t._v("nodeConfig")]),t._v("，监听到drop事件后会调用"),a("code",[t._v("lf.addNode")]),t._v("方法创建节点。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果是用图片作为配置面板中添加节点的元素，需要将其设置为不可拖动的。详细请参考"),a("a",{attrs:{href:"https://github.com/didi/LogicFlow/issues/267",target:"_blank",rel:"noopener noreferrer"}},[t._v("#267"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("使用拖拽面板插件")])]),t._v(" "),a("p",[t._v("LogicFlow在extension中内置了"),a("strong",[t._v("拖拽面板插件")]),t._v("，如果不想自定义图形面板，可以使用此插件快速实现。详情见"),a("RouterLink",{attrs:{to:"/guide/extension/component-dnd-panel.html"}},[t._v("拖拽面板")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);