var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
    name: 'yvonnes-book-inventory-test',
    domains: ['yvonnes-book-inventory-test.herokuapp.com']
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);