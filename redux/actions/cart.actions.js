import * as t from '../types'

export const pushCart = cart => async () => {

	const url = process.env.NEXT_PUBLIC_HOST + '/basket/addrange';

	await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		},
		body: JSON.stringify(cart)
	})
}

export const pullCart = () => async dispatch => {

	const url = process.env.NEXT_PUBLIC_HOST + '/basket';

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		}
	})

	const newCart = await response.json()

	dispatch({
		type: t.UPDATE_CART,
		payload: newCart
	})
}

export const addToCart = product => ({
	type: t.ADD_TO_CART,
	payload: {...product, productId: product.id, count: 1}
})

export const addToCartService = product => async dispatch => {
	
	const url = process.env.NEXT_PUBLIC_HOST + '/basket';

	await fetch(url, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		},
		body: JSON.stringify({ productId: product.id, count: 1 })
	})

	dispatch({
		type: t.ADD_TO_CART,
		payload: {...product, productId: product.id, count: 1}
	})
}

export const removeFromCart = id => ({
	type: t.REMOVE_FROM_CART,
	payload: id
})

export const removeFromCartService = id => async dispatch => {
	
	const url = process.env.NEXT_PUBLIC_HOST + '/basket/' + id;

	dispatch ({
		type: t.REMOVE_FROM_CART,
		payload: id
	})

	await fetch(url, {
		method: "DELETE",
		headers: {
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		}
	})
}

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

export const changeProductCountService = (id, count) => async dispatch => {
	
	const url = process.env.NEXT_PUBLIC_HOST + '/basket';

	dispatch({
		type: t.CHANGE_PRODUCT_COUNT,
		payload: { id, count }
	})

	await fetch(url, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		},
		body: JSON.stringify({productId: id, count})
	})
}