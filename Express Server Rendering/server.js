const express = require('express')
const app = express()

const todoRoute = require('./routes/todos')

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/todos', todoRoute)

app.listen(3000)