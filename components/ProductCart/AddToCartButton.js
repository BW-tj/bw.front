import React from 'react'
import { updateCart } from '../../redux/actions/cart.actions'
import styles from './AddToCartButton.module.scss'

const AddToCartButton = ({ id, dispatch }) => {
	
	const handleAddTocart = React.useCallback(async () => {
		await fetch(process.env.NEXT_PUBLIC_HOST + '/basket', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				productId: id,
				count: 1
			})
		})
		dispatch(updateCart())
	}, [id, dispatch])

	return (
		<button 
			className={styles.root} 
			onClick={handleAddTocart}
		>
			В корзину
		</button>
	)
}

export default AddToCartButton
