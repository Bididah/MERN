import mongoose from "mongoose";

const productShcema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  description: String,
  category: String,
  rating: Number,
  supply: Number
}, { timestamps: true })

const Product = mongoose.model('Product', productShcema)

export default Product
