(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f7e7724"],{"0a71":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-item df df-center df-justify-start light-background border-radius"},[s("label",{staticClass:"pure-material-checkbox"},[s("input",{attrs:{type:"checkbox"},domProps:{checked:t.task.completed},on:{change:function(e){return t.$emit("change")}}}),s("span")]),s("div",{staticClass:"text-container full-width"},[t.isEditable?t._e():s("button",{staticClass:"custom-button title color-white",class:{"line-through":t.task.completed,"color-gray":t.task.completed},on:{click:t.toggleInput}},[t._v(t._s(t.task.title))]),t.isEditable?s("input",{ref:"editableInput",staticClass:"input input__editable color-white full-width",domProps:{value:t.task.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.taskTitleUpdate(e)},blur:t.toggleInput}}):t._e(),s("div",{staticClass:"completed-date color-gray small-text"},[t._v(t._s(t.parsedDate))])]),s("div",{staticClass:"remove-container"},[s("button",{staticClass:"button",on:{click:function(e){return t.$emit("delete")}}},[s("img",{attrs:{src:a("54f3")}})])])])},n=[],i=a("5530"),c=a("2f62"),o=a("5a0c"),r=a.n(o),u=a("23ad"),l=a.n(u);r.a.extend(l.a);var d={props:{task:{type:Object,default:function(){}}},data:function(){return{isEditable:!1}},computed:{parsedDate:function(){return this.task.date?r()(this.task.date).format("LLL"):r()().format("LLL")}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])({updateTask:"tasks/updateTask"})),{},{toggleInput:function(){var t=this;this.isEditable=!this.isEditable,this.isEditable&&this.$nextTick((function(){return t.$refs.editableInput.focus()}))},taskTitleUpdate:function(t){this.updateTask({column:"title",value:t.target.value,task:this.task,delay:0}),this.toggleInput()}})},p=d,f=(a("7aa9"),a("2877")),m=Object(f["a"])(p,s,n,!1,null,"2b48bd1f",null);e["default"]=m.exports},"23ad":function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,a,s){var n=a.prototype,i=n.format;s.en.formats=t,n.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var a=this.$locale().formats,s=function(e,a){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,s,n){var i=n&&n.toUpperCase();return s||a[n]||t[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,a){return e||a.slice(1)}))}))}(e,void 0===a?{}:a);return i.call(this,s)}}}))},"54f3":function(t,e,a){t.exports=a.p+"img/x.b5c41cdc.svg"},"5c35":function(t,e,a){},"7aa9":function(t,e,a){"use strict";a("5c35")}}]);
//# sourceMappingURL=chunk-5f7e7724.e36621e7.js.map