var stockRepository = require('./stockRepository')();
var app = require('./app')(stockRepository);

/*Start http server*/
app.listen(process.env.port || 3002, function () {
    console.log('Example app listening on port 3003!');
});









