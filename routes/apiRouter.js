const express = require("express");
const albumsRouter = require("./albumsRouter");
const apiRouter = express.Router();

apiRouter.use("/albums", albumsRouter);

module.exports = apiRouter;
