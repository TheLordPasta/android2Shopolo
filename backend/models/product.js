const mongoose = require("mongoose");
const { v4 } = require("uuid");

const productSchema = new mongoose.Schema(
  {
    id: { type: String, default: v4 },
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

