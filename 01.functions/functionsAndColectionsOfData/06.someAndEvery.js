// booleans - every and some

const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

// every
const allThreeLength = words.every((word) => word.length === 3);
const allEndInG = words.every((word) => {
	const last = word.length - 1;
	return word[last] === 'g';
});
const everyStrartWithD = words.every((word) => word[0] === 'd');
console.log(allThreeLength);
console.log(allEndInG);
console.log(everyStrartWithD);

// some
const someStrartWithD = words.some((word) => word[0] === 'd');
console.log(someStrartWithD);

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.83,
		genres: [ 'nonfiction', 'essays' ]
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ]
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patrick Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'The Overstory',
		authors: [ 'Richard Powers' ],
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ]
	},
	{
		title: 'The Way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fantasy', 'epic' ]
	},
	{
		title: 'Lord of the flies',
		authors: [ 'William Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ]
	}
];

const goodBooks = books.every((book) => book.rating > 3.5);
const anyWithTwoAuthors = books.some((book) => (book.authors.length = 2));
console.log(`goodBooks: ${goodBooks}`);
console.log(`anyWithTwoAuthors: ${anyWithTwoAuthors}`);
