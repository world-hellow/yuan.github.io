webpackJsonp([1],{dVt6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",isShow:!0,inputValue:"我是父组件中的值"}},components:{"base-checkbox":function(e){return new Promise(function(e){e()}).then(function(){var n=[t("EZP1")];e.apply(null,n)}.bind(this)).catch(t.oe)}},methods:{test:function(){console.log(666)}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n    "+e._s(e.isShow)+"\n    "),e._v(" "),t("base-checkbox",{model:{value:e.isShow,callback:function(n){e.isShow=n},expression:"isShow"}}),e._v(" "),t("BaseCheckbox",{model:{value:e.isShow,callback:function(n){e.isShow=n},expression:"isShow"}}),e._v("\n    "+e._s(e.inputValue)+"\n    "),t("BaseInput"),e._v(" "),t("BaseInput",{model:{value:e.inputValue,callback:function(n){e.inputValue=n},expression:"inputValue"}}),e._v(" "),t("BaseInput",{attrs:{value:"右键查看组件yzx属性",yzx:2}}),e._v(" "),t("BaseInput",{attrs:{value:"事件未绑定native修饰符"},on:{click:e.test}}),e._v(" "),t("BaseInput",{attrs:{value:"事件绑定了native修饰符"},nativeOn:{click:function(n){return e.test(n)}}}),e._v(" "),t("BaseInput",{on:{focus:e.test},model:{value:e.msg,callback:function(n){e.msg=n},expression:"msg"}})],1)},staticRenderFns:[]};var a=t("VU/8")(s,o,!1,function(e){t("x+yf")},"data-v-922e6d5c",null);n.default=a.exports},"x+yf":function(e,n){}});
//# sourceMappingURL=1.0c0984a964aa4a2efe17.js.map