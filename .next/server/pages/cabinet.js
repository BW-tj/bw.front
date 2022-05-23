(() => {
var exports = {};
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 2388:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Cabinet_root__8D9o1",
	"form": "Cabinet_form__PhLHK",
	"title": "Cabinet_title__nwALO",
	"label": "Cabinet_label__Mi9I3",
	"error": "Cabinet_error__oyv1O",
	"label_input": "Cabinet_label_input__goa1F",
	"label_title": "Cabinet_label_title__gq9Ub",
	"buttons_group": "Cabinet_buttons_group__s_e8G",
	"button": "Cabinet_button__v3Fbt",
	"contained": "Cabinet_contained___09jl",
	"outlined": "Cabinet_outlined__GFYbZ",
	"error_info": "Cabinet_error_info__vZEsg"
};


/***/ }),

/***/ 9789:
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_If_If__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2774);
/* harmony import */ var _layouts_LayoutController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5168);
/* harmony import */ var _styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2388);
/* harmony import */ var _styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6079);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);










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
const Cabinet = ({ categories  })=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.user
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: ''
    });
    const { 0: firstname , 1: setFirstname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: lastname , 1: setLastname  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: oldPassword , 1: setOldPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: newPassword , 1: setNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const handleChangeProfile = async ()=>{
        try {
            setLoading(true);
            const body = JSON.stringify({
                email,
                phoneNumber: phone,
                name: firstname,
                lastName: lastname,
                address,
                password: newPassword,
                oldPassword
            });
            const config = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            };
            if (user.isAuth) config = {
                ...config,
                headers: {
                    ...config.headers,
                    "Authorization": "Bearer " + localStorage.getItem("bw-client-token")
                }
            };
            await fetch("https://api.chistayaliniya.tj/api" + '/users/profile', config);
        } finally{
            setTimeout(()=>{
                setLoading(false);
            }, 200);
        }
    };
    const handleCancel = ()=>{
        window.location.replace('/');
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user.isAuth) {
            localStorage.removeItem("bw-client-token");
            dispatch((0,_redux_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__/* .logout */ .k)());
            router.push('/login');
        }
    }, [
        user.isAuth,
        dispatch,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user.isAuth) return;
        let config = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("bw-client-token")
            }
        };
        fetch(`${"https://api.chistayaliniya.tj/api"}/users/profile`, config).then((res)=>{
            return res.json();
        }).then((data)=>{
            setLoading(false);
            setFirstname(data.name);
            setLastname(data.lastName);
            setPhone(data.phone);
            setEmail(data.email);
            setAddress(data.address);
        });
    }, [
        dispatch,
        user.isAuth
    ]);
    if (loading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_LayoutController__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Личный кабинет"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().root),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().form),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),
                            children: "Личный кабинет"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            required: true,
                            title: "Имя",
                            value: firstname,
                            setValue: setFirstname,
                            error: errors.firstname
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            required: true,
                            title: "Фамилия",
                            value: lastname,
                            setValue: setLastname,
                            error: errors.lastname
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            title: "Номер телефона",
                            value: phone,
                            setValue: setPhone,
                            error: errors.phone
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            required: true,
                            title: "Почта",
                            value: email,
                            setValue: setEmail,
                            type: "email",
                            error: errors.email
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            title: "Адрес",
                            value: address,
                            setValue: setAddress
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            title: "Старый пароль",
                            value: oldPassword,
                            setValue: setOldPassword,
                            type: "password"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            title: "Новый пароль",
                            value: newPassword,
                            setValue: setNewPassword,
                            type: "password",
                            error: errors.password
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                            title: "Повторите новый пароль",
                            value: confirmPassword,
                            setValue: setConfirmPassword,
                            type: "password"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().buttons_group),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().button), (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().outlined)),
                                    onClick: ()=>handleCancel()
                                    ,
                                    children: "Отменить"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().button), (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contained)),
                                    onClick: ()=>handleChangeProfile()
                                    ,
                                    children: "Изменить профиль"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
const Label = ({ title , value , setValue , type ='text' , error =''  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label), error !== '' && (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().error)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label_title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: type,
                className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().label_input),
                value: value,
                onChange: (e)=>setValue(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_If_If__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                condition: error.trim() !== '',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Cabinet_module_scss__WEBPACK_IMPORTED_MODULE_9___default().error_info),
                    children: error
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cabinet);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168], () => (__webpack_exec__(9789)));
module.exports = __webpack_exports__;

})();