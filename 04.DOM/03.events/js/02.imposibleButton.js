const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	const h = Math.floor(Math.random() * window.innerHeight);
	const w = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${w}px`;
	btn.style.top = `${h}px`;
});

btn.addEventListener('click', function() {
	btn.innerText = 'You got me';
	document.body.style.background = 'green';
});
