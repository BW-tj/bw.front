import { createWrapper } from 'next-redux-wrapper'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root.reducer'
 
const middleware = [thunk]

const localStorageItemName = 'bw-states'

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
  template: store.getState().template
}))

const makeStore = () => store

export const wrapper = createWrapper(makeStore)