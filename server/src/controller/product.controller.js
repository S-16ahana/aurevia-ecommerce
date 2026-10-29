
import Product from "../model/product.model.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    return res.status(201).json({
      message: "New Product Created Successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default createProduct;
