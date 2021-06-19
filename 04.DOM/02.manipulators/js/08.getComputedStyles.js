const computedLi = document.querySelector('li');
// returns an Object - css style declaration
const style = getComputedStyle(computedLi);
style.color;
// returns an rgb value
computedLi.style.color = 'blue';
style.color;
// returns rgb(0,0,255)
style.fontSize;
// 20px
