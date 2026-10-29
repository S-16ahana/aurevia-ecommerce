import express, { json } from "express";
import router from "../routes/product.route.js";
const app = express();

app.get("/", (req, res) => {
  res.send("get api");
});

app.use(express.json());

app.use("/api/products", router);

export default app;
