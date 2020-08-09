const products = require("../models/Products");
module.exports = {
  getAllproduct: async (req, res, next) => {
    try {
      let query = products.find({ isDelete: "false" });
      if (req.body.name != "") {
        query.find({ name: { $regex: req.body.name, $options: "i" } });
      }
      if (req.body.color != null) {
        query.find({ color: { $regex: req.body.colorf, $options: "i" } });
      }
      query.sort({ _id: -1 });
      await query.exec((err, result) => {
        if (err) {
          res.status = 500;
          res.json(null);
        }
        res.status = 200;
        res.json(result);
      });
    } catch (error) {
      res.status = 500;
      res.json(error);
    }
  },
  getDetailProduct: async (req, res, next) => {
    if (req.params.id != null) {
      await products.findById(req.params.id, (err, result) => {
        if (err) {
          res.status(500);
          res.json(null);
        }
        if (result != undefined) {
          res.status(200);
          res.json(result);
        } else {
          res.status(404);
          res.json(null);
        }
      });
    }
    res.status(404);
    res.json(null);
  },
};
