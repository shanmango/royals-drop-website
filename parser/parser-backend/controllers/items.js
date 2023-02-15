/**
 * Endpoints for the items collection
 */

const itemsRouter = require('express').Router()
const Item = require('../models/item')
const fs = require('fs')

itemsRouter.post('/', async (req, res) => {
  // Delete old data first
  await Item.collection.drop()
  const body = req.body
  await Item.insertMany(body)
  console.log('mass insertion of items complete')
  res.status(200).send('mass insertion of items complete')

})

itemsRouter.post('/ci', async (req, res) => {
  // Delete old data first
  await Mob.collection.drop()
  fs.readFile('../jsondata/itemArray.json', 'utf8', async (err, data) => {
    if (err) {
      console.err(err);
      res.status(500).send({ message: 'Cannot read itemArray.json'})
      return
    }

    const body = JSON.parse(data)

    console.log(body)
    await Mob.insertMany(body)
    console.log('mass insertion of items complete')
    res.status(200).send('mass insertion of items complete')
  })
})

module.exports = itemsRouter