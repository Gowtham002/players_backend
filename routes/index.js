const players = require("./players");

module.exports = function(app, db) {
  app.use("/players", players(db));
  return app;
}