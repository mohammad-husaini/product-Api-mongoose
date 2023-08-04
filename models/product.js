import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  product_name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String },
  brand: { type: String },
  color: { type: String },
  size: { type: String },
  release_date: { type: Date, default: Date.now() },
  category: { type: String },
  img: { type: String },
});
export default mongoose.model("Product", ProductSchema);
