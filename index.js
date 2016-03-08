var stockRepository = require('./stockRepository')();
var app = require('./app')(stockRepository);

/*Start http server*/
app.listen(process.env.PORT || 3003, function () {
    console.log('Example app listening on port 3003!');
});









                                                  K