/**
 * Endpoints for the items collection
 */

const itemsRouter = require('express').Router()
const Item = require('../models/item')

itemsRouter.get('/:id', async (req, res) => {
  const mob = await Item.findById(req.params.id)
  if (mob) {
    res.json(mob)
  } else {
    res.status(404).end()
  }
})

module.exports = itemsRouter