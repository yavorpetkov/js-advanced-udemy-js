const prom = fetch('https://swapi.dev/api/planets13/')
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Status Code Error: ${response.status}`);
		} else {
			console.log(response);
			// to get the data you need to do a .json and a . then
			response.json().then((data) => {
				for (const planet of data.results) {
					console.log(planet.name);
				}
			});
		}
	})
	// in fetch .catch will only work if we dont get a responese like when the internet is off
	.catch((err) => {
		console.log('Wrong With fetch');
		console.log(err);
	});
