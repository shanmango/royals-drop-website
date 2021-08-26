import React from 'react'
import { searchBy } from '../reducers/typeSelectorReducer'
import { useSelector, useDispatch } from 'react-redux'

const TypeSelector = () => {
  const dispatch = useDispatch()
  const changeSearchType = (event, type) => {
    dispatch(searchBy(type))
  }

  // Fix re-render clicking issue with radio buttons
  const type = useSelector(state => state.type)
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

export default TypeSelector