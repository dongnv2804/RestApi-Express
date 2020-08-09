const express = require("express");
const router = express.Router();
const productSerives = require("../services/productServices");
/* GET home page. */
router.get("/", productSerives.getAllproduct);
module.exports = router;
