/*const phoneNumber = '123-45-100';

function removeHyphens(str){
	return str.replace(/-/g, '');
}

console.log(removeHyphens(phoneNumber))*/

const phoneNumber = [
	'125.456.789',
	'178-26-78',
	'324 4587 67'
];

let senitize = (a) => {
	return a.map((str) => {
		return str.replace(/[ .-]/g, '');
	});
}

console.log(senitize(phoneNumber));

// link : regexr.com