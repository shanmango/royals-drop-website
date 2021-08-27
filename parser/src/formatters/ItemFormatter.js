/**
 * 
 * @param {array} items to be formatted
 * @returns {object} a json object with { key: {name, desc}}
 */

const formatItems = (items) => {
  let result = {}
  items.forEach(x => {
    const id = x.name
    let name = ''
    let desc = ''
    let mobs = new Array()
    if (Array.isArray(x.string)) {
      
      // Distinguish between item name and description
      if (x.string[0].name === 'name') {
        name = x.string[0].value
        desc = x.string[1].value
      } else {
        name = x.string[1].value
        desc = x.string[0].value
      }
    } else {
      name = x.string.value
    }
    result[id] = {name, desc, mobs}
  })
  return result
}

/**
 * Turns the item object into an array to prepare for mongodb load
 * @param {object} items 
 * @returns {array} list of items
 */
const formatObjectsToArray = (items) => {
  let result = new Array()
  // Iterate through each category of item
  const keys = Object.keys(items)
  keys.forEach(type => {
    Object.entries(items[type]).forEach(([key, value]) => {
      const itemToPush = {
        id: key,
        itemType: type,
        ...value
      }
      result.push(itemToPush)
    })
  })
  result = result.sort((a, b) => a.name.toLowerCase().compareLocale(b.name.toLowerCase()))
  return result
}

module.exports = { formatItems, formatObjectsToArray }