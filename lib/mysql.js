var mysql = require('mysql');
var config = require('../config');

var pool = mysql.createPool({
    connectionLimit: config.get('mysql:connectionLimit'),
    host: config.get('mysql:host'),
    user: config.get('mysql:user'),
    password : config.get('mysql:password'),
    database : config.get('mysql:database')
});

module.exports = pool;