const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
const validate = require('express-validation');
const validateCreate = require("./../validations/users").validateCreate

module.exports = function(db) {
  router.get("/", function(req, res) {
    db.collection("users").find({}).toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.error(err);
      } else {
        res.json(docs);
      }
    });
  })
  
  router.get("/:id", function(req, res) {
    res.send("Show");
  })
  
  router.post("/", validate(validateCreate), function(req, res) {
    let playerObj = { name: req.body.name };
    db.collection("users").insertOne(playerObj, function(err, result) {
      if(err) {
        console.log(err);
        res.error(err);
      } else {
        res.json(result);
      }
    })
  })
  
  router.put("/", function(req, res) {
    res.send("Update")
  })
  
  router.delete("/:id", function(req, res) {
    let id = req.params.id;
    db.collection("users").deleteOne({ _id: new mongodb.ObjectID(id) }, function(err, result) {
      if(err) {
        console.log(err);
        res.error(err);
      } else {
        res.json(result);
      }
    })
  })
  
  return router;
}
