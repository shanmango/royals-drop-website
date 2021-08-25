const axios = require('axios')
const baseUrl = 'http://localhost:3001/api/'

const writeToServer = async (data, type) => {
  const response = await axios.post(`${baseUrl}${type}`, data)
  return response.data
}

module.exports = { writeToServer }