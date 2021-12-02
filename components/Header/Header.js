import React from 'react'
import styles from './Header.module.scss'
import Logo from '../Logo/Logo'

const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Logo />
				<div className={styles.description}>
					Стирайте вещи с удовольствием
				</div>
			</div>
		</div>
	)
}

export default Header
