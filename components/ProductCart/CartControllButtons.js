import React from 'react'
import { decreaseProductCount, increaseProductCount } from '../../redux/actions/cart.actions'
import If from '../If/If'
import styles from './CartControllButtons.module.scss'

const CartControllButtons = ({ 
	id, 
	count, 
	dispatch, 
	// inStock 
}) => (
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

		{/* <If 
			condition={count < inStock}
			altContent={<span className={styles.emptyBox} />}
		> */}
		<button 
			className={styles.cart_controll_button} 
			onClick={() => dispatch(increaseProductCount(id))}
		>
			+
		</button>
		{/* </If> */}

	</div>
)

export default CartControllButtons
