// UPDATES THE ORIGINAL ARRAY

const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];
// slice() TO CREATE A COPY OF THE SORTED ARRAY
const sortedPrices1 = prices.slice().sort((a, b) => a - b);
const sortedPrices2 = prices.slice().sort((a, b) => b - a);

console.log(sortedPrices1.join(','));
console.log(sortedPrices2.join(','));

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
books.sort((a, b) => b.rating - a.rating);
console.log(books);
