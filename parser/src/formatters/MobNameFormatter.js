const formatMobNamesObject = (mobNames) => {
  // Trim fluff from xml
  mobNames = mobNames.imgdir.imgdir
  // Map data to object
  let result = {}
  mobNames.forEach(mob => {
    result[mob.name] = mob.string.value
  })
  return result
}

module.exports = { formatMobNamesObject }