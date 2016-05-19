var fs = require('fs');
var inputBuffer = fs.readFileSync(process.argv[2]);
var content = inputBuffer.toString();
var splitted = content.split('\n');
console.log(splitted.length-1);