const itemFormatter = require('./ItemFormatter')

const formatEquipsObject = (equips) => {
  // Trim fluff
  equips = equips.imgdir.imgdir.imgdir
  equips.map((x, i) => {
    equips[i] = x.imgdir
  })
  // Flatten arrays into one array
  equips = equips.flat()
  // Place names into object
  let result = itemFormatter.formatItems(equips)
  return result
}

module.exports = { formatEquipsObject }