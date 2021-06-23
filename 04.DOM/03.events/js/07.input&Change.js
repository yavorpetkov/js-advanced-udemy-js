const credditCard = document.querySelector('#cc');
const termsCheck = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
// one callback for any number of inputs
for (let input of [ credditCard, termsCheck, veggieSelect ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}
// hard-coded in
// credditCard.addEventListener('input', (e) => {
// 	console.log('CC', e);
// 	formData['cc'] = e.target.value;
// });
// termsCheck.addEventListener('input', (e) => {
// 	console.log('check', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });
// veggieSelect.addEventListener('input', (e) => {
// 	console.log('vegie', e);
// 	formData['veggie'] = e.target.value;
// });
