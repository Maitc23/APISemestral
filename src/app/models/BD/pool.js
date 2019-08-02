"use strict";
function mysql_pool(){
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'b2vdjpobhtdchvq4s4ff-mysql.services.clever-cloud.com',
        user: 'ul0jkfxdb11tfmvi',
        password: 'SG7R7X63pFXEdUK9ac2I',
        port: '3306',
        database: 'b2vdjpobhtdchvq4s4ff'
    });
    return connection; 
}

module.exports = mysql_pool;