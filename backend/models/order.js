const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: String,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  products: [
    {
      name: { type: String, required: true },
      category: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: Number,
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
