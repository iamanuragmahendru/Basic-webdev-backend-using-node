const express = require('express')
const path = require('path')
const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/', express.static(path.join(__dirname, 'public')))
server.use('/api', require('./routes/api').route)

server.listen(3000, () => console.log("Server started at port 3000"))