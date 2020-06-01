// Modules
const mysql = require('mysql');

var connection = null;

function connectToDB() {
  if (connection) return connection;

// Connection à la DB
  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'twitter_like'
});

  connection.connect(function (err) {
    if (err) {
      console.error("error connection:", err.stack);
      return;
    }
    console.log("connecté à la base de données MySQL");
  });

  return connection;
}

module.exports.connectToDB = connectToDB;
