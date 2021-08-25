/**
 * Endpoints for the items collection
 */

const itemsRouter = require('express').Router()
const Item = require('../models/item')


itemsRouter.post('/', async (req, res) => {
  // Delete old data first
  await Item.collection.drop()
  const body = req.body
  await Item.insertMany(body)
  console.log('mass insertion of items complete')
  res.status(200).send('mass insertion of items complete')

})

module.exports = itemsRouter