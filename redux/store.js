import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
 
const middleware = [thunk]

const localStorageItemName = process.env.NEXT_PUBLIC_LS_KEY

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(localStorageItemName, serializedState)
  } catch (e) {
    console.log(e) 
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem(localStorageItemName)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const presistedState = loadFromLocalStorage()

const store = createStore(
	rootReducer,
	presistedState, 
	compose(applyMiddleware(...middleware))
)

store.subscribe(() => saveToLocalStorage({
  user: store.getState().user,
  cart: store.getState().cart,
  favorites: store.getState().favorites
}))

const makeStore = () => store

export const wrapper = createWrapper(makeStore)