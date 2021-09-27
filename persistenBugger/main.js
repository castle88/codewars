//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digits

// I think recursion is the gatcha on this problem
// I want to split the num parameter into an arry of individual digits
// Then I want to multiply those digits together and return a value to be passed back into the function
// Probably will need a conditional to check the length of the array of digits
// Might need an incrementor variable to track the number of times the paramtere must be reduced

// function properly reduces num
// need to figure out how to count number of times function runs
// declaring incrementor has been getting redeclared to initial value 


//recursive attempt

function persistence(num) {
   const arr = num.toString().split('')
   
   if(arr.length > 1){ 
	answer++
	const reduced = arr.reduce((a,b)=>Number(a)*Number(b))
	console.log(`reduced: ${reduced}`)
	console.log(`answer: ${answer}`)
	persistence(reduced)
   }
}
let answer = 0

//iterative attempt

// function persistence(num){
// 	let answer = num.toString().split('')
// 	for(let i = 0; i < answer.length; i++){
		
// 	}
// }


console.log(persistence(999))  // 4
//console.log(persistence(4))    // 0
//console.log(persistence(25))   // 2
//console.log(persistence(39))   // 3