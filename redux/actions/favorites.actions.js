import * as t from '../types'

export const updateFavorites = initialFavorites => async dispatch => {
	if (initialFavorites && initialFavorites.length)
		await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite/addrange', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
			},
			body: JSON.stringify({
				productIds: initialFavorites.map(item => item.id)
			})
		})
	
	const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		}
	})

	const data = await response.json()

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
	
	await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		},
		body: JSON.stringify({
			productId: productCardData.id
		})
	})

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

	await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite/'+id, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem(process.env.NEXT_PUBLIC_LS_TOKEN)
		}
	})

	dispatch({
		type: t.REMOVE_FROM_FAVORITES,
		payload: id
	})
}