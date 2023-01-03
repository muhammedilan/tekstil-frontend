"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[519],{9258:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(2791),a=r(9434),i=r(7689),s=r(3695),l=r(2487),c=r(9778),o=r(424),d=r(2355),u=r(8182),f=r(1770),v=r(7842),p=r(184),m=function(e){var t,r=e.product;return(0,p.jsx)("div",{className:"product-large-image-wrapper product-large-image-wrapper--slider",children:null!==r&&void 0!==r&&null!==(t=r.image)&&void 0!==t&&t.length?(0,p.jsx)(v.Z,{options:{spaceBetween:15,slidesPerView:3,loop:!0,navigation:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}},children:r.image.map((function(e,t){return(0,p.jsx)(v.o,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},t)}))}):null})},x=r(1413),h=r(9439),j=r(1087),y=r(2558),b=r(4275),N=r(8725),g=r(1065),k=function(e){var t=e.product,r=e.discountedPrice,i=e.currency,s=e.finalDiscountedPrice,l=e.finalProductPrice,c=e.cartItems,o=e.wishlistItem,d=e.compareItem,u=(0,a.I0)(),v=(0,n.useState)(t.variation?t.variation[0].color:""),m=(0,h.Z)(v,2),k=m[0],C=m[1],Z=(0,n.useState)(t.variation?t.variation[0].size[0].name:""),P=(0,h.Z)(Z,2),w=P[0],I=P[1],S=(0,n.useState)(t.variation?t.variation[0].size[0].stock:t.stock),K=(0,h.Z)(S,2),O=K[0],A=K[1],z=(0,n.useState)(1),R=(0,h.Z)(z,2),q=R[0],B=R[1],D=(0,f.bh)(c,t,k,w);return(0,p.jsxs)("div",{className:"product-details-content pro-details-slider-content",children:[(0,p.jsx)("h2",{children:t.name}),(0,p.jsx)("div",{className:"product-details-price justify-content-center",children:null!==r?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)("span",{children:i.currencySymbol+s})," ",(0,p.jsx)("span",{className:"old",children:i.currencySymbol+l})]}):(0,p.jsxs)("span",{children:[i.currencySymbol+l," "]})}),t.rating&&t.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap justify-content-center",children:(0,p.jsx)("div",{className:"pro-details-rating mr-0",children:(0,p.jsx)(y.Z,{ratingValue:t.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:t.shortDescription})}),t.variation?(0,p.jsxs)("div",{className:"pro-details-size-color justify-content-center",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:t.variation.map((function(e,t){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===k?"checked":"",onChange:function(){C(e.color),I(e.size[0].name),A(e.size[0].stock),B(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},t)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:t.variation&&t.variation.map((function(e){return e.color===k?e.size.map((function(e,t){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===w?"checked":"",onChange:function(){I(e.name),A(e.stock),B(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},t)})):""}))})]})]}):"",t.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality justify-content-center",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality justify-content-center",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return B(q>1?q-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:q,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return B(q<O-D?q+1:q)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:O&&O>0?(0,p.jsxs)("button",{onClick:function(){return u((0,b.Xq)((0,x.Z)((0,x.Z)({},t),{},{quantity:q,selectedProductColor:k||(t.selectedProductColor?t.selectedProductColor:null),selectedProductSize:w||(t.selectedProductSize?t.selectedProductSize:null)})))},disabled:D>=O,children:[" ","Add To Cart"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to wishlist":"Add to wishlist",onClick:function(){return u((0,N.Mp)(t))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==d?"active":"",disabled:void 0!==d,title:void 0!==d?"Added to compare":"Add to compare",onClick:function(){return u((0,g.a$)(t))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),t.category?(0,p.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,p.jsx)("span",{children:"Categories :"}),(0,p.jsx)("ul",{children:t.category.map((function(e,t){return(0,p.jsx)("li",{children:(0,p.jsx)(j.rU,{to:"/shop-grid-standard",children:e})},t)}))})]}):"",t.tag?(0,p.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,p.jsx)("span",{children:"Tags :"}),(0,p.jsx)("ul",{children:t.tag.map((function(e,t){return(0,p.jsx)("li",{children:(0,p.jsx)(j.rU,{to:"/shop-grid-standard",children:e})},t)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{className:"justify-content-center",children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//dribbble.com",children:(0,p.jsx)("i",{className:"fa fa-dribbble"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//pinterest.com",children:(0,p.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//twitter.com",children:(0,p.jsx)("i",{className:"fa fa-twitter"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//linkedin.com",children:(0,p.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})},C=function(e){var t=e.spaceTopClass,r=e.spaceBottomClass,n=e.product,i=(0,a.v9)((function(e){return e.currency})),s=(0,a.v9)((function(e){return e.cart})).cartItems,l=(0,a.v9)((function(e){return e.wishlist})).wishlistItems,c=(0,a.v9)((function(e){return e.compare})).compareItems,o=l.find((function(e){return e.id===n.id})),d=c.find((function(e){return e.id===n.id})),v=(0,f.lk)(n.price,n.discount),x=+(n.price*i.currencyRate).toFixed(2),h=+(v*i.currencyRate).toFixed(2);return(0,p.jsx)("div",{className:(0,u.Z)("shop-area",t,r),children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-12 mb-50",children:(0,p.jsx)(m,{product:n})}),(0,p.jsx)("div",{className:"col-lg-12 text-center",children:(0,p.jsx)(k,{product:n,discountedPrice:v,currency:i,finalDiscountedPrice:h,finalProductPrice:x,cartItems:s,wishlistItem:o,compareItem:d})})]})})})},Z=function(){var e=(0,i.TH)().pathname,t=(0,i.UO)().id,r=(0,a.v9)((function(e){return e.product})).products.find((function(e){return e.id===t}));return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(s.Z,{titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."}),(0,p.jsxs)(l.Z,{headerTop:"visible",children:[(0,p.jsx)(c.Z,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}]}),(0,p.jsx)(C,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:r}),(0,p.jsx)(d.Z,{spaceBottomClass:"pb-90",productFullDesc:r.fullDescription}),(0,p.jsx)(o.Z,{spaceBottomClass:"pb-95",category:r.category[0]})]})]})}},3573:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];function n(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,r);null!=t&&(a=t)}})),a}return(0,i.default)(n)};var n,a=r(6054),i=(n=a)&&n.__esModule?n:{default:n};e.exports=t.default},6054:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,r,n,a,i,s){var l=a||"<<anonymous>>",c=s||n;if(null==r[n])return t?new Error("Required "+i+" `"+c+"` was not specified in `"+l+"`."):null;for(var o=arguments.length,d=Array(o>6?o-6:0),u=6;u<o;u++)d[u-6]=arguments[u];return e.apply(void 0,[r,n,l,i,c].concat(d))}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r},e.exports=t.default},126:function(e,t,r){r.d(t,{Z:function(){return V}});var n=r(4942),a=r(1413),i=r(5987),s=r(1694),l=r.n(s),c=(r(3573),r(2791)),o=r(8580),d=r(3808);var u=r(3201),f=c.createContext(null);f.displayName="NavContext";var v=f,p=r(4944),m=r(165),x=r(1306),h=r(9439),j=r(9007),y=r(5341),b=r(184),N=["as","active","eventKey"];function g(e){var t=e.key,r=e.onClick,n=e.active,a=e.id,i=e.role,s=e.disabled,l=(0,c.useContext)(p.Z),o=(0,c.useContext)(v),d=(0,c.useContext)(m.Z),u=n,f={role:i};if(o){i||"tablist"!==o.role||(f.role="tab");var h=o.getControllerId(null!=t?t:null),y=o.getControlledId(null!=t?t:null);f[(0,x.PB)("event-key")]=t,f.id=h||a,!(u=null==n&&null!=t?o.activeKey===t:n)&&(null!=d&&d.unmountOnExit||null!=d&&d.mountOnEnter)||(f["aria-controls"]=y)}return"tab"===f.role&&(f["aria-selected"]=u,u||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=(0,j.Z)((function(e){s||(null==r||r(e),null!=t&&l&&!e.isPropagationStopped()&&l(t,e))})),[f,{isActive:u}]}var k=c.forwardRef((function(e,t){var r=e.as,n=void 0===r?y.ZP:r,a=e.active,i=e.eventKey,s=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,N),l=g(Object.assign({key:(0,p.h)(i,s.href),active:a},s)),c=(0,h.Z)(l,2),o=c[0],d=c[1];return o[(0,x.PB)("active")]=d.isActive,(0,b.jsx)(n,Object.assign({},s,o,{ref:t}))}));k.displayName="NavItem";var C=k,Z=["as","onSelect","activeKey","role","onKeyDown"];var P=function(){},w=(0,x.PB)("event-key"),I=c.forwardRef((function(e,t){var r,n,a=e.as,i=void 0===a?"div":a,s=e.onSelect,l=e.activeKey,o=e.role,f=e.onKeyDown,h=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,Z),j=(0,c.useReducer)((function(e){return!e}),!1)[1],y=(0,c.useRef)(!1),N=(0,c.useContext)(p.Z),g=(0,c.useContext)(m.Z);g&&(o=o||"tablist",l=g.activeKey,r=g.getControlledId,n=g.getControllerId);var k=(0,c.useRef)(null),C=function(e){var t=k.current;if(!t)return null;var r=(0,d.Z)(t,"[".concat(w,"]:not([aria-disabled=true])")),n=t.querySelector("[aria-selected=true]");if(!n||n!==document.activeElement)return null;var a=r.indexOf(n);if(-1===a)return null;var i=a+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},I=function(e,t){null!=e&&(null==s||s(e,t),null==N||N(e,t))};(0,c.useEffect)((function(){if(k.current&&y.current){var e=k.current.querySelector("[".concat(w,"][aria-selected=true]"));null==e||e.focus()}y.current=!1}));var S=(0,u.Z)(t,k);return(0,b.jsx)(p.Z.Provider,{value:I,children:(0,b.jsx)(v.Provider,{value:{role:o,activeKey:(0,p.h)(l),getControlledId:r||P,getControllerId:n||P},children:(0,b.jsx)(i,Object.assign({},h,{onKeyDown:function(e){if(null==f||f(e),g){var t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),I(t.dataset[(0,x.$F)("EventKey")]||null,e),y.current=!0,j())}},ref:S,role:o}))})})}));I.displayName="Nav";var S=Object.assign(I,{Item:C}),K=r(162),O=c.createContext(null);O.displayName="NavbarContext";var A=O,z=c.createContext(null);z.displayName="CardHeaderContext";var R=z,q=(0,r(6543).Z)("nav-item"),B=r(7231),D=["bsPrefix","className","as","active","eventKey"],E=c.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,s=e.as,c=void 0===s?B.Z:s,o=e.active,d=e.eventKey,u=(0,i.Z)(e,D);r=(0,K.vE)(r,"nav-link");var f=g((0,a.Z)({key:(0,p.h)(d,u.href),active:o},u)),v=(0,h.Z)(f,2),m=v[0],x=v[1];return(0,b.jsx)(c,(0,a.Z)((0,a.Z)((0,a.Z)({},u),m),{},{ref:t,className:l()(n,r,u.disabled&&"disabled",x.isActive&&"active")}))}));E.displayName="NavLink",E.defaultProps={disabled:!1};var _=E,T=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],F=c.forwardRef((function(e,t){var r,s,d,u=(0,o.Ch)(e,{activeKey:"onSelect"}),f=u.as,v=void 0===f?"div":f,p=u.bsPrefix,m=u.variant,x=u.fill,h=u.justify,j=u.navbar,y=u.navbarScroll,N=u.className,g=u.activeKey,k=(0,i.Z)(u,T),C=(0,K.vE)(p,"nav"),Z=!1,P=(0,c.useContext)(A),w=(0,c.useContext)(R);return P?(s=P.bsPrefix,Z=null==j||j):w&&(d=w.cardHeaderBsPrefix),(0,b.jsx)(S,(0,a.Z)({as:v,ref:t,activeKey:g,className:l()(N,(r={},(0,n.Z)(r,C,!Z),(0,n.Z)(r,"".concat(s,"-nav"),Z),(0,n.Z)(r,"".concat(s,"-nav-scroll"),Z&&y),(0,n.Z)(r,"".concat(d,"-").concat(m),!!d),(0,n.Z)(r,"".concat(C,"-").concat(m),!!m),(0,n.Z)(r,"".concat(C,"-fill"),x),(0,n.Z)(r,"".concat(C,"-justified"),h),r))},k))}));F.displayName="Nav",F.defaultProps={justify:!1,fill:!1};var V=Object.assign(F,{Item:q,Link:_})}}]);
//# sourceMappingURL=519.651f4311.chunk.js.map