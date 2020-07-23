const { fetchAllSongs, fetchSongById } = require("../models/songs.models");

const getAllSongs = (req, res, next) => {
  const query = req.query;
  fetchAllSongs(query)
    .then((songs) => {
      res.send({ songs });
    })
    .catch((err) => {
      next(err);
    });
};

const getSongById = (req, res, next) => {
  const song_id = req.params.song_id;
  fetchSongById(song_id)
    .then((song) => {
      res.send(song);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { getAllSongs, getSongById };
