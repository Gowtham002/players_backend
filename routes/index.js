const users = require("./users");

module.exports = function(app, db) {
  app.use("/users", users(db));
  return app;
}