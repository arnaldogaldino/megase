'use strict';
const config = require('./config.json');
const mysql = require('mysql');

module.exports.myQuery = mysql.createConnection({
    host     : config.mysql_host,
    port     : config.mysql_port,
    user     : config.mysql_user,
    password : config.mysql_pwd,
    database : config.mysql_db
});