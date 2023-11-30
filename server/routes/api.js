const express = require("express");

const apiRouter = express.Router();

const authRouter = require("./auth/auth.router");
const reviewRouter = require("./review/review.router");
const orderRouter = require("./order/order.router");

apiRouter.use("/auth", authRouter);
apiRouter.use("/review", reviewRouter);
apiRouter.use("/order", orderRouter);

module.exports = apiRouter;
