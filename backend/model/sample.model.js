const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema(
  {
    name: String,
    size: String,
    color : String,
    user: {
      default: "anh Pham", 
      type: String,
    },
    thumbnail: {
      type: Array,
      default: []
    },
    category: String,
    youAre: String,
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