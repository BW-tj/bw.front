import Head from 'next/head';
import Image from 'next/image';
import LayoutController from '../layouts/LayoutController';
import React from 'react';
import styles from '../styles/Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { changeProductCount, changeProductCountService, removeFromCart, removeFromCartService } from '../redux/actions/cart.actions';

export const getStaticProps = async () => {

  const categories =  
    await fetch(process.env.NEXT_PUBLIC_HOST+'/categories')
      .then(res => res.json())

  return {
    props: {
      categories,
    }
  }
}

const Cart = ({ categories }) => {

	const user = useSelector(state => state.user)
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()

	const router = useRouter()

	const handleIncrease = React.useCallback((id, currentCount) => {
    if (user.isAuth)
      dispatch(changeProductCountService(id, currentCount+1));
    else
		  dispatch(changeProductCount(id, currentCount+1));
	}, [dispatch, user])

	const handleDecrease = React.useCallback((id, currentCount) => {
    if (currentCount === 1) 
			if (user.isAuth)
				dispatch(removeFromCartService(id));
			else
				dispatch(removeFromCart(id));
		else
			if (user.isAuth)
				dispatch(changeProductCountService(id, currentCount-1));
			else
				dispatch(changeProductCount(id, currentCount-1));
	}, [dispatch, user])

	const handleRemove = React.useCallback((id) => {
		if (user.isAuth)
			dispatch(removeFromCartService(id));
		else
			dispatch(removeFromCart(id));
	}, [dispatch, user])

	const handleCheckout = React.useCallback(() => {
		router.push('/order');
	}, [router])

	return (
    <LayoutController categories={categories}>
      <Head>
        <title>Корзина</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
			<div className={styles.root}>
				<div className={styles.clearButtonWrap}>
					<div className={styles.title}>
						Корзина
					</div>
				</div>
				<div className={styles.list}>
					{cart.map(item => 
						<div className={styles.item} key={item.productId}>
							<div className={styles.item_image}>
								<Image 
									src={process.env.NEXT_PUBLIC_HOST_WITHOUT_API + (item.images?.[0]?.imagePath || item.images?.[0] || item.imagePath)} 
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
										className={classNames(styles.item_countButton, styles.item_increase)}
										onClick={() => handleIncrease(item.id || item.productId, item.count)}
									>
										+
									</button>
									<div className={styles.item_count}>
										{item.count}
									</div>
									<button 
										className={classNames(styles.item_countButton, styles.item_increase)}
										onClick={() => handleDecrease(item.id || item.productId, item.count)}
									>
										-
									</button>
								</div>
								<div className={styles.item_price}>
									x {item.price} с.
								</div>
							</div>
							<div className={styles.item_end}>
								<div className={styles.item_commonPrice}>
									{item.price*item.count} с.
								</div>
								<button className={styles.item_removeButton} onClick={() => handleRemove(item.id || item.productId)}>
									Удалить
								</button>
							</div>
						</div>
					)}
				</div>
				{cart.length !== 0 &&
					<div className={styles.totalInfo_wrap}>
						<div className={styles.totalInfo}>
							<div className={styles.totalInfo_up}>
								<div className={styles.totalInfo_price}>
									{cart.reduce((acc, item) => acc + item.count*item.price, 0)} с.
								</div>
								<div className={styles.totalInfo_count}>
									Всего товаров: {cart.reduce((acc, item) => acc + item.count, 0)} шт.
								</div>
							</div>
							<button className={styles.checkoutButton} onClick={handleCheckout}>
								Перейти к оплате
							</button>
						</div>
					</div>
				}
				{cart.length === 0 &&
					<div className={styles.noContent}>
						Корзина пуста
					</div>
				}
			</div>
		</LayoutController>
	);
}

export default Cart;
