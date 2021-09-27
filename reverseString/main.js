//  Complete the solution so that it reverses the string passed into it. 

function solution(str){
  return str.split('').reverse().join('')	// split string into array of each character, reverse that array, join each character backtogether into one string
}


console.log(solution('world'))	// dlrow
console.log(solution('hello'))	// olleh
console.log(solution('h'))	// h