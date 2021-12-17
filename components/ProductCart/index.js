import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import If from '../If/If'
import AddToCartButton from './AddToCartButton'
import CartControllButtons from './CartControllButtons'
import styles from './index.module.scss'
import InStock from './InStock'
import LabelList from './LabelList'
import Price from './Price'
import Slider from './Slider'
import Stars from './Stars'
import Title from './Title'

const ProductCart = ({ id=1 }) => {

	const [product, setProduct] = useState(null)
	const [isFavorite, setIsFavorite] = useState(false)
	const [countInCart, setCountInCart] = useState(0)

	const dispatch = useDispatch()

	const cart = useSelector(state => state.cart)
	const favorites = useSelector(state => state.favorites)

	useEffect(() => {
		setProduct({
			name: 'Синяя толстовка на распродажу',
			isNew: true,
			promotionPercent: 17,
			rating: 4,
			inStock: 24,
			price: 90.00
		})
	}, [id])

	useEffect(() => {
		const itemInCart = cart.find(item => item.id === id)
		if (!itemInCart) return setCountInCart(0)
		setCountInCart(itemInCart.count)
	}, [cart, id])

	useEffect(() => {
		const itemInFavorites = favorites.find(_id => _id === id)
		if (!itemInFavorites) return setIsFavorite(false)
		setIsFavorite(true)
	}, [favorites, id])

	if (!product) return <></>
	return (
		<div className={styles.root}>

			<LabelList 
				isNew={product.isNew} 
				promotionPercent={product.promotionPercent} 
			/>

			<Slider />

			<Title 
				id={id}
				dispatch={dispatch}
				name={product.name.slice(0, 30) + (product.name.length > 30 ? '...' : '')} 
				isFavorite={isFavorite} 
			/>

			<Price price={product.price} />

			<InStock inStock={product.inStock} />

			<Stars rating={product.rating} />

			<If 
				condition={countInCart === 0} 
				altContent={
					<CartControllButtons 
						count={countInCart} 
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
