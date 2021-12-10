import * as t from '../types'

const initialState = ''

const cartReducer = (state = initialState, action) => {
	switch (action.type) {

		case t.ADD_TO_CART:
			return {
				...state, ...action.payload
			}

		case t.REMOVE_FROM_CART:
			return state.filter(product => product.id !== action.payload)

		case t.INCREASE_PRODUCT:
			return state.map(product => {
				if (product.id === action.payload)
					return {
						...product,
						count: product.count+1
					}
				return product
			})

		case t.DECREASE_PRODUCT:
			return state.map(product => {
				if (product.id === action.payload)
					return {
						...product,
						count: product.count-1
					}
				return product
			})
			
		default:
			return state
	}
}	

export default cartReducer