webpackJsonp([34],{EOtK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mtWM"),i=a.n(l),n=a("2uFj"),o=a("0xDb"),s=a("gyMJ"),r={data:function(){return{auth_name:"",selectClass:"el-icon-arrow-down",content_show:!1,formNews:{cases_type:"",key_word:""},tableData:[],currentPage:1,page_size:15,total:0,dialogVisible:!1,formLabelAlign:{title:"",content:"",summary:"",icon:"",ico_name:"",bg_img:"",bg_img_name:"",bg_img2:"",bg_img2_name:"",source:"",status:0,is_home:0,cases_type:"",key_words:"",release_time:"",author:"",create_time:"",source_link:""},config:{initialFrameWidth:null,initialFrameHeight:350,serverUrl:s.b+"core/file/upload?token="+o.e.getItem(n.authToken,"healthcare"),imageActionName:s.b+"core/file/upload",zIndex:1e4},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}],release_time:[{required:!0,message:"请选择时间",trigger:"blur"}],cases_type:[{required:!0,message:"请选择类型"}]},cases_type_list:[],loading:null}},mounted:function(){this.auth_name=o.e.getItem(n.authName,"healthcare"),this.getNewsList("1","15"),this.getdDictionaryInfo()},methods:{handleSizeChange:function(e){this.getNewsList(this.currentPage,e)},handleCurrentChange:function(e){this.getNewsList(e,this.page_size)},handleClose:function(){var e=this,t=this;this.$confirm("是否保存？",{showClose:!1}).then(function(){t.addNewsInfo("formLabelAlign")}).catch(function(){e.dialogVisible=!1})},openAddDialog:function(){this.formLabelAlign={title:"",content:"",summary:"",icon:"",ico_name:"",bg_img:"",bg_img_name:"",bg_img2:"",bg_img2_name:"",source:"",status:0,is_home:0,cases_type:"",key_words:"",release_time:"",author:this.auth_name,create_time:Object(o.c)(),source_link:""},this.dialogVisible=!0},beforeUpload:function(e){var t=this,a=new window.FormData;return a.append("file",e),i.a.post("core/file/upload",a,{headers:{"Content-Type":"multipart/form-data",token:o.e.getItem(n.authToken,"healthcare")}}).then(function(a){if(0==a.code){a.data.url;t.formLabelAlign.ico_name=e.name,t.formLabelAlign.icon=a.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},beforeUploadBg:function(e){var t=this,a=new window.FormData;return a.append("file",e),i.a.post("core/file/upload",a,{headers:{"Content-Type":"multipart/form-data",token:o.e.getItem(n.authToken,"healthcare")}}).then(function(a){if(0==a.code){a.data.url;t.formLabelAlign.bg_img_name=e.name,t.formLabelAlign.bg_img=a.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},beforeUploadBg2:function(e){var t=this,a=new window.FormData;return a.append("file",e),i.a.post("core/file/upload",a,{headers:{"Content-Type":"multipart/form-data",token:o.e.getItem(n.authToken,"healthcare")}}).then(function(a){if(0==a.code){a.data.url;t.formLabelAlign.bg_img2_name=e.name,t.formLabelAlign.bg_img2=a.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},moreSelect:function(){"el-icon-arrow-down"==this.selectClass?(this.selectClass="el-icon-arrow-up",this.content_show=!0):(this.selectClass="el-icon-arrow-down",this.content_show=!1)},onSubmit:function(){this.getNewsList("1","15")},reset:function(){this.formNews={cases_type:"",key_word:""},this.getNewsList("1","15")},getDetail:function(e){var t=this;i.a.get("content/cases/details/"+e,{params:{}}).then(function(e){if(0==e.code){var a=e.data,l="",i="";null!=a.icon_info&&(l=a.icon_info.src,i=a.icon_info.name);var n="",s="";null!=a.bg_img_info&&(n=a.bg_img_info.src,s=a.bg_img_info.name);var r="",c="";null!=a.bg_img2_info&&(r=a.bg_img2_info.src,c=a.bg_img2_info.name),a.bg_img=n,a.bg_img_name=s,a.bg_img2=r,a.bg_img2_name=c,a.icon_src=l,a.ico_name=i,a.create_time=Object(o.f)(a.create_time),a.release_time=Object(o.f)(a.release_time),a.update_time=Object(o.f)(a.update_time),t.formLabelAlign=a,t.loading&&t.loading.close(),t.dialogVisible=!0}},function(e){})},handleEdit:function(e,t){this.dialogVisible=!0,this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),this.getDetail(t.cases_id)},handleDelete:function(e,t){var a=this;this.$confirm("是否确认删除该条信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={cases_id:t.cases_id};a.submitNewsInfo("content/cases/delete",e,"删除成功!")}).catch(function(){})},handleUp:function(e,t){var a={cases_id:t.cases_id};this.submitNewsInfo("content/cases/top",a,"置顶成功!")},addNewsInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a="",l="";t.formLabelAlign.hasOwnProperty("cases_id")?(a="content/cases/update",l="修改成功!"):(a="content/cases/create",l="添加成功!"),t.submitNewsInfo(a,t.formLabelAlign,l)})},getEditorContent:function(e){this.formLabelAlign.content=e},getNewsList:function(e,t){var a={cases_type:this.formNews.cases_type,key_word:this.formNews.key_word,page_index:e,page_size:t},l=this;i.a.get("content/cases/pageList",{params:a}).then(function(e){if(0==e.code){var t=[],a=e.data,i=a.count,n=a.page_index,s=a.page_size;l.currentPage=n,l.page_size=s,l.total=i;for(var r=(n-1)*s,c=a.rows,m=0;m<c.length;m++){var u=c[m].is_top,g=c[m].status,_="",f="";null!=c[m].icon_info&&(_=c[m].icon_info.src,f=c[m].icon_info.name);var d="",b="";null!=c[m].bg_img_info&&(d=c[m].bg_img_info.src,b=c[m].bg_img_info.name);var p="",h="";null!=c[m].bg_img2_info&&(p=c[m].bg_img2_info.src,h=c[m].bg_img2_info.name),c[m].bg_img=d,c[m].bg_img_name=b,c[m].bg_img2=p,c[m].bg_img2_name=h,c[m].create_time=Object(o.f)(c[m].create_time),c[m].release_time=Object(o.f)(c[m].release_time),c[m].update_time=Object(o.f)(c[m].update_time);var v="否";1==u&&(v="是");var w="未发布";1==g&&(w="已发布"),c[m].index=r+m+1,c[m].is_top_name=v,c[m].status_name=w,c[m].icon_src=_,c[m].ico_name=f,t.push(c[m])}l.tableData=t}},function(e){})},submitNewsInfo:function(e,t,a){console.log(t);var l=this;i.a.post(e,t).then(function(e){0==e.code?(l.$message({type:"success",message:a}),l.dialogVisible=!1,l.getNewsList(l.currentPage,l.page_size)):l.$message({type:"success",message:"操作失败:"+e.message})},function(e){})},getdDictionaryInfo:function(){var e=this;i.a.get("core/dictionary/list",{params:{code:"case_type"}}).then(function(t){0==t.code&&(e.cases_type_list=t.data)},function(e){})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-card",{attrs:{shadow:"always"}},[a("span",{staticClass:"content-title"},[e._v("合作案例管理")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.openAddDialog()}}},[e._v("新增")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.moreSelect}},[a("i",{class:e.selectClass}),e._v("更多选项")]),e._v(" "),e.content_show?a("div",{staticClass:"advanced-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formNews}},[a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formNews.cases_type,callback:function(t){e.$set(e.formNews,"cases_type",t)},expression:"formNews.cases_type"}},e._l(e.cases_type_list,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"关键字"}},[a("el-input",{model:{value:e.formNews.key_word,callback:function(t){e.$set(e.formNews,"key_word",t)},expression:"formNews.key_word"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1):e._e()],1)],1),e._v(" "),a("el-table",{attrs:{border:"",data:e.tableData}},[a("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cases_type",label:"类型",align:"center",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"icon_src",label:"icon",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.icon_src,alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bg_img",label:"首页列表背景",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.bg_img,alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"bg_img2",label:"列表封面背景",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.bg_img2,alt:""}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"is_top_name",label:"是否置顶",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status_name",label:"发布状态",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"is_home",label:"首页页面显示",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.is_home?a("span",[e._v("是")]):a("span",[e._v("否")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"update_user",label:"修改者",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update_time",label:"修改时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),t.row.is_top?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleUp(t.$index,t.row)}}},[e._v("取消置顶")]):a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleUp(t.$index,t.row)}}},[e._v("置顶")])]}}])})],1),e._v(" "),a("div",{staticClass:"block pager"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,20,30],"page-size":e.page_size,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,width:"60%",top:"5vh","append-to-body":!0,"before-close":e.handleClose,closeOnClickModal:!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"el-dialog-news"},[a("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.formLabelAlign.title,callback:function(t){e.$set(e.formLabelAlign,"title",t)},expression:"formLabelAlign.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"icon图 图片建议尺寸:600×400",prop:"ico_name"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.ico_name,callback:function(t){e.$set(e.formLabelAlign,"ico_name",t)},expression:"formLabelAlign.ico_name"}})],1),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"core/file/upload",multiple:"",limit:1,"before-upload":e.beforeUpload,"show-file-list":!1}},[a("el-button",{attrs:{size:"medium",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"首页列表背景图片",prop:"bg_img_name"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.bg_img_name,callback:function(t){e.$set(e.formLabelAlign,"bg_img_name",t)},expression:"formLabelAlign.bg_img_name"}})],1),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"core/file/upload",multiple:"",limit:1,"before-upload":e.beforeUploadBg,"show-file-list":!1}},[a("el-button",{attrs:{size:"medium",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"列表封面背景图片",prop:"bg_img2_name"}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.bg_img2_name,callback:function(t){e.$set(e.formLabelAlign,"bg_img2_name",t)},expression:"formLabelAlign.bg_img2_name"}})],1),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"core/file/upload",multiple:"",limit:1,"before-upload":e.beforeUploadBg2,"show-file-list":!1}},[a("el-button",{attrs:{size:"medium",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"content"}}),e._v(" "),a("div",{staticClass:"editor-container"},[a("ueditor",{ref:"ueditor",attrs:{defaultMsg:e.formLabelAlign.content,config:e.config},on:{postEditorToParent:e.getEditorContent}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"文章作者",prop:"author"}},[a("el-input",{model:{value:e.formLabelAlign.author,callback:function(t){e.$set(e.formLabelAlign,"author",t)},expression:"formLabelAlign.author"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"关键字(用逗号隔开)"}},[a("el-input",{model:{value:e.formLabelAlign.key_words,callback:function(t){e.$set(e.formLabelAlign,"key_words",t)},expression:"formLabelAlign.key_words"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"摘要"}},[a("el-input",{model:{value:e.formLabelAlign.summary,callback:function(t){e.$set(e.formLabelAlign,"summary",t)},expression:"formLabelAlign.summary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"来源"}},[a("el-input",{model:{value:e.formLabelAlign.source,callback:function(t){e.$set(e.formLabelAlign,"source",t)},expression:"formLabelAlign.source"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发布状态"}},[a("el-radio-group",{model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}},[a("el-radio",{attrs:{label:0}},[e._v("未发布[预览]")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("已发布")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"是否首页显示"}},[a("el-radio-group",{model:{value:e.formLabelAlign.is_home,callback:function(t){e.$set(e.formLabelAlign,"is_home",t)},expression:"formLabelAlign.is_home"}},[a("el-radio",{attrs:{label:0}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("是")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"发布时间",prop:"release_time"}},[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期","default-time":"01:01:01"},model:{value:e.formLabelAlign.release_time,callback:function(t){e.$set(e.formLabelAlign,"release_time",t)},expression:"formLabelAlign.release_time"}})],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"创建者",prop:"author"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_user,callback:function(t){e.$set(e.formLabelAlign,"create_user",t)},expression:"formLabelAlign.create_user"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_time,callback:function(t){e.$set(e.formLabelAlign,"create_time",t)},expression:"formLabelAlign.create_time"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"源链接"}},[a("el-input",{model:{value:e.formLabelAlign.source_link,callback:function(t){e.$set(e.formLabelAlign,"source_link",t)},expression:"formLabelAlign.source_link"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"行业类型",prop:"cases_type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.cases_type,callback:function(t){e.$set(e.formLabelAlign,"cases_type",t)},expression:"formLabelAlign.cases_type"}},e._l(e.cases_type_list,function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addNewsInfo("formLabelAlign")}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var m=a("VU/8")(r,c,!1,function(e){a("YNbd")},"data-v-08892782",null).exports;t.default=m},YNbd:function(e,t){}});
//# sourceMappingURL=34.b2e0f953f2012714b22d.js.map