# Promises, Promises

You are in charge of creating a new, improved version of Spotify. 🎶

You will be creating an api built upon "Spotify data" which will allow users to request all kinds of information (song lyrics, album artworks, and more) about some of the greatest musical works of the modern era. You will also add some new services like analysing song lyrics, and allowing users to place their favourite songs at number 1 in the charts.

To achieve this, you have an api serving you Spotify data (our very own `nc-spotify-jams`). This api serves up songs, albums, artists and more - all the info you'll need for _your_ api. You can use a variety of HTTP methods - `GET`/`POST`/`PATCH` - across the available endpoints on this api. The api that _you_ will build should interact with `nc-spotify-jams` by making requests to it using the promise-based library [`axios`](https://github.com/axios/axios).

> You will find that the data which comes back from `nc-spotify-jams` will be in an overly-complicated structure. You will need to ensure you are **sending back the data in the correct format as written in this README.**

When constructing your api, you should frequently check that your responses are in the appropriate by making requests to your API through Insomnia.

## DAY 1

To get started go to the [nc-spotify server](https://nc-spotify-jams.herokuapp.com/) and get familiar with the endpoints available. On the site there is a readme to help navigate around the endpoints.

### 1. GET all albums

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
```

### 2.a GET all songs.

- Again, ensure that the songs you respond with are formatted in the same way as outlined below:

```json
{
  "songs": [
    {
      "song_id": 1,
      "title": "Find No Enemy",
      "artist_id": 1,
      "album_id": 0,
      "current_chart_position": 0
    },
    {
      "song_id": 2,
      "title": "Baby Shark",
      "artist_id": 2,
      "album_id": 3,
      "current_chart_position": 0
    },
    ...
  ]
}
```

### 2.b Add some extra functionality to this endpoint to allow the user to pass a query and therefore filter the results that are sent back.

Your endpoint should be able to accept the following queries:

- `?title` - think how you can account for spaces in your query
- `?artist_id`
- `?album_id`
- `?current_chart_position`

* _NOTE: treat this task as if you were using a production database with millions of entries. Be wary of fetching too much data just to filter it down. Consider what queries the server we are contacting can take._

ADVANCED: Make this endpoint chainable (e.g. `album_id` AND `current_chart_position`)

- _HINT: if are doing the advanced option have a look at the [axios documentation](https://github.com/axios/axios#example) for making requests with queries._

```json
// ?album_id=3
{
  "songs": [
    {
      "song_id": 2,
      "title": "Baby Shark",
      "artist_id": 4,
      "album_id": 3,
      "current_chart_position": 22
    }
  ]
}
```

### 3a. GET song by its id

- This endpoint should take a _song id_ in the url as a parametric endpoint

```json
{
  "song": {
    "song_id": 1,
    "title": "Find No Enemy",
    "artist_id": 1,
    "album_id": 1,
    "current_chart_position": 5
  }
}
```

### 3b. If no track is found e.g. when you search for something that isn't already in the list of songs, send the client back a 404 HTTP status and response

```json
// status 404 and
{
  "msg": "Song not found!";
}
```

### 4. GET lyrics for a song by its title.

- This endpoint should take a _song title_ in the url as a parametric endpoint
- _HINT: to request the lyrics you must know the song's id first_
- This endpoint should also include the song title onto the response body

```json
{
  "song": "Baby Shark",
  "lyrics": "Baby Shark, doo doo doo doo..."
}
```

### 5. GET analysis for a song

- This endpoint should take a _song title_ in the url as a parametric endpoint
- _HINT: to request a song's analysis of you must know the song's id first_

```json
{
  "song": "Single Ladies",
  "analysis": {
    "joy": 0.85,
    "fear": 0.28,
    "sadness": 0.31
  }
}
```

### 6. POST an album

- This endpoint should take an album title, an artist_id, and a string of the album artwork on the request body, i.e. it must be of the form:

```json
{
  "title": "Excellent Album Title",
  "artist_id": 3,
  "artwork": "https://bit.ly/2QAbhbA"
}
```

- You should validate information from the user is correct before posting. If things go terribly wrong tutors can reset the database from scratch so let them know!

- **NOTE**: the `artist_id` must be one that already exists on the api. Otherwise you will get an error!

- You should send an appropriate status code to the client with a response like below:

```json
{
  "album": {
    "album_id": 5,
    "title": "Excellent Album Title",
    "artist_id": 3,
    "artwork": "https://bit.ly/2QAbhbA",
    "added": true
  }
}
```

### 7. PATCH a song's chart position

- This endpoint should take song identifier as a parametric value in the url and a value to change the chart position by on the request body, e.g.

```json
{
  "current_chart_position": 2
}
```

- _HINT: to use `patch` on `nc-spotify-jams`, you must use a parametric request (:id) and not a query_
- _HINT: on success the `nc-spotify-jams` responds with the updated object_

Your client response should be formatted as such:

```json
{
  "song": {
    "title": "Single Ladies",
    "artist": "Beyonce",
    "album": 1,
    "current_chart_position": 2
  }
}
```

### 8. Error handling - You should now go back and utilise error handling middleware and `.catch` to send tailored error messages to your user should something go wrong

Some example errors that could occur:

- `GET /api/tracks/track_that_doesnt_exist` - 404
- POST or PATCH with incorrect information on the request body: Wrong/missing keys and/or incorrect values!

## DAY 2 - Using Promise.all

### 1. Refactor GET analysis for a song (Day 1 task 5) to get both the lyrics **and** the analysis.

- _HINT: you don't need to wait for the lyrics to come back before you get the analysis_

### 2. Refactor getting a song's lyrics (Day 1 task 4) to send the song object and its lyrics all at once to send together on the response in the following format:

```json
{
  "song": {
    "title": "Single Ladies",
    "artist_id": 2,
    "album_id": 2,
    "current_chart_position": 2
  },
  "lyrics": "gettin' bodied\n(If you ready, get it ready) gettin' bodied..."
}
```

### 3. Refactor getting a song by its id (Day 1 task 3) to replace the album ID with the album title and artist ID with artist name, like so:

```json
{
  "song": {
    "title": "Single Ladies",
    "artist": "Beyonce",
    "album": "I am Sasha Fierce",
    "current_chart_position": 2
  }
}
```

- _HINT: you will have to make separate requests for the album and the artist_

### 4.a ADVANCED -- make an endpoint that will take the newData.txt file on the request body and post it to the database

- _HINT: this endpoint should make use of `fs` and the `Promise` constructor_

### 4.b ADVANCED - get all songs and replace all album IDs with album titles and artist IDs with artists like so:

```json
{
  "songs": [
    {
      "title": "Find No Enemy",
      "artist": "Akala",
      "album": "10 Years of Akala",
      "current_chart_position": 0
    },
    {
      "title": "Baby Shark",
      "artist": "Pinkfong",
      "album": "Youtube Best Hits",
      "current_chart_position": 0
    },
    ...
  ]
}
```

### 5. Create a new branch on your project - [here's a great tutorial on git branches](https://www.atlassian.com/git/tutorials/using-branches) and refactor your GET endpoints to render EJS files.

Useful links:

- [Express template engines](https://expressjs.com/en/guide/using-template-engines.html)
- [EJS](https://ejs.co/)
- [Templating with EJS guide](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
