const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  products: [
    {
      productId: String,
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  amount: { type: Number, required: true },
  status: { type: String, default: "Pending" },
  address: {type: Object, required: true}
});

module.exports = mongoose.model("Order", OrderSchema);
