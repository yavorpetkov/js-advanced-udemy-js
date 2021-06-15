// if a parameter is not found it will set it to a default
function multiply(a, b = 1) {
	return a * b;
}
console.log(multiply(4));
console.log(multiply(4, 3));

const greet = (person, greeting = 'Hi') => {
	console.log(`${greeting}, ${person}`);
};

greet('Tim');
greet('Tim', 'Yo');
