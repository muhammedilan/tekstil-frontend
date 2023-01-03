"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7346],{7346:function(e,s,t){t.r(s);var a=t(3433),d=t(9439),i=t(2388),l=t(2791),n=t(3853),r=t(6036),c=t(184);s.default=function(){var e=(0,l.useState)(),s=(0,d.Z)(e,2),t=s[0],o=s[1],h=(0,l.useState)(0),m=(0,d.Z)(h,2),j=m[0],u=m[1],x=(0,l.useState)(10),g=(0,d.Z)(x,2),b=g[0],N=g[1],p=(0,l.useState)([]),v=(0,d.Z)(p,2),f=v[0],y=v[1];return(0,l.useEffect)((function(){i.Z.get("/order/0").then((function(e){return o(e.data)}))}),[]),(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"card-header",children:(0,c.jsxs)("div",{className:"row align-items-center",children:[(0,c.jsx)("div",{className:"col",children:(0,c.jsx)("ul",{className:"nav nav-tabs-custom card-header-tabs border-bottom-0",role:"tablist",children:(0,c.jsx)("li",{className:"nav-item",role:"presentation",children:(0,c.jsxs)("a",{className:"nav-link active fw-semibold","data-bs-toggle":"tab",href:"#productnav-all",role:"tab","aria-selected":"true",children:["All",(0,c.jsx)("span",{className:"badge badge-soft-danger align-middle rounded-pill ms-1",children:null===t||void 0===t?void 0:t.length})]})})})}),f.length>0&&(0,c.jsx)("div",{className:"col-auto",children:(0,c.jsx)("div",{id:"selection-element",style:{display:"block"},children:(0,c.jsxs)("div",{className:"my-n1 d-flex align-items-center text-muted",children:["Select",(0,c.jsx)("div",{id:"select-content",className:"text-body fw-semibold px-1",children:f.length}),"Result",(0,c.jsx)("button",{onClick:function(){var e=[];t.map((function(s){return f.includes(s.id)&&s.image.map((function(s){return e.push(s.public_id)}))})),i.Z.delete("/order",{data:{ids:f,public_ids:e}}).then((function(e){return 200===e.status&&window.location.reload()}))},type:"button",className:"btn btn-link link-danger p-0 ms-3 shadow-none","data-bs-toggle":"modal","data-bs-target":"#removeItemModal",children:"Remove"})]})})})]})}),(0,c.jsx)("div",{className:"card-body",children:(0,c.jsxs)("div",{className:"tab-content text-muted",children:[(0,c.jsx)("div",{className:"tab-pane active",id:"productnav-all",role:"tabpanel",children:(0,c.jsx)("div",{id:"table-product-list-all",className:"table-card gridjs-border-none",children:(0,c.jsxs)("div",{role:"complementary",className:"gridjs gridjs-container",style:{width:"100%"},children:[(0,c.jsx)("div",{className:"gridjs-wrapper",style:{height:"auto"},children:(0,c.jsxs)("table",{role:"grid",className:"gridjs-table",style:{height:"auto"},children:[(0,c.jsx)("thead",{className:"gridjs-thead",children:(0,c.jsxs)("tr",{className:"gridjs-tr",children:[(0,c.jsx)("th",{"data-column-id":"#",className:"gridjs-th text-muted",style:{width:"40px"},children:(0,c.jsx)("div",{className:"gridjs-th-content",children:"#"})}),(0,c.jsxs)("th",{"data-column-id":"product",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Product Name"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsxs)("th",{"data-column-id":"stock",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Orderer Name"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsxs)("th",{"data-column-id":"stock",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Quantity"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsxs)("th",{"data-column-id":"price",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Total Price"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsx)("th",{"data-column-id":"action",className:"gridjs-th text-muted",style:{width:"80px"},children:(0,c.jsx)("div",{className:"gridjs-th-content",children:"Action"})})]})}),(0,c.jsx)("tbody",{className:"gridjs-tbody",children:null===t||void 0===t?void 0:t.slice(j,b).map((function(e){return(0,c.jsxs)("tr",{className:"gridjs-tr",children:[(0,c.jsx)("td",{"data-column-id":"#",className:"gridjs-td",children:(0,c.jsx)("span",{children:(0,c.jsxs)("div",{className:"form-check checkbox-product-list",children:[" ",(0,c.jsx)("input",{onClick:function(){if(f.includes(e.id))return y(f.filter((function(s){return s!==e.id})));y([].concat((0,a.Z)(f),[e.id]))},className:"form-check-input",type:"checkbox",defaultValue:1,id:"checkbox-1"})," ",(0,c.jsx)("label",{className:"form-check-label",htmlFor:"checkbox-1"})," "]})})}),(0,c.jsx)("td",{"data-column-id":"name",className:"gridjs-td",children:e.product_name}),(0,c.jsx)("td",{"data-column-id":"name",className:"gridjs-td",children:e.orderer_name}),(0,c.jsx)("td",{"data-column-id":"quantity",className:"gridjs-td",children:(0,c.jsx)("span",{children:e.quantity})}),(0,c.jsx)("td",{"data-column-id":"total_price",className:"gridjs-td",children:(0,c.jsxs)("span",{children:["\u20ba",e.quantity*e.product_price]})}),(0,c.jsxs)("td",{"data-column-id":"action",className:"gridjs-td flex items-center gap-x-2 gap-y-1 flex-wrap justify-center",children:[(0,c.jsx)("button",{onClick:function(){i.Z.patch("/order",{id:e.id}).then((function(e){return 200===e.status&&window.location.reload()}))},className:"p-1 bg-[#00a000] rounded-[4px]",children:(0,c.jsx)(r.jbV,{size:18,color:"#fff"})}),(0,c.jsx)("button",{onClick:function(){i.Z.delete("/order",{data:{id:e.id}}).then((function(e){return 200===e.status&&window.location.reload()}))},className:"p-1 bg-[#ff0000] rounded-[4px]",children:(0,c.jsx)(n.Ybf,{size:18,color:"#fff"})})]})]})}))})]})}),(0,c.jsx)("div",{className:"gridjs-footer",children:(0,c.jsxs)("div",{className:"gridjs-pagination",children:[(0,c.jsxs)("div",{role:"status","aria-live":"polite",className:"gridjs-summary",title:"Page 1 of 2",children:["Showing ",(0,c.jsx)("b",{children:0==j?1:j})," to"," ",(0,c.jsx)("b",{children:b})," of ",(0,c.jsx)("b",{children:null===t||void 0===t?void 0:t.length})," results"]}),(0,c.jsxs)("div",{className:"gridjs-pages",children:[(0,c.jsx)("button",{onClick:function(){u(j-10),N(b-10)},children:"Previous"}),(0,c.jsx)("button",{onClick:function(){u(b),N(b+10)},children:"Next"})]})]})}),(0,c.jsx)("div",{id:"gridjs-temp",className:"gridjs-temp"})]})})}),(0,c.jsx)("div",{className:"tab-pane",id:"productnav-published",role:"tabpanel",children:(0,c.jsx)("div",{id:"table-product-list-published",className:"table-card gridjs-border-none",children:(0,c.jsxs)("div",{role:"complementary",className:"gridjs gridjs-container",style:{width:"100%"},children:[(0,c.jsx)("div",{className:"gridjs-wrapper",style:{height:"auto"},children:(0,c.jsx)("table",{role:"grid",className:"gridjs-table",style:{height:"auto"},children:(0,c.jsx)("thead",{className:"gridjs-thead",children:(0,c.jsxs)("tr",{className:"gridjs-tr",children:[(0,c.jsx)("th",{"data-column-id":"#",className:"gridjs-th text-muted",style:{width:"40px"},children:(0,c.jsx)("div",{className:"gridjs-th-content",children:"#"})}),(0,c.jsxs)("th",{"data-column-id":"product",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"360px"},children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Product"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsxs)("th",{"data-column-id":"stock",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"94px"},children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Stock"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsxs)("th",{"data-column-id":"price",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"101px"},children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Price"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsxs)("th",{"data-column-id":"published",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"220px"},children:[(0,c.jsx)("div",{className:"gridjs-th-content",children:"Published"}),(0,c.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,c.jsx)("th",{"data-column-id":"action",className:"gridjs-th text-muted",style:{width:"80px"},children:(0,c.jsx)("div",{className:"gridjs-th-content",children:"Remove"})})]})})})}),(0,c.jsx)("div",{id:"gridjs-temp",className:"gridjs-temp"})]})})}),(0,c.jsx)("div",{className:"tab-pane",id:"productnav-draft",role:"tabpanel",children:(0,c.jsxs)("div",{className:"py-4 text-center",children:[(0,c.jsx)("lord-icon",{src:"https://cdn.lordicon.com/msoeawqm.json",trigger:"loop",colors:"primary:#405189,secondary:#0ab39c",style:{width:"72px",height:"72px"}}),(0,c.jsx)("h5",{className:"mt-4",children:"Sorry! No Result Found"})]})})]})})]})})}}}]);
//# sourceMappingURL=7346.df9efc3d.chunk.js.map