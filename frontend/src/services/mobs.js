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

const exportedObject = {
  getSearchList
}

export default exportedObject