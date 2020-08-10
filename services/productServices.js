const products = require("../models/Products");
module.exports = {
  getAllproduct: async (req, res, next) => {
    try {
      let query = products.find({ isDelete: "false" });
      if (req.body.name != "") {
        query.find({ name: { $regex: req.body.name, $options: "i" } });
      }
      if (req.body.color != null) {
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
  getDetailProduct: async (req, res, next) => {
    if (req.params.id != null) {
      await products.findById(req.params.id, (err, result) => {
        if (err) {
          return res.status(500).json(null);
        }
        if (result != undefined) {
          return res.status(200).json(result);
        } else {
          return res.status(404).json(null);
        }
      });
    }
    return res.status(404).json(null);
  },
};
