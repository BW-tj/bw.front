import * as t from '../types'

const initialState = {
	content: () => {},
	open: false
}

const popupReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.OPEN_POPUP:
			return { open: true, content: action.payload } 
		case t.CLOSE_POPUP:
			return { open: false, content: () => {} } 
		default:
			return state
	}
}	

export default popupReducer