// Felipe Melo Moura - 5° A 
require('dotenv').config();
const mysql = require('mysql');

const connection = function(){
    
    console.log("conexão com banco feito")
    return mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
}

module.exports = function()
{
    console.log("autoload do dbConnetion feito");
    return connection()
}

    
