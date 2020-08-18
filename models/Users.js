const mongosse = require("mongoose");
const { db } = require("./Products");
const Schema = mongosse.Schema;
const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  create_At: { type: Date, default: Date.now() },
  update_At: { type: Date, default: Date.now() },
  delete_At: { type: Date, default: Date.now() },
  isDelete: { type: Boolean, default: false },
});

module.exports = mongosse.model("User", UserSchema);
