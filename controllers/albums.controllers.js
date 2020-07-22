const { fetchAllAlbums } = require("../models/albums.models.js");

const getAllAlbums = (req, res) => {
  fetchAllAlbums().then((albums) => {
    res.send({ albums });
  });
};

module.exports = { getAllAlbums };
/*
{
  "albums": [
    {
      "title": "10 Years of Akala",
      "artwork": "http://images.genius.com/bd174bbb42265536ee1741370f5dc593.600x600x1.jpg"
    },
    {
      "title": "I Am... Sasha Fierce",
      "artwork": "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    ...
  ]
}
*/
