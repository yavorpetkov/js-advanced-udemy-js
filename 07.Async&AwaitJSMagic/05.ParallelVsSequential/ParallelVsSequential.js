// SEQUENTIAL REQUESTS
async function get3PokemonSequential() {
	// we dont need poke1 to run first but it does
	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
	// here poke1 is resolved and shows the object so we waited for it
	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

// PARALLEL REQUESTS
async function get3Pokemon() {
	// here first we call them from the link and it doesn't care if the first one finishes first
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	// here prom1 is a pending promise
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	// here poke1 is resolved and shows the object
	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

// get3PokemonSequential();
get3Pokemon();

function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}

// IN SEQUENCE
async function lightShow() {
	await changeBodyColor('teal', 1000);
	await changeBodyColor('pink', 1000);
	await changeBodyColor('indigo', 1000);
	await changeBodyColor('violet', 1000);
}

// IN PARALLEL...
// Everything is ran at the same time
// so all the setTimeout() run at roughly same time
// async function lightShow() {
// 	const p1 = changeBodyColor('teal', 1000);
// 	const p2 = changeBodyColor('pink', 1000);
// 	const p3 = changeBodyColor('indigo', 2000);
// 	const p4 = changeBodyColor('violet', 1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }

lightShow();
