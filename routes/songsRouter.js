const express = require("express");
const songsRouter = express.Router();
const {
  getAllSongs,
  getSongById,
  getLyricsByTitle,
} = require("../controllers/songs.controllers");

songsRouter.get("", getAllSongs);
songsRouter.get("/:song_id", getSongById);
songsRouter.get("/lyrics/:title", getLyricsByTitle);

module.exports = songsRouter;
