http = require('http');
bl = require ('bl');
var address = process.argv[2];

http.get(address, function (response) {
	var receivedA = new Array();
	response.pipe(bl(function(err,data){
		if(err) return console.error;		
		var phrase=data.toString();
		//console.log(data); //sort of binary
		console.log(phrase.length);
		console.log(phrase);
	}))
}).on('error', console.error);
