import axios from 'axios'

const baseUrl = '/api/items'

// Returns only item name and game id
const getSearchList = async () => {
  const response = await axios.get(baseUrl)
  let items = response.data.filter(item => {
    return item.mobs.length
  })
  items = items.map(item => {
    delete item.itemType
    delete item.desc
    delete item.mobs
    return item
  })

  return items
}

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const exportedObject = {
  getSearchList,
  getById
}

export default exportedObject