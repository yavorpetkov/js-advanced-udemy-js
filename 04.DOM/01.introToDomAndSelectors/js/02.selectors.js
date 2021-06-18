// select by ID
// this is an img element
const bearImg = document.getElementById('bear-photo');
// this is a paragraph element
const secondText = document.getElementById('main');
//

// select by Tag Name
// returns a colection witch is an Array Like Object
// gives back the 3 input elements in the html
const inputEl = document.getElementsByTagName('input');
// gives back the 3 paragraph elements in the html
const pEl = document.getElementsByTagName('p');
// gives back an empty collection
const nothingThere = document.getElementsByTagName('h3');
// the array like objects can be made into an array by using spread [...inputEl]
//

// select by Class Name
// returns a colection witch is an Array Like Object like in Tag Name
const mySpecial = document.getElementsByClassName('special');
const firtsPar = document.getElementsByClassName('text');

// searching only inside of a specific element
const ul = document.getElementsByTagName('ul')[0];
// returns only the two list elements with the 'special' class
ul.getElementsByClassName('special');
//

// querySelector
// css like selector
// returns a single element
const h1 = document.querySelector('h1');
// returns the first element
const firtsP = document.querySelector('p');
// gets the Id'main'
document.querySelector('#main');
// gets the class'text'
document.querySelector('.text');
// returns a Array Like Object - NodeList
document.querySelectorAll('input');
