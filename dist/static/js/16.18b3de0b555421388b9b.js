webpackJsonp([16],{Sm86:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("4YfN"),n=o.n(s),i=o("R4Sj"),a={computed:n()({},Object(i.e)({prom:function(e){return e.prom},user:function(e){return e.user}})),data:function(){return{uploaadAction:"",processNum:0,head:{},uploadHead:{},fileList:[],isloading:!1}},created:function(){sessionStorage.getItem("pname")&&this.setpname_prom(sessionStorage.getItem("pname")),window.addEventListener("beforeunload",function(){sessionStorage.setItem("pname",sessionStorage.getItem("pname"))}),console.log("这是create 函数"),this.head={projectname:this.prom.prom_pname,username:JSON.parse(sessionStorage.user).username,filetype:"mr"},this.uploadHead={projectname:this.prom.prom_pname,username:JSON.parse(sessionStorage.user).username,filetype:"mr",Authorization:"bearer "+sessionStorage.getItem("token")},this.uploaadAction=this.user.httppath+"/api/Mr/Upload",console.log(this.uploaadAction),console.log(this.head)},methods:n()({},Object(i.d)(["setpname_prom"]),{analysis:function(){"default"!==this.prom.prom_pname?this.dbInput():this.$notify({title:"警告",message:"没有权限对公有工程进行数据入库",type:"warning"})},send:function(){console.log("这是send 函数")},dbInput:function(){var e=this;console.log("dbInput"),this.isloading=!0,this.$http.post(this.user.httppath+"/api/Mr/Parse",{},{headers:this.head}).then(function(t){e.isloading=!1,e.$notify({title:"成功",message:"解析成功",type:"success"}),console.log("函数 dbInput success"),console.log(t)}).catch(function(t){e.isloading=!1,e.$notify({title:"警告",message:"解析失败"+t,type:"warning"}),console.log("函数 dbInput error"),console.log(t)})},submitUpload:function(){console.log("这是函数 submitUpload"),"default"===this.prom.prom_pname?this.$notify({title:"警告",message:"没有权限对公共工程进行操作",type:"warning"}):(console.log(this.head),this.$refs.upload.submit())},handleRemove:function(e,t){console.log("这是函数 handleRemove"),console.log(e),console.log(t)},handlePreview:function(e){console.log("这是函数 handlePreview"),console.log(e)}})},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",[o("el-main",[o("br"),e._v(" "),o("el-upload",{ref:"upload",staticClass:"elmro",attrs:{action:e.uploaadAction,headers:e.uploadHead,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1,limit:1e3,multiple:!0,accept:".zip, .xml"}},[o("el-button",{attrs:{slot:"trigger",size:"mini",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持zip,xml格式的文件")]),e._v(" "),o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")])],1),e._v(" "),o("br"),e._v(" "),o("hr"),e._v(" "),o("el-button",{staticStyle:{width:"80px","margin-left":"2px"},attrs:{type:"primary",loading:e.isloading,size:"mini"},on:{click:e.analysis}},[e._v("解析")])],1)],1)},staticRenderFns:[]};var r=o("C7Lr")(a,l,!1,function(e){o("q8LB")},null,null);t.default=r.exports},q8LB:function(e,t){}});
//# sourceMappingURL=16.18b3de0b555421388b9b.js.map