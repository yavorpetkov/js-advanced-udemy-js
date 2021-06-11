function avg(array) {
	let total = 0;
	for (const num of array) {
		total += num;
	}
	return total / array.length;
}
console.log(avg([ 2, 8, 6, 16, 4, 8, 10, 20 ]));
