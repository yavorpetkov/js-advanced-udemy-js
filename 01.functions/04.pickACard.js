function pick(array) {
	const idx = Math.floor(Math.random() * array.length);
	return array[idx];
}

function getCard() {
	const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	console.log(`values: ${pick(values)}`);
	console.log(`suits: ${pick(suits)}`);
	return { values: pick(values), suits: pick(suits) };
}
getCard();
