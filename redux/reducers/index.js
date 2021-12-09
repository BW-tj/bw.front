import { combineReducers } from 'redux'
import templateReducer from './template.reducer'
import userReducer from './user.reducer'
import popupReducer from './popup.reducer'

const rootReducer = combineReducers({
	template: templateReducer,
	user: userReducer,
	popup: popupReducer
})

export default rootReducer