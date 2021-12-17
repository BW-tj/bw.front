import React from 'react'
import { addToCart } from '../../redux/actions/cart.actions'
import styles from './AddToCartButton.module.scss'

const AddToCartButton = ({ id, dispatch }) => (
	<button 
		className={styles.root} 
		onClick={() => dispatch(addToCart({ id, count: 1 }))}
	>
		В корзину
	</button>
)

export default AddToCartButton
