const Users = require("../models/Users");
const products = require("../models/Products");
module.exports = {
  checkCartEmpty: (req, res, next) => {
    if (req.session.carts) {
      next();
    } else {
      return res.status(404).json(null);
    }
  },
  getCartDetail: (req, res, next) => {
    try {
      return res.status(200).json(req.session.carts);
    } catch (error) {
      return res.status(500).json({ status: error });
    }
  },
  addToCart: async (req, res, next) => {
    let { id, size, color, price, quantity } = req.body;
    try {
      if (req.session.carts) {
        await req.session.carts.map((value) => {
          if (value.id == id && value.size == size && value.color == color) {
            value.quantity = parseInt(value.quantity) + parseInt(quantity);
            return res.status(201).json({ status: "add to cart succesful" });
          }
        });
        req.session.carts.push({ id, size, color, quantity });
        return res.status(201).json({ status: "add to cart succesful" });
      } else {
        req.session.carts = [];
        req.session.carts.push({ id, size, color, price, quantity });
        return res.status(201).json({ status: "add to cart succesful" });
      }
    } catch (error) {
      return res.status(500).json({ status: error });
    }
  },
  deleteItem: async (req, res, next) => {
    let { id, size, color } = req.body;
    try {
      req.session.carts = await req.session.carts.filter(
        (value) => value.id != id && value.size != size && value.color != color
      );
      return res.status(200).json({ status: true });
    } catch (error) {
      return res.status(500).json({ status: false });
    }
  },
};
