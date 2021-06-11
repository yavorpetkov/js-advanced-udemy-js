function isPanagram(string) {
	let lowerCased = string.toLowerCase();
	for (const char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}
console.log(isPanagram('the five boxing wizards jump quickly'));
