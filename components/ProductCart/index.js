import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import If from "../If/If";
import AddToCartButton from "./AddToCartButton";
import CartControllButtons from "./CartControllButtons";
import LabelList from "./LabelList";
import Price from "./Price";
import Slider from "./Slider";
import Stars from "./Stars";
import Title from "./Title";
import styles from "./index.module.scss";
import { addToFavorites, addToFavoritesService, removeFromFavorites, removeFromFavoritesService } from '../../redux/actions/favorites.actions';
import { changeProductCountService, changeProductCount, addToCart, addToCartService, removeFromCartService, removeFromCart } from '../../redux/actions/cart.actions';

const ProductCart = ({ id = 1, initialFavorite=false, data = null }) => {
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [countInCart, setCountInCart] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const rootRef = React.useRef(null);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
	const user = useSelector(state => state.user)

	const handleToggleFavorite = React.useCallback((value) => {
    setIsFavorite(value);
		if (!user.isAuth)
			if (value)
				dispatch(addToFavorites(data))
      else
        dispatch(removeFromFavorites(data.id))
    else
      if (value)
        dispatch(addToFavoritesService(data))
			else
        dispatch(removeFromFavoritesService(data.id))
	}, [dispatch, user.isAuth, data])

  const handleAddToCart = React.useCallback(async () => {
		if (user.isAuth)
      dispatch(addToCartService(data));
    else
      dispatch(addToCart(data));
	}, [data, dispatch, user.isAuth])

  const handleIncreaseProductCountInCart = React.useCallback(async () => {
    if (user.isAuth)
      dispatch(changeProductCountService(data.id, countInCart+1));
    else
		  dispatch(changeProductCount(data.id, countInCart+1));
	}, [data.id, dispatch, countInCart, user.isAuth])

  const handleDecreaseProductCountInCart = React.useCallback(async () => {
    if (countInCart === 1) 
      if (user.isAuth)
        dispatch(removeFromCartService(data.id));
      else
        dispatch(removeFromCart(data.id));
    else
      if (user.isAuth)
        dispatch(changeProductCountService(data.id, countInCart-1));
      else
        dispatch(changeProductCount(data.id, countInCart-1));
	}, [data.id, dispatch, countInCart, user.isAuth])

  useEffect(() => {
    if (!data) return;
    if (user.isAuth) setIsFavorite(data.isFavorite);
    setProduct({
      name: data.name,
      isNew: data.isNew,
      promotionPercent: data.discount,
      rating: data.rating,
      price: data.price,
    });
  }, [data, user.isAuth]);

  useEffect(() => {
    const itemInCart = cart.find((item) => item.productId === id);
    if (!itemInCart) return setCountInCart(0);
    setCountInCart(itemInCart.count);
  }, [cart, id]);

  useEffect(() => {
    if (!rootRef.current) return;
    setWidth(rootRef.current && rootRef.current.offsetWidth-40)
  }, [rootRef, product])

  useEffect(() => {

    const handleWindowResize = () => {
      if (window.innerWidth < 1200)
        setHeight(150);
      else
        setHeight(300);
    }

    handleWindowResize()
    
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  if (!product) return <></>;
  return (
    <div className={styles.root} ref={rootRef}>
      <LabelList
        isNew={product.isNew}
        promotionPercent={product.promotionPercent}
      />
      <Slider id={id} images={data.images} width={width} height={height} />

      <Title
        id={id}
        dispatch={dispatch}
        name={
          product.name.slice(0, 30) + (product.name.length > 30 ? "..." : "")
        }
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />

      <Price price={product.price} />

      <Stars rating={product.rating} />

      <If
        condition={countInCart === 0}
        altContent={
          <CartControllButtons 
            count={countInCart} 
            onIncrease={handleIncreaseProductCountInCart} 
            onDecrease={handleDecreaseProductCountInCart} 
          />
        }
      >
        <AddToCartButton onClick={handleAddToCart} id={id} dispatch={dispatch} />
      </If>
    </div>
  );
};

export default ProductCart;
