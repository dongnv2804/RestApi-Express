const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: String },
  category: { type: String },
  detail: [
    {
      color: String,
      size: String,
      quantity: Number,
    },
  ],
  create_At: { type: Date, default: Date.now() },
  update_At: { type: Date, default: Date.now() },
  delete_At: { type: Date, default: Date.now() },
  isDelete: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", ProductSchema);
