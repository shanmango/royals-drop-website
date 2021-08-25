const itemFormatter = require('./ItemFormatter')

const formatEquipsObject = (equips) => {
  // Trim fluff
  equips = equips.imgdir.imgdir.imgdir
  equips.map((x, i) => {
    equips[i] = x.imgdir
  })
  // Flatten arrays into one array
  equips = equips.flat()
  // Remove cosmetics (unnecessary data)
  equips = equips.filter(eq => {
    return parseInt(eq.name) >= 1000000
  })
  // Place names into object
  let result = itemFormatter.formatItems(equips)
  return result
}

module.exports = { formatEquipsObject }