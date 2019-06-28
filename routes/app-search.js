/**
 * Search parametters:
 * acctId, birthDt, email, firstName, lastName, phone, postalCode, promoCd, referenceKey
 */
const cuApi = require('../cu-api');
const resource = 'Acct/Appl/Search';

module.exports = function (app) {
    console.log('CU API: '+ resource +' is activated.')

    app.route('/api/app-search').get((req, res) => {
        cuApi.callCuApi(resource, req.query, null, res);
    });
}