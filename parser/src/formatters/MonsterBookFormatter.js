const renameKey = (obj, oldKey, newKey) => {
  obj[newKey] = obj[oldKey]
  delete obj[oldKey]
}

const formatMonsterBookObject = (monsterBook) => {
  // Trim fluff from xml
  monsterBook = monsterBook.imgdir.imgdir

  monsterBook.map(mob => {
    // Rename the keys of the json object
    renameKey(mob, 'name', 'id')
    renameKey(mob, 'imgdir', 'info')
    // Trim unnecessary field
    delete mob.string
    // Format map and drops to root level
    infoPartOne = mob.info[0]
    infoPartTwo = mob.info[1]
    if (infoPartOne.name === 'map') {
      delete infoPartOne.name
      delete infoPartTwo.name
      mob.maps = infoPartOne
      mob.drops = infoPartTwo
    } else {
      delete infoPartOne.name
      delete infoPartTwo.name
      mob.drops = infoPartOne
      mob.maps = infoPartTwo
    }
    delete mob.info
    // Trim unnecessary object for map and drops
    mob.maps = mob.maps.int
    mob.drops = mob.drops.int

    // Check if map exists before continuing to parse
    if (mob.maps) {
      // Wrap tables with 1 item in array
      if (!Array.isArray(mob.maps)) {
        mob.maps = new Array(mob.maps)
      }
      // rename keys
      mob.maps.map((x, i) => {
        mob.maps[i] = x.value
      })
    } else {
      // Return empty array if nothing exists
      mob.maps = new Array()
    }

    // Check if drops exist before continuing to parse
    if (mob.drops) {
      if (!Array.isArray(mob.drops)) {
        mob.drops = new Array(mob.drops)
      }
      // Rename keys
      mob.drops.map((x, i) => {
        mob.drops[i] = x.value
      })
    } else {
      mob.drops = new Array()
    }

    return mob

  })
  return monsterBook
}

module.exports = { formatMonsterBookObject }