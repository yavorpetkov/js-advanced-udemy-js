const firstLi = document.querySelector('li');

// getting the parent element
firstLi.parentElement;
// ul
firstLi.parentElement.parentElement;
// body
firstLi.parentElement.parentElement.parentElement;
// html
firstLi.parentElement.parentElement.parentElement.parentElement;
// null

// getting the childer elements
const secondUl = document.querySelector('ul');
// array like object and contains the children of the ul
secondUl.children;
secondUl.children[0];
// <li class="special">First Thing</li>
secondUl.children[0].innerText;
// First Thing

// getting sibling
firstLi.nextElementSibling;
// <li>Second Thing</li>
const thirdLi = firstLi.nextElementSibling.nextElementSibling;
// <li class="special">Third Thing</li>
thirdLi.previousElementSibling;
// <li>Second Thing</li>
