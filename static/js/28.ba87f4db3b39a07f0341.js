webpackJsonp([28],{"IE8+":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n("mtWM"),l=n.n(t),i=n("0xDb"),o={data:function(){var e=this;return{dictionary_list:"[]",selectClass:"el-icon-arrow-down",content_show:!1,tableData:[],currentPage:1,page_size:15,total:0,dialogVisible:!1,formLabelAlign:{name:"",mobile:"",mail:"",company_name:"",company_address:"",company_summary:"",industry:"",job:"",business:"",page_info:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:function(a,n,t){""===n?t(new Error("请输入手机号")):/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(e.formLabelAlign.mobile)?t():t(new Error("手机号格式不正确"))},trigger:"blur"}],company_name:[{required:!0,message:"请输入企业名称",trigger:"blur"}],industry:[{required:!0,message:"请输入行业"}],mail:[{validator:function(a,n,t){var l=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");""==n||l.test(e.formLabelAlign.mail)?t():t(new Error("邮箱格式不正确"))},trigger:"blur"}]}}},mounted:function(){this.getInfoList("1","15")},methods:{getDictionary:function(){var e=this;l.a.post("core/dictionary/list",{code:"business"}).then(function(a){console.log(a),0==a.code&&(e.dictionary_list=a.data)},function(e){})},handleSizeChange:function(e){this.getInfoList(this.currentPage,e)},handleCurrentChange:function(e){this.getInfoList(e,this.page_size)},handleEdit:function(e,a){this.dialogVisible=!0,this.formLabelAlign={con_id:a.con_id,name:a.name,mobile:a.mobile,mail:a.mail,company_name:a.company_name,company_address:a.company_address,company_summary:a.company_summary,job:a.job,industry:a.industry,business:a.business,page_info:a.page_info}},handleClose:function(){var e=this;if(this.formLabelAlign.hasOwnProperty("con_id"))this.dialogVisible=!1;else{var a=this;this.$confirm("是否保存？",{showClose:!1}).then(function(){a.submitInfo("formLabelAlign")}).catch(function(){e.dialogVisible=!1})}},openAddDialog:function(){this.formLabelAlign={name:"",mobile:"",mail:"",company_name:"",company_address:"",company_summary:"",industry:"",job:"",business:"",page_info:""},this.dialogVisible=!0},submitDialog:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return!1;var n="",t="";a.formLabelAlign.hasOwnProperty("con_id")?(n="app/consultative/update",t="修改成功!"):(n="app/consultative/create",t="添加成功!"),a.submitInfo(n,a.formLabelAlign,t)})},cancleDialog:function(){this.dialogVisible=!1},getInfoList:function(e,a){var n={page_index:e,page_size:a},t=this;l.a.get("app/consultative/pageList",{params:n}).then(function(e){if(0==e.code){var a=[],n=e.data,l=n.count,o=n.page_index,r=n.page_size;t.currentPage=o,t.page_size=r,t.total=l;for(var s=(o-1)*r,m=n.rows,c=0;c<m.length;c++)m[c].index=s+c+1,m[c].create_time=Object(i.f)(m[c].create_time),m[c].business&&(m[c].business=m[c].business.join(",")),a.push(m[c]);t.tableData=a}},function(e){})},submitInfo:function(e,a,n){var t=this;a.business?a.business=a.business.split(","):a.business=[],l.a.post(e,a).then(function(e){0==e.code?(t.$message({type:"success",message:n}),t.dialogVisible=!1,t.getInfoList(t.currentPage,t.page_size)):t.$message({type:"success",message:"操作失败:"+e.message})},function(e){})}}},r={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-card",{attrs:{shadow:"always"}},[n("span",{staticClass:"content-title"},[e._v("咨询管理")]),e._v(" "),n("el-button",{attrs:{type:"success"},on:{click:function(a){return e.openAddDialog()}}},[e._v("添加")])],1)],1),e._v(" "),n("el-table",{attrs:{border:"",data:e.tableData}},[n("el-table-column",{attrs:{prop:"index",label:"序号",align:"center",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"company_name",label:"公司名称",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"company_address",label:"公司地址",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"联系人姓名",align:"center",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"mobile",label:"联系人号码",align:"center",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"mail",label:"联系人邮箱",align:"center",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"create_time",label:"创建时间",align:"center",width:"200"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleEdit(a.$index,a.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),n("div",{staticClass:"block pager"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[15,20,30],"page-size":e.page_size,layout:"sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.currentPage=a},"update:current-page":function(a){e.currentPage=a}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"添加",visible:e.dialogVisible,width:"50%","append-to-body":!0,"before-close":e.handleClose,closeOnClickModal:!1},on:{"update:visible":function(a){e.dialogVisible=a}}},[n("div",{staticClass:"el-dialog-counsel"},[n("el-form",{ref:"formLabelAlign",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[n("el-form-item",{attrs:{label:"公司名称",prop:"company_name"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.company_name,callback:function(a){e.$set(e.formLabelAlign,"company_name",a)},expression:"formLabelAlign.company_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"公司地址",prop:"company_address"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.company_address,callback:function(a){e.$set(e.formLabelAlign,"company_address",a)},expression:"formLabelAlign.company_address"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"公司简介",prop:"company_summary"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:33},placeholder:"请输入内容",disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.company_summary,callback:function(a){e.$set(e.formLabelAlign,"company_summary",a)},expression:"formLabelAlign.company_summary"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"行业",prop:"industry"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.industry,callback:function(a){e.$set(e.formLabelAlign,"industry",a)},expression:"formLabelAlign.industry"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人姓名",prop:"name"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.name,callback:function(a){e.$set(e.formLabelAlign,"name",a)},expression:"formLabelAlign.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"职业",prop:"job"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.job,callback:function(a){e.$set(e.formLabelAlign,"job",a)},expression:"formLabelAlign.job"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人号码",prop:"mobile"}},[n("el-input",{attrs:{type:"number",disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.mobile,callback:function(a){e.$set(e.formLabelAlign,"mobile",a)},expression:"formLabelAlign.mobile"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"联系人邮箱",prop:"mail"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.mail,callback:function(a){e.$set(e.formLabelAlign,"mail",a)},expression:"formLabelAlign.mail"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"兴趣意向",prop:"business"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.business,callback:function(a){e.$set(e.formLabelAlign,"business",a)},expression:"formLabelAlign.business"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"页面信息",prop:"page_info"}},[n("el-input",{attrs:{disabled:e.formLabelAlign.hasOwnProperty("con_id")},model:{value:e.formLabelAlign.page_info,callback:function(a){e.$set(e.formLabelAlign,"page_info",a)},expression:"formLabelAlign.page_info"}})],1)],1)],1),e._v(" "),e.formLabelAlign.hasOwnProperty("con_id")?e._e():n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.submitDialog("formLabelAlign")}}},[e._v("提 交")])],1)])],1)},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(e){n("aKtZ")},"data-v-b14a6c60",null).exports;a.default=s},aKtZ:function(e,a){}});
//# sourceMappingURL=28.ba87f4db3b39a07f0341.js.map