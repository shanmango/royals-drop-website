import React from 'react'
import { useSelector } from 'react-redux'
const Item = () => {
  const category = useSelector(state => state.search.category)

  const ItemDisplay = () => {
    return (
      <div></div>
    )
  }
  
  return (
    <div>
      {category === 'items' && ItemDisplay}
    </div>
  )
}

export default Item