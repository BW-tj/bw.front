import * as t from '../types'

const initialState = []

const cartReducer = (state = initialState, action) => {
	switch (action.type) {

		case t.ADD_TO_CART:
			return [...state, action.payload]

		case t.UPDATE_CART:
			return [...action.payload]

		case t.REMOVE_FROM_CART:
			return state.filter(product => product.id !== action.payload)

		case t.INCREASE_PRODUCT_COUNT:
			return state.map(product => {
				if (product.id === action.payload)
					return {
						...product,
						count: product.count+1
					}
				return product
			})

		case t.DECREASE_PRODUCT_COUNT:
			return state.map(product => {
				if (product.id === action.payload)
					return {
						...product,
						count: product.count-1
					}
				return product
			}).filter(product => product.count > 0)

		case t.CHANGE_PRODUCT_COUNT:
			return state.map(product => {
				if (product.id === action.payload.id && action.payload.count !== 0)
					return {
						...product,
						count: action.payload.count
					}
				return product
			})
			
		default:
			return state
	}
}	

export default cartReducer