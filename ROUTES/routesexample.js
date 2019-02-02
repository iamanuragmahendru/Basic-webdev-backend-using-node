const express = require('express');
const app = express();

const teacherRoute = require('./routes/teachers');
const studentRoute = require('./routes/students');

app.use(require('express').json());
app.use(express.urlencoded({extended: true}));

app.use('/teachers', teacherRoute);
app.use('/students', studentRoute);

app.listen(3000, () => console.log('Server started at port 3000'));