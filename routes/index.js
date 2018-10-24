const players = require("./players");

module.exports = function(app, db) {
  app.use("/players", players(db));
  app.use("/", function(req, res) {
    res.json({
      "Players": "/players"
    })
  })
  return app;
}