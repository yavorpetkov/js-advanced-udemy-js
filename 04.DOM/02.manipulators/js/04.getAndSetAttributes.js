const range = document.querySelector('input[type="range"]');

// get
range.getAttribute('max');
// 500
range.getAttribute('min');
// 100
range.getAttribute('type');
// range
range.getAttribute('lolo');
// null

// set
range.setAttribute('min', '-500');
// can also change the type of the input
range.setAttribute('type', 'radio');

range.setAttribute('type', 'range');
