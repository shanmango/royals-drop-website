import React from 'react'
import Mob from './components/Mob'
import TypeSelector from './components/TypeSelector'
import Search from './components/Search'
function App() {
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
