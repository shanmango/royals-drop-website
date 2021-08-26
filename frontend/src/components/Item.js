import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Item = () => {
  const dispatch = useDispatch()
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