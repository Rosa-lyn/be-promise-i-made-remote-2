//require in the models

const { fetchAllAlbums } = require("../models/albums.models.js");

const getAllAlbums = (req, res) => {
  fetchAllAlbums().then((albums) => {
    res.send(albums);
  });
};

module.exports = { getAllAlbums };
