(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{6054:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return r(2732)}])},4660:function(e,t,r){"use strict";var i=r(5893),n=r(4184),a=r.n(n),s=(r(7294),r(1697)),c=r.n(s);t.Z=function(e){var t=e.children,r=e.className;return(0,i.jsx)("div",{className:c().root,children:(0,i.jsx)("div",{className:a()(c().wrap,r),children:t})})}},2732:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return C},default:function(){return k}});var i=r(8520),n=r.n(i),a=r(5893),s=r(7294),c=r(4255),l=r.n(c),d=r(9008),o=r(5675),_=r(5168),u=r(4660),m=r(5617),v=r(1497),p=r.n(v),y=function(e){var t=e.deliveryType,r=(0,m.v9)((function(e){return e.cart}));return(0,a.jsxs)("div",{className:p().root,children:[(0,a.jsx)("div",{className:p().title,children:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b:"}),(0,a.jsx)("div",{className:p().cart,children:r.map((function(e){var t,r,i,n=(null===e||void 0===e||null===(t=e.images)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.imagePath)||(null===e||void 0===e||null===(i=e.images)||void 0===i?void 0:i[0]);return console.log(n),(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)("div",{className:p().item,children:[(0,a.jsx)("div",{className:p().item__image,children:(0,a.jsx)(o.default,{alt:e.name,src:"https://api.chistayaliniya.tj"+n,width:66,height:66})}),(0,a.jsx)("div",{className:p().item__title,children:e.name||e.productName}),(0,a.jsxs)("div",{className:p().item__count,children:[e.count," \u0448\u0442."]}),(0,a.jsxs)("div",{className:p().item__price,children:["(",Math.round(e.price-e.price*e.discount/100),") \u0441."]})]}),(0,a.jsx)("div",{className:p().divider})]},e.id||e.productId)}))}),(0,a.jsx)("div",{className:p().title,children:"\u0418\u0442\u043e\u0433\u043e:"}),(0,a.jsxs)("div",{className:p().result,children:[(0,a.jsx)("span",{children:"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"}),(0,a.jsxs)("span",{children:[Math.round(r.reduce((function(e,t){return e+(t.price-t.price*t.discount/100)*t.count}),0)+(t?t.price:0))," \u0441."]})]})]})},h=r(4184),f=r.n(h),x=r(9484),j=r(6079),N=r(5997),b=r(4410),O=r(1163),w=r(2029);function g(e,t,r,i,n,a,s){try{var c=e[a](s),l=c.value}catch(d){return void r(d)}c.done?t(l):Promise.resolve(l).then(i,n)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],i=!0,n=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);i=!0);}catch(l){n=!0,a=l}finally{try{i||null==c.return||c.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C=!0,k=function(e){var t,r=e.categories,i=e.paymentTypes,c=e.deliverytypes,v=(0,m.v9)((function(e){return e.user})),p=(0,m.I0)(),h=(0,O.useRouter)(),C=S(s.useState(""),2),k=C[0],P=C[1],E=S(s.useState(""),2),A=E[0],I=E[1],D=S(s.useState(i.length?i[0]:""),2),Z=D[0],M=D[1],X=S(s.useState(i.length?c[0]:""),2),B=X[0],R=X[1],q=s.useCallback((t=n().mark((function e(){var t,r,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.isAuth){e.next=2;break}return e.abrupt("return",I("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043f\u0435\u0440\u0435\u0434 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0437\u0430\u044f\u0432\u043a\u0438"));case 2:return t=JSON.stringify({deliveryTypeId:B.id,paymentTypeId:Z.id,description:k}),r={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("bw-client-token")},body:t},e.next=6,fetch("https://api.chistayaliniya.tj/api/order",r);case 6:204===(i=e.sent).status&&(h.push("/order-list"),p((0,w.mR)())),401!==i.status&&403!==i.status||(localStorage.removeItem("bw-client-token"),window.location.href="/",p((0,j.k)())),401!==i.status&&403!==i.status||(localStorage.removeItem("bw-client-token"),window.location.href="/",p((0,j.k)()));case 10:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(i,n){var a=t.apply(e,r);function s(e){g(a,i,n,s,c,"next",e)}function c(e){g(a,i,n,s,c,"throw",e)}s(void 0)}))}),[p,B,k,Z,v.isAuth,h]);return s.useEffect((function(){var e=null;return v.isAuth||(e=setTimeout((function(){p((0,b.M)((function(e){return(0,a.jsx)(N.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){T(e,t,r[t])}))}return e}({},e))})))}),1e3)),function(){return clearTimeout(e)}}),[v.isAuth,p]),(0,a.jsxs)(_.Z,{categories:r,children:[(0,a.jsxs)(d.default,{children:[(0,a.jsx)("title",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,a.jsxs)("div",{className:l().root,children:[(0,a.jsx)(u.Z,{className:l().title,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),(0,a.jsxs)("div",{className:l().container,children:[(0,a.jsx)("div",{className:l().sidebar,children:(0,a.jsx)(y,{deliveryType:B})}),(0,a.jsxs)("div",{className:l().content,children:[(0,a.jsx)("div",{className:l().text,children:(0,a.jsx)("textarea",{placeholder:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435 \u043a \u0437\u0430\u043a\u0430\u0437\u0443",value:k,onChange:function(e){return P(e.target.value)}})}),(0,a.jsxs)("div",{className:l().payment,children:[(0,a.jsx)("div",{className:l().paymentTypes,children:i.map((function(e){return(0,a.jsxs)("div",{onClick:function(){return M(e)},className:f()(l().paymentType,Z.id===e.id&&l().selected),children:[(0,a.jsx)("div",{className:l().paymentType__image,children:(0,a.jsx)(o.default,{alt:e.name,src:"https://api.chistayaliniya.tj"+e.imagePath,width:90,height:50})}),(0,a.jsx)("div",{className:l().paymentType__name,children:e.name})]},e.id)}))}),(0,a.jsx)("div",{className:l().selectedPaymentType,children:Z.description})]}),(0,a.jsxs)("div",{className:l().delivery,children:[(0,a.jsx)("div",{className:l().subtitle,children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,a.jsx)("div",{className:l().deliverytypes,children:c.map((function(e){return(0,a.jsxs)("div",{onClick:function(){return R(e)},className:f()(l().deliverytype,B.id===e.id&&l().active),children:[(0,a.jsx)("div",{className:l().deliverytype__icon,children:B.id===e.id?(0,a.jsx)(x.fE,{}):(0,a.jsx)(x.lD,{})}),(0,a.jsx)("div",{className:l().deliverytype__name,children:e.name}),(0,a.jsxs)("div",{className:l().deliverytype__price,children:[e.price," \u0441."]})]},e.id)}))})]}),(0,a.jsx)("button",{className:l().submit,onClick:q,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),!v.isAuth&&(0,a.jsx)("div",{className:l().error,children:A})]})]})]})]})}},1497:function(e){e.exports={root:"CartSidebar_root__D1qBI",title:"CartSidebar_title__08DrZ",cart:"CartSidebar_cart__ICtvF",item:"CartSidebar_item__MyQQX",divider:"CartSidebar_divider__nfAjt",item__image:"CartSidebar_item__image__RHWeA",item__title:"CartSidebar_item__title__emzpq",item__count:"CartSidebar_item__count__oHOvO",item__price:"CartSidebar_item__price__rgJED",result:"CartSidebar_result__ymaFd"}},1697:function(e){e.exports={root:"Title_root__iQCXf",wrap:"Title_wrap__StYPt"}},4255:function(e){e.exports={root:"Order_root__h30B4",title:"Order_title__1zNC9",container:"Order_container___yqfo",sidebar:"Order_sidebar___vK2s",content:"Order_content__a9bfK",text:"Order_text__ZARfT",payment:"Order_payment__lGchD",paymentTypes:"Order_paymentTypes__Ek_OS",paymentType:"Order_paymentType__vC8nY",selected:"Order_selected___Mtkc",selectedPaymentType:"Order_selectedPaymentType__xovba",deliverytypes:"Order_deliverytypes__nXDEP",deliverytype:"Order_deliverytype__g3woT",active:"Order_active__4vYvh",deliverytype__icon:"Order_deliverytype__icon___Otb5",deliverytype__name:"Order_deliverytype__name__fZaGc",deliverytype__price:"Order_deliverytype__price__HNWUs",submit:"Order_submit__EL_ag",subtitle:"Order_subtitle__aEDww",error:"Order_error__aNBgL"}}},function(e){e.O(0,[92,168,774,888,179],(function(){return t=6054,e(e.s=t);var t}));var t=e.O();_N_E=t}]);