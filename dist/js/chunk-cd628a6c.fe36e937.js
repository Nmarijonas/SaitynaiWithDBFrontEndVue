(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd628a6c"],{"0d03":function(e,a,t){var s=t("6eeb"),r=Date.prototype,n="Invalid Date",i="toString",o=r[i],l=r.getTime;new Date(NaN)+""!=n&&s(r,i,(function(){var e=l.call(this);return e===e?o.call(this):n}))},"25f0":function(e,a,t){"use strict";var s=t("6eeb"),r=t("825a"),n=t("d039"),i=t("ad6d"),o="toString",l=RegExp.prototype,u=l[o],d=n((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),c=u.name!=o;(d||c)&&s(RegExp.prototype,o,(function(){var e=r(this),a=String(e.source),t=e.flags,s=String(void 0===t&&e instanceof RegExp&&!("flags"in l)?i.call(e):t);return"/"+a+"/"+s}),{unsafe:!0})},"2d72":function(e,a,t){},"578a":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-md-12"},[t("div",{staticClass:"card card-container"},[t("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"https://us.123rf.com/450wm/robuart/robuart1806/robuart180600238/102261218-stock-vector-moustached-smiling-chief-cooker-avatar-profile.jpg?ver=6",alt:"avatar_2x"}}),t("form",{attrs:{name:"form"},on:{submit:function(a){return a.preventDefault(),e.handleLogin(a)}}},[t("div",{staticClass:"form-group"},[t("label",[e._v("Username")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(a){a.target.composing||e.$set(e.user,"username",a.target.value)}}})]),e.errors.has("username")?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required! ")]):e._e()]),t("div",{staticClass:"form-group"},[t("label",[e._v("Password")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}})]),e.errors.has("password")?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required! ")]):e._e()]),t("router-link",{attrs:{to:{name:"recipe-details"}}},[t("div",{staticClass:"newAccount"},[t("a",[e._v("Create new account ")])])]),t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),t("span",[e._v("Login")])])]),t("div",{staticClass:"form-group"},[e.message?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])],1)])])},r=[],n=(t("0d03"),t("d3b7"),t("25f0"),t("d4ec")),i=function e(a,t){Object(n["a"])(this,e),this.username=a,this.password=t},o={name:"Login",data:function(){return{user:new i("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(a){a?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then((function(){e.$router.push("/recipes")}),(function(a){e.loading=!1,e.message=a.response&&a.response.data&&a.response.data.message||a.message||a.toString()})):e.loading=!1}))}}},l=o,u=(t("ece8"),t("2877")),d=Object(u["a"])(l,s,r,!1,null,"b06dd706",null);a["default"]=d.exports},ad6d:function(e,a,t){"use strict";var s=t("825a");e.exports=function(){var e=s(this),a="";return e.global&&(a+="g"),e.ignoreCase&&(a+="i"),e.multiline&&(a+="m"),e.dotAll&&(a+="s"),e.unicode&&(a+="u"),e.sticky&&(a+="y"),a}},ece8:function(e,a,t){"use strict";var s=t("2d72"),r=t.n(s);r.a}}]);
//# sourceMappingURL=chunk-cd628a6c.fe36e937.js.map