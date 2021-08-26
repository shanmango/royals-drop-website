import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'
const Mob = () => {
  const mob = useSelector(state => state.search.selected)
  console.log(mob)
  return (
    <div>
      <h4>{mob.name}</h4>
      <h5>Drops:</h5>
      <List list={mob.drops} />
    </div>
  )
}

export default Mob