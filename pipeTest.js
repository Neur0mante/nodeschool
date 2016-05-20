const fs = require('fs');
var writer = fs.createWriteStream('test.txt');
var reader = fs.createReadStream('sourceFile.txt');

reader.pipe(writer);