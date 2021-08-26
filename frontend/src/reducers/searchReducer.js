const searchReducer = (state = { category: 'mobs', selected: null }, action) => {
  switch (action.type) {
    case 'SEARCH_BY':
      return { ...state, category: action.category}
    case 'SET_SELECTED':
      return { ...state, selected: action.selected }
    default:
      return state
  }
}

export const setSelected = selected => {
  return async dispatch => {
    dispatch({
      type: 'SET_SELECTED',
      selected
    })
  }
}
export const searchBy = category => {
  return {
    type: 'SEARCH_BY',
    category
  }
}

export default searchReducer