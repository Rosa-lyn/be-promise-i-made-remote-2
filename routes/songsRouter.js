const express = require("express");
const songsRouter = express.Router();
const { getAllSongs } = require("../controllers/songs.controllers");

songsRouter.get("", getAllSongs);

//songsRouter.get("/?title=", getMatchingTitles);

//songsRouter.get(":?title", getMatchingTitles);

module.exports = songsRouter;

/*
### 2.b Add some extra functionality to this endpoint to allow the user to pass a query and therefore filter the results that are sent back.
Your endpoint should be able to accept the following queries:
- `?title` - think how you can account for spaces in your query
- `?artist_id`
- `?album_id`
- `?current_chart_position`

* _NOTE: treat this task as if you were using a production database with millions of entries. Be wary of fetching too much data just to filter it down. Consider what queries the server we are contacting can take._


*/
