import itemService from '../services/items'

const reducer = (state = [], action) => {
  switch (action.type) {
    case ('INIT_ITEMS'):
      return action.data
    default:
      return state
  }
}

export const initializeItems = () => {
  return async dispatch => {
    const items = await itemService.getSearchList()
    console.log('intiialize items')
    dispatch({
      type: 'INIT_ITEMS',
      data: items
    })
  }
}

export default reducer