import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './styles/App.scss'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import Header from './components/Header'
import Search from './components/Search'
import InfoDisplay from './components/InfoDisplay'
import Footer from './components/Footer'

import { initializeMobs } from './reducers/mobReducer'
import { initializeItems } from './reducers/itemReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeMobs())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeItems())
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Search />
          <Route path='/search/:category/:id' component={InfoDisplay} />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
