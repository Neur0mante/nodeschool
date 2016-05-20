http = require('http');
bl = require('bl');


var address = new Array();
address[0] = process.argv[2];
address[1] = process.argv[3];
address[2] = process.argv[4];
var done = [false, false, false];
var resultA = new Array();

function httpGetter(index) {
	http.get(address[index], function (response) {
		response.pipe(bl(function (err, data) {
				if (err)
					return console.error;
				var phrase = data.toString();
				resultA[index] = phrase;
				done[index] = true;
				if(done[0]&&done[1]&&done[2])
				{
					for(var i = 0;i<3;i++){
					console.log(resultA[i]);
					}
				}
			}))
	}).on('error', console.error);
}
for (var i = 0; i < 3; i++) {
	httpGetter(i);
}
// console.log("waiting");

// var flag = [false, true, true];
// while (true) {
	// var a = 12934124/89172634182475124;
	// if (done[0] && !flag[0]) {
		// console.log(resultA[0]);
		// flag[0] = 1;
		// flag[1] = 0;
	// }
	// if (done[1] && !flag[1]) {
		// console.log(resultA[0]);
		// flag[1] = 1;
		// flag[2] = 0;
	// }
	// if (done[2] && !flag[2]) {
		// console.log(resultA[0]);
		// flag[2] = 1;
		// break;
	// }
// }
