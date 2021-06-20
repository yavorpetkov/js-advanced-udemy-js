const firstToDo = document.querySelector('#todos .todo');
// not ideal like this
// firstToDo.style.color = 'gray';
// firstToDo.style.textDecoration = 'line-through';
// firstToDo.style.opacity = '50%';

// more ideal to create a class in css and use that
firstToDo.setAttribute('class', 'todo done');
//  but that todo lost the todo class

firstToDo.classList;
// object representation shows all the classes

firstToDo.classList.add('done');
// adds a class

firstToDo.classList.remove('done');
// removes a class

firstToDo.classList.toggle('done');
// if its there remove it / if its not there add it
// returns true when adding and false whene removing
