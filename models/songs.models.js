const axios = require("axios");

const fetchAllSongs = () => {
  return axios
    .get("https://nc-spotify-jams.herokuapp.com/api/songs")
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

// const fetchMatchingSongs = () => {

// }

module.exports = { fetchAllSongs };

/* 
{
    song_id: 1,
    title: { 'en-GB': 'Find No Enemy' },
    artist_id: 2,
    album_id: 1,
    chart_position: { current: 5, entered_at: 5 }
  },
  */
