const express = require('express');
const app = express();
const path = require('path')

app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/pages', require('./routes/pages').route)
app.use('/api', require('./routes/api').route)
app.use('/', express.static(path.join(__dirname, 'public_static')))

app.listen(3000, () => console.log('Server started at port 3000'));
