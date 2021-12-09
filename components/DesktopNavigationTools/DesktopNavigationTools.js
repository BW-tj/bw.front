import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { 
	FavoriteBorder as FavoriteBorderIcon,
	ShoppingCart as ShoppingCartIcon,
	PersonOutline as PersonOutlineIcon,
	SaveAlt as SaveAltIcon
} from "../../icons"
import { openPopup } from '../../redux/actions/popup.actions'
import Authorization from '../../popups/Authorization/Authorization.popup'
import If from "../If/If"
import styles from "./DesktopNavigationTools.module.scss"

const DesktopNavigationTools = ({ user }) => {

	const [favoriteNotification, setFavoriteNotification] = useState(0)
	const [cartNotification, setCartNotification] = useState(0)

	const dispatch = useDispatch()

	useEffect(() => {
		setFavoriteNotification(24)
		setCartNotification(4)
	}, [])

	return (
		<div className={styles.root}>
			
			<LinkComponent
				link='/'
				icon={FavoriteBorderIcon}
				notification={favoriteNotification}
			/>
			
			<LinkComponent
				link='/'
				icon={ShoppingCartIcon}
				notification={cartNotification}
			/>
			
			<ButtonComponent
				icon={!user ? SaveAltIcon : PersonOutlineIcon}
				onClick={() => dispatch(openPopup(props => <Authorization {...props} />))}
			/>

		</div>
	)
}

const ButtonComponent = ({ icon, onClick }) => {
	const Icon = icon
	return (
		<button className={styles.button} onClick={onClick}>
			<span className={styles.icon}>
				<Icon size={36} />
			</span>
		</button>
	)
}

const LinkComponent = ({ link, icon, notification=0 }) => {
	const Icon = icon
	return (
		<Link href={link}>
			<a className={styles.button}>
				<span className={styles.icon}>
					<Icon size={36} />
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

export default DesktopNavigationTools
