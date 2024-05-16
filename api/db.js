'use strict';
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "Chee180240",
  database: process.env.DB_NAME || "SmartDB"
});

module.exports = db
