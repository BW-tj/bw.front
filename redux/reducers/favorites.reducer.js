import * as t from '../types'

const initialState = []

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.UPDATE_FAVORITES:
			return [...action.payload]
		case t.ADD_TO_FAVORITES:
			return [...state, action.payload]
		case t.REMOVE_FROM_FAVORITES:
			return state.filter(productsCardData => productsCardData.id !== action.payload)
		case t.LOGOUT: 
			return []
		default:
			return state
	}
}	

export default favoritesReducer