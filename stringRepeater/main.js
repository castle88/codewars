//Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  let answer = []	// declare empty array for pushing provided string to join later
  for(let i = 0; i<n;i++){
	answer.push(s)	// push string to arry
  }
  return answer.join('')	// join elements of array into one string
}


console.log(repeatStr(2, "ha "))	// 'ha ha '
console.log(repeatStr(5, "#"))	// '#####'
console.log(repeatStr(3, "*"))	// '***'

//optimal solution

//  function repeatStr (n, s) {
//    return s.repeat(n);
//  }


// look into repeat method