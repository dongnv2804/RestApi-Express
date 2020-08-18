const express = require("express");
const router = express.Router();
const productSerives = require("../services/productServices");
const productServices = require("../services/productServices");
/* GET home page. */
router.get("/", productSerives.getAllproduct);
router.get("/create", productSerives.create);
router.get("/getdetailproduct/:id", productServices.getDetailProduct);
router.get("/getcolorbyid/:id", productSerives.getListColorByProductID);
module.exports = router;
