const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  img_url: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  farmer_id: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  number_of_ratings: {
    type: Number,
    default: 0,
  },
  desc: {
    type: String,
  },
  reviews: {
    type: [Number],
    default: [],
  },
});

module.exports = mongoose.model("Product", productSchema);
