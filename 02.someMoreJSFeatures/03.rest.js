// REST COLECTS THE ARGUMENT IN THE FUNCTION
function sum(...nums) {
	return nums.reduce((total, currnet) => total + currnet);
}
console.log(sum(4, 5, 6, 7));
// COLLECTS THE REMAINING ARGUMENTS
function fullName(first, last, ...titles) {
	console.log('first', first);
	console.log('last', last);
	console.log('titles', titles.join(' '));
}
fullName('Bob', 'Smith', 'The', 'Third');

const multiply = (...nums) => nums.reduce((total, current) => total * current);
console.log(multiply(2, 4, 6));
//
//
// arguments IS ARRAY LIKE BUT IS NOT AN ARRAY
function sum() {
	// IT HAS TO BE SPREAD IN AN ARRAY TO WORK
	const argsArr = [ ...arguments ];
	// CANT USE ARRAY METHODS WITH IT
	return argsArr.reduce((total, current) => total + current);
}
// arguments CANT WORK IN ARROW FUNCTIONS
