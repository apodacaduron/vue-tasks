(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-024f1add"],{"23ad":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,a){var s=n.prototype,r=s.format;a.en.formats=t,s.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,a=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,a,s){var r=s&&s.toUpperCase();return a||n[s]||t[s]||n[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return r.call(this,a)}}}))},"3e77":function(t,e,n){"use strict";n("ed5a")},6024:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-task df df-center df-justify-start border border-radius",on:{click:t.focusInput}},[a("div",{staticClass:"add-button-container"},[a("button",{staticClass:"button button__gradient-background button__sq df df-center",on:{click:function(e){return t.newTask(t.taskText)}}},[a("img",{attrs:{src:n("8a37")}})])]),a("div",{staticClass:"text-container full-width"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskText,expression:"taskText"}],ref:"input",staticClass:"input full-width",attrs:{placeholder:"Go and get apples to the supermarket"},domProps:{value:t.taskText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newTask(t.taskText)},input:function(e){e.target.composing||(t.taskText=e.target.value)}}})])])},s=[],r=n("5530"),o=n("2f62"),u=n("5a0c"),i=n.n(u),d=n("23ad"),c=n.n(d);i.a.extend(c.a);var f={props:{checked:{type:Boolean,default:!1},title:{type:String,default:""},date:{type:String,default:""}},data:function(){return{taskText:""}},computed:{parsedDate:function(){return this.date?i()(this.date).format("LLL"):i()().format("LLL")}},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])({addTask:"tasks/addTask"})),{},{focusInput:function(){this.$refs.input.focus()},newTask:function(t){t&&(this.addTask(t),this.taskText="")}})},l=f,p=(n("3e77"),n("2877")),k=Object(p["a"])(l,a,s,!1,null,"3833d2d4",null);e["default"]=k.exports},"8a37":function(t,e,n){t.exports=n.p+"img/plus.9bd8b066.svg"},ed5a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-024f1add.da8b4d6d.js.map