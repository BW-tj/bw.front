exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 3574:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "AddToCartButton_root__6bYU7"
};


/***/ }),

/***/ 5545:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "CartControllButtons_root__sCIBW",
	"cart_controll_button": "CartControllButtons_cart_controll_button__736P3",
	"emptyBox": "CartControllButtons_emptyBox__HAKBS",
	"disabled": "CartControllButtons_disabled__t44ti",
	"count_in_cart": "CartControllButtons_count_in_cart__1Txq3"
};


/***/ }),

/***/ 6449:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Label_root__elI2N"
};


/***/ }),

/***/ 4780:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "LabelList_root__Bzw5i",
	"label_new_product": "LabelList_label_new_product__aEC1S",
	"label_promotion": "LabelList_label_promotion__PRuI4"
};


/***/ }),

/***/ 7256:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Price_root__vDl9C"
};


/***/ }),

/***/ 336:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Slider_root__oXvhk",
	"button_group": "Slider_button_group__fe_OT",
	"arrow_btn": "Slider_arrow_btn__7m38N",
	"disabled": "Slider_disabled__8YG7L"
};


/***/ }),

/***/ 2427:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 3091:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Star_root__6WXkB",
	"filled": "Star_filled__YejVg"
};


/***/ }),

/***/ 1939:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Stars_root__hZNYu"
};


/***/ }),

/***/ 1003:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Title_root__5ARRw",
	"text": "Title_text__Nl6ir",
	"like_btn": "Title_like_btn__6Z184",
	"active": "Title_active__yWEwC"
};


/***/ }),

/***/ 3956:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductCart_root__czV2y",
	"fadeIn": "ProductCart_fadeIn__LFW3_"
};


/***/ }),

/***/ 5468:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Products_root__lgkAh"
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

/***/ 7737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ProductCart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/If/If.js
var If = __webpack_require__(2774);
// EXTERNAL MODULE: ./components/ProductCart/AddToCartButton.module.scss
var AddToCartButton_module = __webpack_require__(3574);
var AddToCartButton_module_default = /*#__PURE__*/__webpack_require__.n(AddToCartButton_module);
;// CONCATENATED MODULE: ./components/ProductCart/AddToCartButton.js



const AddToCartButton = ({ onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (AddToCartButton_module_default()).root,
        onClick: onClick,
        children: "В корзину"
    })
;
/* harmony default export */ const ProductCart_AddToCartButton = (AddToCartButton);

// EXTERNAL MODULE: ./components/ProductCart/CartControllButtons.module.scss
var CartControllButtons_module = __webpack_require__(5545);
var CartControllButtons_module_default = /*#__PURE__*/__webpack_require__.n(CartControllButtons_module);
;// CONCATENATED MODULE: ./components/ProductCart/CartControllButtons.js






const CartControllButtons = ({ count , onIncrease , onDecrease  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CartControllButtons_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (CartControllButtons_module_default()).cart_controll_button,
                onClick: onDecrease,
                children: "-"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (CartControllButtons_module_default()).count_in_cart,
                children: count
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (CartControllButtons_module_default()).cart_controll_button,
                onClick: onIncrease,
                children: "+"
            })
        ]
    }));
};
/* harmony default export */ const ProductCart_CartControllButtons = (CartControllButtons);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/ProductCart/Label.module.scss
var Label_module = __webpack_require__(6449);
var Label_module_default = /*#__PURE__*/__webpack_require__.n(Label_module);
;// CONCATENATED MODULE: ./components/ProductCart/Label.js





const Label = ({ className , text , link  })=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: external_classnames_default()((Label_module_default()).root, className),
            draggable: false,
            children: text
        })
    })
;
/* harmony default export */ const ProductCart_Label = (Label);

// EXTERNAL MODULE: ./components/ProductCart/LabelList.module.scss
var LabelList_module = __webpack_require__(4780);
var LabelList_module_default = /*#__PURE__*/__webpack_require__.n(LabelList_module);
;// CONCATENATED MODULE: ./components/ProductCart/LabelList.js





const LabelList = ({ promotionPercent , isNew  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LabelList_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(If/* default */.Z, {
                condition: isNew,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Label, {
                    link: "/new",
                    text: "Новинка",
                    className: (LabelList_module_default()).label_new_product
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(If/* default */.Z, {
                condition: promotionPercent !== 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Label, {
                    link: "/discounts",
                    text: 'Акция -' + promotionPercent + '%',
                    className: (LabelList_module_default()).label_promotion
                })
            })
        ]
    })
;
/* harmony default export */ const ProductCart_LabelList = (LabelList);

// EXTERNAL MODULE: ./components/ProductCart/Price.module.scss
var Price_module = __webpack_require__(7256);
var Price_module_default = /*#__PURE__*/__webpack_require__.n(Price_module);
;// CONCATENATED MODULE: ./components/ProductCart/Price.js



const Price = ({ price  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Price_module_default()).root,
        children: [
            price.toFixed(2),
            " с."
        ]
    })
;
/* harmony default export */ const ProductCart_Price = (Price);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./components/ProductCart/Slider.module.scss
var Slider_module = __webpack_require__(336);
var Slider_module_default = /*#__PURE__*/__webpack_require__.n(Slider_module);
// EXTERNAL MODULE: ./icons/index.js + 29 modules
var icons = __webpack_require__(9484);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/ProductCart/SliderItem.module.scss
var SliderItem_module = __webpack_require__(2427);
var SliderItem_module_default = /*#__PURE__*/__webpack_require__.n(SliderItem_module);
;// CONCATENATED MODULE: ./components/ProductCart/SliderItem.js




const SliderItem = ({ src  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SliderItem_module_default()).root,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            src: src,
            width: '100%',
            height: '100%',
            layout: "responsive",
            objectFit: "contain",
            alt: "image"
        })
    })
;
/* harmony default export */ const ProductCart_SliderItem = (SliderItem);

;// CONCATENATED MODULE: ./components/ProductCart/Slider.js








const Slider = ({ id , images =null , width =0  })=>{
    const mainUrl = "https://api.chistayaliniya.tj";
    const slider = (0,external_react_.useRef)(null);
    const { 0: currentSlide , 1: setCurrentSlide  } = (0,external_react_.useState)(0);
    const { 0: settings , 1: setSettings  } = (0,external_react_.useState)({
    });
    (0,external_react_.useMemo)(()=>{
        setSettings({
            infinite: false,
            autoplaySpeed: 5000,
            cssEase: 'linear',
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            afterChange: (current)=>setCurrentSlide(current)
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Slider_module_default()).root,
        style: {
            width: width + 'px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: '/product/' + id,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (Slider_module_default()).image_link,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                        ...settings,
                        ref: (c)=>slider = c
                        ,
                        children: images && images.map((src, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCart_SliderItem, {
                                width: width,
                                src: mainUrl + src
                            }, index)
                        )
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Slider_module_default()).button_group,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: external_classnames_default()((Slider_module_default()).arrow_btn, currentSlide === 0 && (Slider_module_default()).disabled),
                        onClick: ()=>slider.slickPrev()
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ArrowBack */.xh, {
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: external_classnames_default()((Slider_module_default()).arrow_btn, images && currentSlide === images.length - 1 && (Slider_module_default()).disabled),
                        onClick: ()=>slider.slickNext()
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ArrowForward */.ZJ, {
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const ProductCart_Slider = (Slider);

// EXTERNAL MODULE: ./components/ProductCart/Star.module.scss
var Star_module = __webpack_require__(3091);
var Star_module_default = /*#__PURE__*/__webpack_require__.n(Star_module);
;// CONCATENATED MODULE: ./components/ProductCart/Star.js





const Star = ({ filled  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Star_module_default()).root, filled && (Star_module_default()).filled),
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Star */.Ux, {
            size: 18
        })
    })
;
/* harmony default export */ const ProductCart_Star = (Star);

// EXTERNAL MODULE: ./components/ProductCart/Stars.module.scss
var Stars_module = __webpack_require__(1939);
var Stars_module_default = /*#__PURE__*/__webpack_require__.n(Stars_module);
;// CONCATENATED MODULE: ./components/ProductCart/Stars.js




const Stars = ({ rating  })=>{
    const stars = [];
    for(let i = 1; i <= 5; i++)if (i <= rating) stars.push({
        key: i,
        filled: true
    });
    else stars.push({
        key: i,
        filled: false
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Stars_module_default()).root,
        children: stars.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Star, {
                filled: star.filled
            }, star.key)
        )
    }));
};
/* harmony default export */ const ProductCart_Stars = (Stars);

// EXTERNAL MODULE: ./components/ProductCart/Title.module.scss
var Title_module = __webpack_require__(1003);
var Title_module_default = /*#__PURE__*/__webpack_require__.n(Title_module);
;// CONCATENATED MODULE: ./components/ProductCart/Title.js






const Title = ({ name , isFavorite , onToggleFavorite , src  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Title_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: src,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (Title_module_default()).text,
                    children: name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: external_classnames_default()((Title_module_default()).like_btn, isFavorite && (Title_module_default()).active),
                onClick: ()=>onToggleFavorite(!isFavorite)
                ,
                children: isFavorite ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* Favorite */.rF, {
                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* FavoriteBorder */.Ie, {
                })
            })
        ]
    })
;
/* harmony default export */ const ProductCart_Title = (Title);

// EXTERNAL MODULE: ./components/ProductCart/index.module.scss
var index_module = __webpack_require__(3956);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./redux/actions/favorites.actions.js
var favorites_actions = __webpack_require__(6450);
// EXTERNAL MODULE: ./redux/actions/cart.actions.js
var cart_actions = __webpack_require__(2029);
;// CONCATENATED MODULE: ./components/ProductCart/index.js














const ProductCart = ({ id =1 , initialFavorite =false , data =null  })=>{
    const { 0: product , 1: setProduct  } = (0,external_react_.useState)(null);
    const { 0: isFavorite , 1: setIsFavorite  } = (0,external_react_.useState)(initialFavorite);
    const { 0: countInCart , 1: setCountInCart  } = (0,external_react_.useState)(0);
    const { 0: width , 1: setWidth  } = (0,external_react_.useState)(0);
    const { 0: height , 1: setHeight  } = (0,external_react_.useState)(0);
    const rootRef = external_react_default().useRef(null);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const cart = (0,external_react_redux_.useSelector)((state)=>state.cart
    );
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const handleToggleFavorite = external_react_default().useCallback((value)=>{
        setIsFavorite(value);
        if (!user.isAuth) if (value) dispatch((0,favorites_actions/* addToFavorites */._p)(data));
        else dispatch((0,favorites_actions/* removeFromFavorites */.zm)(data.id));
        else if (value) dispatch((0,favorites_actions/* addToFavoritesService */.GG)(data));
        else dispatch((0,favorites_actions/* removeFromFavoritesService */.II)(data.id));
    }, [
        dispatch,
        user.isAuth,
        data
    ]);
    const handleAddToCart = external_react_default().useCallback(async ()=>{
        if (user.isAuth) dispatch((0,cart_actions/* addToCartService */.ov)(data));
        else dispatch((0,cart_actions/* addToCart */.Xq)(data));
    }, [
        data,
        dispatch,
        user.isAuth
    ]);
    const handleIncreaseProductCountInCart = external_react_default().useCallback(async ()=>{
        if (user.isAuth) dispatch((0,cart_actions/* changeProductCountService */.EG)(data.id, countInCart + 1));
        else dispatch((0,cart_actions/* changeProductCount */.lJ)(data.id, countInCart + 1));
    }, [
        data.id,
        dispatch,
        countInCart,
        user.isAuth
    ]);
    const handleDecreaseProductCountInCart = external_react_default().useCallback(async ()=>{
        if (countInCart === 1) if (user.isAuth) dispatch((0,cart_actions/* removeFromCartService */.kB)(data.id));
        else dispatch((0,cart_actions/* removeFromCart */.h2)(data.id));
        else if (user.isAuth) dispatch((0,cart_actions/* changeProductCountService */.EG)(data.id, countInCart - 1));
        else dispatch((0,cart_actions/* changeProductCount */.lJ)(data.id, countInCart - 1));
    }, [
        data.id,
        dispatch,
        countInCart,
        user.isAuth
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!data) return;
        if (user.isAuth) setIsFavorite(data.isFavorite);
        setProduct({
            name: data.name,
            isNew: data.isNew,
            promotionPercent: data.discount,
            rating: data.rating,
            price: data.price
        });
    }, [
        data,
        user.isAuth
    ]);
    (0,external_react_.useEffect)(()=>{
        const itemInCart = cart.find((item)=>item.productId === id
        );
        if (!itemInCart) return setCountInCart(0);
        setCountInCart(itemInCart.count);
    }, [
        cart,
        id
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log(product);
        if (!rootRef.current) return;
        if (window.innerWidth < 720) return setWidth(rootRef.current && rootRef.current.offsetWidth);
        setWidth(rootRef.current && rootRef.current.offsetWidth - 40);
    }, [
        rootRef,
        product
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleWindowResize = ()=>{
            if (window.innerWidth < 1200) setHeight(150);
            else setHeight(300);
        };
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return ()=>window.removeEventListener("resize", handleWindowResize)
        ;
    }, []);
    if (!product) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).root,
        ref: rootRef,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_LabelList, {
                isNew: product.isNew,
                promotionPercent: product.promotionPercent
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Slider, {
                id: id,
                images: [
                    data.imagePath
                ],
                width: width,
                height: height
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Title, {
                id: id,
                src: "product/" + id,
                dispatch: dispatch,
                name: product.name.slice(0, 30) + (product.name.length > 30 ? "..." : ""),
                isFavorite: isFavorite,
                onToggleFavorite: handleToggleFavorite
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Price, {
                price: product.price
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_Stars, {
                rating: product.rating
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(If/* default */.Z, {
                condition: countInCart === 0,
                altContent: /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_CartControllButtons, {
                    count: countInCart,
                    onIncrease: handleIncreaseProductCountInCart,
                    onDecrease: handleDecreaseProductCountInCart
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProductCart_AddToCartButton, {
                    onClick: handleAddToCart,
                    id: id,
                    dispatch: dispatch
                })
            })
        ]
    }));
};
/* harmony default export */ const components_ProductCart = (ProductCart);


/***/ }),

/***/ 1627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Products_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5468);
/* harmony import */ var _Products_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Products_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Products = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Products_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);


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

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ip": () => (/* binding */ ProductsSkeleton)
/* harmony export */ });
/* unused harmony exports BannerSkeleton, TitleSkeleton, SidebarSkeleton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Skeleton = ({ height =11 , width =200 , radius =3 , uniqueKey  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 0.5,
        width: width,
        height: height,
        backgroundColor: "#DCDCDC",
        foregroundColor: "#F6F6F6",
        uniqueKey: uniqueKey,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
            x: "0",
            y: "0",
            rx: radius,
            ry: radius,
            width: width,
            height: height
        })
    })
;
const ProductsSkeleton = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-3"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-6"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-7"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skeleton, {
                width: "100%",
                height: 406,
                radius: 4,
                uniqueKey: "product-8"
            })
        ]
    }));
};
const BannerSkeleton = ()=>{
    return(/*#__PURE__*/ _jsxs(React.Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Skeleton, {
                width: "100%",
                height: 350,
                radius: 4,
                uniqueKey: "banner-1"
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                width: "100%",
                height: 350,
                radius: 4,
                uniqueKey: "banner-2"
            }),
            /*#__PURE__*/ _jsx(Skeleton, {
                width: "100%",
                height: 350,
                radius: 4,
                uniqueKey: "banner-3"
            })
        ]
    }));
};
const TitleSkeleton = ()=>{
    return(/*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(Skeleton, {
            width: "100%",
            height: 34,
            radius: 4,
            uniqueKey: "title-1"
        })
    }));
};
const SidebarSkeleton = ()=>{
    return(/*#__PURE__*/ _jsx(React.Fragment, {
        children: /*#__PURE__*/ _jsx(Skeleton, {
            width: "100%",
            height: 842,
            radius: 4,
            uniqueKey: "sidebar"
        })
    }));
};


/***/ })

};
;