const { getAllProduct , createProduct , updateProduct , deleteProduct , getProductById ,deleteProductAll } = require("../controller/index");

const { Login, Signup , Profile }= require("../controller/user");
const { Middleware } = require("../middleware/index");
const express = require("express");
const router = express.Router();

router.get("/api/productAll/", getAllProduct)
router.get("/api/product/:slug", getProductById)
router.post("/api/createProduct", createProduct)
router.delete("/api/deleteProductAll", deleteProductAll)
router.post("/api/login", Login)
router.post("/api/signup", Signup)
router.patch("/api/updateProduct/:slug", updateProduct)
router.post("/api/deleteProduct/:id", deleteProduct)
router.get("/api/profile", Middleware, Profile)

module.exports = router;