import * as t from '../types'

const initialState = {
	isAuth: false
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.LOGIN: 
			return {
				...action.payload,
				isAuth: true
			}
		case t.LOGOUT: 
			return {
				isAuth: false
			}
		default:
			return state
	}
}	

export default userReducer