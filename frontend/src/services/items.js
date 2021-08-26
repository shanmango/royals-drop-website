import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/items'

// Returns only item name and game id
const getSearchList = async () => {
  const response = await axios.get(baseUrl)
  const items = response.data.map(item => {
    delete item.itemType
    delete item.desc
    delete item.mobs
    return item
  })
  return items

}

const exportedObject = {
  getSearchList
}

export default exportedObject