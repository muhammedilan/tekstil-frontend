/*! For license information please see 6200.ee91c0c7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6200],{6200:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(3433),i=r(1002);function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(O){d=function(t,e,r){return t[e]=r}}function u(t,e,r,i){var a=e&&e.prototype instanceof f?e:f,s=Object.create(a.prototype),o=new E(i||[]);return n(s,"_invoke",{value:w(t,r,o)}),s}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var m={};function f(){}function g(){}function p(){}var j={};d(j,o,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(_([])));x&&x!==e&&r.call(x,o)&&(j=x);var b=p.prototype=f.prototype=Object.create(j);function y(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function a(n,s,o,c){var l=h(t[n],t,s);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==(0,i.Z)(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,o,c)}),(function(t){a("throw",t,o,c)})):e.resolve(u).then((function(t){d.value=t,o(d)}),(function(t){return a("throw",t,o,c)}))}c(l.arg)}var s;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return s=s?s.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return I()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var o=k(s,r);if(o){if(o===m)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,m;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return g.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:g,configurable:!0}),g.displayName=d(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,d(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(N.prototype),d(N.prototype,c,(function(){return this})),t.AsyncIterator=N,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var s=new N(u(e,r,n,i),a);return t.isGeneratorFunction(r)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},y(b),d(b,l,"Generator"),d(b,o,(function(){return this})),d(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return s.type="throw",s.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var o=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=t,s.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function s(t,e,r,n,i,a,s){try{var o=t[a](s),c=o.value}catch(l){return void r(l)}o.done?e(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){s(a,n,i,o,c,"next",t)}function c(t){s(a,n,i,o,c,"throw",t)}o(void 0)}))}}var c=r(9439),l=r(2388),d=r(2791),u=r(3853),h=r(1087),m=r(184),f=function(){var t=(0,d.useState)([]),e=(0,c.Z)(t,2),r=e[0],i=e[1],s=(0,d.useState)(0),f=(0,c.Z)(s,2),g=f[0],p=f[1],j=(0,d.useState)(10),v=(0,c.Z)(j,2),x=v[0],b=v[1],y=(0,d.useState)([]),N=(0,c.Z)(y,2),w=N[0],k=N[1];return(0,d.useEffect)((function(){l.Z.get("/slider").then((function(t){return i(t.data)}))}),[]),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("div",{className:"card-header border-0",children:(0,m.jsx)("div",{className:"row g-4",children:(0,m.jsx)(h.rU,{to:"/admin/create-slider-picture",className:"col-sm-auto",children:(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"btn btn-success",id:"addproduct-btn",children:[(0,m.jsx)("i",{className:"ri-add-line align-bottom me-1"})," Add Slider"]})})})})}),(0,m.jsx)("div",{className:"card-header",children:(0,m.jsxs)("div",{className:"row align-items-center",children:[(0,m.jsx)("div",{className:"col",children:(0,m.jsx)("ul",{className:"nav nav-tabs-custom card-header-tabs border-bottom-0",role:"tablist",children:(0,m.jsx)("li",{className:"nav-item",role:"presentation",children:(0,m.jsxs)("a",{className:"nav-link active fw-semibold","data-bs-toggle":"tab",href:"#productnav-all",role:"tab","aria-selected":"true",children:["All",(0,m.jsx)("span",{className:"badge badge-soft-danger align-middle rounded-pill ms-1",children:null===r||void 0===r?void 0:r.length})]})})})}),w.length>0&&(0,m.jsx)("div",{className:"col-auto",children:(0,m.jsx)("div",{id:"selection-element",style:{display:"block"},children:(0,m.jsxs)("div",{className:"my-n1 d-flex align-items-center text-muted",children:["Select",(0,m.jsx)("div",{id:"select-content",className:"text-body fw-semibold px-1",children:w.length}),"Result",(0,m.jsx)("button",{onClick:o(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,r.map((function(t){return w.includes(t.id)&&e.push(t.image.public_id)}));case 3:l.Z.delete("/slider",{data:{ids:w,public_ids:e}}).then((function(t){return 200===t.status&&window.location.reload()}));case 4:case"end":return t.stop()}}),t)}))),type:"button",className:"btn btn-link link-danger p-0 ms-3 shadow-none","data-bs-toggle":"modal","data-bs-target":"#removeItemModal",children:"Remove"})]})})})]})}),(0,m.jsx)("div",{className:"card-body",children:(0,m.jsxs)("div",{className:"tab-content text-muted",children:[(0,m.jsx)("div",{className:"tab-pane active",id:"productnav-all",role:"tabpanel",children:(0,m.jsx)("div",{id:"table-product-list-all",className:"table-card gridjs-border-none",children:(0,m.jsxs)("div",{role:"complementary",className:"gridjs gridjs-container",style:{width:"100%"},children:[(0,m.jsx)("div",{className:"gridjs-wrapper",style:{height:"auto"},children:(0,m.jsxs)("table",{role:"grid",className:"gridjs-table",style:{height:"auto"},children:[(0,m.jsx)("thead",{className:"gridjs-thead",children:(0,m.jsxs)("tr",{className:"gridjs-tr",children:[(0,m.jsx)("th",{"data-column-id":"#",className:"gridjs-th text-muted",style:{width:"40px"},children:(0,m.jsx)("div",{className:"gridjs-th-content",children:"#"})}),(0,m.jsxs)("th",{"data-column-id":"product",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,m.jsx)("div",{className:"gridjs-th-content",children:"Slider Image"}),(0,m.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,m.jsx)("th",{"data-column-id":"action",className:"gridjs-th text-muted",style:{width:"80px"},children:(0,m.jsx)("div",{className:"gridjs-th-content",children:"Action"})})]})}),(0,m.jsx)("tbody",{className:"gridjs-tbody",children:null===r||void 0===r?void 0:r.slice(g,x).map((function(t){return(0,m.jsxs)("tr",{className:"gridjs-tr",children:[(0,m.jsx)("td",{"data-column-id":"#",className:"gridjs-td",children:(0,m.jsx)("span",{children:(0,m.jsxs)("div",{className:"form-check checkbox-product-list",children:[" ",(0,m.jsx)("input",{onClick:function(){if(w.includes(t.id))return k(w.filter((function(e){return e!==t.id})));k([].concat((0,n.Z)(w),[t.id]))},className:"form-check-input",type:"checkbox",defaultValue:1,id:"checkbox-1"})," ",(0,m.jsx)("label",{className:"form-check-label",htmlFor:"checkbox-1"})," "]})})}),(0,m.jsx)("td",{"data-column-id":"product",className:"gridjs-td",children:(0,m.jsx)("span",{children:(0,m.jsx)("div",{className:"d-flex align-items-center",children:(0,m.jsx)("div",{className:"flex-shrink-0 me-3",children:(0,m.jsx)("div",{className:"w-[150px] bg-light rounded p-1",children:(0,m.jsx)("img",{src:t.image.secure_url,alt:"Slider Image",className:"w-full h-full"})})})})})}),(0,m.jsx)("td",{onClick:function(){var e=t.image;l.Z.delete("/slider",{data:{id:t.id,public_ids:[e.public_id]}}).then((function(t){return 200===t.status&&window.location.reload()}))},"data-column-id":"action",className:"gridjs-td",children:(0,m.jsx)("button",{className:"p-1 bg-[#ff0000] rounded-[4px]",children:(0,m.jsx)(u.Ybf,{size:18,color:"#fff"})})})]})}))})]})}),(0,m.jsx)("div",{className:"gridjs-footer",children:(0,m.jsxs)("div",{className:"gridjs-pagination",children:[(0,m.jsxs)("div",{role:"status","aria-live":"polite",className:"gridjs-summary",title:"Page 1 of 2",children:["Showing ",(0,m.jsx)("b",{children:0==g?1:g})," to"," ",(0,m.jsx)("b",{children:x})," of ",(0,m.jsx)("b",{children:null===r||void 0===r?void 0:r.length})," ","results"]}),(0,m.jsxs)("div",{className:"gridjs-pages",children:[(0,m.jsx)("button",{onClick:function(){p(g-10),b(x-10)},children:"Previous"}),(0,m.jsx)("button",{onClick:function(){p(x),b(x+10)},children:"Next"})]})]})}),(0,m.jsx)("div",{id:"gridjs-temp",className:"gridjs-temp"})]})})}),(0,m.jsx)("div",{className:"tab-pane",id:"productnav-published",role:"tabpanel",children:(0,m.jsx)("div",{id:"table-product-list-published",className:"table-card gridjs-border-none",children:(0,m.jsxs)("div",{role:"complementary",className:"gridjs gridjs-container",style:{width:"100%"},children:[(0,m.jsx)("div",{className:"gridjs-wrapper",style:{height:"auto"},children:(0,m.jsx)("table",{role:"grid",className:"gridjs-table",style:{height:"auto"},children:(0,m.jsx)("thead",{className:"gridjs-thead",children:(0,m.jsxs)("tr",{className:"gridjs-tr",children:[(0,m.jsx)("th",{"data-column-id":"#",className:"gridjs-th text-muted",style:{width:"40px"},children:(0,m.jsx)("div",{className:"gridjs-th-content",children:"#"})}),(0,m.jsxs)("th",{"data-column-id":"product",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"360px"},children:[(0,m.jsx)("div",{className:"gridjs-th-content",children:"Product"}),(0,m.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,m.jsxs)("th",{"data-column-id":"stock",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"94px"},children:[(0,m.jsx)("div",{className:"gridjs-th-content",children:"Stock"}),(0,m.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,m.jsxs)("th",{"data-column-id":"price",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"101px"},children:[(0,m.jsx)("div",{className:"gridjs-th-content",children:"Price"}),(0,m.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,m.jsxs)("th",{"data-column-id":"published",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"220px"},children:[(0,m.jsx)("div",{className:"gridjs-th-content",children:"Published"}),(0,m.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,m.jsx)("th",{"data-column-id":"action",className:"gridjs-th text-muted",style:{width:"80px"},children:(0,m.jsx)("div",{className:"gridjs-th-content",children:"Remove"})})]})})})}),(0,m.jsx)("div",{id:"gridjs-temp",className:"gridjs-temp"})]})})}),(0,m.jsx)("div",{className:"tab-pane",id:"productnav-draft",role:"tabpanel",children:(0,m.jsxs)("div",{className:"py-4 text-center",children:[(0,m.jsx)("lord-icon",{src:"https://cdn.lordicon.com/msoeawqm.json",trigger:"loop",colors:"primary:#405189,secondary:#0ab39c",style:{width:"72px",height:"72px"}}),(0,m.jsx)("h5",{className:"mt-4",children:"Sorry! No Result Found"})]})})]})})]})})}}}]);
//# sourceMappingURL=6200.ee91c0c7.chunk.js.map