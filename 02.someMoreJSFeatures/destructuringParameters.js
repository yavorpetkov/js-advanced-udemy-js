const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};

function print({ first, last, title }) {
	console.log(`${first} ${last}, ${title}`);
}
print(runner);

const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];

// WORKS WITH ARRAYS
function parseResponse([ protocol, statusCode, contentType ]) {
	console.log(`Status: ${statusCode}`);
	console.log(`Protocol: ${protocol}`);
	console.log(`Content: ${contentType}`);
}
parseResponse(response);
