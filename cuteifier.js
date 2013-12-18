var escodegen = require('escodegen'),
    esprima = require('esprima'),
    fs = require('fs'),
    util = require('util'),
    parsedFileAST,
    generatedSource;

process.argv.forEach(function (val, index, array) {
    if (index > 1) {
        fs.readFile(val, 'utf8', function(err, data) {
            parsedFileAST = esprima.parse(data, {attachComment: true});
            console.log(util.inspect(parsedFileAST, false, null));
            generatedSource = escodegen.generate(parsedFileAST, {comment: true});
            console.log(generatedSource);
        });
    }
});
