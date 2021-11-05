// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// More examples in test cases. Good luck!

// Please also try:

// Simple time difference

// Simple remove duplicates

function solve(s){
	let arr = s.split('')
	let upper = arr.filter(x => x === x.toUpperCase()).length
	let lower = arr.filter(x => x === x.toLowerCase()).length
	if(upper > lower) return s.toUpperCase()
	if(lower >= upper) return s.toLowerCase()
}


console.log(solve("code"))	// "code"
console.log(solve("CODe"))	// "CODE"
console.log(solve("COde"))	// "code"
console.log(solve("Code"))	// "code"