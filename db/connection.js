const mysql = require("mysql2");
// Establishes connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ruger102296!',
    database: 'employee_tracker'
  });

  module.exports = db;