webpackJsonp([24],{"6sJS":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mtWM"),i=a.n(l),r=a("2uFj"),n=a("0xDb"),o={data:function(){return{auth_name:"",selectClass:"el-icon-arrow-down",content_show:!1,forms:{product_type:[]},tableData:[],currentPage:1,page_size:15,total:0,dialogVisible:!1,formLabelAlign:{title:"",summary:"",icon:"",ico_name:"",status:0,product_type:[],release_time:"",create_user:"",create_time:"",link:""},rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"}],publish_time:[{required:!0,message:"请输入内容",trigger:"blur"}],create_user:[{required:!0}],modify_user:[{required:!0}],modify_time:[{required:!0}]},product_type_list:[],token:""}},mounted:function(){this.auth_name=n.e.getItem(r.authName,"healthcare"),this.token=n.e.getItem(r.authToken,"healthcare"),this.getProductList("1","15"),this.getdDictionaryInfo()},methods:{handleSizeChange:function(e){this.getProductList(this.currentPage,e)},handleCurrentChange:function(e){this.getProductList(e,this.page_size)},openAddDialog:function(){this.formLabelAlign={title:"",summary:"",icon:"",ico_name:"",status:0,product_type:[],release_time:"",create_user:this.auth_name,create_time:Object(n.c)(),link:""},this.dialogVisible=!0},beforeUpload:function(e){var t=this,a=new window.FormData;return a.append("file",e),i.a.post("core/file/upload",a,{headers:{"Content-Type":"multipart/form-data",token:this.token}}).then(function(a){if(0==a.code){a.data.url;t.formLabelAlign.ico_name=e.name,t.formLabelAlign.icon=a.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},moreSelect:function(){"el-icon-arrow-down"==this.selectClass?(this.selectClass="el-icon-arrow-up",this.content_show=!0):(this.selectClass="el-icon-arrow-down",this.content_show=!1)},onSubmit:function(){this.getProductList("1","15")},reset:function(){this.forms={product_type:""},this.getProductList("1","15")},handleEdit:function(e,t){this.dialogVisible=!0;var a=t.product_type.split(",");this.formLabelAlign={product_id:t.product_id,title:t.title,summary:t.summary,icon:t.icon,ico_name:t.ico_name,status:t.status,product_type:a,release_time:t.release_time,create_user:t.create_user,create_time:t.create_time,link:t.link}},handleDelete:function(e,t){var a=this;this.$confirm("是否确认删除该条信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={product_id:t.product_id};a.submitProductInfo("content/product/delete",e,"删除成功!")}).catch(function(){})},addProductInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogVisible=!1;var a="",l="";t.formLabelAlign.hasOwnProperty("product_id")?(a="content/product/update",l="修改成功!"):(a="content/product/create",l="添加成功!"),t.formLabelAlign.product_type=t.formLabelAlign.product_type.join(","),t.submitProductInfo(a,t.formLabelAlign,l)})},getEditorContent:function(e){this.formLabelAlign.content=e},getProductList:function(e,t){var a={product_type:this.forms.product_type.join(","),page_index:e,page_size:t},l=this;i.a.get("content/product/pageList",{params:a}).then(function(e){if(0==e.code){var t=[],a=e.data,i=a.count,r=a.page_index,o=a.page_size;l.currentPage=r,l.page_size=o,l.total=i;for(var s=(r-1)*o,c=a.rows,u=0;u<c.length;u++){var m=c[u].status,d=c[u].is_jump,p="";null!=c[u].icon_info&&(p=c[u].icon_info.name),c[u].create_time=Object(n.f)(c[u].create_time),c[u].release_time=Object(n.f)(c[u].release_time),c[u].update_time=Object(n.f)(c[u].update_time);var _="已启用";0==m&&(_="未启用");var f="跳转";0==d&&(f="未跳转"),c[u].index=s+u+1,c[u].status_name=_,c[u].is_jump_name=f,c[u].ico_name=p,t.push(c[u])}l.tableData=t}},function(e){})},submitProductInfo:function(e,t,a){var l=this;i.a.post(e,t).then(function(e){0==e.code?(l.$message({type:"success",message:a}),l.getProductList(l.currentPage,l.page_size)):l.$message({type:"success",message:"操作失败:"+e.message})},function(e){})},getdDictionaryInfo:function(){var e=this;i.a.get("core/dictionary/list",{params:{code:"product_type"}}).then(function(t){0==t.code&&(e.product_type_list=t.data)},function(e){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-card",{attrs:{shadow:"always"}},[a("span",{staticClass:"content-title"},[e._v("产品管理")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.openAddDialog()}}},[e._v("新增")]),e._v(" "),e.content_show?a("div",{staticClass:"advanced-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.forms}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.forms.product_type,callback:function(t){e.$set(e.forms,"product_type",t)},expression:"forms.product_type"}},e._l(e.product_type_list,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1):e._e()],1)],1),e._v(" "),a("el-table",{attrs:{border:"",data:e.tableData}},[a("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"product_type",label:"类型",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"is_jump_name",label:"跳转方式",align:"center",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status_name",label:"状态",align:"center",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"release_time",label:"发布时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"修改时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_user",label:"修改者",align:"center",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"links",label:"链接地址",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"block pager"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,20,30],"page-size":e.page_size,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,width:"60%",top:"5vh","append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"el-dialog-news"},[a("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.formLabelAlign.product_type,callback:function(t){e.$set(e.formLabelAlign,"product_type",t)},expression:"formLabelAlign.product_type"}},e._l(e.product_type_list,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.formLabelAlign.title,callback:function(t){e.$set(e.formLabelAlign,"title",t)},expression:"formLabelAlign.title"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"描述",prop:"summary"}},[a("el-input",{model:{value:e.formLabelAlign.summary,callback:function(t){e.$set(e.formLabelAlign,"summary",t)},expression:"formLabelAlign.summary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否弹窗"}},[a("el-radio-group",{model:{value:e.formLabelAlign.is_jump,callback:function(t){e.$set(e.formLabelAlign,"is_jump",t)},expression:"formLabelAlign.is_jump"}},[a("el-radio",{attrs:{label:0}},[e._v("跳转联系我们")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("弹窗")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"源链接"}},[a("el-input",{model:{value:e.formLabelAlign.link,callback:function(t){e.$set(e.formLabelAlign,"link",t)},expression:"formLabelAlign.link"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("不启用")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"发布时间",prop:"release_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期","default-time":"01:01:01"},model:{value:e.formLabelAlign.release_time,callback:function(t){e.$set(e.formLabelAlign,"release_time",t)},expression:"formLabelAlign.release_time"}})],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"创建者",prop:"create_user"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_user,callback:function(t){e.$set(e.formLabelAlign,"create_user",t)},expression:"formLabelAlign.create_user"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_time,callback:function(t){e.$set(e.formLabelAlign,"create_time",t)},expression:"formLabelAlign.create_time"}})],1)],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addNewsInfo("formLabelAlign")}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(o,s,!1,function(e){a("t1lk")},"data-v-87512dde",null).exports;t.default=c},t1lk:function(e,t){}});
//# sourceMappingURL=24.7d949e64459858a032c4.js.map