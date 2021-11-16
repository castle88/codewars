// Make a function factorial

function factorial(n){
	let answer = 1
	for(let i = 1; i <= n; i++){
		answer *= i
	}
	return answer
}

console.log(factorial(0))		//  1
console.log(factorial(1))		//  1
console.log(factorial(4))		//  24
console.log(factorial(7))		//  5040
console.log(factorial(17))		//  355687428096000