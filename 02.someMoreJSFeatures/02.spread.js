//HERE IT REMOVES THE ARRAY BRACKETS
const nums = [ 1, 11, 2, 3, 236, 33, 66, 53, 1 ];
console.log(Math.max(...nums));
function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}
const colors = [ 'red', 'orange', 'yellow', 'green' ];
giveMeFour(...colors);
// FOR STRING IT SPLITS THE STRING INTO SEPERATE CHARS
const str = 'BEAR';
giveMeFour(...str);

//
// SPREAD IN ARRAY LITERALS
const cephalopods = [ 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish' ];
const gastropods = [ 'giant african snail', 'banana slug', 'variable neon slug' ];
const cnidaria = [ 'fire coral', 'moon jelly' ];
// THIS IS LIKE CONCATING AN ARRAY
const mullusca = [ ...cephalopods, ...gastropods ];
console.log(mullusca);
// EASY WAY TO COPY AN ARRAY
const sephCopy = [ ...cephalopods ];

//
// SPREAD IN OBJECT LITERALS
const feline = {
	legs: 4,
	family: 'Felidae'
};
const canine = {
	family: 'Caninae',
	furry: true,
	legs: 4
};
const dog = {
	...canine,
	isPet: true,
	adorable: true
};
console.log(dog);
const cat = {
	...feline,
	isPet: true,
	adorable: true,
	personality: 'unpredictable'
};
// MERGING TWO SPREADS WILL MERGE THE SAME KEY
const catDog = {
	...canine,
	...feline
};
console.log(catDog);
// OVERRIDING A KEY WILL PLACE THE NEW VALUE
const tripod = {
	...canine,
	legs: 3
};
console.log(tripod);
