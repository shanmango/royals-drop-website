const fs = require('fs')
const parser = require('xml2json')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

const monsterBookFormatter = require('./formatters/MonsterBookFormatter')
const mobNameFormatter = require('./formatters/MobNameFormatter')
const equipsFormatter = require('./formatters/EquipsFormatter')
const itemFormatter = require('./formatters/ItemFormatter')

const readFile = async (path) => {
  const result = await readFileAsync(path)
  return JSON.parse(parser.toJson(result))
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


module.exports = { loadItems, loadMobs }