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

const fetchMatchingSongs = (keyArr, valuesArr) => {
  const searchString = `https://nc-spotify-jams.herokuapp.com/api/songs?${keyArr[0]}=${valuesArr[0]}`;

  return axios.get(searchString).then((result) => {
    const formattedSongs = result.data.songs.map(
      ({ title, chart_position, ...song }) => {
        song.title = title["en-GB"];
        song.current_chart_position = chart_position.current;
        return song;
      }
    );
    if (keyArr.length === 1) return formattedSongs;
    else if (keyArr.length === 2) {
      const filteredArray = formattedSongs.filter((song) => {
        return song[keyArr[1]] == valuesArr[1];
      });
      return filteredArray;
    }
  });
};

module.exports = { fetchAllSongs, fetchMatchingSongs };
