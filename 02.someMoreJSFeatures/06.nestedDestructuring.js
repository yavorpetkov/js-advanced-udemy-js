const results = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya'
	},
	{
		first: 'Feyisa',
		last: 'Lilesa',
		country: 'Ethiopia'
	},
	{
		first: 'Galen',
		last: 'Rupp',
		country: 'United States'
	}
];

const [ , { country: nation } ] = results;
const [ gold ] = results;
const { country } = gold;
console.log(nation);
console.log(country);
