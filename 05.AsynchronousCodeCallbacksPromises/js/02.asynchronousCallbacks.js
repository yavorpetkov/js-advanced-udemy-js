console.log('I HAPPEN FIRST!');
// alert('Hi there!'); //This stops everything
console.log('I HAPPEN SECOND!');

console.log('I HAPPEN FIRST!');
setTimeout(function() {
	//This does not hold everything up
	//JS relies on the browser to keep track of the timer
	console.log('I HAPPEN THIRD!');
}, 1000);

console.log('I HAPPEN SECOND!');
