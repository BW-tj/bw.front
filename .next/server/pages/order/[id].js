"use strict";
(() => {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 5637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5807);
/* harmony import */ var _styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_LayoutController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5168);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






const getStaticPaths = async ()=>{
    const res = await fetch("https://api.chistayaliniya.tj/api" + '/order/getall');
    const orders = await res.json();
    const paths = [];
    orders.data.forEach((order)=>{
        paths.push({
            params: {
                id: order.orderId
            }
        });
    });
    return {
        paths,
        fallback: 'blocking'
    };
};
const getStaticProps = async (context)=>{
    const { id  } = context.params;
    const responseCategories = await fetch("https://api.chistayaliniya.tj/api" + '/categories');
    const categories = await responseCategories.json();
    const responseOrder = await fetch("https://api.chistayaliniya.tj/api" + '/order/' + id);
    const order = await responseOrder.json();
    return {
        props: {
            categories,
            order,
            id
        },
        revalidate: 20
    };
};
const OrderId = ({ categories , order , id  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutController__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            "Заказ ",
                            id
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().single),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().panel),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property), (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().statusProperty)),
                                        children: "Статус заказа:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().status), order.orderStatus === 'Новый' && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["new"]), order.orderStatus === 'Одобрено' && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().approved), order.orderStatus === 'Отказано' && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().rejected)),
                                            children: order.orderStatus
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                        children: "Фамилия заказчика:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                        children: order.lastName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                        children: "Имя заказчика:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                        children: order.firstName
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                        children: "Дата заказ:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                        children: new Date(order.orderAt).toLocaleDateString()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                        children: "Способ доставки:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                        children: order.deliveryType
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                        children: "Способ оплаты:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                        children: order.paymentType
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subtitle),
                                children: "Комментарий к заказу:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
                                children: order.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subtitle),
                                children: "Список товаров:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().products),
                                children: order.type.map((product, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().product),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                                        children: "Наименование товара:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                                        children: product.name
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                                        children: "Стоимость товара за единицу:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                                        children: product.price - product.price / 100 * product.discount
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().property),
                                                        children: "Количество товара:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_5___default().value),
                                                        children: product.count
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index)
                                )
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderId);


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168,807], () => (__webpack_exec__(5637)));
module.exports = __webpack_exports__;

})();