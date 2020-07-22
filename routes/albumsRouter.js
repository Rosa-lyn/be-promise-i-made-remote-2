const express = require("express");

const { getAllAlbums } = require("../controllers/albums.controllers");

const albumsRouter = express.Router();

albumsRouter.get("", getAllAlbums);

module.exports = albumsRouter;
