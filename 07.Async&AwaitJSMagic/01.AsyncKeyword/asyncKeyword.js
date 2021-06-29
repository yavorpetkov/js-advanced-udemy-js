// regular function returns a string:
// function greet() {
// 	return 'HELLO!!';
// }

// THE ASYNC KEYWORD
// This function now returns a promise
async function greet() {
	//resolved with the value of 'HELLO!!!'
	return 'HELLO!!!';
}
greet().then((val) => {
	console.log('PROMISE RESOLVED WITH: ', val);
});

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers!';
	}
	return x + y;
}

// non-async function
// function add(x, y) {
// 	return new Promise((resolve, reject) => {
// 		if (typeof x !== 'number' || typeof y !== 'number') {
// 			reject('X and Y must be numbers!');
// 		}
// 		resolve(x + y);
// 	});
// }

add(6, 7)
	.then((val) => {
		console.log('PROMISE RESOLVED WITH: ', val);
	})
	.catch((err) => {
		console.log('PROMISE REJECTED WITH: ', err);
	});
