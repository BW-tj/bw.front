import React from 'react'
import styles from './InStock.module.scss'

const InStock = ({ inStock }) => (
	<div className={styles.root}>
		В наличии: {inStock} шт.
	</div>
)

export default InStock
