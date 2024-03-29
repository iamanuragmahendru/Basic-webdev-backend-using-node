const route = require('express').Router();

let teachers = [
    {name: 'Arnav', subject: 'WebDev'},
    {name: 'Prateek', subject: 'CPP'}
]

route.get('/', (req, res) => res.send(teachers));
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        subject: req.query.subject 
    })
    res.send(teachers);
})
route.get('/:id', (req, res) => res.send(teachers[req.params.id]));

module.exports = route;