const fs = require('fs');
const path = require('path');

exports.mock = function (filename) {
    const rawdata = fs.readFileSync(path.resolve(__dirname, filename))
    return JSON.parse(rawdata);
}
