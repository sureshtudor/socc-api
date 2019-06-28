// npm init (create new package.json)
// npm install express --save
const express = require('express')
const app = express()

// npm install body-parser --save
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// npm install cors --save
const cors = require('cors')
var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// start server
const port = 3000;
app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

// add routes
require('./routes/mock-api')(app);
//require('./routes/app-search')(app);
