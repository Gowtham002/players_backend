const express = require('express');
const bodyParser = require('body-parser') 
const connectDb = require("./db");
const routes = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

connectDb().then(db => {
  routes(app, db).listen(4000, () => {
    console.log('app running on 4000');
  });
})