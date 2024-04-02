const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema(
  {
    name: String,
    size: String,
    color : String,
    mail: {
      default: "x123@gmail.com", 
      type: String,
    },
    thumbnail: {
      type: Array,
      default: []
    },
    category: String,
    occupation: String,
    occupationIs: {
      type: String,
      default: undefined,
    },
    description: String,
    status:{
      default: "active",
      type: String,
    },
    createAt: Date,
    deleted: {
      type: Boolean,
      default: false
    }
  }
)

const Sample = mongoose.model("Sample", sampleSchema, 'sample');

module.exports = Sample;