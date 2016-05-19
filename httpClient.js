var http = require('http');

var address = process.argv[2];

http.get(address,function(response){
	response.setEncoding("utf8");
	response.on("data",function(data){
		console.log(data);
	});
	
});