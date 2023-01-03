"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[9291],{9291:function(s,e,t){t.r(e),t.d(e,{default:function(){return o}});var a=t(3433),d=t(9439),l=t(2388),i=t(2791),r=t(3853),c=t(1087),n=t(184),o=function(){var s=(0,i.useState)(),e=(0,d.Z)(s,2),t=e[0],o=e[1],h=(0,i.useState)(0),m=(0,d.Z)(h,2),j=m[0],x=m[1],u=(0,i.useState)(10),g=(0,d.Z)(u,2),b=g[0],N=g[1],p=(0,i.useState)([]),v=(0,d.Z)(p,2),f=v[0],y=v[1];return(0,i.useEffect)((function(){l.Z.get("/color").then((function(s){o(s.data)}))}),[]),(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-header border-0",children:(0,n.jsxs)("div",{className:"row g-4",children:[(0,n.jsx)(c.rU,{to:"/admin/create-color",className:"col-sm-auto",children:(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"btn btn-success",id:"addproduct-btn",children:[(0,n.jsx)("i",{className:"ri-add-line align-bottom me-1"})," Add Color"]})})}),(0,n.jsx)("div",{className:"col-sm",children:(0,n.jsx)("div",{className:"d-flex justify-content-sm-end",children:(0,n.jsxs)("div",{className:"search-box ms-2",children:[(0,n.jsx)("input",{type:"text",className:"form-control",id:"searchProductList",placeholder:"Search Products..."}),(0,n.jsx)("i",{className:"ri-search-line search-icon"})]})})})]})}),(0,n.jsx)("div",{className:"card-header",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("ul",{className:"nav nav-tabs-custom card-header-tabs border-bottom-0",role:"tablist",children:(0,n.jsx)("li",{className:"nav-item",role:"presentation",children:(0,n.jsxs)("a",{className:"nav-link active fw-semibold","data-bs-toggle":"tab",href:"#productnav-all",role:"tab","aria-selected":"true",children:["All",(0,n.jsx)("span",{className:"badge badge-soft-danger align-middle rounded-pill ms-1",children:null===t||void 0===t?void 0:t.length})]})})})}),f.length>0&&(0,n.jsx)("div",{className:"col-auto",children:(0,n.jsx)("div",{id:"selection-element",style:{display:"block"},children:(0,n.jsxs)("div",{className:"my-n1 d-flex align-items-center text-muted",children:["Select",(0,n.jsx)("div",{id:"select-content",className:"text-body fw-semibold px-1",children:f.length}),"Result",(0,n.jsx)("button",{onClick:function(){l.Z.delete("/color",{data:{ids:f}}).then((function(s){return 200===s.status&&window.location.reload()}))},type:"button",className:"btn btn-link link-danger p-0 ms-3 shadow-none","data-bs-toggle":"modal","data-bs-target":"#removeItemModal",children:"Remove"})]})})})]})}),(0,n.jsx)("div",{className:"card-body",children:(0,n.jsxs)("div",{className:"tab-content text-muted",children:[(0,n.jsx)("div",{className:"tab-pane active",id:"productnav-all",role:"tabpanel",children:(0,n.jsx)("div",{id:"table-product-list-all",className:"table-card gridjs-border-none",children:(0,n.jsxs)("div",{role:"complementary",className:"gridjs gridjs-container",style:{width:"100%"},children:[(0,n.jsx)("div",{className:"gridjs-wrapper",style:{height:"auto"},children:(0,n.jsxs)("table",{role:"grid",className:"gridjs-table",style:{height:"auto"},children:[(0,n.jsx)("thead",{className:"gridjs-thead",children:(0,n.jsxs)("tr",{className:"gridjs-tr",children:[(0,n.jsx)("th",{"data-column-id":"#",className:"gridjs-th text-muted",style:{width:"40px"},children:(0,n.jsx)("div",{className:"gridjs-th-content",children:"#"})}),(0,n.jsxs)("th",{"data-column-id":"color",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,n.jsx)("div",{className:"gridjs-th-content",children:"Color Name"}),(0,n.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,n.jsxs)("th",{"data-column-id":"stock",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,children:[(0,n.jsx)("div",{className:"gridjs-th-content",children:"Color"}),(0,n.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,n.jsx)("th",{"data-column-id":"action",className:"gridjs-th text-muted",style:{width:"80px"},children:(0,n.jsx)("div",{className:"gridjs-th-content",children:"Action"})})]})}),(0,n.jsx)("tbody",{className:"gridjs-tbody",children:null===t||void 0===t?void 0:t.slice(j,b).map((function(s){return(0,n.jsxs)("tr",{className:"gridjs-tr",children:[(0,n.jsx)("td",{"data-column-id":"#",className:"gridjs-td",children:(0,n.jsx)("span",{children:(0,n.jsxs)("div",{className:"form-check checkbox-product-list",children:[" ",(0,n.jsx)("input",{onClick:function(){if(f.includes(s.id))return y(f.filter((function(e){return e!==s.id})));y([].concat((0,a.Z)(f),[s.id]))},className:"form-check-input",type:"checkbox",defaultValue:1,id:"checkbox-1"})," ",(0,n.jsx)("label",{className:"form-check-label",htmlFor:"checkbox-1"})," "]})})}),(0,n.jsx)("td",{"data-column-id":"product",className:"gridjs-td",children:(0,n.jsx)("span",{children:(0,n.jsx)("div",{className:"d-flex align-items-center",children:(0,n.jsx)("div",{className:"flex-grow-1",children:(0,n.jsx)("h5",{className:"fs-14 mb-1",children:(0,n.jsx)("a",{href:"apps-ecommerce-product-details.html",className:"text-dark",children:s.name})})})})})}),(0,n.jsx)("td",{"data-column-id":"color",className:"gridjs-td flex items-center gap-x-2",children:(0,n.jsx)("span",{className:"w-[17px] h-[17px] rounded-full cursor-pointer border-[1px] border-gray-300 hover:border-0 hover:scale-105 transition duration-500",style:{backgroundColor:s.code}})}),(0,n.jsx)("td",{onClick:function(){l.Z.delete("/color",{data:{id:s.id}}).then((function(s){return 200===s.status&&window.location.reload()}))},"data-column-id":"action",className:"gridjs-td",children:(0,n.jsx)("button",{className:"p-1 bg-[#ff0000] rounded-[4px]",children:(0,n.jsx)(r.Ybf,{size:18,color:"#fff"})})})]})}))})]})}),(0,n.jsx)("div",{className:"gridjs-footer",children:(0,n.jsxs)("div",{className:"gridjs-pagination",children:[(0,n.jsxs)("div",{role:"status","aria-live":"polite",className:"gridjs-summary",title:"Page 1 of 2",children:["Showing ",(0,n.jsx)("b",{children:0==j?1:j})," to"," ",(0,n.jsx)("b",{children:b})," of ",(0,n.jsx)("b",{children:null===t||void 0===t?void 0:t.length})," results"]}),(0,n.jsxs)("div",{className:"gridjs-pages",children:[(0,n.jsx)("button",{onClick:function(){x(j-10),N(b-10)},children:"Previous"}),(0,n.jsx)("button",{onClick:function(){x(b),N(b+10)},children:"Next"})]})]})}),(0,n.jsx)("div",{id:"gridjs-temp",className:"gridjs-temp"})]})})}),(0,n.jsx)("div",{className:"tab-pane",id:"productnav-published",role:"tabpanel",children:(0,n.jsx)("div",{id:"table-product-list-published",className:"table-card gridjs-border-none",children:(0,n.jsxs)("div",{role:"complementary",className:"gridjs gridjs-container",style:{width:"100%"},children:[(0,n.jsx)("div",{className:"gridjs-wrapper",style:{height:"auto"},children:(0,n.jsx)("table",{role:"grid",className:"gridjs-table",style:{height:"auto"},children:(0,n.jsx)("thead",{className:"gridjs-thead",children:(0,n.jsxs)("tr",{className:"gridjs-tr",children:[(0,n.jsx)("th",{"data-column-id":"#",className:"gridjs-th text-muted",style:{width:"40px"},children:(0,n.jsx)("div",{className:"gridjs-th-content",children:"#"})}),(0,n.jsxs)("th",{"data-column-id":"product",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"360px"},children:[(0,n.jsx)("div",{className:"gridjs-th-content",children:"Product"}),(0,n.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,n.jsxs)("th",{"data-column-id":"stock",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"94px"},children:[(0,n.jsx)("div",{className:"gridjs-th-content",children:"Stock"}),(0,n.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,n.jsxs)("th",{"data-column-id":"price",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"101px"},children:[(0,n.jsx)("div",{className:"gridjs-th-content",children:"Price"}),(0,n.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,n.jsxs)("th",{"data-column-id":"published",className:"gridjs-th gridjs-th-sort text-muted",tabIndex:0,style:{width:"220px"},children:[(0,n.jsx)("div",{className:"gridjs-th-content",children:"Published"}),(0,n.jsx)("button",{tabIndex:-1,"aria-label":"Sort column ascending",title:"Sort column ascending",className:"gridjs-sort gridjs-sort-neutral"})]}),(0,n.jsx)("th",{"data-column-id":"action",className:"gridjs-th text-muted",style:{width:"80px"},children:(0,n.jsx)("div",{className:"gridjs-th-content",children:"Remove"})})]})})})}),(0,n.jsx)("div",{id:"gridjs-temp",className:"gridjs-temp"})]})})}),(0,n.jsx)("div",{className:"tab-pane",id:"productnav-draft",role:"tabpanel",children:(0,n.jsxs)("div",{className:"py-4 text-center",children:[(0,n.jsx)("lord-icon",{src:"https://cdn.lordicon.com/msoeawqm.json",trigger:"loop",colors:"primary:#405189,secondary:#0ab39c",style:{width:"72px",height:"72px"}}),(0,n.jsx)("h5",{className:"mt-4",children:"Sorry! No Result Found"})]})})]})})]})})}}}]);
//# sourceMappingURL=9291.723eb221.chunk.js.map