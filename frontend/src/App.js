import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './styles/App.scss'

import Header from './components/Header'
import Search from './components/Search'

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
    <div className="App">
      <div className="container">
        <Header />
        <div>
          <Search />
        </div>
      </div>
    </div>

  )
}

export default App
