import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './styles/App.scss'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import Header from './components/Header'
import Search from './components/Search'
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
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>

      <div className="App">
        <div className="container">
          <Route path="/search">
            <Header />
            <Search />
            <Footer />
          </ Route>
        </div>
      </div>
    </Router>
  )
}

export default App
