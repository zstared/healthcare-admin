webpackJsonp([29],{bc38:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("mtWM"),i=n.n(o),l=(n("2uFj"),n("0xDb"),{data:function(){return{tableData:[],dialogVisible:!1,formLabelAlign:{word:""},rules:{word:[{required:!0,message:"请输入热词",trigger:"blur"}]}}},mounted:function(){this.getInfoList()},methods:{handleClose:function(){var t=this,e=this;this.$confirm("是否保存？",{showClose:!1}).then(function(){e.addInfo("formLabelAlign")}).catch(function(){t.dialogVisible=!1})},openAddDialog:function(){this.formLabelAlign={word:""},this.dialogVisible=!0},handleEdit:function(t,e){this.dialogVisible=!0,this.formLabelAlign={id:e.id,word:e.word}},handleDelete:function(t,e){var n=this;this.$confirm("是否确认删除该条信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={id:e.id};n.submitInfo("content/hotword/delete",t,"删除成功!")}).catch(function(){})},addInfo:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var n="",o="";e.formLabelAlign.hasOwnProperty("id")?(n="content/hotword/update",o="修改成功!"):(n="content/hotword/create",o="添加成功!"),e.submitInfo(n,e.formLabelAlign,o)})},getInfoList:function(){var t=this;i.a.get("content/hotword/list",{params:{}}).then(function(e){if(0==e.code){var n=[],o=e.data;console.log(o);for(var i=0;i<o.length;i++)o[i].index=i+1,n.push(o[i]);t.tableData=n}},function(t){})},submitInfo:function(t,e,n){var o=this;i.a.post(t,e).then(function(t){0==t.code?(o.$message({type:"success",message:n}),o.dialogVisible=!1,o.getInfoList()):o.$message({type:"success",message:"操作失败:"+t.message})},function(t){})}}}),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-card",{attrs:{shadow:"always"}},[n("span",{staticClass:"content-title"},[t._v("焦点TAB管理")]),t._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.openAddDialog()}}},[t._v("新增")])],1)],1),t._v(" "),n("el-table",{attrs:{border:"",data:t.tableData}},[n("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"80"}}),t._v(" "),n("el-table-column",{attrs:{prop:"word",label:"热词",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-dialog",{attrs:{title:"新增",visible:t.dialogVisible,width:"30%","append-to-body":!0,"before-close":t.handleClose,closeOnClickModal:!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"el-dialog-news"},[n("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:t.rules,"label-width":"80px",model:t.formLabelAlign}},[n("el-form-item",{attrs:{label:"热词",prop:"word"}},[n("el-input",{model:{value:t.formLabelAlign.word,callback:function(e){t.$set(t.formLabelAlign,"word",e)},expression:"formLabelAlign.word"}})],1)],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleClose}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addInfo("formLabelAlign")}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var r=n("VU/8")(l,a,!1,function(t){n("prql")},"data-v-1b7326f2",null).exports;e.default=r},prql:function(t,e){}});
//# sourceMappingURL=29.a21a061590afc9c311d3.js.map