const annoyer = {
	phrases: [ 'literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't Stop, Won't Stop" ],
	pickPhrase() {
		const idx = Math.floor(Math.random() * this.phrases.length);
		return this.phrases[idx];
	},
	start() {
		this.timerId = setInterval(() => {
			// arrow functions dont get their own THIS so they get theirs from the parrent
			// in this case the arrow function gets its THIS from start()
			console.log(this.pickPhrase());
		}, 3000);
	},
	stop() {
		clearInterval(this.timerId);
	}
};
annoyer.start();
annoyer.stop();
