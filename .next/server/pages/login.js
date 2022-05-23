(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 6053:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Login_root__ah9x9",
	"title": "Login_title__Glinj",
	"sub_title": "Login_sub_title__INRTQ",
	"label": "Login_label__i6XwA",
	"labelError": "Login_labelError__svkOc",
	"input_wrap": "Login_input_wrap___sauX",
	"country_number": "Login_country_number__1swUT",
	"error": "Login_error__FQW6a",
	"input": "Login_input__Up_lk",
	"button_group": "Login_button_group__Bc23M",
	"btn": "Login_btn___B5Ma",
	"contained_btn": "Login_contained_btn__FcoDv",
	"loading": "Login_loading__eM44r",
	"outlined_btn": "Login_outlined_btn__QcuH1",
	"text_btn": "Login_text_btn__XAPQ9",
	"error_info": "Login_error_info__KM5il"
};


/***/ }),

/***/ 4984:
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
/* harmony import */ var _layouts_LayoutController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5168);
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6053);
/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_If_If__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2774);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6450);
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6079);
/* harmony import */ var _redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2029);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);












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
const Login = ({ categories  })=>{
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        email: "",
        passowrd: ""
    });
    const [mainError, setMainError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const loginButton = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.cart
    );
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user
    );
    const favorites = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.favorites
    );
    const clearErrors = ()=>{
        setErrors({
            email: "",
            password: ""
        });
    };
    const checkValidation = ()=>{
        clearErrors();
        if (email.indexOf("@") === -1) {
            setErrors((prev)=>({
                    ...prev,
                    email: "Введите корректную почту"
                })
            );
            return false;
        }
        return true;
    };
    const handleForgotPassword = ()=>{
    //
    };
    const handleLogin = async ()=>{
        if (!checkValidation()) return;
        await loginButton.current.classList.add((_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loading));
        const response = await fetch("https://api.chistayaliniya.tj/api" + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        if (response.status >= 400) {
            loginButton.current.classList.remove((_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loading));
            return setMainError("Неверный логин или пароль");
        }
        const userData = await response.json();
        localStorage.setItem("bw-client-token", userData.token);
        await dispatch((0,_redux_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_9__/* .updateFavorites */ .VO)(favorites));
        await dispatch((0,_redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__/* .login */ .x)(userData));
        if (cart.length) await dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_11__/* .pushCart */ .DA)(cart.map((item)=>({
                productId: item.productId,
                count: item.count
            })
        )));
        await dispatch((0,_redux_actions_cart_actions__WEBPACK_IMPORTED_MODULE_11__/* .pullCart */ .D0)());
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (user.isAuth) router.push("/");
    }, [
        user.isAuth,
        router
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutController__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        categories: categories,
        noFooter: true,
        noSocialMedia: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Вход"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().root),
                    onSubmit: (e)=>e.preventDefault()
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                            children: "Авторизация"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            type: "email",
                            name: "email",
                            sub_title: "Введите эл.почту",
                            error: errors.email,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value)
                            ,
                            placeholder: "name@company.example"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            type: "password",
                            name: "password",
                            sub_title: "Введите пароль",
                            error: errors.password,
                            value: password,
                            placeholder: "********",
                            onChange: (e)=>setPassword(e.target.value)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button_group),
                            children: [
                                mainError !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().error),
                                    children: mainError
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    ref: loginButton,
                                    onClick: handleLogin,
                                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btn), (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contained_btn)),
                                    children: "Войти"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>handleForgotPassword()
                                    ,
                                    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btn), (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text_btn)),
                                    children: "Забыли пароль?"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
const Label = ({ value , sub_title , type , name , placeholder , error ="" , onChange =()=>{
} , onFocus =()=>{
} ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().label), error !== "" && (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().labelError)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sub_title),
                children: sub_title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input_wrap),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: type,
                    className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().input),
                    value: value,
                    name: name,
                    onChange: onChange,
                    onFocus: onFocus,
                    placeholder: placeholder
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_If_If__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                condition: error.trim() !== "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_8___default().error_info),
                    children: error
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168], () => (__webpack_exec__(4984)));
module.exports = __webpack_exports__;

})();