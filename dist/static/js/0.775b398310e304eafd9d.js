webpackJsonp([0],{"4FGI":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("mvHQ"),i=n.n(s),o={name:"自定义指令测试",data:function(){return{instructionValue:"我是绑定值"}},directives:{focus2:{bind:function(t,e,n){console.log(t),console.log(i()(e)),console.log(n)},inserted:function(t){t.focus()}}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("自定义指令")]),this._v(" "),e("h6",[this._v("全局自定义指令v-focus")]),this._v(" "),e("h6",[this._v("局部自定义指令v-focus2")]),this._v(" "),e("input",{directives:[{name:"focus2",rawName:"v-focus2:params.stop.prevent",value:this.instructionValue,expression:"instructionValue",arg:"params",modifiers:{stop:!0,prevent:!0}}],attrs:{type:"text"}})])},staticRenderFns:[]};var u=n("VU/8")(o,r,!1,function(t){n("4eDI")},"data-v-2ee66979",null);e.default=u.exports},"4eDI":function(t,e){},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(t,e,n){var s=n("FeBl"),i=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}}});
//# sourceMappingURL=0.775b398310e304eafd9d.js.map