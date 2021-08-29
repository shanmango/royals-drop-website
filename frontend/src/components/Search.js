import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select, { createFilter } from 'react-select'
import { setSelected } from '../reducers/searchReducer'
import CategorySelector from './CategorySelector'
import InfoDisplay from './InfoDisplay'

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

  let search = useSelector(state => state.search)
  const onChange = (event) => {
    dispatch(setSelected(event, search.category))
  }

  // select bar
  const selectBar = () => (
    <div style={style}>
      <Select
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
      {search.selected && <InfoDisplay />}
    </div>
  )
}

export default Search