import classNames from 'classnames'
import React from 'react'
import styles from './CategoriesButton.module.scss'

const CategoriesButton = ({ active, onClick }) => (
	<button 
		className={classNames(
			styles.button, 
			active && styles.active
		)}
		onClick={onClick}
	>
		<div className={styles.burger}>
			<span className={styles.line1} />
			<span className={styles.line2} />
			<span className={styles.line3} />
		</div>
		Категории
	</button>
)

export default CategoriesButton
