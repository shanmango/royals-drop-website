/**
 * Endpoints for the mobs collection
 */

const mobsRouter = require('express').Router()
const Mob = require('../models/mob')

mobsRouter.get('/', async (req, res) => {
  const mobs = await Mob.find({})
  res.json(mobs)
})

mobsRouter.get('/:id', async (req, res) => {
  // Unique validation done in schema, game ID should be unique
  const mob = await Mob.findOne({id: req.params.id})
  if (mob) {
    res.json(mob)
  } else {
    res.status(404).end()
  }
})

mobsRouter.post('/', async (req, res) => {
  // Delete old data first
  await Mob.collection.drop()
  const body = req.body
  console.log(body)
  const response = await Mob.insertMany(body)
  console.log('mass insertion of mobs complete')
  res.json(response.data)
})


module.exports = mobsRouter