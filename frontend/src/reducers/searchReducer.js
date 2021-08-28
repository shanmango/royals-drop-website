import mobService from '../services/mobs'
import itemService from '../services/items'
const searchReducer = (state = { category: 'mobs', selected: null }, action) => {
  switch (action.type) {
    case 'SEARCH_BY':
      return { ...state, category: action.category}
    case 'SET_SELECTED':
      return { ...state, selected: action.data }
    case 'CLEAR_SELECTED':
      return { ...state, selected: null }
    default:
      return state
  }
}

export const searchBy = category => {
  return {
    type: 'SEARCH_BY',
    category
  }
}

export const setSelected = (selected, category) => {
  return async dispatch => {
    let data = null
    if (selected) {
      data = category === 'mobs' 
      ? await mobService.getById(selected.value) 
      : await itemService.getById(selected.value)
    }

    dispatch({
      type: 'SET_SELECTED',
      data
    })
  }
}

export const clearSelected = () => {
  return {
    type: 'CLEAR_SELECTED'
  }
}

export default searchReducer