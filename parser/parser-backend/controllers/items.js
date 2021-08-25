/**
 * Endpoints for the items collection
 */

const itemsRouter = require('express').Router()
const Item = require('../models/item')


itemsRouter.get('/', async (req, res) => {
  const items = await Item.find({})
  res.json(items)
})

itemsRouter.get('/:id', async (req, res) => {
  // Unique validation done in schema, game ID should be unique
  const item = await Item.findOne({id: req.params.id})
  if (item) {
    res.json(item)
  } else {
    res.status(404).end()
  }
})

itemsRouter.post('/', async (req, res) => {
  // Delete old data first
  await Item.collection.drop()
  const body = req.body
  const response = await Item.insertMany(body)
  console.log('mass insertion of items complete')
  res.status(200).statusMessage('mass insertion of items complete')

})

module.exports = itemsRouter