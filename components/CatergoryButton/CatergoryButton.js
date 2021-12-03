import classNames from 'classnames'
import React from 'react'
import { Menu as MenuIcon } from '../../icons'
import styles from './CatergoryButton.module.scss'

const CatergoryButton = ({ onMouseOver, onMouseLeave, isSmall={isSticky} }) => (
	<button className={classNames(styles.root, isSmall && styles.small)} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
		<span className={styles.icon}>
			<MenuIcon size={isSmall ? 30 : 36} />
		</span>
		Категории
	</button>
)

export default CatergoryButton
