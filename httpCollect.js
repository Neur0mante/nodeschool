http = require('http');

var address = process.argv[2];


http.get(address, function (response) {
	var receivedA = new Array();
	response.setEncoding("utf8");
	response.on("data", function (data) {
		receivedA.push(data);
	});
	response.on("error", fuction(err) {
		return console.log(err);
	}
		response.on("end", )

	});
