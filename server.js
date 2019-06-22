// npm init (create new package.json)
// npm install express --save
const express = require('express')
const app = express()

// npm install cors --save
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// npm install body-parser --save
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// routes
app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
})

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
})

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
})

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
})

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
})

// start server
app.listen(8000, () => {
    console.log('Server started!')
})