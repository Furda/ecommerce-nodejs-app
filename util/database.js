const mysql = require("mysql2");
const { createPool } = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "root",
});

module.exports = pool.promise();
