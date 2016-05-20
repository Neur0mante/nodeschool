net = require('net');

var port = process.argv[2];

function twoDigits(time){
	var date = new Date();
	if (time<10){
		return "0"+time;
	}else return time;
	
}

function dateFormatter(){
	var date = new Date();
	return date.getFullYear()+"-"+twoDigits((date.getMonth()+1))+"-"+date.getDate()+" "+date.getHours()+":"+twoDigits(date.getMinutes())+"\n";
	}

var server = net.createServer(function(socket){
	socket.write(dateFormatter());
	socket.end();
});

server.listen(port);