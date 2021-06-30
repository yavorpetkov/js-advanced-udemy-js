async function getPlanets() {
	try {
		const res = await axios.get('https://swapi.dev/api/planee31414ts/');
		console.log(res.data);
	} catch (e) {
		console.log('IN CATCH!!!', e);
	}
}
getPlanets();

// getPlanets().catch((err) => {
// 	console.log('IN CATCH!!!');
// 	console.log(err);
// });
