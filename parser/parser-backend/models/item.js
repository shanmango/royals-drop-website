/**
 * Schema for item object
 */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

/* Schema for list of mobs */
const dropperSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const itemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  itemType: {
    type: String,
    required: true  
  },
  name: {
    type: String,
    required: true  
  },
  desc: String,
  mobs: [dropperSchema]
})

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
    returnedObject.mobs.map(mob => {
      delete mob._id
    })
  }
})


itemSchema.plugin(uniqueValidator)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item