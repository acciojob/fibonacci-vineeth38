

function fibonacci(number) {
// your code here
var a=0,b=1;
	for(var i=0;i<=number.length;i++){
		var temp =a + b;
		return temp;
		a=b;
		b=temp;
	}
}

module.exports = fibonacci;
