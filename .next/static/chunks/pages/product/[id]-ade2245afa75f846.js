(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{2379:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return n(7544)}])},7544:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return K},default:function(){return Q}});var r=n(5893),i=n(7294),a=n(9008),o=n(5168),s=n(3444),c=n.n(s),u=n(4184),l=n.n(u),d=n(9484),_=n(5617),f=n(2029),m=n(6450),h=n(5675),v=n(3776),p=n.n(v),x=n(6066);function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){j(t,e,n[e])}))}return t}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function(t){var e=t.product,n=t.width,a=[e.images.find((function(t){return t.isMain}))].concat(b(e.images.filter((function(t){return!t.isMain})))),o=g(i.useState(null),2),s=o[0],c=o[1],u=g(i.useState({width:n+"px",gridTemplateColumns:"100px ".concat(n-100,"px")}),2),l=u[0],d=u[1];return i.useEffect((function(){var t=function(){window.innerWidth<720&&d({width:n+"px",gridTemplateColumns:"".concat(n,"px")})};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[n]),(0,r.jsxs)("div",{className:p().root,style:l,children:[(0,r.jsx)("div",{className:p().pagination,children:a.map((function(t,e){return(0,r.jsx)("button",{onClick:function(){return s&&s.slickGoTo(e)},className:p().paging,children:(0,r.jsx)(h.default,{src:"".concat("https://api.chistayaliniya.tj","/").concat(a[e].imagePath),alt:"product-image-"+e,width:"100%",height:"100%",layout:"responsive",objectFit:"contain"})},t.id)}))}),(0,r.jsx)("div",{className:p().slider,children:(0,r.jsx)(x.Z,C({},{infinite:!1,arrows:!1,speed:200,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0},{ref:function(t){return c(t)},children:a.map((function(t,e){return(0,r.jsx)("div",{className:p().image,children:(0,r.jsx)(h.default,{src:"".concat("https://api.chistayaliniya.tj","/").concat(a[e].imagePath),alt:"product-image-"+e,width:"100%",height:"100%",layout:"responsive",objectFit:"contain"})},t.id)}))}))})]})},N=n(6724),w=n.n(N),P=function(t){for(var e=t.rating,n=[],i=1;i<=5;i++)i<=e?n.push({key:i,filled:!0}):n.push({key:i,filled:!1});return(0,r.jsx)("div",{className:w().stars,children:n.map((function(t){return(0,r.jsx)(A,{filled:t.filled},t.key)}))})},A=function(t){var e=t.filled;return(0,r.jsx)("div",{className:l()(w().star,e&&w().filled),children:(0,r.jsx)(d.Ux,{size:20})})},k=function(t){var e=t.comments,n=t.onAdd;return(0,r.jsxs)("div",{className:w().root,children:[(0,r.jsx)("div",{className:w().title,children:"\u041e\u0442\u0437\u044b\u0432\u044b"}),(0,r.jsx)("button",{onClick:n,className:l()(w().addButton,w().active),children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"}),0===e.length&&(0,r.jsx)("div",{className:w().noContent,children:"\u0423 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u043d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432, \u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u043f\u0435\u0440\u0432\u044b\u043c!"}),e.map((function(t){return(0,r.jsxs)("div",{className:w().comment,children:[(0,r.jsxs)("div",{className:w().label,children:[(0,r.jsx)("div",{className:w().author,children:t.userName}),(0,r.jsx)(P,{rating:t.rating})]}),(0,r.jsx)("div",{className:w().text,children:t.text}),(0,r.jsx)("div",{className:w().date,children:new Date(t.commentAt).toLocaleDateString()})]},t.id)}))]})},S=n(9141),F=n.n(S),O=function(t){var e=t.characteristics;return(0,r.jsxs)("div",{className:F().root,children:[(0,r.jsx)("div",{className:F().title,children:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"}),e.map((function(t){return(0,r.jsxs)("div",{className:F().characteristic,children:[(0,r.jsxs)("div",{className:F().name,children:[t.name,":"]}),(0,r.jsx)("div",{className:F().value,children:t.value})]},t.id)}))]})},E=n(4410),T=n(8520),I=n.n(T),W=n(6079),z=n(8877),D=n.n(z);function B(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=function(t){var e=t.rating,n=t.setRating,a=G(i.useState(0),2),o=a[0],s=a[1],c=G(i.useState([]),2),u=c[0],l=c[1];return i.useEffect((function(){for(var t=[],n=1;n<=5;n++)t.push({key:n,filled:n<=e,lightFilled:n<=o});l(t)}),[e,o]),(0,r.jsx)("div",{className:D().stars,children:u.map((function(t,e){return(0,r.jsx)(H,{onHover:function(){return s(e+1)},onLeave:function(){return s(0)},onClick:function(){return n(e+1)},filled:t.filled,lightFilled:t.lightFilled},t.key)}))})},H=function(t){var e=t.filled,n=t.lightFilled,i=t.onClick,a=t.onHover,o=t.onLeave;return(0,r.jsx)("div",{onMouseOver:a,onMouseLeave:o,className:l()(D().star,e&&D().filled,n&&D().lightFilled),onClick:i,children:(0,r.jsx)(d.Ux,{size:45})})},J=function(t){var e,n=t.onClose,a=t.setComments,o=t.id,s=G(i.useState(""),2),c=s[0],u=s[1],l=G(i.useState(""),2),d=l[0],_=l[1],f=G(i.useState(1),2),m=f[0],h=f[1],v=i.useCallback((e=I().mark((function t(){var e,r;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:c,text:d,rating:m,productId:o})},t.next=3,fetch("https://api.chistayaliniya.tj/api/comment",e);case 3:return 401!==(r=t.sent).status&&403!==r.status||(localStorage.removeItem("bw-client-token"),window.location.href="/",dispatch((0,W.k)())),t.next=7,r.json();case 7:t.sent,a({id:String((new Date).valueOf()),userName:c,text:d,rating:m,commentAt:(new Date).toJSON()}),n();case 10:case"end":return t.stop()}}),t)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(t){B(a,r,i,o,s,"next",t)}function s(t){B(a,r,i,o,s,"throw",t)}o(void 0)}))}),[o,n,c,d,m,a]);return i.useEffect((function(){var t=function(t){t.target.closest("."+D().wrap)||n()};return window.addEventListener("mousedown",t),function(){return window.removeEventListener("mousedown",t)}}),[n]),(0,r.jsx)("div",{className:D().root,children:(0,r.jsxs)("div",{className:D().wrap,children:[(0,r.jsx)("div",{className:D().title,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),(0,r.jsxs)("div",{className:D().inputsWrap,children:[(0,r.jsxs)("div",{className:D().inputWrap,children:[(0,r.jsx)("div",{className:D().inputTitle,children:"\u0418\u043c\u044f"}),(0,r.jsx)("input",{className:D().input,type:"text",value:c,onChange:function(t){return u(t.target.value)}})]}),(0,r.jsxs)("div",{className:D().inputWrap,children:[(0,r.jsx)("div",{className:D().inputTitle,children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),(0,r.jsx)("textarea",{className:D().textarea,type:"text",value:d,onChange:function(t){return _(t.target.value)}})]})]}),(0,r.jsxs)("div",{className:D().starWrap,children:[(0,r.jsx)("div",{className:D().starTitle,children:"\u0412\u0430\u0448\u0430 \u043e\u0446\u0435\u043d\u043a\u0430"}),(0,r.jsx)(L,{rating:m,setRating:h})]}),(0,r.jsx)("div",{className:D().buttonWrap,children:(0,r.jsx)("button",{className:D().button,onClick:v,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})};function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function U(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var X=function(t){for(var e=t.rating,n=[],i=1;i<=5;i++)i<=e?n.push({key:i,filled:!0}):n.push({key:i,filled:!1});return(0,r.jsx)("div",{className:c().stars,children:n.map((function(t){return(0,r.jsx)(Z,{filled:t.filled},t.key)}))})},Z=function(t){var e=t.filled;return(0,r.jsx)("div",{className:l()(c().star,e&&c().filled),children:(0,r.jsx)(d.Ux,{size:30})})},K=!0,Q=function(t){var e=t.product,n=t.categories,s=t.initialComments,u=M(i.useState(0),2),h=u[0],v=u[1],p=M(i.useState(s||[]),2),x=p[0],j=p[1],C=i.useRef(null),g=M(i.useState(1),2),b=g[0],N=g[1],w=M(i.useState(!1),2),P=w[0],A=w[1],S=(0,_.v9)((function(t){return t.cart})),F=(0,_.v9)((function(t){return t.user})),T=(0,_.v9)((function(t){return t.favorites})),I=(0,_.I0)(),W=i.useCallback((function(){window.location.href="/order"}),[]),z=i.useCallback((function(){I((0,E.M)((function(t){return(0,r.jsx)(J,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){V(t,e,n[e])}))}return t}({},t,{id:e.id,setComments:function(t){return j((function(e){return U(e).concat([t])}))}}))})))}),[e.id,I]),D=i.useCallback((function(t){A(t),F.isAuth?I(t?(0,m.GG)(e):(0,m.II)(e.id)):I(t?(0,m._p)(e):(0,m.zm)(e.id))}),[I,F.isAuth,e]),B=i.useCallback((function(){1===b?F.isAuth?I((0,f.kB)(e.id)):I((0,f.h2)(e.id)):F.isAuth?I((0,f.EG)(e.id,b-1)):I((0,f.lJ)(e.id,b-1))}),[F.isAuth,I,b,e.id]),G=i.useCallback((function(){F.isAuth?I((0,f.EG)(e.id,b+1)):I((0,f.lJ)(e.id,b+1))}),[F.isAuth,I,e.id,b]),L=i.useCallback((function(t){if(!t||""===t)return N(t);F.isAuth?I((0,f.EG)(e.id,Number(t))):I((0,f.lJ)(e.id,Number(t)))}),[F.isAuth,I,e.id]),H=i.useCallback((function(){F.isAuth?I((0,f.ov)(e)):I((0,f.Xq)(e))}),[F.isAuth,I,e]);return i.useEffect((function(){var t;N((null===(t=S.find((function(t){return t.productId===e.id})))||void 0===t?void 0:t.count)||0)}),[e.id,S]),i.useEffect((function(){e&&F.isAuth&&A(T.find((function(t){return t.productId===e.id||t.id===e.id})))}),[e,F.isAuth,T]),i.useEffect((function(){C&&C.current&&v(C.current.offsetWidth)}),[]),(0,r.jsxs)(o.Z,{categories:n,children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:e.name})}),(0,r.jsxs)("div",{className:c().root,children:[(0,r.jsxs)("div",{className:c().left,ref:C,children:[(0,r.jsx)("div",{className:c().title,children:e.name}),(0,r.jsx)(X,{rating:e.rating}),(0,r.jsxs)("div",{className:c().subTitle,children:[(0,r.jsxs)("div",{className:c().commentCount,children:[e.comment.length," \u043e\u0442\u0437\u044b\u0432\u043e\u0432"]}),(0,r.jsxs)("div",{className:c().commentCount,children:["\u0410\u0440\u0442\u0438\u043a\u0443\u043b\u044c ",e.vendorCode]})]}),(0,r.jsx)(y,{width:h,product:e}),(0,r.jsxs)("div",{className:c().info,children:[(0,r.jsx)(O,{characteristics:e.characteristics}),(0,r.jsx)(k,{comments:x,onAdd:z})]})]}),(0,r.jsx)("div",{className:c().rightWrap,children:(0,r.jsxs)("div",{className:c().right,children:[0!==e.discount&&(0,r.jsx)("div",{className:c().discount,children:e.discount&&"\u0430\u043a\u0446\u0438\u044f "+e.discount+"%"}),(0,r.jsx)("pre",{className:c().description,children:e.description}),(0,r.jsxs)("button",{className:l()(c().favor,P&&c().active),onClick:function(){return D(!P)},children:[P&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:l()(c().favor_icon,c().active),children:(0,r.jsx)(d.rF,{size:22})}),"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"]}),!P&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:c().favor_icon,children:(0,r.jsx)(d.Ie,{size:22})}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"]})]}),(0,r.jsxs)("div",{className:c().cart,children:[0!==b&&(0,r.jsxs)("div",{className:c().countForCart__wrap,children:[(0,r.jsx)("div",{className:c().countForCart__title,children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"}),(0,r.jsxs)("div",{className:c().countForCart,children:[(0,r.jsx)("button",{className:l()(c().countForCart_button,c().countForCart_buttonDecrease),onClick:B,children:"-"}),(0,r.jsx)("input",{value:b,onChange:function(t){return L(t.target.value)},className:c().countForCart_value,onBlur:function(t){return L(t.target.value||1)}}),(0,r.jsx)("button",{className:l()(c().countForCart_button,c().countForCart_buttonIncrease),onClick:G,children:"+"})]}),(0,r.jsxs)("div",{className:c().result,children:["\u0418\u0442\u043e\u0433\u043e: ",b*e.price," \u0441."]}),(0,r.jsx)("button",{className:l()(c().addToCartButton,c().active),onClick:W,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435"})]}),!b&&""!==b&&(0,r.jsxs)("button",{className:c().addToCartButton,onClick:H,children:[(0,r.jsx)("div",{className:c().cart_icon,children:(0,r.jsx)(d.yT,{size:20})}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})]}),(0,r.jsxs)("div",{className:c().price,children:[e.price-e.price*e.discount/100," \u0441.",0!==e.discount&&(0,r.jsxs)("div",{className:c()["price-discount"],children:[e.price," \u0441."]})]})]})})]})]})}},9141:function(t){t.exports={root:"Characteristics_root__jxN_A",title:"Characteristics_title__sQ33L",characteristic:"Characteristics_characteristic__AVm4M",name:"Characteristics_name__QEvkZ",value:"Characteristics_value__sO7C5"}},6724:function(t){t.exports={root:"Comments_root__6_StT",noContent:"Comments_noContent__y4__t",title:"Comments_title__Uuuxo",stars:"Comments_stars__w18IW",star:"Comments_star__Id_Kw",filled:"Comments_filled__M_axo",label:"Comments_label__OyQCW",author:"Comments_author__yiS2I",text:"Comments_text__ov8FD",date:"Comments_date__K8Sys",addButton:"Comments_addButton__cwprP"}},3776:function(t){t.exports={root:"ProductImages_root__Bzxby",image:"ProductImages_image__yy1_8",pagination:"ProductImages_pagination__e5SPh",paging:"ProductImages_paging__n_w6p"}},8877:function(t){t.exports={root:"AddComment_root__mUVQB",wrap:"AddComment_wrap__amYnY",title:"AddComment_title__GfdTz",inputsWrap:"AddComment_inputsWrap__GwSTS",inputWrap:"AddComment_inputWrap__wDHoP",input:"AddComment_input__6fguD",textarea:"AddComment_textarea__VTVld",stars:"AddComment_stars__Dr_zE",star:"AddComment_star__7OrXg",lightFilled:"AddComment_lightFilled__ttk78",filled:"AddComment_filled__FUkJV",buttonWrap:"AddComment_buttonWrap__ktfV0",button:"AddComment_button__n4gaK"}},3444:function(t){t.exports={rightWrap:"Product_rightWrap__70_m0",root:"Product_root__dhzVS",title:"Product_title__k8Sjr",subTitle:"Product_subTitle__3dhI2",right:"Product_right__7CIla",price:"Product_price__YebSt","price-discount":"Product_price-discount__laj5B",description:"Product_description__zDHI1",cart:"Product_cart__apdsi",cart_icon:"Product_cart_icon__82AsJ",countForCart:"Product_countForCart__lXLJd",countForCart_button:"Product_countForCart_button__w6HoZ",countForCart_buttonDecrease:"Product_countForCart_buttonDecrease__P6sGL",countForCart_buttonIncrease:"Product_countForCart_buttonIncrease__sVfNk",countForCart__title:"Product_countForCart__title__8IaEJ",countForCart__wrap:"Product_countForCart__wrap__Wo8iK",countForCart_value:"Product_countForCart_value__EjfRI",addToCartButton:"Product_addToCartButton___pF0_",active:"Product_active__nwGxa",favor:"Product_favor__HB_8P",favor_icon:"Product_favor_icon__xr3z9",stars:"Product_stars__mHv6G",star:"Product_star__na_Zb",filled:"Product_filled__W9kWW",result:"Product_result__1s_PX",discount:"Product_discount__YC_zi",characteristics:"Product_characteristics__NOOcg",info:"Product_info__ZHDvb"}}},function(t){t.O(0,[92,168,774,888,179],(function(){return e=2379,t(t.s=e);var e}));var e=t.O();_N_E=e}]);