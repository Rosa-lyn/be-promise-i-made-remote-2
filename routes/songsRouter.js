const express = require("express");
const songsRouter = express.Router();
const { getAllSongs } = require("../controllers/songs.controllers");

songsRouter.get("", getAllSongs);

module.exports = songsRouter;
