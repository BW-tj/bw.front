(() => {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 7711:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "CartSidebar_root__D1qBI",
	"title": "CartSidebar_title__08DrZ",
	"cart": "CartSidebar_cart__ICtvF",
	"item": "CartSidebar_item__MyQQX",
	"divider": "CartSidebar_divider__nfAjt",
	"item__image": "CartSidebar_item__image__RHWeA",
	"item__title": "CartSidebar_item__title__emzpq",
	"item__count": "CartSidebar_item__count__oHOvO",
	"item__price": "CartSidebar_item__price__rgJED",
	"result": "CartSidebar_result__ymaFd"
};


/***/ }),

/***/ 4457:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Title_root__iQCXf",
	"wrap": "Title_wrap__StYPt"
};


/***/ }),

/***/ 4953:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Order_root__h30B4",
	"title": "Order_title__1zNC9",
	"container": "Order_container___yqfo",
	"sidebar": "Order_sidebar___vK2s",
	"content": "Order_content__a9bfK",
	"text": "Order_text__ZARfT",
	"payment": "Order_payment__lGchD",
	"paymentTypes": "Order_paymentTypes__Ek_OS",
	"paymentType": "Order_paymentType__vC8nY",
	"selected": "Order_selected___Mtkc",
	"selectedPaymentType": "Order_selectedPaymentType__xovba",
	"deliverytypes": "Order_deliverytypes__nXDEP",
	"deliverytype": "Order_deliverytype__g3woT",
	"active": "Order_active__4vYvh",
	"deliverytype__icon": "Order_deliverytype__icon___Otb5",
	"deliverytype__name": "Order_deliverytype__name__fZaGc",
	"deliverytype__price": "Order_deliverytype__price__HNWUs",
	"submit": "Order_submit__EL_ag",
	"subtitle": "Order_subtitle__aEDww",
	"error": "Order_error__aNBgL"
};


/***/ }),

/***/ 4660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4457);
/* harmony import */ var _Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Title_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Title = ({ children , className  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default().root),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Title_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrap), className),
            children: children
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ order),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles/Order.module.scss
var Order_module = __webpack_require__(4953);
var Order_module_default = /*#__PURE__*/__webpack_require__.n(Order_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./layouts/LayoutController.js + 19 modules
var LayoutController = __webpack_require__(5168);
// EXTERNAL MODULE: ./components/Title/Title.js
var Title = __webpack_require__(4660);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/CartSidebar/index.module.scss
var index_module = __webpack_require__(7711);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/CartSidebar/index.js





const CartSidebar = ({ deliveryType  })=>{
    const cart = (0,external_react_redux_.useSelector)((state)=>state.cart
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).title,
                children: "Выбранные товары:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).cart,
                children: cart.map((item)=>{
                    var ref, ref1, ref2;
                    const image = (item === null || item === void 0 ? void 0 : (ref = item.images) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.imagePath) || (item === null || item === void 0 ? void 0 : (ref2 = item.images) === null || ref2 === void 0 ? void 0 : ref2[0]);
                    console.log(image);
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (index_module_default()).item,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (index_module_default()).item__image,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            alt: item.name,
                                            src: "https://api.chistayaliniya.tj" + image,
                                            width: 66,
                                            height: 66
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (index_module_default()).item__title,
                                        children: item.name || item.productName
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (index_module_default()).item__count,
                                        children: [
                                            item.count,
                                            " шт."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (index_module_default()).item__price,
                                        children: [
                                            "(",
                                            Math.round(item.price - item.price * item.discount / 100),
                                            ") с."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (index_module_default()).divider
                            })
                        ]
                    }, item.id || item.productId));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).title,
                children: "Итого:"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).result,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Сумма заказа"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        children: [
                            Math.round(cart.reduce((sum, item)=>sum + (item.price - item.price * item.discount / 100) * item.count
                            , 0) + (deliveryType ? deliveryType.price : 0)),
                            " с."
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_CartSidebar = (CartSidebar);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./icons/index.js + 29 modules
var icons = __webpack_require__(9484);
// EXTERNAL MODULE: ./redux/actions/user.actions.js
var user_actions = __webpack_require__(6079);
// EXTERNAL MODULE: ./popups/Authorization/Authorization.popup.js + 2 modules
var Authorization_popup = __webpack_require__(5997);
// EXTERNAL MODULE: ./redux/actions/popup.actions.js
var popup_actions = __webpack_require__(4410);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./redux/actions/cart.actions.js
var cart_actions = __webpack_require__(2029);
;// CONCATENATED MODULE: ./pages/order/index.js
















const getStaticProps = async ()=>{
    const categories = await fetch("https://api.chistayaliniya.tj/api" + '/categories').then((res)=>res.json()
    );
    const paymentTypes = await fetch("https://api.chistayaliniya.tj/api" + '/paymenttypes').then((res)=>res.json()
    );
    const deliverytypes = await fetch("https://api.chistayaliniya.tj/api" + '/deliverytype').then((res)=>res.json()
    );
    return {
        props: {
            categories,
            paymentTypes,
            deliverytypes
        },
        revalidate: 20
    };
};
const Order = ({ categories , paymentTypes , deliverytypes  })=>{
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const [text, setText] = external_react_default().useState('');
    const [error, setError] = external_react_default().useState('');
    const [selectedPaymentType, setSelectedPaymentType] = external_react_default().useState(paymentTypes.length ? paymentTypes[0] : '');
    const [selectedDeliveryType, setSelectedDeliveryType] = external_react_default().useState(paymentTypes.length ? deliverytypes[0] : '');
    const handleCheckout = external_react_default().useCallback(async ()=>{
        if (!user.isAuth) {
            return setError('Пожалуйста, авторизуйтесь перед оформлением заявки');
        }
        const body = JSON.stringify({
            deliveryTypeId: selectedDeliveryType.id,
            paymentTypeId: selectedPaymentType.id,
            description: text
        });
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("bw-client-token")
            },
            body
        };
        const response = await fetch("https://api.chistayaliniya.tj/api" + '/order', config);
        if (response.status === 204) {
            router.push('/order-list');
            dispatch((0,cart_actions/* cartRemoveAll */.mR)());
        }
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("bw-client-token");
            window.location.href = '/';
            dispatch((0,user_actions/* logout */.k)());
        }
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("bw-client-token");
            window.location.href = '/';
            dispatch((0,user_actions/* logout */.k)());
        }
    }, [
        dispatch,
        selectedDeliveryType,
        text,
        selectedPaymentType,
        user.isAuth,
        router
    ]);
    external_react_default().useEffect(()=>{
        let timeout = null;
        if (!user.isAuth) {
            timeout = setTimeout(()=>{
                dispatch((0,popup_actions/* openPopup */.M)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(Authorization_popup/* default */.Z, {
                        ...props
                    })
                ));
            }, 1000);
        }
        return ()=>clearTimeout(timeout)
        ;
    }, [
        user.isAuth,
        dispatch
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutController/* default */.Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Оформить заказ"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Order_module_default()).root,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        className: (Order_module_default()).title,
                        children: "Оформить заказ"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Order_module_default()).container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Order_module_default()).sidebar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_CartSidebar, {
                                    deliveryType: selectedDeliveryType
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Order_module_default()).content,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Order_module_default()).text,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Примечание к заказу",
                                            value: text,
                                            onChange: (e)=>setText(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Order_module_default()).payment,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Order_module_default()).paymentTypes,
                                                children: paymentTypes.map((paymentType)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        onClick: ()=>setSelectedPaymentType(paymentType)
                                                        ,
                                                        className: external_classnames_default()((Order_module_default()).paymentType, selectedPaymentType.id === paymentType.id && (Order_module_default()).selected),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (Order_module_default()).paymentType__image,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    alt: paymentType.name,
                                                                    src: "https://api.chistayaliniya.tj" + paymentType.imagePath,
                                                                    width: 90,
                                                                    height: 50
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (Order_module_default()).paymentType__name,
                                                                children: paymentType.name
                                                            })
                                                        ]
                                                    }, paymentType.id)
                                                )
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Order_module_default()).selectedPaymentType,
                                                children: selectedPaymentType.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Order_module_default()).delivery,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Order_module_default()).subtitle,
                                                children: "Доставка"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Order_module_default()).deliverytypes,
                                                children: deliverytypes.map((deliverytype)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        onClick: ()=>setSelectedDeliveryType(deliverytype)
                                                        ,
                                                        className: external_classnames_default()((Order_module_default()).deliverytype, selectedDeliveryType.id === deliverytype.id && (Order_module_default()).active),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (Order_module_default()).deliverytype__icon,
                                                                children: selectedDeliveryType.id === deliverytype.id ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* RadioButtonChecked */.fE, {
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* RadioButtonUnchecked */.lD, {
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: (Order_module_default()).deliverytype__name,
                                                                children: deliverytype.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (Order_module_default()).deliverytype__price,
                                                                children: [
                                                                    deliverytype.price,
                                                                    " с."
                                                                ]
                                                            })
                                                        ]
                                                    }, deliverytype.id)
                                                )
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: (Order_module_default()).submit,
                                        onClick: handleCheckout,
                                        children: "Оформить заказ"
                                    }),
                                    !user.isAuth && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Order_module_default()).error,
                                        children: error
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const order = (Order);


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168], () => (__webpack_exec__(2732)));
module.exports = __webpack_exports__;

})();