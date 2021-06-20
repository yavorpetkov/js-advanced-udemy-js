// append child adds an element to a parent
const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');

newLI.innerText = 'I AM A NEW LI';
// adds the element at the end
parentUL.appendChild(newLI);

const firstLI = document.querySelector('li.todo');
// first select the thing you want to insert then the element to insert in before
parentUL.insertBefore(newLI, firstLI);

const lastTodo = document.querySelectorAll('li.todo');
parentUL.insertBefore(newLI, lastTodo[2]);
//
//
// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->
//
// inserts an element at these specific places
const iTag = document.createElement('i');
iTag.innerText = 'I AM ITALICS!!!';
const firstPar = document.querySelector('p');
firstPar.insertAdjacentElement('beforebegin', iTag);
firstPar.insertAdjacentElement('afterbegin', iTag);
firstPar.insertAdjacentElement('beforeend', iTag);
firstPar.insertAdjacentElement('afterend', iTag);

// can add multiple things to the end of the parrent element
firstPar.append(iTag, newLI);
// can add multiple things to the begining of the parrent element
firstPar.prepend(iTag, newLI);
