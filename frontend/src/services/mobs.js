import axios from 'axios'

const baseUrl = 'http://localhost:3001/mobs'

// Returns all mobs without drop table
const getSearchList = async () => {
  const response = await axios.get(baseUrl)
  const mobs = response.data.map(mob => {
    delete mob.drops
    return mob
  })
  return mobs
}

const exportedObject = {
  getSearchList
}

export default exportedObject