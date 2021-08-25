/**
 * Schema for mob object
 */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

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
  drops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]

})

mobSchema.plugin(uniqueValidator)

const Mob = mongoose.model('Mob', mobSchema)

module.exports = Mob