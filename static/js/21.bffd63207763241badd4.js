webpackJsonp([21],{"+ju/":function(e,t){},Sp9y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mtWM"),l=a.n(i),n=a("2uFj"),o=a("0xDb"),r={data:function(){return{auth_name:"",selectClass:"el-icon-arrow-down",content_show:!1,tableData:[],dialogVisible:!1,formLabelAlign:{title:"",summary:"",icon:"",ico_name:"",sort_no:1,status:0,link:""},rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"}],publish_time:[{required:!0,message:"请输入内容",trigger:"blur"}],create_user:[{required:!0}],modify_user:[{required:!0}],modify_time:[{required:!0}]},token:"",sort_no_list:[{value:"1",label:"1"},{value:"2",label:"2"}]}},mounted:function(){this.auth_name=o.e.getItem(n.authName,"healthcare"),this.token=o.e.getItem(n.authToken,"healthcare"),this.getSolutionList("1","15"),this.getdDictionaryInfo()},methods:{handleSizeChange:function(e){this.getSolutionList(this.currentPage,e)},handleCurrentChange:function(e){this.getSolutionList(e,this.page_size)},openAddDialog:function(){this.formLabelAlign={title:"",summary:"",icon:"",ico_name:"",sort_no:1,status:0,link:""},this.dialogVisible=!0},beforeUpload:function(e){var t=this,a=new window.FormData;return a.append("file",e),l.a.post("core/file/upload",a,{headers:{"Content-Type":"multipart/form-data",token:this.token}}).then(function(a){if(0==a.code){a.data.url;t.formLabelAlign.ico_name=e.name,t.formLabelAlign.icon=a.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},moreSelect:function(){"el-icon-arrow-down"==this.selectClass?(this.selectClass="el-icon-arrow-up",this.content_show=!0):(this.selectClass="el-icon-arrow-down",this.content_show=!1)},onSubmit:function(){this.getSolutionList("1","15")},reset:function(){this.getSolutionList("1","15")},handleEdit:function(e,t){this.dialogVisible=!0,this.formLabelAlign={tab_id:t.tab_id,title:t.title,summary:t.summary,icon:t.icon,ico_name:t.ico_name,sort_no:t.sort_no,status:t.status,link:t.link}},handleDelete:function(e,t){var a=this;this.$confirm("是否确认删除该条信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={tab_id:t.tab_id};a.submitSolutionInfo("content/tab/delete",e,"删除成功!")}).catch(function(){})},addNewsInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogVisible=!1;var a="",i="";t.formLabelAlign.hasOwnProperty("tab_id")?(a="content/tab/update",i="修改成功!"):(a="content/tab/create",i="添加成功!"),t.submitSolutionInfo(a,t.formLabelAlign,i)})},getEditorContent:function(e){this.formLabelAlign.content=e},getSolutionList:function(e,t){var a={page_index:e,page_size:t},i=this;l.a.get("content/tab/pageList",{params:a}).then(function(e){if(0==e.code){var t=[],a=e.data,l=a.count,n=a.page_index,r=a.page_size;i.currentPage=n,i.page_size=r,i.total=l;for(var s=(n-1)*r,c=a.rows,u=0;u<c.length;u++){var m=c[u].status,d="",f="";null!=c[u].icon_info&&(d=c[u].icon_info.src,f=c[u].icon_info.name),c[u].create_time=Object(o.f)(c[u].create_time),c[u].release_time=Object(o.f)(c[u].release_time),c[u].update_time=Object(o.f)(c[u].update_time);var b="显示";0==m&&(b="未显示"),c[u].index=s+u+1,c[u].status_name=b,c[u].icon_src=d,c[u].ico_name=f,t.push(c[u])}i.tableData=t}},function(e){})},submitSolutionInfo:function(e,t,a){var i=this;l.a.post(e,t).then(function(e){0==e.code?(i.$message({type:"success",message:a}),i.getSolutionList(i.currentPage,i.page_size)):i.$message({type:"success",message:"操作失败:"+e.message})},function(e){})},getdDictionaryInfo:function(){var e=this;l.a.get("core/dictionary/list",{params:{code:"tab_type"}}).then(function(t){0==t.code&&(e.tab_type_list=t.data)},function(e){})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-card",{attrs:{shadow:"always"}},[a("span",{staticClass:"content-title"},[e._v("焦点TAB管理")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.openAddDialog()}}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{attrs:{border:"",data:e.tableData}},[a("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status_name",label:"状态",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"release_time",label:"发布时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_user",label:"修改者",align:"center",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"修改时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"block pager"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,20,30],"page-size":e.page_size,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,width:"60%",top:"5vh","append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"el-dialog-news"},[a("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.formLabelAlign.title,callback:function(t){e.$set(e.formLabelAlign,"title",t)},expression:"formLabelAlign.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"icon图 图片建议尺寸:600×400",prop:"ico_name"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.ico_name,callback:function(t){e.$set(e.formLabelAlign,"ico_name",t)},expression:"formLabelAlign.ico_name"}})],1),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"core/file/upload",multiple:"",limit:1,"before-upload":e.beforeUpload,"show-file-list":!1}},[a("el-button",{attrs:{size:"medium",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"摘要",prop:"summary"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:33},placeholder:"请输入内容"},model:{value:e.formLabelAlign.summary,callback:function(t){e.$set(e.formLabelAlign,"summary",t)},expression:"formLabelAlign.summary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}},[a("el-radio",{attrs:{label:0}},[e._v("不显示")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("显示")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.sort_no,callback:function(t){e.$set(e.formLabelAlign,"sort_no",t)},expression:"formLabelAlign.sort_no"}},e._l(e.sort_no_list,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"发布时间",prop:"release_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期","default-time":"01:01:01"},model:{value:e.formLabelAlign.release_time,callback:function(t){e.$set(e.formLabelAlign,"release_time",t)},expression:"formLabelAlign.release_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"源链接"}},[a("el-input",{model:{value:e.formLabelAlign.link,callback:function(t){e.$set(e.formLabelAlign,"link",t)},expression:"formLabelAlign.link"}})],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addNewsInfo("formLabelAlign")}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(e){a("+ju/")},"data-v-50a0b9fe",null).exports;t.default=c}});
//# sourceMappingURL=21.bffd63207763241badd4.js.map