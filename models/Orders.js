const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  user: {},
  orderDate: { type: Date },
  orserStatus: { type: Number },
  products: [],
  create_At: { type: Date, default: Date.now() },
  update_At: { type: Date, default: Date.now() },
  delete_At: { type: Date, default: Date.now() },
  isDelete: { type: Boolean, default: false },
});

module.exports = mongoose.model("Order", OrderSchema);
