const Users = require("../models/Users");
module.exports = {
  setSession: (req, res, next) => {
    req.session.cart = [
      {
        productId: "1",
        size: "S",
        color: "Blue",
        quantity: 3,
      },
    ];
    return res.status(201).json({ status: "create cart successful" });
  },
  getSession: (req, res, next) => {
    if (req.session.cart) {
      return res.status(200).json(req.session.cart);
    } else {
      return res.status(400).json({ message: "cart is empty" });
    }
  },
};
