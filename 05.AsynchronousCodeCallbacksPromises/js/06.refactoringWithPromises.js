const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			} else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

moveX(btn, 50, 500)
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => moveX(btn, 50, 500))
	.then(() => console.log('YOU DID IT'))
	.catch(({ bodyBoundary, amount, elRight }) => {
		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});
