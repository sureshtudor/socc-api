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

// routes for application search
require('./routes/search')(app, mock);

// start server
app.listen(3000, () => {
    console.log('Server started!')
})