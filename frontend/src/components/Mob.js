import React from 'react'
import { useSelector } from 'react-redux'
const Mob = () => {
  const category = useSelector(state => state.search.category)
  

  const MobDisplay = () => {
    return (
      <div></div>
    )
  }

  return (
    <div>
      {category === 'mobs' && MobDisplay}
    </div>
  )
}

export default Mob