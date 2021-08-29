import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { searchBy, clearSelected } from '../reducers/searchReducer'
import { useSelector, useDispatch } from 'react-redux'
import '../styles/CategorySelector.scss'

const CategorySelector = () => {
  const dispatch = useDispatch()
  // Clear selected if category type changed
  const changeSearchType = (category) => {
    dispatch(clearSelected())
    dispatch(searchBy(category))
  }

  // Fix re-render clicking issue with radio buttons
  const type = useSelector(state => state.search.category)
  const mobSelected = type === 'mobs'

  return (
    <div className="buttons">
      Search by: &nbsp;
      <ToggleButtonGroup
        type="radio"
        name="type-selector"
        defaultValue="mobs"
        onChange={(event) => changeSearchType(event, 'items')}>
        <ToggleButton id="mobs-radio" value="mobs" variant="outline-dark">Mobs</ToggleButton>
        <ToggleButton id="items-radio" value="items" variant="outline-dark">Items</ToggleButton>

      </ToggleButtonGroup>
    </div>

  )
}

export default CategorySelector