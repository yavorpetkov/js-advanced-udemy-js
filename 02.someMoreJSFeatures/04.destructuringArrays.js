const raceResults = [
	'Eliud Kipchoge',
	'Feyisa Lelisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Simbu',
	'Jared Ward'
];
const [ gold, silver, bronze ] = raceResults;
const [ first, , , fourth ] = raceResults;
const [ winner, ...others ] = raceResults;

console.log(gold);
console.log(silver);
console.log(bronze);
console.log(first);
console.log(fourth);
console.log(winner);
console.log(others.join('-'));
