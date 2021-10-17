// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
  let arr = n.toString().split('')
  let answer = arr.reverse().map(x=>{
	return Number(x)
  })
  return answer
}


console.log(digitize(35231))			// [1,3,2,5,3]