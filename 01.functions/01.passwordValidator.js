function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.includes(' ');
	const tooSimilar = password.includes(username);
	return !tooShort && !hasSpace && !tooSimilar;
}
isValidPassword('wawioawi14', 'dogfood');
