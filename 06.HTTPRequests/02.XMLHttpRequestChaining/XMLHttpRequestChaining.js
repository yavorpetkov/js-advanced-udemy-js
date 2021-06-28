const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('IT WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
	// for (let planet of data.results) {
	// 	console.log(planet.name);
	// }
});
firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent!');
