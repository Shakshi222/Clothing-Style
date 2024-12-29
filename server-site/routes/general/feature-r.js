const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
} = require("../../acsees/general/com");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);

module.exports = router;