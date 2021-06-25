// A promise is an object representing the eventual completion or failure of an async op
const GetADog = new Promise((resolve, reject) => {
	const rand = Math.trunc(Math.random() * 10 + 1);
	if (rand < 5) {
		resolve();
	} else {
		reject();
	}
});
GetADog.then(() => {
	console.log('YAY WE GOT A DOG!!!!');
}).catch(() => {
	console.log(':( NO DOG');
});
// GetADog.catch(() => {
// 	console.log(':( NO DOG');
// });
