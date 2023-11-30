const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
