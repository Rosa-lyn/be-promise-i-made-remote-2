const { fetchAllSongs, fetchMatchingSongs } = require("../models/songs.models");

const getAllSongs = (req, res) => {
  const keyArr = Object.keys(req.query);
  if (keyArr.length === 0) {
    fetchAllSongs().then((songs) => {
      res.send({ songs });
    });
  } else {
    const valuesArr = keyArr.map((key) => {
      return req.query[key].replace(" ", "%20");
    });
    fetchMatchingSongs(keyArr, valuesArr).then((songs) => {
      res.send({ songs });
    });
  }
};

module.exports = { getAllSongs };
