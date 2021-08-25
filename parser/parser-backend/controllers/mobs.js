/**
 * Endpoints for the mobs collection
 */

const mobsRouter = require('express').Router()
const Mob = require('../models/mob')

mobsRouter.post('/', async (req, res) => {
  // Delete old data first
  await Mob.collection.drop()
  const body = req.body
  console.log(body)
  await Mob.insertMany(body)
  console.log('mass insertion of mobs complete')
  res.status(200).send('mass insertion of mobs complete')
})


module.exports = mobsRouter