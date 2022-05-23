(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 4191:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "FilterSidebar_root__VI9f_",
	"fadeIn": "FilterSidebar_fadeIn__7X7oI",
	"title": "FilterSidebar_title__uuBJG",
	"filters": "FilterSidebar_filters__tI_lJ",
	"filter_label": "FilterSidebar_filter_label__NUmgn",
	"filter_menu_wrap": "FilterSidebar_filter_menu_wrap__JIUWN",
	"filter_menu": "FilterSidebar_filter_menu__NmJUs",
	"filter_value": "FilterSidebar_filter_value__VGzGr",
	"filter_value_icon": "FilterSidebar_filter_value_icon__GoFfz",
	"filterArrow": "FilterSidebar_filterArrow__hdtzf",
	"open": "FilterSidebar_open__6FX3V"
};


/***/ }),

/***/ 2519:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Search_root__jyele",
	"title": "Search_title__hJq07",
	"container": "Search_container__0y6u3"
};


/***/ }),

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./functions/query.js
var query = __webpack_require__(7367);
// EXTERNAL MODULE: ./components/Pagination/index.js
var Pagination = __webpack_require__(919);
// EXTERNAL MODULE: ./components/Title/Title.js
var Title = __webpack_require__(4660);
// EXTERNAL MODULE: ./components/ProductCart/index.js + 10 modules
var ProductCart = __webpack_require__(7737);
// EXTERNAL MODULE: ./components/Products/Products.js
var Products = __webpack_require__(1627);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./icons/index.js + 29 modules
var icons = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/FilterSidebar/FilterValue.js



const FilterValue = ({ styles , selectedFilters , value , onClick  })=>{
    const [active, setActive] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        if (selectedFilters === null || selectedFilters === void 0 ? void 0 : selectedFilters.includes(value.id)) setActive(true);
        else setActive(false);
    }, [
        selectedFilters,
        value.id
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: styles.filter_value,
        onClick: ()=>onClick(value.id)
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.filter_value_icon,
                children: !active ? /*#__PURE__*/ jsx_runtime_.jsx(icons/* CheckBoxOutlineBlank */.kX, {
                    size: 20
                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons/* CheckBox */.Jg, {
                    size: 20
                })
            }),
            value.name
        ]
    }));
};
/* harmony default export */ const FilterSidebar_FilterValue = (FilterValue);

;// CONCATENATED MODULE: ./components/FilterSidebar/Filter.js





const Filter = ({ filter , selectedFilters , styles , toggleFilter  })=>{
    const [open, setOpen] = external_react_default().useState(true);
    const [height, setHeight] = external_react_default().useState(0);
    const menu = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (!menu) return;
        setHeight(menu.current.offsetHeight);
    }, [
        menu,
        filter
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.filter,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: styles.filter_label,
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    filter.name,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_classnames_default()(styles.filterArrow, open && styles.open),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* KeyboardArrowDown */.Wd, {
                            size: 20
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.filter_menu_wrap,
                style: {
                    height: !open ? 0 : height + 'px'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: styles.filter_menu,
                    ref: menu,
                    children: filter.values.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx(FilterSidebar_FilterValue, {
                            styles: styles,
                            value: value,
                            onClick: toggleFilter,
                            selectedFilters: selectedFilters
                        }, value.id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const FilterSidebar_Filter = (Filter);

// EXTERNAL MODULE: ./components/FilterSidebar/index.module.scss
var index_module = __webpack_require__(4191);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/FilterSidebar/index.js




const FilterSidebar = ({ isEmpty , filters , selectedFilters , toggleFilter  })=>{
    if (isEmpty) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).title,
                children: "Фильтры"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).filters,
                children: [
                    filters.length !== 0 && filters.map((filter, index)=>/*#__PURE__*/ jsx_runtime_.jsx(FilterSidebar_Filter, {
                            toggleFilter: toggleFilter,
                            selectedFilters: selectedFilters,
                            filter: filter,
                            styles: (index_module_default())
                        }, index)
                    ),
                    filters.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (index_module_default()).noFilters,
                        children: "Загрузка..."
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_FilterSidebar = (FilterSidebar);

// EXTERNAL MODULE: ./layouts/LayoutController.js + 19 modules
var LayoutController = __webpack_require__(5168);
// EXTERNAL MODULE: ./components/Tools/index.js
var Tools = __webpack_require__(5616);
// EXTERNAL MODULE: ./skeletons/index.js
var skeletons = __webpack_require__(3798);
// EXTERNAL MODULE: ./styles/Search.module.scss
var Search_module = __webpack_require__(2519);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
// EXTERNAL MODULE: ./redux/actions/user.actions.js
var user_actions = __webpack_require__(6079);
;// CONCATENATED MODULE: ./pages/search.js















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
const Search = ({ categories  })=>{
    const { 0: pending , 1: setPending  } = (0,external_react_.useState)(true);
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)(null);
    const { 0: params , 1: setParams  } = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    const handleToggleFilter = external_react_default().useCallback((filterValueId)=>{
        if (!params || !params.filters) return;
        if (params.filters.includes(filterValueId)) setParams((prev)=>({
                ...prev,
                filters: prev.filters.filter((item)=>item !== filterValueId
                )
            })
        );
        else setParams((prev)=>({
                ...prev,
                filters: [
                    ...prev.filters,
                    filterValueId
                ]
            })
        );
    }, [
        params
    ]);
    (0,external_react_.useEffect)(()=>{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const urlParams = Object.fromEntries(urlSearchParams.entries());
        setParams((prev)=>({
                ...prev,
                query: urlParams.q,
                categoryId: urlParams.categoryId ? urlParams.categoryId : "",
                filters: [],
                pageNumber: 1,
                pageSize: 30,
                sort: 1
            })
        );
    }, [
        router.query
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!params) return;
        let url = "https://api.chistayaliniya.tj/api" + "/product/filtration?" + (0,query/* QueryToString */.y)(params);
        const config = {
            method: "GET"
        };
        const getData = async ()=>{
            try {
                setPending(true);
                const response = await fetch(url, config);
                if (response.status === 401 || response.status === 403) {
                    localStorage.removeItem("bw-client-token");
                    window.location.href = '/';
                    dispatch((0,user_actions/* logout */.k)());
                }
                const data = await response.json();
                setProducts(data);
            } finally{
                window.setTimeout(()=>{
                    setPending(false);
                }, 200);
            }
        };
        getData();
    }, [
        params
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutController/* default */.Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        (params === null || params === void 0 ? void 0 : params.query) || '""',
                        " – купить в большой стирке"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Search_module_default()).root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Title/* default */.Z, {
                        className: (Search_module_default()).title,
                        children: [
                            "Результаты поиска ",
                            !pending ? products === null || products === void 0 ? void 0 : products.data.length : '...'
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Search_module_default()).container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Search_module_default()).sidebar,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_FilterSidebar, {
                                    isEmpty: (products === null || products === void 0 ? void 0 : products.data.length) === 0,
                                    filters: (products === null || products === void 0 ? void 0 : products.filters) || [],
                                    selectedFilters: (params === null || params === void 0 ? void 0 : params.filters) || [],
                                    toggleFilter: handleToggleFilter
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Search_module_default()).products,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Tools/* default */.Z, {
                                        pageSize: (params === null || params === void 0 ? void 0 : params.pageSize) || 30,
                                        onPageSizeChange: (pageSize)=>setParams((prev)=>({
                                                    ...prev,
                                                    pageSize
                                                })
                                            )
                                        ,
                                        sort: (params === null || params === void 0 ? void 0 : params.sort) || 1,
                                        onSort: (sort)=>setParams((prev)=>({
                                                    ...prev,
                                                    sort
                                                })
                                            )
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Products/* default */.Z, {
                                        children: [
                                            pending && /*#__PURE__*/ jsx_runtime_.jsx(skeletons/* ProductsSkeleton */.Ip, {
                                            }),
                                            !pending && products.data.map((product)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCart/* default */.Z, {
                                                    id: product.id,
                                                    data: product
                                                }, product.id)
                                            )
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* Pagination */.t, {
                                        page: (params === null || params === void 0 ? void 0 : params.pageNumber) || 1,
                                        totalPages: (products === null || products === void 0 ? void 0 : products.totalPages) || 1,
                                        onPageChange: (page)=>setParams((prev)=>({
                                                    ...prev,
                                                    pageNumber: page
                                                })
                                            )
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
/* harmony default export */ const search = (Search);


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168,914,919,905], () => (__webpack_exec__(4961)));
module.exports = __webpack_exports__;

})();