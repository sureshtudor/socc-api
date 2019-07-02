// mock-data
const factory = require('../mock-data/mock-factory');
const searchParser = require('../parsers/search-parser');

module.exports = function (app) {
    console.log('****** Mock APIs are activated! ******')

    // search
    console.log('Activate route: /api/appl-search -> mock-data/search.json');
    app.route('/api/appl-search').get((req, res) => {
        const body = factory.mock('search.json');
        res.json(searchParser.responseParser(body));
    });

    // application
    console.log('Activate route: /api/applications/:id -> mock-data/application.json');
    app.route('/api/applications/:id').get((req, res) => {
        const data = factory.mock('application.json');
        res.json(data);
    });

    /*   
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
    */
}