const express = require('express');
const Router = express.Router;
const route = Router();

let students = [
    {name: 'Anurag', college: 'JMIT', year: 'III'},
    {name: 'Chandru', college: 'JMIETI', year: 'II'},
    {name: 'Apoorv', college: 'PIMP', year: 'IV'},
    {name: 'Akshat', college: 'IIT', year: 'III'}
]

route.get('/', (req, res) => res.send(students));
route.get('/:id', (req, res) => res.send(students[req.params.id]));
route.post('/', (req, res) => {
    students.push({
        name: req.body.name,
        college: req.body.college,
        year: req.body.year
    })
    res.send(students);
})

module.exports = route;