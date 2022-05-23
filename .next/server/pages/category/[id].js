(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 8598:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "RefineSearchSidebar_root__jjQhI",
	"fadeIn": "RefineSearchSidebar_fadeIn__SNhN7",
	"title": "RefineSearchSidebar_title__qBNUq",
	"filters": "RefineSearchSidebar_filters__h92Nn",
	"minmax_menu_wrap": "RefineSearchSidebar_minmax_menu_wrap__JZMTI",
	"range": "RefineSearchSidebar_range__r8a2i",
	"minmax_inputs": "RefineSearchSidebar_minmax_inputs__xuaih",
	"minMaxInputWrap": "RefineSearchSidebar_minMaxInputWrap__UL70v",
	"minMaxInput": "RefineSearchSidebar_minMaxInput__15rWL",
	"filter_label": "RefineSearchSidebar_filter_label__qwzl2",
	"filter_menu_wrap": "RefineSearchSidebar_filter_menu_wrap__t6U47",
	"filter_menu": "RefineSearchSidebar_filter_menu__FWl8E",
	"filter_value": "RefineSearchSidebar_filter_value__crQQ9",
	"filter_value_icon": "RefineSearchSidebar_filter_value_icon__QAtIz",
	"filterArrow": "RefineSearchSidebar_filterArrow__ypm_z",
	"open": "RefineSearchSidebar_open__o2jRy"
};


/***/ }),

/***/ 6145:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "SubcategoryList_root__rtKea",
	"wrap": "SubcategoryList_wrap__ZA_0N",
	"item": "SubcategoryList_item__kJZk7"
};


/***/ }),

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "SubcategorySidebar_root___l2JM",
	"fadeIn": "SubcategorySidebar_fadeIn__ZBf1S",
	"title": "SubcategorySidebar_title___2g0l",
	"subCategories": "SubcategorySidebar_subCategories__e4TOA",
	"subCategory_label": "SubcategorySidebar_subCategory_label__T6mAP",
	"subCategory_label_link": "SubcategorySidebar_subCategory_label_link__D_SRp",
	"active": "SubcategorySidebar_active__l6C8S",
	"subCategory_menu_wrap": "SubcategorySidebar_subCategory_menu_wrap__moRIv",
	"subCategory_menu": "SubcategorySidebar_subCategory_menu__c5wsQ",
	"subCategory_value": "SubcategorySidebar_subCategory_value__nA68v",
	"subCategory_value_icon": "SubcategorySidebar_subCategory_value_icon__hUruH",
	"subCategoryArrow": "SubcategorySidebar_subCategoryArrow__d3_3m",
	"open": "SubcategorySidebar_open__X8iki",
	"subSubCategory": "SubcategorySidebar_subSubCategory__57o36"
};


/***/ }),

/***/ 7421:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Category_root__JN2yS",
	"title": "Category_title__uJB_Q",
	"container": "Category_container___HG5Y",
	"sidebars": "Category_sidebars__z2HM0",
	"subcategories": "Category_subcategories__igl_n"
};


/***/ }),

/***/ 1732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
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
// EXTERNAL MODULE: ./components/Title/Title.js
var Title = __webpack_require__(4660);
// EXTERNAL MODULE: ./layouts/LayoutController.js + 19 modules
var LayoutController = __webpack_require__(5168);
// EXTERNAL MODULE: ./styles/Category.module.scss
var Category_module = __webpack_require__(7421);
var Category_module_default = /*#__PURE__*/__webpack_require__.n(Category_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./icons/index.js + 29 modules
var icons = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/SubcategorySidebar/SubSubcategory.js



const SubSubcategory = ({ styles , subSubCategory  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: '/categories/' + subSubCategory,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: styles.subSubCategory,
            children: subSubCategory.name
        })
    }));
};
/* harmony default export */ const SubcategorySidebar_SubSubcategory = (SubSubcategory);

;// CONCATENATED MODULE: ./components/SubcategorySidebar/Subcategory.js






const Subcategory = ({ id , subCategory: subCategory1 , styles  })=>{
    const [open, setOpen] = external_react_default().useState(true);
    const [height, setHeight] = external_react_default().useState(0);
    const menu = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (!menu || !menu.current) return;
        setHeight(menu.current.offsetHeight);
    }, [
        menu,
        subCategory1
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.subCategory,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styles.subCategory_label,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/category/" + subCategory1.id,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()(styles.subCategory_label_link, id === subCategory1.id && styles.active),
                            children: subCategory1.name
                        })
                    }),
                    subCategory1.subCategories.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: external_classnames_default()(styles.subCategoryArrow, open && styles.open),
                        onClick: ()=>setOpen(!open)
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* KeyboardArrowDown */.Wd, {
                            size: 20
                        })
                    })
                ]
            }),
            subCategory1.subCategories.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.subCategory_menu_wrap,
                style: {
                    height: !open ? 0 : height + 'px'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: styles.subCategory_menu,
                    ref: menu,
                    children: subCategory1.subCategories.map((subCategory)=>/*#__PURE__*/ jsx_runtime_.jsx(SubcategorySidebar_SubSubcategory, {
                            styles: styles,
                            subSubCategory: subCategory
                        }, subCategory.id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const SubcategorySidebar_Subcategory = (Subcategory);

// EXTERNAL MODULE: ./components/SubcategorySidebar/index.module.scss
var index_module = __webpack_require__(1469);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/SubcategorySidebar/index.js




const SubcategorySidebar = ({ id , categories  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).title,
                children: "Подкатегории"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).subCategories,
                children: categories.length !== 0 && categories.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SubcategorySidebar_Subcategory, {
                        id: id,
                        subCategory: category,
                        styles: (index_module_default())
                    }, index)
                )
            })
        ]
    }));
};
/* harmony default export */ const components_SubcategorySidebar = (SubcategorySidebar);

;// CONCATENATED MODULE: ./components/RefineSearchSidebar/Brand.js



const Brand = ({ styles , selectedBrands , brand , onClick  })=>{
    const [active, setActive] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        if (selectedBrands === null || selectedBrands === void 0 ? void 0 : selectedBrands.includes(brand.id)) setActive(true);
        else setActive(false);
    }, [
        selectedBrands,
        brand.id
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: styles.filter_value,
        onClick: ()=>onClick(brand.id)
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
            brand.name
        ]
    }));
};
/* harmony default export */ const RefineSearchSidebar_Brand = (Brand);

;// CONCATENATED MODULE: ./components/RefineSearchSidebar/Brands.js





const Brands = ({ brands , selectedBrands , styles , toggleBrand  })=>{
    const [open, setOpen] = external_react_default().useState(false);
    const [height, setHeight] = external_react_default().useState(0);
    const menu = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (!menu) return;
        setHeight(menu.current.offsetHeight);
    }, [
        menu,
        brands
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.filter,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: styles.filter_label,
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    "Бренд",
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
                    children: brands.map((brand)=>/*#__PURE__*/ jsx_runtime_.jsx(RefineSearchSidebar_Brand, {
                            styles: styles,
                            brand: brand,
                            onClick: toggleBrand,
                            selectedBrands: selectedBrands
                        }, brand.id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const RefineSearchSidebar_Brands = (Brands);

;// CONCATENATED MODULE: ./components/RefineSearchSidebar/FilterValue.js



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
/* harmony default export */ const RefineSearchSidebar_FilterValue = (FilterValue);

;// CONCATENATED MODULE: ./components/RefineSearchSidebar/Filter.js





const Filter = ({ filter , selectedFilters , styles , toggleFilter  })=>{
    const [open, setOpen] = external_react_default().useState(false);
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
                    children: filter.values.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx(RefineSearchSidebar_FilterValue, {
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
/* harmony default export */ const RefineSearchSidebar_Filter = (Filter);

// EXTERNAL MODULE: ./components/RefineSearchSidebar/index.module.scss
var RefineSearchSidebar_index_module = __webpack_require__(8598);
var RefineSearchSidebar_index_module_default = /*#__PURE__*/__webpack_require__.n(RefineSearchSidebar_index_module);
;// CONCATENATED MODULE: external "rc-slider"
const external_rc_slider_namespaceObject = require("rc-slider");
;// CONCATENATED MODULE: ./components/MultiRangeSlider/index.js




const MultiRangeSlider = ({ timeout =0 , min , max , className ="" , onChange , value  })=>{
    const [middleValue, setMiddleValue] = external_react_default().useState(value || [
        min,
        max
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!onChange) return;
        const intervalRef = setTimeout(()=>{
            if (value[0] !== middleValue[0] || value[1] !== middleValue[1]) onChange(middleValue);
        }, timeout);
        return ()=>clearTimeout(intervalRef)
        ;
    }, [
        middleValue,
        timeout,
        onChange,
        value
    ]);
    (0,external_react_.useEffect)(()=>{
        setMiddleValue(value);
    }, [
        value
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "range",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_rc_slider_namespaceObject.Range, {
            min: 0,
            max: max || 1000,
            className: className,
            onChange: setMiddleValue,
            value: middleValue
        })
    }));
};
/* harmony default export */ const components_MultiRangeSlider = (/*#__PURE__*/(0,external_react_.memo)(MultiRangeSlider, (prevProps, nextProps)=>{
    if (prevProps.min !== nextProps.min || prevProps.max !== nextProps.max) return false;
    if (prevProps.value[0] === nextProps.value[0] && prevProps.value[1] === nextProps.value[1]) return true;
    else return false;
}));

;// CONCATENATED MODULE: ./components/RefineSearchSidebar/MinMaxPrice.js





const MinMaxPrice = ({ min , max , minValue , maxValue , styles , onChange  })=>{
    const [open, setOpen] = external_react_default().useState(false);
    const [height, setHeight] = external_react_default().useState(0);
    const menu = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (!menu) return;
        setHeight(menu.current.offsetHeight);
    }, [
        menu
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.minmax,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: styles.filter_label,
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    "Цена",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: external_classnames_default()(styles.filterArrow, open && styles.open),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* KeyboardArrowDown */.Wd, {
                            size: 20
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.minmax_menu_wrap,
                style: {
                    height: !open ? 0 : height + 'px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: styles.filter_menu,
                    ref: menu,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_MultiRangeSlider, {
                            timeout: 500,
                            min: min,
                            max: max,
                            onChange: onChange,
                            className: styles.range,
                            value: [
                                minValue,
                                maxValue
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: styles.minmax_inputs,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: styles.minMaxInputWrap,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: styles.minMaxInput,
                                            value: minValue,
                                            onChange: (e)=>onChange([
                                                    e.target.value,
                                                    maxValue
                                                ])
                                        }),
                                        "c."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: styles.minMaxInputWrap,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: styles.minMaxInput,
                                            value: maxValue,
                                            onChange: (e)=>onChange([
                                                    minValue,
                                                    e.target.value
                                                ])
                                        }),
                                        "c."
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const RefineSearchSidebar_MinMaxPrice = (MinMaxPrice);

;// CONCATENATED MODULE: ./components/RefineSearchSidebar/index.js






const RefineSearchSidebar = ({ minPrice , maxPrice , minPriceValue , maxPriceValue , onChangePrice , brands , selectedBrands , onToggleBrand , filters , selectedFilters , toggleFilter ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (RefineSearchSidebar_index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (RefineSearchSidebar_index_module_default()).title,
                children: "Уточнить поиск"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (RefineSearchSidebar_index_module_default()).filters,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(RefineSearchSidebar_MinMaxPrice, {
                        min: minPrice,
                        max: maxPrice,
                        minValue: minPriceValue,
                        maxValue: maxPriceValue,
                        onChange: onChangePrice,
                        styles: (RefineSearchSidebar_index_module_default())
                    }),
                    brands.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(RefineSearchSidebar_Brands, {
                        toggleBrand: onToggleBrand,
                        selectedBrands: selectedBrands,
                        brands: brands,
                        styles: (RefineSearchSidebar_index_module_default())
                    }),
                    filters.length !== 0 && filters.map((filter, index)=>/*#__PURE__*/ jsx_runtime_.jsx(RefineSearchSidebar_Filter, {
                            toggleFilter: toggleFilter,
                            selectedFilters: selectedFilters,
                            filter: filter,
                            styles: (RefineSearchSidebar_index_module_default())
                        }, index)
                    )
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_RefineSearchSidebar = (RefineSearchSidebar);

// EXTERNAL MODULE: ./components/Tools/index.js
var Tools = __webpack_require__(5616);
// EXTERNAL MODULE: ./skeletons/index.js
var skeletons = __webpack_require__(3798);
// EXTERNAL MODULE: ./components/Products/Products.js
var Products = __webpack_require__(1627);
// EXTERNAL MODULE: ./components/ProductCart/index.js + 10 modules
var ProductCart = __webpack_require__(7737);
// EXTERNAL MODULE: ./components/Pagination/index.js
var Pagination = __webpack_require__(919);
// EXTERNAL MODULE: ./functions/query.js
var query = __webpack_require__(7367);
// EXTERNAL MODULE: ./components/SubcategoryList/index.module.scss
var SubcategoryList_index_module = __webpack_require__(6145);
var SubcategoryList_index_module_default = /*#__PURE__*/__webpack_require__.n(SubcategoryList_index_module);
;// CONCATENATED MODULE: ./components/SubcategoryList/index.js





const SubcategoryList = ({ subCategories , className  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SubcategoryList_index_module_default()).root,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()((SubcategoryList_index_module_default()).wrap, className),
            children: subCategories.map((subCategory)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: '/category/' + subCategory.id,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (SubcategoryList_index_module_default()).item,
                        children: subCategory.name
                    })
                }, subCategory.id)
            )
        })
    }));
};
/* harmony default export */ const components_SubcategoryList = (SubcategoryList);

// EXTERNAL MODULE: ./redux/actions/user.actions.js
var user_actions = __webpack_require__(6079);
;// CONCATENATED MODULE: ./pages/category/[id].js
















const getStaticPaths = async ()=>{
    const res = await fetch("https://api.chistayaliniya.tj/api" + "/categories");
    const categories = await res.json();
    const paths = [];
    categories.forEach((category)=>{
        paths.push({
            params: {
                id: category.id.toString()
            }
        });
        category.subCategories.forEach((subcategory)=>{
            paths.push({
                params: {
                    id: subcategory.id.toString()
                }
            });
            subcategory.subCategories.forEach((subsubcategory)=>{
                paths.push({
                    params: {
                        id: subsubcategory.id.toString()
                    }
                });
            });
        });
    });
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async (context)=>{
    const { id  } = context.params;
    const responseCategories = await fetch("https://api.chistayaliniya.tj/api" + "/categories");
    const categories = await responseCategories.json();
    let category = [];
    let subCategories = [];
    categories.forEach((_category)=>{
        if (_category.id === id) {
            category.push(_category);
            subCategories = _category.subCategories;
        } else _category.subCategories.forEach((_subcategory)=>{
            if (_subcategory.id === id) {
                category.push(_category);
                category.push(_subcategory);
                subCategories = _subcategory.subCategories;
            } else _subcategory.subCategories.forEach((_subsubcategory)=>{
                if (_subsubcategory.id === id) {
                    category.push(_category);
                    category.push(_subcategory);
                    category.push(_subsubcategory);
                    subCategories = _subcategory.subCategories;
                }
            });
        });
    });
    return {
        props: {
            categories,
            category,
            subCategories
        },
        revalidate: 20
    };
};
const Category = ({ categories , category , subCategories  })=>{
    var ref;
    const [pending, setPending] = external_react_default().useState(true);
    const [products, setProducts] = external_react_default().useState(null);
    const [params, setParams] = external_react_default().useState({
        minPrice: 0,
        maxPrice: 1000,
        categoryId: category[0].id,
        pageNumber: 1,
        pageSize: 30,
        brands: [],
        selectedBrands: [],
        filters: [],
        sort: 1
    });
    const loadData = external_react_default().useCallback(async (_params)=>{
        try {
            let url = "https://api.chistayaliniya.tj/api" + "/product/filtration?categoryId" + _params.categoryId + "&sort=" + _params.sort + "&selectedBrands=" + _params.selectedBrands + "&minPrice=" + _params.minPrice + "&maxPrice=" + _params.maxPrice;
            (0,query/* QueryToString */.y)(_params);
            const config = {
                method: "GET"
            };
            setPending(true);
            const response = await fetch(url, config);
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem("bw-client-token");
                window.location.href = "/";
                dispatch((0,user_actions/* logout */.k)());
            }
            const data = await response.json();
            setProducts(data);
        } finally{
            window.setTimeout(()=>{
                setPending(false);
            }, 200);
        }
    }, []);
    external_react_default().useEffect(()=>{
        let url = "https://api.chistayaliniya.tj/api" + "/product/filtration?categoryId=" + category[category.length - 1].id + "&pageNumber=" + params.pageNumber + "&pageSize=" + params.pageSize;
        const config = {
            method: "GET"
        };
        const getData = async ()=>{
            try {
                setPending(true);
                const response = await fetch(url, config);
                if (response.status === 401 || response.status === 403) {
                    localStorage.removeItem("bw-client-token");
                    window.location.href = "/";
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
        category,
        params
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutController/* default */.Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        category[category.length - 1].name || '""',
                        " – купить в большой стирке"
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Category_module_default()).root,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        className: (Category_module_default()).title,
                        children: (ref = category[category.length - 1]) === null || ref === void 0 ? void 0 : ref.name
                    }),
                    category[category.length - 1].subCategories.length !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(components_SubcategoryList, {
                        className: (Category_module_default()).subcategories,
                        subCategories: subCategories
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Category_module_default()).container,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Category_module_default()).sidebars,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Category_module_default()).sidebar,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_SubcategorySidebar, {
                                            categories: subCategories,
                                            id: category[category.length - 1].id
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Category_module_default()).sidebar,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_RefineSearchSidebar, {
                                            minPrice: (products === null || products === void 0 ? void 0 : products.minPrice) || 0,
                                            maxPrice: (products === null || products === void 0 ? void 0 : products.maxPrice) || 0,
                                            minPriceValue: params.minPrice,
                                            maxPriceValue: params.maxPrice,
                                            onChangePrice: (value)=>{
                                                setParams({
                                                    ...params,
                                                    minPrice: value[0],
                                                    maxPrice: value[1]
                                                });
                                                loadData({
                                                    ...params,
                                                    minPrice: value[0],
                                                    maxPrice: value[1]
                                                });
                                            },
                                            brands: (products === null || products === void 0 ? void 0 : products.brands) || [],
                                            selectedBrands: params.selectedBrands,
                                            onToggleBrand: (brand)=>{
                                                setParams({
                                                    ...params,
                                                    selectedBrands: params.selectedBrands.includes(brand) ? params.selectedBrands.filter((item)=>item !== brand
                                                    ) : [
                                                        ...params.selectedBrands,
                                                        brand
                                                    ]
                                                });
                                                loadData({
                                                    ...params,
                                                    selectedBrands: params.selectedBrands.includes(brand) ? params.selectedBrands.filter((item)=>item !== brand
                                                    ) : [
                                                        ...params.selectedBrands,
                                                        brand
                                                    ]
                                                });
                                            },
                                            filters: (products === null || products === void 0 ? void 0 : products.filters) || [],
                                            selectedFilters: (params === null || params === void 0 ? void 0 : params.filters) || [],
                                            toggleFilter: (filterValueId)=>{
                                                setParams({
                                                    ...params,
                                                    filters: params.filters.includes(filterValueId) ? params.filters.filter((item)=>item !== filterValueId
                                                    ) : [
                                                        ...params.filters,
                                                        filterValueId
                                                    ]
                                                });
                                                loadData({
                                                    ...params,
                                                    filters: params.filters.includes(filterValueId) ? params.filters.filter((item)=>item !== filterValueId
                                                    ) : [
                                                        ...params.filters,
                                                        filterValueId
                                                    ]
                                                });
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Category_module_default()).products,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Tools/* default */.Z, {
                                        pageSize: (params === null || params === void 0 ? void 0 : params.pageSize) || 30,
                                        onPageSizeChange: (pageSize)=>{
                                            setParams({
                                                ...params,
                                                pageSize
                                            });
                                            loadData({
                                                ...params,
                                                pageSize
                                            });
                                        },
                                        sort: (params === null || params === void 0 ? void 0 : params.sort) || 1,
                                        onSort: (sort)=>{
                                            setParams({
                                                ...params,
                                                sort
                                            });
                                            loadData({
                                                ...params,
                                                sort
                                            });
                                        }
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
                                        onPageChange: (page)=>{
                                            setParams((prev)=>({
                                                    ...prev,
                                                    pageNumber: page
                                                })
                                            );
                                        }
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
/* harmony default export */ const _id_ = (Category);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168,914,919,905], () => (__webpack_exec__(1732)));
module.exports = __webpack_exports__;

})();