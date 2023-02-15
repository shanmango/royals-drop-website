/**
 * Endpoints for the mobs collection
 */

const mobsRouter = require('express').Router()
const Mob = require('../models/mob')
const fs = require('fs')

mobsRouter.post('/', async (req, res) => {
  // Delete old data first
  await Mob.collection.drop()
  const body = req.body
  console.log(body)
  await Mob.insertMany(body)
  console.log('mass insertion of mobs complete')
  res.status(200).send('mass insertion of mobs complete')
})

mobsRouter.post('/ci', async (req, res) => {
  // Delete old data first
  await Mob.collection.drop()
  fs.readFile('../jsondata/mobs.json', 'utf8', async (err, data) => {
    if (err) {
      console.err(err);
      res.status(500).send({ message: 'Cannot read mobs.json'})
      return
    }

    const body = JSON.parse(data)

    console.log(body)
    await Mob.insertMany(body)
    console.log('mass insertion of mobs complete')
    res.status(200).send('mass insertion of mobs complete')
  })
})

module.exports = mobsRouter