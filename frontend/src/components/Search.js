import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WindowedSelect, { createFilter } from 'react-windowed-select'
import { setSelected } from '../reducers/selectedReducer' 

import Form from 'react-bootstrap/Form'
/**
 * Search bar component
 */
const Search = () => {
  const dispatch = useDispatch()
  const style = {
    'maxWidth': '200pt'
  }
  // Select dataset based on type state
  const data = useSelector((state) => {
    if (state.category === 'mobs') {
      return state.mobs
    } else {
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

  // Search by beginning of string
  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    matchFrom: 'start'
  }

  const setSelected = (event) => {
    event.preventDefault()
    console.log(event)
    // dispatch(setSelected(''))
  }

  // Only open menu if text input has text in it
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onInputChange = (event) => {
    if (event) {
      setMenuIsOpen(true)
    } else {
      setMenuIsOpen(false)
    }
  }

  // select bar
  const selectBar = () => (
      <Form style={style} onSubmit={setSelected}>
        <WindowedSelect
          style={style}
          placeholder='Search for a mob or item'
          isClearable
          escapeClearsValue='true'
          menuIsOpen={menuIsOpen}
          filterOption={createFilter(filterConfig)}
          options={options}
          onInputChange={onInputChange}/>
      </Form> 
    )
  const loadingMessage = () => (
    <p>
      Drop data is loading...
    </p>
  )
  return (
    <div>
      {options.length > 0 && selectBar()}
      {options.length < 1 && loadingMessage()}
    </div>
  )
}

export default Search