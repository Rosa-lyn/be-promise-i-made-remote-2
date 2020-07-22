const axios = require("axios");

const fetchAllAlbums = () => {
  return axios
    .get("https://nc-spotify-jams.herokuapp.com/api/albums")
    .then((result) => {
      const formattedAlbums = [];
      result.data.albums.forEach((album) => {
        const returnAlbum = {};
        returnAlbum.title = album.title;
        returnAlbum.artwork = album.artwork;
        formattedAlbums.push(returnAlbum);
      });
      return formattedAlbums;
    })
    .catch((err) => {
      const error = {};
      error.status = err.response.status;
      error.msg = err.response.statusText;
      console.log({ error });
    });
};

module.exports = { fetchAllAlbums };
