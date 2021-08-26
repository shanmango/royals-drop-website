import mobService from '../services/mobs'

const reducer = (state = [], action) => {
  switch (action.type) {
    case ('INIT_MOBS'):
      return action.data
    case ('test'):
      return action.e
    default:
      return state
  }
}

export const initializeMobs = () => {
  return async dispatch => {
    const mobs = await mobService.getSearchList()
    console.log('initialize mobs')
    dispatch({
      type: 'INIT_MOBS',
      data: mobs
    })
  }
}

export const test = e => {
  return {
    type: 'test',
    e
  }
}

export default reducer