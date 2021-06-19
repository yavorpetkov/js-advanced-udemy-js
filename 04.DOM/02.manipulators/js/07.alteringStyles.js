const secondth1 = document.querySelector('h1');
// .style gives back a big object but does not return existing styles
h1.style;
h1.style.color;
// returns nothing
h1.style.color = 'orchid';

const parag = document.querySelector('p');
parag.style.background = '#333';
parag.style.color = '#fff';
parag.style.padding = '1rem';

const secondPar = parag.nextElementSibling;
secondPar.style.fontSize = 'x-large';

const liStyles = document.querySelectorAll('li');
const colors = [ 'red', 'orange', 'yellow', 'green', 'blue' ];
// for (let i = 0; i < liStyles.length; i++) {
//    liStyles[i].style.background = `${colors[i]}`

// }
liStyles.forEach((li, i) => {
	const color = colors[i];
	li.style.background = color;
});
