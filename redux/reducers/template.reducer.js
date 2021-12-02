import * as t from "../types"

const initialState = ""

const templateReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.SET_TEMPLATE:
			return action.payload
		default:
			return state
	}
}	

export default templateReducer