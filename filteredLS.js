var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext=process.argv[3];

fs.readdir(folder,function(err,list){
	if(err){
		return 	console.log(err);
	}else{
		list.forEach(function(value,index){
			if(path.extname(value)===("."+ext)){
				console.log(value);
			};
		})
	}

})