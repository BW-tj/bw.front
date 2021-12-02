import React from 'react'
import { Menu as MenuIcon } from '../../icons'
import styles from './CatergoryButton.module.scss'

const CatergoryButton = ({ onClick }) => (
	<button className={styles.root} onClick={onClick}>
		<span className={styles.icon}>
			<MenuIcon />
		</span>
		Категории
	</button>
)

export default CatergoryButton
