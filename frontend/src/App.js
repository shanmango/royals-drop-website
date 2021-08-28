import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Search from './components/Search'
import Info from './components/Info'

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
    <div className="container">
      <Header />
      <hr></hr>
      <Search />
      <Info />
    </div>

  )
}

export default App
