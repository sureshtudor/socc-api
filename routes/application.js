/**
    request parameters:
    -------------------
    appId: "L9CX9FKCKYRECY50LDYG"
    homeContainer: {brand: "UnionBank"}
    invCode: null
 */
const cuApi = require('../cu-api');
const resource = (appId) => `Acct/Appl/${appId}/Detail`;

module.exports = function (app) {
    console.log('CU API: ' + resource + ' is activated.')

    app.route('/api/applications/:id').get((req, res) => {
        const appId = req.params['id'];
        cuApi.callCuApi(resource(appId), req.query, null, res);
    });
}