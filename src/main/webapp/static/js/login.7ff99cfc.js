(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0290":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"login-wrap"},[r("div",{staticClass:"ms-login"},[r("div",{staticClass:"ms-title"},[e._v("电影院会员管理系统")]),r("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.param,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"managerId"},model:{value:e.param.managerId,callback:function(a){e.$set(e.param,"managerId",a)},expression:"param.managerId"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.submitForm()}},model:{value:e.param.password,callback:function(a){e.$set(e.param,"password",a)},expression:"param.password"}},[r("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.submitForm()}}},[e._v("登录")])],1),r("p",{staticClass:"login-tips"},[e._v("默认账号为admin，密码为123123。")])],1)],1)])},s=[],n=r("365c"),o={data:function(){return{param:{managerId:"",password:""},rules:{managerId:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.login.validate((function(a){if(!a)return e.$message.error("请输入账号和密码"),console.log("error submit!!"),!1;Object(n["o"])(e.param).then((function(a){if(200!=a.status)return e.$message.error("账号或者密码错误，请重新输入！"),!1;e.$message.success("登录成功"),localStorage.setItem("managerId",e.param.managerId),e.$router.push("/")}))}))}}},l=o,i=(r("9a6e"),r("2877")),p=Object(i["a"])(l,t,s,!1,null,"fc5c9aba",null);a["default"]=p.exports},"7c53":function(e,a,r){},"9a6e":function(e,a,r){"use strict";var t=r("7c53"),s=r.n(t);s.a}}]);