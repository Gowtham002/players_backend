const express = require('express');
const bodyParser = require('body-parser') 
const connectDb = require("./db");
const routes = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

connectDb().then(db => {
  routes(app, db).listen(3000, () => {
    console.log('app running on 3000');
  });
})