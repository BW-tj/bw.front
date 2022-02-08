import * as t from '../types'

export const updateFavorites = () => async dispatch => {
	
	const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const data = await response.json()

	dispatch ({
		type: t.UPDATE_FAVORITES,
		payload: data
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
			'Content-Type': 'application/json'
		},
		credentials: 'same-origin/include',
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

export const removeFromFavoritesService = id => ({
	type: t.REMOVE_FROM_FAVORITES,
	payload: id
})