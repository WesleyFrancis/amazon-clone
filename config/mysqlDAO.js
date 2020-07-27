const mysql = require('mysql2');
const conn = {
    getConnection()
    {
        // create the connection to database
        const connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            database: process.env.DATABASE,
            port:process.env.PORT,
            password:process.env.PASSWORD
        });
        return connection;
    }
}
module.exports = conn;