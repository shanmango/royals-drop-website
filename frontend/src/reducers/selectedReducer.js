const selectedReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED':
      return action.selected
    default:
      return state
  }
}

export const setSelected = selected => {
  return {
    type: 'SET_SELECTED',
    selected
  }
}

export default selectedReducer