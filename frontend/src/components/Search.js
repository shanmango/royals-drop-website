import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Select, { createFilter } from 'react-select'
import { FixedSizeList as List } from 'react-window'
import { initializeItems } from '../reducers/itemReducer'

/**
 * Custom MenuList to improve react-select performance
 */
const MenuList = (props) => {
  const height = 38
  const { options, children, maxHeight, getValue } = props
  const [value] = getValue()
  const initialOffset = options.indexOf(value) * height

  return (
    <List
      height={maxHeight / 3*2}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  )
}

/**
 * Search bar component
 */
const Search = () => {

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
  const click = (event) => {
    console.log('click')
    console.log(event)
  }

  return (
    <div style={style}>
      <Select
        style={style}
        components={{ MenuList: MenuList }}
        isClearable
        filterOption={createFilter(filterConfig)}
        options={options}
        onChange={change} 
        onClick={click} />
    </div>
  )
}

export default Search