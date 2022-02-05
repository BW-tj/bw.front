import React from 'react'
import { decreaseProductCount, increaseProductCount } from '../../redux/actions/cart.actions'
import If from '../If/If'
import styles from './CartControllButtons.module.scss'
import { updateCart } from './../../redux/actions/cart.actions';

const CartControllButtons = ({ 
	id, 
	count, 
	dispatch, 
	// inStock 
}) => {
	const handleIncreaseProductCart = React.useCallback(async () => {
		await fetch(process.env.NEXT_PUBLIC_HOST + '/basket', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				productId: id,
				count: count + 1
			})
		})
		dispatch(updateCart())
	}, [count, dispatch, id])

	const handleDecreaseProductCart = React.useCallback(async () => {
		if (count === 1) {
			await fetch(process.env.NEXT_PUBLIC_HOST + '/basket', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					productId: id
				})
			})
		}
		else 
			await fetch(process.env.NEXT_PUBLIC_HOST + '/basket', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					productId: id,
					count: count - 1
				})
			})
		dispatch(updateCart())
	}, [count, dispatch, id])

	return (
		<div className={styles.root}>

			<button 
				className={styles.cart_controll_button} 
				onClick={handleDecreaseProductCart}
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
				onClick={handleIncreaseProductCart}
			>
				+
			</button>
			{/* </If> */}

		</div>
	)
}

export default CartControllButtons
