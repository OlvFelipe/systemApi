const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'system_purchase',
    password: 'felipe'
})

module.exports = conn;