const mysql = require("mysql");

const opt = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

const db = mysql.createConnection(opt);
db.connect(function (err) {
  if (err) {
    return console.log("error: " + err.message);
  }
  console.log("Connected to MySQL server");
});

module.exports = db;
