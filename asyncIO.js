var fs = require("fs");
fs.readFile(process.argv[2],"utf8",function(err,data){
	if (err){
		console.log("ERROR!??!?");
	} else{
		var splitted = data.split("\n");
		console.log(splitted.length-1);
	}
})