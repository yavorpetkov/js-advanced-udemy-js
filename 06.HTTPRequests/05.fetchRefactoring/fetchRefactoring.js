// const checkStatusAndParse =(response) => {
// 	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

// 	return response.json();
// }

// fetch returns a promise to be caught by .then
fetchNextPlanets()
	// a more cleaner verion sith .then and a function
	.then(checkStatusAndParse)
	.then(printPlanets)
	// first page
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	// second page
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	// third page
	.catch((err) => {
		console.log('Wrong With fetch');
		console.log(err);
	});
//

// if the function is in a variable it will need to go on top of the logic
function checkStatusAndParse(response) {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
	// returns a promise
	return response.json();
	// to get the body readable stream
}
function printPlanets(data) {
	// the data holds the body readable stream
	console.log('LOADED 10');
	console.log(data);
	for (const planet of data.results) {
		console.log(planet.name);
	}
	// const returnProm = new Promise((resolve, reject) => {
	// 	// only resolving the promise
	// 	resolve(data);
	// });
	// // to return the promise
	// return returnProm;

	// EASYER WAY TO RESOLVE
	return Promise.resolve(data.next);
}
// defaulting the url to the planets url
function fetchNextPlanets(url = 'https://swapi.dev/api/planets/') {
	return fetch(url);
}
