/**
 * Schema for mob object
 */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const dropSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})

const mobSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true  
  },
  maps: {
    type: [String],
    required: true
  },
  drops: [dropSchema]

})

mobSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

mobSchema.plugin(uniqueValidator)

const Mob = mongoose.model('Mob', mobSchema)

module.exports = Mob