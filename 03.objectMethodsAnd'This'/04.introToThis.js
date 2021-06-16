// THIS is a reference to the currnet execution scope
//
function sayHi() {
	console.log('HI!');
	// THIS refers to the window(global scope oject in the browser)
	console.log(this);
}
sayHi();

const person = {
	first: 'Cherily',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		//In a method THIS refers to the object the method lives in
		const { first, last, nickName } = this;
		return `${first} "${nickName}" ${last} `;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	},
	laugh: () => {
		//Arrow functions don't get their own this
		console.log(this);
		console.log(`${this.nickName} says HAHAHAHAH`);
	}
};

// INVOCATION CONTEXT
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object
