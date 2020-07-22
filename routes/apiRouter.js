const express = require("express");
const albumsRouter = require("./albumsRouter");
const songsRouter = require("./songsRouter");

const apiRouter = express.Router();

apiRouter.use("/albums", albumsRouter);
apiRouter.use("/songs", songsRouter);

module.exports = apiRouter;
