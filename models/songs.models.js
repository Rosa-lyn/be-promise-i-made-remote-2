const axios = require("axios");

const fetchAllSongs = () => {
  return axios
    .get("https://nc-spotify-jams.herokuapp.com/api/songs")
    .then((result) => {
      const formattedSongs = [];
      result.data.songs.forEach((song) => {
        const returnSong = {};
        returnSong.song_id = song.song_id;
        returnSong.title = song.title["en-GB"];
        returnSong.artist_id = song.artist_id;
        returnSong.album_id = song.album_id;
        returnSong.current_chart_position = song.chart_position.current;
        formattedSongs.push(returnSong);
      });
      return formattedSongs;
    })
    .catch((err) => {
      let error = {};
      error.status = err.response.status;
      error.msg = err.response.statusText;
      console.log({ error });
    });
};

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
