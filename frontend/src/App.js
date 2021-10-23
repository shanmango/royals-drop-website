import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './styles/App.scss'
import { HashRouter as Router } from "react-router-dom"

import AppContainer from './components/AppContainer'

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
          <AppContainer />
      </div>
    </Router>
  )
}

export default App
