exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 7470:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Tools_root__Mx5_O",
	"dropdown": "Tools_dropdown__4rSVU",
	"dropdown_label": "Tools_dropdown_label__V4pHo",
	"dropdown_label_icon": "Tools_dropdown_label_icon__4NkfE",
	"active": "Tools_active__dv2F_",
	"dropdown_menu": "Tools_dropdown_menu__kWzsl",
	"fadeIn": "Tools_fadeIn__BOQtM",
	"dropdown_menu_item": "Tools_dropdown_menu_item__P_6ea"
};


/***/ }),

/***/ 5616:
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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7470);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const Tools = ({ pageSize , onPageSizeChange , sort , onSort  })=>{
    const sortDictionary = {
        1: 'Сортировать по времени: новинки выше',
        2: 'Сортировать по цене: дешевые выше',
        3: 'Сортировать по цене: дешевые ниже',
        4: 'Сортировать по покупаемости',
        5: 'Сортировать по размеру скидки: высокие скидки в начале',
        6: 'Случайные'
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dropdown, {
                id: 1,
                width: 180,
                label: pageSize + " на страницу",
                menu: [
                    {
                        value: 20,
                        name: "20 на страницу"
                    },
                    {
                        value: 30,
                        name: "30 на страницу"
                    },
                    {
                        value: 40,
                        name: "40 на страницу"
                    },
                    {
                        value: 50,
                        name: "50 на страницу"
                    }
                ],
                onSelect: (v)=>onPageSizeChange(v)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dropdown, {
                id: 2,
                width: 300,
                label: sortDictionary[sort],
                menu: [
                    {
                        value: 1,
                        name: sortDictionary[1]
                    },
                    {
                        value: 2,
                        name: sortDictionary[2]
                    },
                    {
                        value: 3,
                        name: sortDictionary[3]
                    },
                    {
                        value: 4,
                        name: sortDictionary[4]
                    },
                    {
                        value: 5,
                        name: sortDictionary[5]
                    },
                    {
                        value: 6,
                        name: sortDictionary[6]
                    }, 
                ],
                onSelect: (v)=>onSort(v)
            })
        ]
    }));
};
const Dropdown = ({ id , width , label , menu , onSelect  })=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        const handleClickOutside = (e)=>{
            if (!e.target.closest('#tools-dropdown-' + id)) setOpen(false);
        };
        window.addEventListener('click', handleClickOutside);
        return ()=>window.removeEventListener('click', handleClickOutside)
        ;
    }, [
        id
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: 'tools-dropdown-' + id,
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdown),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdown_label), open && (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active)),
                onClick: ()=>setOpen(!open)
                ,
                children: [
                    label,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdown_label_icon),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_3__/* .UnfoldMore */ .Ne, {
                            size: 20
                        })
                    })
                ]
            }),
            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdown_menu),
                style: {
                    width: width + 'px'
                },
                children: menu.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dropdown_menu_item),
                        onClick: ()=>{
                            setOpen(false);
                            onSelect(item.value);
                        },
                        children: item.name
                    }, index)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);


/***/ }),

/***/ 7367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ QueryToString)
/* harmony export */ });
/* unused harmony export QueryToObject */
const QueryToString = (obj)=>{
    let newObj = {
    };
    if (!obj) return "";
    Object.keys(obj).forEach((key)=>{
        if (Array.isArray(obj[key])) {
            newObj[key] = obj[key].join(" ");
        }
        if (obj[key] !== "" && obj[key] !== null && obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    });
    let searchParams = new URLSearchParams(newObj);
    return searchParams.toString();
};
const QueryToObject = ()=>{
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
};


/***/ })

};
;