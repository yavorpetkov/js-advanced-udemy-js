const prom = fetch('https://swapi.dev/api/planets/')
	.then((response) => {
		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
		// return the promise so the .then isn't so nested
		return response.json();
	})
	.then((data) => {
		console.log('FETCHED ALL PLANETS(10)');
		const firstMovieURL = data.results[0].films[0];
		console.log(data);
		return fetch(firstMovieURL);
		// for (const planet of data.results) {
		// 	console.log(planet.name, planet);
		// }
	})
	.then((response) => {
		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
		// returns the data so it can be read in the .then
		return response.json();
	})
	.then((data) => {
		console.log('FETCHED FIRST FILM BASED ON PLANET');
		console.log(data);
	})
	.catch((err) => {
		console.log('Wrong With fetch');
		console.log(err);
	});
