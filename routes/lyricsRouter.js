const express = require("express");
const lyricsRouter = express.Router();
const { getLyricsById } = require("../controllers/lyrics.controllers");

lyricsRouter.get("/:song_id", getLyricsById);

module.exports = lyricsRouter;

//our api:
///api/songs/lyrics/:songname

//getting from NC api:
//https://nc-spotify-jams.herokuapp.com/api/lyrics/:song_id
