import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'
const Item = () => {
  const item = useSelector(state => state.search.selected)
  
  return (
    <div>
      <h4>{item.name}</h4>
      <h5>Mobs that drop this item:</h5>
      <List list={item.mobs} /> 
    </div>
  )
}

export default Item