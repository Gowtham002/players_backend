const express = require('express');
const bodyParser = require('body-parser') 
const connectDb = require("./db");
const routes = require("./routes");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function timeLog(req, res, next) {
  console.log("request", req.method, req.originalUrl, Date());
  console.log("response", res.statusCode, Date());
  next();
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

connectDb().then(db => {
  routes(app, db).listen(process.env.PORT || 4000, () => {
    console.log('application running on port ' + (process.env.PORT || "4000"));
  });
})