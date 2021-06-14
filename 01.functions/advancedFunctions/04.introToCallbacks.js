function grump() {
	alert('WHY DID YOU CLICK ME!!??');
}

const btn = document.querySelector('button');
btn.addEventListener('click', grump);

// CAN ALSO BE DONE WITH AN ANONYMOUS FUNCTION
//
// btn.addEventListener('click', function() {
// 	alert('BARK BARK');
// });
