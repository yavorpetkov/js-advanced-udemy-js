// REMOVECHILD()
const lastUL = document.querySelector('section ul');
const removeMe = lastUL.querySelector('.special');
// removeChild removes it from the html but can be saved to a variable
const deleted = lastUL.removeChild(removeMe);
// returns the list item as an object

// REMOVE()
const topH1 = document.querySelector('h1');
// removes it easier but does not work in IE
topH1.remove();
