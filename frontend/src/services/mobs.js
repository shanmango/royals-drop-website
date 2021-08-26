import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/mobs'

// Returns only mob name and game id
const getSearchList = async () => {
  const response = await axios.get(baseUrl)
  const mobs = response.data.map(mob => {
    delete mob.drops
    delete mob.maps
    return mob
  })
  return mobs
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