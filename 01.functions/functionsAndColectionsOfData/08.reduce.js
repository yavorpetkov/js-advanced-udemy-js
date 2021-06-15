// SUMMING AN ARRAY
const nums = [ 3, 5, 7, 9, 11 ];
const sumedNums = nums.reduce((sum, current) => sum + current);
const multipliedNums = nums.reduce((sum, current) => sum * current);
console.log(sumedNums);
console.log(multipliedNums);

// FINDING MAX VALUE
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];
const maxGrade = grades.reduce((max, current) => {
	return Math.max(max, current);
});
const minGrade = grades.reduce((min, current) => Math.min(min, current));
console.log(maxGrade);
console.log(minGrade);

// INITIAL STARTING VALUE
const nums2 = [ 10, 20, 30, 40, 50 ];
// strating value of sum
const sum = nums2.reduce((sum, current) => sum + current, 1000);
console.log(sum);

// TALLYING
const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];

// const results = votes.reduce((tally, current) => {
// 	if (tally[current]) {
// 		tally[current]++;
// 	} else {
// 		tally[current] = 1;
// 	}
// 	return tally;
// }, {});
const results = votes.reduce((tally, current) => {
	tally[current] = (tally[current] || 0) + 1;
	return tally;
}, {});
console.log(results);

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
		title: 'A Truly Horrible Book',
		authors: [ 'Xavier Time' ],
		rating: 2.18,
		genres: [ 'fiction', 'garbage' ]
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

const reducedBooks = books.reduce((groupedBooks, book) => {
	const key = Math.floor(book.rating);
	if (!groupedBooks[key]) groupedBooks[key] = [];
	groupedBooks[key].push(book);
	return groupedBooks;
}, {});
console.log(reducedBooks);
