import React from 'react'
import { searchBy, clearSelected } from '../reducers/searchReducer'
import { useSelector, useDispatch } from 'react-redux'

const CategorySelector = (props) => {
  const dispatch = useDispatch()
  // Clear selected if category type changed
  const changeSearchType = (event, category) => {
    props.setSearchItem(null)
    dispatch(clearSelected())
    dispatch(searchBy(category))
  }

  // Fix re-render clicking issue with radio buttons
  const type = useSelector(state => state.search.category)
  const mobSelected = type === 'mobs'

  return (
    <div>
      Search by: &nbsp;
      Mob <input type="radio" name="typeselector" checked={mobSelected}
        onChange={(event) => changeSearchType(event, 'mobs')}/>
        &nbsp;
      Item <input type="radio" name="typeselector" checked={!mobSelected}
        onChange={(event) => changeSearchType(event, 'items')} />
    </div>
  )
}

export default CategorySelector