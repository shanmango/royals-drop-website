import React from 'react'
import { searchBy } from '../reducers/searchReducer'
import { useSelector, useDispatch } from 'react-redux'

const CategorySelector = () => {
  const dispatch = useDispatch()
  const changeSearchType = (event, category) => {
    dispatch(searchBy(category))
  }

  // Fix re-render clicking issue with radio buttons
  const type = useSelector(state => state.search)
  const mobSelected = type === 'mobs'
  

  return (
    <div>
      Search by:
      Mob <input type="radio" name="typeselector" checked={mobSelected}
        onChange={(event) => changeSearchType(event, 'mobs')}/>
      Item <input type="radio" name="typeselector" checked={!mobSelected}
        onChange={(event) => changeSearchType(event, 'items')} />
    </div>
  )
}

export default CategorySelector