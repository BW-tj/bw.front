import React from 'react'
import { decreaseProductCount, increaseProductCount } from '../../redux/actions/cart.actions'
import If from '../If/If'
import styles from './CartControllButtons.module.scss'
import { updateCart } from './../../redux/actions/cart.actions';

const CartControllButtons = ({ 
	count, 
	onIncrease,
	onDecrease 
}) => {
	return (
		<div className={styles.root}>

			<button 
				className={styles.cart_controll_button} 
				onClick={onDecrease}
			>
				-
			</button>

			<div className={styles.count_in_cart}>
				{count}
			</div>

			<button 
				className={styles.cart_controll_button} 
				onClick={onIncrease}
			>
				+
			</button>

		</div>
	)
}

export default CartControllButtons
