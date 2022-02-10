import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { 
	FavoriteBorder as FavoriteBorderIcon,
	ShoppingCart as ShoppingCartIcon,
	PersonOutline as PersonOutlineIcon,
	SaveAlt as SaveAltIcon
} from '../../icons'
import { openPopup } from '../../redux/actions/popup.actions'
import Authorization from '../../popups/Authorization/Authorization.popup'
import If from '../If/If'
import styles from './DesktopNavigationTools.module.scss'
import classNames from 'classnames'
import { logout } from '../../redux/actions/user.actions'
import Cart from '../../popups/Cart'

const DesktopNavigationTools = () => {

	const [favoriteNotification, setFavoriteNotification] = useState(0)
	const [cartNotification, setCartNotification] = useState(0)
	
	const dispatch = useDispatch()
	
	const user = useSelector(state => state.user)
	const cart = useSelector(state => state.cart)
	const favorites = useSelector(state => state.favorites)

	const handleLogOut = useCallback(() => {
		localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		dispatch(logout())
		window.location.reload()
	}, [dispatch])

	useEffect(() => {
		setCartNotification(cart.reduce((acc, product) => acc + product.count, 0))
	}, [cart])

	useEffect(() => {
		setFavoriteNotification(favorites.length)
	}, [favorites])

	return (
		<div className={styles.root}>
			
			<LinkComponent
				link='/'
				icon={FavoriteBorderIcon}
				notification={favoriteNotification}
			/>

			<ButtonComponent
				disabled={cart.length === 0}
				icon={ShoppingCartIcon}
				notification={cartNotification}
				onClick={() => dispatch(openPopup(props => <Cart {...props} />))}
			/>
			
			{!user.isAuth &&
				<ButtonComponent
					icon={SaveAltIcon}
					onClick={() => dispatch(openPopup(props => <Authorization {...props} />))}
				/>
			}
			
			{user.isAuth && 
				<Dropdown id="profile" label={
					<ButtonComponent icon={PersonOutlineIcon} onClick={() => {}} />
				}>
					<button className={classNames(styles.link, styles.warning)} onClick={handleLogOut}>
						Выйти из аккаунта
					</button>
				</Dropdown>
			}

		</div>
	)
}

const ButtonComponent = ({ icon, onClick, notification=0, disabled=false }) => {
	const Icon = icon
	return (
		<button className={classNames(styles.button, disabled && styles.disabled)} onClick={onClick} disabled={disabled}>
			<span className={styles.icon}>
				<Icon size={30} />
			</span>
			<If condition={notification !== 0}>
				<span className={styles.notification}>
					{notification}
				</span>
			</If>
		</button>
	)
}

const LinkComponent = ({ link, icon, notification=0 }) => {
	const Icon = icon
	return (
		<Link href={link}>
			<a className={styles.button} draggable={false}>
				<span className={styles.icon}>
					<Icon size={30} />
				</span>
				<If condition={notification !== 0}>
					<span className={styles.notification}>
						{notification}
					</span>
				</If>
			</a>
		</Link>
	)
}

const Dropdown = ({ id, children, label }) => {

	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handleWindowClick = e => {
			if (!e.target.closest('#nav-dropdown-'+id))
				setOpen(false)
		}

		window.addEventListener('click', handleWindowClick)
		return () => window.removeEventListener('click', handleWindowClick)
	}, [id])

	return (
		<div id={'nav-dropdown-'+id} className={styles.dropdown}>
			<div className={styles.dropdown_label} onClick={() => setOpen(!open)}>
				{label}
			</div>
			{open && 
				<div className={styles.dropdown_content}>
					{children}
				</div>
			}
		</div>
	)
}

export default DesktopNavigationTools
