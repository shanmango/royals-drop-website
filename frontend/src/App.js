import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

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
    <div>
      <h1>MapleRoyals Drop Tracker</h1>
      <Search />
      <Info />
    </div>

  )
}

export default App
