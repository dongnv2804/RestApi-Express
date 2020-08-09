const express = require("express");
const router = express.Router();
const userServices = require("../services/cartServices");
router.use("/adduser", userServices.createUser);
module.exports = router;
