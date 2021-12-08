import { combineReducers } from 'redux'
import templateReducer from './template.reducer'
import userReducer from './user.reducer'

const rootReducer = combineReducers({
	template: templateReducer,
	user: userReducer
})

export default rootReducer