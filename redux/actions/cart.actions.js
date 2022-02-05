import * as t from '../types'

export const updateCart = () => async dispatch => {
	
	const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/basket', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const data = await response.json()
		 
	dispatch({
		type: t.UPDATE_CART,
		payload: data
	})
}

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
