import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WindowedSelect, { createFilter } from 'react-windowed-select'
import { setSelected } from '../reducers/selectedReducer'

/**
 * Search bar component
 */
const Search = () => {
  const dispatch = useDispatch()
  const style = {
    'maxWidth': '200pt'
  }
  // Select dataset based on type state
  let options = useSelector((state) => {
    let data = []
    if (state.category === 'mobs') {
      data = state.mobs
    } else {
      data = state.items
    }
    if (data) {
      return data.map(x => {
        let object = {
          value: x.id,
          label: x.name
        }
        return object
      })
    } else {
      return []
    }
  })

  // Search by beginning of string
  const filterConfig = {
    ignoreCase: true,
    ignoreAccents: true,
    trim: true,
    matchFrom: 'start'
  }

  const onChange = (event) => {
    dispatch(setSelected(event))
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
    <div style={style}>
      <WindowedSelect
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        style={style}
        placeholder='Search for a mob or item'
        isClearable
        escapeClearsValue='true'
        menuIsOpen={menuIsOpen}
        filterOption={createFilter(filterConfig)}
        options={options}
        onChange={onChange}
        onInputChange={onInputChange} />
    </div>
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