const newH2 = document.createElement('h2');
newH2.innerText = 'wooooow';
newH2.classList.add('special');

// to get it to show in the browser
// aways adds it at the end
const section = document.querySelector('section');
// adds it as a child to the apended element
section.append(newH2);

const newImg = document.createElement('img');
newImg.src = 'https://source.unsplash.com/WLUHO9A_xik/1600x900';
const gridSection = document.querySelector('.grid');
newImg.style.width = '500px';
gridSection.append(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz Video!';
newLink.href = 'http://www.google.com';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);
newLink.style.margin = '2rem';
