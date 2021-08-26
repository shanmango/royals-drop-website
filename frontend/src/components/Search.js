import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import WindowedSelect, { createFilter } from 'react-windowed-select'

/**
 * Search bar component
 */
const Search = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const style = {
    'max-width': '200pt'
  }

  // Select dataset based on type state
  const data = useSelector((state) => {

    if (state.type === 'mobs') {
      return state.mobs
    } else {
      // TODO: add item support
      return state.items
    }
  })

  let options = []

  if (data) {
    options = data.map(x => {
      let object = {
        id: x.id,
        value: x.name,
        label: x.name
      }
      return object
    })
  }

  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    matchFrom: 'start'
  }

  const change = (event) => {
    console.log(event)
  }

  const onInputChange = (event) => {
    if (event) {
      setMenuIsOpen(true)
    } else {
      setMenuIsOpen(false)
    }

  }

  return (
    <div style={style}>
      <WindowedSelect
        style={style}
        isClearable
        escapeClearsValue='true'
        menuIsOpen={menuIsOpen}
        filterOption={createFilter(filterConfig)}
        options={options}
        onChange={change} 
        onInputChange={onInputChange}/>
    </div>
  )
}

export default Search