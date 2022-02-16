import * as t from '../types'
import { logout } from './user.actions'

export const updateFavorites = initialFavorites => async dispatch => {
	if (initialFavorites && initialFavorites.length) {
		const response1 = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite/addrange', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
			},
			body: JSON.stringify({
				productIds: initialFavorites.map(item => item.id)
			})
		})
		if (response1.status === 401 || response1.status === 403) {
			localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
			window.location.href = '/'
			dispatch(logout())
		}
	}
	
	const response2 = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		}
	})

	const data = await response2.json()

	dispatch ({
		type: t.UPDATE_FAVORITES,
		payload: data.map(item => ({
			id: item.id,
			isNew: false,
			discount: item.discount,
			rating: item.rating,
			price: item.price,
			images: [item.imagePath],
			name: item.productName,
			isFavorite: true
		}))
	})
}

export const addToFavorites = productCardData => async dispatch => {
	dispatch({
		type: t.ADD_TO_FAVORITES,
		payload: productCardData
	})
}

export const addToFavoritesService = productCardData => async dispatch => {
	
	const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		},
		body: JSON.stringify({
			productId: productCardData.id
		})
	})
	if (response.status === 401 || response.status === 403) {
		localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		window.location.href = '/'
		dispatch(logout())
	}

	dispatch({
		type: t.ADD_TO_FAVORITES,
		payload: productCardData
	})
}

export const removeFromFavorites = id => ({
	type: t.REMOVE_FROM_FAVORITES,
	payload: id
})

export const removeFromFavoritesService = id => async dispatch => {

	const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite/'+id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		}
	})
	if (response.status === 401 || response.status === 403) {
		localStorage.removeItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		window.location.href = '/'
		dispatch(logout())
	}

	dispatch({
		type: t.REMOVE_FROM_FAVORITES,
		payload: id
	})
}