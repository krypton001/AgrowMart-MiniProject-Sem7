const express = require("express");

const apiRouter = express.Router();

const authRouter = require("./auth/auth.router");
apiRouter.use("/auth", authRouter);

module.exports = apiRouter;
