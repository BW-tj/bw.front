"use strict";
exports.id = 919;
exports.ids = [919];
exports.modules = {

/***/ 919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);





const Pagination = ({ totalPages , page , onPageChange , className  })=>{
    const [pages, setPages] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const newPages = [];
        if (totalPages < 10) {
            for(let i = 1; i <= totalPages; i++){
                newPages.push({
                    type: "page",
                    value: i
                });
            }
        } else if (page < 7) {
            for(let i = 1; i <= 7; i++){
                newPages.push({
                    type: "page",
                    value: i
                });
            }
            newPages.push({
                type: "arrowRight"
            });
            newPages.push({
                type: "page",
                value: totalPages
            });
        } else if (page > totalPages - 6) {
            newPages.push({
                type: "page",
                value: 1
            });
            newPages.push({
                type: "arrowLeft"
            });
            for(let i = totalPages - 6; i <= totalPages; i++){
                newPages.push({
                    type: "page",
                    value: i
                });
            }
        } else {
            newPages.push({
                type: "page",
                value: 1
            });
            newPages.push({
                type: "arrowLeft"
            });
            for(let i = page - 2; i <= page + 2; i++){
                newPages.push({
                    type: "page",
                    value: i
                });
            }
            newPages.push({
                type: "arrowRight"
            });
            newPages.push({
                type: "page",
                value: totalPages
            });
        }
        setPages(newPages);
    }, [
        page,
        totalPages
    ]);
    // if (totalPages <= 1) return null;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("pagination", className),
        children: pages.map((cpage, index)=>cpage.type === "page" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("pagination__item", cpage.value === page && "pagination__item--active"),
                onClick: ()=>onPageChange(cpage.value)
                ,
                children: cpage.value
            }, index) : cpage.type === "arrowRight" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pagination__item pagination__item--arrow",
                onClick: ()=>onPageChange(page + 1)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                    icon: "fa-solid fa-arrow-right",
                    size: 30
                })
            }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pagination__item pagination__item--arrow",
                onClick: ()=>onPageChange(page - 1)
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                    icon: "fa-solid fa-arrow-left"
                })
            }, index)
        )
    }));
};


/***/ })

};
;