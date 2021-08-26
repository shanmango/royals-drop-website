const searchReducer = (state = {category: 'mobs', selected: null}, action) => {
  switch (action.type) {
    case 'SEARCH_BY':
      return action.category
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

export default searchReducer