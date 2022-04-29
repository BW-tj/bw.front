import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import Image from "next/image";
import classNames from "classnames";
import {
  changeProductCount,
  changeProductCountService,
  removeFromCartService,
  removeFromCart,
} from "../../redux/actions/cart.actions";
import { useRouter } from "next/router";

const Cart = ({ onClose }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleIncrease = React.useCallback(
    (id, currentCount) => {
      if (user.isAuth)
        dispatch(changeProductCountService(id, currentCount + 1));
      else dispatch(changeProductCount(id, currentCount + 1));
    },
    [dispatch, user]
  );

  const handleDecrease = React.useCallback(
    (id, currentCount) => {
      if (currentCount === 1)
        if (user.isAuth) dispatch(removeFromCartService(id));
        else dispatch(removeFromCart(id));
      else if (user.isAuth)
        dispatch(changeProductCountService(id, currentCount - 1));
      else dispatch(changeProductCount(id, currentCount - 1));
    },
    [dispatch, user]
  );

  const handleRemove = React.useCallback(
    (id) => {
      if (user.isAuth) dispatch(removeFromCartService(id));
      else dispatch(removeFromCart(id));
    },
    [dispatch, user]
  );

  const handleCheckout = React.useCallback(() => {
    router.push("/order");
    onClose();
  }, [router, onClose]);

  React.useEffect(() => {
    const handleWindowClick = (e) => {
      if (!e.target.closest("." + styles.wrap)) onClose();
    };
    window.addEventListener("mousedown", handleWindowClick);
    return () => window.removeEventListener("mousedown", handleWindowClick);
  }, [onClose]);

  React.useEffect(() => {
    if (cart.length === 0) onClose();
  }, [cart, onClose]);

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.clearButtonWrap}>
          <div className={styles.title}>Корзина</div>
          {/* <button className={styles.clearButton}>
						Очистить корзирну
					</button> */}
        </div>
        <div className={styles.list}>
          {cart.map((item) => (
            <div className={styles.item} key={item.productId}>
              <div className={styles.item_image}>
                <Image
                  // src={"https://static.vecteezy.com/system/resources/thumbnails/002/487/856/small/banana-fruit-free-vector.jpg"}
                  src={
                    process.env.NEXT_PUBLIC_HOST_WITHOUT_API +
                    (item.images?.[0]?.imagePath ||
                      item.images?.[0] ||
                      item.imagePath)
                  }
                  alt={item.name || item.productName}
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.item_name}>
                {item.name || item.productName}
              </div>
              <div className={styles.item_countController}>
                <div className={styles.item_countController_wrap}>
                  <button
                    className={classNames(
                      styles.item_countButton,
                      styles.item_increase
                    )}
                    onClick={() =>
                      handleIncrease(item.id || item.productId, item.count)
                    }
                  >
                    +
                  </button>
                  <div className={styles.item_count}>{item.count}</div>
                  <button
                    className={classNames(
                      styles.item_countButton,
                      styles.item_increase
                    )}
                    onClick={() =>
                      handleDecrease(item.id || item.productId, item.count)
                    }
                  >
                    -
                  </button>
                </div>
                <div className={styles.item_price}>
                  x {item.price.toFixed(1)} с.
                </div>
              </div>
              <div className={styles.item_end}>
                <div className={styles.item_commonPrice}>
                  {(item.price * item.count).toFixed(1)} с.
                </div>
                <button
                  className={styles.item_removeButton}
                  onClick={() => handleRemove(item.id || item.productId)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalInfo_wrap}>
          <span></span>
          <div className={styles.totalInfo}>
            <div className={styles.totalInfo_up}>
              <div className={styles.totalInfo_price}>
                {cart
                  .reduce((acc, item) => acc + item.count * item.price, 0)
                  .toFixed(1)}
                с.
              </div>
              <div className={styles.totalInfo_count}>
                Всего товаров: {cart.reduce((acc, item) => acc + item.count, 0)}{" "}
                шт.
              </div>
            </div>
            <button className={styles.checkoutButton} onClick={handleCheckout}>
              Перейти к оплате
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
