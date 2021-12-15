import * as t from '../types'

export const addToFavorites = id => ({
	type: t.ADD_TO_FAVORITES,
	payload: id
})

export const removeFromFavorites = id => ({
	type: t.REMOVE_FROM_FAVORITES,
	payload: id
})
