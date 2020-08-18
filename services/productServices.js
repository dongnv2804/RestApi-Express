const products = require("../models/Products");
module.exports = {
  create: async (req, res, next) => {
    const data = [
      {
        name: "Áo kẻ caro Gumac AA646",
        price: 290000,
        category: "Women",
        imgpaths: [
          "GUMAC-AA646-1.jpg",
          "GUMAC-AA646-2.jpg",
          "GUMAC-AA646-3.jpg",
        ],
        details: [
          { color: "Caro", size: "L", quantity: 10 },
          { color: "Caro", size: "XL", quantity: 20 },
        ],
      },
      {
        name: "Áo thun đen Gumac AA646",
        price: 170000,
        category: "Women",
        imgpaths: [
          "GumacAT12938-1.jpg",
          "GumacAT12938-2.jpg",
          "GumacAT12938-3.jpg",
          "GumacAT12938-4.jpg",
        ],
        details: [
          { color: "Đen", size: "L", quantity: 10 },
          { color: "Đen", size: "XL", quantity: 20 },
        ],
      },
      {
        name: "Sơ mi trắng nữ OEM",
        price: 300000,
        category: "Women",
        imgpaths: [
          "somi-OEM-1.jpg",
          "somi-OEM-2.jpg",
          "somi-OEM-3.jpg",
          "somi-OEM-1.jpg",
        ],
        details: [
          { color: "Trắng", size: "L", quantity: 10 },
          { color: "Trắng", size: "XL", quantity: 20 },
          { color: "Trắng", size: "M", quantity: 20 },
        ],
      },
      {
        name: "Sơ mi đen nam KOJIBA",
        price: 300000,
        category: "Men",
        imgpaths: [
          "sominam-KOJIBA-1.jpg",
          "sominam-KOJIBA-2.jpg",
          "sominam-KOJIBA-3.jpg",
        ],
        details: [
          { color: "Đen", size: "L", quantity: 10 },
          { color: "Đen", size: "XL", quantity: 20 },
          { color: "Đen", size: "M", quantity: 20 },
        ],
      },
      {
        name: "Đồng hồ CUENACU8899",
        price: 500000,
        category: "Watch",
        imgpaths: [
          "CUENACU8899-1.jpg",
          "CUENACU8899-2.jpg",
          "CUENACU8899-3.jpg",
        ],
        details: [{ color: "Trắng-xanh", size: "44mm", quantity: 10 }],
      },
      {
        name: "Giày Bitis nữ",
        price: 350000,
        category: "Women",
        imgpaths: [
          "giaynu-7mau-1.jpg",
          "giaynu-7mau-2.jpg",
          "giaynu-7mau-3.jpg",
          "giaynu-7mau-4.jpg",
        ],
        details: [
          { color: "Mix", size: "36", quantity: 10 },
          { color: "Mix", size: "37", quantity: 20 },
          { color: "Mix", size: "38", quantity: 20 },
          { color: "Mix", size: "39", quantity: 20 },
          { color: "Mix", size: "40", quantity: 20 },
        ],
      },
      {
        name: "Dép cao gót nữ",
        price: 270000,
        category: "Women",
        imgpaths: [
          "depcaogot-cam-1.jpg",
          "depcaogot-cam-2.jpg",
          "depcaogot-cam-2.jpg",
        ],
        details: [
          { color: "Cam", size: "34", quantity: 10 },
          { color: "Cam", size: "35", quantity: 10 },
          { color: "Cam", size: "36", quantity: 10 },
          { color: "Cam", size: "37", quantity: 20 },
          { color: "Cam", size: "38", quantity: 20 },
          { color: "Cam", size: "39", quantity: 20 },
          { color: "Cam", size: "40", quantity: 20 },
        ],
      },
      {
        name: "Dép bitis Dark Knight đen",
        price: 120000,
        category: "Men",
        imgpaths: [
          "bitis-darkknight-den.jpg",
          "bitis-darkknight-den.jpg",
          "bitis-darkknight-den.jpg",
        ],
        details: [
          { color: "Đen", size: 30, quantity: 10 },
          { color: "Đen", size: 33, quantity: 10 },
          { color: "Đen", size: 34, quantity: 10 },
          { color: "Đen", size: 37, quantity: 10 },
          { color: "Đen", size: 39, quantity: 10 },
          { color: "Đen", size: 40, quantity: 10 },
          { color: "Đen", size: 41, quantity: 10 },
          { color: "Đen", size: 42, quantity: 10 },
        ],
      },
      {
        name: "Đầm xòe Gumac GMA0131",
        price: 200000,
        category: "Women",
        imgpaths: [
          "damxoeGUMAC.jpg",
          "damxoeGUMAC2.jpg",
          "damxoeGUMAC3.jpg",
          "damxoeGUMAC4.jpg",
        ],
        details: [{ color: "Trắng", size: "L", quantity: 10 }],
      },
    ];
    let promise = products.create(data);
    (await promise).save;
    return res.status(200).json(data);
  },
  getAllproductWithFilter: async (req, res, next) => {
    try {
      let query = products.find({ isDelete: "false" });
      if (req.body.name) {
        query.find({ name: { $regex: req.body.name, $options: "i" } });
      }
      if (req.body.color) {
        query.find({ color: { $regex: req.body.color, $options: "i" } });
      }
      query.sort({ _id: -1 });
      await query.exec((err, result) => {
        if (err) {
          return res.status(200).json(null);
        } else {
          return res.status(200).json(result);
        }
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  getAllproduct: async (req, res, next) => {
    try {
      await products.find({ isDelete: "false" }, (err, result) => {
        if (err) {
          return res.status(500).json(null);
        }
        return res.status(200).json(result);
      });
    } catch (error) {
      return res.status(500).json(null);
    }
  },
  getDetailProduct: async (req, res, next) => {
    if (req.params.id) {
      await products.findById(req.params.id, (err, result) => {
        if (err) {
          return res.status(500).json(null);
        }
        return res.status(200).json(result);
      });
    }
    return res.status(404).json(null);
  },
};
