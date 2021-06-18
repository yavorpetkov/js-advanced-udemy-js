const textThing = document.querySelector('#smtBCT');
// creating an image
const myImg = document.createElement('img');
// giving that image a source
myImg.src = 'https://source.unsplash.com/daily';
// putting that image in the body
document.body.append(myImg);
myImg.style.width = '200px';
myImg.style.transition = 'all 2s';

const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [ sheet ];

// to sellect all ellents in the body
const allEls = document.body.children;

setInterval(() => {
	for (const el of allEls) {
		const rotation = Math.floor(Math.random() * 360);
		const x = Math.floor(document.body.clientWidth * Math.random());
		const y = Math.floor(document.body.clientHeight * Math.random());
		el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
	}
}, 2000);
