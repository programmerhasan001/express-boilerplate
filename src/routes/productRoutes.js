const { Router } = require("express");
const { createProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const router = Router();

router.get("/get-product", getProduct)
router.post("/create-product", createProduct)
router.put("/update-product", updateProduct)
router.delete("/delete-product", deleteProduct)

module.exports = router;
