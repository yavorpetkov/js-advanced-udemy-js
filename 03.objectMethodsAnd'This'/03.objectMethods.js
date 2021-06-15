const math = {
	numbers: [ 1, 2, 3, 4, 5 ],
	add: function(x, y) {
		return x + y;
	},
	multiply: function(x, y) {
		return x * y;
	}
};
console.log(math);
console.log(math.add(2, 5));
console.log(math.multiply(2, 5));

// shorthand
const shorthandMath = {
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	}
};
console.log(shorthandMath.add(3, 4));
console.log(shorthandMath.multiply(3, 4));
