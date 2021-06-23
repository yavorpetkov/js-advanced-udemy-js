const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet' ];

//
// const printColor = function(box) {
// 	console.log(box.style.background);
// };
// with this box can be referenced
const changeColor = function() {
	const h1 = document.querySelector('h1');
	// this referes to the thing that the event listener is attached to
	h1.style.color = this.style.background;
};
// creating the boxes
const container = document.querySelector('#boxes');

for (const color of colors) {
	const box = document.createElement('div');
	box.style.background = color;
	box.classList.add('box');
	container.append(box);

	// box.addEventListener('click', function() {
	// 	printColor(box);
	// });
	box.addEventListener('click', changeColor);
}
