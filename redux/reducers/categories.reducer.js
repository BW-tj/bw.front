import * as t from '../types'

const initialState = []

const categoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.SET_CATEGORIES:
			return action.payload
		default:
			return state
	}
}	

export default categoriesReducer