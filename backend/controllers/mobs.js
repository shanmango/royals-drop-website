/**
 * Endpoints for the mobs collection
 */

const mobsRouter = require('express').Router()
const Mob = require('../models/mob')

mobsRouter.get('/:id', async (req, res) => {
  const mob = await Mob.findById(req.params.id)
  if (mob) {
    res.json(mob)
  } else {
    res.status(404).end()
  }
})

module.exports = mobsRouter