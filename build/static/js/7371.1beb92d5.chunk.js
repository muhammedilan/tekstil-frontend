"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7371],{6707:function(e,t,l){l.r(t);var a=l(1413),s=l(9439),n=l(2791),i=l(3853),c=l(2388),r=l(6960),o=l(184);t.default=function(){var e=(0,n.useState)(),t=(0,s.Z)(e,2),l=t[0],d=t[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"card",children:[(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("label",{className:"form-label",children:"Small Title"}),(0,o.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter small title",onChange:function(e){return d((0,a.Z)((0,a.Z)({},l),{},{small_title:e.target.value}))}})]}),(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("label",{className:"form-label",children:"Title"}),(0,o.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter title",onChange:function(e){return d((0,a.Z)((0,a.Z)({},l),{},{title:e.target.value}))}})]}),(0,o.jsx)("div",{className:"card-body relative",children:null!==l&&void 0!==l&&l.image?(0,o.jsxs)("div",{className:"w-[275px] h-[367px] relative",children:[(0,o.jsx)("img",{width:"100%",height:"230",className:"w-full h-full",src:URL.createObjectURL(l.image),alt:"Product Image"}),(0,o.jsx)(i.Ybf,{className:"p-1 absolute right-2 top-2 cursor-pointer text-[#ff0000]",onClick:function(){d((0,a.Z)((0,a.Z)({},l),{},{image:null}))},size:24})]}):(0,o.jsxs)("div",{onDragOver:function(e){return e.preventDefault()},onDrop:function(e){e.preventDefault(),d((0,a.Z)((0,a.Z)({},l),{},{image:e.dataTransfer.files[0]}))},onClick:function(e){return e.currentTarget.lastElementChild.click()},className:"dropzone dz-clickable",children:[(0,o.jsxs)("div",{className:"dz-message needsclick",children:[(0,o.jsx)("div",{className:"mb-3",children:(0,o.jsx)("i",{className:"display-4 text-muted ri-upload-cloud-2-fill"})}),(0,o.jsx)("h5",{children:"Drop files here or click to upload."})]}),(0,o.jsx)("input",{type:"file",className:"hidden",accept:".png,.jpg,.jpeg,.gif",onChange:function(e){e.target.files[0]&&d((0,a.Z)((0,a.Z)({},l),{},{image:e.target.files[0]}))}})]})})]}),(0,o.jsx)("div",{className:"text-end mb-3",children:(0,o.jsx)("button",{onClick:function(){var e=new FormData;Object.entries(l).map((function(t){return e.append(t[0],t[1])})),c.Z.post("/slider",e).then((function(e){return 201===e.status&&r.Z.success(e.data,{position:"bottom-right"})}))},type:"submit",className:"btn btn-success w-sm",children:"Submit"})})]})}}}]);
//# sourceMappingURL=7371.1beb92d5.chunk.js.map