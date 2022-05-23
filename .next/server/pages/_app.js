"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(9614);
;// CONCATENATED MODULE: ./redux/reducers/template.reducer.js

const initialState = '';
const templateReducer = (state = initialState, action)=>{
    switch(action.type){
        case types/* SET_TEMPLATE */.lQ:
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const template_reducer = (templateReducer);

;// CONCATENATED MODULE: ./redux/reducers/user.reducer.js

const user_reducer_initialState = {
    isAuth: false
};
const userReducer = (state = user_reducer_initialState, action)=>{
    switch(action.type){
        case types/* LOGIN */.ym:
            return {
                ...action.payload,
                isAuth: true
            };
        case types/* LOGOUT */.Nv:
            return {
                isAuth: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const user_reducer = (userReducer);

;// CONCATENATED MODULE: ./redux/reducers/popup.reducer.js

const popup_reducer_initialState = {
    content: ()=>{
    },
    open: false
};
const popupReducer = (state = popup_reducer_initialState, action)=>{
    switch(action.type){
        case types/* OPEN_POPUP */.hN:
            return {
                open: true,
                content: action.payload
            };
        case types/* CLOSE_POPUP */.yw:
            return {
                open: false,
                content: ()=>{
                }
            };
        default:
            return state;
    }
};
/* harmony default export */ const popup_reducer = (popupReducer);

;// CONCATENATED MODULE: ./redux/reducers/cart.reducer.js

const cart_reducer_initialState = [];
const cartReducer = (state = cart_reducer_initialState, action)=>{
    switch(action.type){
        case types/* ADD_TO_CART */.G2:
            return [
                ...state,
                action.payload
            ];
        case types/* UPDATE_CART */.gQ:
            return [
                ...action.payload
            ];
        case types/* REMOVE_FROM_CART */.OZ:
            return state.filter((product)=>product.productId !== action.payload
            );
        case types/* CART_REMOVE_ALL */.Fi:
            return [];
        case types/* INCREASE_PRODUCT_COUNT */.Ny:
            return state.map((product)=>{
                if (product.productId === action.payload) return {
                    ...product,
                    count: product.count + 1
                };
                return product;
            });
        case types/* DECREASE_PRODUCT_COUNT */.go:
            return state.map((product)=>{
                if (product.productId === action.payload) return {
                    ...product,
                    count: product.count - 1
                };
                return product;
            }).filter((product)=>product.count > 0
            );
        case types/* CHANGE_PRODUCT_COUNT */.cb:
            return state.map((product)=>{
                if (product.productId === action.payload.id && action.payload.count !== 0) return {
                    ...product,
                    count: action.payload.count
                };
                return product;
            });
        case types/* LOGOUT */.Nv:
            return [];
        default:
            return state;
    }
};
/* harmony default export */ const cart_reducer = (cartReducer);

;// CONCATENATED MODULE: ./redux/reducers/categories.reducer.js

const categories_reducer_initialState = [];
const categoriesReducer = (state = categories_reducer_initialState, action)=>{
    switch(action.type){
        case types/* SET_CATEGORIES */.kD:
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const categories_reducer = (categoriesReducer);

;// CONCATENATED MODULE: ./redux/reducers/favorites.reducer.js

const favorites_reducer_initialState = [];
const favoritesReducer = (state = favorites_reducer_initialState, action)=>{
    switch(action.type){
        case types/* UPDATE_FAVORITES */.US:
            return [
                ...action.payload
            ];
        case types/* ADD_TO_FAVORITES */.w0:
            return [
                ...state,
                action.payload
            ];
        case types/* REMOVE_FROM_FAVORITES */.O_:
            return state.filter((productsCardData)=>productsCardData.id !== action.payload
            );
        case types/* LOGOUT */.Nv:
            return [];
        default:
            return state;
    }
};
/* harmony default export */ const favorites_reducer = (favoritesReducer);

;// CONCATENATED MODULE: ./redux/reducers/index.js







const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    template: template_reducer,
    user: user_reducer,
    popup: popup_reducer,
    cart: cart_reducer,
    categories: categories_reducer,
    favorites: favorites_reducer
});
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: ./redux/store.js




const middleware = [
    (external_redux_thunk_default())
];
const localStorageItemName = "bw-states";
const saveToLocalStorage = (state)=>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(localStorageItemName, serializedState);
    } catch (e) {
        console.log(e);
    }
};
const loadFromLocalStorage = ()=>{
    try {
        const serializedState = localStorage.getItem(localStorageItemName);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};
const presistedState = loadFromLocalStorage();
const store = (0,external_redux_namespaceObject.createStore)(reducers, presistedState, (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
store.subscribe(()=>saveToLocalStorage({
        user: store.getState().user,
        cart: store.getState().cart,
        favorites: store.getState().favorites
    })
);
const makeStore = ()=>store
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

;// CONCATENATED MODULE: ./pages/_app.js



const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
};
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 9614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lQ": () => (/* binding */ SET_TEMPLATE),
/* harmony export */   "hN": () => (/* binding */ OPEN_POPUP),
/* harmony export */   "yw": () => (/* binding */ CLOSE_POPUP),
/* harmony export */   "gQ": () => (/* binding */ UPDATE_CART),
/* harmony export */   "G2": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "OZ": () => (/* binding */ REMOVE_FROM_CART),
/* harmony export */   "Ny": () => (/* binding */ INCREASE_PRODUCT_COUNT),
/* harmony export */   "go": () => (/* binding */ DECREASE_PRODUCT_COUNT),
/* harmony export */   "cb": () => (/* binding */ CHANGE_PRODUCT_COUNT),
/* harmony export */   "Fi": () => (/* binding */ CART_REMOVE_ALL),
/* harmony export */   "US": () => (/* binding */ UPDATE_FAVORITES),
/* harmony export */   "w0": () => (/* binding */ ADD_TO_FAVORITES),
/* harmony export */   "O_": () => (/* binding */ REMOVE_FROM_FAVORITES),
/* harmony export */   "kD": () => (/* binding */ SET_CATEGORIES),
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "Nv": () => (/* binding */ LOGOUT)
/* harmony export */ });
const SET_TEMPLATE = 'SET_TEMPLATE';
/* POPUP TYPES */ const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';
/* CART TYPES */ const UPDATE_CART = 'UPDATE_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT';
const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT';
const CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT';
const CART_REMOVE_ALL = 'CART_REMOVE_ALL';
/* FAVORITE TYPES */ const UPDATE_FAVORITES = 'UPDATE_FAVORITES';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
/* CATEGORIES TYPES */ const SET_CATEGORIES = 'SET_CATEGORIES';
/* USER TYPES */ const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5630));
module.exports = __webpack_exports__;

})();