module.exports = function(app, mock){

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
}