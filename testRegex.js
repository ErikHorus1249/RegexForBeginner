
const phoneNumberRegex = /^0[13]\d{7}$/;


function check (a) {
	if(phoneNumberRegex.test(a)) return 'Ok';
	return "not OK";
}

console.log(check('015822877'));
