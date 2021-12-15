import * as t from '../types'

const initialState = []

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.ADD_TO_FAVORITES:
			return [...state, action.payload]
		case t.REMOVE_FROM_FAVORITES:
			return state.filter(id => id !== action.payload)
		default:
			return state
	}
}	

export default favoritesReducer