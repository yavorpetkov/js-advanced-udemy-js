const btn = document.querySelector('.on-click');
const btn2 = document.querySelector('.second-click');

// onclick
btn.onclick = () => {
	console.dir(btn2.innerHTML);
};

// addEventListener
btn.addEventListener('click', function() {
	alert('clicked');
});
// mouseover
btn2.addEventListener('mouseover', function() {
	btn2.innerHTML = 'dont touch me';
});
// mouseout
btn2.addEventListener('mouseout', function() {
	btn2.innerHTML = 'Click MEEEE';
});
window.addEventListener('scroll', function() {
	console.log('stop SCROLLING!!');
});
