import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select, { createFilter } from 'react-select'
import { setSelected } from '../reducers/searchReducer'
import CategorySelector from './CategorySelector'
import InfoDisplay from './InfoDisplay'
import '../styles/Search.scss'
/**
 * Search bar component
 */
const Search = () => {
  const dispatch = useDispatch()

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
    {search.selected && <InfoDisplay />}
  </div>
)
}

export default Search