const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "You must specify a name for the product"],
    },
    image: {
        type: String,
        required: [true, "You must set an image as a preview of your product"],
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("categories", categorySchema);
