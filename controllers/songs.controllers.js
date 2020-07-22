const { fetchAllSongs } = require("../models/songs.models");

const getAllSongs = (req, res) => {
  fetchAllSongs().then((songs) => {
    res.send({ songs });
  });
};

module.exports = { getAllSongs };
