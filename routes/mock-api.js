// mock-data
const factory = require('../mock-data/mock-factory');

module.exports = function (app) {
    console.log('****** Mock APIs are activated! ******')

    // application search
    app.route('/api/app-search').get((req, res) => {
        res.json(factory.mock('app-search-results.json'));
    });
    app.route('/api/applications').get((req, res) => {
        res.json(factory.mock('applications.json'));
    });
    app.route('/api/applications/:id').get((req, res) => {
        const mock = factory.mock('applications.json');
        const filteredArray = mock.filter(e => {
            return e.id === Number(req.params['id']);
        });
        res.json(filteredArray);
    });
}