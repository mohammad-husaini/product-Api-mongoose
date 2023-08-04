import Product from "../models/product.js";
import mongoose from "mongoose";
const getProducts = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const totalPages = Math.ceil((await Product.count()) / pageSize);

    const products = await Product.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    res
      .status(200)
      .json([
        `Page Number : ${page} `,
        `Page Size : ${pageSize}`,
        `Total Page : ${totalPages}`,
        products,
      ]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send("ID unknown : " + id);
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postProduct = async (req, res) => {
  try {
    if (req.body.product_name && req.body.product_name.length > 3) {
      const product = await Product.create(req.body);
      res.json(product);
    } else {
      return res.status(409).json({
        error: "product name is required and must be at least 3 characters",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putProduct = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send("ID unknown : " + id);
  try {
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json(`successfully Updated : ${product} `);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send("ID unknown : " + id);
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(`successfully deleted : ${product.product_name} `);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getProducts,
  postProduct,
  deleteProduct,
  putProduct,
  getProductById,
};
