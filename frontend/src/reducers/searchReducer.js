import mobService from '../services/mobs'
import itemService from '../services/items'
const searchReducer = (state = { category: 'mobs', selected: null }, action) => {
  switch (action.type) {
    case 'SEARCH_BY':
      return { ...state, category: action.category}
    case 'SET_SELECTED':
      return { ...state, selected: action.data }
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
    console.log(selected)
    console.log(category)
    let data = category === 'mobs' 
    ? await mobService.getById(selected.value) 
    : await itemService.getById(selected.value)
    console.log(data)
    dispatch({
      type: 'SET_SELECTED',
      data
    })
  }
}

export default searchReducer