const { getAllProduct ,getPrivateAllProduct, createProduct , updateProduct ,
     deleteProductById , getProductById ,deleteProductAll ,
      findProductByName} = require("../controller/index");
      
const { Login, Signup , Profile , userRefreshToken, UpDateProfile }= require("../controller/user");
const { Middleware } = require("../middleware/index");
const express = require("express");
const router = express.Router();

// router.get("/api/public-getAllProduct", getAllProduct)
router.get("/api/private-getAllProduct",Middleware, getPrivateAllProduct)
router.get("/api/product/:slug", getProductById)
router.post("/api/createProduct",Middleware, createProduct)
router.delete("/api/deleteProductAll",Middleware, deleteProductAll)
router.post("/api/login", Login)
router.post("/api/signup", Signup)
router.put("/api/updateProduct/",Middleware, updateProduct)
router.delete("/api/deleteProduct/:id",Middleware, deleteProductById)
router.get("/api/profile", Profile)
router.get("/api/update-profile/:id",UpDateProfile)
router.post("/api/refresh-token", userRefreshToken)
router.get("/api/search", findProductByName)


module.exports = router;