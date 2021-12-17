import React from 'react'
import { decreaseProductCount, increaseProductCount } from '../../redux/actions/cart.actions'
import styles from './CartControllButtons.module.scss'

const CartControllButtons = ({ id, count, dispatch }) => (
	<div className={styles.root}>

		<button 
			className={styles.cart_controll_button} 
			onClick={() => dispatch(decreaseProductCount(id))}
		>
			-
		</button>

		<div className={styles.count_in_cart}>
			{count}
		</div>

		<button 
			className={styles.cart_controll_button} 
			onClick={() => dispatch(increaseProductCount(id))}
		>
			+
		</button>

	</div>
)

export default CartControllButtons
