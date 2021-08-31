import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select, { createFilter } from 'react-select'
import { useHistory } from 'react-router-dom'
import { setSelected } from '../reducers/searchReducer'
import CategorySelector from './CategorySelector'
import '../styles/Search.scss'
/**
 * Search bar component
 */
const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory()
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
    history.push(`/search/${search.category}/${event.value}`)
  }

  // select bar
  const selectBar = () => (
    <Select
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      placeholder='Search for a mob or item'
      isClearable
      escapeClearsValue='true'
      filterOption={createFilter(filterConfig)}
      options={options}
      onChange={onChange}
      value={''} />
  )

  const loadingMessage = () => (
    <p>
      Drop data is loading...
    </p>
  )

  return (
    <div id="search-body">
      <div>
        <CategorySelector />
        {options.length > 0 && selectBar()}
        {options.length < 1 && loadingMessage()}
      </div>
    </div>
  )
}

export default Search