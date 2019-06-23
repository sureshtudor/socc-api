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

// import mock data
const mock = require('./mock-data')

// routes
app.route('/api/applications').get((req, res) => {
    console.log('request: '+ req.originalUrl);
    res.send(mock.applications());
});

app.route('/api/applications/:id').get((req, res) => {
    console.log('request: '+ req.originalUrl);
    const filteredArray = mock.applications().filter(e => {
        return e.id === Number(req.params['id']);
    });
    res.send(filteredArray);
});

app.route('/api/app-search').get((req, res) => {
    console.log('request: '+ req.originalUrl);
    const filteredArray = mock.applications().filter(e => {
        return e.invitationId === Number(req.query.invitationId);
    });
    res.send(filteredArray);
});

// start server
app.listen(3000, () => {
    console.log('Server started!')
})