const express = require("express");

const { searchProducts } = require("../../acsees/shops/search");

const router = express.Router();

router.get("/:keyword", searchProducts);

module.exports = router;