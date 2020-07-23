const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  res.status(err.response.status).send({ msg: err.response.statusText });
});

module.exports = app;

/*



*/

/*
Endpoints
The following endpoints are available on this api.
> GET /api/songs
> GET /api/songs/:song_id
> PATCH /api/songs/:song_id
> GET /api/albums
> POST /api/albums
> GET /api/albums/:album_id
> GET /api/artists
> GET /api/artists/:artist_id
> GET /api/lyrics/:song_id
> GET /api/analyses/:song_id

Further Info
> /api/songs - accepts the following queries:

album_id, artist_id, title, current_chart_position, entered_at_chart_position
> /api/songs/:song_id - for a PATCH method on this endpoint, your request body should take the form

{
current_chart_position: 3
}
> /api/albums - for a POST method on this endpoint, your request body should take the form

{
artist_id: 7,
title: 'Album Title',
artwork: 'link-to-album-art.com'
}

*/
