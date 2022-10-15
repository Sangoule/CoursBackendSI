import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();
var mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port:8889,
    user: 'root',
    password: 'root',
    database: process.env.DATABASE,
    multipleStatements: true
    });
    
    mysqlConnection.connect((err)=> {
    if(!err)
    console.log('La connection à la base de données a été bien établie');
    else
    console.log('Connection Echouée!'+ JSON.stringify(err,undefined,2));
    });

export default mysqlConnection