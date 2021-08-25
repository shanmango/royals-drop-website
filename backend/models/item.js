/**
 * Schema for item object
 */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

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
  mobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mob'
    }
  ]
})

itemSchema.plugin(uniqueValidator)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item