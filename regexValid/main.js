// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
	if(pin.length === 4 || pin.length === 6){
		return pin.split('').every(x=>parseInt(x)*1==x)
	}else{
		return false
	}
}







console.log(validatePIN("1"))			//false
console.log(validatePIN("12"))			//false
console.log(validatePIN("123"))			//false
console.log(validatePIN("12345"))		//false
console.log(validatePIN("a234"))		//false
console.log(validatePIN("1234"))		//true
console.log(validatePIN("0000"))		//true
console.log(validatePIN("1111"))		//true
