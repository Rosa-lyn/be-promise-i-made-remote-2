const { fetchAllSongs, fetchSongById } = require("../models/songs.models");

const getAllSongs = (req, res) => {
  //   const keyArr = Object.keys(req.query);
  const query = req.query;
  fetchAllSongs(query).then((songs) => {
    res.send({ songs });
  });
};

const getSongById = (req, res) => {
  const { song_id } = req.params;
  //   console.log(song_id);
  fetchSongById(song_id).then((song) => {
    res.send({ song });
  });
};

module.exports = { getAllSongs, getSongById };
