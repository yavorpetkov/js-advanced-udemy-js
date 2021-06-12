function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y;
}
function multiply(x, y) {
	return x * y;
}
function divide(x, y) {
	return x / y;
}

const operations = [ add, subtract, multiply, divide ];
console.log(operations[0](100, 4));
console.log(operations[1](100, 4));
console.log(operations[2](100, 4));
console.log(operations[3](100, 4));

for (const func of operations) {
	let result = func(30, 5);
	console.log(result);
}

const thing = {
	doSomething: multiply
};

console.log(thing.doSomething(50, 2));
