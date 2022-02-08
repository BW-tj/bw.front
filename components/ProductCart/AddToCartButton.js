import React from 'react'
import styles from './AddToCartButton.module.scss'

const AddToCartButton = ({ onClick }) => (
	<button 
		className={styles.root} 
		onClick={onClick}
	>
		В корзину
	</button>
)

export default AddToCartButton
