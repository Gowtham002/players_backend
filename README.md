# Introduction

Players Backend provides api services for [Players Front-End](https://players-frontend.herokuapp.com).

# Installation

This app requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/Gowtham002/players_frontend.git
$ cd players_frontend
$ npm install
$ npm start
```
# Tech

This app uses a number of open source projects to work properly:

* [Express.js](https://expressjs.com/) - minimal and flexible web application framework
* [MongoDB](https://www.mongodb.com) - document-oriented database program
* [Joi](https://github.com/hapijs/joi) - Object schema validation

# Models

### Player

```json
  player: {
    name: String,
    _id: String,
    created_at: Date
  }
```

# APIs

### Player
```sh
  All Players: /players [GET]
  Create Players: /players [POST]
  Delete Players: /players/:id [DELETE]
```