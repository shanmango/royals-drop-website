import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './App';

import typeSelectorReducer from './reducers/typeSelectorReducer'

const store = createStore(
  typeSelectorReducer,
  composeWithDevTools()
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
