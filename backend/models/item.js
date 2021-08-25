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

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


itemSchema.plugin(uniqueValidator)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item