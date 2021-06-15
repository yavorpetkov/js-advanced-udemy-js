const square = (x) => {
	return x * x;
};
const isEven = (num) => {
	return num % 2 === 0;
};
const greet = () => {
	console.log('HI!');
};
//

// IMPLICIT RETURN
const implicitSquare = (n) => n * n;

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const doubles1 = nums.map(function(n) {
	return n * 2;
});
const doubles2 = nums.map((n) => {
	return n * 2;
});
const doubles3 = nums.map((n) => n * 2);

// const parityList = nums.map((n) => {
// 	if (n % 2 === 0) return 'even';
// 	return 'odd';
// });
const parityList = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));

console.log(square(2));
console.log(isEven(3));
greet();
console.log(implicitSquare(3));
console.log(parityList);
