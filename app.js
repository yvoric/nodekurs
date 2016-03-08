var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var middleware = require('./middleware');

/**
 * Create the application
 * @param stockRepository
 * @returns {*}
 */

/** @constructor */
module.exports = function(stockRepository) {
    app.use(middleware.logRequest);
    app.use(bodyParser.json());

    var routes = require('./routes')(stockRepository);
    /*webpaths for accessing db values*/
    app.get('/stock', routes.getCount);
    app.post('/stock', routes.stockUp);
    app.get('/stock/:isbn', routes.getCount);

    /*Error handling using middelware defined in middelware.js*/
    app.use(middleware.clientError);
    app.use(middleware.serverError);

    return app;
};