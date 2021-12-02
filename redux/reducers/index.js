import { combineReducers } from 'redux'
import templateReducer from './template.reducer'

const rootReducer = combineReducers({
	template: templateReducer,
})

export default rootReducer