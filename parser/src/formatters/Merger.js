/**
 * ID is:
 * 0000000 - 1999999  equips
 * 2000000 - 2999999  use
 * 3000000 - 3999999  setup
 * 4000000 - 4999999  etc
 * 5000000 - 5999999  cash
 * @returns {string} corresponding item table name
*/
const findItemTable = (id) => {
  id = parseInt(id)
  let tableToSearch = ''
  if (id < 2000000) {
    tableToSearch = 'equip'
  } else if (id < 3000000) {
    tableToSearch = 'use'
  } else if (id < 4000000) {
    tableToSearch = 'setup'
  } else if (id < 5000000) {
    tableToSearch = 'etc'
  } else if (id < 6000000) {
    tableToSearch = 'cash'
  } else {
    console.error(id, 'malformed ID')
  }
  // Check if item exists
  if (tableToSearch[id] === 'undefined') {
    console.error('merge item id', id, 'not found')
  }
  return tableToSearch
}

/**
 * @param {object} mobs, the object being modified 
 * @param {object} items, contains the item data to be merged
 * @returns {object} mob.drops contains a list of item objects
 */

const mergeItemsIntoMobs = (mobs, items) => {
  // Iterate through each mob and translate drop id list into list of item objects
  mobs.map(mob => {
    let droplist = mob.drops
    mob.drops = []
    droplist.forEach(id => {
      const itemTable = findItemTable(id, items)
      const itemObject = { ...items[itemTable][id] }
      delete itemObject.mobs
      mob.drops.push({ ...itemObject, itemid: id })
    })
  })
  mobs = mobs.sort((a, b) => a.name.toLowerCase().compareLocale(b.name.toLowerCase()))
  return mobs
}

const mergeMobsIntoItems = (mobs, items) => {
  // Iterate through each mob's drop list, push mob ID to corresponding item
  mobs.forEach(mob => {
    let droplist = [...mob.drops]
    droplist.forEach(id => {
      const itemTable = findItemTable(id, items)
      let mobCopy = { ...mob, mobid: mob.id }
      delete mobCopy.id
      delete mobCopy.drops
      delete mobCopy.maps
      items[itemTable][id]['mobs'].push(mobCopy)
    })
  })

  return items
}

module.exports = { mergeItemsIntoMobs, mergeMobsIntoItems }