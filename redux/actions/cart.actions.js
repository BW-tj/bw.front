import * as t from '../types'

export const addToCart = product => ({
	type: t.ADD_TO_CART,
	payload: product
})

export const removeFromCart = id => ({
	type: t.REMOVE_FROM_CART,
	payload: id
})

export const increaseProductCount = id => ({
	type: t.INCREASE_PRODUCT_COUNT,
	payload: id
})

export const decreaseProductCount = id => ({
	type: t.DECREASE_PRODUCT_COUNT,
	payload: id
})

export const changeProductCount = (id, count) => ({
	type: t.CHANGE_PRODUCT_COUNT,
	payload: { id, count }
})
