import React from 'react'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { useHistory } from "react-router-dom"
import '../styles/CategorySelector.scss'
import { useCategory } from '../utils/helpers.js'

const CategorySelector = () => {
  const history = useHistory()
  let category = useCategory()

  const changeSearchType = (event) => {
    history.push(`/search/${event}`)
  }
  

  return (
    <div className="buttons">
      Search by: &nbsp;
      <ToggleButtonGroup
        type="radio"
        name="type-selector"
        value={category}
        onChange={(event) => changeSearchType(event)}>
        <ToggleButton id="mobs-radio" value="mobs" variant="outline-dark">Mobs</ToggleButton>
        <ToggleButton id="items-radio" value="items" variant="outline-dark">Items</ToggleButton>

      </ToggleButtonGroup>
    </div>

  )
}

export default CategorySelector