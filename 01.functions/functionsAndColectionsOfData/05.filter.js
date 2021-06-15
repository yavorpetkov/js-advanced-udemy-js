const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
const odd = nums.filter((n) => n % 2 === 1);
const even = nums.filter((n) => n % 2 === 0);
const bigNums = nums.filter((n) => n > 5);

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

const goodBooks = books.filter((b) => b.rating > 4.3);
const fantasyBooks = books.filter((b) => b.genres.includes('fantasy'));
const shortForm = books.filter((b) => b.genres.includes('short stories') || b.genres.includes('essays'));
const query = 'The';
const results = books.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()));

console.log(results);
console.log(shortForm);
console.log(goodBooks);
console.log(fantasyBooks);
console.log(odd);
console.log(even);
console.log(bigNums);
