(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3320:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "BannerSlider_root__3Bivt",
	"arrow_button": "BannerSlider_arrow_button__9WeNq",
	"arrow_button_prev": "BannerSlider_arrow_button_prev__t9sj8",
	"arrow_button_next": "BannerSlider_arrow_button_next__VGKNW"
};


/***/ }),

/***/ 7812:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "PopularCategories_root__lV6ud",
	"title": "PopularCategories_title__sM92u",
	"categories": "PopularCategories_categories__0tJCp",
	"category": "PopularCategories_category__na7Je",
	"category__img": "PopularCategories_category__img__Rfx4Z",
	"category__name": "PopularCategories_category__name__4QPBu"
};


/***/ }),

/***/ 8868:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Home_root__hAmhe",
	"banner_slider": "Home_banner_slider__xWeOa",
	"brand_slider": "Home_brand_slider__kuaUC",
	"title": "Home_title__q0Qg4"
};


/***/ }),

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./icons/index.js + 29 modules
var icons = __webpack_require__(9484);
// EXTERNAL MODULE: ./components/BannerSlider/BannerSlider.module.scss
var BannerSlider_module = __webpack_require__(3320);
var BannerSlider_module_default = /*#__PURE__*/__webpack_require__.n(BannerSlider_module);
;// CONCATENATED MODULE: ./components/BannerSlider/BannerSlider.js








const BannerSlider = ({ banners , className  })=>{
    const { 0: imageList , 1: setImageList  } = (0,external_react_.useState)([]);
    const { 0: dragging , 1: setDragging  } = (0,external_react_.useState)(false);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
        pauseOnHover: true
    };
    const handleBeforeChange = (0,external_react_.useCallback)(()=>{
        setDragging(true);
    }, [
        setDragging
    ]);
    const handleAfterChange = (0,external_react_.useCallback)(()=>{
        setDragging(false);
    }, [
        setDragging
    ]);
    const handleOnItemClick = (0,external_react_.useCallback)((e)=>{
        if (dragging) {
            e.preventDefault();
        }
    }, [
        dragging
    ]);
    (0,external_react_.useEffect)(()=>{
        setImageList(banners.map((item)=>({
                id: item.id,
                src: "https://api.chistayaliniya.tj" + item.imagePath,
                href: item.href,
                alt: item.name
            })
        ));
        return ()=>setImageList([])
        ;
    }, [
        banners
    ]);
    const slider = (0,external_react_.useRef)(null);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((BannerSlider_module_default()).root, className),
        children: [
            imageList.length > 1 && /*#__PURE__*/ jsx_runtime_.jsx(ArrowButtonPrev, {
                onClick: ()=>slider.slickPrev()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                beforeChange: handleBeforeChange,
                afterChange: handleAfterChange,
                ...settings,
                ref: (c)=>slider = c
                ,
                children: imageList.map(({ id , src , alt , href  })=>/*#__PURE__*/ jsx_runtime_.jsx(SliderItem, {
                        src: src,
                        href: href,
                        alt: alt,
                        onClick: handleOnItemClick
                    }, id)
                )
            }),
            imageList.length > 1 && /*#__PURE__*/ jsx_runtime_.jsx(ArrowButtonNext, {
                onClick: ()=>slider.slickNext()
            })
        ]
    }));
};
const SliderItem = ({ src , href , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: onClick,
            target: "_blank",
            referrerPolicy: "no-referrer",
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: src,
                alt: "image1",
                width: 2880,
                height: 700
            })
        })
    })
;
const ArrowButtonPrev = ({ onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClick,
        className: external_classnames_default()((BannerSlider_module_default()).arrow_button, (BannerSlider_module_default()).arrow_button_prev),
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ArrowBack */.xh, {
        })
    }));
};
const ArrowButtonNext = ({ onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClick,
        className: external_classnames_default()((BannerSlider_module_default()).arrow_button, (BannerSlider_module_default()).arrow_button_next),
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ArrowForward */.ZJ, {
        })
    }));
};
/* harmony default export */ const BannerSlider_BannerSlider = (BannerSlider);

// EXTERNAL MODULE: ./components/ProductCart/index.js + 10 modules
var ProductCart = __webpack_require__(7737);
// EXTERNAL MODULE: ./components/Products/Products.js
var Products = __webpack_require__(1627);
// EXTERNAL MODULE: ./components/Pagination/index.js
var Pagination = __webpack_require__(919);
// EXTERNAL MODULE: ./layouts/LayoutController.js + 19 modules
var LayoutController = __webpack_require__(5168);
// EXTERNAL MODULE: ./styles/Home.module.scss
var Home_module = __webpack_require__(8868);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./skeletons/index.js
var skeletons = __webpack_require__(3798);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/actions/user.actions.js
var user_actions = __webpack_require__(6079);
// EXTERNAL MODULE: ./components/PopularCategories/index.module.scss
var index_module = __webpack_require__(7812);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./components/Title/Title.js
var Title = __webpack_require__(4660);
;// CONCATENATED MODULE: ./components/PopularCategories/index.js








const PopularCategories = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [categories, setCategories] = external_react_default().useState([]);
    external_react_default().useEffect(()=>{
        const getCategories = async ()=>{
            const url = "https://api.chistayaliniya.tj/api" + '/categories/populars';
            const config = {
                method: "GET"
            };
            const response = await fetch(url, config);
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("bw-client-token");
                window.location.href = '/';
                dispatch((0,user_actions/* logout */.k)());
            }
            const data = await response.json();
            setCategories(data.map((item)=>({
                    ...item,
                    imagePath: "https://api.chistayaliniya.tj" + item.imagePath
                })
            ));
        };
        getCategories();
        return ()=>{
            setCategories([]);
        };
    }, [
        dispatch
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                className: (index_module_default()).title,
                children: "Популярные категории"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).categories,
                children: categories.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: '/category/' + category.id,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: (index_module_default()).category,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (index_module_default()).category__img,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        width: 130,
                                        height: 130,
                                        src: category.imagePath,
                                        alt: category.name
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (index_module_default()).category__name,
                                    children: category.name
                                })
                            ]
                        })
                    }, category.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_PopularCategories = (PopularCategories);

// EXTERNAL MODULE: ./components/MobileCategoriesSlider/index.js
var MobileCategoriesSlider = __webpack_require__(1742);
;// CONCATENATED MODULE: ./pages/index.js














const getStaticProps = async ()=>{
    const categoriesRes = await fetch("https://api.chistayaliniya.tj/api" + "/categories");
    const categories = await categoriesRes.json();
    const brandsRes = await fetch("https://api.chistayaliniya.tj/api" + "/brands");
    const brands = await brandsRes.json();
    const bannersRes = await fetch("https://api.chistayaliniya.tj/api" + "/banner");
    const banners = await bannersRes.json();
    return {
        props: {
            categories,
            brands,
            banners
        },
        revalidate: 20
    };
};
const Home = ({ categories , brands , banners  })=>{
    const [products1, setProducts] = external_react_default().useState(null);
    const [pending, setPending] = external_react_default().useState(true);
    const [pageNumber, setPageNumber] = external_react_default().useState(1);
    const favorites = (0,external_react_redux_.useSelector)((state)=>state.favorites
    );
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    let { 0: windowWidth , 1: setWindowWidth  } = (0,external_react_.useState)(0);
    external_react_default().useEffect(()=>{
        setWindowWidth(window.innerWidth);
        const getProducts = async ()=>{
            try {
                setPending(true);
                let config = {
                    method: "GET"
                };
                if (user.isAuth) config = {
                    ...config,
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("bw-client-token")
                    }
                };
                const productsRes = await fetch("https://api.chistayaliniya.tj/api" + "/product/getproductbyhide?&pageSize=20&pageNumber=" + pageNumber, config);
                if (productsRes.status === 401 || productsRes.status === 403) {
                    localStorage.removeItem("bw-client-token");
                    window.location.href = "/";
                    dispatch((0,user_actions/* logout */.k)());
                }
                const products = await productsRes.json();
                setProducts(products);
            } finally{
                setPending(false);
            }
        };
        getProducts();
    }, [
        pageNumber,
        user.isAuth
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutController/* default */.Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Чистая линия"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).root,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BannerSlider_BannerSlider, {
                        className: (Home_module_default()).banner_slider,
                        banners: banners
                    }),
                    windowWidth < 600 && /*#__PURE__*/ jsx_runtime_.jsx(MobileCategoriesSlider/* MobileCategoriesSlider */.u, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_PopularCategories, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Products/* default */.Z, {
                                children: pending ? /*#__PURE__*/ jsx_runtime_.jsx(skeletons/* ProductsSkeleton */.Ip, {
                                }) : products1.data && products1.data.map((product)=>{
                                    let initialFavorite = false;
                                    if (!user.isAuth) favorites.forEach((favorite)=>{
                                        if (favorite.id === product.id) {
                                            initialFavorite = true;
                                        }
                                    });
                                    else initialFavorite = product.isFavorite;
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(ProductCart/* default */.Z, {
                                        id: product.id,
                                        data: product,
                                        initialFavorite: initialFavorite
                                    }, product.id));
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* Pagination */.t, {
                                page: pageNumber || 1,
                                totalPages: (products1 === null || products1 === void 0 ? void 0 : products1.totalPages) || 1,
                                onPageChange: (page)=>setPageNumber(page)
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168,914,919], () => (__webpack_exec__(2836)));
module.exports = __webpack_exports__;

})();