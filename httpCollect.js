http = require('http');

var address = process.argv[2];

http.get(address, function (response) {
	var receivedA = new Array();
	response.setEncoding("utf8");
	response.on("data", function (data) {
		receivedA.push(data);
	});
	response.on("error", function (err) {
		return console.error;
	});
	response.on("end", function () {
		var phrase=receivedA.join("");
		console.log(phrase.length);
		console.log(phrase);
	});

}).on('error', console.error);
