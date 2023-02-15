const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const Item = require('./models/item')
const Mob = require('./models/mob')
const fs = require('fs')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)

  // insert items
  fs.readFile('../jsondata/itemArray.json', 'utf8', async (err, data) => {
    if (err) {
      console.err(err);
      return
    }

    const body = JSON.parse(data)
    await Item.collection.drop()
    console.log(body)
    await Mob.insertMany(body)
    console.log('mass insertion of items complete')
  })

  // insert mobs
  fs.readFile('../jsondata/mobs.json', 'utf8', async (err, data) => {
    if (err) {
      console.err(err);
      return
    }

    const body = JSON.parse(data)
    await Mob.collection.drop()
    console.log(body)
    await Mob.insertMany(body)
    console.log('mass insertion of mobs complete')
  })
})