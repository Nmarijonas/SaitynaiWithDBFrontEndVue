(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30bdd3c9"],{"0d48":function(e,t,n){"use strict";n("1e26")},"1e26":function(e,t,n){},"2a13":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipeItem container"},[n("h4",{staticStyle:{"margin-top":"10px","text-align":"center"}},[e._v("Recipe")]),n("div",{staticClass:"recipe-info"},[this.$route.params.idrecipes?n("div",[n("div",[e._m(0),e._v(" "+e._s(e.currentRecipe.title)+" ")]),n("div",[e._m(1),e._v(" "+e._s(e.currentRecipe.ingredients)+" ")]),n("div",[e._m(2),e._v(" "+e._s(e.currentRecipe.description)+" ")]),n("div",[e._m(3),e._v(" "+e._s(e.currentRecipe.recipe)+" ")]),n("div",[e._m(4),e._v(" "+e._s(e.currentRecipe.published)+" ")])]):e._e()]),n("h4",{staticStyle:{"margin-top":"10px","text-align":"center"}},[e._v("Comments")]),n("div",{staticClass:"recipe-info"},e._l(e.currentRecipe.comments,(function(t,i){return n("li",{key:i,staticClass:"list-items",staticStyle:{"list-style-type":"none"}},[e._v(" "+e._s(t.comment)+" ")])})),0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Title:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Ingredients:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Description:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Recipe:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("strong",[e._v("Published:")])])}],r=n("6730"),s={name:"recipe",data:function(){return{currentRecipe:null,message:""}},methods:{getRecipe:function(e){var t=this;r["a"].get(e).then((function(e){t.currentRecipe=e.data,console.log(e.data)})).catch((function(e){console.log(e)}))}},mounted:function(){this.message="",this.getRecipe(this.$route.params.idrecipes)}},a=s,o=(n("0d48"),n("2877")),u=Object(o["a"])(a,i,c,!1,null,null,null);t["default"]=u.exports},6730:function(e,t,n){"use strict";var i=n("d4ec"),c=n("bee2"),r=n("bc3a"),s=n.n(r),a=s.a.create({baseURL:"https://back-end-recipessite.herokuapp.com/api/",headers:{"Content-type":"application/json"}});function o(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer"+e.accessToken}:{}}var u=function(){function e(){Object(i["a"])(this,e)}return Object(c["a"])(e,[{key:"getAll",value:function(){return a.get("/recipes",{headers:o()})}},{key:"get",value:function(e){return a.get("/recipes/".concat(e),{headers:o()})}},{key:"create",value:function(e){return a.post("/recipes",e)}}]),e}();t["a"]=new u}}]);
//# sourceMappingURL=chunk-30bdd3c9.b805cf6c.js.map