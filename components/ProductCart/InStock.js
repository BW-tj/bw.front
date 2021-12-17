import React from 'react'
import styles from './InStock.module.scss'

const InStock = ({ inStock }) => (
	<div className={styles.root}>
		{inStock} в наличии
	</div>
)

export default InStock
