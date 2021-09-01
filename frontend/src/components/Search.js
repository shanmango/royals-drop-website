import React from 'react'
import { useSelector } from 'react-redux'
import Select, { createFilter } from 'react-select'
import { useHistory, Route } from 'react-router-dom'
import CategorySelector from './CategorySelector'
import { useCategory } from '../utils/helpers.js'
import InfoDisplay from './InfoDisplay'
import '../styles/Search.scss'


const Search = () => {
  const history = useHistory()
  let category = useCategory()
  // Select dataset based on type state
  const options = useSelector((state) => {
    let data = []
    if (category === 'mobs') {
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
    event ?
    history.push(`/search/${category}/${event.value}`)
    : history.push(`/search/${category}`)
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
      <Route path='/search/:category/:id' component={InfoDisplay} />

    </div>
  )
}

export default Search