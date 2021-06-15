// this is a reference to the currnet execution scope
function sayHi() {
	console.log('HI!');
	// this refers to the window(global scope oject in the browser)
	console.log(this);
}
sayHi();

const person = {
	first: 'Cherily',
	last: 'Sarkisian',
	nickName: 'Cher',
	fullName() {
		//In a method, this refers to the object the method "lives" in:
		const { first, last, nickName } = this;
		return `${first} "${nickName}" ${last} `;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	}
};

person.printBio();
