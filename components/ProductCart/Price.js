import React from 'react'
import styles from './Price.module.scss'

const Price = ({ price }) => (
	<div className={styles.root}>
		{price.toFixed(2)} с.
	</div>
)

export default Price
