const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:Number,
    name:String,
    category:String,
    description:String,
    image:String,
    price:Number,
});

const ProductModel = mongoose.model("products", productSchema)
module.exports = ProductModel