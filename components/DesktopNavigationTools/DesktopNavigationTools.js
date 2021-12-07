import React, { useEffect, useState } from "react"
import If from "../If/If"
import styles from "./DesktopNavigationTools.module.scss"
import Link from 'next/link'
import { 
	FavoriteBorder as FavoriteBorderIcon,
	ShoppingCart as ShoppingCartIcon,
	PersonOutline as PersonOutlineIcon,
	SaveAlt as SaveAltIcon
} from "../../icons"

const DesktopNavigationTools = ({ user }) => {

	const [favoriteNotification, setFavoriteNotification] = useState(0)
	const [cartNotification, setCartNotification] = useState(0)

	useEffect(() => {
		setFavoriteNotification(24)
		setCartNotification(4)
	}, [])

	return (
		<div className={styles.root}>
			
			<ButtonComponent
				link='/'
				icon={FavoriteBorderIcon}
				notification={favoriteNotification}
			/>
			
			<ButtonComponent
				link='/'
				icon={ShoppingCartIcon}
				notification={cartNotification}
			/>
			
			<ButtonComponent
				link={!user ? '/login' : '/'}
				icon={!user ? SaveAltIcon : PersonOutlineIcon}
			/>

		</div>
	)
}

const ButtonComponent = ({ 
	link,
	icon,
	notification=0,
	isSmall={isSmall}
}) => {
	const Icon = icon
	return (
		<Link href={link}>
			<a className={styles.button}>
				<span className={styles.icon}>
					<Icon size={isSmall ? 30 : 36} />
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
