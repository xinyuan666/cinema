(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87379aa4"],{"059c":function(t,e,s){t.exports=s.p+"static/img/admin.cf376cee.png"},"09b4":function(t,e,s){"use strict";var n=s("33bc"),i=s.n(n);i.a},"33bc":function(t,e,s){},"5ebe":function(t,e,s){},"7ed4":function(t,e,s){"use strict";var n=s("2b0e"),i=new n["default"];e["a"]=i},"7fb0":function(t,e,s){},9950:function(t,e,s){"use strict";var n=s("7fb0"),i=s.n(n);i.a},bfe9:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view",{key:t.$route.fullPath})],1)],1),s("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},i=[],l=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapse?s("i",{staticClass:"el-icon-s-unfold"}):s("i",{staticClass:"el-icon-s-fold"})]),s("div",{staticClass:"logo"},[t._v("电影院会员管理系统")]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.id)+"\n                    "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])}),a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:s("059c")}})])}],o=s("7ed4"),c={data:function(){return{collapse:!1,fullscreen:!1,defaultManagerId:"admin"}},computed:{id:function(){var t=localStorage.getItem("managerId");return t||this.defaultManagerId}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,o["a"].$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},r=c,u=(s("9950"),s("2877")),d=Object(u["a"])(r,l,a,!1,null,"34d13d37",null),h=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,(function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,(function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,(function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v("\n                                    "+t._s(e.title)+"\n                                ")])}))],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]}))],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]}))],2)],1)},p=[],f=(s("a481"),{data:function(){return{collapse:!1,items:[{icon:"el-icon-lx-home",index:"dashboard",title:"首页"},{icon:"el-icon-lx-people",index:"member",title:"会员管理",subs:[{index:"member",title:"会员列表"}]},{icon:"el-icon-lx-copy",index:"card",title:"会员卡管理",subs:[{index:"card",title:"会员卡列表"},{index:"recharge",title:"充值管理"},{index:"consume",title:"消费管理"},{index:"record",title:"交易记录"}]},{icon:"el-icon-lx-cascades",index:"integral",title:"积分管理",subs:[{index:"integral",title:"积分列表"}]},{icon:"el-icon-lx-calendar",index:"care",title:"会员关怀"},{icon:"el-icon-pie-chart",index:"charts",title:"统计数据"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;o["a"].$on("collapse",(function(e){t.collapse=e,o["a"].$emit("collapse-content",e)}))}}),g=f,v=(s("09b4"),Object(u["a"])(g,m,p,!1,null,"5b1c5417",null)),b=v.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,(function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},_=[],C={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),o["a"].$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),o["a"].$on("close_current_tags",(function(){for(var e=0,s=t.tagsList.length;e<s;e++){var n=t.tagsList[e];if(n.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}}))}},w=C,$=(s("c5f3"),Object(u["a"])(w,x,_,!1,null,null,null)),k=$.exports,L={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:h,vSidebar:b,vTags:k},created:function(){var t=this;o["a"].$on("collapse-content",(function(e){t.collapse=e})),o["a"].$on("tags",(function(e){for(var s=[],n=0,i=e.length;n<i;n++)e[n].name&&s.push(e[n].name);t.tagsList=s}))}},F=L,S=Object(u["a"])(F,n,i,!1,null,null,null);e["default"]=S.exports},c5f3:function(t,e,s){"use strict";var n=s("5ebe"),i=s.n(n);i.a}}]);