function multyplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multyplyBy(3);
const double = multyplyBy(2);
const halve = multyplyBy(0.5);
console.log(triple(7));
console.log(double(5));
console.log(halve(6));
//
// Function factory
//
function makeBetweenFunc(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}
const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(20, 25);
console.log(isChild(15));
console.log(isNineties(2000));
console.log(isNiceWeather(21));
