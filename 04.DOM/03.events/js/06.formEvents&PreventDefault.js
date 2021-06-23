const form = document.querySelector('#signup-form');

const credditCard = document.querySelector('#cc');
const termsCheck = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
form.addEventListener('submit', function(e) {
	console.log('cc', credditCard.value);
	console.log('terms', termsCheck.checked);
	console.log('veggies', veggieSelect.value);
	e.preventDefault();
});
