var escodegen = require('escodegen'),
    esprima = require('./vendor/esprima'),
    fs = require('fs'),
    util = require('util'),
    parsedFileAST,
    generatedSource;

process.argv.forEach(function (val, index, array) {
    if (index > 1) {
        fs.readFile(val, 'utf8', function(err, data) {
            parsedFileAST = esprima.parse(data, {comment: true, attachComment: true});
            console.log(util.inspect(parsedFileAST, false, null));
            generatedSource = escodegen.generate(parsedFileAST, {comment: true});
            console.log(generatedSource);
        });
    }
});
