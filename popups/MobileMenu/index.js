import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { FavoriteBorder, Grade, LocalHospital, LocalOffer, LogOut, Menu, PersonOutline, SaveAlt, ShoppingCart } from '../../icons';
import { openPopup } from '../../redux/actions/popup.actions';
import { logout } from '../../redux/actions/user.actions';
import Authorization from '../Authorization/Authorization.popup';
import styles from './index.module.scss' 
import MobileCategoryList from './../MobileCategoryList/index';
import Cart from '../Cart';
import { useRouter } from 'next/router';

const MobileMenu = ({ onClose, categories }) => {

	const user = useSelector(state => state.user)
	const cart = useSelector(state => state.cart)
	const dispatch = useDispatch()
	const router = useRouter()
	const [close, setClose] = React.useState(false);
	
	const handleLogin = React.useCallback(() => {
		dispatch(openPopup(props => <Authorization {...props} />))
	}, [dispatch])

	const handleLogOut = React.useCallback(async () => {
		localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		await dispatch(logout())
		await router.push('/')
		onClose()
	}, [dispatch, router, onClose])

	const handleCart = React.useCallback(() => {
		dispatch(openPopup(props => <Cart {...props} />))
	}, [dispatch])

	const handleCategories = React.useCallback(() => {
		dispatch(openPopup(props => <MobileCategoryList categories={categories} {...props} />))
	}, [dispatch, categories])

	React.useEffect(() => {
		const handleWindowClick = e => {
			if (!e.target.closest('.' + styles.wrap)) {
				setClose(true);
				setTimeout(() => {
					onClose()
				}, 200)
			}
		}
		window.addEventListener('mousedown', handleWindowClick)
		return () => window.removeEventListener('mousedown', handleWindowClick)
	}, [onClose])
	
	const handleClose = React.useCallback(() => {
		setClose(true);
		setTimeout(() => {
			onClose()
		}, 200)
	}, [onClose])

	return (
		<div className={styles.root}>
			
			<div className={classNames(styles.wrap, close && styles.close)}>
				
				<div className={styles.cartGroup}>
					<div className={styles.cartGroup__title}>
						Пользователь
					</div>
					{!user.isAuth ?
						<button onClick={handleLogin} className={styles.button_cart}>
							<div className={styles.button_cart__icon}>
								<SaveAlt />
							</div>
							Вход
						</button> :
						<Link href="/cabinet">
							<a className={styles.button_cart} onClick={handleClose}>
								<div className={styles.button_cart__icon}>
									<PersonOutline />
								</div>
								Профиль
							</a>
						</Link>
					}
					<button 
						disabled={cart.length === 0}
						onClick={handleCart} 
						className={classNames(cart.length === 0 && styles.disabled, styles.button_cart, styles.button_cart_cart)}
					>
						<div className={styles.button_cart__icon}>
							<ShoppingCart />
						</div>
						Корзина
					</button>
					<Link href="/favorites">
						<a onClick={() => onClose()} className={classNames(styles.button_cart, styles.button_cart_favorite)}>
							<div className={styles.button_cart__icon}>
								<FavoriteBorder />
							</div>
							Избранные
						</a>
					</Link>
				</div>

				<div className={styles.cartGroup}>
					<div className={styles.cartGroup__title}>
						Магазин
					</div>
					<button className={classNames(styles.button_cart, styles.button_cart_cart)} onClick={handleCategories}>
						<div className={styles.button_cart__icon}>
							<Menu />
						</div>
						Категории
					</button>
					<Link href="/new">
						<a className={classNames(styles.button_cart, styles.button_cart_cart)} onClick={handleClose}>
						<div className={styles.button_cart__icon}>
							<LocalHospital />
						</div>
							Новые товары
						</a>
					</Link>
					<Link href="/bestsellers">
						<a className={classNames(styles.button_cart, styles.button_cart_cart)} onClick={handleClose}>
						<div className={styles.button_cart__icon}>
							<Grade />
						</div>
							Хит продаж
						</a>
					</Link>
					<Link href="/discounts">
						<a className={classNames(styles.button_cart, styles.button_cart_cart)} onClick={handleClose}>
						<div className={styles.button_cart__icon}>
							<LocalOffer />
						</div>
							Скидки
						</a>
					</Link>
				</div>

				<div className={styles.cartGroup}>
					{user.isAuth &&
						<>
							<div className={styles.cartGroup__title}>
								Выход
							</div>
							<button className={classNames(styles.button_cart, styles.button_cart_favorite)} onClick={handleLogOut}>
								<div className={styles.button_cart__icon}>
									<LogOut />
								</div>
								Выйти из аккаунта
							</button>
						</>
					}
				</div>

			</div>

		</div>
	);
}

export default MobileMenu;
