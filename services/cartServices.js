const Users = require("../models/Users");
const products = require("../models/Products");
module.exports = {
  checkCartEmpty: (req, res, next) => {
    if (req.signedCookies.carts) {
      next();
    } else {
      return res.status(200).json(null);
    }
  },
  getCartDetail: (req, res, next) => {
    try {
      return res.status(200).json(req.signedCookies.carts);
    } catch (error) {
      return res.status(500).json({ status: error });
    }
  },
  addToCart: async (req, res, next) => {
    let { id, name, imgpath, size, color, price, quantity } = req.body;
    try {
      let flag = false;
      let carts =
        req.signedCookies.carts != undefined ? req.signedCookies.carts : [];
      await carts.map((value) => {
        if (value.id == id && value.size == size && value.color == color) {
          value.quantity = parseInt(value.quantity) + parseInt(quantity);
          // res.cookie("carts", carts, {
          //   httpOnly: true,
          //   signed: true,
          // });
          flag = true;
        }
      });
      if (flag != true) {
        await carts.push({ id, name, imgpath, size, color, price, quantity });
      }
      res.cookie("carts", carts, {
        httpOnly: true,
        signed: true,
      });
      return res.status(201).json({ status: "add to cart succesfull" });
    } catch (error) {
      return res.status(500).json({ status: error });
    }
  },
  deleteItem: async (req, res, next) => {
    let body = req.body;
    try {
      let carts =
        req.signedCookies.carts != undefined ? req.signedCookies.carts : [];
      carts = await carts.filter(
        (value) =>
          value.id != body.id &&
          value.size != body.size &&
          value.color != body.color
      );
      res.cookie("carts", carts, {
        httpOnly: true,
        signed: true,
      });
      return res.status(200).json({ status: true });
    } catch (error) {
      return res.status(500).json({ status: false });
    }
  },
};
