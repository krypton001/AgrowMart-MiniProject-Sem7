const express = require("express");
const { addReview } = require("./review.controller");
const reviewRouter = express.Router();
reviewRouter.post("/", addReview);
module.exports = reviewRouter;
