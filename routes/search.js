/**
    request parameters:
    -------------------
    acctId: ""
    birthDt: ""
    email: ""
    firstName: ""
    lastName: ""
    phone: ""
    postalCode: ""
    promoCd: ""
    referenceKey: "ZGE7RZVLGI4S"
 */

const cuApi = require('../cu-api');
const parser = require('../parsers/search-parser');
const resource = 'Acct/Appl/Search';

module.exports = function (app) {
    console.log('Activate route: /api/appl-search -> ' + resource);

    app.route('/api/appl-search').get((req, res) => {
        cuApi.callCuApi(resource, req.query, null, res, parser.responseParser);
    });
}