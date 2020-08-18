const express = require("express");
const router = express.Router();
const productSerives = require("../services/productServices");
const productServices = require("../services/productServices");
/* GET home page. */
router.get("/", productSerives.getAllproduct);
router.post("/", productSerives.getAllproductWithFilter);
router.get("/create", productSerives.create);
router.get("/:id", productServices.getDetailProduct);
module.exports = router;
