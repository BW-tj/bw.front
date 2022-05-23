(() => {
var exports = {};
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 9176:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Favorites_title__qFB0x",
	"noContent": "Favorites_noContent__8mUER"
};


/***/ }),

/***/ 4949:
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1627);
/* harmony import */ var _components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4660);
/* harmony import */ var _layouts_LayoutController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5168);
/* harmony import */ var _styles_Favorites_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9176);
/* harmony import */ var _styles_Favorites_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Favorites_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _skeletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3798);
/* harmony import */ var _components_ProductCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7737);
/* harmony import */ var _redux_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6450);











const getStaticProps = async ()=>{
    const categoriesRes = await fetch("https://api.chistayaliniya.tj/api" + '/categories');
    const categories = await categoriesRes.json();
    return {
        props: {
            categories
        },
        revalidate: 20
    };
};
const Favorites = ({ categories  })=>{
    const [pending, setPending] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.user
    );
    const favorites = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.favorites
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (!user.isAuth) return;
        let timeout;
        const getData = async ()=>{
            await setPending(true);
            await dispatch((0,_redux_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__/* .updateFavorites */ .VO)());
            timeout = window.setTimeout(()=>{
                setPending(false);
            }, 500);
        };
        getData();
        return ()=>window.clearTimeout(timeout)
        ;
    }, [
        user,
        dispatch
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutController__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Избранные продукты"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Favorites_module_scss__WEBPACK_IMPORTED_MODULE_10___default().root),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: (_styles_Favorites_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: "Избранное"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            !pending && favorites.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Favorites_module_scss__WEBPACK_IMPORTED_MODULE_10___default().noContent),
                                children: "У вас пока нет избранных товаров"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Products_Products__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                children: pending ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skeletons__WEBPACK_IMPORTED_MODULE_7__/* .ProductsSkeleton */ .Ip, {
                                }) : favorites.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductCart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        id: product.id,
                                        data: product,
                                        initialFavorite: true
                                    }, product.id)
                                )
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorites);


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

/***/ 8782:
/***/ ((module) => {

"use strict";
module.exports = require("react-content-loader");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168,914], () => (__webpack_exec__(4949)));
module.exports = __webpack_exports__;

})();