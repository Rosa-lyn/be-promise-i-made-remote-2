const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();

app.use("/api", apiRouter);

module.exports = app;

/*
1. GET all albums
- This route will not accept any queries.
- Once you have the albums back from "Spotify" (AKA: `nc-spotify-jams`), you will need to format the data so that your response fits the following format:
```json
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
