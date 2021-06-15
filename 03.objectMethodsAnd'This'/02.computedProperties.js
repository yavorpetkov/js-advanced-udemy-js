const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// computed properties
const team = {
	[role]: person,
	[role2]: person2
};

// without computed
function addProp(obj, key, value) {
	const copy = { ...obj };
	copy[key] = value;
	return copy;
}

// with computed
const addProp2 = (obj, k, v) => ({ ...obj, [k]: v });
// const addProp2 = (obj, k, v) => {
// 	return { ...obj, [k]: v };
// };

const res = addProp2(team, 'happy', ':)');
console.log(res);
