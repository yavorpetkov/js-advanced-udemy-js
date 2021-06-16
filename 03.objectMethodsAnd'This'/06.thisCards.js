// function makeDeck() {
// 	const deck = [];
// 	const suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
// 	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
// 	for (const value of values.split(',')) {
// 		for (const suit of suits) {
// 			deck.push({ value, suit });
// 		}
// 	}
// 	return deck;
// }
// function drawCard(deck) {
// 	return deck.pop();
// }
const makeDeck = () => {
	return {
		deck: [],
		suits: [ 'hearts', 'diamonds', 'spades', 'clubs' ],
		values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		drawnPile: [],
		initializeDeck() {
			const { suits, values, deck } = this;
			for (const value of values.split(',')) {
				for (const suit of suits) {
					deck.push({ value, suit });
				}
			}
		},
		drawCard() {
			const card = this.deck.pop();
			this.drawnPile.push(card);
			return card;
		},
		drawMultiple(numCards) {
			const cards = [];
			for (let i = 0; i < numCards; i++) {
				cards.push(this.drawCard());
			}
			return cards;
		},
		shuffle() {
			const { deck } = this;
			// loop over array backwards
			for (let i = deck.length - 1; i > 0; i--) {
				//picks a random index before current element
				let j = Math.floor(Math.random() * (i + 1));
				//swap
				[ deck[i], deck[j] ] = [ deck[j], deck[i] ];
			}
		}
	};
};
// first deck
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

// second deck
const deck2 = makeDeck();
deck2.initializeDeck();
