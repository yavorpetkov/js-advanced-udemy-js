const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('IT WORKED!!!');
	// THIS does not work with arrow functions
	const data = JSON.parse(this.responseText);
	for (let planet of data.results) {
		console.log(planet.name);
	}
});
firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});
// this takes time and done from the browser
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
// so this will be run first
console.log('Request Sent!');
