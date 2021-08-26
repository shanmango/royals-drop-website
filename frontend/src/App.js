import React, { useEffect } from 'react'
import Mob from './components/Mob'
import TypeSelector from './components/TypeSelector'
import Search from './components/Search'
import { useDispatch } from 'react-redux'
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
      <TypeSelector />
      <Search />
      <Mob />
    </div>

  )
}

export default App
