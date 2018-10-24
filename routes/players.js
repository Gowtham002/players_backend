const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
const validate = require('express-validation');
const validateCreate = require("../validations/players").validateCreate

module.exports = function (db) {
  router.get("/", function (req, res) {
    db.collection("players").find({}).sort( { created_at: -1 } ).toArray((err, docs) => {
      if (err) {
        console.log(err);
        res.status(500)
        res.json({ error: err })
      } else {
        res.json(docs);
      }
    });
  })

  router.get("/:id", function (req, res) {
    res.send("Show");
  })

  router.post("/", validate(validateCreate), function (req, res) {
    let playerObj = { name: req.body.name, created_at: new Date() };
    db.collection("players").insertOne(playerObj, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500)
        res.json({ error: err })
      } else {
        res.json(result);
      }
    })
  })

  router.put("/", function (req, res) {
    res.send("Update")
  })

  router.delete("/:id", function (req, res) {
    let id = req.params.id;
    db.collection("players").deleteOne({ _id: new mongodb.ObjectID(id) }, function (err, result) {
      if (err) {
        console.log(err);
        res.status(500)
        res.json({ error: err })
      } else {
        res.json(result);
      }
    })
  })

  return router;
}
