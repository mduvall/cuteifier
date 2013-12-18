var escodegen = require('./lib/escodegen'),
    esprima = require('./lib/esprima'),
    fs = require('fs'),
    util = require('util'),
    parsedFileAST,
    generatedSource;

process.argv.forEach(function (val, index, array) {
    if (index > 1) {
        fs.readFile(val, 'utf8', function(err, data) {
            parsedFileAST = esprima.parse(data, {
                attachComment: true
            });
            generatedSource = escodegen.generate(parsedFileAST, {
                comment: true
            });

            console.log(util.inspect(parsedFileAST, false, null));
            console.log(generatedSource);
        });
    }
});
