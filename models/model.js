const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  price: {
    type: String,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
  noOfBedroom: {
    type: Number,
  },
  noOfBathroom: {
    type: Number,
  },
  area: {
    type: Number,
  },
});

module.exports = { modelSchema };
