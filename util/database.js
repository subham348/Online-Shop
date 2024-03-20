const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "Your_Password", // Change password to correct one
});

module.exports = pool.promise();
