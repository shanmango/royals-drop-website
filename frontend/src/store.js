import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import typeSelectorReducer from './reducers/typeSelectorReducer'

/*
const reducer = combineReducers({
  typeSelector: typeSelectorReducer
})
*/
const reducer = typeSelectorReducer

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store