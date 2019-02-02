const express = require('express');
const app = express();

const m1 = function (req, res, next) {
	console.log('Middleware 1')
};

const m2 = function (req, res, next) {
	console.log('Middleware 2')
};

const m3 = function (req, res, next) {
	console.log('Middleware 3')
};

app.get('/', (req, res) => {
	res.send('Hello World')
});


//app.use(m1);

app.use(m2);


app.use(m3);

app.listen(3000, () => {
	console.log("Server started at port 3000")
});