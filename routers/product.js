import express from "express";
import Products from "../controllers/product.js";
const router = express.Router();

router.get("/", Products.getProducts);

router.get("/:id", Products.getProductById);

router.post("/", Products.postProduct);

router.put("/:id", Products.putProduct);

router.delete("/:id", Products.deleteProduct);

export default router;
