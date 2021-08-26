const typeSelectorReducer = (state = 'mobs', action) => {
  switch (action.type) {
    case 'SEARCH_BY':
      return action.selected
    default:
      return state
  }
}

export const searchBy = selected => {
  return {
    type: 'SEARCH_BY',
    selected
  }
}

export default typeSelectorReducer