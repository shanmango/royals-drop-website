import React, { useEffect } from 'react'
import Mob from './components/Mob'
import { useDispatch } from 'react-redux'

import CategorySelector from './components/CategorySelector'
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
    <div>
      <h1>MapleRoyals Drop Tracker</h1>
      <CategorySelector />
      <Search />
      <Mob />
    </div>

  )
}

export default App
