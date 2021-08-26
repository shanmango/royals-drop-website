import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import typeSelectorReducer from './reducers/typeSelectorReducer'
import mobReducer from './reducers/mobReducer'
import itemReducer from './reducers/itemReducer'
const reducer = combineReducers({
  type: typeSelectorReducer,
  mobs: mobReducer,
  items: itemReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store