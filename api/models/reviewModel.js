const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  rating: { type: Number, required: true },
  comment: { type: String },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
