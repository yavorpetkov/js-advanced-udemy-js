const btn = document.querySelector('button');

// too many nested items
// setTimeout(() => {
// 	btn.style.transform = 'translateX(100px)';
// 	setTimeout(() => {
// 		btn.style.transform = 'translateX(200px)';
// 		setTimeout(() => {
// 			btn.style.transform = 'translateX(300px)';
// 			setTimeout(() => {
// 				btn.style.transform = 'translateX(400px)';
// 				setTimeout(() => {
// 					btn.style.transform = 'translateX(500px)';
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

//This function moves an element a set number of pixels after a delay.
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		// getBoundingClientRect - returns an object like this:
		// bottom: 81.87500190734863
		// height: 21.33333396911621
		// left: 508
		// right: 582.5416717529297
		// top: 60.54166793823242
		// width: 74.54167175292969
		// x: 508
		// y: 60.54166793823242
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			onFailure();
		} else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			onSuccess();
		}
	}, delay);
};
//If the element stays on screen we move it and call the onSuccess callback function
//If the element moves off screen we do not move it and instead call the onFailure callback

// moveX(btn, 100, 1000, () => {
// 	moveX(btn, 100, 1000, () => {
// 		moveX(btn, 100, 1000, () => {
// 			moveX(btn, 100, 1000, () => {
// 				moveX(btn, 100, 1000);
// 			});
// 		});
// 	});
// });

moveX(
	btn,
	50,
	500,
	() => {
		//success
		moveX(
			btn,
			50,
			500,
			() => {
				//success
				moveX(
					btn,
					50,
					500,
					() => {
						//success
						moveX(
							btn,
							50,
							500,
							() => {
								//success
								moveX(
									btn,
									50,
									500,
									() => {
										//success
										console.log('YOU HAVE A WIDE SCREEN!');
									},
									() => {
										//failure
										console.log('CANNOT MOVE FURTHER!');
									}
								);
							},
							() => {
								//failure
								console.log('CANNOT MOVE FURTHER!');
							}
						);
					},
					() => {
						//failure callback
						console.log('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				console.log('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		console.log('CANNOT MOVE FURTHER!');
	}
);
