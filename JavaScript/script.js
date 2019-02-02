const fs = require('fs');

let fileContents = '';

fs.readFile(__dirname + '/file.txt', function (err, data) {

    if (err) throw err

    else
        fileContents += data.toString()
    console.log(fileContents)
});


console.log(fileContents)