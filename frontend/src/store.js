import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import categoryReducer from './reducers/categoryReducer'
import mobReducer from './reducers/mobReducer'
import itemReducer from './reducers/itemReducer'
import selectedReducer from './reducers/selectedReducer'

const reducer = combineReducers({
  category: categoryReducer,
  mobs: mobReducer,
  items: itemReducer,
  selected: selectedReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store