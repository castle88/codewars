// It's 9 time!

// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

// Note: n will always be a positive integer.



// return the number of 9's used to count out 1 to n
function number9(n){
	const numArr = []
	for (let i = 1; i <= n; i++) {
		const stringI = String(i).split('').filter(x => x === '9')
		numArr.push(...stringI)
	}
	console.log(numArr)
	const onlyNines = numArr.filter(x => x.match('9'))
	console.log(onlyNines.length)
	return onlyNines.length
}












console.log(number9(8))			//should return 0
console.log(number9(9))			//should return 1
console.log(number9(10))		//should return 1
console.log(number9(98)) 		//should return 18
console.log(number9(100)) 		//should return 20