const { fetchAllSongs } = require("../models/songs.models");

const getAllSongs = (req, res) => {
  console.log(req);
  fetchAllSongs().then((songs) => {
    res.send({ songs });
  });
};

// const getMatchingTitles = (req, res) => {
//   console.log(req.params);
//   const query = req.params;
//   fetchMatchingSongs();
// };

module.exports = { getAllSongs };
