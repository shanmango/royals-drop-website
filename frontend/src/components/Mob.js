import React from 'react'
import { useSelector } from 'react-redux'
const Mob = () => {
  const search = useSelector(state => state.search)

  return (
    <div>
      mob
    </div>
  )
}

export default Mob