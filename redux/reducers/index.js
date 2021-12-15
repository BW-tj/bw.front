import { combineReducers } from 'redux'
import templateReducer from './template.reducer'
import userReducer from './user.reducer'
import popupReducer from './popup.reducer'
import cartReducer from './cart.reducer'
import categoriesReducer from './categories.reducer'
import favoritesReducer from './favorites.reducer'

const rootReducer = combineReducers({
	template: templateReducer,
	user: userReducer,
	popup: popupReducer,
	cart: cartReducer,
	categories: categoriesReducer,
	favorites: favoritesReducer
})

export default rootReducer