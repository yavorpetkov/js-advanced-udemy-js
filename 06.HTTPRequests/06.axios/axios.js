// axios is an external library
axios
	.get('https://swapi.dev/api/planassaets/')
	// it does not need to be parsed
	.then((res) => {
		console.log('in then ');
		console.log(res.data);
	})
	// if there is an error like 404 it will catch it
	.catch((err) => {
		console.log('in catch');
		console.log(err);
	});
