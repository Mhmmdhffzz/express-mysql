const mysql = require('mysql2');

const dbpool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Chinchou123.',
  database: 'tanahku',
});

module.exports = dbpool.promise();