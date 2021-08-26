import React from 'react'
import { useSelector } from 'react-redux'
const Item = () => {
  const search = useSelector(state => state.search)
  
  return (
    <div>
      item
    </div>
  )
}

export default Item