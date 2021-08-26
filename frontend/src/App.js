import React, { useEffect } from 'react'
import Mob from './components/Mob'
import TypeSelector from './components/TypeSelector'
import Search from './components/Search'
import { useDispatch } from 'react-redux'
import { initializeMobs } from './reducers/mobReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeMobs())
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
