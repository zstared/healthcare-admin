webpackJsonp([27],{"Dr/Q":function(e,t){},RdAl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),i=n.n(a),o=n("exGp"),l=n.n(o),r=n("mtWM"),s=n.n(r),c=n("2uFj"),m=n("0xDb"),u=n("gyMJ"),d={data:function(){return{auth_name:"",selectClass:"el-icon-arrow-down",content_show:!1,formNews:{news_type:"",key_word:""},tableData:[],currentPage:1,page_size:15,total:0,dialogVisible:!1,formLabelAlign:{title:"",content:"",summary:"",icon:"",icon_name:"",icon_m:"",icon_m_name:"",source:"",status:0,is_home:0,is_about:0,news_type:"",key_words:"",release_time:"",author:"",create_user:"",create_time:"",source_link:""},config:{initialFrameWidth:null,initialFrameHeight:350,serverUrl:u.b+"core/file/upload?token="+m.e.getItem(c.authToken,"healthcare"),imageActionName:u.b+"core/file/upload",zIndex:1e4},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],content:[{required:!0,message:"请输入内容"}],icon_name:[{required:!0,message:"请上传图片"}],icon_m_name:[{required:!0,message:"请上传图片"}],release_time:[{required:!0,message:"请选择时间"}],create_user:[{required:!0}],modify_user:[{required:!0}],modify_time:[{required:!0}],news_type:[{required:!0,message:"类型不能为空"}]},news_type_list:[],loading:null}},mounted:function(){this.auth_name=m.e.getItem(c.authName,"healthcare"),this.getInfoList("1","15"),this.getDictionaryInfo()},methods:{handleSizeChange:function(e){this.getInfoList(this.currentPage,e)},handleCurrentChange:function(e){this.getInfoList(e,this.page_size)},handleClose:function(){var e=this,t=this;this.$confirm("是否保存？",{showClose:!1}).then(function(){t.addInfo("formLabelAlign")}).catch(function(){e.dialogVisible=!1})},openAddDialog:function(){this.formLabelAlign={title:"",content:"",summary:"",icon:"",icon_name:"",icon_m:"",icon_m_name:"",source:"",status:0,is_home:0,is_about:0,news_type:"",key_words:"",release_time:"",author:this.auth_name,create_user:this.auth_name,create_time:Object(m.c)(),source_link:""},this.dialogVisible=!0},beforeUpload:function(e){var t=this,n=new window.FormData;return n.append("file",e),s.a.post("core/file/upload",n,{headers:{"Content-Type":"multipart/form-data",token:m.e.getItem(c.authToken,"healthcare")}}).then(function(n){if(0==n.code){n.data.url;t.formLabelAlign.icon_name=e.name,t.formLabelAlign.icon=n.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},beforeUploadMobile:function(e){var t=this,n=new window.FormData;return n.append("file",e),s.a.post("core/file/upload",n,{headers:{"Content-Type":"multipart/form-data",token:m.e.getItem(c.authToken,"healthcare")}}).then(function(n){if(0==n.code){n.data.url;t.formLabelAlign.icon_m_name=e.name,t.formLabelAlign.icon_m=n.data.code,t.formLabelAlign.icon_name=e.name,t.formLabelAlign.icon=n.data.code,t.$message({type:"success",message:"上传成功！"})}}),!1},moreSelect:function(){"el-icon-arrow-down"==this.selectClass?(this.selectClass="el-icon-arrow-up",this.content_show=!0):(this.selectClass="el-icon-arrow-down",this.content_show=!1)},onSubmit:function(){this.getInfoList("1","15")},reset:function(){this.formNews={news_type:"",key_word:""},this.getInfoList("1","15")},getDetail:function(e){var t=this;return l()(i.a.mark(function n(){var a,o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a={},o=t,n.next=4,s.a.get("app/news/details/"+e,{params:a}).then(function(e){if(0==e.code){var t=e.data,n="",a="";null!=t.icon_info&&(n=t.icon_info.src,a=t.icon_info.name);var i="",l="";null!=t.icon_m_info&&(i=t.icon_m_info.src,l=t.icon_m_info.name),t.icon_src=n,t.icon_name=a,t.icon_m_src=i,t.icon_m_name=l,t.news_type=t.news_type,t.create_time=Object(m.f)(t.create_time),t.release_time=Object(m.f)(t.release_time),t.update_time=Object(m.f)(t.update_time),o.formLabelAlign=t,o.closeLoading(),o.dialogVisible=!0}},function(e){});case 4:case"end":return n.stop()}},n,t)}))()},showLoading:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},closeLoading:function(){this.loading&&this.loading.close()},handleEdit:function(e,t){this.showLoading(),this.getDetail(t.news_id)},handleDelete:function(e,t){var n=this;this.$confirm("是否确认删除该条信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={news_id:t.news_id};n.submitInfo("app/news/delete",e,"删除成功!")}).catch(function(){})},handleUp:function(e,t){var n={news_id:t.news_id};this.submitInfo("app/news/top",n,"置顶成功!")},onCopy:function(e){alert("复制成功")},addInfo:function(e){var t=this;this.showLoading(),this.$refs[e].validate(function(e){if(!e)return t.closeLoading(),!1;var n="",a="";t.formLabelAlign.hasOwnProperty("news_id")?(n="app/news/update",a="修改成功!"):(n="app/news/create",a="添加成功!"),t.submitInfo(n,t.formLabelAlign,a)})},getEditorContent:function(e){this.formLabelAlign.content=e},getInfoList:function(e,t){var n={news_type:this.formNews.news_type,key_word:this.formNews.key_word,page_index:e,page_size:t},a=this;s.a.get("app/news/pageList",{params:n}).then(function(e){if(0==e.code){var t=[],n=e.data,i=n.count,o=n.page_index,l=n.page_size;a.currentPage=o,a.page_size=l,a.total=i;for(var r=(o-1)*l,s=n.rows,c=0;c<s.length;c++){var u=s[c].is_top,d=s[c].status,f="",_="";null!=s[c].icon_info&&(f=s[c].icon_info.src,_=s[c].icon_info.name);var p="",g="";null!=s[c].icon_m_info&&(p=s[c].icon_m_info.src,g=s[c].icon_m_info.name),s[c].create_time=Object(m.f)(s[c].create_time),s[c].release_time=Object(m.f)(s[c].release_time),s[c].update_time=Object(m.f)(s[c].update_time);var b="否";1==u&&(b="是");var h="未发布";1==d&&(h="已发布"),s[c].index=r+c+1,s[c].is_top_name=b,s[c].status_name=h,s[c].icon_src=f,s[c].icon_name=_,s[c].icon_m_src=p,s[c].icon_m_name=g,s[c].activity_id="",t.push(s[c])}a.tableData=t}},function(e){})},submitInfo:function(e,t,n){var a=this;s.a.post(e,t).then(function(e){a.closeLoading(),0==e.code?(a.$message({type:"success",message:n}),a.dialogVisible=!1,a.getInfoList(a.currentPage,a.page_size)):a.$message({type:"success",message:"操作失败:"+e.message})},function(e){a.closeLoading()})},getDictionaryInfo:function(){var e=this;s.a.get("core/dictionary/list",{params:{code:"news_type"}}).then(function(t){0==t.code&&(e.news_type_list=t.data)},function(e){})}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-card",{attrs:{shadow:"always"}},[n("span",{staticClass:"content-title"},[e._v("新闻资讯管理")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.openAddDialog()}}},[e._v("新增")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.moreSelect}},[n("i",{class:e.selectClass}),e._v("更多选项")]),e._v(" "),e.content_show?n("div",{staticClass:"advanced-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formNews}},[n("el-form-item",{attrs:{label:"类型"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formNews.news_type,callback:function(t){e.$set(e.formNews,"news_type",t)},expression:"formNews.news_type"}},e._l(e.news_type_list,function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1):e._e()],1)],1),e._v(" "),n("el-table",{attrs:{border:"",data:e.tableData}},[n("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{prop:"news_type",label:"新闻类型",align:"center",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{prop:"title",label:"新闻标题",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"icon_m_src",label:"icon",align:"center",width:"110"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.icon_m_src,alt:""}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"is_top_name",label:"新闻排序",align:"center",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"status_name",label:"发布状态",align:"center",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"release_time",label:"发布时间",align:"center",width:"160"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),t.row.is_top?n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleUp(t.$index,t.row)}}},[e._v("取消置顶")]):n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleUp(t.$index,t.row)}}},[e._v("置顶")]),e._v(" "),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"/pages/newsDetail/newsDetail?id="+t.row.news_id,expression:"'/pages/newsDetail/newsDetail?id='+scope.row.news_id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],attrs:{size:"mini"}},[e._v("复制页面")])]}}])})],1),e._v(" "),n("div",{staticClass:"block pager"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,20,30],"page-size":e.page_size,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible,width:"60%",top:"5vh","append-to-body":!0,"before-close":e.handleClose,closeOnClickModal:!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticClass:"el-dialog-news"},[n("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[n("el-form-item",{attrs:{label:"新闻标题",prop:"title"}},[n("el-input",{model:{value:e.formLabelAlign.title,callback:function(t){e.$set(e.formLabelAlign,"title",t)},expression:"formLabelAlign.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"icon图",prop:"icon_m_name"}},[n("el-col",{attrs:{span:20}},[n("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.icon_m_name,callback:function(t){e.$set(e.formLabelAlign,"icon_m_name",t)},expression:"formLabelAlign.icon_m_name"}})],1),e._v(" "),n("el-upload",{staticClass:"upload-demo",attrs:{action:"core/file/upload",multiple:"",limit:1,"before-upload":e.beforeUploadMobile,"show-file-list":!1}},[n("el-button",{attrs:{size:"medium",type:"primary"}},[e._v("点击上传")])],1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"content",prop:"content"}}),e._v(" "),n("div",{staticClass:"editor-container"},[n("ueditor",{ref:"ueditor",attrs:{defaultMsg:e.formLabelAlign.content,config:e.config},on:{postEditorToParent:e.getEditorContent}})],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"文章作者",prop:"author"}},[n("el-input",{model:{value:e.formLabelAlign.author,callback:function(t){e.$set(e.formLabelAlign,"author",t)},expression:"formLabelAlign.author"}})],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"新闻摘要"}},[n("el-input",{model:{value:e.formLabelAlign.summary,callback:function(t){e.$set(e.formLabelAlign,"summary",t)},expression:"formLabelAlign.summary"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"新闻来源"}},[n("el-input",{model:{value:e.formLabelAlign.source,callback:function(t){e.$set(e.formLabelAlign,"source",t)},expression:"formLabelAlign.source"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"发布状态"}},[n("el-radio-group",{model:{value:e.formLabelAlign.status,callback:function(t){e.$set(e.formLabelAlign,"status",t)},expression:"formLabelAlign.status"}},[n("el-radio",{attrs:{label:0}},[e._v("未发布[预览]")]),e._v(" "),n("el-radio",{attrs:{label:1}},[e._v("已发布")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"发布时间",prop:"release_time"}},[n("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期","default-time":"01:01:01"},model:{value:e.formLabelAlign.release_time,callback:function(t){e.$set(e.formLabelAlign,"release_time",t)},expression:"formLabelAlign.release_time"}})],1),e._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"创建者",prop:"author"}},[n("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_user,callback:function(t){e.$set(e.formLabelAlign,"create_user",t)},expression:"formLabelAlign.create_user"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"创建时间"}},[n("el-input",{attrs:{disabled:!0},model:{value:e.formLabelAlign.create_time,callback:function(t){e.$set(e.formLabelAlign,"create_time",t)},expression:"formLabelAlign.create_time"}})],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"源链接"}},[n("el-input",{model:{value:e.formLabelAlign.source_link,callback:function(t){e.$set(e.formLabelAlign,"source_link",t)},expression:"formLabelAlign.source_link"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"行业类型",prop:"news_type"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.news_type,callback:function(t){e.$set(e.formLabelAlign,"news_type",t)},expression:"formLabelAlign.news_type"}},e._l(e.news_type_list,function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}),1)],1)],1)],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addInfo("formLabelAlign")}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var _=n("VU/8")(d,f,!1,function(e){n("Dr/Q")},"data-v-63fa2cee",null).exports;t.default=_}});
//# sourceMappingURL=27.c308128c39714141d1f1.js.map