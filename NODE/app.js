const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/greet/:tod/', (req, res) => {
    switch (req.params.tod) {
        case 'evening':
            tod = 'Evening';
            break;
        case 'morning':
            tod = 'Morning';
            break;
    }
    let greeting = "Good " + tod + " "+ req.query.name;
    res.send(greeting)
})

app.get('/html', (req, res) => {
    res.send(`
    <html>
    <body>
        This is HTML
    </body>
    </html>
    `)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))