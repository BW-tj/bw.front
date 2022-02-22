import React from "react";
import Head from "next/head";
import LayoutController from "../../layouts/LayoutController";
import styles from "../../styles/Product.module.scss";
import classNames from "classnames";
import { Favorite, FavoriteBorder, ShoppingCart } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCartService, changeProductCount, changeProductCountService, removeFromCart, removeFromCartService } from '../../redux/actions/cart.actions';
import { addToFavorites, addToFavoritesService, removeFromFavorites, removeFromFavoritesService } from '../../redux/actions/favorites.actions';
import { 
	Star as StarIcon
} from '../../icons'
import ProductImages from '../../components/ProductImages';
import Comments from '../../components/Comments';
import Characteristics from '../../components/Characteristics';
import { openPopup } from '../../redux/actions/popup.actions';
import AddComment from '../../popups/AddComment';

export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/product/filtration");
  const products = await res.json();
  const paths = [];

  products.data.forEach((product) => {
    paths.push({
      params: { id: product.id.toString() },
    });
  });

  return {
    paths,
    fallback: false,
		revalidate: 10
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const responseProduct = await fetch(
    process.env.NEXT_PUBLIC_HOST + "/product/" + id
  );
  const product = await responseProduct.json();

  const responseComments = await fetch(
    process.env.NEXT_PUBLIC_HOST + "/comment/?productId=" + id
  );
  const comments = await responseComments.json();

  const categoriesRes = await fetch(
    process.env.NEXT_PUBLIC_HOST + "/categories"
  );
  const categories = await categoriesRes.json();

  return { props: { product, categories, initialComments: comments }, revalidate: 20};
};

const Product = ({ product, categories, initialComments }) => {
  
  const [width, setWidth] = React.useState(0);
  const [comments, setComments] = React.useState(initialComments || []);
  const leftRef = React.useRef(null);

  const [countForCartValue, setCountForCartValue] = React.useState(1);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const handleCheckout = React.useCallback(() => {
    window.location.href = '/order'
  }, [])

  const onCommentAdd = React.useCallback(() => {
    dispatch(openPopup(props => 
      <AddComment 
        {...props} 
        id={product.id} 
        setComments={newComment => setComments(prev => [...prev, newComment])} 
      />
    ))
  } , [product.id, dispatch])

	const handleToggleFavorite = React.useCallback((value) => {
    setIsFavorite(value);
		if (!user.isAuth)
			if (value)
				dispatch(addToFavorites(product))
      else
        dispatch(removeFromFavorites(product.id))
    else
      if (value)
        dispatch(addToFavoritesService(product))
			else
        dispatch(removeFromFavoritesService(product.id))
	}, [dispatch, user.isAuth, product])

  const handleDeacreaseCountForCart = React.useCallback(() => {
    if (countForCartValue === 1) 
      if (user.isAuth)
        dispatch(removeFromCartService(product.id));
      else
        dispatch(removeFromCart(product.id));
    else
      if (user.isAuth)
        dispatch(changeProductCountService(product.id, countForCartValue-1));
      else
        dispatch(changeProductCount(product.id, countForCartValue-1));
  }, [user.isAuth, dispatch, countForCartValue, product.id]);

  const handleIncreaseCountForCart = React.useCallback(() => {
    if (user.isAuth)
      dispatch(changeProductCountService(product.id, countForCartValue+1));
    else
		  dispatch(changeProductCount(product.id, countForCartValue+1));
  }, [user.isAuth, dispatch, product.id, countForCartValue]);

  const handleSetCountForCart = React.useCallback((value) => {
		if (!value || value === '') 
			return setCountForCartValue(value);
    if (user.isAuth)
      dispatch(changeProductCountService(product.id, Number(value)));
    else
		  dispatch(changeProductCount(product.id, Number(value)));
  }, [user.isAuth, dispatch, product.id]);

  const handleAddToCart = React.useCallback(() => {
		if (user.isAuth)
      dispatch(addToCartService(product));
    else
      dispatch(addToCart(product));
	}, [user.isAuth, dispatch, product]);

  React.useEffect(() => {
    setCountForCartValue(
      cart.find((item) => item.productId === product.id)?.count || 0
    );
  }, [product.id, cart]);

  React.useEffect(() => {
    if (!product) return;
    if (user.isAuth) setIsFavorite(favorites.find(item => item.productId === product.id || item.id === product.id));
  }, [product, user.isAuth, favorites]);

  React.useEffect(() => {
    if (!leftRef || !leftRef.current) return
    setWidth(leftRef.current.offsetWidth) 
  }, []);

  return (
    <LayoutController categories={categories}>
      <Head>
        <title>{product.name}</title>
      </Head>
      <div className={styles.root}>
        <div className={styles.left} ref={leftRef}>
          <div className={styles.title}>{product.name}</div>
          <Stars rating={product.rating} />
          <div className={styles.subTitle}>
            <div className={styles.commentCount}>
              {product.comment.length} отзывов
            </div>
            <div className={styles.commentCount}>
              Артикуль {product.vendorCode}
            </div>
          </div>
          <ProductImages 
            width={width} 
            product={product} 
          />
          <div className={styles.info}>
            <Characteristics characteristics={product.characteristics} />
            <Comments comments={comments} onAdd={onCommentAdd} />
          </div>
        </div>

        <div className={styles.rightWrap}>
          <div className={styles.right}>
            <div className={styles.price}>
              {product.price} с.
              {product.discount !== 0 && 
                <div className={styles['price-discount']}>
                  {product.price - product.price * product.discount / 100} с.
                </div>
              }
            </div>
            {product.discount !== 0 && 
              <div className={styles.discount}>
                {product.discount && ('акция '+ product.discount + '%')}
              </div>
            }

            <div className={styles.description}>
              {product.description}
            </div>

            <button className={classNames(styles.favor, isFavorite && styles.active)} onClick={() => handleToggleFavorite(!isFavorite)}>
              {isFavorite && 
                <>
                  <div className={classNames(styles.favor_icon, styles.active)}>
                    <Favorite size={22} />
                  </div>
                  Убрать из избранного
                </>
              }
              {!isFavorite && 
                <>
                  <div className={styles.favor_icon}>
                    <FavoriteBorder size={22} />
                  </div>
                  Добавить в избранное
                </>
              }
            </button>

            <div className={styles.cart}>
              {countForCartValue !== 0 && (
                <div className={styles.countForCart__wrap}>
                  <div className={styles.countForCart__title}>В корзине</div>
                  <div className={styles.countForCart}>
                    <button
                      className={classNames(
                        styles.countForCart_button,
                        styles.countForCart_buttonDecrease
                      )}
                      onClick={handleDeacreaseCountForCart}
                    >
                      -
                    </button>

                    <input
                      value={countForCartValue}
                      onChange={(e) => handleSetCountForCart(e.target.value)}
                      className={styles.countForCart_value}
                      onBlur={(e) => handleSetCountForCart(e.target.value || 1)}
                    />

                    <button
                      className={classNames(
                        styles.countForCart_button,
                        styles.countForCart_buttonIncrease
                      )}
                      onClick={handleIncreaseCountForCart}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.result}>
                    Итого: {countForCartValue * product.price} с.
                  </div>
                  <button 
                    className={classNames(styles.addToCartButton, styles.active)}
                    onClick={handleCheckout}
                  >
                    Перейти к оплате
                  </button>
                </div>
              )}
              {!countForCartValue && countForCartValue !== "" && (
                <button
                  className={styles.addToCartButton}
                  onClick={handleAddToCart}
                >
                  <div className={styles.cart_icon}>
                    <ShoppingCart size={20} />
                  </div>
                  Добавить в корзину
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </LayoutController>
  );
};

const Stars = ({ rating }) => {
	const stars = []
	
	for(let i = 1; i <= 5; i++)
		if (i <= rating)
			stars.push({ key: i, filled: true })
		else
			stars.push({ key: i, filled: false })

	return (
		<div className={styles.stars}>
			{stars.map(star => <Star filled={star.filled} key={star.key} />)}
		</div>
	)
}

const Star = ({ filled }) => (
	<div className={classNames(styles.star, filled && styles.filled)}>
		<StarIcon size={30} />
	</div>
)

export default Product;
