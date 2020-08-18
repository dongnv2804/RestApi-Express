const express = require("express");
const router = express.Router();
const userServices = require("../services/cartServices");
const cartServices = require("../services/cartServices");
router.get("/", cartServices.checkCartEmpty, cartServices.getCartDetail);
router.post("/addtocart", cartServices.addToCart);
router.post(
  "/updatecart",
  cartServices.checkCartEmpty,
  cartServices.updateCart
);
router.post(
  "/deleteitem",
  cartServices.checkCartEmpty,
  cartServices.deleteItem
);
module.exports = router;
