import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-210899650-1')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
