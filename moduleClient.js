var fs = require('fs');
var path = require('path');
var ls = require('./lsmodule');

var folder = process.argv[2];
var ext = process.argv[3];

callback = function(err,data){
	if(err) return console.log(err);	
	data.forEach(function(value){
		console.log(value);		
	});
}

ls(folder,ext,callback);
