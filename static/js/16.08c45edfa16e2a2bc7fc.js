webpackJsonp([16],{b83J:function(e,t){},uL8u:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("2uFj"),a=n("0xDb"),i=n("gyMJ"),r={name:"HelloWorld",data:function(){return{defaultMsg:"",config:{initialFrameWidth:null,initialFrameHeight:350,serverUrl:i.b+"core/file/upload?token="+a.e.getItem(o.authToken,"healthcare"),imageActionName:i.b+"core/file/upload",header:{"Content-Type":"multipart/form-data",token:a.e.getItem(o.authToken,"healthcare")}}}},methods:{getEditorContent:function(e){console.log(e)}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("div",{staticClass:"editor-container"},[t("ueditor",{ref:"ueditor",attrs:{defaultMsg:this.defaultMsg,config:this.config},on:{postEditorToParent:this.getEditorContent}})],1)])},staticRenderFns:[]};var s=n("VU/8")(r,l,!1,function(e){n("b83J")},"data-v-c7aec8be",null).exports;t.default=s}});
//# sourceMappingURL=16.08c45edfa16e2a2bc7fc.js.map