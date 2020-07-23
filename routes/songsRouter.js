const express = require("express");
const songsRouter = express.Router();
const {
  getAllSongs,
  getSongById,
} = require("../controllers/songs.controllers");

songsRouter.get("", getAllSongs);
songsRouter.get("/:song_id", getSongById);

module.exports = songsRouter;
