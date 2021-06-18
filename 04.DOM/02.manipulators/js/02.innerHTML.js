const form = document.querySelector('form');
// gives back the text inside the tags and the tags themselves
form.innerHTML;
//"
//<input type="text" placeholder="Bear Name">
// <input type="password" placeholder="password">
// <input type="submit">
// "
const ul = document.querySelector('ul');
ul.innerText;

// "First Thing
// Second Thing
// Third Thing"

const h1 = document.querySelector('h1');
h1.innerHTML += 'is Cool';
h1.innerHTML += '<b>!!!</b>';
