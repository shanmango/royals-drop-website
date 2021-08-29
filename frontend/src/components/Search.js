import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WindowedSelect, { createFilter } from 'react-windowed-select'
import { setSelected } from '../reducers/searchReducer'

import CategorySelector from './CategorySelector'
import Info from './Info'

/**
 * Search bar component
 */
const Search = () => {
  const dispatch = useDispatch()
  const style = {
    'maxWidth': '200pt'
  }

  // Select dataset based on type state
  const options = useSelector((state) => {
    let data = []
    if (state.search.category === 'mobs') {
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

  let category = useSelector(state => state.search.category)
  const onChange = (event) => {
    dispatch(setSelected(event, category))
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
        filterOption={createFilter(filterConfig)}
        options={options}
        onChange={onChange}
        value={''} />
    </div>
  )

  const loadingMessage = () => (
    <p>
      Drop data is loading...
    </p>
  )

  return (
    <div>
      <CategorySelector />
      {options.length > 0 && selectBar()}
      {options.length < 1 && loadingMessage()}
      <Info />
    </div>
  )
}

export default Search