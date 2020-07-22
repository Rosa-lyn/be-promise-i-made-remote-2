const express = require("express");
const apiRouter = express.Router();
const albumsRouter = require("./albumsRouter");
const songsRouter = require("./songsRouter");

apiRouter.use("/albums", albumsRouter);
//apiRouter.use("/songs", songsRouter);

apiRouter.use("/songs", songsRouter);

module.exports = apiRouter;
