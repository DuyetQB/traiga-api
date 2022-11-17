const { getAllProduct , createProduct } = require("../controller/index");
const express = require("express");
const router = express.Router();

router.get("/api/productAll", getAllProduct)

router.post("/api/createProduct", createProduct)


module.exports = router;