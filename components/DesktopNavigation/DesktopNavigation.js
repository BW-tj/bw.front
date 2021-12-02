import React from 'react'
import { Menu as MenuIcon } from '../../icons'
import styles from './DesktopNavigation.module.scss'

const DesktopNavigation = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>

				<button className={styles.dropdown_button}>

					<span className={styles.menu_icon}>
						<MenuIcon />
					</span>

					Категории

				</button>

			</div>
		</div>
	)
}

export default DesktopNavigation
