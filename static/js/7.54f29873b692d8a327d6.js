webpackJsonp([7],{"2K2L":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("mtWM"),l=a.n(o),i=a("2uFj"),n=a("0xDb"),r={data:function(){return{auth_name:"",selectClass:"el-icon-arrow-down",content_show:!1,forms:{foot_type:""},tableData:[],currentPage:1,page_size:15,total:0,dialogVisible:!1,formLabelAlign:{title:"",status:0,foot_type:"",release_time:"",create_user:"",create_time:"",fileList:[],link:""},rules:{title:[{required:!0,message:"请输入友链名称",trigger:"blur"}],status:[{required:!0}],release_time:[{required:!0,trigger:"blur"}]},token:"",foot_type_list:[]}},mounted:function(){this.auth_name=n.e.getItem(i.authName,"healthcare"),this.token=n.e.getItem(i.authToken,"healthcare"),this.getInfoList("1","15"),this.getDictionaryInfo()},methods:{handleSizeChange:function(e){this.getInfoList(this.currentPage,e)},handleCurrentChange:function(e){this.getInfoList(e,this.page_size)},handleClose:function(){var e=this,t=this;this.$confirm("是否保存？",{showClose:!1}).then(function(){t.addInfo("formLabelAlign")}).catch(function(){e.dialogVisible=!1})},openAddDialog:function(){this.formLabelAlign={title:"",status:0,foot_type:"",release_time:"",create_user:this.auth_name,create_time:Object(n.c)(),icon:"",fileList:[],link:""},this.dialogVisible=!0},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){if("ready"!==e.status)return this.$confirm("确定移除 "+e.name+"？")},handleRemove:function(e,t){if("ready"!==e.status){for(var a="",o=0;o<t.length;o++)a+=t[o].code,o!=t.length-1&&(a+=",");this.formLabelAlign.icon=a,this.formLabelAlign.fileList=t}},beforeUpload:function(e){var t=this,a=new window.FormData;return a.append("file",e),l.a.post("core/file/upload",a,{headers:{"Content-Type":"multipart/form-data",token:this.token}}).then(function(a){0==a.code&&(t.formLabelAlign.icon?t.formLabelAlign.icon=t.formLabelAlign.icon+","+a.data.code:t.formLabelAlign.icon=a.data.code,t.formLabelAlign.fileList.push({name:e.name,url:a.data.url,code:a.data.code}),t.$message({type:"success",message:"上传成功！"}))}),!1},moreSelect:function(){"el-icon-arrow-down"==this.selectClass?(this.selectClass="el-icon-arrow-up",this.content_show=!0):(this.selectClass="el-icon-arrow-down",this.content_show=!1)},onSubmit:function(){this.getInfoList("1","15")},reset:function(){this.forms={foot_type:""},this.getInfoList("1","15")},handleEdit:function(e,t){this.dialogVisible=!0,this.formLabelAlign={foot_id:t.foot_id,title:t.title,status:t.status,foot_type:t.foot_type,release_time:t.release_time,create_user:t.create_user,create_time:t.create_time,fileList:t.fileList,icon:t.icon,link:t.link}},handleDelete:function(e,t){var a=this;this.$confirm("是否确认删除该条信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={foot_id:t.foot_id};a.submitInfo("content/foot/delete",e,"删除成功!")}).catch(function(){})},handleStatus:function(e,t){var a={foot_id:t.foot_id};this.submitInfo("content/foot/updateStatus",a,"操作成功!")},addInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a="",o="";t.formLabelAlign.hasOwnProperty("foot_id")?(a="content/foot/update",o="修改成功!"):(a="content/foot/create",o="添加成功!"),t.submitInfo(a,t.formLabelAlign,o)})},getEditorContent:function(e){this.formLabelAlign.content=e},getInfoList:function(e,t){var a={foot_type:this.forms.foot_type,page_index:e,page_size:t},o=this;l.a.get("content/foot/pageList",{params:a}).then(function(e){if(0==e.code){var t=[],a=e.data,l=a.count,i=a.page_index,r=a.page_size;o.currentPage=i,o.page_size=r,o.total=l;for(var s=(i-1)*r,c=a.rows,f=0;f<c.length;f++){var u=c[f].status;c[f].create_time=Object(n.f)(c[f].create_time),c[f].release_time=Object(n.f)(c[f].release_time),c[f].update_time=Object(n.f)(c[f].update_time);var m="启用";0==u&&(m="未启用");var d=[];if(c[f].icon_info)for(var p=c[f].icon_info,g=0;g<p.length;g++)d.push({name:p[g].name,url:p[g].src,code:p[g].code});c[f].fileList=d,c[f].index=s+f+1,c[f].status_name=m,t.push(c[f])}o.tableData=t}},function(e){})},submitInfo:function(e,t,a){var o=this;l.a.post(e,t).then(function(e){0==e.code?(o.$message({type:"success",message:a}),o.dialogVisible=!1,o.getInfoList(o.currentPage,o.page_size)):o.$message({type:"success",message:"操作失败:"+e.message})},function(e){})},getDictionaryInfo:function(){var e=this;l.a.get("core/dictionary/list",{params:{code:"foot_type"}}).then(function(t){0==t.code&&(e.foot_type_list=t.data)},function(e){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-card",{attrs:{shadow:"always"}},[a("span",{staticClass:"content-title"},[e._v("foot管理")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.openAddDialog()}}},[e._v("新增")]),e._v(" "),e.content_show?a("div",{staticClass:"advanced-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.forms}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.forms.foot_type,callback:function(t){e.$set(e.forms,"foot_type",t)},expression:"forms.foot_type"}},e._l(e.foot_type_list,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1):e._e()],1)],1),e._v(" "),a("el-table",{attrs:{border:"",data:e.tableData}},[a("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"友链名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"foot_type",label:"分类",align:"center",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status_name",label:"状态",align:"center",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"release_time",label:"发布时间",align:"center",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_user",label:"更新人",align:"center",width:"170"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),t.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleStatus(t.$index,t.row)}}},[e._v("取消启用")]):a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleStatus(t.$index,t.row)}}},[e._v("启用")])]}}])})],1),e._v(" "),a("div",{staticClass:"block pager"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,20,30],"page-size":e.page_size,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,width:"60%",top:"5vh","append-to-body":!0,"before-close":e.handleClose,closeOnClickModal:!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"el-dialog-news"},[a("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"友链名称",prop:"title"}},[a("el-input",{model:{value:e.formLabelAlign.title,callback:function(t){e.$set(e.formLabelAlign,"title",t)},expression:"formLabelAlign.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分类"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.foot_type,callback:function(t){e.$set(e.formLabelAlign,"foot_type",t)},expression:"formLabelAlign.foot_type"}},e._l(e.foot_type_list,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"源链接"}},[a("el-input",{model:{value:e.formLabelAlign.link,callback:function(t){e.$set(e.formLabelAlign,"link",t)},expression:"formLabelAlign.link"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否启用",prop:"status"}},[a("el-radio-group",{model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}},[a("el-radio",{attrs:{label:0}},[e._v("未启用")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("启用")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"图片(限制3张)"}},[a("el-col",{attrs:{span:15}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"core/file/upload","on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.formLabelAlign.fileList,"before-upload":e.beforeUpload,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"发布时间",prop:"release_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期","default-time":"01:01:01"},model:{value:e.formLabelAlign.release_time,callback:function(t){e.$set(e.formLabelAlign,"release_time",t)},expression:"formLabelAlign.release_time"}})],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"创建者"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_user,callback:function(t){e.$set(e.formLabelAlign,"create_user",t)},expression:"formLabelAlign.create_user"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_time,callback:function(t){e.$set(e.formLabelAlign,"create_time",t)},expression:"formLabelAlign.create_time"}})],1)],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addInfo("formLabelAlign")}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(e){a("XK8t")},"data-v-ce5edac2",null).exports;t.default=c},XK8t:function(e,t){}});
//# sourceMappingURL=7.54f29873b692d8a327d6.js.map