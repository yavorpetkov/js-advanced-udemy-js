// no need to parse
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	return axios.get(url);
};
// deconstructing the object to get the data
const printPlanets = ({ data }) => {
	console.log(data);
	for (const planet of data.results) {
		console.log(planet.name);
	}
	// return to chain the .then and not nest it
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR', err);
	});
