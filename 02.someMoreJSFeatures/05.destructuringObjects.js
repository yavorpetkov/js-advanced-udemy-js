// DESTRUCTURING OBJECTS
const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};
const { first, last, ...other } = runner;

console.log(first);
console.log(other);

const { country: nation, title: honorific } = runner;
// HERE WE USE country AND title TO EXTRACT THE VALUE FROM THEIR KEY AND PUT THEM IN A NEW VALUE

console.log(nation);
console.log(honorific);
