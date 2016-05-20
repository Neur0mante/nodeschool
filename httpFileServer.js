http = require('http');
fs = require('fs');

var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(function (request, response) {
		res.writeHead(200, {
			'content-type' : 'text/plain'
		});
		fileStream = fs.createReadStream(filepath);
		fileStream.pipe(response);
	})

	server.listen(port);
