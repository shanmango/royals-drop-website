import React from 'react'
import { useSelector } from 'react-redux'
import Mob from './Mob'
import Item from './Item'
const Info = () => {
  const search = useSelector(state => state.search)

  const Display = () => (
      <div>
        {search.category === 'mobs' && <Mob />}
        {search.category === 'items' && <Item />}
      </div>
    )
  

  return (
    <div>
      {search.selected && Display()}
    </div>
  )
}

export default Info