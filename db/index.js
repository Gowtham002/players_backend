const MongoClient = require("mongodb").MongoClient;

const connectionUri = "mongodb://admin:dbpassword1@ds239703.mlab.com:39703/players"

function connect(uri) {
  return MongoClient.connect(uri, { useNewUrlParser: true }).then(client => client.db());
}

module.exports = async function() {
  let database = await Promise.all([connect(connectionUri)])
  return database[0];
}