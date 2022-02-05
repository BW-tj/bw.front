import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import If from '../If/If'
import AddToCartButton from './AddToCartButton'
import CartControllButtons from './CartControllButtons'
// import InStock from './InStock'
import LabelList from './LabelList'
import Price from './Price'
import Slider from './Slider'
import Stars from './Stars'
import Title from './Title'
import styles from './index.module.scss'
import { addToFavorites, removeFromFavorites } from '../../redux/actions/favorites.actions'

const ProductCart = ({ 
	id = 1,
	data = null
}) => {

	const [product, setProduct] = useState(null)
	const [isFavorite, setIsFavorite] = useState(false)
	const [countInCart, setCountInCart] = useState(0)

	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)

	useEffect(() => {
		if (!data) return
		setIsFavorite(data.isFavorite)
		setProduct({
			name: data.name,
			isNew: data.isNew,
			promotionPercent: data.discount,
			rating: data.rating,
			price: data.price
		})
	}, [data])

	useEffect(() => {
		if (isFavorite)
			dispatch(addToFavorites(id))
		else
			dispatch(removeFromFavorites(id))
	}, [id, dispatch, isFavorite]);

	useEffect(() => {
		const itemInCart = cart.find(item => item.id === id)
		if (!itemInCart) return setCountInCart(0)
		setCountInCart(itemInCart.count)
	}, [cart, id])

	if (!product) return <></>
	return (
		<div className={styles.root}>

			<LabelList 
				isNew={product.isNew} 
				promotionPercent={product.promotionPercent} 
			/>

			<Slider images={data.images} />

			<Title 
				id={id}
				dispatch={dispatch}
				name={product.name.slice(0, 30) + (product.name.length > 30 ? '...' : '')} 
				isFavorite={isFavorite} 
				setIsFavorite={setIsFavorite}
			/>

			<Price price={product.price} />

			{/* <InStock inStock={product.count} /> */}

			<Stars rating={product.rating} />

			<If 
				condition={countInCart === 0} 
				altContent={
					<CartControllButtons 
						count={countInCart} 
						// inStock={product.count}
						dispatch={dispatch} 
						id={id} 
					/>
				}
			>
				<AddToCartButton id={id} dispatch={dispatch} />
			</If>

		</div>
	)
}

export default ProductCart
