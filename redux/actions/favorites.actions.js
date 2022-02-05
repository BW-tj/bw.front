import * as t from '../types'

export const updateFavorites = () => async dispatch => {
	
	const response = await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'GET',
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

export const addToFavorites = id => async dispatch => {
	
	await fetch(process.env.NEXT_PUBLIC_HOST + '/favorite', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			productId: id
		})
	})

	dispatch({
		type: t.ADD_TO_FAVORITES,
		payload: id
	})
}

export const removeFromFavorites = id => ({
	type: t.REMOVE_FROM_FAVORITES,
	payload: id
})
