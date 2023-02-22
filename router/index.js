const { getAllProduct , createProduct , updateProduct ,
     deleteProductById , getProductById ,deleteProductAll ,
      findProductByName } = require("../controller/index");

const { Login, Signup , Profile , userRefreshToken }= require("../controller/user");
const { Middleware } = require("../middleware/index");
const express = require("express");
const router = express.Router();

router.get("/api/productAll/", getAllProduct)
router.get("/api/product/:slug", getProductById)
router.post("/api/createProduct", createProduct)
router.delete("/api/deleteProductAll", deleteProductAll)
router.post("/api/login", Login)
router.post("/api/signup", Signup)
router.put("/api/updateProduct/", updateProduct)
router.delete("/api/deleteProduct/:id", deleteProductById)
router.get("/api/profile", Middleware, Profile)
router.post("/api/refresh-token", userRefreshToken)
router.get("/api/search", findProductByName)


module.exports = router;