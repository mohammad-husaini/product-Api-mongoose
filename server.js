import mongoose from "mongoose";
import express from "express";
import userRouters from "./routers/user.js";
import productRouters from "./routers/product.js";
import "dotenv/config";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/users", userRouters);
app.use("/product", productRouters);
app.use("/", (req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
