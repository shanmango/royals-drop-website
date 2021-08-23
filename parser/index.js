fs = require('fs')
const parser = require('xml2json')
const { promisify } = require('util')
const monsterBookFormatter = require('./src/formatters/MonsterBookFormatter')
const mobNameFormatter = require('./src/formatters/MobNameFormatter')
const equipsFormatter = require('./src/formatters/EquipsFormatter')
const itemFormatter = require('./src/formatters/ItemFormatter')
const merger = require('./src/formatters/Merger')
const readFileAsync = promisify(fs.readFile)

const readFile = async (path) => {
  const result = await readFileAsync(path)
  return JSON.parse(parser.toJson(result))
}

const makeDataFile = (path, data) => {
  fs.writeFile(path, JSON.stringify(data), (e) => {if (e) throw e})
}


const loadItems = async () => {
  let items = {}
  let equips = await readFile('./data/Eqp.img.xml')
  items.equip = equipsFormatter.formatEquipsObject(equips)
  let use = await readFile('./data/Consume.img.xml')
  items.use = itemFormatter.formatItems(use.imgdir.imgdir)
  let etc = await readFile('./data/Etc.img.xml')
  items.etc = itemFormatter.formatItems(etc.imgdir.imgdir.imgdir)
  let setup = await readFile('./data/Ins.img.xml')
  items.setup = itemFormatter.formatItems(setup.imgdir.imgdir)
  let cash = await readFile('./data/Cash.img.xml')
  items.cash = itemFormatter.formatItems(cash.imgdir.imgdir)
  return items
}

const loadMobs = async () => {
  // Load xml data and format into json object
  let monsterBook = await readFile('./data/MonsterBook.img.xml')
  monsterBook = monsterBookFormatter.formatMonsterBookObject(monsterBook)
  let mobNames = await readFile('./data/Mob.img.xml')
  mobNames = mobNameFormatter.formatMobNamesObject(mobNames)
  // Add names to the monster book (merge the files)
  monsterBook.map(mob => {
    const name = mobNames[mob.id]
    if (name) {
      mob.name = name
    } else {
      console.error(mob.id, 'missing name')
    }
  })
  return monsterBook
}

const main = async () => {
  let mobs = await loadMobs()
  let items = await loadItems()
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