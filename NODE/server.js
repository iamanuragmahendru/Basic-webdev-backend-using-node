const express = require('express')
const server = express();

server.get('/', function (req, res, next) {
    res.send("Hello World")
})

server.listen(2121)