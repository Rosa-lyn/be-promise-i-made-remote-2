const axios = require("axios");

const fetchAllSongs = ({
  title,
  artist_id,
  album_id,
  current_chart_position,
}) => {
  return axios
    .get(`https://nc-spotify-jams.herokuapp.com/api/songs`, {
      params: { title, artist_id, album_id, current_chart_position },
    })
    .then((result) => {
      const formattedSongs = result.data.songs.map(
        ({ title, chart_position, ...song }) => {
          song.title = title["en-GB"];
          song.current_chart_position = chart_position.current;
          return song;
        }
      );
      return formattedSongs;
    })
    .catch((err) => {
      const error = {};
      error.status = err.response.status;
      error.msg = err.response.statusText;
      console.log({ error });
    });
};

const fetchSongById = (song_id) => {
  // console.log(song_id, "song_id");
  axios
    .get(`https://nc-spotify-jams.herokuapp.com/api/songs/${song_id}`)
    .then((song) => {
      console.log(song.data);
      return song.data;
    });
};

module.exports = { fetchAllSongs, fetchSongById };
