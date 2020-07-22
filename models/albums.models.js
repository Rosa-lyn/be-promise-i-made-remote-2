const axios = require("axios");

const fetchAllAlbums = () => {
  return axios
    .get("https://nc-spotify-jams.herokuapp.com/api/albums")
    .then((result) => {
      return result.data;
    });
};

module.exports = { fetchAllAlbums };
