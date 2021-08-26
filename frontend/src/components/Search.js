import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
  const type = useSelector(state => state)
  return (
    <div>{type}</div>
  )
}

export default Search