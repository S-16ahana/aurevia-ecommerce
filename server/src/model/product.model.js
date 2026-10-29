import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
    },

    sizes: {
      type: [String],
      enum: ["S", "M", "L", "XL", "XXL"],
      default: [], //if not given value 
    },

    stock: {
      type: Number,
      required: true,
      default: 0,//if not given value 
      min: 0,//for not negative value 
    },
  },
  { timestamps: true },// for the createdAT and updatedAt
);

const Product = mongoose.model("Product", productSchema);

export default Product;
