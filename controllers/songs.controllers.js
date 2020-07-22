const { fetchAllSongs, fetchMatchingSongs } = require("../models/songs.models");

const getAllSongs = (req, res) => {
  //console.log(req);
  const queriesArr = Object.keys(req.query);
  //   queriesArr.forEach((key) => {
  const value = req.query[queriesArr[0]].replace(" ", "%20");
  //   console.log(value);
  fetchMatchingSongs(queriesArr[0], value).then((songs) => {
    res.send({ songs });
  });
  //   });
  if (queriesArr.length === 0) {
    fetchAllSongs().then((songs) => {
      res.send({ songs });
    });
  }
};

// const getMatchingTitles = (req, res) => {
//   console.log(req.params);
//   const query = req.params;
//   fetchMatchingSongs();
// };

module.exports = { getAllSongs };
