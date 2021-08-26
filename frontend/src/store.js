import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import mobReducer from './reducers/mobReducer'
import itemReducer from './reducers/itemReducer'
import searchReducer from './reducers/searchReducer'

const reducer = combineReducers({
  mobs: mobReducer,
  items: itemReducer,
  search: searchReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store