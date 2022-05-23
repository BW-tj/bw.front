(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 2365:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Characteristics_root__jxN_A",
	"title": "Characteristics_title__sQ33L",
	"characteristic": "Characteristics_characteristic__AVm4M",
	"name": "Characteristics_name__QEvkZ",
	"value": "Characteristics_value__sO7C5"
};


/***/ }),

/***/ 1590:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Comments_root__6_StT",
	"noContent": "Comments_noContent__y4__t",
	"title": "Comments_title__Uuuxo",
	"stars": "Comments_stars__w18IW",
	"star": "Comments_star__Id_Kw",
	"filled": "Comments_filled__M_axo",
	"label": "Comments_label__OyQCW",
	"author": "Comments_author__yiS2I",
	"text": "Comments_text__ov8FD",
	"date": "Comments_date__K8Sys",
	"addButton": "Comments_addButton__cwprP"
};


/***/ }),

/***/ 306:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductImages_root__Bzxby",
	"image": "ProductImages_image__yy1_8",
	"pagination": "ProductImages_pagination__e5SPh",
	"paging": "ProductImages_paging__n_w6p"
};


/***/ }),

/***/ 6784:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "AddComment_root__mUVQB",
	"wrap": "AddComment_wrap__amYnY",
	"title": "AddComment_title__GfdTz",
	"inputsWrap": "AddComment_inputsWrap__GwSTS",
	"inputWrap": "AddComment_inputWrap__wDHoP",
	"input": "AddComment_input__6fguD",
	"textarea": "AddComment_textarea__VTVld",
	"stars": "AddComment_stars__Dr_zE",
	"star": "AddComment_star__7OrXg",
	"lightFilled": "AddComment_lightFilled__ttk78",
	"filled": "AddComment_filled__FUkJV",
	"buttonWrap": "AddComment_buttonWrap__ktfV0",
	"button": "AddComment_button__n4gaK"
};


/***/ }),

/***/ 4345:
/***/ ((module) => {

// Exports
module.exports = {
	"rightWrap": "Product_rightWrap__70_m0",
	"root": "Product_root__dhzVS",
	"title": "Product_title__k8Sjr",
	"subTitle": "Product_subTitle__3dhI2",
	"right": "Product_right__7CIla",
	"price": "Product_price__YebSt",
	"price-discount": "Product_price-discount__laj5B",
	"description": "Product_description__zDHI1",
	"cart": "Product_cart__apdsi",
	"cart_icon": "Product_cart_icon__82AsJ",
	"countForCart": "Product_countForCart__lXLJd",
	"countForCart_button": "Product_countForCart_button__w6HoZ",
	"countForCart_buttonDecrease": "Product_countForCart_buttonDecrease__P6sGL",
	"countForCart_buttonIncrease": "Product_countForCart_buttonIncrease__sVfNk",
	"countForCart__title": "Product_countForCart__title__8IaEJ",
	"countForCart__wrap": "Product_countForCart__wrap__Wo8iK",
	"countForCart_value": "Product_countForCart_value__EjfRI",
	"addToCartButton": "Product_addToCartButton___pF0_",
	"active": "Product_active__nwGxa",
	"favor": "Product_favor__HB_8P",
	"favor_icon": "Product_favor_icon__xr3z9",
	"stars": "Product_stars__mHv6G",
	"star": "Product_star__na_Zb",
	"filled": "Product_filled__W9kWW",
	"result": "Product_result__1s_PX",
	"discount": "Product_discount__YC_zi",
	"characteristics": "Product_characteristics__NOOcg",
	"info": "Product_info__ZHDvb"
};


/***/ }),

/***/ 7544:
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
// EXTERNAL MODULE: ./layouts/LayoutController.js + 19 modules
var LayoutController = __webpack_require__(5168);
// EXTERNAL MODULE: ./styles/Product.module.scss
var Product_module = __webpack_require__(4345);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./icons/index.js + 29 modules
var icons = __webpack_require__(9484);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/actions/cart.actions.js
var cart_actions = __webpack_require__(2029);
// EXTERNAL MODULE: ./redux/actions/favorites.actions.js
var favorites_actions = __webpack_require__(6450);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/ProductImages/index.module.scss
var index_module = __webpack_require__(306);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/ProductImages/index.js





const ProductImages = ({ product , width  })=>{
    const images = [
        product.images.find((image)=>image.isMain
        ),
        ...product.images.filter((image)=>!image.isMain
        )
    ];
    const [slider1, setSlider] = external_react_default().useState(null);
    const settings = {
        infinite: false,
        arrows: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    const [style, setStyle] = external_react_default().useState({
        width: width + 'px',
        gridTemplateColumns: `100px ${width - 100}px`
    });
    external_react_default().useEffect(()=>{
        const handleResize = ()=>{
            if (window.innerWidth < 720) {
                setStyle({
                    width: width + 'px',
                    gridTemplateColumns: `${width}px`
                });
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize)
        ;
    }, [
        width
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).root,
        style: style,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).pagination,
                children: images.map((image, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>slider1 && slider1.slickGoTo(i)
                        ,
                        className: (index_module_default()).paging,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: `${"https://api.chistayaliniya.tj"}/${images[i].imagePath}`,
                            alt: 'product-image-' + i,
                            width: "100%",
                            height: "100%",
                            layout: "responsive",
                            objectFit: "contain"
                        })
                    }, image.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).slider,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...settings,
                    ref: (slider)=>setSlider(slider)
                    ,
                    children: images.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (index_module_default()).image,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: `${"https://api.chistayaliniya.tj"}/${images[index].imagePath}`,
                                alt: 'product-image-' + index,
                                width: "100%",
                                height: "100%",
                                layout: "responsive",
                                objectFit: "contain"
                            })
                        }, image.id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const components_ProductImages = (ProductImages);

// EXTERNAL MODULE: ./components/Comments/index.module.scss
var Comments_index_module = __webpack_require__(1590);
var Comments_index_module_default = /*#__PURE__*/__webpack_require__.n(Comments_index_module);
;// CONCATENATED MODULE: ./components/Comments/index.js





const Comments = ({ comments , onAdd  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Comments_index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Comments_index_module_default()).title,
                children: "Отзывы"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onAdd,
                className: external_classnames_default()((Comments_index_module_default()).addButton, (Comments_index_module_default()).active),
                children: "Оставить отзыв"
            }),
            comments.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Comments_index_module_default()).noContent,
                children: "У продукта нет отзывов, оставьте его первым!"
            }),
            comments.map((comment)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Comments_index_module_default()).comment,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Comments_index_module_default()).label,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Comments_index_module_default()).author,
                                    children: comment.userName
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Stars, {
                                    rating: comment.rating
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Comments_index_module_default()).text,
                            children: comment.text
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Comments_index_module_default()).date,
                            children: new Date(comment.commentAt).toLocaleDateString()
                        })
                    ]
                }, comment.id)
            )
        ]
    }));
};
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
        className: (Comments_index_module_default()).stars,
        children: stars.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx(Star, {
                filled: star.filled
            }, star.key)
        )
    }));
};
const Star = ({ filled  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Comments_index_module_default()).star, filled && (Comments_index_module_default()).filled),
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Star */.Ux, {
            size: 20
        })
    })
;
/* harmony default export */ const components_Comments = (Comments);

// EXTERNAL MODULE: ./components/Characteristics/index.module.scss
var Characteristics_index_module = __webpack_require__(2365);
var Characteristics_index_module_default = /*#__PURE__*/__webpack_require__.n(Characteristics_index_module);
;// CONCATENATED MODULE: ./components/Characteristics/index.js



const Characteristics = ({ characteristics  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Characteristics_index_module_default()).root,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Characteristics_index_module_default()).title,
                children: "Характеристики"
            }),
            characteristics.map((characteristic)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Characteristics_index_module_default()).characteristic,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Characteristics_index_module_default()).name,
                            children: [
                                characteristic.name,
                                ":"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Characteristics_index_module_default()).value,
                            children: characteristic.value
                        })
                    ]
                }, characteristic.id)
            )
        ]
    }));
};
/* harmony default export */ const components_Characteristics = (Characteristics);

// EXTERNAL MODULE: ./redux/actions/popup.actions.js
var popup_actions = __webpack_require__(4410);
// EXTERNAL MODULE: ./redux/actions/user.actions.js
var user_actions = __webpack_require__(6079);
// EXTERNAL MODULE: ./popups/AddComment/index.module.scss
var AddComment_index_module = __webpack_require__(6784);
var AddComment_index_module_default = /*#__PURE__*/__webpack_require__.n(AddComment_index_module);
;// CONCATENATED MODULE: ./popups/AddComment/index.js






const AddComment = ({ onClose , setComments , id  })=>{
    const [userName, setUserName] = external_react_default().useState('');
    const [text, setText] = external_react_default().useState('');
    const [rating, setRating] = external_react_default().useState(1);
    const handleClick = external_react_default().useCallback(async ()=>{
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                text,
                rating,
                productId: id
            })
        };
        const response = await fetch("https://api.chistayaliniya.tj/api" + '/comment', config);
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("bw-client-token");
            window.location.href = '/';
            dispatch((0,user_actions/* logout */.k)());
        }
        const data = await response.json();
        setComments({
            id: String(new Date().valueOf()),
            userName,
            text,
            rating,
            commentAt: new Date().toJSON()
        });
        onClose();
    }, [
        id,
        onClose,
        userName,
        text,
        rating,
        setComments
    ]);
    external_react_default().useEffect(()=>{
        const handleWindowClick = (e)=>{
            if (!e.target.closest('.' + (AddComment_index_module_default()).wrap)) onClose();
        };
        window.addEventListener('mousedown', handleWindowClick);
        return ()=>window.removeEventListener('mousedown', handleWindowClick)
        ;
    }, [
        onClose
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (AddComment_index_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (AddComment_index_module_default()).wrap,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (AddComment_index_module_default()).title,
                    children: "Добавить комментарий"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AddComment_index_module_default()).inputsWrap,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (AddComment_index_module_default()).inputWrap,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (AddComment_index_module_default()).inputTitle,
                                    children: "Имя"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (AddComment_index_module_default()).input,
                                    type: "text",
                                    value: userName,
                                    onChange: (e)=>setUserName(e.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (AddComment_index_module_default()).inputWrap,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (AddComment_index_module_default()).inputTitle,
                                    children: "Комментарий"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    className: (AddComment_index_module_default()).textarea,
                                    type: "text",
                                    value: text,
                                    onChange: (e)=>setText(e.target.value)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (AddComment_index_module_default()).starWrap,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (AddComment_index_module_default()).starTitle,
                            children: "Ваша оценка"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AddComment_Stars, {
                            rating: rating,
                            setRating: setRating
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (AddComment_index_module_default()).buttonWrap,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (AddComment_index_module_default()).button,
                        onClick: handleClick,
                        children: "Добавить"
                    })
                })
            ]
        })
    }));
};
const AddComment_Stars = ({ rating , setRating  })=>{
    const [hoverRating, setHoverRating] = external_react_default().useState(0);
    const [stars, setStars] = external_react_default().useState([]);
    external_react_default().useEffect(()=>{
        const newStars = [];
        for(let i = 1; i <= 5; i++)newStars.push({
            key: i,
            filled: i <= rating,
            lightFilled: i <= hoverRating
        });
        setStars(newStars);
    }, [
        rating,
        hoverRating
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (AddComment_index_module_default()).stars,
        children: stars.map((star, index)=>/*#__PURE__*/ jsx_runtime_.jsx(AddComment_Star, {
                onHover: ()=>setHoverRating(index + 1)
                ,
                onLeave: ()=>setHoverRating(0)
                ,
                onClick: ()=>setRating(index + 1)
                ,
                filled: star.filled,
                lightFilled: star.lightFilled
            }, star.key)
        )
    }));
};
const AddComment_Star = ({ filled , lightFilled , onClick , onHover , onLeave  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        onMouseOver: onHover,
        onMouseLeave: onLeave,
        className: external_classnames_default()((AddComment_index_module_default()).star, filled && (AddComment_index_module_default()).filled, lightFilled && (AddComment_index_module_default()).lightFilled),
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Star */.Ux, {
            size: 45
        })
    })
;
/* harmony default export */ const popups_AddComment = (AddComment);

;// CONCATENATED MODULE: ./pages/product/[id].js
















const getStaticPaths = async ()=>{
    const res = await fetch("https://api.chistayaliniya.tj/api" + "/product/filtration");
    const products = await res.json();
    const paths = [];
    products.data.forEach((product)=>{
        paths.push({
            params: {
                id: product.id.toString()
            }
        });
    });
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async (context)=>{
    const { id  } = context.params;
    const responseProduct = await fetch("https://api.chistayaliniya.tj/api" + "/product/" + id);
    const product = await responseProduct.json();
    const responseComments = await fetch("https://api.chistayaliniya.tj/api" + "/comment/?productId=" + id);
    const comments = await responseComments.json();
    const categoriesRes = await fetch("https://api.chistayaliniya.tj/api" + "/categories");
    const categories = await categoriesRes.json();
    return {
        props: {
            product,
            categories,
            initialComments: comments
        },
        revalidate: 20
    };
};
const Product = ({ product , categories , initialComments  })=>{
    const [width, setWidth] = external_react_default().useState(0);
    const [comments, setComments] = external_react_default().useState(initialComments || []);
    const leftRef = external_react_default().useRef(null);
    const [countForCartValue, setCountForCartValue] = external_react_default().useState(1);
    const [isFavorite, setIsFavorite] = external_react_default().useState(false);
    const cart = (0,external_react_redux_.useSelector)((state)=>state.cart
    );
    const user = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const favorites = (0,external_react_redux_.useSelector)((state)=>state.favorites
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const handleCheckout = external_react_default().useCallback(()=>{
        window.location.href = "/order";
    }, []);
    const onCommentAdd = external_react_default().useCallback(()=>{
        dispatch((0,popup_actions/* openPopup */.M)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(popups_AddComment, {
                ...props,
                id: product.id,
                setComments: (newComment)=>setComments((prev)=>[
                            ...prev,
                            newComment
                        ]
                    )
            })
        ));
    }, [
        product.id,
        dispatch
    ]);
    const handleToggleFavorite = external_react_default().useCallback((value)=>{
        setIsFavorite(value);
        if (!user.isAuth) if (value) dispatch((0,favorites_actions/* addToFavorites */._p)(product));
        else dispatch((0,favorites_actions/* removeFromFavorites */.zm)(product.id));
        else if (value) dispatch((0,favorites_actions/* addToFavoritesService */.GG)(product));
        else dispatch((0,favorites_actions/* removeFromFavoritesService */.II)(product.id));
    }, [
        dispatch,
        user.isAuth,
        product
    ]);
    const handleDeacreaseCountForCart = external_react_default().useCallback(()=>{
        if (countForCartValue === 1) if (user.isAuth) dispatch((0,cart_actions/* removeFromCartService */.kB)(product.id));
        else dispatch((0,cart_actions/* removeFromCart */.h2)(product.id));
        else if (user.isAuth) dispatch((0,cart_actions/* changeProductCountService */.EG)(product.id, countForCartValue - 1));
        else dispatch((0,cart_actions/* changeProductCount */.lJ)(product.id, countForCartValue - 1));
    }, [
        user.isAuth,
        dispatch,
        countForCartValue,
        product.id
    ]);
    const handleIncreaseCountForCart = external_react_default().useCallback(()=>{
        if (user.isAuth) dispatch((0,cart_actions/* changeProductCountService */.EG)(product.id, countForCartValue + 1));
        else dispatch((0,cart_actions/* changeProductCount */.lJ)(product.id, countForCartValue + 1));
    }, [
        user.isAuth,
        dispatch,
        product.id,
        countForCartValue
    ]);
    const handleSetCountForCart = external_react_default().useCallback((value)=>{
        if (!value || value === "") return setCountForCartValue(value);
        if (user.isAuth) dispatch((0,cart_actions/* changeProductCountService */.EG)(product.id, Number(value)));
        else dispatch((0,cart_actions/* changeProductCount */.lJ)(product.id, Number(value)));
    }, [
        user.isAuth,
        dispatch,
        product.id
    ]);
    const handleAddToCart = external_react_default().useCallback(()=>{
        if (user.isAuth) dispatch((0,cart_actions/* addToCartService */.ov)(product));
        else dispatch((0,cart_actions/* addToCart */.Xq)(product));
    }, [
        user.isAuth,
        dispatch,
        product
    ]);
    external_react_default().useEffect(()=>{
        var ref;
        setCountForCartValue(((ref = cart.find((item)=>item.productId === product.id
        )) === null || ref === void 0 ? void 0 : ref.count) || 0);
    }, [
        product.id,
        cart
    ]);
    external_react_default().useEffect(()=>{
        if (!product) return;
        if (user.isAuth) setIsFavorite(favorites.find((item)=>item.productId === product.id || item.id === product.id
        ));
    }, [
        product,
        user.isAuth,
        favorites
    ]);
    external_react_default().useEffect(()=>{
        if (!leftRef || !leftRef.current) return;
        setWidth(leftRef.current.offsetWidth);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(LayoutController/* default */.Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: product.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Product_module_default()).root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Product_module_default()).left,
                        ref: leftRef,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default()).title,
                                children: product.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(_id_Stars, {
                                rating: product.rating
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Product_module_default()).subTitle,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Product_module_default()).commentCount,
                                        children: [
                                            product.comment.length,
                                            " отзывов"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Product_module_default()).commentCount,
                                        children: [
                                            "Артикуль ",
                                            product.vendorCode
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ProductImages, {
                                width: width,
                                product: product
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Product_module_default()).info,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Characteristics, {
                                        characteristics: product.characteristics
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Comments, {
                                        comments: comments,
                                        onAdd: onCommentAdd
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Product_module_default()).rightWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Product_module_default()).right,
                            children: [
                                product.discount !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Product_module_default()).discount,
                                    children: product.discount && "акция " + product.discount + "%"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                                    className: (Product_module_default()).description,
                                    children: product.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: external_classnames_default()((Product_module_default()).favor, isFavorite && (Product_module_default()).active),
                                    onClick: ()=>handleToggleFavorite(!isFavorite)
                                    ,
                                    children: [
                                        isFavorite && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: external_classnames_default()((Product_module_default()).favor_icon, (Product_module_default()).active),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Favorite */.rF, {
                                                        size: 22
                                                    })
                                                }),
                                                "Убрать из избранного"
                                            ]
                                        }),
                                        !isFavorite && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Product_module_default()).favor_icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* FavoriteBorder */.Ie, {
                                                        size: 22
                                                    })
                                                }),
                                                "Добавить в избранное"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Product_module_default()).cart,
                                    children: [
                                        countForCartValue !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Product_module_default()).countForCart__wrap,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Product_module_default()).countForCart__title,
                                                    children: "В корзине"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Product_module_default()).countForCart,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: external_classnames_default()((Product_module_default()).countForCart_button, (Product_module_default()).countForCart_buttonDecrease),
                                                            onClick: handleDeacreaseCountForCart,
                                                            children: "-"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            value: countForCartValue,
                                                            onChange: (e)=>handleSetCountForCart(e.target.value)
                                                            ,
                                                            className: (Product_module_default()).countForCart_value,
                                                            onBlur: (e)=>handleSetCountForCart(e.target.value || 1)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: external_classnames_default()((Product_module_default()).countForCart_button, (Product_module_default()).countForCart_buttonIncrease),
                                                            onClick: handleIncreaseCountForCart,
                                                            children: "+"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (Product_module_default()).result,
                                                    children: [
                                                        "Итого: ",
                                                        countForCartValue * product.price,
                                                        " с."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: external_classnames_default()((Product_module_default()).addToCartButton, (Product_module_default()).active),
                                                    onClick: handleCheckout,
                                                    children: "Перейти к оплате"
                                                })
                                            ]
                                        }),
                                        !countForCartValue && countForCartValue !== "" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: (Product_module_default()).addToCartButton,
                                            onClick: handleAddToCart,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: (Product_module_default()).cart_icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ShoppingCart */.yT, {
                                                        size: 20
                                                    })
                                                }),
                                                "Добавить в корзину"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Product_module_default()).price,
                                    children: [
                                        product.price - product.price * product.discount / 100,
                                        " с.",
                                        product.discount !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (Product_module_default())["price-discount"],
                                            children: [
                                                product.price,
                                                " с."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
const _id_Stars = ({ rating  })=>{
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
        className: (Product_module_default()).stars,
        children: stars.map((star)=>/*#__PURE__*/ jsx_runtime_.jsx(_id_Star, {
                filled: star.filled
            }, star.key)
        )
    }));
};
const _id_Star = ({ filled  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Product_module_default()).star, filled && (Product_module_default()).filled),
        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Star */.Ux, {
            size: 30
        })
    })
;
/* harmony default export */ const _id_ = (Product);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,168], () => (__webpack_exec__(7544)));
module.exports = __webpack_exports__;

})();