async function getPlanets() {
	// await can only be used in an async function
	const res = await axios.get('https://swapi.dev/api/planets/');
	//only runs once the previous line is complete (the axios promise is resolved)
	console.log(res.data);
	// no need for .then
}

getPlanets();

// Without async / await

// function getPlanets() {
// 	return axios.get('https://swapi.co/api/planets/');
// }

// getPlanets().then((res) => {
// 	console.log(res.data);
// });
