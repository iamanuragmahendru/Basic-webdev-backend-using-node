// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mytestdb'
});

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30)
    );`,
    function(err, results, fields) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Table Created successfully');
        }
        connection.close();
    //   console.log(results); // results contains rows returned by server
    //   console.log(fields); // fields contains extra meta data about results, if available
    })