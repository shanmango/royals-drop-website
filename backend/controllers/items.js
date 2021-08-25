/**
 * Endpoints for the items collection
 */

const itemsRouter = require('express').Router()
const Item = require('../models/item')

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
  const body = req.body
  console.log(body)
  const item = new Item({...body})

  const savedItem = await item.save()
  res.json(savedItem)
})

module.exports = itemsRouter