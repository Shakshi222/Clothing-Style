const express = require("express");

const {
  addProductReview,
  getProductReviews,
} = require("../../acsees/shops/pro-rev");

const router = express.Router();

router.post("/add", addProductReview);
router.get("/:productId", getProductReviews);

module.exports = router;