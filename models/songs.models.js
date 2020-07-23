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
    });
};

const fetchSongById = (song_id) => {
  return axios
    .get(`https://nc-spotify-jams.herokuapp.com/api/songs/${song_id}`)
    .then((result) => {
      const { title, chart_position, ...song } = result.data.song;
      song.title = title["en-GB"];
      song.current_chart_position = chart_position.current;
      return song;
    });
};

module.exports = { fetchAllSongs, fetchSongById };
