const reducer = (state = [], action) => {
  switch(action.type) {
    case ('INIT_MOBS'):
      return action.data
    default:
      return state
  }
}

export const initializeMobs = () => {
  return async dispatch => {
    // TODO: Add MongoDB Call
    const mobs = []
    dispatch({
      type: 'INIT_MOBS',
      data: mobs
    })
  }
}