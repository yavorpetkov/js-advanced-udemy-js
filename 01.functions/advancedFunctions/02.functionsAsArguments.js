function callThreeTimes(func) {
	func();
	func();
	func();
}

function cry() {
	console.log("BOO HOO I'M SOO SAD!");
}
function rage() {
	console.log('I HATE EVERYTHING');
}
callThreeTimes(rage);

function RepeatNTimes(action, num) {
	for (let i = 0; i < num; i++) {
		action();
	}
}
RepeatNTimes(cry, 4);

function pickOne(func1, func2) {
	let random = Math.random();
	console.log(random);
	if (random < 0.5) {
		func1();
	} else {
		func2();
	}
}
pickOne(cry, rage);
