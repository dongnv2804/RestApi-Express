const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  imgpaths: [],
  details: [
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

// db.products.insert([
//   {
//     name: "Áo kẻ caro Gumac AA646",
//     price: 290000,
//     category: "Women",
//     imgpaths: ["GUMAC-AA646-1.jpg", "GUMAC-AA646-2.jpg", "GUMAC-AA646-3.jpg"],
//     details: [
//       { color: "Caro", size: "L", quantity: 10 },
//       { color: "Caro", size: "XL", quantity: 20 },
//     ],
//   },
//   {
//     name: "Áo thun đen Gumac AA646",
//     price: 170000,
//     category: "Women",
//     imgpaths: [
//       "GumacAT12938-1.jpg",
//       "GumacAT12938-2.jpg",
//       "GumacAT12938-3.jpg",
//       "GumacAT12938-4.jpg",
//     ],
//     details: [
//       { color: "Đen", size: "L", quantity: 10 },
//       { color: "Đen", size: "XL", quantity: 20 },
//     ],
//   },
//   {
//     name: "Sơ mi trắng nữ OEM",
//     price: 300000,
//     category: "Women",
//     imgpaths: [
//       "somi-OEM-1.jpg",
//       "somi-OEM-2.jpg",
//       "somi-OEM-3.jpg",
//       "somi-OEM-1.jpg",
//     ],
//     details: [
//       { color: "Trắng", size: "L", quantity: 10 },
//       { color: "Trắng", size: "XL", quantity: 20 },
//       { color: "Trắng", size: "M", quantity: 20 },
//     ],
//   },
//   {
//     name: "Sơ mi đen nam KOJIBA",
//     price: 300000,
//     category: "Men",
//     imgpaths: [
//       "sominam-KOJIBA-1.jpg",
//       "sominam-KOJIBA-2.jpg",
//       "sominam-KOJIBA-3.jpg",
//     ],
//     details: [
//       { color: "Đen", size: "L", quantity: 10 },
//       { color: "Đen", size: "XL", quantity: 20 },
//       { color: "Đen", size: "M", quantity: 20 },
//     ],
//   },
//   {
//     name: "Đồng hồ CUENACU8899",
//     price: 500000,
//     category: "Watch",
//     imgpaths: ["CUENACU8899-1.jpg", "CUENACU8899-2.jpg", "CUENACU8899-3.jpg"],
//     details: [{ color: "Trắng-xanh", size: null, quantity: 10 }],
//   },
//   {
//     name: "Giày Bitis nữ",
//     price: 350000,
//     category: "Women",
//     imgpaths: [
//       "giaynu-7mau-1.jpg",
//       "giaynu-7mau-2.jpg",
//       "giaynu-7mau-3.jpg",
//       "giaynu-7mau-4.jpg",
//     ],
//     details: [
//       { color: "Mix", size: "36", quantity: 10 },
//       { color: "Mix", size: "37", quantity: 20 },
//       { color: "Mix", size: "38", quantity: 20 },
//       { color: "Mix", size: "39", quantity: 20 },
//       { color: "Mix", size: "40", quantity: 20 },
//     ],
//   },
//   {
//     name: "Dép cao gót nữ",
//     price: 270000,
//     category: "Women",
//     imgpaths: [
//       "depcaogot-cam-1.jpg",
//       "depcaogot-cam-2.jpg",
//       "depcaogot-cam-2.jpg",
//     ],
//     details: [
//       { color: "Cam", size: "34", quantity: 10 },
//       { color: "Cam", size: "35", quantity: 10 },
//       { color: "Cam", size: "36", quantity: 10 },
//       { color: "Cam", size: "37", quantity: 20 },
//       { color: "Cam", size: "38", quantity: 20 },
//       { color: "Cam", size: "39", quantity: 20 },
//       { color: "Cam", size: "40", quantity: 20 },
//     ],
//   },
//   {
//     name: "Túi xách da thời trang nữ",
//     price: 400000,
//     category: "Women",
//     imgpaths: [
//       "tuixachda-den-1.jpg",
//       "tuixachda-den-2.jpg",
//       "tuixachda-den-3.jpg",
//     ],
//     details: [{ color: "Đen", size: null, quantity: 10 }],
//   },
//   {
//     name: "Túi xách thời trang nữ",
//     price: 650000,
//     category: "Women",
//     imgpaths: [
//       "tuixach-hong.jpg",
//       "tuixach-hong.jpg",
//       "tuixach-hong.jpg",
//     ],
//     details: [{ color: "Hồng", size: null, quantity: 10 }],
//   },
//   {
//     name: "Túi xách thời trang nữ",
//     price: 780000,
//     category: "Women",
//     imgpaths: [
//       "tuixachnutrangden.jpg",
//       "tuixachnutrangden.jpg",
//       "tuixachnutrangden.jpg",
//     ],
//     details: [{ color: "Trắng-Đen", size: null, quantity: 10 }],
//   },
//   {
//     name: "Dép bitis Dark Knight đen",
//     price: 120000,
//     category: "Men",
//     imgpaths: [
//       "bitis-darkknight-den.jpg",
//       "bitis-darkknight-den.jpg",
//       "bitis-darkknight-den.jpg",
//     ],
//     details: [
//       { color: "Đen", size: 30, quantity: 10 },
//       { color: "Đen", size: 33, quantity: 10 },
//       { color: "Đen", size: 34, quantity: 10 },
//       { color: "Đen", size: 37, quantity: 10 },
//       { color: "Đen", size: 39, quantity: 10 },
//       { color: "Đen", size: 40, quantity: 10 },
//       { color: "Đen", size: 41, quantity: 10 },
//       { color: "Đen", size: 42, quantity: 10 }
//     ],
//   },
// ]);
