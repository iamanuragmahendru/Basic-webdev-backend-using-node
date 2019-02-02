const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypass',
  database: 'mytestdb'
});

connection.query(
    `SELECT * FROM persons;`,
    function(err, results, fields) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(results);
            console.log(fields);
        }
        connection.close();
    })