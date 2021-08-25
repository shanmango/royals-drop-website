const fs = require('fs')
const fileLoader = require('./src/fileLoader')
const itemFormatter = require('./src/formatters/ItemFormatter')
const merger = require('./src/formatters/Merger')

const makeDataFile = (path, data) => {
  fs.writeFile(path, JSON.stringify(data), (e) => {if (e) throw e})
}

const main = async () => {
  let mobs = await fileLoader.loadMobs()
  let items = await fileLoader.loadItems()
  const mobsCopy = JSON.parse(JSON.stringify(mobs))
  mobs = merger.mergeItemsIntoMobs(mobs, items)
  items = merger.mergeMobsIntoItems(mobsCopy, items)
  const itemArray = itemFormatter.formatObjectsToArray(items)

  /*
  makeDataFile('./jsondata/mobs.json', mobs)
  makeDataFile('./jsondata/items.json', items)
  makeDataFile('./jsondata/itemArray.json', itemArray)
  console.log('number of mobs:', mobs.length)
  console.log('number of items dropped by mobs:', itemArray.filter(x => {
    return x.mobs.length > 0
  }).length)
  */
  
}

main()