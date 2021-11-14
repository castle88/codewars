// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110

// For any given binary number,formatted as a string, return the Ones' Complement of that number.


function onesComplement(n) {
	let arr = n.split('')
	return arr.map(x => {
		if(x === '0') return '1'
		return '0'
	}).join('')
};

console.log(onesComplement("0"))		// "1"
console.log(onesComplement("1"))		// "0"
console.log(onesComplement("01"))		// "10"
console.log(onesComplement("10"))		// "01"
console.log(onesComplement("1101"))		// "0010"