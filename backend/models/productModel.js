const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "You must specify a name for the product"],
    },
    price: { type: Number, required: [true, "The product must have a price"] },
    desc: String,
    category: { type: Array, default: [] },
    image: {
      type: String,
      required: [true, "You must set an image as a preview of your product"],
    },
    gallery: { type: Array, default: []},
    videoTutorials: { type: Array, default: []},
    reviews: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
