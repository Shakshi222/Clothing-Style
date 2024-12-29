const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/authority/auth-r");
const adminProductsRouter = require("./routes/admin/product-r");
const adminOrderRouter = require("./routes/admin/order-r");

const shopProductsRouter = require("./routes/shops/produc-r");
const shopCartRouter = require("./routes/shops/cart-r");
const shopAddressRouter = require("./routes/shops/adres-r");
const shopOrderRouter = require("./routes/shops/order-r");
const shopSearchRouter = require("./routes/shops/search-r");
const shopReviewRouter = require("./routes/shops/review-r");

const commonFeatureRouter = require("./routes/general/feature-r");


mongoose
  .connect("db_url")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/authority", authRouter);
app.use("/api/admin/product", adminProductsRouter);
app.use("/api/admin/order", adminOrderRouter);

app.use("/api/shops/product", shopProductsRouter);
app.use("/api/shops/cart", shopCartRouter);
app.use("/api/shops/adres", shopAddressRouter);
app.use("/api/shops/order", shopOrderRouter);
app.use("/api/shops/search", shopSearchRouter);
app.use("/api/shops/review", shopReviewRouter);

app.use("/api/general/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));