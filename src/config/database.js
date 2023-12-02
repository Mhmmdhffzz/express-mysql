const mysql = require('mysql2');

const dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectTimeout: 30000,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = dbpool.promise();