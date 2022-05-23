(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 4653:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Cart_root___0m9z",
	"noContent": "Cart_noContent__ir3jo",
	"title": "Cart_title__jPDjG",
	"clearButtonWrap": "Cart_clearButtonWrap__cqtUI",
	"clearButton": "Cart_clearButton__VhO3N",
	"list": "Cart_list__T2ogO",
	"item": "Cart_item__KrFOu",
	"item_commonPrice": "Cart_item_commonPrice__4E798",
	"item_removeButton": "Cart_item_removeButton__ooxPG",
	"item_image": "Cart_item_image___GDHF",
	"item_name": "Cart_item_name__bPMHO",
	"item_countController": "Cart_item_countController__XcuWb",
	"item_end": "Cart_item_end__XCCwo",
	"item_countController_wrap": "Cart_item_countController_wrap__QLgvD",
	"item_count": "Cart_item_count__q6vtr",
	"item_countButton": "Cart_item_countButton__mxyaU",
	"item_price": "Cart_item_price__mf7Cd",
	"totalInfo_wrap": "Cart_totalInfo_wrap__9UY6Y",
	"totalInfo": "Cart_totalInfo__E92yR",
	"totalInfo_up": "Cart_totalInfo_up__JCzD7",
	"totalInfo_count": "Cart_totalInfo_count__clhWa",
	"totalInfo_price": "Cart_totalInfo_price__v6KV8",
	"checkoutButton": "Cart_checkoutButton__1B8rV"
};


/***/ }),

/***/ 7521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _layouts_LayoutController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4653);
/* harmony import */ var _styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2029);










const getStaticProps = async ()=>{
    const categories = await fetch("https://api.chistayaliniya.tj/api" + "/categories").then((res)=>res.json()
    );
    return {
        props: {
            categories
        },
        revalidate: 20
    };
};
const Cart = ({ categories  })=>{
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user
    );
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.cart
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const handleIncrease = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback((id, currentCount)=>{
        if (user.isAuth) dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .changeProductCountService */ .EG)(id, currentCount + 1));
        else dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .changeProductCount */ .lJ)(id, currentCount + 1));
    }, [
        dispatch,
        user
    ]);
    const handleDecrease = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback((id, currentCount)=>{
        if (currentCount === 1) if (user.isAuth) dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .removeFromCartService */ .kB)(id));
        else dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .removeFromCart */ .h2)(id));
        else if (user.isAuth) dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .changeProductCountService */ .EG)(id, currentCount - 1));
        else dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .changeProductCount */ .lJ)(id, currentCount - 1));
    }, [
        dispatch,
        user
    ]);
    const handleRemove = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback((id)=>{
        if (user.isAuth) dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .removeFromCartService */ .kB)(id));
        else dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_8__/* .removeFromCart */ .h2)(id));
    }, [
        dispatch,
        user
    ]);
    const handleCheckout = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback(()=>{
        router.push("/order");
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutController__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Корзина"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().root),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().clearButtonWrap),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                            children: "Корзина"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().list),
                        children: cart.map((item)=>{
                            var ref, ref1, ref2;
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_image),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            src: "https://api.chistayaliniya.tj" + (((ref = item.images) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.imagePath) || ((ref2 = item.images) === null || ref2 === void 0 ? void 0 : ref2[0]) || item.imagePath),
                                            alt: item.name || item.productName,
                                            width: 100,
                                            height: 100
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_name),
                                        children: item.name || item.productName
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_countController),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_countController_wrap),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_countButton), (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_increase)),
                                                        onClick: ()=>handleIncrease(item.id || item.productId, item.count)
                                                        ,
                                                        children: "+"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_count),
                                                        children: item.count
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_countButton), (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_increase)),
                                                        onClick: ()=>handleDecrease(item.id || item.productId, item.count)
                                                        ,
                                                        children: "-"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_price),
                                                children: [
                                                    "x ",
                                                    item.price,
                                                    " с."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_end),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_commonPrice),
                                                children: [
                                                    (item.price * item.count).toFixed(1),
                                                    " с."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item_removeButton),
                                                onClick: ()=>handleRemove(item.id || item.productId)
                                                ,
                                                children: "Удалить"
                                            })
                                        ]
                                    })
                                ]
                            }, item.productId));
                        })
                    }),
                    cart.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().totalInfo_wrap),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().totalInfo),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().totalInfo_up),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().totalInfo_price),
                                            children: [
                                                cart.reduce((acc, item)=>acc + item.count * item.price
                                                , 0).toFixed(1),
                                                " ",
                                                "с."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().totalInfo_count),
                                            children: [
                                                "Всего товаров:",
                                                " ",
                                                cart.reduce((acc, item)=>acc + item.count
                                                , 0),
                                                " шт."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().checkoutButton),
                                    onClick: handleCheckout,
                                    children: "Перейти к оплате"
                                })
                            ]
                        })
                    }),
                    cart.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Cart_module_scss__WEBPACK_IMPORTED_MODULE_9___default().noContent),
                        children: "Корзина пуста"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168], () => (__webpack_exec__(7521)));
module.exports = __webpack_exports__;

})();