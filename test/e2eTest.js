var request = require('supertest');
var inMemoryStockRepository = require('../inMemoryStockRepository')();
var app = require('../app')(inMemoryStockRepository);
var assert = require('assert');

describe('Book inventory', function () {
    it('allows to stock up the items', function (done) {
        request(app).
            post('/stock').
            send({
                "isbn": "1234567890",
                "count": 10
            }).set('Content-Type', 'application/json').
            expect('Content-Type', /json/).
            expect(200).
            end(function (err, res) {
                if (err) return done(err);
                assert.equal(res.body.isbn, "1234567890");
                done();
            });
    })
});

