(() => {
var exports = {};
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 4457:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Title_root__iQCXf",
	"wrap": "Title_wrap__StYPt"
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

/***/ 1837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4660);
/* harmony import */ var _layouts_LayoutController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5168);
/* harmony import */ var _styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5807);
/* harmony import */ var _styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9484);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);











const getStaticProps = async ()=>{
    const categories = await fetch("https://api.chistayaliniya.tj/api" + '/categories').then((res)=>res.json()
    );
    return {
        props: {
            categories
        },
        revalidate: 20
    };
};
const OrderList = ({ categories  })=>{
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.user
    );
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [pending, setPending] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const handleGoToOrder = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((id)=>{
        router.push(`/order/${id}`);
    }, [
        router
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (!user.isAuth) {
            return router.push('/');
        }
        const getData = async ()=>{
            try {
                setPending(true);
                const response = await fetch("https://api.chistayaliniya.tj/api" + '/order/userorders', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + user.token
                    }
                });
                if (response.status === 401 || response.status === 403) {
                    localStorage.removeItem("bw-client-token");
                    window.location.href = '/';
                    dispatch(logout());
                }
                const dataOrder = await response.json();
                setData(dataOrder);
            } finally{
                setPending(false);
            }
        };
        getData();
    }, [
        user,
        router
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        console.log(data);
    }, [
        data
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (!localStorage.getItem("bw-client-token") || !user.isAuth) {
            window.location.href = '/';
        }
    }, [
        user.isAuth
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutController__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Оформить заказ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().root),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: "Список ваших заказов"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            !pending && data.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().noContent),
                                children: "У вас пока нет заказов"
                            }),
                            !pending && data.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().table),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                children: "Статус"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                children: "Кол-во товаров"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                children: "Способ дотавки"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                children: "Способ оплаты"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                children: "Стоимость"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                children: "Дата заказа"
                                            })
                                        ]
                                    }),
                                    data.map((item1, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().row),
                                            onClick: ()=>handleGoToOrder(item1.orderId)
                                            ,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                    children: item1.orderStatus
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                    children: [
                                                        item1.type.reduce((acc, item)=>acc + item.count
                                                        , 0),
                                                        " шт."
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                    children: item1.deliveryType
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                    children: item1.paymentType
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                    children: [
                                                        item1.type.reduce((acc, item)=>acc + (item.price - item.price / 100 * item.discount)
                                                        , 0),
                                                        " с."
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().col),
                                                    children: new Date(item1.orderAt).toLocaleDateString()
                                                })
                                            ]
                                        }, index)
                                    )
                                ]
                            })
                        ]
                    }),
                    !pending && data.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileTable),
                        children: data.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileDropdown, {
                                item: item
                            }, index)
                        )
                    })
                ]
            })
        ]
    }));
};
const MobileDropdown = ({ item: item2  })=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__label),
                onClick: ()=>setOpen(!open)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__prop),
                            children: "Стоимость"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__value),
                            children: [
                                item2.type.reduce((acc, item)=>acc + (item.price - item.price / 100 * item.discount)
                                , 0),
                                " с."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_9___default()((_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__arrow), open && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().open)),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_8__/* .KeyboardArrowDown */ .Wd, {
                            })
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__content),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__rows),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__content__row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__prop),
                                            children: "Статус"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__value),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_9___default()((_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().status), item2.orderStatus === 'Новый' && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default()["new"]), item2.orderStatus === 'Одобрено' && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().approved), item2.orderStatus === 'Отказано' && (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().rejected)),
                                                children: item2.orderStatus
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__content__row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__prop),
                                            children: "Кол-во товаров"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__value),
                                            children: [
                                                item2.type.reduce((acc, item)=>acc + item.count
                                                , 0),
                                                " шт."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__content__row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__prop),
                                            children: "Способ дотавки"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__value),
                                            children: item2.deliveryType
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__content__row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__prop),
                                            children: "Способ оплаты"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__value),
                                            children: item2.paymentType
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__content__row),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__prop),
                                            children: "Дата заказа"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__value),
                                            children: new Date(item2.orderAt).toLocaleDateString()
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            href: "/order/" + item2.orderId,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: (_styles_OrderList_module_scss__WEBPACK_IMPORTED_MODULE_10___default().mobileDropdown__link),
                                children: "Подробнее"
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderList);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168,807], () => (__webpack_exec__(1837)));
module.exports = __webpack_exports__;

})();