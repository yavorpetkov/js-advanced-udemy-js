const inputs = document.querySelectorAll('input');
inputs[0].value;
// the text input
inputs[1].value;
// the password input
inputs[2].value;
// this value is 'on' even if not checked but
inputs[2].checked;
// here it will be a true or false value
inputs[3].value;
// returns a number between min and max value
inputs[4].value;

// with .placeholder you can retrieve the placeholder name or change it
inputs[1].placeholder = 'maybe not password';

// href attribute
const a = document.querySelector('a');
a.href = 'http://www.google.com';

// src attribute
const img = document.querySelector('img');
img.src = 'https://source.unsplash.com/weekly';
