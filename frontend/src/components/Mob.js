import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Mob = () => {
  const dispatch = useDispatch()
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