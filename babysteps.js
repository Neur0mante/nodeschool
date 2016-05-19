var numbers = process.argv.slice(2);
var sum=0;
numbers.forEach(function(value){
	sum+=Numberf.parseInt(value);
});
console.log(sum);
